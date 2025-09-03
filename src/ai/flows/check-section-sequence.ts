'use server';

/**
 * @fileOverview Checks if the sections in a document are in the standard academic sequence using AI.
 *
 * - checkSectionSequence - A function that checks the sequence of sections.
 * - CheckSectionSequenceInput - The input type for the checkSectionSequence function.
 * - CheckSectionSequenceOutput - The return type for the checkSectionSequence function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CheckSectionSequenceInputSchema = z.array(
  z.string().describe('A section of the document.')
).describe('An array of document sections.');

export type CheckSectionSequenceInput = z.infer<typeof CheckSectionSequenceInputSchema>;

const CheckSectionSequenceOutputSchema = z.array(
  z.object({
    section: z.string().describe('The section of the document.'),
    isCorrectSequence: z.boolean().describe('Whether the section is in the correct sequence.'),
  })
).describe('An array of sections with their sequence correctness status.');

export type CheckSectionSequenceOutput = z.infer<typeof CheckSectionSequenceOutputSchema>;

export async function checkSectionSequence(input: CheckSectionSequenceInput): Promise<CheckSectionSequenceOutput> {
  return checkSectionSequenceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'checkSectionSequencePrompt',
  input: {schema: CheckSectionSequenceInputSchema},
  output: {schema: CheckSectionSequenceOutputSchema},
  prompt: `You are an expert in academic document structure.
  You will receive a list of sections from a document and determine if they are in the correct order.
  The standard academic sequence is: Title, Abstract, Introduction, Literature Review, Methodology, Analysis and Findings, Discussion, Conclusion, Recommendations, References, Appendices.
  Return an array of objects, where each object contains the section and a boolean indicating if it is in the correct sequence.

  Sections: {{{sections}}}
  `,
});

const checkSectionSequenceFlow = ai.defineFlow(
  {
    name: 'checkSectionSequenceFlow',
    inputSchema: CheckSectionSequenceInputSchema,
    outputSchema: CheckSectionSequenceOutputSchema,
  },
  async input => {
    const sections = input;
    const {output} = await prompt({sections});
    return output!;
  }
);
