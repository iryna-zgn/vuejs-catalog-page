<template>
  <div class="c-search">
    <form class="c-form">
      <div class="c-form__group">
        <input type="text"
                placeholder="Search"
                v-model="search"
                @keyup="$emit('type-search', search)">
      </div>
    </form>
    <span class="c-search__icon icon-search"></span>
  </div>
</template>

<style lang="sass">
  @import "style"
</style>
