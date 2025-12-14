"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, X } from "lucide-react";
import { useState } from "react";

export function ProUpsellCard() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 dark:from-amber-900/40 dark:via-yellow-900/20 dark:to-amber-900/40">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
            <CardContent className="p-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">

                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 p-1 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 shadow-lg shadow-amber-500/20">
                        <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2">
                            Unlock Pro Features
                            <span className="hidden sm:inline-block rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-700 dark:text-amber-300 border border-amber-500/30">
                                RECOMMENDED
                            </span>
                        </h3>
                        <p className="text-sm text-amber-800/80 dark:text-amber-200/70 max-w-lg">
                            Get unlimited marketplace listings, advanced AI analytics, and priority support. Scale your recycling business faster.
                        </p>
                    </div>
                </div>

                <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
                    <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700 border-0 shadow-md shadow-amber-900/20 whitespace-nowrap">
                        Get Pro Plan
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
