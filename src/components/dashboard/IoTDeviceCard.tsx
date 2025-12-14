"use client";

import { Card } from "@/components/ui/card";
import { Activity, Signal, Wifi } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface IoTDeviceCardProps {
    deviceId: string;
    name: string;
    wasteType: string;
    status: "online" | "offline";
    currentWeight: number; // in kg
}

export function IoTDeviceCard({
    deviceId,
    name,
    wasteType,
    status,
    currentWeight,
}: IoTDeviceCardProps) {
    const [weight, setWeight] = useState(currentWeight);
    const [isPulsing, setIsPulsing] = useState(false);

    // Simulate live data updates
    useEffect(() => {
        if (status === 'offline') return;

        const interval = setInterval(() => {
            // Random fluctuation +/- 0.5kg
            const change = (Math.random() - 0.5);
            setWeight(prev => Math.max(0, Number((prev + change).toFixed(2))));
            setIsPulsing(true);
            setTimeout(() => setIsPulsing(false), 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [status]);

    return (
        <Card className="relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="p-4 space-y-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                            status === 'online' ? "bg-red-500/10 text-red-500" : "bg-muted text-muted-foreground"
                        )}>
                            <Signal className={cn("h-5 w-5", status === 'online' && "animate-pulse")} />
                        </div>
                        <div>
                            <h3 className="font-semibold leading-none">{name}</h3>
                            <p className="text-xs text-muted-foreground mt-1">{wasteType}</p>
                        </div>
                    </div>
                    <div className={cn(
                        "flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                        status === 'online' ? "bg-red-500 text-white" : "bg-muted text-muted-foreground"
                    )}>
                        {status === 'online' ? (
                            <>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                LIVE
                            </>
                        ) : "OFFLINE"}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Current Load</span>
                        <div className={cn("text-2xl font-bold font-mono transition-colors duration-300", isPulsing && "text-red-500")}>
                            {weight.toFixed(1)} <span className="text-sm font-sans font-normal text-muted-foreground">kg</span>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">Filling Rate</span>
                        <div className="flex items-center gap-1 text-sm font-medium text-green-500">
                            <Activity className="h-3 w-3" />
                            +2.4 kg/hr
                        </div>
                    </div>
                </div>

                {/* Mock Graphic */}
                <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-1000 ease-in-out"
                        style={{ width: `${Math.min(100, (weight / 1000) * 100)}%` }} // Assuming 1000kg capacity
                    />
                </div>
            </div>
        </Card>
    );
}
