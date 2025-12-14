import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

const sampleCertificates = [
  {
    id: "CERT-001",
    orderId: "ORD-002",
    itemTitle: "Aluminum Cans",
    date: "2024-07-15",
    txHash: "0x123...abc",
  },
  {
    id: "CERT-002",
    orderId: "ORD-004",
    itemTitle: "Glass Bottles",
    date: "2024-06-28",
    txHash: "0x456...def",
  },
];

export default function CertificatesPage() {
  return (
    <div className="space-y-8 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Green Certificates</h1>
        <p className="text-muted-foreground">
          View and share your blockchain-verified certificates of responsible disposal.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 w-full">
        {sampleCertificates.map((cert) => (
          <Card key={cert.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{cert.id}</span>
                <span className="text-sm font-normal text-muted-foreground">{cert.date}</span>
              </CardTitle>
              <CardDescription>For Order: {cert.orderId} - {cert.itemTitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Blockchain Tx Hash:</p>
              <p className="font-mono text-sm truncate">{cert.txHash}</p>
            </CardContent>
            <CardContent className="flex gap-2">
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
