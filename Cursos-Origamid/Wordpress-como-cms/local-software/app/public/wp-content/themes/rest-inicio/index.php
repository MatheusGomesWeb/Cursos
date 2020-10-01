 <?php get_header(); ?>

 <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

 <section class="container sobre">
   <h2 class="subtitulo"><?php the_title(); ?></h2>

   <!--<div class="grid-8">
     <img src="<?php echo get_template_directory_uri(); ?>/img/rest-fachada.jpg" alt="Fachada do Rest">
   </div>-->

   <div class="grid-8">
     <h2><?php the_title(); ?></h2>
     <p><?php the_content(); ?></p>
   </div>
 </section>

 <?php endwhile; ?>
 <?php else : ?>
 <section class="container sobre">
   <div class="grid-8">
     <p>Nenhum Post Encontrado !</p>
   </div>
 </section>
 <?php endif; ?>


 <?php get_footer(); ?>