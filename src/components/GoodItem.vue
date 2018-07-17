<template>
	<div class="c-good-item">
		<a href="#" class="c-good-item__link">
			<span class="c-good-item__img">
				<img :src="imageSrc" alt="">
			</span>
			<span class="c-good-item__title">
				<span class="u-underline">{{title}}
				</span>
			</span>
		</a>
		<span class="c-good-item__price">
			<span class="u-gray-bg">{{price}}&nbsp;грн.</span>
		</span>

		<ul class="c-goods-buttons">
			<li class="c-goods-buttons__item">
				<a 
					href="#"
					class="c-heart" 
					@click.prevent="$emit('likeClick', like = !like)"
					:class="{'is-active': like}">
				</a>
			</li>
			<li class="c-goods-buttons__item">
				<a
					href="#" 
					class="c-btn" 
					@click.prevent="$emit('buyClick', id)">
					Buy
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['id', 'title', 'price', 'imageSrc'],
		data() {
			return {
				like: false,
				countBuy: 0
			}
		},
		methods: {}
	}
</script>

<style lang="sass">
	$icon-heart: "\e911"
	$icon-heart_empty: "\e913"

	.c-good-item
		display: inline-block
		text-decoration: none 
		color: inherit
		font-size: 18px
		img
			display: block
			max-width: 100%
			max-height: 100%
		&__img
			display: block
			height: 200px
			margin-bottom: 10px
		&__title
			display: block
			margin-bottom: 20px
			line-height: 1.5
			color: #000000
		&__price
			display: block
			font-size: 16px
			margin-bottom: 25px
		&__link
			text-decoration: none
			&:hover
				.u-underline
					border-bottom-color: rgba(#000000, 1)
					transition: none

	.c-goods-buttons
		margin: 0 -7px
		&__item
			display: inline-block
			vertical-align: middle
			padding: 0 7px

	.c-heart
		display: inline-block
		width: 33px
		&:before
			content: $icon-heart_empty
			display: inline-block
			vertical-align: middle
			font-family: icomoon
			font-size: 28px
			color: rgba(#fa3e2e, .5)
			transition: all .2s linear
		&:hover
			&:before
				color: #fa3e2e
				transition: none
		&.is-active
			&:before
				content: $icon-heart
				color: #fa3e2e

	.c-btn
		display: inline-block
		vertical-align: middle
		padding: 5px 10px
		font-size: 18px
		background-color: #000000
		color: #ffffff
		text-decoration: none
		text-align: center
		outline: 0
		border: 0
		border-radius: 0
		cursor: pointer
		transition: all .2s linear
		&__icon
			font-size: 22px
		&:hover
			background-color: #fa3e2e
			transition: none

	.u-gray-bg
		display: inline-block
		background: rgba(#000000, .1)
		border-radius: 3px
		padding: 8px 10px

	.u-underline
		border-bottom: 1px solid rgba(#000000, .3)
		transition: all .2s linear
		&:hover
			border-bottom-color: rgba(#000000, 1)
			transition: none

</style>
