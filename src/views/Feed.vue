<template>
  <section id="feed" class="page">
    <div class="feedIntro">
      <div class="feedText">
        <h2>Your Feed</h2>
        <h1>Everything You Want In One Place</h1>
      </div>
    </div>
      <section class="feedContent">
        <div class="feedFilterBtns">
          <button @click="allFilterContent()" class="allBtn FilterBtn">All</button>
          <button @click="changeFilterContent($event)" class="FilterBtn">tech</button>
          <button @click="changeFilterContent($event)" class="FilterBtn">game</button>
        </div>
        <FeedArticle v-for="article in fields.articles" :key="article.uid" :article="article"/>
      </section>
  </section>
</template>

<script>
import FeedArticle from '@/components/feed/FeedArticle'
export default {

    data() {
        return {
            fields: {
                articles: null
            }
        }
    },

    mounted() {
        this.allFilterContent()
    },

    methods: {

        allFilterContent() {
            document.querySelector(".allBtn").classList.add("btnActive")

            this.$prismic.client.query('', {orderings: '[document.last_publication_date desc]'})
            .then((res) => {
                this.fields.articles = res.results
            })
        },

        changeFilterContent(e) {
            let tag = e.target.innerText.split(" ")[0]

            this.$prismic.client.query(
                this.$prismic.Predicates.at('document.tags', [tag]), {orderings: '[document.last_publication_date desc]'}
            )
            .then((res) => {
                this.fields.articles = res.results
            })
            
            if (document.querySelector(".allBtn").classList.contains("btnActive")) {
                document.querySelector(".allBtn").classList.remove("btnActive")
            }
        }
    },

    components: {
        FeedArticle: FeedArticle
    }
}
</script>

<style>

</style>