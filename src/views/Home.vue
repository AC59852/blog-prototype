<template>
  <section id="home" class="page">
    <HomeIntro />
    <section class="homeArticles" id="articlesOne">
      <h2>Featured Tech Blog Posts</h2>
      <div class="articlesWrapper" id="articleWrapper1">
        <router-link :to="'/post/' + techPost.uid" v-for="techPost in techArticles" :techPost="techPost" :key="techPost.uid" class="article" >
          <prismic-image :field="techPost.data.image" class="test" :id="'postImage' + techPost.uid"/>
          <h2>{{ $prismic.richTextAsPlain(techPost.data.title) }}</h2>
          <prismic-rich-text :class="'firstPara'" :field="techPost.data.preview_text"/>
        </router-link>
      </div>
    </section>
    <section id="topArticles">
      <TopArticles v-for="topArticle in topArticles" :key="topArticle.id" :topArticle="topArticle"/>
    </section>
    <section class="homeArticles" id="articlesTwo">
      <h2>Featured Video Game Blog Posts</h2>
      <div class="articlesWrapper" id="articleWrapper2">
        <router-link :to="'/post/' + gamePost.uid" v-for="gamePost in gameArticles" :gamePost="gamePost" :key="gamePost.uid" class="article" >
          <prismic-image :field="gamePost.data.image" class="test" :id="'postImage' + gamePost.uid"/>
          <h2>{{ $prismic.richTextAsPlain(gamePost.data.title) }}</h2>
          <prismic-rich-text :class="'firstPara'" :field="gamePost.data.preview_text"/>
        </router-link>
      </div>
    </section>
  </section>
</template>

<script>
// @ is an alias to /src
import HomeIntro from '@/components/home/HomeIntro.vue';
// import HomeArticles from '@/components/home/HomeArticles.vue';
import TopArticles from '@/components/home/TopArticles.vue';

export default {
  name: 'Home',

  data() {
    return {
      techArticles: [],

      gameArticles: [],

      topArticles: [
        {id: 1, title: 'Top Blog Post One', img: 'games3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'game'},
        {id: 2, title: 'Top Blog Post Two', img: 'tech4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'tech'},
        {id: 3, title: 'Top Blog Post Three', img: 'games4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'game'},
      ],
    }
  },

  mounted() {
    this.getTechPosts();
    this.getVideoGamePosts();

    setTimeout(() => {
            let firstPara = document.querySelectorAll(".firstPara p");

            firstPara.forEach(para => {
              const textLimit = 125

                 const limitedText = para.innerText.substr(0, textLimit)

                if (para.innerText.length > textLimit) {

                  para.innerText = limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
                }

            })
        }, 700);
  },

  methods: {
    getVideoGamePosts() {
      this.$prismic.client.query(
      this.$prismic.Predicates.at('document.tags', ['game']), {orderings: '[document.last_publication_date desc]'}
        ).then((response) => {
        // response is the response object, response.results holds the documents

        this.gameArticles = response.results
        });
    },

    getTechPosts() {
      this.$prismic.client.query(
      this.$prismic.Predicates.at('document.tags', ['tech']), {orderings: '[document.last_publication_date desc]'}
        ).then((response) => {
        // response is the response object, response.results holds the documents

        this.techArticles = response.results
        });
    },
  },
  
  components: {
    HomeIntro: HomeIntro,
    // HomeArticles: HomeArticles,
    TopArticles: TopArticles
  }
}
</script>
