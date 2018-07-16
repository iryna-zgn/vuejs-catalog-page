<template>
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
				@click.prevent="$emit('buyClick')">
				Buy
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
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

</style>
