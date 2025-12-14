"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { handleEsgReportGeneration } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Loader, Bot } from "lucide-react";
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
      {pending ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      Generate Snippet
    </Button>
  );
}

export default function EsgReportGenerator() {
  const [state, formAction] = useActionState(handleEsgReportGeneration, initialState);
  const { toast } = useToast();

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
          <CardTitle>Waste Data</CardTitle>
          <CardDescription>Provide details about a recent waste transaction.</CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wasteDescription">Waste Description</Label>
              <Textarea id="wasteDescription" name="wasteDescription" placeholder="e.g., Baled PET plastic bottles from manufacturing line" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wasteType">Waste Type</Label>
                <Input id="wasteType" name="wasteType" placeholder="Plastic" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weightKg">Weight (kg)</Label>
                <Input id="weightKg" name="weightKg" type="number" placeholder="1200" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="Lahore, Pakistan" />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated ESG Snippet</CardTitle>
          <CardDescription>The AI-generated text for your report will appear here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex h-full min-h-[300px] flex-col rounded-lg border-2 border-dashed border-border bg-muted/50 p-6">
            {state.data ? (
              <p className="text-sm text-foreground whitespace-pre-wrap">{state.data.reportSnippet}</p>
            ) : (
              <div className="m-auto text-center">
                <FileText className="mx-auto h-16 w-16 text-muted-foreground" />
                <p className="mt-4 font-semibold">Awaiting Data</p>
                <p className="mt-1 text-sm text-muted-foreground">Submit waste details to generate the report snippet.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
