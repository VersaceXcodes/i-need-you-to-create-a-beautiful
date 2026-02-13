import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Check, 
  X, 
  Zap, 
  Lock, 
  CreditCard, 
  LayoutDashboard, 
  Globe, 
  Palette, 
  Smartphone,
  ArrowRight,
  Terminal,
  Rocket,
  Shield,
  ChevronDown
} from 'lucide-react';
import { techStackData } from '@/components/TechIcons';

// Intersection Observer hook for scroll animations
const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

// Animated section wrapper
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = '',
  delay = 0
}) => {
  const { ref, isInView } = useInView();
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGetClawWrapper = () => {
    // Redirect to Stripe checkout
    window.location.href = 'https://buy.stripe.com/5kQ3cu1SQ2QCg1icFZ8Vi00';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f5f5f7] overflow-x-hidden">
      {/* Sticky Header - Left-aligned nav (respects left-side bias) */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          headerScrolled 
            ? 'bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Left aligned */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                <Terminal className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight">ClawWrapper</span>
            </div>
            
            {/* Navigation - Left-aligned items */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-[#a1a1aa] hover:text-white transition-colors text-sm font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-[#a1a1aa] hover:text-white transition-colors text-sm font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-[#a1a1aa] hover:text-white transition-colors text-sm font-medium"
              >
                FAQ
              </button>
              <Button 
                onClick={handleGetClawWrapper} 
                className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-6 rounded-xl"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Left-aligned, asymmetric layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.05),transparent_50%)]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content - Takes 7 columns for asymmetric layout */}
            <div className="lg:col-span-7 text-left">
              {/* Badge */}
              <AnimatedSection delay={0}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 border border-amber-400/20 rounded-full mb-8">
                  <Rocket className="h-4 w-4 text-amber-400" />
                  <span className="text-amber-400 text-sm font-medium font-mono">Early Access: first 5 spots at $99 (then $299)</span>
                </div>
              </AnimatedSection>

              {/* Main headline - Dramatic typography */}
              <AnimatedSection delay={100}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                  Launch Your
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                    OpenClaw Wrapper
                  </span>
                  <br />
                  <span className="text-[#71717a]">— Fast.</span>
                </h1>
              </AnimatedSection>

              {/* Subheadline */}
              <AnimatedSection delay={200}>
                <p className="text-xl lg:text-2xl text-[#a1a1aa] mb-4 max-w-xl leading-relaxed">
                  <span className="text-white font-semibold">Some OpenClaw wrappers report{' '}
                  <span className="font-mono">$4K–$22K/mo</span>.</span>
                  <br />
                  Yours could be next.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <p className="text-lg text-[#71717a] mb-10 max-w-xl">
                  Stop wiring up auth, billing, and deployments from scratch. Get a production-ready, white-label SaaS codebase you can rebrand and ship today.
                </p>
              </AnimatedSection>

              {/* CTA Group */}
              <AnimatedSection delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button 
                    onClick={handleGetClawWrapper}
                    className="group bg-amber-400 hover:bg-amber-300 text-black font-bold px-8 py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all"
                  >
                    Get ClawWrapper — $99
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="flex flex-col text-left">
                    <span className="text-[#71717a] line-through text-lg">was $299</span>
                    <span className="text-red-400 text-sm font-medium">Only 5 spots left</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Trust indicators */}
              <AnimatedSection delay={500}>
                <div className="flex flex-wrap gap-6 mt-10 text-sm text-[#71717a]">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Full source code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Lifetime updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>14-day refund</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right content - Hero visual (5 columns) */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <AnimatedSection delay={300}>
                <div className="relative">
                  {/* Code/Terminal mockup */}
                  <div className="bg-[#1e1e28] border border-white/10 rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="ml-3 text-[#71717a] text-xs font-mono">terminal</span>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                      <p className="text-[#71717a]">$ git clone clawwrapper</p>
                      <p className="text-emerald-400">✓ Cloned successfully</p>
                      <p className="text-[#71717a]">&nbsp;</p>
                      <p className="text-[#71717a]">$ npm run deploy</p>
                      <p className="text-cyan-400">→ Provisioning infrastructure...</p>
                      <p className="text-cyan-400">→ Deploying app...</p>
                      <p className="text-[#71717a]">&nbsp;</p>
                      <p className="text-emerald-400">✓ Live at https://yoursite.com</p>
                      <p className="text-[#71717a]">&nbsp;</p>
                      <p className="text-amber-400">→ First payment received: $99</p>
                      <p className="text-amber-400">→ This week: +$4,779</p>
                    </div>
                  </div>
                  
                  {/* Floating revenue card */}
                  <div className="absolute -bottom-6 -left-6 bg-[#12121a] border border-amber-400/30 rounded-xl p-4 shadow-xl">
                    <p className="text-[#71717a] text-xs mb-1">This week</p>
                    <p className="text-2xl font-bold text-amber-400 font-mono">+$4,779</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-[#71717a]" />
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 bg-[#12121a] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.03),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-left mb-16">
              <p className="text-amber-400 font-mono text-sm mb-4">PROOF OF CONCEPT</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Wrappers Making Money <span className="text-[#71717a]">Right Now</span>
              </h2>
              <p className="text-xl text-[#a1a1aa] max-w-2xl">
                Other OpenClaw wrappers show what's possible: different brands, real demand.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: '$4K–$22K/mo',
                label: 'Marketplace Listings',
                title: 'Real market demand',
                description: 'Marketplaces like TrustMRR list multiple OpenClaw wrappers selling to customers.',
                gradient: 'from-emerald-500/20 to-emerald-600/5',
                accentColor: 'text-emerald-400'
              },
              {
                metric: '$4K in 6 days',
                label: 'Fast Traction',
                title: 'Quick wins are real',
                description: 'Fast traction is real when the product is simple and the onboarding is clean.',
                gradient: 'from-cyan-500/20 to-cyan-600/5',
                accentColor: 'text-cyan-400'
              },
              {
                metric: '$22K+',
                label: 'Total Revenue',
                title: 'Meaningful revenue',
                description: 'Small wrappers can reach meaningful revenue fast with a focused offer.',
                gradient: 'from-amber-500/20 to-amber-600/5',
                accentColor: 'text-amber-400'
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div 
                  className={`group bg-gradient-to-br ${item.gradient} border border-white/5 hover:border-white/10 rounded-2xl p-8 cursor-pointer transition-all hover:-translate-y-1`}
                  onClick={() => setSelectedImage(item.label)}
                >
                  <div className="mb-6">
                    <p className={`text-4xl lg:text-5xl font-bold font-mono ${item.accentColor}`}>{item.metric}</p>
                    <p className="text-[#71717a] text-sm mt-1">{item.label}</p>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Testimonial */}
          <AnimatedSection delay={400}>
            <div className="mt-16 bg-[#1e1e28] border border-white/5 rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black text-xl font-bold flex-shrink-0">
                  "
                </div>
                <div className="flex-1">
                  <p className="text-2xl lg:text-3xl font-bold mb-3">
                    "Wrappers are having a moment."
                  </p>
                  <p className="text-[#71717a] text-sm italic">
                    (Replace with your own quote or a real testimonial you have permission to use.)
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Disclaimer */}
          <AnimatedSection delay={500}>
            <p className="mt-8 text-center text-[#71717a] text-sm italic">
              Results vary. These are examples from the market, not guarantees.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-left mb-16">
              <p className="text-amber-400 font-mono text-sm mb-4">TIME SAVED</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Weeks of Work, <span className="text-[#71717a]">or Hours</span>
              </h2>
              <p className="text-xl text-[#a1a1aa] max-w-2xl">
                Skip the infrastructure grind and go straight to selling.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Building From Scratch */}
            <AnimatedSection delay={100}>
              <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">Building From Scratch</h3>
                  <p className="text-3xl font-bold text-red-400 font-mono">2–4 weeks</p>
                </div>
                <ul className="space-y-4">
                  {[
                    'Set up auth + sessions + org accounts',
                    'Build billing (Stripe subscriptions + webhooks + customer portal)',
                    'Build admin dashboard (users, access control, metrics)',
                    'Set up database + migrations + realtime updates',
                    'Build agent lifecycle (start/stop/provision) + secure secrets storage',
                    'Add monitoring + logs + production hardening',
                    'Write setup docs people can actually follow'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[#a1a1aa] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* With ClawWrapper */}
            <AnimatedSection delay={200}>
              <div className="bg-gradient-to-br from-amber-400/10 to-cyan-400/5 border border-amber-400/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-amber-400 text-black text-xs font-bold rounded-full">
                  RECOMMENDED
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">With ClawWrapper</h3>
                  <p className="text-3xl font-bold text-emerald-400 font-mono">under 1 day</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Clone the repo + set env vars',
                    'Connect Stripe + Supabase + AWS',
                    'Run the setup script + deploy'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium text-sm">Step {idx + 1}: {item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-6">
                  <p className="font-semibold text-amber-400 mb-4 text-sm">What you end up with</p>
                  <ul className="space-y-2">
                    {[
                      'A live product accepting payments',
                      'A dashboard to manage customers + agents',
                      'Full source code you own and can rebrand',
                      'Deployment + logs + basic monitoring included'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[#a1a1aa] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-[#12121a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-left mb-16">
              <p className="text-amber-400 font-mono text-sm mb-4">EVERYTHING INCLUDED</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Ship-Ready Features <span className="text-[#71717a]">(Not "Coming Soon")</span>
              </h2>
              <p className="text-xl text-[#a1a1aa] max-w-2xl">
                Everything you'd normally build the hard way.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Lock className="h-6 w-6" />,
                title: 'Auth (B2B-ready)',
                description: 'Org accounts, magic links, sessions.',
                iconBg: 'bg-emerald-400/10',
                iconColor: 'text-emerald-400'
              },
              {
                icon: <CreditCard className="h-6 w-6" />,
                title: 'Stripe Billing',
                description: 'Checkout, subscriptions, webhooks, customer portal.',
                iconBg: 'bg-purple-400/10',
                iconColor: 'text-purple-400'
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'Agent Provisioning',
                description: 'Launch isolated OpenClaw instances (start/stop/delete) on AWS.',
                iconBg: 'bg-amber-400/10',
                iconColor: 'text-amber-400'
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: 'Encrypted Secrets',
                description: 'Keys stored securely (no keys in your database).',
                iconBg: 'bg-red-400/10',
                iconColor: 'text-red-400'
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: 'Realtime Status',
                description: 'Live instance status + setup progress in the dashboard.',
                iconBg: 'bg-cyan-400/10',
                iconColor: 'text-cyan-400'
              },
              {
                icon: <LayoutDashboard className="h-6 w-6" />,
                title: 'Admin Dashboard',
                description: 'Manage users, org access, and instances from one place.',
                iconBg: 'bg-orange-400/10',
                iconColor: 'text-orange-400'
              },
              {
                icon: <Palette className="h-6 w-6" />,
                title: 'White-Label',
                description: 'Change name/logo/colors quickly. Make it your brand.',
                iconBg: 'bg-pink-400/10',
                iconColor: 'text-pink-400'
              },
              {
                icon: <Smartphone className="h-6 w-6" />,
                title: 'Docs + Scripts',
                description: 'Setup steps that reduce support and refunds.',
                iconBg: 'bg-indigo-400/10',
                iconColor: 'text-indigo-400'
              }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="group bg-[#1e1e28] border border-white/5 hover:border-white/10 rounded-xl p-6 transition-all hover:-translate-y-1">
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <div className={feature.iconColor}>{feature.icon}</div>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[#71717a] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Tech Stack */}
          <AnimatedSection delay={400}>
            <div className="mt-16">
              <p className="text-[#71717a] text-sm mb-6 text-center">BUILT WITH</p>
              <div className="flex flex-wrap justify-center gap-4">
                {techStackData.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="group flex items-center gap-3 px-5 py-3 bg-[#1e1e28] border border-white/5 hover:border-white/20 rounded-xl transition-all hover:-translate-y-0.5"
                  >
                    <tech.icon 
                      className="w-5 h-5 transition-colors" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm font-medium text-[#a1a1aa] group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0a0a0f] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.05),transparent_60%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-amber-400 font-mono text-sm mb-4">SIMPLE PRICING</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                One Price. <span className="text-[#71717a]">Everything Included.</span>
              </h2>
              <p className="text-xl text-[#a1a1aa]">
                No subscriptions. No per-seat pricing. No hidden fees.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-gradient-to-b from-[#1e1e28] to-[#12121a] border border-amber-400/20 rounded-3xl p-8 lg:p-12 shadow-[0_0_60px_rgba(251,191,36,0.1)]">
              {/* Pricing header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
                  <span className="text-red-400 text-sm font-medium">Early-bird: only 5 spots at this price</span>
                </div>
                <p className="text-[#71717a] mb-4">One-time payment</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-[#71717a] line-through font-light">$299</span>
                  <span className="text-6xl lg:text-7xl font-bold text-amber-400 font-mono">$99</span>
                </div>
              </div>

              {/* Features list - 2 columns */}
              <div className="grid md:grid-cols-2 gap-3 mb-10">
                {[
                  'Full source code (Next.js + TypeScript)',
                  'Auth + org accounts',
                  'Stripe subscriptions + webhooks + customer portal',
                  'Admin dashboard',
                  'Agent lifecycle (provision/start/stop/delete)',
                  'Secure secrets storage',
                  'White-label branding',
                  'Setup scripts + documentation',
                  'Lifetime updates',
                  '14-day money-back guarantee'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#a1a1aa] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                onClick={handleGetClawWrapper}
                className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-6 text-lg rounded-xl shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all"
              >
                Get ClawWrapper — $99
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[#71717a]">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Instant access</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#12121a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-left mb-12">
              <p className="text-amber-400 font-mono text-sm mb-4">FAQ</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Questions? <span className="text-[#71717a]">Answers.</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  question: 'How do I get access after I buy?',
                  answer: 'Instant access (download or private repo invite). Setup instructions included.'
                },
                {
                  question: 'What exactly do I get for $99?',
                  answer: 'A complete, working codebase you can rebrand and deploy, plus docs and scripts.'
                },
                {
                  question: 'Do I need to be a developer?',
                  answer: 'You\'ll be fastest if you can run commands and edit env vars. If not, a freelancer can deploy this in a day.'
                },
                {
                  question: 'How is this different from generic boilerplates?',
                  answer: 'It\'s built specifically for OpenClaw wrappers: provisioning, instance lifecycle, secure key handling, and a dashboard that matches the business.'
                },
                {
                  question: 'What auth methods are included?',
                  answer: 'B2B-style org accounts with Stytch (magic links + sessions).'
                },
                {
                  question: 'What\'s included in lifetime updates?',
                  answer: 'Bug fixes, improvements, and maintenance updates to keep the stack current.'
                },
                {
                  question: 'Can I use this for multiple products?',
                  answer: 'Yes. Clone it, rebrand it, and ship multiple wrappers.'
                },
                {
                  question: 'Refund policy?',
                  answer: '14 days. If it\'s not a fit, you get your money back.'
                }
              ].map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="bg-[#1e1e28] border border-white/5 rounded-xl px-6 data-[state=open]:border-amber-400/20 transition-colors"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#a1a1aa] pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-[#0a0a0f] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-left mb-12">
              <p className="text-amber-400 font-mono text-sm mb-4">POSSIBILITIES</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                What can OpenClaw <span className="text-[#71717a]">do for your customers?</span>
              </h2>
              <p className="text-xl text-[#a1a1aa]">
                One assistant. Thousands of use cases.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
              {[
                'Answer support tickets',
                'Draft replies and follow-ups',
                'Summarize documents',
                'Schedule meetings and reminders',
                'Research competitors',
                'Generate invoices and proposals',
                'Track tasks and deadlines',
                'Build niche assistants for real estate, agencies, coaches, ecommerce'
              ].map((useCase, idx) => (
                <div 
                  key={idx}
                  className="bg-[#12121a] border border-white/5 rounded-lg px-4 py-3 text-sm text-[#a1a1aa] hover:border-amber-400/20 hover:text-white transition-all cursor-default"
                >
                  {useCase}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-left text-[#71717a] italic mt-8 text-sm">
              PS: You can add unlimited use cases through prompts and onboarding.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-24 bg-[#12121a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.1),transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <AnimatedSection>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Stop Building Infrastructure.
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">Start Earning.</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-xl text-[#a1a1aa] mb-10 max-w-2xl mx-auto">
              Every day you spend wiring up auth, billing, and deployments is a day you're not shipping.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="inline-flex flex-col items-center bg-[#0a0a0f] border border-amber-400/20 rounded-2xl p-8 mb-8">
              <p className="text-amber-400 text-sm font-medium mb-4">Early access</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl text-[#71717a] line-through">$299</span>
                <span className="text-5xl font-bold text-amber-400 font-mono">$99</span>
              </div>
              <p className="text-red-400 text-sm">
                Only 5 spots left
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Button 
              onClick={handleGetClawWrapper}
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold py-6 px-12 text-lg rounded-xl shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all"
            >
              Start Building Now — $99
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-[#71717a]">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Full source code
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Lifetime access
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Free updates
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Clear docs
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                  <Terminal className="h-5 w-5 text-black" />
                </div>
                <span className="text-xl font-bold">ClawWrapper</span>
              </div>
              <p className="text-[#71717a] text-sm">
                Launch your OpenClaw wrapper with production-ready infrastructure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-[#71717a]">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-[#71717a]">
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-sm text-[#71717a]">
            <p>© 2026 ClawWrapper. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#0a0a0f]/95 backdrop-blur-md border-t border-white/10 z-40">
        <Button 
          onClick={handleGetClawWrapper}
          className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-4 rounded-xl"
        >
          Get ClawWrapper — $99
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Lightbox for images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-[#1e1e28] border border-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">{selectedImage}</h3>
              <Button variant="ghost" onClick={() => setSelectedImage(null)} className="text-[#71717a] hover:text-white">
                Close
              </Button>
            </div>
            <div className="text-center py-12">
              <p className="text-[#71717a]">Revenue proof screenshot</p>
              <p className="text-sm text-[#71717a] mt-2">Image: {selectedImage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
