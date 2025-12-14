import WasteUploadForm from "@/components/dashboard/WasteUploadForm";

export default function UploadPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold font-headline">List New Waste</h1>
                <p className="text-muted-foreground">Upload an image of your industrial waste. Our Gemini AI will analyze its composition, estimate weight, and suggest a market price.</p>
            </div>
            <WasteUploadForm />
        </div>
    )
}
