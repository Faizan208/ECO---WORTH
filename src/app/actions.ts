"use server";

import { analyzeWasteImage } from "@/ai/flows/analyze-waste-image";
import { generateEsgReportSnippet } from "@/ai/flows/generate-esg-report-snippet";
import type { AnalyzeWasteImageOutput } from "@/ai/flows/analyze-waste-image";
import type { GenerateEsgReportSnippetOutput } from "@/ai/flows/generate-esg-report-snippet";

export async function handleWasteAnalysis(
  prevState: any,
  formData: FormData
): Promise<{ message: string; data: AnalyzeWasteImageOutput | null; error: string | null }> {
  const imageUrl = formData.get("imageUrl") as string;
  const reportedWasteType = formData.get("wasteType") as string;

  // In a real application, you would handle file uploads to a service like S3
  // and get a public URL. For this MVP, we are using a placeholder URL from the form.
  if (!imageUrl) {
    return { message: "Image URL is required.", data: null, error: "Image URL missing" };
  }

  try {
    const result = await analyzeWasteImage({
      image_url: imageUrl,
      metadata: {
        reported_waste_type: reportedWasteType,
      },
    });

    return { message: "Analysis complete.", data: result, error: null };
  } catch (e: any) {
    console.error(e);
    return { message: "Analysis failed.", data: null, error: e.message || "An unknown error occurred." };
  }
}


export async function handleEsgReportGeneration(
  prevState: any,
  formData: FormData
): Promise<{ message: string; data: GenerateEsgReportSnippetOutput | null; error: string | null }> {
    const wasteDescription = formData.get("wasteDescription") as string;
    const wasteType = formData.get("wasteType") as string;
    const weightKg = parseFloat(formData.get("weightKg") as string);
    const location = formData.get("location") as string;

    if (!wasteDescription || !wasteType || isNaN(weightKg) || !location) {
        return { message: "All fields are required.", data: null, error: "Invalid form data" };
    }

    try {
        const result = await generateEsgReportSnippet({
            wasteDescription,
            wasteType,
            weightKg,
            location
        });

        return { message: "Report snippet generated.", data: result, error: null };
    } catch (e: any) {
        console.error(e);
        return { message: "Generation failed.", data: null, error: e.message || "An unknown error occurred." };
    }
}
