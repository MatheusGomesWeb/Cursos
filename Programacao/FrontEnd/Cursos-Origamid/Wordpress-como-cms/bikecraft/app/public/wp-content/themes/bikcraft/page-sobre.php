<?php 
	// Template Name: Sobre
	get_header();
?>
<?php if(have_posts()) : while(have_posts()) : the_post(); ?>

<section class="introducao-interna interna_sobre">
  <div class="container">
    <h1>Sobre</h1>
    <p>conheça mais sobre a bikcraft</p>
  </div>
</section>

<section class="missao_sobre container animar-interno">
  <div class="grid-10">
    <h2 class="subtitulo-interno">História, Missão e Visão</h2>
    <p>Quando iniciamos a Bikcraft queriamos apenas um produto que adoraríamos utilizar. Eramos apaixonados por pedalar
      e também por fazer as coisas com as nossas próprias mãos. Assim surgiu um sonho na garagem da nossa casa.</p>
    <p>Conheça os nossos produtos, pergunte para os nossos clientes e descubra a maravilha de ter uma Bikcraft na sua
      casa.</p>
  </div>
  <div class="grid-6">
    <h2 class="subtitulo-interno">Valores</h2>
    <ul>
      <li>- Qualidade no processo com</li>
      <li>- Foco no cliente sem perder a</li>
      <li>- Diversão, preservando a</li>
      <li>- Natureza com sustentabilidade</li>
    </ul>
  </div>

  <div class="grid-16 foto-equipe">
    <img src="<?php echo get_template_directory_uri(); ?>/img/equipe-bikcraft.jpg" alt="Equipe Bikcraft">
  </div>

</section>

<?php include(TEMPLATEPATH . '/inc/qualidade.php'); ?>

<div class="quebra">
  <blockquote class="quote-externo container">
    <p>“o verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana.”
    </p>
    <cite>WILLIAM MORRIS</cite>
  </blockquote>
</div>
<?php endwhile; else: endif; ?>

<?php get_footer(); ?>