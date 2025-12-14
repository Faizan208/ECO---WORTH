import WasteUploadForm from "@/components/dashboard/WasteUploadForm";

export default function UploadWastePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">List New Waste</h1>
        <p className="text-muted-foreground">
          Upload an image of your waste material to get an AI-powered valuation and list it on the marketplace.
        </p>
      </div>
      <WasteUploadForm />
    </div>
  );
}
