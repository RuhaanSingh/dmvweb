<?php
/**
 * DMV Web Designs Theme Functions
 *
 * @package DMV_Web_Designs
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

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
        'primary' => __('Primary Menu', 'dmv-web-designs'),
        'footer' => __('Footer Menu', 'dmv-web-designs'),
    ));
    
    // Set content width
    if (!isset($content_width)) {
        $content_width = 1200;
    }
}
add_action('after_setup_theme', 'dmv_theme_setup');

// Enqueue styles and scripts
function dmv_theme_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('dmv-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    
    // Enqueue JavaScript
    wp_enqueue_script('dmv-main-js', get_template_directory_uri() . '/assets/js/main.js', array(), wp_get_theme()->get('Version'), true);
    
    // Enqueue comment reply script if needed
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'dmv_theme_scripts');

// Widget areas
function dmv_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'dmv-web-designs'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'dmv-web-designs'),
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

// Remove unnecessary WordPress features for performance
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');
remove_filter('the_content_feed', 'wp_staticize_emoji');
remove_filter('comment_text_rss', 'wp_staticize_emoji');
remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

// Security headers
function dmv_security_headers() {
    if (!is_admin()) {
        header('X-Content-Type-Options: nosniff');
        header('X-Frame-Options: SAMEORIGIN');
        header('X-XSS-Protection: 1; mode=block');
    }
}
add_action('send_headers', 'dmv_security_headers');

// Optimize loading
function dmv_optimize_loading() {
    // Defer JavaScript loading
    wp_script_add_data('dmv-main-js', 'defer', true);
}
add_action('wp_enqueue_scripts', 'dmv_optimize_loading');

// Add custom body classes
function dmv_body_classes($classes) {
    // Add class for homepage
    if (is_front_page()) {
        $classes[] = 'dmv-homepage';
    }
    
    return $classes;
}
add_filter('body_class', 'dmv_body_classes');

// Customize WordPress login page
function dmv_login_styles() {
    wp_enqueue_style('dmv-login', get_template_directory_uri() . '/assets/css/login.css');
}
add_action('login_enqueue_scripts', 'dmv_login_styles');

// Change login logo URL
function dmv_login_logo_url() {
    return home_url();
}
add_filter('login_headerurl', 'dmv_login_logo_url');

// Change login logo title
function dmv_login_logo_url_title() {
    return get_bloginfo('name');
}
add_filter('login_headertitle', 'dmv_login_logo_url_title');

// Add theme customizer options
function dmv_customize_register($wp_customize) {
    // Add section for theme options
    $wp_customize->add_section('dmv_theme_options', array(
        'title'    => __('DMV Theme Options', 'dmv-web-designs'),
        'priority' => 30,
    ));
    
    // Add setting for contact email
    $wp_customize->add_setting('dmv_contact_email', array(
        'default'           => 'dmvwebdesign.operations@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('dmv_contact_email', array(
        'label'   => __('Contact Email', 'dmv-web-designs'),
        'section' => 'dmv_theme_options',
        'type'    => 'email',
    ));
    
    // Add setting for contact phone
    $wp_customize->add_setting('dmv_contact_phone', array(
        'default'           => '(571) 685-1515',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('dmv_contact_phone', array(
        'label'   => __('Contact Phone', 'dmv-web-designs'),
        'section' => 'dmv_theme_options',
        'type'    => 'text',
    ));
}
add_action('customize_register', 'dmv_customize_register');

// Add support for WordPress 5.0+ block editor
function dmv_add_editor_styles() {
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');
}
add_action('after_setup_theme', 'dmv_add_editor_styles');

// Disable WordPress admin bar for non-admins
function dmv_disable_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'dmv_disable_admin_bar');
?>