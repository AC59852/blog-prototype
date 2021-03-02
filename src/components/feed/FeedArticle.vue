<template>
  <router-link :to="'post/' + article.uid" class="feedArticle">
      <prismic-image :field="article.data.image" />
      <h2>{{ article.data.title[0].text }}</h2>
  </router-link>
</template>

<script>
export default {
props: ['article'],

}
</script>

<style>

</style>