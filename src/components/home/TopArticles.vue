<template>
  <div :class="'topArticle ' + topArticle.tag + 'article'">
      <img :src="'/img/' + topArticle.img + '.jpg'" :alt="'Image for ' + topArticle.title">
      <div class="topArticleText">
        <h3>{{ topArticle.title }}</h3>
        <span>{{ topArticle.desc }}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: ['topArticle']
}
</script>

<style>

</style>