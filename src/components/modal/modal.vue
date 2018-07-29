<template>
  <div class="c-modal" @keyup.esc="$emit('closeModal')">
    <div class="c-modal__overlay"
          @click="$emit('closeModal')"></div>
    <div class="c-modal__container">
      <div class="c-modal__close"
            @click="$emit('closeModal')">&times;
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass">
  @import "style"
</style>
