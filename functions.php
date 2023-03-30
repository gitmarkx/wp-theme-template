<?php

//REGISTER AND ENQUEUE STYLES
function enqueue_styles()
{
    wp_enqueue_style('template-style', get_template_directory_uri() . '/release/css/index.css', '', '', false);
}
add_action('wp_enqueue_scripts', 'enqueue_styles');

//REGISTER AND ENQUEUE SCRIPTS
function load_scripts()
{
    wp_enqueue_script('template-main', get_template_directory_uri() . '/release/js/index.js', '', '', true);
}
add_action('wp_enqueue_scripts', 'load_scripts');