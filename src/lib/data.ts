import {
  Recycle,
  Cpu,
  MonitorSmartphone,
  ShieldCheck,
  Package,
  Truck,
  DollarSign,
  BarChart,
  Users,
  CheckCircle,
  TrendingUp,
  FileText,
  Boxes,
  Briefcase,
  Store,
  CircleDollarSign,
  UserCheck,
  Activity,
} from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";
import type { LucideIcon } from "lucide-react";

export type UserRole = "admin" | "industry" | "recycler";

export const navLinks = [
  { href: "/#problem", label: "Problem" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/#features", label: "Features" },
  { href: "/#tech", label: "Technology" },
  { href: "/#roadmap", label: "Roadmap" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

export const problemPoints = [
  {
    icon: Recycle,
    title: "Environmental Pollution",
    description: "Industrial waste is a major contributor to land and water pollution, harming ecosystems and public health.",
    stat: "7.6B tons",
    statLabel: "of industrial waste annually"
  },
  {
    icon: Boxes,
    title: "Wasted Raw Materials",
    description: "Valuable materials are discarded daily, leading to resource depletion and increased production costs.",
    stat: "Up to 80%",
    statLabel: "of waste is reusable"
  },
  {
    icon: FileText,
    title: "Lack of Transparency",
    description: "Opaque disposal processes make it difficult to verify compliance and track environmental impact.",
    stat: "45%",
    statLabel: "of companies lack full visibility"
  }
];

export const solutionPoints = [
  { icon: Cpu, name: "AI Valuation", description: "Instantly recognize and value your waste materials." },
  { icon: MonitorSmartphone, name: "IoT Monitoring", description: "Track waste accumulation and conditions in real-time." },
  { icon: ShieldCheck, name: "Blockchain Certificates", description: "Receive immutable proof of responsible disposal." },
];

export const howItWorksSteps = [
  {
    icon: Package,
    title: "Upload",
    description: "Industry uploads images and details of their waste material.",
  },
  {
    icon: Cpu,
    title: "Analyze",
    description: "Our AI classifies the waste and estimates its market value.",
  },
  {
    icon: DollarSign,
    title: "Price",
    description: "The item is listed on our marketplace with a suggested price.",
  },
  {
    icon: Users,
    title: "Match",
    description: "Recyclers discover and bid on available waste materials.",
  },
  {
    icon: Truck,
    title: "Pickup",
    description: "Once a bid is accepted, logistics are arranged for pickup.",
  },
  {
    icon: ShieldCheck,
    title: "Certificate",
    description: "A verifiable Green Certificate is minted on the blockchain.",
  },
];

export const features = [
  {
    icon: Cpu,
    title: "AI Recognition",
    description: "Our advanced AI, powered by Google Gemini 2.5, accurately identifies waste types, quality, and potential contaminants from images.",
  },
  {
    icon: TrendingUp,
    title: "Price Estimation",
    description: "We combine AI analysis with market data to provide real-time, fair-market value estimations for your waste materials.",
  },
  {
    icon: MonitorSmartphone,
    title: "Live Monitoring",
    description: "(Simulated) IoT sensors provide live data on waste volume and weight, helping you optimize collection schedules.",
  },
  {
    icon: Store,
    title: "Trusted Marketplace",
    description: "A secure platform connecting waste producers with verified recyclers, facilitating transparent bidding and transactions.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Certificates",
    description: "Gain immutable, blockchain-backed Green Certificates as proof of your commitment to sustainable practices.",
  },
  {
    icon: BarChart,
    title: "ESG Reporting",
    description: "Automatically generate snippets and data for your Environmental, Social, and Governance reports, simplifying compliance.",
  },
];

export const marketplaceItems = [
  {
    id: "1",
    title: "PET Bottles - Baled",
    type: "Plastic",
    weight: 1200,
    price: 360,
    location: "Lahore, PK",
    imageUrl: PlaceHolderImages.find(p => p.id === "marketplace-item-1")?.imageUrl ?? '',
  },
  {
    id: "2",
    title: "Scrap Steel Beams",
    type: "Metal",
    weight: 5500,
    price: 1800,
    location: "Faisalabad, PK",
    imageUrl: PlaceHolderImages.find(p => p.id === "marketplace-item-2")?.imageUrl ?? '',
  },
  {
    id: "3",
    title: "Corrugated Cardboard",
    type: "Paper",
    weight: 2500,
    price: 200,
    location: "Karachi, PK",
    imageUrl: PlaceHolderImages.find(p => p.id === "marketplace-item-3")?.imageUrl ?? '',
  },
  {
    id: "4",
    title: "Off-cut Industrial Fabric",
    type: "Textile",
    weight: 800,
    price: 150,
    location: "Sialkot, PK",
    imageUrl: PlaceHolderImages.find(p => p.id === "marketplace-item-4")?.imageUrl ?? '',
  },
];

export const pricingPlans = [
  {
    title: "Free Trial",
    price: "$0",
    period: "/month",
    description: "Get a feel for our platform with core features.",
    features: [
      "List up to 2 waste items/month",
      "Basic AI analysis",
      "Access to marketplace",
      "Standard support",
    ],
    cta: "Start for Free",
    popular: false,
  },
  {
    title: "Pro",
    price: "$199",
    period: "/month",
    description: "For growing businesses serious about sustainability.",
    features: [
      "List up to 20 waste items/month",
      "Advanced AI analysis & pricing",
      "IoT data integration",
      "Priority support",
      "ESG report generation",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale industrial operations.",
    features: [
      "Unlimited waste listings",
      "Dedicated account manager",
      "Full API access",
      "On-site IoT setup support",
      "Custom compliance reporting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const techStack = [
  { name: "React", description: "Frontend" },
  { name: "Next.js", description: "Full-Stack Framework" },
  { name: "PostgreSQL", description: "Database" },
  { name: "Gemini 2.5", description: "AI Engine" },
  { name: "Polygon", description: "Blockchain" },
  { name: "IoT", description: "Simulated Devices" },
];

export const roadmapMilestones = [
  { id: "01", name: "Planning & Concept", status: "complete", date: "Q1 2024" },
  { id: "02", name: "Landing Page & Auth", status: "complete", date: "Q2 2024" },
  { id: "03", name: "Core Dashboards", status: "in_progress", date: "Q3 2024" },
  { id: "04", name: "AI Integration (Gemini)", status: "in_progress", date: "Q3 2024" },
  { id: "05", name: "IoT Simulation & Blockchain", status: "upcoming", date: "Q4 2024" },
  { id: "06", name: "Pilot Program Launch", status: "upcoming", date: "Q1 2025" },
];

export const teamMembers = [
  {
    name: "Faizan Mukhtar",
    role: "Co-Founder & CEO",
    imageUrl: "/faizan-mukhtar.jpg",
  },
  {
    name: "M. Altaaf",
    role: "Co-Founder & CTO",
    imageUrl: "/altaaf.jpg",
  },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/#team" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Roadmap", href: "/#roadmap" },
    { label: "Marketplace", href: "/marketplace" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Facebook", href: "#" },
  ]
}

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  role: UserRole[];
  children?: NavItem[];
};

export const dashboardNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart,
    role: ["admin", "industry", "recycler"],
  },
  {
    title: "Marketplace",
    href: "/dashboard/marketplace",
    icon: Store,
    role: ["recycler", "industry"],
  },
  {
    title: "My Bids",
    href: "/dashboard/bids",
    icon: CircleDollarSign,
    role: ["recycler"],
  },
  {
    title: "My Waste",
    href: "/dashboard/waste",
    icon: Boxes,
    role: ["industry"],
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: Truck,
    role: ["industry", "recycler"],
  },
  {
    title: "Certificates",
    href: "/dashboard/certificates",
    icon: ShieldCheck,
    role: ["industry"],
  },
  {
    title: "ESG Report",
    href: "/dashboard/esg-report",
    icon: FileText,
    role: ["industry"],
  },
  {
    title: "Admin",
    href: "#", // This is a group, not a link
    icon: Briefcase,
    role: ["admin"],
    children: [
      {
        title: "User Management",
        href: "/dashboard/admin/users",
        icon: Users,
        role: ["admin"],
      },
      {
        title: "Transactions",
        href: "/dashboard/admin/transactions",
        icon: DollarSign,
        role: ["admin"],
      },
      {
        title: "Platform Analytics",
        href: "/dashboard/admin/analytics",
        icon: BarChart,
        role: ["admin"],
      },
    ],
  },
];
