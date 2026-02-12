import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { 
  Check, 
  X, 
  Sparkles, 
  Zap, 
  Lock, 
  CreditCard, 
  LayoutDashboard, 
  Globe, 
  Send, 
  Palette, 
  Smartphone,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to section with smooth animation
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGetClawWrapper = () => {
    // In a real scenario, this would redirect to checkout
    console.log('Initiating checkout...');
    alert('Redirecting to checkout... (This is a demo)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ClawWrapper</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                FAQ
              </button>
              <Button onClick={handleGetClawWrapper} size="sm" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Get ClawWrapper
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
              Launch Your OpenClaw <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Wrapper Fast
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              OpenClaw wrappers are doing <span className="font-bold text-gray-900">$4K-$22K/mo</span>. Yours could be next.
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Stop wiring up OAuth, payments, and deployment from scratch. Get a production-ready SaaS you can rebrand and ship today.
            </p>
            
            {/* Hero CTA */}
            <div className="flex flex-col items-center space-y-6">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-3xl font-light text-gray-400 line-through">$299</span>
                    <span className="text-5xl font-bold text-blue-600">$99</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Pay once. Full source code included.</p>
                  <p className="text-red-600 font-semibold text-sm mt-2">
                    Only 5 spots left at this price
                  </p>
                </div>
                <Button 
                  onClick={handleGetClawWrapper}
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Get ClawWrapper
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Revenue Section */}
      <section id="social-proof" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wrappers Making Money Right Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Other OpenClaw wrappers showing what's possible. Different brands, real revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* TrustMRR Example */}
            <Card 
              className="p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage('trustmrr')}
            >
              <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-700">$4K-$22K/mo</p>
                  <p className="text-sm text-emerald-600 mt-2">TrustMRR Marketplace</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Multiple wrappers selling for $3K–$22K/mo</h3>
              <p className="text-gray-600 text-sm">
                OpenClaw wrappers listed on TrustMRR, each generating thousands in monthly recurring revenue. This is the kind of business you can build with the same starting point.
              </p>
            </Card>

            {/* $4K in 6 days Example */}
            <Card 
              className="p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage('4k-6days')}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-blue-700">$4K in 6 days</p>
                  <p className="text-sm text-blue-600 mt-2">91 Active Subscriptions</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">$4K MRR in just 6 days after launch</h3>
              <p className="text-gray-600 text-sm">
                From zero to $4,779 MRR with 91 active subscriptions in under a week. The infrastructure was already built, so the only job was marketing.
              </p>
            </Card>

            {/* SimpleClaw Example */}
            <Card 
              className="p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage('simpleclaw')}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-purple-700">$22K+</p>
                  <p className="text-sm text-purple-600 mt-2">All-Time Revenue</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">$22K all-time revenue and climbing</h3>
              <p className="text-gray-600 text-sm">
                SimpleClaw hit $22,773 in total revenue with $21,763 profit margin. A single wrapper, consistently earning month after month.
              </p>
            </Card>
          </div>

          {/* Marc Lou Testimonial */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                  ML
                </div>
              </div>
              <div className="flex-1">
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  "It's OpenClaw wrappers time!"
                </p>
                <p className="text-gray-700 font-semibold">Marc Lou</p>
                <p className="text-gray-600">Indie hacker, $2M+ in revenue from solo products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Weeks of Work, or Hours with ClawWrapper
            </h2>
            <p className="text-xl text-gray-600">
              Skip the boring infrastructure work and go straight to making money.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Building From Scratch */}
            <Card className="p-8 bg-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Building From Scratch</h3>
                <p className="text-3xl font-bold text-red-600">2–4 weeks of work</p>
              </div>
              <ul className="space-y-3">
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
                  <li key={idx} className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* With ClawWrapper */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">With ClawWrapper</h3>
                <p className="text-3xl font-bold text-green-600">Less than 1 day</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Step 1: Clone the repo & set your env variables',
                  'Step 2: Connect your Stripe, Supabase & VPS keys',
                  'Step 3: Run the setup script & deploy to your server'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-blue-200 pt-6 mt-6">
                <p className="font-bold text-gray-900 mb-3">What you end up with</p>
                <ul className="space-y-2">
                  {[
                    'Live product accepting payments',
                    'Admin dashboard tracking users',
                    'Full source code you own forever',
                    'HTTPS, SEO, and monitoring, done'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Ship
            </h2>
            <p className="text-xl text-gray-600">
              ClawWrapper comes loaded with every feature you'd spend weeks building yourself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: 'Remote Docker Deployment',
                description: 'Deploy user instances to your VPS over SSH. Automated setup script, container management, and resource limits, all built in.'
              },
              {
                icon: <Lock className="h-8 w-8 text-green-600" />,
                title: 'Supabase Auth & Database',
                description: 'Google OAuth login, session persistence, row-level security, and a full Postgres database. All pre-configured and ready to go.'
              },
              {
                icon: <CreditCard className="h-8 w-8 text-purple-600" />,
                title: 'Stripe Payments',
                description: 'Subscription billing with Stripe Checkout, webhooks, and customer portal. Start collecting revenue from day one.'
              },
              {
                icon: <LayoutDashboard className="h-8 w-8 text-orange-600" />,
                title: 'Admin Dashboard',
                description: 'Manage users, view analytics, and control your SaaS from a built-in admin panel. No extra tools needed.'
              },
              {
                icon: <Globe className="h-8 w-8 text-cyan-600" />,
                title: 'Caddy Reverse Proxy',
                description: 'Automatic HTTPS with Let\'s Encrypt. Zero-config SSL certificates for your custom domain.'
              },
              {
                icon: <Send className="h-8 w-8 text-blue-500" />,
                title: 'Telegram Bot Integration',
                description: 'Built-in Telegram bot for notifications, user support, and admin alerts. Stay connected to your SaaS.'
              },
              {
                icon: <Palette className="h-8 w-8 text-pink-600" />,
                title: 'Full Brand Customization',
                description: 'Change the name, logo, colors, and copy in minutes. Make it yours. No trace of the boilerplate.'
              },
              {
                icon: <Smartphone className="h-8 w-8 text-indigo-600" />,
                title: 'Responsive & Server-Rendered',
                description: 'Mobile-first design with Tailwind CSS and server-rendered Next.js pages. Add your own meta tags and OG images to match your brand.'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Built with</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase',
                'Stripe', 'Docker', 'Caddy', 'Telegram', 'Node.js'
              ].map((tech, idx) => (
                <div key={idx} className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-700">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              One Price. Everything Included.
            </h2>
            <p className="text-xl text-gray-600">
              No subscriptions. No per-seat pricing. No hidden fees.
            </p>
          </div>

          <Card className="p-10 shadow-2xl bg-white">
            <div className="text-center mb-8">
              <p className="text-red-600 font-bold text-lg mb-4">
                Early-bird: only 5 spots at this price
              </p>
              <p className="text-gray-600 mb-2">One-time payment</p>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-4xl font-light text-gray-400 line-through">$299</span>
                <span className="text-6xl font-bold text-blue-600">$99</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Full Next.js + TypeScript source code (strict mode)',
                'Google OAuth login & session management',
                'Stripe subscriptions, webhooks & customer portal',
                'Admin dashboard with user & instance management',
                'Remote Docker deployment over SSH to your VPS',
                'Caddy reverse proxy with automatic HTTPS',
                'Postgres database with row-level security',
                'Telegram bot integration (optional)',
                'White-label branding via environment variables',
                'VPS setup script & step-by-step documentation',
                'Lifetime updates, no subscription',
                'Unlimited products, clone for each brand'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={handleGetClawWrapper}
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get ClawWrapper
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know before you buy.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
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
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-gray-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What can OpenClaw do for you?
            </h2>
            <p className="text-xl text-gray-600">
              One assistant, thousands of use cases
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
            {[
              // Row 1
              ['Read & summarize email', 'Draft replies and follow-ups', 'Translate messages in real time', 'Organize your inbox', 'Answer support tickets', 'Summarize long documents', 'Notify before a meeting', 'Schedule meetings from chat'],
              // Row 2
              ['Remind you of deadlines', 'Plan your week', 'Take meeting notes', 'Sync across time zones', 'Do your taxes', 'Track expenses and receipts', 'Compare insurance quotes', 'Manage subscriptions'],
              // Row 3
              ['Run payroll calculations', 'Negotiate refunds', 'Find coupons', 'Find best prices online', 'Find discount codes', 'Price-drop alerts', 'Compare product specs', 'Negotiate deals'],
              // Row 4
              ['Write contracts and NDAs', 'Research competitors', 'Screen and prioritize leads', 'Generate invoices', 'Create presentations from bullet points', 'Book travel and hotels', 'Find recipes from ingredients', 'Draft social posts'],
              // Row 5
              ['Monitor news and alerts', 'Set and track goals', 'Screen cold outreach', 'Draft job descriptions', 'Run standup summaries', 'Track OKRs and KPIs', '', '']
            ].flat().filter(Boolean).map((useCase, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg p-4 text-sm text-gray-700 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                {useCase}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 italic">
            PS. You can add as many use cases as you want via natural language
          </p>
        </div>
      </section>

      {/* SimpleClaw Comparison */}
      <section id="simpleclaw" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Deploy OpenClaw under 1 minute
              </h2>
              <p className="text-xl text-gray-600">
                Avoid all technical complexity and one-click deploy your own 24/7 active OpenClaw instance under 1 minute.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Method */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional</h3>
                <ul className="space-y-3">
                  {[
                    { task: 'Purchasing local virtual machine', time: '15 min' },
                    { task: 'Creating SSH keys and storing securely', time: '10 min' },
                    { task: 'Connecting to the server via SSH', time: '5 min' },
                    { task: 'Installing Node.js and NPM', time: '5 min' },
                    { task: 'Installing OpenClaw', time: '7 min' },
                    { task: 'Setting up OpenClaw', time: '10 min' },
                    { task: 'Connecting to AI provider', time: '4 min' },
                    { task: 'Pairing with Telegram', time: '4 min' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.task}</span>
                      <span className="font-semibold text-gray-900">{item.time}</span>
                    </li>
                  ))}
                  <li className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-red-600">60 min</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4 italic">
                  If you're non-technical, multiply these times by 10 — you have to learn each step before doing.
                </p>
              </Card>

              {/* SimpleClaw Method */}
              <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">SimpleClaw</h3>
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-green-600 mb-4">&lt;1 min</p>
                    <p className="text-lg text-gray-700">
                      Pick a model, connect Telegram, deploy — done under 1 minute.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-4">
                  Servers, SSH and OpenClaw Environment are already set up, waiting to get assigned. Simple, secure and fast connection to your bot.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Stop Building Infrastructure. Start Earning.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every day you spend wiring up OAuth, Stripe webhooks, and Docker deployment is a day you're not making money. Other wrappers built on this stack are doing $4K-$22K/mo. Yours could be next.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-3xl font-light line-through opacity-70">$299</span>
              <span className="text-5xl font-bold">$99</span>
            </div>
            <p className="text-lg mb-4 opacity-90">
              Only 5 spots left at early-bird pricing. Then it's $299.
            </p>
          </div>

          <Button 
            onClick={handleGetClawWrapper}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-6 px-12 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-lg"
          >
            Start Building Now - $99
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-90">
            <span className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Full source code
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Lifetime access
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Free updates
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Comprehensive docs
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold text-white">ClawWrapper</span>
              </div>
              <p className="text-sm">
                Launch your OpenClaw wrapper fast with production-ready infrastructure.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SimpleClaw.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>Built with ❤️ by <a href="#" className="text-blue-500 hover:text-blue-400">Savio Martin</a></p>
            <p className="mt-2">© 2024 ClawWrapper. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg z-40">
        <Button 
          onClick={handleGetClawWrapper}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl"
        >
          Get ClawWrapper - $99
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Lightbox for images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full bg-white rounded-xl p-8">
            <div className="text-right mb-4">
              <Button variant="ghost" onClick={() => setSelectedImage(null)}>
                Close
              </Button>
            </div>
            <div className="text-center">
              <p className="text-gray-600">Revenue proof screenshot would be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">Image: {selectedImage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
