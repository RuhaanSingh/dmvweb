
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import ProcessStep from "@/components/ProcessStep";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import Button from "@/components/Button";
import { Helmet } from "@/components/helmet/Helmet";

// Import Lucide icons
import {
  ArrowRight,
  Code,
  LayoutGrid,
  ShoppingBag,
  Search,
  PaintBucket,
  Smartphone,
  Wrench,
  PhoneCall,
  Palette,
  MessageSquare,
  Rocket,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    services: false,
    portfolio: false,
    testimonials: false,
    process: false,
    pricing: false,
    contact: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "services",
        "portfolio",
        "testimonials",
        "process",
        "pricing",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight * 0.8;
          
          setIsVisible((prev) => ({
            ...prev,
            [section]: isInView,
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <LayoutGrid size={24} />,
      title: "Portfolio Websites",
      description: "Showcase your work with a stunning portfolio site designed to impress potential clients and employers.",
    },
    {
      icon: <Code size={24} />,
      title: "Business Websites",
      description: "Establish your online presence with a professional business website tailored to your brand.",
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "E-Commerce Solutions",
      description: "Sell products online with a seamless, secure, and user-friendly e-commerce website.",
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Improve your visibility in search engines and attract more targeted traffic to your website.",
    },
    {
      icon: <PaintBucket size={24} />,
      title: "Branding & Design",
      description: "Create a cohesive brand identity with custom logos, color schemes, and visual elements.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Optimization",
      description: "Ensure your website looks and performs flawlessly on all devices, from desktops to smartphones.",
    },
    {
      icon: <Wrench size={24} />,
      title: "Maintenance & Support",
      description: "Keep your website secure, up-to-date, and running smoothly with our maintenance services.",
    },
  ];

  const portfolioProjects = [
    {
      title: "Mountain Retreat Resort",
      category: "Hospitality",
      description: "Modern website design for a luxury mountain resort featuring immersive imagery and seamless booking.",
      imageSrc: "https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1000",
      link: "/case-study/mountain-retreat",
    },
    {
      title: "Artisan Bakery",
      category: "Food & Beverage",
      description: "E-commerce solution for an artisan bakery with online ordering and local delivery options.",
      imageSrc: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1000",
      link: "/case-study/artisan-bakery",
    },
    {
      title: "Architects Collective",
      category: "Architecture",
      description: "Portfolio website for an architecture firm showcasing their projects with interactive 3D models.",
      imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1000",
      link: "/case-study/architects-collective",
    },
    {
      title: "Finance Advisory",
      category: "Finance",
      description: "Corporate website for a financial advisory firm with secure client portals and resource library.",
      imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000",
      link: "/case-study/finance-advisory",
    },
  ];

  const testimonials = [
    {
      quote: "DMV Web Designs transformed our outdated website into a modern, functional platform that perfectly represents our brand. The increased conversion rate speaks for itself.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "Mountain Retreat Resort",
      avatarSrc: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      quote: "The team at DMV understood our vision right away. Their design expertise and attention to detail resulted in a website that exceeds all our expectations.",
      name: "Michael Chen",
      role: "Founder",
      company: "Artisan Bakery",
      avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote: "Working with DMV Web Designs was a game-changer for our architecture firm. Our new portfolio site has helped us secure major international projects.",
      name: "Alessandra Romano",
      role: "Partner",
      company: "Architects Collective",
      avatarSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const processSteps = [
    {
      number: 1,
      icon: <PhoneCall size={24} />,
      title: "Discovery Call",
      description: "We start by understanding your goals, target audience, and specific requirements for your website.",
    },
    {
      number: 2,
      icon: <Palette size={24} />,
      title: "Design Mockup",
      description: "Our designers create detailed mockups of your website, focusing on user experience and visual appeal.",
    },
    {
      number: 3,
      icon: <MessageSquare size={24} />,
      title: "Feedback & Revision",
      description: "We gather your feedback and make revisions to ensure the design aligns perfectly with your vision.",
    },
    {
      number: 4,
      icon: <Code size={24} />,
      title: "Development",
      description: "Our developers bring the design to life, coding a responsive, fast, and functional website.",
    },
    {
      number: 5,
      icon: <Rocket size={24} />,
      title: "Launch",
      description: "After thorough testing, we deploy your website and ensure everything works flawlessly.",
    },
    {
      number: 6,
      icon: <Wrench size={24} />,
      title: "Support",
      description: "We provide ongoing support and maintenance to keep your website secure and up-to-date.",
      isLast: true,
    },
  ];

  const pricingPlans = [
    {
      tier: "Starter",
      price: "$1,499",
      description: "Perfect for individuals and small projects needing a professional online presence.",
      features: [
        "Custom design",
        "Mobile responsive",
        "Up to 5 pages",
        "Basic SEO setup",
        "Contact form",
        "3 months support",
      ],
    },
    {
      tier: "Business",
      price: "$2,999",
      description: "Comprehensive solution for established businesses looking to enhance their digital presence.",
      features: [
        "Premium custom design",
        "Mobile responsive",
        "Up to 10 pages",
        "Advanced SEO optimization",
        "Content management system",
        "Blog integration",
        "Social media integration",
        "6 months support",
      ],
      popular: true,
    },
    {
      tier: "Premium",
      price: "$4,999+",
      description: "Advanced solutions for businesses with complex requirements and custom functionality.",
      features: [
        "Elite custom design",
        "Mobile responsive",
        "Unlimited pages",
        "Comprehensive SEO strategy",
        "E-commerce functionality",
        "Custom animations",
        "Advanced analytics",
        "Custom integrations",
        "12 months support",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does it take to complete a website?",
      answer: "The timeline varies depending on the complexity of your project. A standard business website typically takes 4-6 weeks from start to finish, while larger projects with custom functionality may take 8-12 weeks or more."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer various maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. Our support includes regular updates, security monitoring, content updates, and technical support."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices, from smartphones and tablets to desktop computers."
    },
    {
      question: "Do you help with website hosting?",
      answer: "Yes, we can recommend and set up reliable hosting solutions tailored to your website's needs. We handle all technical aspects of deployment to ensure your website performs optimally."
    },
    {
      question: "Can I update the website myself after it's built?",
      answer: "Yes, we build most of our websites on user-friendly content management systems, allowing you to easily update content, add pages, or make simple changes. We also provide training on how to use your website."
    },
  ];

  return (
    <>
      <Helmet>
        <title>DMV Web Designs | Modern Web Design & Development</title>
        <meta name="description" content="DMV Web Designs creates modern, responsive, and visually impressive websites for individuals and businesses. Specializing in portfolios, corporate sites, landing pages, and small business websites." />
        <meta property="og:title" content="DMV Web Designs | Modern Web Design & Development" />
        <meta property="og:description" content="Creating stunning websites with modern design principles and cutting-edge technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmvwebdesigns.com" />
        <meta property="og:image" content="https://dmvwebdesigns.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebDesignService",
            "name": "DMV Web Designs",
            "description": "Modern web design and development services for businesses and individuals.",
            "url": "https://dmvwebdesigns.com",
            "areaServed": "Worldwide",
            "offers": {
              "@type": "Offer",
              "price": "1499",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="bg-navy-800">
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-navy-800 opacity-95"></div>
            <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-500 filter blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-blue-500 filter blur-[120px] animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
                We Create <span className="text-gradient">Beautiful</span> <br className="hidden md:block" />Digital Experiences
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 animate-fade-in animate-delay-200">
                Modern, responsive, and visually impressive websites for individuals and businesses that stand out in the digital world.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-300">
                <Button variant="primary" size="lg" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <a href="#about" className="text-white/50 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-purple-500/20 filter blur-[100px]"></div>
          
          <div className={`section-container ${isVisible.about ? 'animate-fade-in' : 'opacity-0'}`}>
            <SectionHeading
              title="Crafting Digital Excellence"
              subtitle="At DMV Web Designs, we combine creativity with technical expertise to build websites that not only look stunning but also perform exceptionally. Our mission is to help businesses establish a powerful online presence."
            />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`glass-card rounded-xl p-8 ${isVisible.about ? 'animate-slide-left animate-delay-100' : 'opacity-0'}`}>
                <h3 className="text-2xl font-bold mb-4 text-white">User Experience</h3>
                <p className="text-white/80 mb-6">
                  We create intuitive, engaging user experiences that guide visitors seamlessly through your website.
                </p>
                <div className="flex items-center">
                  <div className="h-2 bg-gray-300 rounded-full flex-grow">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-[98%]"></div>
                  </div>
                  <span className="ml-4 text-white">98%</span>
                </div>
              </div>

              <div className={`glass-card rounded-xl p-8 ${isVisible.about ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
                <h3 className="text-2xl font-bold mb-4 text-white">Performance</h3>
                <p className="text-white/80 mb-6">
                  Fast-loading, optimized websites that provide smooth experiences and rank better in search results.
                </p>
                <div className="flex items-center">
                  <div className="h-2 bg-gray-300 rounded-full flex-grow">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-[95%]"></div>
                  </div>
                  <span className="ml-4 text-white">95%</span>
                </div>
              </div>

              <div className={`glass-card rounded-xl p-8 ${isVisible.about ? 'animate-slide-right animate-delay-300' : 'opacity-0'}`}>
                <h3 className="text-2xl font-bold mb-4 text-white">Conversion</h3>
                <p className="text-white/80 mb-6">
                  Strategic designs that effectively convert visitors into customers through clear calls-to-action.
                </p>
                <div className="flex items-center">
                  <div className="h-2 bg-gray-300 rounded-full flex-grow">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-[92%]"></div>
                  </div>
                  <span className="ml-4 text-white">92%</span>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={isVisible.about ? 'animate-slide-left animate-delay-400' : 'opacity-0'}>
                <h3 className="text-3xl font-bold mb-6 text-white">Who We Are</h3>
                <p className="text-white/80 mb-4">
                  DMV Web Designs is a team of passionate designers and developers dedicated to creating exceptional digital experiences. With years of industry experience, we understand what makes a website not just visually appealing, but also functionally powerful.
                </p>
                <p className="text-white/80 mb-6">
                  Our approach combines cutting-edge design trends with solid development practices to deliver websites that stand the test of time. We believe in building long-term relationships with our clients, supporting them through every stage of their digital journey.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center">
                    <CheckCircle className="text-purple-500 mr-2" size={20} />
                    <span className="text-white">SEO Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-purple-500 mr-2" size={20} />
                    <span className="text-white">Mobile Responsiveness</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-purple-500 mr-2" size={20} />
                    <span className="text-white">Fast Load Times</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-purple-500 mr-2" size={20} />
                    <span className="text-white">Accessible Design</span>
                  </div>
                </div>
              </div>
              <div className={`relative ${isVisible.about ? 'animate-slide-right animate-delay-400' : 'opacity-0'}`}>
                <div className="absolute -top-6 -left-6 w-72 h-72 bg-purple-500/10 rounded-full filter blur-md"></div>
                <div className="glass-card rounded-xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000" 
                    alt="Web Design Process"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-navy-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-500/10 filter blur-[100px]"></div>
          
          <div className={`section-container ${isVisible.services ? 'animate-fade-in' : 'opacity-0'}`}>
            <SectionHeading
              title="Our Services"
              subtitle="We offer comprehensive web design and development services tailored to meet your specific needs and objectives. Each service is delivered with attention to detail and a focus on results."
              gradient
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`${isVisible.services ? `animate-scale-up animate-delay-${(index % 5) * 100}` : 'opacity-0'}`}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    gradient={index % 2 === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500/10 filter blur-[120px]"></div>
          
          <div className={`section-container ${isVisible.portfolio ? 'animate-fade-in' : 'opacity-0'}`}>
            <SectionHeading
              title="Our Portfolio"
              subtitle="Explore some of our recent projects showcasing our expertise in creating beautiful, functional websites across various industries."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioProjects.map((project, index) => (
                <div 
                  key={index}
                  className={`${isVisible.portfolio ? `animate-scale-up animate-delay-${(index % 4) * 100}` : 'opacity-0'}`}
                >
                  <PortfolioCard
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    link={project.link}
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className={isVisible.portfolio ? 'animate-fade-in animate-delay-400' : 'opacity-0'}>
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-navy-900/50 relative overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 filter blur-[100px]"></div>
          
          <div className={`section-container ${isVisible.testimonials ? 'animate-fade-in' : 'opacity-0'}`}>
            <SectionHeading
              title="Client Testimonials"
              subtitle="Don't just take our word for it. Here's what our clients have to say about working with DMV Web Designs."
              gradient
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`${isVisible.testimonials ? `animate-fade-in animate-delay-${index * 200}` : 'opacity-0'}`}
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    role={testimonial.role}
                    company={testimonial.company}
                    avatarSrc={testimonial.avatarSrc}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-blue-500/5 filter blur-[100px]"></div>
          
          <div className={`section-container ${isVisible.process ? 'animate-fade-in' : 'opacity-0'}`}>
            <SectionHeading
              title="Our Process"
              subtitle="We follow a structured, collaborative approach to ensure every project is completed efficiently and meets your expectations."
            />

            <div className="mt-16 max-w-3xl mx-auto">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`${isVisible.process ? `animate-fade-in animate-delay-${index * 100}` : 'opacity-0'}`}
                >
                  <ProcessStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    isLast={step.isLast}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-navy-900/50 relative overflow-hidden">
          <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-purple-500/10 filter blur-[120px]"></div>
          
          <div className={`section-container ${isVisible.pricing ? 'animate-fade-in' : 'opacity-0'}`}>
            <SectionHeading
              title="Pricing Plans"
              subtitle="Transparent pricing options designed to meet different needs and budgets. All plans include custom design, responsive development, and ongoing support."
              gradient
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`${isVisible.pricing ? `animate-scale-up animate-delay-${index * 200}` : 'opacity-0'}`}
                >
                  <PricingCard
                    tier={plan.tier}
                    price={plan.price}
                    description={plan.description}
                    features={plan.features}
                    popular={plan.popular}
                  />
                </div>
              ))}
            </div>

            <div className={`mt-24 max-w-3xl mx-auto ${isVisible.pricing ? 'animate-fade-in animate-delay-500' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Frequently Asked Questions</h3>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 filter blur-[120px]"></div>
          
          <div className={`section-container ${isVisible.contact ? 'animate-fade-in' : 'opacity-0'}`}>
            <SectionHeading
              title="Get in Touch"
              subtitle="Ready to start your project? Contact us today for a free consultation. We'll discuss your needs and provide a tailored solution to achieve your goals."
            />

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className={`glass-card rounded-xl p-8 ${isVisible.contact ? 'animate-slide-left' : 'opacity-0'}`}>
                <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project-type" className="block text-sm font-medium text-white/80 mb-1">
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    >
                      <option value="" className="bg-navy-800">Select project type</option>
                      <option value="portfolio" className="bg-navy-800">Portfolio Website</option>
                      <option value="business" className="bg-navy-800">Business Website</option>
                      <option value="ecommerce" className="bg-navy-800">E-Commerce Website</option>
                      <option value="other" className="bg-navy-800">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button variant="primary" className="w-full justify-center">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className={`flex flex-col justify-center ${isVisible.contact ? 'animate-slide-right' : 'opacity-0'}`}>
                <div className="glass-card rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-purple-500 mr-4 mt-1" size={20} />
                      <div>
                        <p className="text-white">123 Web Street</p>
                        <p className="text-white/70">Design City, 10001</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-purple-500 mr-4" size={20} />
                      <p className="text-white">(123) 456-7890</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="text-purple-500 mr-4" size={20} />
                      <p className="text-white">info@dmvwebdesigns.com</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">Schedule a Call</h3>
                  <p className="text-white/80 mb-4">
                    Prefer to talk directly? Schedule a 30-minute consultation with one of our experts.
                  </p>
                  <Button variant="outline" className="w-full justify-center">
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
