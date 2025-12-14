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
import { Button } from "@/components/ui/button";

const sampleUsers = [
  {
    id: "1",
    companyName: "Lahore Plastics Inc.",
    email: "contact@lhrplastics.com",
    role: "industry",
    status: "pending",
  },
  {
    id: "2",
    companyName: "Recycle Co.",
    email: "manager@recycleco.pk",
    role: "recycler",
    status: "pending",
  },
  {
    id: "3",
    companyName: "Karachi Steel Mill",
    email: "procurement@ksteel.com",
    role: "industry",
    status: "approved",
  },
  {
    id: "4",
    companyName: "Green Pakistan Recyclers",
    email: "info@greenpak.org",
    role: "recycler",
    status: "approved",
  },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-8 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">User Management</h1>
        <p className="text-muted-foreground">Approve new users and manage existing accounts.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User List</CardTitle>
          <CardDescription>
            View all registered users and their approval status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.companyName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === "approved" ? "default" : "secondary"}
                      className={user.status === "approved" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {user.status === "pending" && (
                      <Button size="sm">Approve</Button>
                    )}
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
