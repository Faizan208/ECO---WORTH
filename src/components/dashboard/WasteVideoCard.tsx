import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Boxes, MapPin, MoreVertical, Weight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface WasteVideoCardProps {
    id: string;
    title: string;
    thumbnailUrl: string;
    companyName: string;
    companyAvatarUrl?: string;
    weight: number;
    price: number;
    location: string;
    postedAt: string;
    views?: number; // repurposed as "Bids"
    href: string;
}

export function WasteVideoCard({
    title,
    thumbnailUrl,
    companyName,
    companyAvatarUrl,
    weight,
    price,
    location,
    postedAt,
    views = 0,
    href,
}: WasteVideoCardProps) {
    return (
        <Link href={href} className="group block space-y-3 cursor-pointer">
            {/* Thumbnail Wrapper */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                <Image
                    src={thumbnailUrl || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1 py-0.5 text-xs font-medium text-white">
                    {weight} kg
                </div>
            </div>

            {/* Info Section */}
            <div className="flex items-start gap-3">
                <Avatar className="h-9 w-9 border">
                    <AvatarImage src={companyAvatarUrl} alt={companyName} />
                    <AvatarFallback>{companyName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex min-w-0 flex-1 flex-col space-y-1">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="line-clamp-2 text-base font-semibold leading-tight text-foreground group-hover:text-primary">
                            {title}
                        </h3>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreVertical className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <p className="line-clamp-1 hover:text-foreground">{companyName}</p>
                        <div className="flex items-center gap-1 line-clamp-1 text-primary font-medium">
                            <span className="text-xs">{views} Active Bids</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <span>{postedAt}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <Badge variant="secondary" className="h-5 px-1 text-[10px font-normal]">
                                ${price}
                            </Badge>
                            <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" /> {location}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
