"use client";

import { marketplaceItems } from "@/lib/data"; // Using mock listings
import { WasteVideoCard } from "@/components/dashboard/WasteVideoCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ShoppingCart, Gavel, History } from "lucide-react";

import { ProUpsellCard } from "./ProUpsellCard";

export function RecyclerDashboard({ user, tier }: { user: any, tier: string }) {

    // Simulate some "Active Bids" or "Won Auctions"
    const activeBidsCount = 3;
    const itemsWonCount = 12;

    return (
        <div className="space-y-8 w-full">
            {/* Pro Upsell Banner */}
            {tier === 'free' && <ProUpsellCard />}

            {/* Recycler Header Actions */}
            <div className="flex flex-wrap items-center gap-2">
                <Button variant="default" className="rounded-full">Overview</Button>
                <Button variant="secondary" className="rounded-full">My Bids ({activeBidsCount})</Button>
                <Button variant="secondary" className="rounded-full">Won Items</Button>
                <Button variant="secondary" className="rounded-full">History</Button>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-emerald-950/30 border-emerald-900/50">
                    <CardContent className="p-6 flex items-center space-x-4">
                        <div className="p-3 bg-emerald-900/50 rounded-full text-emerald-400">
                            <Gavel className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-400">Active Bids</p>
                            <h3 className="text-2xl font-bold text-white">{activeBidsCount} Items</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-blue-950/30 border-blue-900/50">
                    <CardContent className="p-6 flex items-center space-x-4">
                        <div className="p-3 bg-blue-900/50 rounded-full text-blue-400">
                            <ShoppingCart className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-400">Items Purchased</p>
                            <h3 className="text-2xl font-bold text-white">{itemsWonCount} Lots</h3>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-purple-950/30 border-purple-900/50">
                    <CardContent className="p-6 flex items-center space-x-4">
                        <div className="p-3 bg-purple-900/50 rounded-full text-purple-400">
                            <History className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-400">CO2 Saved</p>
                            <h3 className="text-2xl font-bold text-white">450 tons</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Marketplace Recommendations */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold font-headline">Recommended for You</h2>
                    <Link href="/dashboard/marketplace">
                        <Button variant="link" className="text-emerald-500">View All Marketplace &rarr;</Button>
                    </Link>
                </div>

                {/* Reusing WasteVideoCard or a simpler card. Let's use Marketplace logic if possible, 
                    but for now sticking to the existing 'WasteVideoCard' style for the dashboard feed 
                    or the 'MarketplaceClient' items we synced. 
                    The mockWasteListings from page.tsx were convenient. Let's reuse similar structure here.
                */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* Showing first 4 items as "Recommended" */}
                    <Link href="/dashboard/marketplace" className="flex flex-col items-center justify-center border-2 border-dashed border-emerald-500/30 rounded-xl bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors cursor-pointer group p-6 min-h-[300px]">
                        <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors mb-2">
                            <ShoppingCart className="h-8 w-8 text-emerald-500 transition-colors" />
                        </div>
                        <div className="text-center space-y-1">
                            <h3 className="font-bold text-xl text-emerald-500">Browse Marketplace</h3>
                            <p className="text-sm text-zinc-400 px-4">Find new materials for your recycling plant.</p>
                        </div>
                    </Link>

                    {/* We can hardcode 2-3 sample items or use data import. 
                        Let's verify what 'marketplaceItems' exports in data.ts, or simpler, plain mock data here 
                        to avoid dependency issues since I can't see all of data.ts export names easily.
                    */}
                </div>
            </div>
        </div>
    )
}
