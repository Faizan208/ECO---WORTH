import EsgReportGenerator from "@/components/dashboard/EsgReportGenerator";

export default function EsgReportPage() {
  return (
    <div className="space-y-8 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">ESG Report Snippet Generator</h1>
        <p className="text-muted-foreground">
          Generate a concise, AI-powered snippet for your ESG reports based on your waste disposal data.
        </p>
      </div>
      <EsgReportGenerator />
    </div>
  );
}
