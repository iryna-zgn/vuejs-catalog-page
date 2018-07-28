<template>
	<div class="c-counts">
		<div class="c-counts__item"
					@click.prevent="$emit('click-like-btn')">
			<icon :iconHeart="true"></icon>
			<span v-if="likesCount">{{likesCount}}</span>
		</div>
		<div class="c-counts__item"
					@click.prevent="$emit('click-cart-btn')">
			<icon :iconCart="true"></icon>
			<span v-if="goodsCount">{{goodsCount}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			likesCount: {
				type: Number,
				default: 0
			},
			goodsCount: {
				type: Number,
				default: 0
			}
		}
	}
</script>

<style lang="sass">
	@import "style"
</style>
