import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-background py-12 md:py-24">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s Build a Greener Future
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions, or are you ready to get started? Reach out to us, and let&apos;s discuss how EcoWorth can benefit your business.
          </p>
          <div className="space-y-2">
            <p><strong>Subject:</strong> Entrepreneurship</p>
            <p><strong>Submitted to:</strong> Sir Muzzammil Masood</p>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Fill out the form below and we&apos;ll get back to you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button type="submit" className="w-full font-bold">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
