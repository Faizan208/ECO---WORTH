import { howItWorksSteps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-secondary/30 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Waste to Worth in 6 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our streamlined process makes monetizing industrial waste intuitive and efficient.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-8 hidden h-0.5 w-[calc(100%-10rem)] -translate-x-1/2 bg-border md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-6">
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="group relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-md transition-all group-hover:scale-110">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="mt-6">
                  <h3 className="font-headline text-lg font-semibold">{index + 1}. {step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
