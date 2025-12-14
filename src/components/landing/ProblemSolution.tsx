import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { problemPoints, solutionPoints } from "@/lib/data";

export default function ProblemSolution() {
  return (
    <section id="problem" className="w-full bg-background py-12 md:py-24">
      <div className="container mx-auto space-y-20 px-4 md:px-6">
        {/* Problem Section */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">The Hidden Cost of Waste</h2>
          <p className="mt-4 text-lg text-muted-foreground">Industrial byproducts are more than just trash—they&apos;re a missed opportunity and an environmental burden.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {problemPoints.map((point) => (
            <div key={point.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <point.icon className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold">{point.title}</h3>
              <p className="mt-2 text-muted-foreground">{point.description}</p>
              <div className="mt-4">
                <p className="text-3xl font-bold text-accent">{point.stat}</p>
                <p className="text-sm text-muted-foreground">{point.statLabel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">The EcoWorth Solution</h2>
          <p className="mt-4 text-lg text-muted-foreground">We transform waste management with a powerful combination of modern technologies.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {solutionPoints.map((point) => (
            <Card key={point.name} className="flex flex-col items-center p-6 text-center shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <point.icon className="h-10 w-10" />
                </div>
                <CardTitle className="font-headline text-2xl">{point.name}</CardTitle>
              </CardHeader>
              <CardContent className="mt-2 p-0">
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
