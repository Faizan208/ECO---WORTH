'use server';

/**
 * @fileOverview AI flow for analyzing waste images and estimating their value.
 *
 * - analyzeWasteImage - A function that takes an image of waste and returns its classification and estimated value.
 * - AnalyzeWasteImageInput - The input type for the analyzeWasteImage function.
 * - AnalyzeWasteImageOutput - The return type for the analyzeWasteImage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeWasteImageInputSchema = z.object({
  image_url: z
    .string()
    .describe(
      'URL of the waste image to analyze.'
    ),
  metadata: z.object({
    reported_waste_type: z.string().optional().describe('The waste type reported by the user.'),
  }).optional().describe('Additional metadata about the waste.'),
});
export type AnalyzeWasteImageInput = z.infer<typeof AnalyzeWasteImageInputSchema>;

const AnalyzeWasteImageOutputSchema = z.object({
  waste_type: z.string().describe('The identified type of waste.'),
  confidence: z.number().describe('The confidence score of the waste type identification.'),
  detected_objects: z.array(z.string()).describe('The objects detected in the image.'),
  contamination_score: z.number().describe('The estimated contamination score of the waste.'),
  predicted_price_per_kg: z.number().describe('The predicted price per kilogram of the waste.'),
  model_version: z.string().describe('The version of the AI model used for analysis.'),
  raw_ai_output: z.any().optional().describe('The raw output from the AI model.'),
});
export type AnalyzeWasteImageOutput = z.infer<typeof AnalyzeWasteImageOutputSchema>;

export async function analyzeWasteImage(input: AnalyzeWasteImageInput): Promise<AnalyzeWasteImageOutput> {
  return analyzeWasteImageFlow(input);
}

const analyzeWasteImagePrompt = ai.definePrompt({
  name: 'analyzeWasteImagePrompt',
  input: { schema: AnalyzeWasteImageInputSchema },
  output: { schema: AnalyzeWasteImageOutputSchema },
  prompt: `You are an AI assistant specialized in analyzing waste images and estimating their value.

  Analyze the image at the given URL and provide the following information:

  - waste_type: The identified type of waste.
  - confidence: The confidence score of the waste type identification.
  - detected_objects: The objects detected in the image.
  - contamination_score: The estimated contamination score of the waste.
  - predicted_price_per_kg: The predicted price per kilogram of the waste.
  - model_version: The version of the AI model used for analysis.
  - raw_ai_output: The raw output from the AI model. (Optional)

  Image URL: {{{image_url}}}
  ${(input: any) => input.metadata?.reported_waste_type ? `User Reported Waste Type: ${input.metadata.reported_waste_type}` : ''}

  Return the information in JSON format.
  `,
});

const analyzeWasteImageFlow = ai.defineFlow(
  {
    name: 'analyzeWasteImageFlow',
    inputSchema: AnalyzeWasteImageInputSchema,
    outputSchema: AnalyzeWasteImageOutputSchema,
  },
  async (input: z.infer<typeof AnalyzeWasteImageInputSchema>) => {
    const { output } = await analyzeWasteImagePrompt(input);
    return output!;
  }
);
