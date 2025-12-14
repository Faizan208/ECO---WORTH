"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface OverviewChartProps {
    data: any[];
    config: any;
    title: string;
    chartKey: string;
    chartColor: string;
}

export default function OverviewChart({ data, config, title, chartKey, chartColor }: OverviewChartProps) {
    return (
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>Last 6 months performance.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config} className="h-64 w-full">
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={value => chartKey === 'revenue' ? `$${value / 1000}k` : `${value}`}
                        />
                        <Tooltip
                            cursor={false}
                            content={<ChartTooltipContent
                                indicator="dot"
                                formatter={(value) => chartKey === 'revenue' ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value as number) : `${value} tons`}
                            />}
                        />
                        <Bar dataKey={chartKey} fill={chartColor} radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
