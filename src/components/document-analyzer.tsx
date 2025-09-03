"use client";

import { useState } from 'react';
import type {
  ExtractDocumentStructureOutput,
} from '@/ai/flows/extract-document-structure';
import { extractDocumentStructure } from '@/ai/flows/extract-document-structure';
import type {
  CheckSectionSequenceOutput,
} from '@/ai/flows/check-section-sequence';
import { checkSectionSequence } from '@/ai/flows/check-section-sequence';

import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { SectionIcon } from './icons';
import {
  AlertCircle,
  Download,
  FileText,
  Loader2,
  Sparkles,
  ArrowLeft,
  BookOpenCheck,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

type Section = ExtractDocumentStructureOutput['sections'][0];
type SequenceCheck = CheckSectionSequenceOutput[0];

const placeholderText = `Title: The Impact of Artificial Intelligence on Academic Research Methodologies

Abstract: This paper explores the transformative impact of artificial intelligence (AI) on academic research methodologies. It examines how AI tools and techniques are reshaping data collection, analysis, and interpretation across various disciplines.

Introduction: The advent of AI has introduced a paradigm shift in the academic world. This section provides an overview of the growing importance of AI in research and outlines the structure of this paper.
`;

export function DocumentAnalyzer() {
  const [documentText, setDocumentText] = useState<string>(placeholderText);
  const [sections, setSections] = useState<Section[] | null>(null);
  const [sequenceStatus, setSequenceStatus] = useState<SequenceCheck[] | null>(
    null
  );
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    setIsLoading(true);
    try {
      const extracted = await extractDocumentStructure({ documentText });
      if (!extracted || !extracted.sections || extracted.sections.length === 0) {
        toast({
          variant: 'destructive',
          title: 'Analysis Failed',
          description:
            'Could not extract any sections from the document. Please try again with a different text.',
        });
        setIsLoading(false);
        return;
      }

      setSections(extracted.sections);
      setSelectedSection(extracted.sections[0]);

      const sectionTitles = extracted.sections.map((s) => s.type || s.title);
      const sequence = await checkSectionSequence(sectionTitles);
      setSequenceStatus(sequence);
    } catch (error) {
      console.error('Analysis failed:', error);
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description:
          'Failed to analyze the document. Please check the console for more details.',
      });
      setSections(null);
      setSequenceStatus(null);
    }
    setIsLoading(false);
  };

  const handleDownload = (section: Section) => {
    const blob = new Blob(
      [section.title + '\n\n' + section.content],
      {
        type: 'text/plain;charset=utf-8',
      }
    );
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${section.title.replace(/ /g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setSections(null);
    setSequenceStatus(null);
    setSelectedSection(null);
    setDocumentText(placeholderText);
  };

  if (!sections) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BookOpenCheck className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl font-bold">EVIDECIA FLOW</CardTitle>
            <CardDescription className="text-md">
              Paste your document below to analyze its structure and sequence
              using AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={documentText}
              onChange={(e) => setDocumentText(e.target.value)}
              placeholder="Paste your document here..."
              className="min-h-[250px] resize-y text-sm"
            />
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleAnalyze}
              disabled={isLoading || !documentText.trim()}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Sparkles />
              )}
              <span>{isLoading ? 'Analyzing...' : 'Analyze Document'}</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <BookOpenCheck className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-semibold tracking-tight">
              EVIDECIA FLOW
            </h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {sections.map((section, index) => {
              const sequenceInfo = sequenceStatus
                ? sequenceStatus.find((s) => s.section === (section.type || section.title))
                : null;

              return (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    onClick={() => setSelectedSection(section)}
                    isActive={selectedSection?.title === section.title}
                    tooltip={{ children: section.title, side: 'right' }}
                    className="justify-start"
                  >
                    <SectionIcon type={section.type || section.title} />
                    <span>{section.title}</span>
                    {sequenceInfo && !sequenceInfo.isCorrectSequence && (
                      <AlertCircle className="ml-auto h-4 w-4 text-destructive" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <Button variant="ghost" onClick={reset}>
            <FileText />
            <span>Analyze New Document</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        {selectedSection ? (
          <div
            key={selectedSection.title}
            className="h-full animate-in fade-in-50 duration-500"
          >
            <Card className="flex h-full flex-col rounded-none border-0 md:rounded-xl md:border">
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <CardTitle className="text-2xl">
                    {selectedSection.title}
                  </CardTitle>
                  {selectedSection.type && (
                    <CardDescription>
                      Section Type: {selectedSection.type}
                    </CardDescription>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload(selectedSection)}
                >
                  <Download />
                  <span className="hidden md:inline">Download</span>
                </Button>
              </CardHeader>
              <CardContent className="flex-grow">
                <ScrollArea className="h-full pr-4">
                  <p className="whitespace-pre-wrap text-base leading-relaxed">
                    {selectedSection.content}
                  </p>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
            <ArrowLeft className="mb-4 h-12 w-12" />
            <h3 className="text-xl font-semibold">Select a Section</h3>
            <p className="mt-2">
              Choose a section from the navigation panel to view its content.
            </p>
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}
