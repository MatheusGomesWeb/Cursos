# Wordpress como CMS - [Origamid](https://www.origamid.com/curso/wordpress-como-cms) - Concluído

- [Oque é CMS (Content Management System)](#cms-content-management-system)
- [Por que Wordpress ?](#por-que-wordpress)
- [Wordpress.org x Wordpress.com](#wordpress-org-vs-com)
- [LocalWP - Software Gerenciador Projetos Wordpress](#localwp-software-gerenciador-de-projetos-wordpress)
- [Interface do Wordpress](#interface-do-wordpress)
- [Temas: Criando primeiro tema](#temas-criando-primeiro-tema)
  - [Configurando Tema](#configurando-tema)
  - [Funções PHP do Wordpress](#funcoes-php-do-wordpress)
  - [Arquivos de Templates PHP](#arquivos-de-templates-php)
  - [Plugins](#plugins)
  - [Menus](#menus)
- [Projeto Final](https://bikcraft.com/)

---

## CMS Content Management System

- **Gerenciador de Conteúdo**

  - Permite adicionar, remover, modificar e organizar o conteúdo.

- **Funciona através de uma UI**

  - Tem uma interface para facilitar a adição de conteúdo.

- **Reduz a quantidade de código**

  - Mil produtos utilizam o código de apenas uma página.

- **Separa conteúdo de código**
  - Geralmente através de um banco de dados onde o conteúdo é armazenado.

---

## Por que Wordpress

- **Mais de 50% da Web utiliza**

  - Em relação aos sites que possuem CMS

- **Open Source**

  - È gratuito e de código livre.

- **PHP e MYSQL**

  - Fácil aprendizado e baixo custo de servidores.

- **Mais de 11% dos eCommerces**

  - Utilizan o WooCommerce (Pluginde Wordpress)

- **Comunidade gigantesca**

  - Sua dúvida com certeza ja foi tirada por alguem

- **Milhares de plugins e temas**

  - Permite soluções rápidas e personalizadas

- **Curtomização sem limites**

  - O limite é a sua capacidade de codificar

- **Interface simples**
  - Bom para o seu cliente

---

## Wordpress ORG vs COM

- [Wordpress.org](Wordpress.org)

  - **Gratuito**
    - Você baixa sem precisar se cadastrar ou pagar.
  - **100% livre**
    - o Código é seu para fazer o que quiser.
  - **Precisa ser Hospedado**
    - Precisa de um servidor para ficar online.

- [Wordpress.com](Wordpress.com)
  - **Gratuíto até certo ponto**
    - Tem recursos pagos, porém já está hospedado gratuitamente.
  - **O código não é livre**
    - Você não pode entrar no código e fazer as modificações que quiser
  - **Feito pela Automattic**
    - Dos criadores do WordPress

---

## LocalWP Software Gerenciador de Projetos Wordpress

O [LocalWP](https://localwp.com/) é um software que auxilia no Gerenciamento e Deploy de um tema Wordpress, ele possui algumas funcionalidades que ajudam e muito o dev.

- Criação de dominio(URL) local personalizado
- Link provisório para o Cliente visualizar o desenvolvimento
- Instalação do Wordpress, Mysql, Apache, Nginx isolado do sistema operacional.
- Facil configuração de bancos de dados pela UI
- Entre outras funcionalidades...

---

## Interface do Wordpress

- **URLS**

  - **painel login**: localhost:8000/wp-admin

- **PÁGINAS**
  - **Pagina principal**: Informações gerais sobre o tema ativado, quantidade de paginas, comentarios, atividades, logs, novidades do wordpress, noticias, posts, etc...
  - **Atualizações**: Atualizações do wordpress, como correção de falhas de segurança, novas versões, atualizações de plugins, etc... (**manter sempre tudo atualizado para evitar falhas de segurança**).
  - **Posts**: Gerenciar todos os posts, comentarios etc do site...
  - **Mídia**: Gerenciar imagens, adicionar, remover, modificar etc...
  - **Páginas**: Gerenciar páginas, remover, modificar etc...
  - **Comentários**: Gerenciar comentários
  - **Aparência**: Gerenciar aparencia do tema, customizar etc...
  - **Plugins**: Gerenciar plugins, adicionar, remover etc...
  - **Usuários**: Gerenciar usuários, editar, remover etc...
  - **Ferramentas**: Gerenciar o wordpress, Importar, exportar, informações do site, ferramentas, etc...
  - **Configurações**: Configurações gerais do wordpress, regras de negócio, links, nomes, etc...

---

## Temas Criando primeiro Tema

Para criar um novo tema no Wordpress, é necessario colocar todo o site dentro da pasta de tema do Wordpress, que fica localizado em

> wp-content/themes/nomeprojeto

### Configurando tema

Para que o Wordpress reconheça o site como um tema, é necessario criar os seguintes arquivos na raiz do projeto:

- index.php
- style.css - estilos e configurações do tema
- screenshot.png - Imagem de pré visualização no painel do wordpress

o **style.css** precisa ter alguns códigos comentádos, que são pré definidos pelo wordpress, entender as configurações do tema

```
/*
Theme Name: Twenty Thirteen
Theme URI: http://wordpress.org/themes/twentythirteen
Author: the WordPress team
Author URI: http://wordpress.org/
Description: The 2013 theme for WordPress takes us back to the blog, featuring a full range of post formats, each displayed beautifully in their own unique way. Design details abound, starting with a vibrant color scheme and matching header images, beautiful typography and icons, and a flexible layout that looks great on any device, big or small.
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: black, brown, orange, tan, white, yellow, light, one-column, two-columns, right-sidebar, flexible-width, custom-header, custom-menu, editor-style, featured-images, microformats, post-formats, rtl-language-support, sticky-post, translation-ready
Text Domain: twentythirteen

This theme, like WordPress, is licensed under the GPL.
Use it to make something cool, have fun, and share what you've learned with others.
*/
```

### Arquivos de Templates PHP

- **page.php** - Arquivo responsável pelo template das páginas padrão.
- **posts.php** - Arquivo responsável pelo template padrão dos POSTS.
- **404.php** - Responsável por mostrar mensagens de erro.
- **functions.php** - Funções e lógica do tema (wordpress)

**template personalizado** - colocar comentado na no arquivo da pagina

```
 /*
  Template name: NOMEDOTEMPLATE
*/

```

### Funcoes PHP do Wordpress

É possivel separar o Header, Footer etc... do site em arquivos .php especificar, e depois inclui-los na index.php.

- **get_stylesheet_directory_uri()** - Retorna o caminho completo do arquivo (style.css) na pasta raiz.
- **get_footer()** - Include no footer.php do site.
- **get_header()** - Include no header.php do site.
- **wp_head()** - Inclui os Headers do Wordpress (para funcionar plugins etc...)
- **wp_footer()** - Inclui os Footers do Wordpress (para funcionar plugins etc...)

- **bloginfo('name')** - Retorna o atributo do blog (configurações do painel wordpress...)

- **have_posts()** - Verifica se tem posts, e retorna uma instancia do post.
  - **the_title()** - mostra o titulo do post
  - **the_content()** - mostra o conteudo do post

---

### Plugins

- [Advanced Custom Fields](https://www.advancedcustomfields.com/) - Plugin que permite personalizar e automatizar o tema, e tornar uma area ou campo editável atravez do Dashboard.
- [Duplicator](#)
- [W3 Total Cache](#)

**Utilizando**

```
    <?php if (have_rows('sobre-descricao')) : while (have_rows('sobre-descricao')) : the_row(); ?>
    <?php the_sub_field('titulo') ?>
```

**Reutilizando field de outra pagina**

```
<?php  $page = get_page_by_title('contato'); ?>
<?php the_field('telefone); ?>
```

### Menus

Para habilitar o menu no tema, é necessario adicionar a seguinte linha do **functions.php**

```
add_theme_support('menus');
```

Para habilitar o suporte a menus é

## Professor

- **André Rafael**: - Administrador e Designer - Fundador da Origamid
  - andre@origamid.com
  - Formado pela UFRJ e Intituto Infnet
- **Premios de Webdesign**
  - Nomeado no CSS Awards e ganhador do CSS Reel
