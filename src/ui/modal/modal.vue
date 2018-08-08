<template>
  <transition
    name="fade">
    <div
      class="c-modal">
      <div
        class="c-modal__overlay"
        @click="closeModal"
      />
      <div
        class="c-modal__container">
        <a
          href="#"
          class="c-modal__close"
          @click.prevent="closeModal">
          &times;
        </a>
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    stateModalName: {
      type: String,
      default: 'defaultModal'
    }
  },
  methods: {
    closeModal () {
      this.$store.state.modal[this.stateModalName].isShown = false
    }
  }
}

</script>

<style lang="sass">
@import "style"
</style>
