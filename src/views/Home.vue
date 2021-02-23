<template>
  <section id="home" class="page">
    <HomeIntro />
    <section class="homeArticles" id="articlesOne">
      <h2>Featured Tech Blog Posts</h2>
      <div class="articlesWrapper">
        <HomeArticles v-for="article in techArticles" :key="article.id" :article="article"/>
      </div>
    </section>
    <section id="topArticles">
      <TopArticles v-for="topArticle in topArticles" :key="topArticle.id" :topArticle="topArticle"/>
    </section>
    <section class="homeArticles" id="articlesTwo">
      <h2>Featured Video Game Blog Posts</h2>
      <div class="articlesWrapper">
        <HomeArticles v-for="article in gameArticles" :key="article.id" :article="article"/>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import HomeIntro from '@/components/home/HomeIntro.vue';
import HomeArticles from '@/components/home/HomeArticles.vue';
import TopArticles from '@/components/home/TopArticles.vue';

export default {
  name: 'Home',

  data() {
    return {
      techArticles: [
        {id: 1, title: 'Lorem Ipsum Dolonar Set Amit', img: 'tech1', tag: 'tech', previewDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '},
        {id: 2, title: 'Tech Blog Post Two', img: 'tech2', tag: 'tech', previewDesc: 'This is a small preview description of the blog post'},
        {id: 3, title: 'Tech Blog Post Three', img: 'tech3', tag: 'tech', previewDesc: 'This is a small preview description of the blog post'},
        {id: 4, title: 'Tech Blog Post Four', img: 'tech4', tag: 'tech', previewDesc: 'This is a small small preview description of the blog post'},
        {id: 5, title: 'Tech Blog Post Five', img: 'tech2', tag: 'tech', previewDesc: 'This is a small preview description of the blog post'},
        {id: 6, title: 'Tech Blog Post Six', img: 'tech1', tag: 'tech', previewDesc: 'This is a small preview description of the blog post'},
      ],

      gameArticles: [
        {id: 1, title: 'Video Game Blog Post One', img: 'games1', tag: 'game', previewDesc: 'This is a small preview description of the blog post'},
        {id: 2, title: 'Video Game Blog Post Two', img: 'games2', tag: 'game', previewDesc: 'This is a small preview description of the blog post'},
        {id: 3, title: 'Video Game Blog Post Three', img: 'games3', tag: 'game', previewDesc: 'This is a small preview description of the blog post'},
        {id: 4, title: 'Video Game Blog Post Four', img: 'games4', tag: 'game', previewDesc: 'This is a small preview description of the blog post'},
        {id: 5, title: 'Video Game Blog Post Five', img: 'games2', tag: 'game', previewDesc: 'This is a small preview description of the blog post'},
        {id: 6, title: 'Video Game Blog Post Six', img: 'games3', tag: 'game', previewDesc: 'This is a small preview description of the blog post'},
      ],

      topArticles: [
        {id: 1, title: 'Top Blog Post One', img: 'games3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'game'},
        {id: 2, title: 'Top Blog Post Two', img: 'tech4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'tech'},
        {id: 3, title: 'Top Blog Post Three', img: 'games4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'game'},
      ],
    }
  },
  
  components: {
    HomeIntro: HomeIntro,
    HomeArticles: HomeArticles,
    TopArticles: TopArticles
  }
}
</script>
