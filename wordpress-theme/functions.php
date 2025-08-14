<?php
/**
 * DMV Web Designs Theme Functions
 */

// Theme setup
function dmv_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'dmv-theme'),
        'footer' => __('Footer Menu', 'dmv-theme'),
    ));
}
add_action('after_setup_theme', 'dmv_theme_setup');

// Enqueue styles and scripts
function dmv_theme_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('dmv-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue additional styles
    wp_enqueue_style('dmv-additional-styles', get_template_directory_uri() . '/assets/css/additional-styles.css', array('dmv-style'), '1.0.0');
    
    // Enqueue JavaScript
    wp_enqueue_script('dmv-main-js', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
    
    // Enqueue comment reply script if needed
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'dmv_theme_scripts');

// Add custom CSS for the theme-specific styles
function dmv_add_custom_styles() {
    echo '<style>
        /* Additional theme styles that complement the main CSS */
        
        /* Header Styles */
        .main-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            padding: 1rem 0;
            transition: var(--transition-all);
        }
        
        .navbar {
            padding: 0.5rem 0;
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .nav-brand .brand-link {
            text-decoration: none;
            font-family: var(--font-poppins);
            font-weight: 700;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
        }
        
        .brand-dmv {
            color: var(--purple-500);
        }
        
        .brand-web {
            color: var(--white);
            margin-left: 0.25rem;
        }
        
        .nav-list {
            display: flex;
            list-style: none;
            gap: 2rem;
            margin: 0;
            padding: 0;
        }
        
        .nav-link {
            color: var(--white);
            text-decoration: none;
            transition: var(--transition-all);
            font-weight: 500;
        }
        
        .nav-link:hover {
            color: var(--purple-500);
        }
        
        .mobile-menu-toggle {
            display: none;
            flex-direction: column;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
        }
        
        .hamburger-line {
            width: 25px;
            height: 3px;
            background-color: var(--white);
            margin: 3px 0;
            transition: var(--transition-all);
        }
        
        /* Hero Section */
        .hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding-top: 4rem;
        }
        
        .hero-background {
            position: absolute;
            inset: 0;
            z-index: 0;
        }
        
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--navy-800);
            opacity: 0.95;
        }
        
        .hero-blur-1 {
            position: absolute;
            top: 25%;
            left: 33%;
            width: 24rem;
            height: 24rem;
            border-radius: 50%;
            background-color: var(--purple-500);
            filter: blur(150px);
            animation: pulse 2s ease-in-out infinite;
        }
        
        .hero-blur-2 {
            position: absolute;
            bottom: 25%;
            right: 33%;
            width: 16rem;
            height: 16rem;
            border-radius: 50%;
            background-color: var(--blue-500);
            filter: blur(120px);
            animation: pulse 2s ease-in-out infinite;
        }
        
        .hero-content {
            text-align: center;
            position: relative;
            z-index: 10;
        }
        
        .hero-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }
        
        .hero-break {
            display: none;
        }
        
        .hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 48rem;
            margin: 0 auto 3rem;
        }
        
        .hero-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
        }
        
        .scroll-indicator {
            position: absolute;
            bottom: 2.5rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
            animation: bounce 2s infinite;
        }
        
        .scroll-arrow {
            color: rgba(255, 255, 255, 0.5);
            transition: var(--transition-all);
        }
        
        .scroll-arrow:hover {
            color: var(--white);
        }
        
        /* Section Styles */
        .section-background {
            position: absolute;
            inset: 0;
            pointer-events: none;
        }
        
        .bg-blur-1 {
            position: absolute;
            top: 50%;
            left: 0;
            width: 18rem;
            height: 18rem;
            border-radius: 50%;
            background: rgba(139, 92, 246, 0.2);
            filter: blur(100px);
        }
        
        .bg-blur-2 {
            position: absolute;
            top: 0;
            right: 0;
            width: 24rem;
            height: 24rem;
            border-radius: 50%;
            background: rgba(139, 92, 246, 0.1);
            filter: blur(100px);
        }
        
        .bg-blur-3 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 24rem;
            height: 24rem;
            border-radius: 50%;
            background: rgba(59, 130, 246, 0.1);
            filter: blur(120px);
        }
        
        .bg-blur-4 {
            position: absolute;
            top: 33%;
            left: 0;
            width: 24rem;
            height: 24rem;
            border-radius: 50%;
            background: rgba(139, 92, 246, 0.1);
            filter: blur(120px);
        }
        
        .bg-blur-5 {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 24rem;
            height: 24rem;
            border-radius: 50%;
            background: rgba(59, 130, 246, 0.1);
            filter: blur(120px);
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 3rem;
        }
        
        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 1.5rem;
        }
        
        .section-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 48rem;
            margin: 0 auto;
        }
        
        /* Services Section */
        .services-section {
            background: rgba(15, 23, 42, 0.5);
            position: relative;
        }
        
        .service-card {
            padding: 2rem;
            border-radius: 0.75rem;
            text-align: center;
            transition: var(--transition-all);
        }
        
        .service-card:hover {
            transform: translateY(-5px);
        }
        
        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .service-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 1rem;
        }
        
        .service-description {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
        }
        
        /* Portfolio Section */
        .portfolio-card {
            border-radius: 0.75rem;
            overflow: hidden;
            transition: var(--transition-all);
        }
        
        .portfolio-card:hover {
            transform: translateY(-5px);
        }
        
        .portfolio-image {
            position: relative;
            overflow: hidden;
        }
        
        .portfolio-image img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: var(--transition-all);
        }
        
        .portfolio-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: var(--transition-all);
        }
        
        .portfolio-card:hover .portfolio-overlay {
            opacity: 1;
        }
        
        .portfolio-content {
            padding: 1.5rem;
        }
        
        .portfolio-category {
            color: var(--purple-500);
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        
        .portfolio-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 0.5rem;
        }
        
        .portfolio-description {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.875rem;
            line-height: 1.5;
        }
        
        .portfolio-cta {
            text-align: center;
            margin-top: 3rem;
        }
        
        /* About Section */
        .about-cards {
            margin-top: 4rem;
            margin-bottom: 4rem;
        }
        
        .about-card {
            padding: 2rem;
            border-radius: 0.75rem;
        }
        
        .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 1rem;
        }
        
        .card-description {
            color: rgba(255, 255, 255, 0.8);
        }
        
        .about-content {
            align-items: center;
            gap: 3rem;
        }
        
        .content-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 1.5rem;
        }
        
        .content-paragraph {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        
        .feature-list {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .feature-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--white);
        }
        
        .feature-icon {
            color: var(--purple-500);
            font-weight: bold;
        }
        
        .about-image {
            position: relative;
        }
        
        .image-wrapper {
            border-radius: 0.75rem;
            overflow: hidden;
        }
        
        .image-wrapper img {
            width: 100%;
            height: auto;
            border-radius: 0.75rem;
        }
        
        /* Pricing Section */
        .pricing-section {
            background: rgba(15, 23, 42, 0.5);
            position: relative;
        }
        
        .pricing-card-wrapper {
            max-width: 32rem;
            margin: 3rem auto 0;
            text-align: center;
        }
        
        .pricing-card {
            padding: 3rem;
            border-radius: 0.75rem;
        }
        
        .pricing-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 1.5rem;
        }
        
        .pricing-description {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.125rem;
            margin-bottom: 2rem;
        }
        
        .pricing-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
        }
        
        /* Contact Section */
        .contact-content {
            gap: 3rem;
        }
        
        .contact-form-card {
            padding: 2rem;
            border-radius: 0.75rem;
        }
        
        .form-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 1.5rem;
        }
        
        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
        }
        
        .form-group label {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.875rem;
            font-weight: 500;
            margin-bottom: 0.25rem;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 0.375rem;
            color: var(--white);
            font-family: var(--font-inter);
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--purple-500);
            box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
        
        .form-group select option {
            background-color: var(--navy-800);
            color: var(--white);
        }
        
        .btn-full {
            width: 100%;
            justify-content: center;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        
        .contact-info-card,
        .schedule-card {
            padding: 2rem;
            border-radius: 0.75rem;
        }
        
        .info-title,
        .schedule-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--white);
            margin-bottom: 1.5rem;
        }
        
        .contact-details {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .contact-icon {
            font-size: 1.25rem;
        }
        
        .contact-item a {
            color: var(--white);
            text-decoration: none;
        }
        
        .schedule-description {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1rem;
        }
        
        /* Footer */
        .main-footer {
            background-color: var(--navy-800);
            color: var(--white);
            padding: 4rem 0 2rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .footer-grid {
            margin-bottom: 3rem;
        }
        
        .footer-brand {
            margin-bottom: 1rem;
        }
        
        .footer-description {
            color: var(--gray-300);
            max-width: 20rem;
            margin-bottom: 1.5rem;
        }
        
        .social-links {
            display: flex;
            gap: 1rem;
        }
        
        .social-link {
            color: var(--gray-300);
            transition: var(--transition-all);
        }
        
        .social-link:hover {
            color: var(--purple-500);
        }
        
        .footer-title {
            font-size: 1.125rem;
            font-weight: 600;
            color: var(--white);
            margin-bottom: 1rem;
        }
        
        .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .footer-links li {
            margin-bottom: 0.5rem;
        }
        
        .footer-link {
            color: var(--gray-300);
            text-decoration: none;
            transition: var(--transition-all);
        }
        
        .footer-link:hover {
            color: var(--purple-500);
        }
        
        .footer-contact {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .contact-link {
            color: var(--gray-300);
            text-decoration: none;
            transition: var(--transition-all);
        }
        
        .contact-link:hover {
            color: var(--purple-500);
        }
        
        .footer-bottom {
            border-top: 1px solid var(--gray-700);
            padding-top: 2rem;
        }
        
        .copyright {
            color: var(--gray-400);
            font-size: 0.875rem;
            text-align: center;
            margin: 0;
        }
        
        /* Responsive Design */
        @media (min-width: 640px) {
            .hero-buttons {
                flex-direction: row;
            }
            
            .hero-title {
                font-size: 3.75rem;
            }
            
            .hero-break {
                display: block;
            }
            
            .pricing-buttons {
                flex-direction: row;
            }
        }
        
        @media (min-width: 768px) {
            .form-row {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        @media (min-width: 1024px) {
            .hero-title {
                font-size: 4.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.5rem;
            }
            
            .section-title {
                font-size: 3rem;
            }
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--navy-800);
                padding: 2rem;
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: var(--transition-all);
            }
            
            .nav-menu.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-list {
                flex-direction: column;
                text-align: center;
                gap: 1rem;
            }
            
            .mobile-menu-toggle {
                display: flex;
            }
            
            .mobile-menu-toggle.active .hamburger-line:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }
            
            .mobile-menu-toggle.active .hamburger-line:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active .hamburger-line:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
            }
            
            .form-row {
                grid-template-columns: 1fr;
            }
            
            .grid-2,
            .grid-3 {
                grid-template-columns: 1fr;
            }
        }
        
        /* Animations */
        @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
            40% { transform: translateY(-10px) translateX(-50%); }
            60% { transform: translateY(-5px) translateX(-50%); }
        }
        
        .arrow {
            margin-left: 0.5rem;
            transition: var(--transition-all);
        }
        
        .btn:hover .arrow {
            transform: translateX(5px);
        }
    </style>';
}
add_action('wp_head', 'dmv_add_custom_styles');

// Widget areas
function dmv_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'dmv-theme'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'dmv-theme'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'dmv_widgets_init');

// Custom excerpt length
function dmv_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'dmv_excerpt_length', 999);

// Custom excerpt more
function dmv_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'dmv_excerpt_more');

// Remove unnecessary WordPress features
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');
remove_filter('the_content_feed', 'wp_staticize_emoji');
remove_filter('comment_text_rss', 'wp_staticize_emoji');
remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

// Security headers
function dmv_security_headers() {
    header('X-Content-Type-Options: nosniff');
    header('X-Frame-Options: SAMEORIGIN');
    header('X-XSS-Protection: 1; mode=block');
}
add_action('send_headers', 'dmv_security_headers');

// Optimize loading
function dmv_optimize_loading() {
    // Defer JavaScript loading
    wp_script_add_data('dmv-main-js', 'defer', true);
}
add_action('wp_enqueue_scripts', 'dmv_optimize_loading');
?>