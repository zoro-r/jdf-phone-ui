<template>
  <n22-page class="demo_page">
    <mt-header :fixed="true" slot="header" title="语法高亮">
      <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
    </mt-header>

    <div slot="content">
      <n22-highlight lang='html'>
    &lt;free-card fGrid="8"&gt;
                &lt;free-card-header&gt;
                  &lt;free-card-header-text&gt;
                    &lt;div class="free-card-title"&gt;Title&lt;/div&gt;
                    &lt;div class="free-card-text"&gt;Subtitle&lt;/div&gt;
                  &lt;/free-card-header-text&gt;
                &lt;/free-card-header&gt;
                &lt;free-card-content&gt;
              This is a simple card with plain text. But the card can contain its own page header, footer, list view, image, and any element inside it.
                &lt;/free-card-content&gt;
                &lt;free-card-footer&gt;
                  &lt;button fButton&gt;cancel&lt;/button&gt;
                &lt;/free-card-footer&gt;
           &lt;free-card&gt;
      </n22-highlight>
    </div>
  </n22-page>
</template>

<script>
export default {
  name: 'n22Example',
  components: {},
  directives: {},
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {},
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.page_example{

}
</style>
