<template>
  <section id="home" class="page">
    <!-- Home Intro is the heading, "Hello Person", and weather content -->
    <HomeIntro />
    <section class="homeArticles" id="articlesOne">
      <!--  Start of section for tech blog posts -->
      <h2>Featured Tech Blog Posts</h2>
      <div class="articlesWrapper" id="articleWrapper1">
        <!-- This is the loop for loading tech posts, and route matching to /posts/ the post unique id -->
        <router-link :to="'/post/' + techPost.uid" v-for="techPost in techArticles" :techPost="techPost" :key="techPost.uid" class="article" >
          <prismic-image :field="techPost.data.image" class="test" :id="'postImage' + techPost.uid"/>
          <h2>{{ $prismic.richTextAsPlain(techPost.data.title) }}</h2>
          <prismic-rich-text :class="'firstPara'" :field="techPost.data.preview_text"/>
        </router-link>
      </div>
      <!--  End of wrapper for tech blog posts -->
    </section>
    <section id="topArticles">
      <!-- Currently placeholder content for what will be the most popular articles -->
      <TopArticles v-for="topArticle in topArticles" :key="topArticle.id" :topArticle="topArticle"/>
    </section>
    <section class="homeArticles" id="articlesTwo">
      <!--  Start of section for game blog posts -->
      <h2>Featured Video Game Blog Posts</h2>
      <div class="articlesWrapper" id="articleWrapper2">
        <!-- This is the loop for loading game posts, and route matching to /posts/ the post unique id -->
        <router-link :to="'/post/' + gamePost.uid" v-for="gamePost in gameArticles" :gamePost="gamePost" :key="gamePost.uid" class="article" >
          <prismic-image :field="gamePost.data.image" class="test" :id="'postImage' + gamePost.uid"/>
          <h2>{{ $prismic.richTextAsPlain(gamePost.data.title) }}</h2>
          <prismic-rich-text :class="'firstPara'" :field="gamePost.data.preview_text"/>
        </router-link>
      </div>
      <!--  End of wrapper for game blog posts -->
    </section>
  </section>
</template>

<script>
// Imports always first
// @ is an alias to /src
import HomeIntro from '@/components/home/HomeIntro.vue';
import TopArticles from '@/components/home/TopArticles.vue';

export default {
  // Name of the page
  name: 'Home',

  data() {
    return {
      // Array for the tech blog posts
      techArticles: [],

      // Array for the game blog posts
      gameArticles: [],

      // The current placeholder data for the most popular blog posts
      topArticles: [
        {id: 1, title: 'Top Blog Post One', img: 'games3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'game'},
        {id: 2, title: 'Top Blog Post Two', img: 'tech4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'tech'},
        {id: 3, title: 'Top Blog Post Three', img: 'games4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt', tag: 'game'},
      ],
    }
  },

  mounted() {
    // Running the functions to fetch the data from the blog api
    this.getTechPosts();
    this.getVideoGamePosts();

    setTimeout(() => {
      // This function is limiting the paragraph text in the post previews to 125 characters
      // and adding ... to the last word with a space between it before the 125 characters
            let firstPara = document.querySelectorAll(".firstPara p");

            firstPara.forEach(para => {
              const textLimit = 125

                 const limitedText = para.innerText.substr(0, textLimit)

                if (para.innerText.length > textLimit) {

                  para.innerText = limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
                }

            })
      // The timeout is because the data needs to be fetched first
      // so the overflowed content is just being hidden until the ... is added
        }, 700);
  },

  methods: {
    getVideoGamePosts() {
      // The function for fetching posts with the "game" tag

      // Query function to filter for 'game' tag and sort it based on its post date
      // in descending order
      this.$prismic.client.query(
      this.$prismic.Predicates.at('document.tags', ['game']), {orderings: '[document.last_publication_date desc]'}
        ).then((response) => {
        // response is the response object, response.results holds the documents


        // Set the gameArticles array to the results from the fetch call
        this.gameArticles = response.results
        });
    },

    getTechPosts() {
      // The function for fetching posts with the "tech" tag

      // Query function to filter for 'tech' tag and sort it based on its post date
      // in descending order
      this.$prismic.client.query(
      this.$prismic.Predicates.at('document.tags', ['tech']), {orderings: '[document.last_publication_date desc]'}
        ).then((response) => {
        // response is the response object, response.results holds the documents

        // Set the techArticles array to the results from the fetch call
        this.techArticles = response.results
        });
    },
  },
  
  // Registering the components
  components: {
    HomeIntro: HomeIntro,
    TopArticles: TopArticles
  }
}
</script>
