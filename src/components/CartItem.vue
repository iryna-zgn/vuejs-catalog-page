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

			<div class="c-spinner">
				<a href="#" class="c-spinner__btn"
					@click.prevent="$emit('clickChangeCount', 'minus', id)">-</a>
				<span class="c-spinner__value">{{count}}</span>
				<a href="#" class="c-spinner__btn" 
					@click.prevent="$emit('clickChangeCount', 'plus', id)">+</a>
			</div>

			<div>
				{{count}} 
				<span class="u-gray">&times;</span> 
				{{price}}&nbsp;₴
				<span class="u-gray">=</span> 
				{{count * price}}&nbsp;₴
			</div>

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
	$accent-color: #fa3e2e

	.c-cart-item
		position: relative
		font-size: 0
		margin-bottom: 30px
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
			vertical-align: top
		&__const
			position: relative
			width: 70px
			margin-right: -70px
			z-index: 1
		&__var
			padding-left: 75px
			font-size: 16px
		&__title
			margin-bottom: 10px
			max-width: 500px
			font-size: 20px
			font-weight: bold
			line-height: 1.3
		&__remove
			position: absolute
			top: 0
			margin-top: -5px
			right: 0
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

	@media only screen and (min-width: 480px)
		.c-cart-item
			&__const,
			&__var
				vertical-align: middle
			&__const
				width: 90px
				margin-right: -90px
			&__var
				padding-left: 95px
			&__remove
				top: 50%
				margin-top: -17px

	.c-spinner
		font-size: 20px
		margin-bottom: 10px
		&__btn
			padding: 5px
			cursor: pointer
			&:hover
				color: $accent-color

	.u-gray
		color: rgba(#000000, .6)
</style>
