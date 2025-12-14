"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import MarketplaceClient from "@/components/marketplace/MarketplaceClient";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
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
    <div className="flex min-h-screen flex-col bg-[#050505] text-white">
      <Header />
      <main className="flex-1 bg-[#f7f7f0] dark:bg-[#0c0c0c]">
        <div className="container mx-auto px-4 md:px-6 py-12">
          {/* Header Section matching reference */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-zinc-800 pb-4">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-100 uppercase">
                Featured <span className="text-emerald-500">Waste</span>
              </h1>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm font-semibold tracking-wide text-zinc-500">
              {["ALL", "PLASTIC", "METAL", "PAPER", "TEXTILE", "FAVORITES"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`transition-colors ${selectedCategory === category
                    ? "text-emerald-500 border-b-2 border-emerald-500 pb-1"
                    : "hover:text-zinc-300"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search Row */}
          <form onSubmit={handleSearch} className="mb-10 flex justify-end">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input
                placeholder="Search products..."
                className="rounded-full bg-[#18181b] border-zinc-800 text-zinc-200 pl-10 h-10 focus-visible:ring-emerald-500"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </form>

          <MarketplaceClient
            items={filteredItems}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
