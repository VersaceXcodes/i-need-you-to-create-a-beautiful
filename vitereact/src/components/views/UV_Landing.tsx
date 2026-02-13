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
  ArrowRight,
  Terminal,
  Shield,
  Clock,
  Package,
  Code2,
  Users,
  Key,
  Activity,
  Paintbrush,
  FileText,
  DollarSign,
  Layers,
  Server,
  Sparkles
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
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

const LandingPage: React.FC = () => {
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
    window.location.href = 'https://buy.stripe.com/5kQ3cu1SQ2QCg1icFZ8Vi00';
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerScrolled 
            ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-zinc-800' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Terminal className="h-4 w-4 text-black" />
              </div>
              <span className="font-semibold">ClawWrapper</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('whats-inside')}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                What's inside
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                Pricing
              </button>
              <Button 
                onClick={handleGetClawWrapper} 
                size="sm"
                className="bg-white hover:bg-zinc-200 text-black font-medium rounded-lg"
              >
                Get access
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Problem-focused */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-800/50 border border-zinc-700 rounded-full text-sm text-zinc-300 mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              5 early-bird spots remaining
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Skip the boilerplate.
              <br />
              <span className="text-zinc-500">Ship your OpenClaw wrapper.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              You could spend 3 weeks building auth, billing, and infrastructure. 
              Or you could clone this repo and launch tomorrow.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={handleGetClawWrapper}
                size="lg"
                className="bg-white hover:bg-zinc-200 text-black font-semibold px-8 py-6 text-base rounded-xl"
              >
                Get ClawWrapper — $99
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-zinc-500 text-sm">
                <span className="line-through">$299</span>
                <span className="mx-2">·</span>
                One-time purchase
              </p>
            </div>
          </AnimatedSection>

          {/* Terminal Preview */}
          <AnimatedSection delay={400}>
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-zinc-500 text-xs font-mono ml-2">terminal</span>
                </div>
                <div className="p-6 font-mono text-sm text-left space-y-3">
                  <div>
                    <span className="text-zinc-500">$</span>
                    <span className="text-zinc-300 ml-2">npx create-clawwrapper my-wrapper</span>
                  </div>
                  <div className="text-zinc-500">Creating project...</div>
                  <div className="text-emerald-400">✓ Dependencies installed</div>
                  <div className="text-emerald-400">✓ Environment configured</div>
                  <div className="text-emerald-400">✓ Database connected</div>
                  <div className="mt-4">
                    <span className="text-zinc-500">$</span>
                    <span className="text-zinc-300 ml-2">npm run deploy</span>
                  </div>
                  <div className="text-blue-400">→ Deploying to production...</div>
                  <div className="text-emerald-400">✓ Live at https://my-wrapper.com</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social proof - subtle */}
      <section className="py-12 border-y border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
              <div>
                <p className="text-3xl font-bold text-white">$4K–$22K</p>
                <p className="text-zinc-500 text-sm mt-1">Monthly revenue range for wrappers</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-zinc-800" />
              <div>
                <p className="text-3xl font-bold text-white">&lt;1 day</p>
                <p className="text-zinc-500 text-sm mt-1">To deploy with ClawWrapper</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-zinc-800" />
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-zinc-500 text-sm mt-1">Source code ownership</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works - 3 Steps */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-emerald-400 text-sm font-medium mb-3">HOW IT WORKS</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Three steps to launch
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                No complicated setup. No infrastructure headaches. Just clone, configure, and deploy.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Clone the repo',
                description: 'Get instant access to the full codebase. Next.js, TypeScript, Tailwind — everything set up and ready.',
                icon: <Code2 className="h-5 w-5" />
              },
              {
                step: '02',
                title: 'Add your keys',
                description: 'Drop in your Stripe, Supabase, and AWS credentials. All integrations are pre-wired and documented.',
                icon: <Key className="h-5 w-5" />
              },
              {
                step: '03',
                title: 'Deploy and sell',
                description: 'Run the deploy script. Your branded OpenClaw wrapper is live and accepting payments.',
                icon: <Sparkles className="h-5 w-5" />
              }
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 100}>
                <div className="relative">
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 h-full hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
                        {item.icon}
                      </div>
                      <span className="text-zinc-600 font-mono text-sm">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-zinc-800" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside - Detailed Breakdown */}
      <section id="whats-inside" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-emerald-400 text-sm font-medium mb-3">WHAT'S INSIDE</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Everything you need to ship
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                Not a starter template. A complete, production-ready codebase you can deploy today.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Users className="h-5 w-5" />,
                title: 'Auth & Organizations',
                description: 'B2B-ready auth with Stytch. Magic links, sessions, org accounts built in.',
                tag: 'Core'
              },
              {
                icon: <DollarSign className="h-5 w-5" />,
                title: 'Stripe Billing',
                description: 'Subscriptions, checkout, webhooks, and customer portal. All wired up.',
                tag: 'Core'
              },
              {
                icon: <Server className="h-5 w-5" />,
                title: 'Agent Provisioning',
                description: 'Spin up isolated OpenClaw instances on AWS. Start, stop, delete.',
                tag: 'Core'
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: 'Encrypted Secrets',
                description: 'Customer API keys stored securely. Never in your database.',
                tag: 'Security'
              },
              {
                icon: <Activity className="h-5 w-5" />,
                title: 'Realtime Status',
                description: 'Live instance health and setup progress in the dashboard.',
                tag: 'Dashboard'
              },
              {
                icon: <Layers className="h-5 w-5" />,
                title: 'Admin Panel',
                description: 'Manage users, orgs, and instances. Full control from one place.',
                tag: 'Dashboard'
              },
              {
                icon: <Paintbrush className="h-5 w-5" />,
                title: 'White-Label Ready',
                description: 'Swap colors, logos, copy in minutes. Make it yours.',
                tag: 'Branding'
              },
              {
                icon: <FileText className="h-5 w-5" />,
                title: 'Docs & Scripts',
                description: 'Setup guides that work. Fewer support tickets, fewer refunds.',
                tag: 'Docs'
              }
            ].map((feature, idx) => (
              <AnimatedSection key={idx} delay={idx * 50}>
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 h-full hover:border-zinc-700 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      {feature.icon}
                    </div>
                    <span className="text-xs text-zinc-600 font-medium">{feature.tag}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Tech Stack */}
          <AnimatedSection delay={400}>
            <div className="mt-16 pt-16 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm text-center mb-8">BUILT WITH</p>
              <div className="flex flex-wrap justify-center gap-3">
                {techStackData.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
                  >
                    <tech.icon 
                      className="w-4 h-4" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm text-zinc-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Alternative */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-zinc-500 text-sm font-medium mb-3">THE ALTERNATIVE</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Build it yourself?
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="h-5 w-5 text-zinc-500" />
                    <span className="text-zinc-500 font-medium">Building from scratch</span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Set up Next.js project structure',
                      'Integrate Stytch or build custom auth',
                      'Wire up Stripe subscriptions + webhooks',
                      'Build admin dashboard from scratch',
                      'Create agent provisioning system',
                      'Implement secrets encryption',
                      'Add realtime status updates',
                      'Write deployment scripts',
                      'Document everything'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-500 text-sm">
                        <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-zinc-400 font-mono text-sm">
                    Estimated time: <span className="text-red-400">2–4 weeks</span>
                  </p>
                </div>
                
                <div className="md:border-l md:border-zinc-800 md:pl-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Package className="h-5 w-5 text-emerald-400" />
                    <span className="text-white font-medium">With ClawWrapper</span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Clone the repository',
                      'Add your environment variables',
                      'Run the deploy command'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <Check className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-zinc-400 font-mono text-sm">
                    Estimated time: <span className="text-emerald-400">&lt;1 day</span>
                  </p>
                  
                  <div className="mt-8 p-4 bg-zinc-800/50 rounded-lg">
                    <p className="text-sm text-zinc-400">
                      You get the same result — but you keep 2–4 weeks of your life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-emerald-400 text-sm font-medium mb-3">PRICING</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                One price. Everything included.
              </h2>
              <p className="text-zinc-400">
                No subscriptions. No per-seat fees. Pay once, own it forever.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
              {/* Early bird badge */}
              <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                EARLY BIRD
              </div>

              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-zinc-500 line-through">$299</span>
                  <span className="text-5xl font-bold">$99</span>
                </div>
                <p className="text-zinc-500 text-sm">One-time payment · Lifetime access</p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  'Complete Next.js + TypeScript codebase',
                  'Auth with org accounts (Stytch)',
                  'Stripe billing (subscriptions, webhooks, portal)',
                  'Admin dashboard',
                  'Agent provisioning on AWS',
                  'Encrypted secrets storage',
                  'White-label branding',
                  'Setup scripts + documentation',
                  'Lifetime updates',
                  '14-day money-back guarantee'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleGetClawWrapper}
                className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-6 rounded-xl"
              >
                Get ClawWrapper
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-zinc-500 text-xs mt-4">
                Secure checkout via Stripe
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-center text-zinc-500 text-sm mt-8">
              Only 5 spots at early-bird pricing. Then it's $299.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-emerald-400 text-sm font-medium mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Common questions
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Accordion type="single" collapsible className="space-y-2">
              {[
                {
                  question: 'What do I actually get?',
                  answer: 'A complete, working codebase. Not a tutorial or a starter template. You get auth, billing, admin dashboard, agent provisioning, and deployment scripts. Clone it, add your keys, deploy it. Done.'
                },
                {
                  question: 'Do I need to be a developer?',
                  answer: 'You should be comfortable running terminal commands and editing environment variables. If that sounds scary, hire a freelancer — they can deploy this in a day.'
                },
                {
                  question: 'How is this different from ShipFast or other boilerplates?',
                  answer: 'Those are generic SaaS starters. ClawWrapper is built specifically for OpenClaw wrappers — the agent provisioning, instance lifecycle management, and dashboard are all purpose-built for this use case.'
                },
                {
                  question: 'Can I use this for multiple products?',
                  answer: 'Yes. Clone the repo as many times as you want. Different brands, different niches, same codebase. One purchase, unlimited wrappers.'
                },
                {
                  question: 'What if it doesn\'t work for me?',
                  answer: '14-day money-back guarantee. If you can\'t get it deployed or it\'s not what you expected, email me and I\'ll refund you. No questions.'
                },
                {
                  question: 'What\'s included in updates?',
                  answer: 'Bug fixes, security patches, and improvements to the codebase. You get access to the repo — pull updates whenever you want. No extra cost.'
                }
              ].map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl px-6 data-[state=open]:border-zinc-700"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-4 text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to ship?
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Stop building infrastructure. Start building your business.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Button 
              onClick={handleGetClawWrapper}
              size="lg"
              className="bg-white hover:bg-zinc-200 text-black font-semibold px-8 py-6 text-base rounded-xl"
            >
              Get ClawWrapper — $99
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-zinc-500">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Full source code
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                Lifetime updates
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                14-day refund
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Terminal className="h-4 w-4 text-black" />
              </div>
              <span className="font-semibold">ClawWrapper</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>

            <p className="text-zinc-500 text-sm">
              © 2026 ClawWrapper
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800 z-40">
        <Button 
          onClick={handleGetClawWrapper}
          className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-4 rounded-xl"
        >
          Get ClawWrapper — $99
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
