import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { marketplaceItems } from "@/lib/data";
import { ArrowRight, MapPin, Weight } from "lucide-react";

export default function MarketplacePreview() {
  return (
    <section id="marketplace-preview" className="w-full bg-secondary/30 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Live Marketplace
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover valuable materials available for recycling and reuse right now.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaceItems.map((item) => (
            <Card key={item.id} className="group flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                 <Badge variant="secondary" className="absolute right-2 top-2">{item.type}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="truncate font-headline text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Weight className="mr-2 h-4 w-4" />
                  <span>{item.weight.toLocaleString()} kg</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{item.location}</span>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between bg-muted/50 p-4">
                <span className="font-bold text-accent">${item.price.toLocaleString()}</span>
                <Button size="sm" variant="ghost" asChild>
                  <Link href="/marketplace">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/marketplace">
              Explore Marketplace <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
