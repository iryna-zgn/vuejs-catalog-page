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
		<div class="c-cart-item__remove"
					@click="$emit('removeClick', id)">&times;</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'price', 'imageSrc', 'count', 'id']
	}
</script>

<style lang="sass">
	.c-cart-item
		position: relative
		font-size: 0
		margin-bottom: 20px
		padding-right: 28px
		img
			max-width: 100%
			width: 100%
		a
			text-decoration: none
			color: inherit
		&__const,
		&__var
			display: inline-block
			vertical-align: middle
		&__const
			position: relative
			width: 90px
			margin-right: -90px
			z-index: 1
		&__var
			padding-left: 95px
			font-size: 16px
		&__title
			margin-bottom: 10px
			max-width: 500px
			font-size: 18px
			font-weight: bold
			line-height: 1.3
		&__remove
			position: absolute
			top: 50%
			right: 0
			margin-top: -17px
			padding: 5px
			font-size: 24px
			line-height: 1
			font-weight: bold
			color: rgba(#000000, .8)
			cursor: pointer
			transition: all .2s linear
			&:hover
				color: #fa3e2e
				transition: none

	.u-gray
		color: rgba(#000000, .6)
</style>
