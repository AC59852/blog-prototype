<template>
  <div class="about page">
    <div v-for="post in posts" :post="post" :key="post.uid" :id="'postArticle' + post.uid">
      <router-link :to="'/post/' + post.uid"><h1>{{ $prismic.richTextAsPlain(post.data.title) }}</h1>
      <prismic-image :field="post.data.image" class="test" :id="'postImage' + post.uid"/>
      </router-link>
      <prismic-rich-text :class="'firstPara'" :field="post.data.preview_text"/>
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
      posts: []
    }
  },

  methods: {
    getContent() {
      this.$prismic.client.query(
      this.$prismic.Predicates.at('document.tags', ['tech'])
        ).then((response) => {
        // response is the response object, response.results holds the documents
        console.log(response.results)

        this.posts = response.results
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
