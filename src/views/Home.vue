<template>
  <section id="home" class="page">
    <HomeIntro />
    <section class="homeArticles" id="articlesOne">
      <h2>Featured Tech Articles</h2>
      <div class="articlesWrapper">
        <HomeArticles v-for="article in techArticles" :key="article.id" :article="article"/>
      </div>
    </section>
    <section id="topArticles">
      <TopArticles v-for="topArticle in topArticles" :key="topArticle.id" :topArticle="topArticle"/>
    </section>
    <section class="homeArticles" id="articlesTwo">
      <h2>Featured Video Game Articles</h2>
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
        {id: 2, title: 'Tech Article Two', img: 'tech2', tag: 'tech', previewDesc: 'This is a small preview description of the article'},
        {id: 3, title: 'Tech Article Three', img: 'tech3', tag: 'tech', previewDesc: 'This is a small preview description of the article'},
        {id: 4, title: 'Tech Article Four', img: 'tech4', tag: 'tech', previewDesc: 'This is a small small preview description of the article'},
        {id: 5, title: 'Tech Article Five', img: 'tech2', tag: 'tech', previewDesc: 'This is a small preview description of the article'},
        {id: 6, title: 'Tech Article Six', img: 'tech1', tag: 'tech', previewDesc: 'This is a small preview description of the article'},
      ],

      gameArticles: [
        {id: 1, title: 'Game Article One', img: 'games1', tag: 'game', previewDesc: 'This is a small preview description of the article'},
        {id: 2, title: 'Game Article Two', img: 'games2', tag: 'game', previewDesc: 'This is a small preview description of the article'},
        {id: 3, title: 'Game Article Three', img: 'games3', tag: 'game', previewDesc: 'This is a small preview description of the article'},
        {id: 4, title: 'Game Article Four', img: 'games4', tag: 'game', previewDesc: 'This is a small preview description of the article'},
        {id: 5, title: 'Game Article Five', img: 'games2', tag: 'game', previewDesc: 'This is a small preview description of the article'},
        {id: 6, title: 'Game Article Six', img: 'games3', tag: 'game', previewDesc: 'This is a small preview description of the article'},
      ],

      topArticles: [
        {id: 1, title: 'Top Article One', img: 'games3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'game'},
        {id: 2, title: 'Top Article Two', img: 'tech4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'tech'},
        {id: 3, title: 'Top Article Three', img: 'games4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'game'},
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
