import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

const sampleWasteItems = [
  {
    id: "1",
    title: "PET Bottles - Baled",
    type: "Plastic",
    weight: 1200,
    estimatedValue: 360,
    status: "available",
  },
  {
    id: "2",
    title: "Mixed Paper Scraps",
    type: "Paper",
    weight: 850,
    estimatedValue: 60,
    status: "sold",
  },
  {
    id: "3",
    title: "Copper Wiring",
    type: "Metal",
    weight: 300,
    estimatedValue: 2100,
    status: "in_transit",
  },
  {
    id: "4",
    title: "Used Cotton Textiles",
    type: "Textile",
    weight: 500,
    estimatedValue: 75,
    status: "available",
  },
];

export default function WastePage() {
  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">My Waste Listings</h1>
          <p className="text-muted-foreground">Manage your posted waste materials.</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/waste/upload">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Listing
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active and Past Listings</CardTitle>
          <CardDescription>
            A summary of all waste items you have listed on the marketplace.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Weight (kg)</TableHead>
                  <TableHead className="text-right">Est. Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleWasteItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell className="text-right">{item.weight.toLocaleString()}</TableCell>
                    <TableCell className="text-right">${item.estimatedValue.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === "available"
                            ? "default"
                            : item.status === "sold"
                              ? "secondary"
                              : "outline"
                        }
                        className={item.status === "available" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
