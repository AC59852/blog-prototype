<template>
  <router-link to="/post/1" :class="'Article'" >
      <prismic-image :field="article.img" />
      <h2>{{ $prismic.richTextAsPlain(article.data.title) }}</h2>
      <prismic-rich-text :class="'firstPara'" :field="article.preview_text"/>
  </router-link>
</template>

<script>
export default {
    props: ['article'],

    mounted() {
      console.log(this.article.data.title)
    }
}
</script>

<style>

</style>