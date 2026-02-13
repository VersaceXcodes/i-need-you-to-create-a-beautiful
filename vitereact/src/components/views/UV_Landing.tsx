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
  Send, 
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
                  <span className="text-amber-400 text-sm font-medium font-mono">Early Access Available</span>
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
                  <span className="text-[#71717a]">Fast</span>
                </h1>
              </AnimatedSection>

              {/* Subheadline */}
              <AnimatedSection delay={200}>
                <p className="text-xl lg:text-2xl text-[#a1a1aa] mb-4 max-w-xl leading-relaxed">
                  OpenClaw wrappers are doing{' '}
                  <span className="text-white font-semibold font-mono">$4K-$22K/mo</span>.
                  <br />
                  Yours could be next.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <p className="text-lg text-[#71717a] mb-10 max-w-xl">
                  Stop wiring up OAuth, payments, and deployment from scratch. Get a production-ready SaaS you can rebrand and ship today.
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
                    <span className="text-[#71717a] line-through text-lg">$299</span>
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
                      <p className="text-[#71717a]">$ npm run deploy</p>
                      <p className="text-cyan-400">→ Deploying to production...</p>
                      <p className="text-emerald-400">✓ Live at yoursite.com</p>
                      <p className="text-amber-400">→ First payment received: $99</p>
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
                Other OpenClaw wrappers showing what's possible. Different brands, real revenue.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: '$4K-$22K/mo',
                label: 'TrustMRR Marketplace',
                title: 'Multiple wrappers selling',
                description: 'OpenClaw wrappers listed on TrustMRR, each generating thousands in monthly recurring revenue.',
                gradient: 'from-emerald-500/20 to-emerald-600/5',
                accentColor: 'text-emerald-400'
              },
              {
                metric: '$4K in 6 days',
                label: '91 Active Subscriptions',
                title: 'From zero to $4K MRR',
                description: 'From zero to $4,779 MRR with 91 active subscriptions in under a week.',
                gradient: 'from-cyan-500/20 to-cyan-600/5',
                accentColor: 'text-cyan-400'
              },
              {
                metric: '$22K+',
                label: 'All-Time Revenue',
                title: 'SimpleClaw revenue',
                description: 'SimpleClaw hit $22,773 in total revenue with $21,763 profit margin.',
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

          {/* Marc Lou Testimonial */}
          <AnimatedSection delay={400}>
            <div className="mt-16 bg-[#1e1e28] border border-white/5 rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black text-xl font-bold flex-shrink-0">
                  ML
                </div>
                <div className="flex-1">
                  <p className="text-2xl lg:text-3xl font-bold mb-3">
                    "It's OpenClaw wrappers time!"
                  </p>
                  <p className="text-white font-medium">Marc Lou</p>
                  <p className="text-[#71717a] text-sm">Indie hacker, $2M+ in revenue from solo products</p>
                </div>
              </div>
            </div>
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
                Skip the boring infrastructure work and go straight to making money.
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
                    'Set up Next.js, TypeScript, Tailwind from scratch',
                    'Build Google OAuth & session management',
                    'Integrate Stripe subscriptions & webhooks',
                    'Create admin dashboard & user management',
                    'Set up remote Docker deployment over SSH',
                    'Configure Caddy reverse proxy with auto HTTPS',
                    'Set up Postgres database & row-level security',
                    'Build Telegram bot integration',
                    'Write VPS setup scripts & documentation'
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
                  <p className="text-3xl font-bold text-emerald-400 font-mono">&lt;1 day</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Clone the repo & set your env variables',
                    'Connect your Stripe, Supabase & VPS keys',
                    'Run the setup script & deploy to your server'
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
                      'Live product accepting payments',
                      'Admin dashboard tracking users',
                      'Full source code you own forever',
                      'HTTPS, SEO, and monitoring, done'
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
                Ship-Ready <span className="text-[#71717a]">Features</span>
              </h2>
              <p className="text-xl text-[#a1a1aa] max-w-2xl">
                ClawWrapper comes loaded with every feature you'd spend weeks building yourself.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'Docker Deployment',
                description: 'Deploy user instances to your VPS over SSH. Automated setup, container management.',
                iconBg: 'bg-amber-400/10',
                iconColor: 'text-amber-400'
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: 'Supabase Auth',
                description: 'Google OAuth, session persistence, row-level security, Postgres database.',
                iconBg: 'bg-emerald-400/10',
                iconColor: 'text-emerald-400'
              },
              {
                icon: <CreditCard className="h-6 w-6" />,
                title: 'Stripe Payments',
                description: 'Subscription billing, Stripe Checkout, webhooks, customer portal.',
                iconBg: 'bg-purple-400/10',
                iconColor: 'text-purple-400'
              },
              {
                icon: <LayoutDashboard className="h-6 w-6" />,
                title: 'Admin Dashboard',
                description: 'Manage users, view analytics, control your SaaS from built-in panel.',
                iconBg: 'bg-orange-400/10',
                iconColor: 'text-orange-400'
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: 'Caddy Proxy',
                description: 'Automatic HTTPS with Let\'s Encrypt. Zero-config SSL certificates.',
                iconBg: 'bg-cyan-400/10',
                iconColor: 'text-cyan-400'
              },
              {
                icon: <Send className="h-6 w-6" />,
                title: 'Telegram Bot',
                description: 'Built-in bot for notifications, user support, and admin alerts.',
                iconBg: 'bg-blue-400/10',
                iconColor: 'text-blue-400'
              },
              {
                icon: <Palette className="h-6 w-6" />,
                title: 'White-Label',
                description: 'Change name, logo, colors in minutes. No trace of boilerplate.',
                iconBg: 'bg-pink-400/10',
                iconColor: 'text-pink-400'
              },
              {
                icon: <Smartphone className="h-6 w-6" />,
                title: 'Responsive',
                description: 'Mobile-first design with Tailwind CSS, server-rendered pages.',
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
                  'Full Next.js + TypeScript source code',
                  'Google OAuth login & session management',
                  'Stripe subscriptions & webhooks',
                  'Admin dashboard with user management',
                  'Remote Docker deployment over SSH',
                  'Caddy reverse proxy with auto HTTPS',
                  'Postgres database with row-level security',
                  'Telegram bot integration',
                  'White-label branding via env vars',
                  'VPS setup script & documentation',
                  'Lifetime updates, no subscription',
                  'Unlimited products, clone for each brand'
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
                Get ClawWrapper
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
                  <span>14-day money-back</span>
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
              <p className="text-xl text-[#a1a1aa]">
                Everything you need to know before you buy.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  question: 'How do I get access after I buy?',
                  answer: 'Immediately after purchase, you\'ll receive an email with access to the private GitHub repository containing all the source code, documentation, and setup scripts. You can start building right away.'
                },
                {
                  question: 'What exactly do I get for $99?',
                  answer: 'You get the complete ClawWrapper source code, including Next.js frontend, authentication system, payment integration, Docker deployment scripts, database setup, and comprehensive documentation. Everything you need to launch your own OpenClaw wrapper business.'
                },
                {
                  question: 'Do I need to be a developer to use this?',
                  answer: 'Basic technical knowledge is helpful, but our step-by-step documentation makes it accessible even if you\'re not an experienced developer. If you can follow terminal commands and edit configuration files, you can deploy ClawWrapper.'
                },
                {
                  question: 'How is this different from ShipFast or other boilerplates?',
                  answer: 'ClawWrapper is specifically built for OpenClaw wrappers with pre-configured Docker deployment, VPS management, and instance provisioning. It\'s not a generic SaaS boilerplate—it\'s purpose-built for this exact use case.'
                },
                {
                  question: 'What auth methods are included?',
                  answer: 'Google OAuth is included and ready to use via Supabase. The architecture makes it easy to add additional providers like GitHub, Twitter, or email/password authentication.'
                },
                {
                  question: 'What\'s included in lifetime updates?',
                  answer: 'You get access to all future improvements, bug fixes, and new features we add to ClawWrapper. No additional subscription or recurring fees—just one payment for lifetime access.'
                },
                {
                  question: 'Can I use this for multiple products?',
                  answer: 'Yes! You can clone the codebase and create unlimited wrappers for different brands or niches. Each purchase gives you rights to use the code for as many products as you want.'
                },
                {
                  question: 'Is there a refund policy?',
                  answer: 'Yes, we offer a 14-day money-back guarantee. If you\'re not satisfied with ClawWrapper for any reason, just email us within 14 days of purchase for a full refund.'
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
                What can OpenClaw <span className="text-[#71717a]">do for you?</span>
              </h2>
              <p className="text-xl text-[#a1a1aa]">
                One assistant, thousands of use cases
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {[
                'Read & summarize email', 'Draft replies', 'Translate messages', 'Organize inbox',
                'Answer support tickets', 'Summarize documents', 'Meeting reminders', 'Schedule meetings',
                'Track deadlines', 'Plan your week', 'Meeting notes', 'Sync time zones',
                'Tax help', 'Track expenses', 'Compare quotes', 'Manage subscriptions',
                'Payroll calculations', 'Negotiate refunds', 'Find coupons', 'Price alerts',
                'Find discounts', 'Compare specs', 'Write contracts', 'Research competitors',
                'Prioritize leads', 'Generate invoices', 'Book travel', 'Draft social posts'
              ].map((useCase, idx) => (
                <div 
                  key={idx}
                  className="bg-[#12121a] border border-white/5 rounded-lg px-3 py-2 text-xs text-[#a1a1aa] text-center hover:border-amber-400/20 hover:text-white transition-all cursor-default"
                >
                  {useCase}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-center text-[#71717a] italic mt-8 text-sm">
              PS. You can add as many use cases as you want via natural language
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SimpleClaw Comparison */}
      <section id="simpleclaw" className="py-24 bg-[#12121a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[#1e1e28] to-[#12121a] border border-white/5 rounded-3xl p-8 lg:p-12">
              <div className="text-left mb-12">
                <p className="text-amber-400 font-mono text-sm mb-4">DEPLOYMENT COMPARISON</p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Deploy OpenClaw <span className="text-[#71717a]">under 1 minute</span>
                </h2>
                <p className="text-lg text-[#a1a1aa] max-w-2xl">
                  Avoid all technical complexity and one-click deploy your own 24/7 active OpenClaw instance.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Traditional Method */}
                <div className="bg-[#12121a] border border-white/5 rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-6">Traditional</h3>
                  <ul className="space-y-3">
                    {[
                      { task: 'Purchasing virtual machine', time: '15 min' },
                      { task: 'Creating SSH keys', time: '10 min' },
                      { task: 'Connecting via SSH', time: '5 min' },
                      { task: 'Installing Node.js', time: '5 min' },
                      { task: 'Installing OpenClaw', time: '7 min' },
                      { task: 'Setting up OpenClaw', time: '10 min' },
                      { task: 'Connecting AI provider', time: '4 min' },
                      { task: 'Pairing with Telegram', time: '4 min' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-[#a1a1aa]">{item.task}</span>
                        <span className="text-[#71717a] font-mono">{item.time}</span>
                      </li>
                    ))}
                    <li className="flex justify-between items-center pt-3 border-t border-white/10">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-red-400 font-mono">60 min</span>
                    </li>
                  </ul>
                  <p className="text-xs text-[#71717a] mt-4 italic">
                    If you're non-technical, multiply by 10x.
                  </p>
                </div>

                {/* SimpleClaw Method */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-400/20 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-lg font-bold mb-4">SimpleClaw</h3>
                  <p className="text-6xl font-bold text-emerald-400 font-mono mb-4">&lt;1 min</p>
                  <p className="text-[#a1a1aa] text-sm max-w-xs">
                    Pick a model, connect Telegram, deploy — done.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
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
              Every day you spend wiring up OAuth, Stripe webhooks, and Docker deployment is a day you're not making money.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="inline-flex flex-col items-center bg-[#12121a] border border-amber-400/20 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl text-[#71717a] line-through">$299</span>
                <span className="text-5xl font-bold text-amber-400 font-mono">$99</span>
              </div>
              <p className="text-red-400 text-sm">
                Only 5 spots left at early-bird pricing
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
                Comprehensive docs
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
                Launch your OpenClaw wrapper fast with production-ready infrastructure.
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
                <li><a href="#" className="hover:text-white transition-colors">SimpleClaw.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-sm text-[#71717a]">
            <p>Built with love by <a href="#" className="text-amber-400 hover:text-amber-300">Savio Martin</a></p>
            <p className="mt-2">© 2024 ClawWrapper. All rights reserved.</p>
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
