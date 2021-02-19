<template>
  <div class="about page">
    <h1>This is an about page</h1>
    <div v-for="news in newsData" :news="news" :key="news.uid" :id="'newsArticle' + news.uid">
      <router-link :to="'/page/' + news.uid"><h1>{{ $prismic.richTextAsPlain(news.data.title) }}</h1>
      <prismic-image :field="news.data.image" class="test" :id="'newsImage' + news.uid"/>
      </router-link>
      <prismic-rich-text :class="'firstPara'" :htmlSerializer="anotherHtmlSerializer" :field="news.data.text_block_1"/>
      <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="news.data.text_block_2"/>
    </div>
  </div>
</template>
<script>
import prismicDOM from 'prismic-dom';

const Elements = prismicDOM.RichText.Elements;

const anotherHtmlSerializer = function (type, element, content, children) {
  // Add a class to paragraph elements
  if (type === Elements.paragraph) {
    return `<p class="my-paragraph-quote">${children.join('')}</p>`;
  }

  // Return null to stick with the default behavior for everything else
  return null;
}
export default {
  mounted() {
    this.getContent();
  },

  data() {
    return {
      anotherHtmlSerializer,
      newsData: []
    }
  },

  methods: {
    getContent() {
      this.$prismic.client.query(
      this.$prismic.Predicates.at('document.tags', ['tech'])
        ).then((response) => {
        // response is the response object, response.results holds the documents
        console.log(response.results)

        this.newsData = response.results
        });

        setTimeout(() => {
            let firstPara = document.querySelectorAll(".firstPara");

            firstPara.forEach(para => {
                para.innerText = para.innerText.substring(0,50)

                para.innerText = para.innerText += '...'

            })
        }, 200);
    },
  },
}
</script>
