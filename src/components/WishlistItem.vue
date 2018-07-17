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
		<span class="c-wishlist-item__price">
			{{price}}&nbsp;грн.
		</span>
	</div>
</template>

<script>
	export default {
		props: ['title', 'price', 'imageSrc', 'id']
	}
</script>

<style lang="sass">
	.c-wishlist-item
		margin-bottom: 50px
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
			margin: 0 auto 20px
		&__title
			display: block
			margin-bottom: 10px
			font-size: 24px
		&__price
			font-size: 20px
			font-weight: bold

</style>
