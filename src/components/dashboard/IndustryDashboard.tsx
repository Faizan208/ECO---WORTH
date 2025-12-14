"use client";

import { IoTDeviceCard } from "@/components/dashboard/IoTDeviceCard";
import { WasteVideoCard } from "@/components/dashboard/WasteVideoCard";
import { Plus, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const mockIoTDevices = [
    { deviceId: "iot-001", name: "Main Conveyor Sensor", wasteType: "Mixed Plastic", status: "online" as const, currentWeight: 124.5 },
    { deviceId: "iot-002", name: "Sorting Bin #4 Scale", wasteType: "Glass", status: "online" as const, currentWeight: 450.2 },
    { deviceId: "iot-003", name: "Compactor Unit B", wasteType: "Cardboard", status: "offline" as const, currentWeight: 890.0 },
    { deviceId: "iot-004", name: "Bio-Waste Container", wasteType: "Organic", status: "online" as const, currentWeight: 67.8 },
];

import { ProUpsellCard } from "./ProUpsellCard";

export function IndustryDashboard({ user, tier }: { user: any, tier: string }) {
    // Determine internal state (e.g. if new user or has devices)
    // For now we simulate an established industry user with devices
    const hasDevices = true;

    return (
        <div className="space-y-8 w-full">
            {/* Pro Upsell Banner */}
            {tier === 'free' && <ProUpsellCard />}

            {/* Industry Header Actions */}
            <div className="flex flex-wrap items-center gap-2">
                <Button variant="default" className="rounded-full">Overview</Button>
                <Button variant="secondary" className="rounded-full">Live Devices</Button>
                <Button variant="secondary" className="rounded-full">My Listings</Button>
                <Button variant="secondary" className="rounded-full">Revenue</Button>
            </div>

            {/* Live IoT Section */}
            <div>
                <h2 className="text-xl font-bold mb-4 font-headline flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", hasDevices ? "bg-red-400" : "bg-gray-400")}></span>
                        <span className={cn("relative inline-flex rounded-full h-3 w-3", hasDevices ? "bg-red-500" : "bg-gray-500")}></span>
                    </span>
                    Live Waste Monitoring
                </h2>

                {hasDevices ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {mockIoTDevices.map(device => (
                            <IoTDeviceCard key={device.deviceId} {...device} />
                        ))}
                    </div>
                ) : (
                    <Card className="border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                                <Activity className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">No Devices Connected</h3>
                                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                                    Connect your IoT scales and sensors to automatically track waste generation and quality in real-time.
                                </p>
                            </div>
                            <Button variant="outline">Connect Device</Button>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Quick Actions / Recent Listings */}
            <div>
                <h2 className="text-xl font-bold mb-4 font-headline">Manage Inventory</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Add New Listing Card */}
                    <Link href="/dashboard/upload" className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl h-full min-h-[200px] bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer group space-y-4 p-6">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-2">
                            <Plus className="h-8 w-8 text-primary transition-colors" />
                        </div>
                        <div className="text-center space-y-1">
                            <h3 className="font-bold text-xl text-primary">List New Waste</h3>
                            <p className="text-sm text-muted-foreground px-4">Use Gemini AI to analyze and price your waste automatically.</p>
                        </div>
                    </Link>

                    {/* Placeholder for Revenue/Stats Card */}
                    <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 text-white">
                        <CardContent className="p-6 flex flex-col justify-between h-full">
                            <div>
                                <p className="text-zinc-400 text-sm font-medium uppercase tracking-wider">Total Revenue (This Month)</p>
                                <h3 className="text-4xl font-bold mt-2 text-emerald-400">$12,450.00</h3>
                            </div>
                            <div className="mt-8">
                                <Link href="/dashboard/waste">
                                    <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">View Sales History</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
