<template>
  <router-link to="/page/1" :class="'article ' + article.tag + 'Article'" >
      <img :src="'/img/' + article.img + '.jpg'" :alt="'Image for ' + article.title">
      <h2>{{ article.title }}</h2>
      <p>{{ article.previewDesc }}</p>
  </router-link>
</template>

<script>
export default {
    props: ['article']
}
</script>

<style>

</style>