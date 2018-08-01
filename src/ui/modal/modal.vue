<template>
  <div
    class="c-modal"
    @keyup.esc="$emit('closeModal')">
    <div
      class="c-modal__overlay"
      @click="$emit('closeModal')"
    />
    <div
      class="c-modal__container">
      <div
        class="c-modal__close"
        @click="$emit('closeModal')"
      />
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal'
}

</script>

<style lang="sass">
@import "style"
</style>
