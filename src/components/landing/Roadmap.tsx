import { roadmapMilestones } from "@/lib/data";
import { cn } from "@/lib/utils";
import { CheckCircle, Clock, Zap } from "lucide-react";

export default function Roadmap() {
  return (
    <section id="roadmap" className="w-full bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Journey and Future
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re building iteratively to bring our vision for a circular economy to life.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />

          {roadmapMilestones.map((milestone, index) => (
            <div key={milestone.id} className="group relative mb-12">
              <div className={cn(
                "flex items-center",
                index % 2 === 0 ? "justify-start" : "justify-end"
              )}>
                <div className={cn(
                  "w-1/2",
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                )}>
                  <div className="rounded-lg bg-card p-4 shadow-md">
                    <p className="font-semibold text-foreground">{milestone.name}</p>
                    <time className="text-sm text-muted-foreground">{milestone.date}</time>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background">
                <div className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full",
                  milestone.status === 'complete' && 'bg-primary text-primary-foreground',
                  milestone.status === 'in_progress' && 'bg-accent text-accent-foreground animate-pulse',
                  milestone.status === 'upcoming' && 'bg-muted text-muted-foreground'
                )}>
                  {milestone.status === 'complete' && <CheckCircle className="h-5 w-5" />}
                  {milestone.status === 'in_progress' && <Zap className="h-5 w-5" />}
                  {milestone.status === 'upcoming' && <Clock className="h-5 w-5" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
