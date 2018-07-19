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
	.c-wishlist-item
		margin-bottom: 70px
		text-align: center
		img
			display: block
			max-width: 100%
		&__link
			color: inherit
			text-decoration: none
		&__img
			display: block
			max-width: 400px
			margin: 0 auto 10px
		&__title
			display: block
			margin-bottom: 15px
			font-size: 22px
		&__price
			margin-bottom: 10px
			font-size: 18px
			font-weight: bold
		&__old-price
			font-size: 16px
</style>
