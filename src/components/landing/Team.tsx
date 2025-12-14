import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="w-full bg-secondary/30 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Founders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The minds behind the mission to revolutionize industrial waste management.
          </p>
        </div>

        <div className="mt-16 mx-auto grid max-w-sm grid-cols-1 gap-8 md:max-w-3xl md:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader className="items-center">
                <div className="relative h-32 w-32">
                  <Image
                    src={member.imageUrl}
                    alt={`Profile picture of ${member.name}`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
