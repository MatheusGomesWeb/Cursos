<style>
.quebra {
  /* background: url('./img/bg-footer.jpg') no-repeat center; */
  background: url("<?php the_field('background_footer', get_page_by_title('contato')); ?>") no-repeat center;
  background-size: cover;
}
</style>

<div class="quebra">
  <blockquote class="quote-externo container">
    <?php the_field('frase_footer', get_page_by_title('contato')); ?>
    <cite><?php the_field('autor_footer', get_page_by_title('contato')); ?></cite>
  </blockquote>
</div>