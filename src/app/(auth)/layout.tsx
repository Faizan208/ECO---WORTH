import Link from "next/link";
import { Logo } from "@/components/icons/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary/30 p-4">
      <div className="mb-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10 text-primary" />
          <span className="font-headline text-3xl font-bold text-foreground">
            EcoWorth
          </span>
        </Link>
      </div>
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
