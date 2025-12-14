'use server';
/**
 * @fileOverview Generates ESG report snippets for industry users.
 *
 * - generateEsgReportSnippet - A function that generates ESG report snippets.
 * - GenerateEsgReportSnippetInput - The input type for the generateEsgReportSnippet function.
 * - GenerateEsgReportSnippetOutput - The return type for the generateEsgReportSnippet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEsgReportSnippetInputSchema = z.object({
  wasteDescription: z
    .string()
    .describe('Description of the waste material being reported.'),
  wasteType: z.string().describe('Type of waste material.'),
  weightKg: z.number().describe('Weight of the waste material in kilograms.'),
  location: z
    .string()
    .describe('The location where the waste material is generated.'),
});
export type GenerateEsgReportSnippetInput = z.infer<
  typeof GenerateEsgReportSnippetInputSchema
>;

const GenerateEsgReportSnippetOutputSchema = z.object({
  reportSnippet: z
    .string()
    .describe('A snippet of the ESG report based on the waste data.'),
});
export type GenerateEsgReportSnippetOutput = z.infer<
  typeof GenerateEsgReportSnippetOutputSchema
>;

export async function generateEsgReportSnippet(
  input: GenerateEsgReportSnippetInput
): Promise<GenerateEsgReportSnippetOutput> {
  return generateEsgReportSnippetFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEsgReportSnippetPrompt',
  input: {schema: GenerateEsgReportSnippetInputSchema},
  output: {schema: GenerateEsgReportSnippetOutputSchema},
  prompt: `You are an AI assistant that generates Environmental, Social, and Governance (ESG) report snippets based on provided waste data.

  Given the following information about industrial waste, generate a concise and informative snippet suitable for inclusion in an ESG report.

  Waste Description: {{{wasteDescription}}}
  Waste Type: {{{wasteType}}}
  Weight (kg): {{{weightKg}}}
  Location: {{{location}}}

  The snippet should highlight the environmental impact, responsible disposal, and any potential benefits of recycling or reusing the waste material.
  The snippet should be no more than 150 words.
  `,
});

const generateEsgReportSnippetFlow = ai.defineFlow(
  {
    name: 'generateEsgReportSnippetFlow',
    inputSchema: GenerateEsgReportSnippetInputSchema,
    outputSchema: GenerateEsgReportSnippetOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
