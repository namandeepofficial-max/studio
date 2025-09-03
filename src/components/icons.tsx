import {
  BookText,
  ScrollText,
  DoorOpen,
  Library,
  FlaskConical,
  BarChart3,
  MessageSquare,
  Flag,
  Lightbulb,
  Quote,
  Paperclip,
  FileText,
  type LucideIcon,
} from 'lucide-react';

export const sectionIcons: Record<string, LucideIcon> = {
  title: BookText,
  abstract: ScrollText,
  introduction: DoorOpen,
  'literature review': Library,
  methodology: FlaskConical,
  'analysis and findings': BarChart3,
  discussion: MessageSquare,
  conclusion: Flag,
  recommendations: Lightbulb,
  references: Quote,
  appendices: Paperclip,
  default: FileText,
};

interface SectionIconProps {
  type: string | undefined;
  className?: string;
}

export function SectionIcon({ type, className }: SectionIconProps) {
  // Try to find a matching icon by checking if the normalized type is a substring of any key
  const normalizedType = (type || 'default').toLowerCase();
  
  let Icon = sectionIcons.default;
  for (const key in sectionIcons) {
    if (normalizedType.includes(key)) {
      Icon = sectionIcons[key];
      break;
    }
  }

  // Fallback for keys that might contain the type string, e.g. "analysis" in "analysis and findings"
  if (Icon === sectionIcons.default) {
    const foundKey = Object.keys(sectionIcons).find(key => key.includes(normalizedType));
    if (foundKey) {
        Icon = sectionIcons[foundKey];
    }
  }


  return <Icon className={className} />;
}
