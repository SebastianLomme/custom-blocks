<?php
/**
 * Plugin Name:       pom-custom-blocks
 * Description:       Part one for the home page
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-blocks
 *
 * @package           pom-custom-blocks
 */

function pom_custom_blocks_block_init() {

	$blocks = array(
		'pom-custom-block-one/',
		"pom-custom-block-two/",
		"pom-custom-block-three/"
	);

	foreach ( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'includes/block-editor/blocks/' . $block);
	}
}
add_action( 'init', 'pom_custom_blocks_block_init' );

function create_custom_job_listing_type() {

    $labels_soortonderwijs = array(
        'name'              => _x( 'Soortonderwijs', 'taxonomy general name' ),
        'singular_name'     => _x( 'Soortonderwijs', 'taxonomy singular name' ),
        'search_items'      => __( 'Zoek Soortonderwijs' ),
        'all_items'         => __( 'Alle Soortonderwijs' ),
        'edit_item'         => __( 'Wijzig Soortonderwijs' ),
        'update_item'       => __( 'Update Soortonderwijs' ),
        'add_new_item'      => __( 'Nieuwe Soortonderwijs toevoegen' ),
        'new_item_name'     => __( 'Nieuw Soortonderwijs naam' ),
        'menu_name'         => __( 'Soortonderwijs' ),
    );
    $args_soortonderwijs   = array(
        'hierarchical'      => true, // make it hierarchical (like categories)
        'labels'            => $labels_soortonderwijs,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => [ 'slug' => 'soortonderwijs' ],
    );
    register_taxonomy( 'soortonderwijs', [ 'add_job_listing_type' ], $args_soortonderwijs );


    $labels_dienstverband = array(
        'name'              => _x( 'Dienstverbanden', 'taxonomy general name' ),
        'singular_name'     => _x( 'Dienstverband', 'taxonomy singular name' ),
        'search_items'      => __( 'Zoek Dienstverbanden' ),
        'all_items'         => __( 'Alle Dienstverbanden' ),
        'edit_item'         => __( 'Wijzig Dienstverband' ),
        'update_item'       => __( 'Update Dienstverband' ),
        'add_new_item'      => __( 'Nieuwe Dienstverband toevoegen' ),
        'new_item_name'     => __( 'Nieuw Dienstverband naam' ),
        'menu_name'         => __( 'Dienstverband' ),
    );
    $args_dienstverband   = array(
        'hierarchical'      => true, // make it hierarchical (like categories)
        'labels'            => $labels_dienstverband,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => [ 'slug' => 'dienstverband' ],
    );
    register_taxonomy( 'dienstverband', [ 'add_job_listing_type' ], $args_dienstverband );

    $args = array(

        'labels'      => array(
            'name'          => __('Vacatures', 'textdomain'),
            'singular_name' => __('Vacature', 'textdomain'),
            'add_new'       => __('Nieuwe vacature', 'textdomain'),
            'new_item'      => __('New vacature', 'textdomain'),
            'search_items'      => __( 'Zoek Vacatures' ),
            'all_items'         => __( 'Alle Vacatures' ),
            'edit_item'         => __( 'Wijzig Vacature' ),
            'update_item'       => __( 'Update Vacature' ),
            'add_new_item'      => __( 'Nieuwe Vacature toevoegen' ),
            'new_item_name'     => __( 'Nieuw Vacature naam' ),
            'menu_name'         => __( 'Vacature' ),

        ),
            'public'        => true,
            'has_archive'   => true,
            "hierarchical"  => false,
            'menu_icon'     => "dashicons-building",
            "supports"      => array( "title", "thumbnail"),
            'rewrite'       => array( 'slug' => 'vacatures' ),


        );
        
    register_post_type('add_job_listing_type', $args);
    
}

add_action('init', 'create_custom_job_listing_type',);