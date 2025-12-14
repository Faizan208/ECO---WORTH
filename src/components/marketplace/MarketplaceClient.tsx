"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { marketplaceItems as MarketplaceItemsType } from "@/lib/data";
import { ArrowRight, MapPin, Weight, ShoppingCart, Heart, RefreshCw } from "lucide-react";

type MarketplaceClientProps = {
  items: typeof MarketplaceItemsType;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  cart: string[];
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
};

export default function MarketplaceClient({ items, favorites, onToggleFavorite, cart, onAddToCart, onRemoveFromCart }: MarketplaceClientProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // In a real app, this would check a user's auth state
  const isAuthenticated = false;

  const handleActionClick = () => {
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
    } else {
      // In a real app, you would navigate to the item details or bidding page
      console.log("Navigate to item page");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, index) => {
          const isFavorite = favorites.includes(item.id);
          const isInCart = cart.includes(item.id);

          return (
            <Card
              key={`${item.id}-${index}`}
              className="group flex flex-col p-4 rounded-3xl border border-zinc-800 bg-[#18181b] hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-4 bg-[#121212]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Floating Badge */}
                <Badge className="absolute left-3 top-3 bg-emerald-600/90 hover:bg-emerald-600 text-white border-0 shadow-lg backdrop-blur-sm px-3 rounded-full">
                  {item.type}
                </Badge>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow space-y-2">
                <div className="text-xs font-bold tracking-wider text-emerald-500 uppercase">
                  {item.location}
                </div>
                <h3 className="font-sans text-xl font-bold text-zinc-100 leading-tight group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm text-zinc-400">
                  est. weight: {item.weight.toLocaleString()} kg
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-400">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Row */}
              <div className="mt-6 flex items-center gap-3">
                <Button
                  onClick={() => onAddToCart(item.id)}
                  disabled={isInCart}
                  className={`flex-1 rounded-full text-black font-bold shadow-lg transition-all ${isInCart
                      ? "bg-emerald-500 opacity-90 cursor-default"
                      : "bg-zinc-100 hover:bg-white hover:shadow-xl"
                    }`}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {isInCart ? "Bidded" : "Bid Now"}
                </Button>
                <button
                  onClick={() => onToggleFavorite(item.id)}
                  className={`p-3 rounded-full border transition-all duration-300 ${isFavorite
                      ? "bg-emerald-500/10 border-emerald-500 text-emerald-500 hover:bg-emerald-500/20"
                      : "border-zinc-700 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500"
                    }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                </button>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className={`p-3 rounded-full border transition-colors ${isInCart
                      ? "border-red-500/50 text-red-500 hover:bg-red-500/20"
                      : "border-zinc-700 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500"
                    }`}
                  title="Remove from bids"
                >
                  <RefreshCw className="h-5 w-5" />
                </button>
              </div>
            </Card>
          )
        })}
      </div>

      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">
              Join to Start Bidding
            </DialogTitle>
            <DialogDescription>
              To view details and place bids, you need to be part of our
              network. Register now to unlock all features.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">After you register, consider upgrading to our <span className="font-bold text-primary">Pro plan</span> to get advanced analysis, priority support, and more.</p>
            <Button asChild size="lg">
              <Link href="/signup?role=recycler">
                Register as a Recycler
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Already have an account? Sign In</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
