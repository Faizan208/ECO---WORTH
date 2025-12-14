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

const sampleBids = [
  {
    id: "1",
    itemTitle: "PET Bottles - Baled",
    bidAmount: 350,
    date: "2024-07-20",
    status: "pending",
  },
  {
    id: "2",
    itemTitle: "Scrap Steel Beams",
    bidAmount: 1750,
    date: "2024-07-18",
    status: "accepted",
  },
  {
    id: "3",
    itemTitle: "Copper Wiring",
    bidAmount: 2000,
    date: "2024-07-15",
    status: "rejected",
  },
];

export default function BidsPage() {
  return (
    <div className="space-y-8 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">My Bids</h1>
        <p className="text-muted-foreground">Track the status of your bids on marketplace items.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bid History</CardTitle>
          <CardDescription>
            A summary of your recent bidding activity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Waste Item</TableHead>
                <TableHead className="text-right">Your Bid</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleBids.map((bid) => (
                <TableRow key={bid.id}>
                  <TableCell className="font-medium">{bid.itemTitle}</TableCell>
                  <TableCell className="text-right">${bid.bidAmount.toLocaleString()}</TableCell>
                  <TableCell>{bid.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        bid.status === "accepted"
                          ? "default"
                          : bid.status === "rejected"
                            ? "destructive"
                            : "secondary"
                      }
                      className={bid.status === "accepted" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {bid.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
