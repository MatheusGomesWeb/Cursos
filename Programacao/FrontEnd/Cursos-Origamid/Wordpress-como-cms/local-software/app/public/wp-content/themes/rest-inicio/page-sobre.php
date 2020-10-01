<?php
// Template name: Sobre
?>
<?php get_header(); ?>

<section class="container sobre">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
  <h2 class="subtitulo"><?php the_field('titulo-principal'); ?></h2>
  <?php endwhile;
  endif; ?>

  <div class="grid-8">
    <?php if (have_rows('descricao-post')) : while (have_rows('descricao-post')) : the_row(); ?>
    <img src="<?php the_sub_field('imagem'); ?>">
    <?php endwhile;
    endif; ?>
  </div>

  <div class="grid-8">
    <?php if (have_rows('descricao-post')) : while (have_rows('descricao-post')) : the_row(); ?>

    <h2><?php the_sub_field('titulo') ?></h2>
    <p><?php the_sub_field('descricao'); ?></p>
    <?php endwhile;
    endif; ?>
  </div>
</section>



<?php get_footer(); ?>