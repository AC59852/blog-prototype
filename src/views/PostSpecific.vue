<template>
  <section :class="'page blogPost'">
    <div class="postWrapper">
      <div class="postSmall">
        <h1>{{ $prismic.richTextAsPlain(fields.title) }}</h1>
        <prismic-rich-text class="postPreview" :htmlSerializer="anotherHtmlSerializer" :field="fields.previewText"/>
      </div>
      <prismic-image class="postImage" :field="fields.image1"/>
      <div class="postSmall">
        <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="fields.richContent1"/>
        <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="fields.richContent2"/>
      </div>
      <prismic-image class="postImage postImage2" :field="fields.image2"/>
      <div class="postSmall">
        <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="fields.richContent3"/>
        <prismic-rich-text :htmlSerializer="anotherHtmlSerializer" :field="fields.richContent4"/>
      </div>
    </div>
  </section>
</template>

<script>
import prismicDOM from 'prismic-dom';

const Elements = prismicDOM.RichText.Elements;

const anotherHtmlSerializer = function (type, element, content, children) {
  // Add a class to paragraph elements
  if (type === Elements.paragraph) {
    return `<p class="projectPara">${children.join('')}</p>`;
  }

  // Return null to stick with the default behavior for everything else
  return null;
}

export default {
  name: 'BlogPost',
  metaInfo() {
    return {
     title: this.pageTitle,
     meta: [
       {
         vmid: "description",
         name: "description",
         content: this.pageDesc
       }
     ]
    }
  },
  data () {
    return {
      anotherHtmlSerializer,
      fields: {
        title: {},
        previewText: {},
        richContent1: {},
        richContent2: {},
        richContent3: {},
        richContent4: {},
        image1: {},
        image2: {}
      },

      pageTitle: undefined,
      pageDesc: undefined
    };
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('tech_blog_post', uid)
        .then((document) => {
          this.fields.title = document.data.title;
          this.fields.previewText = document.data.preview_text;
          this.fields.image1 = document.data.image;
          this.fields.image2 = document.data.image_2;
          this.fields.richContent1 = document.data.text_block_1;
          this.fields.richContent2 = document.data.text_block_2;
          this.fields.richContent3 = document.data.text_block_3;
          this.fields.richContent4 = document.data.text_block_4;

          this.pageTitle = document.data.title[0].text
          this.pageDesc = document.data.preview_text[0].text

          console.log(this.pageDesc)
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