<template>
	<div class="c-cart-item">
		<div class="c-cart-item__const">
			<a href="#">
				<img :src="imageSrc" alt="">
			</a>
		</div>
		<div class="c-cart-item__var">
			<div class="c-cart-item__title">
				<a href="#" class="u-underline">{{title}}</a>
			</div>
			{{count}} 
			<span class="u-gray">&times;</span> 
			{{price}}&nbsp;грн.
			<span class="u-gray">=</span> 
			{{count * price}}&nbsp;грн.
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'price', 'imageSrc', 'count']
	}
</script>

<style lang="sass">
	.c-cart-item
		font-size: 0
		&:not(:last-child)
			margin-bottom: 20px
		img
			max-width: 100%
			width: 100%
		a
			display: inline-block
			text-decoration: none
			color: inherit
		&__const,
		&__var
			display: inline-block
			vertical-align: middle
		&__const
			position: relative
			width: 120px
			margin-right: -120px
			z-index: 1
		&__var
			padding-left: 130px
			font-size: 18px
		&__title
			margin-bottom: 10px
			font-size: 20px
			font-weight: bold
			
	.u-gray
		color: rgba(#000000, .6)
</style>
