<template>
	<div class="c-wishlist-item">
		<a href="#" class="c-wishlist-item__link">
			<span class="c-wishlist-item__img">
				<img :src="imageSrc" alt="">
			</span>
			<span class="c-wishlist-item__title">
				<span class="u-underline">{{title}}</span>
			</span>
		</a>
		<div class="c-wishlist-item__price">
			<span class="u-gray-bg">
			{{price}}&nbsp;₴
			</span>
		</div>
		<div class="c-wishlist-item__old-price" v-if="oldPrice">
			<span class="u-line-through">{{oldPrice}}&nbsp;₴</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'price', 'oldPrice', 'imageSrc', 'id']
	}
</script>

<style lang="sass">
	@import 'style'
</style>
