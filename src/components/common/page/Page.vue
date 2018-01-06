<template>
  <div>
		<slot name="header"></slot>
    <slot class="content" name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>
<style>
</style>

