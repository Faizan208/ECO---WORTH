import { techStack } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog, Database, Cpu, Link as LinkIcon, Bot, Layers } from "lucide-react";

const icons: { [key: string]: React.ElementType } = {
  "React": Layers,
  "Next.js": Cog,
  "PostgreSQL": Database,
  "Gemini 2.5": Cpu,
  "Polygon": LinkIcon,
  "IoT": Bot
};


export default function TechStack() {
  return (
    <section id="tech" className="w-full bg-secondary/30 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We leverage a modern, scalable tech stack to deliver a reliable and intelligent platform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {techStack.map((tech) => {
            const Icon = icons[tech.name] || Cog;
            return (
              <div key={tech.name} className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background shadow-md">
                   <Icon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="mt-4 font-headline text-xl font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
