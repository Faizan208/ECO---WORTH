"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MarketplaceClient from "@/components/marketplace/MarketplaceClient";
import { marketplaceItems } from "@/lib/data";


export default function MarketplacePage() {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const addToCart = (id: string) => {
    setCart(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(cartId => cartId !== id));
  };

  const filteredItems = marketplaceItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesCategory = true;
    if (selectedCategory === "FAVORITES") {
      matchesCategory = favorites.includes(item.id);
    } else if (selectedCategory !== "ALL") {
      matchesCategory = item.type.toUpperCase() === selectedCategory;
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 w-full">
      {/* Header Section matching public reference but adapted for dashboard */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-zinc-800 pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Marketplace
          </h1>
          <p className="text-muted-foreground mt-1">
            Browse and bid on available industrial waste materials.
          </p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 text-sm font-semibold tracking-wide text-muted-foreground overflow-x-auto pb-2 md:pb-0">
          {["ALL", "PLASTIC", "METAL", "PAPER", "TEXTILE", "FAVORITES"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`transition-colors whitespace-nowrap ${selectedCategory === category
                ? "text-primary border-b-2 border-primary pb-1"
                : "hover:text-primary"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Search Row */}
      <form onSubmit={handleSearch} className="mb-8 flex justify-end">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </form>

      {/* Marketplace Client Grid */}
      <MarketplaceClient
        items={filteredItems}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />
    </div>
  );
}
