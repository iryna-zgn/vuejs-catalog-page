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
import { mapActions } from 'vuex'
export default {
  name: 'SearchForm',
  data () {
    return {
      search: ''
    }
  },
  updated () {
    this.setSearchKeyword(this.search)
  },
  methods: {
    ...mapActions({
      setSearchKeyword: 'goods/setSearchKeyword'
    })
  }
}
</script>

<style lang="sass">
@import "style"
</style>
