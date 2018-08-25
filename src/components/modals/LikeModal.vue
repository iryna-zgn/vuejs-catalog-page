<template>
  <modal
    v-if="this.$store.state.modal.likesModal.isShown"
    state-modal-name="likesModal">
    <div
      v-if="likes.length > 0">
      <div
        v-for="(like, index) in likes"
        :key="index">

        <wishlist-item
          :good="like"
        />

      </div>
    </div>
    <div
      v-if="likes.length === 0"
      class="c-message">
      Wish list is empty
    </div>
  </modal>
</template>

<script>
import Modal from '../../ui/modal/modal.vue'
import WishlistItem from '../../components/wishlist-item/WishlistItem'
import { mapGetters } from 'vuex'
export default {
  name: 'LikeModal',
  components: {
    Modal,
    WishlistItem
  },
  computed: {
    ...mapGetters({
      likes: 'goods/likes'
    })
  }
}
</script>

<style lang="sass">
@import '../../assets/style/components/message'
</style>
