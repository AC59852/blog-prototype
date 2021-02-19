<template>
  <div class="page">
    <prismic-image :field="fields.image"/>
    <prismic-rich-text :field="fields.richContent"/>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  data () {
    return {
      fields: {
        richContent: null,
        image: null
      }
    };
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('tech_blog_post', uid)
        .then((document) => {
          this.fields.image = document.data.image
          this.fields.richContent = document.data.text_block_1;
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>