<?php

add_theme_support( 'post-thumbnails' );

add_action(
    'rest_api_init',
    function () {

        // Register routes
        register_rest_route( 'freddie/v2', '/page/', [
            'methods'  => "GET",
            'callback' => 'fred_get_page',
            'args' => array(
                'parent_slug' => array(
                	'required' => false
                ),
                'slug' => array(
                    'required' => true
                )
            )
        ] );
		
		register_rest_route( 'freddie/v2', '/post/', [
            'methods'  => "GET",
            'callback' => 'fred_get_post',
            'args' => array(
                'parent_slug' => array(
                	'required' => false
                ),
                'slug' => array(
                    'required' => true
                )
            )
        ] );
    }
);

    function fred_get_page( WP_REST_Request $request ) {
        $parent = $request['parent_slug'];
        $slug = $request['slug'];

        if( empty( $parent ) ) {
           $pages = get_pages();
            foreach($pages as $page) {
            	if(!$page->post_parent && $page->post_name == $slug) {
            		$new_page = $page->ID;
					$domain = $_SERVER['HTTP_HOST'];
            		$link = $domain . "/wp-json/wp/v2/pages/" . $new_page;

                    $chl = curl_init();
                    curl_setopt($chl, CURLOPT_SSL_VERIFYPEER, false);
                    curl_setopt($chl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($chl, CURLOPT_URL,$link);
                    $finish=curl_exec($chl);
                    $fx_result = json_decode($finish, true);
                    
                    if(isset( $fx_result )) {
                        return $fx_result;
                    }
            	} 
            } return "Not a top level page";
        }

        $pages = get_pages();

        foreach($pages as $page) {
            if($page->post_name == $parent) {
                $page_parent = $page->ID;
                $page_children = get_page_children( $page_parent, $pages );
                foreach($page_children as $child) {
                    if($child->post_name == $slug) {
                        $actual_page = $child->ID;
	
						$domain = $_SERVER['HTTP_HOST'];
						
                        $url = $domain . "/wp-json/wp/v2/pages/" . $actual_page;

                        $ch = curl_init();
                        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                        curl_setopt($ch, CURLOPT_URL,$url);
                        $result=curl_exec($ch);
                        $fm_result = json_decode($result, true);
                        
                        if(isset( $fm_result )) {
                            return $fm_result;
                        }
                    }
                }
            }
        }
        
    };

function fred_get_post( WP_REST_Request $request ) {
        $parent = $request['parent_slug'];
        $slug = $request['slug'];

        if( empty( $parent ) ) {
			$args = array('numberposts' => -1,);
           	$posts = get_posts($args);
            foreach($posts as $post) {
            	if($post->post_name == $slug) {
            		$new_post = $post->ID;
					$domain = $_SERVER['HTTP_HOST'];
            		$link = $domain . "/wp-json/wp/v2/posts/" . $new_post;

                    $chl = curl_init();
                    curl_setopt($chl, CURLOPT_SSL_VERIFYPEER, false);
                    curl_setopt($chl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($chl, CURLOPT_URL,$link);
                    $finish=curl_exec($chl);
                    $fx_result = json_decode($finish, true);
                    
                    if(isset( $fx_result )) {
                        return $fx_result;
                    }
            	} 
            } return "Not a top level post";
        }

        $args = array('numberposts' => -1,);
        $posts = get_posts($args);

        foreach($posts as $post) {
            if($post->post_name == $parent) {
                $post_parent = $post->ID;
				$post_args = array('post_parent' => $post_parent);
				$post_children = get_children($post_args);
                foreach($post_children as $child) {
                    if($child->post_name == $slug) {
                        $actual_post = $child->ID;
	
						$domain = $_SERVER['HTTP_HOST'];
						
                        $url = $domain . "/wp-json/wp/v2/pages/" . $actual_post;

                        $ch = curl_init();
                        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                        curl_setopt($ch, CURLOPT_URL,$url);
                        $result=curl_exec($ch);
                        $fm_result = json_decode($result, true);
                        
                        if(isset( $fm_result )) {
                            return $fm_result;
                        }
                    }
                }
            }
        }
        
    }