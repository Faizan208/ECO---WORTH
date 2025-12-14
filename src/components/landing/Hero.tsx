import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[600px] overflow-hidden">
      {/* Factory Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/factory-animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 px-4 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Turn Industrial Waste into Worth
        </h1>
        <p className="max-w-prose text-lg text-gray-200 md:text-xl">
          AI-powered waste valuation, verified green certificates, and a
          trusted marketplace for recyclers.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild className="font-bold">
            <Link href="/signup?role=industry">
              Register as Industry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-transparent text-white hover:bg-white hover:text-black border-white">
            <Link href="/signup?role=recycler">Become a Recycler</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
