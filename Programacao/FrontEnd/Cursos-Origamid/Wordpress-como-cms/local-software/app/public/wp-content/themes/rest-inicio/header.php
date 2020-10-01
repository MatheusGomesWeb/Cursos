<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta name="description" content=<?php the_field('description_seo'); ?> />

  <title><?php bloginfo('name'); ?> | <?php wp_title(); ?> - <?php the_field('titulo_seo'); ?></title>
  <link href='https://fonts.googleapis.com/css?family=Alegreya+SC' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css">

  <!--Header Wordpress-->
  <?php wp_head(); ?>

</head>

<body>

  <header>
    <nav>
      <?php
      $arr = array(
        'menu' => 'principal',
        'container' => false
      );

      wp_nav_menu($arr);
      ?>
      <!-- 
      <ul>
   <li class="current_page_item"><a href="/">Menu</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>-->
    </nav>

    <h1><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/rest.png" alt="Rest"></h1>

    <?php $page = get_page_by_title('contato'); ?>

    <?php  ?>
    <p><?php the_field('endereco_header', $page);  ?></p>
    <p class="telefone"><?php the_field('telefone_header', $page);  ?></p>
  </header>