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

const sampleTransactions = [
  {
    id: "TRN-001",
    orderId: "ORD-001",
    type: "commission",
    amount: 87.50,
    date: "2024-07-19",
    status: "completed",
  },
  {
    id: "TRN-002",
    orderId: "ORD-002",
    type: "commission",
    amount: 25.00,
    date: "2024-07-12",
    status: "completed",
  },
  {
    id: "TRN-003",
    orderId: "CERT-001",
    type: "certification_fee",
    amount: 50.00,
    date: "2024-07-15",
    status: "completed",
  },
  {
    id: "TRN-004",
    orderId: "SUB-001",
    type: "subscription",
    amount: 199.00,
    date: "2024-07-01",
    status: "completed",
  },
];

export default function AdminTransactionsPage() {
  return (
    <div className="space-y-8 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Platform Transactions</h1>
        <p className="text-muted-foreground">Oversee all financial transactions on EcoWorth.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>
            A log of all commissions, fees, and subscriptions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Related ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-mono text-sm">{tx.id}</TableCell>
                  <TableCell className="font-mono text-sm">{tx.orderId}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{tx.type}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">${tx.amount.toFixed(2)}</TableCell>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>
                    <Badge>{tx.status}</Badge>
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
