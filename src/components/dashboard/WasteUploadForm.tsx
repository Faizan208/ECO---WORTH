"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import Image from "next/image";
import { handleWasteAnalysis } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Cpu, Loader, TrendingUp, FlaskConical, CheckCircle, Package } from "lucide-react";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Cpu className="mr-2 h-4 w-4" />}
      Analyze Waste
    </Button>
  );
}

export default function WasteUploadForm() {
  const [state, formAction] = useActionState(handleWasteAnalysis, initialState);
  const { toast } = useToast();
  const previewImage = PlaceHolderImages.find((p) => p.id === "waste-upload-preview");

  useEffect(() => {
    if (state.message && !state.error) {
      toast({
        title: "Success",
        description: state.message,
      });
    } else if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Waste Details</CardTitle>
          <CardDescription>Provide an image and basic information about the waste material.</CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image-upload">Waste Image</Label>
               <div className="relative h-64 w-full rounded-md border border-dashed flex items-center justify-center bg-muted/50">
                  {previewImage && (
                    <Image src={previewImage.imageUrl} alt="Waste preview" fill className="object-cover rounded-md opacity-50" />
                  )}
                  <div className="text-center z-10 p-4">
                    <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Image upload is simulated. An example URL is used.</p>
                  </div>
              </div>
              <Input id="image-upload" name="imageUrl" type="hidden" defaultValue={previewImage?.imageUrl} />
               <p className="text-xs text-muted-foreground pt-2">Note: For this MVP, we use a placeholder image URL for analysis. In a real application, you would upload a file here.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="waste-type">Reported Waste Type (Optional)</Label>
              <Input id="waste-type" name="wasteType" placeholder="e.g., Mixed Plastic" />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Analysis Results</CardTitle>
          <CardDescription>The results from our AI valuation will appear here.</CardDescription>
        </CardHeader>
        <CardContent>
          {state.data ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
                <CheckCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Identified Waste Type</p>
                  <p className="font-semibold text-lg">{state.data.waste_type} ({Math.round(state.data.confidence * 100)}% confidence)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Predicted Price</p>
                  <p className="font-semibold text-lg">${state.data.predicted_price_per_kg.toFixed(2)} / kg</p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-4">
                 <div className="flex items-center gap-4">
                    <FlaskConical className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Contamination Score</p>
                      <p className="font-semibold text-lg">{Math.round(state.data.contamination_score * 100)}%</p>
                    </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Detected Objects: {state.data.detected_objects.join(", ")}</p>
                <p className="text-xs text-muted-foreground mt-1">Model: {state.data.model_version}</p>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 p-8 text-center">
              <Cpu className="h-16 w-16 text-muted-foreground" />
              <p className="mt-4 font-semibold">Awaiting Analysis</p>
              <p className="mt-1 text-sm text-muted-foreground">Submit waste details to see the AI valuation.</p>
            </div>
          )}
        </CardContent>
         {state.data && (
            <CardFooter>
                <Button className="w-full font-bold">List on Marketplace</Button>
            </CardFooter>
         )}
      </Card>
    </div>
  );
}
