<?php get_header(); ?>

<main class="main-content">
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
        <div class="hero-background">
            <div class="hero-overlay"></div>
            <div class="hero-blur-1"></div>
            <div class="hero-blur-2"></div>
        </div>
        
        <div class="section-container">
            <div class="hero-content">
                <h1 class="hero-title animate-fade-in">
                    We Create <span class="text-gradient">Beautiful</span><br class="hero-break">Digital Experiences
                </h1>
                <p class="hero-subtitle animate-fade-in animate-delay-200">
                    Modern, responsive, and visually impressive websites for individuals and businesses that stand out in the digital world.
                </p>
                <div class="hero-buttons animate-fade-in animate-delay-300">
                    <a href="#contact" class="btn btn-primary btn-lg">
                        Get Started <span class="arrow">→</span>
                    </a>
                    <a href="#portfolio" class="btn btn-outline btn-lg">
                        View Our Work
                    </a>
                </div>
            </div>
        </div>
        
        <div class="scroll-indicator">
            <a href="#about" class="scroll-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section">
        <div class="section-background">
            <div class="bg-blur-1"></div>
        </div>
        
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title">Crafting Digital Excellence</h2>
                <p class="section-subtitle">
                    At DMV Web Designs, we combine creativity with technical expertise to build websites that not only look stunning but also perform exceptionally. Our mission is to help businesses establish a powerful online presence.
                </p>
            </div>

            <div class="about-cards grid grid-3">
                <div class="glass-card about-card animate-slide-left animate-delay-100">
                    <h3 class="card-title">User Experience</h3>
                    <p class="card-description">
                        We create intuitive, engaging user experiences that guide visitors seamlessly through your website.
                    </p>
                </div>

                <div class="glass-card about-card animate-fade-in animate-delay-200">
                    <h3 class="card-title">Performance</h3>
                    <p class="card-description">
                        Fast-loading, optimized websites that provide smooth experiences and rank better in search results.
                    </p>
                </div>

                <div class="glass-card about-card animate-slide-right animate-delay-300">
                    <h3 class="card-title">Conversion</h3>
                    <p class="card-description">
                        Strategic designs that effectively convert visitors into customers through clear calls-to-action.
                    </p>
                </div>
            </div>

            <div class="about-content grid grid-2">
                <div class="about-text animate-slide-left animate-delay-400">
                    <h3 class="content-title">Who We Are</h3>
                    <p class="content-paragraph">
                        DMV Web Designs is a team of passionate designers and developers dedicated to creating exceptional digital experiences. With years of industry experience, we understand what makes a website not just visually appealing, but also functionally powerful.
                    </p>
                    <p class="content-paragraph">
                        Our approach combines cutting-edge design trends with solid development practices to deliver websites that stand the test of time. We believe in building long-term relationships with our clients, supporting them through every stage of their digital journey.
                    </p>
                    <div class="feature-list">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>SEO Optimization</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Mobile Responsiveness</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Fast Load Times</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span>Accessible Design</span>
                        </div>
                    </div>
                </div>
                <div class="about-image animate-slide-right animate-delay-400">
                    <div class="image-wrapper glass-card">
                        <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000" alt="Web Design Process" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
        <div class="section-background">
            <div class="bg-blur-2"></div>
        </div>
        
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title"><span class="text-gradient">Our Services</span></h2>
                <p class="section-subtitle">
                    We offer comprehensive web design and development services tailored to meet your specific needs and objectives. Each service is delivered with attention to detail and a focus on results.
                </p>
            </div>

            <div class="services-grid grid grid-3">
                <?php 
                $services = [
                    ['icon' => '🖥️', 'title' => 'Portfolio Websites', 'description' => 'Showcase your work with a stunning portfolio site designed to impress potential clients and employers.'],
                    ['icon' => '💼', 'title' => 'Business Websites', 'description' => 'Establish your online presence with a professional business website tailored to your brand.'],
                    ['icon' => '🛒', 'title' => 'E-Commerce Solutions', 'description' => 'Sell products online with a seamless, secure, and user-friendly e-commerce website.'],
                    ['icon' => '🔍', 'title' => 'SEO Optimization', 'description' => 'Improve your visibility in search engines and attract more targeted traffic to your website.'],
                    ['icon' => '🎨', 'title' => 'Branding & Design', 'description' => 'Create a cohesive brand identity with custom logos, color schemes, and visual elements.'],
                    ['icon' => '📱', 'title' => 'Mobile Optimization', 'description' => 'Ensure your website looks and performs flawlessly on all devices, from desktops to smartphones.'],
                    ['icon' => '🔧', 'title' => 'Maintenance & Support', 'description' => 'Keep your website secure, up-to-date, and running smoothly with our maintenance services.']
                ];
                
                foreach($services as $index => $service): ?>
                <div class="glass-card service-card animate-scale-up animate-delay-<?php echo ($index % 5) * 100; ?>">
                    <div class="service-icon"><?php echo $service['icon']; ?></div>
                    <h3 class="service-title"><?php echo $service['title']; ?></h3>
                    <p class="service-description"><?php echo $service['description']; ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio-section">
        <div class="section-background">
            <div class="bg-blur-3"></div>
        </div>
        
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title">Our Portfolio</h2>
                <p class="section-subtitle">
                    Explore some of our recent projects showcasing our expertise in creating beautiful, functional websites across various industries.
                </p>
            </div>

            <div class="portfolio-grid grid grid-2">
                <?php 
                $projects = [
                    ['title' => 'Personal Portfolio', 'category' => 'Portfolio Website', 'description' => 'A modern, responsive portfolio website showcasing skills, projects and achievements with sleek animations and interactions.', 'image' => get_template_directory_uri() . '/assets/portfolio-1.jpg', 'link' => 'https://ruhaansingh.netlify.app/'],
                    ['title' => 'Human Hope Foundation', 'category' => 'Non-Profit', 'description' => 'Website for an NGO dedicated to creating positive change through education and community support programs.', 'image' => get_template_directory_uri() . '/assets/portfolio-2.jpg', 'link' => 'https://humanhopefoundation.netlify.app/'],
                    ['title' => 'Startups and Businesses', 'category' => 'Healthcare Tech', 'description' => 'GlaucoGuard - Revolutionary AI-powered platform for early glaucoma detection and diagnosis.', 'image' => get_template_directory_uri() . '/assets/portfolio-3.jpg', 'link' => 'https://glaucoguard.netlify.app/'],
                    ['title' => 'Finance Advisory', 'category' => 'Finance', 'description' => 'Corporate website for a financial advisory firm with secure client portals and resource library.', 'image' => 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000', 'link' => '#']
                ];
                
                foreach($projects as $index => $project): ?>
                <div class="glass-card portfolio-card animate-scale-up animate-delay-<?php echo ($index % 4) * 100; ?>">
                    <div class="portfolio-image">
                        <img src="<?php echo $project['image']; ?>" alt="<?php echo $project['title']; ?>" />
                        <div class="portfolio-overlay">
                            <a href="<?php echo $project['link']; ?>" class="portfolio-link btn btn-primary" target="_blank">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div class="portfolio-content">
                        <div class="portfolio-category"><?php echo $project['category']; ?></div>
                        <h3 class="portfolio-title"><?php echo $project['title']; ?></h3>
                        <p class="portfolio-description"><?php echo $project['description']; ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="portfolio-cta">
                <a href="#contact" class="btn btn-outline animate-fade-in animate-delay-400">
                    View All Projects
                </a>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing-section">
        <div class="section-background">
            <div class="bg-blur-4"></div>
        </div>
        
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title"><span class="text-gradient">Let's Build Your Website</span></h2>
                <p class="section-subtitle">
                    Every project is unique. Contact us to get a personalized quote tailored to your specific needs and requirements.
                </p>
            </div>

            <div class="pricing-card-wrapper">
                <div class="glass-card pricing-card animate-scale-up animate-delay-200">
                    <h3 class="pricing-title">Get Your Personalized Quote</h3>
                    <p class="pricing-description">
                        Tell us about your project and we'll provide you with a detailed quote that matches your vision and budget.
                    </p>
                    <div class="pricing-buttons">
                        <a href="#contact" class="btn btn-primary btn-lg">
                            Contact Us Today <span class="arrow">→</span>
                        </a>
                        <a href="#contact" class="btn btn-outline btn-lg">
                            Schedule a Call
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="section-background">
            <div class="bg-blur-5"></div>
        </div>
        
        <div class="section-container">
            <div class="section-header">
                <h2 class="section-title">Get in Touch</h2>
                <p class="section-subtitle">
                    Ready to start your project? Contact us today for a free consultation. We'll discuss your needs and provide a tailored solution to achieve your goals.
                </p>
            </div>

            <div class="contact-content grid grid-2">
                <div class="glass-card contact-form-card animate-slide-left">
                    <h3 class="form-title">Send Us a Message</h3>
                    
                    <form class="contact-form" action="https://formsubmit.co/dmvwebdesign.operations@gmail.com" method="POST">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required placeholder="Your name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required placeholder="your.email@example.com">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="project-type">Project Type</label>
                            <select id="project-type" name="project-type" required>
                                <option value="">Select project type</option>
                                <option value="portfolio">Portfolio Website</option>
                                <option value="business">Business Website</option>
                                <option value="ecommerce">E-Commerce Website</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required rows="5" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary btn-full">
                            Send Message
                        </button>
                    </form>
                </div>

                <div class="contact-info animate-slide-right">
                    <div class="glass-card contact-info-card">
                        <h3 class="info-title">Contact Information</h3>
                        <div class="contact-details">
                            <div class="contact-item">
                                <span class="contact-icon">📞</span>
                                <a href="tel:+15716851515">(571) 685-1515</a>
                            </div>
                            <div class="contact-item">
                                <span class="contact-icon">✉️</span>
                                <a href="mailto:dmvwebdesign.operations@gmail.com">dmvwebdesign.operations@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div class="glass-card schedule-card">
                        <h3 class="schedule-title">Schedule a Call</h3>
                        <p class="schedule-description">
                            Prefer to talk directly? Schedule a 30-minute consultation with one of our experts.
                        </p>
                        <a href="#contact" class="btn btn-outline btn-full">
                            Book a Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>