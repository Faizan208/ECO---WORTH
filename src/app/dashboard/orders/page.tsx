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

const sampleOrders = [
  {
    id: "ORD-001",
    itemTitle: "Scrap Steel Beams",
    amount: 1750,
    date: "2024-07-19",
    status: "picked_up",
  },
  {
    id: "ORD-002",
    itemTitle: "Aluminum Cans",
    amount: 500,
    date: "2024-07-12",
    status: "delivered",
  },
  {
    id: "ORD-003",
    itemTitle: "HDPE Drums",
    amount: 800,
    date: "2024-07-21",
    status: "confirmed",
  },
];

export default function OrdersPage() {
  return (
    <div className="space-y-8 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">My Orders</h1>
        <p className="text-muted-foreground">Track your confirmed purchases and sales.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
          <CardDescription>
            A summary of all your transactions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sampleOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-sm">{order.id}</TableCell>
                    <TableCell className="font-medium">{order.itemTitle}</TableCell>
                    <TableCell className="text-right">${order.amount.toLocaleString()}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "delivered"
                            ? "default"
                            : order.status === "confirmed"
                              ? "secondary"
                              : "outline"
                        }
                        className={order.status === "delivered" ? "bg-primary text-primary-foreground" : ""}
                      >
                        {order.status.replace("_", " ")}
                      </Badge>
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
