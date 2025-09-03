'use server';

/**
 * @fileOverview AI flow to extract structural components from a document.
 *
 * - extractDocumentStructure - Function to extract document structure.
 * - ExtractDocumentStructureInput - Input type for the function.
 * - ExtractDocumentStructureOutput - Output type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractDocumentStructureInputSchema = z.object({
  documentText: z
    .string()
    .describe('The complete text content of the document to analyze.'),
});
export type ExtractDocumentStructureInput = z.infer<
  typeof ExtractDocumentStructureInputSchema
>;

const ExtractDocumentStructureOutputSchema = z.object({
  sections: z.array(
    z.object({
      title: z.string().describe('The title of the section.'),
      content: z.string().describe('The text content of the section.'),
      type: z
        .string()
        .describe(
          'The identified type of section (e.g., Title, Abstract, Introduction, Conclusion).' )  .optional(),
    })
  ).describe('An array of identified sections within the document.'),
});
export type ExtractDocumentStructureOutput = z.infer<
  typeof ExtractDocumentStructureOutputSchema
>;

export async function extractDocumentStructure(
  input: ExtractDocumentStructureInput
): Promise<ExtractDocumentStructureOutput> {
  return extractDocumentStructureFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractDocumentStructurePrompt',
  input: {schema: ExtractDocumentStructureInputSchema},
  output: {schema: ExtractDocumentStructureOutputSchema},
  prompt: `You are an expert document analyst. Your task is to identify and extract the structural components from the given document text.

Analyze the document and identify sections such as Title, Abstract, Introduction, Literature Review, Methodology, Analysis and Findings, Discussion, Conclusion, Recommendations, References, and Appendices.

For each identified section, extract its title and content.  If you are unsure of the section ` + `type, leave it blank.

Return the extracted sections in a JSON array.

Document Text:
{{{documentText}}}`, // Backtick here because it includes a quote.
});

const extractDocumentStructureFlow = ai.defineFlow(
  {
    name: 'extractDocumentStructureFlow',
    inputSchema: ExtractDocumentStructureInputSchema,
    outputSchema: ExtractDocumentStructureOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
