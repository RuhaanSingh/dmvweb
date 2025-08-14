<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- SEO Meta Tags -->
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <meta name="description" content="DMV Web Designs creates modern, responsive, and visually impressive websites for individuals and businesses. Specializing in portfolios, corporate sites, landing pages, and small business websites.">
    
    <!-- Open Graph -->
    <meta property="og:title" content="DMV Web Designs | Modern Web Design & Development">
    <meta property="og:description" content="Creating stunning websites with modern design principles and cutting-edge technology.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/og-image.jpg">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebDesignService",
        "name": "DMV Web Designs",
        "description": "Modern web design and development services for businesses and individuals.",
        "url": "<?php echo home_url(); ?>",
        "areaServed": "Worldwide",
        "offers": {
            "@type": "Offer",
            "price": "Custom Quote",
            "priceCurrency": "USD"
        }
    }
    </script>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="main-header">
    <nav class="navbar glass">
        <div class="nav-container">
            <div class="nav-brand">
                <a href="<?php echo home_url(); ?>" class="brand-link">
                    <span class="brand-dmv">DMV</span>
                    <span class="brand-web">Web Designs</span>
                </a>
            </div>
            
            <div class="nav-menu" id="nav-menu">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#hero" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#services" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="#portfolio" class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#pricing" class="nav-link">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
            
            <div class="nav-cta">
                <a href="#contact" class="btn btn-primary">Get Started</a>
            </div>
            
            <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </nav>
</header>