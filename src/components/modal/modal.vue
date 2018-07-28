<template>
  <div class="c-modal" v-if="isModal" :isModal="isModal">
    <div class="c-modal__overlay"
          @click="isModal=false"></div>
    <div class="c-modal__container">
      <div class="c-modal__close"
            title="esc"
            @click="isModal=false">&times;
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      isModal: {
        type: Boolean,
        default: true
      }
    },
		mounted() {
			document.body.addEventListener('keyup', e => {
				if (e.keyCode === 27) { //'Ecs'-key code
					this.isModal = false;
				}
			})
		}
  }

</script>

<style lang="sass">
  @import "style"
</style>
