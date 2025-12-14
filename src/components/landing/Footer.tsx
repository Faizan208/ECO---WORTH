import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-foreground">
                EcoWorth
              </span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Turning industrial waste into worth with AI, IoT, and Blockchain.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Legal & Social</h3>
            <ul className="mt-4 space-y-2">
              {[...footerLinks.legal, ...footerLinks.social].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} EcoWorth. All rights reserved. A project by Faizan Mukhtar (415) and M. Altaaf (443).
        </div>
      </div>
    </footer>
  );
}
