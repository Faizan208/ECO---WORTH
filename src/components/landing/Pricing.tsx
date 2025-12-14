"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { pricingPlans } from "@/lib/data";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="w-full bg-background py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Flexible Plans for Every Industry
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Choose the right plan to start turning your waste into a revenue stream.
                    </p>
                </div>

                <div className="mt-8 flex justify-center items-center space-x-2">
                    <Label htmlFor="billing-cycle">Monthly</Label>
                    <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} />
                    <Label htmlFor="billing-cycle">Yearly</Label>
                    <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">Save 15%</span>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
                    {pricingPlans.map((plan) => (
                        <Card key={plan.title} className={cn("flex flex-col", plan.popular && "border-2 border-primary shadow-lg")}>
                            {plan.popular && (
                                <div className="py-1 text-center text-sm font-semibold bg-primary text-primary-foreground">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className="text-center">
                                <CardTitle className="font-headline text-2xl">{plan.title}</CardTitle>
                                <CardDescription>{plan.description}</CardDescription>
                                <div className="flex items-baseline justify-center gap-1 pt-4">
                                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full font-bold" variant={plan.popular ? "default" : "outline"}>
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
