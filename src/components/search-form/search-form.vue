<template>
  <div class="c-search">
    <form class="c-form">
      <div class="c-form__group">
        <input
          v-model="search"
          type="text"
          placeholder="Search"
          @keyup="$emit('type-search', search)">
      </div>
    </form>
    <span class="c-search__icon icon-search"/>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      search: ''
    }
  },
  updated () {
    this.$store.commit('goods/SET_SEARCH_KEYWORD', this.search)
  }
}
</script>

<style lang="sass">
@import "style"
</style>
