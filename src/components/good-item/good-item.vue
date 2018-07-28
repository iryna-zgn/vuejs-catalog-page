<template>
	<div class="c-good-item">
		<div class="c-good-item__label" v-if="label">{{label}}</div>
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
			<span class="u-gray-bg">{{price}}&nbsp;₴</span>
		</span>
		<span class="c-good-item__price" v-if="oldPrice">
			<span class="u-line-through">{{oldPrice}}&nbsp;₴</span>
		</span>

		<ul class="c-goods-buttons">
			<li class="c-goods-buttons__item">
				<a
					href="#"
					class="c-heart"
					@click.prevent="$emit('click-like', id, like = !like)"
					:class="{'is-active': like}">
				</a>
			</li>
			<li class="c-goods-buttons__item">
				<a
					href="#"
					class="c-btn"
					@click.prevent="$emit('click-buy', id)">
					Buy
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['id', 'title', 'price', 'oldPrice', 'imageSrc', 'top', 'label'],
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
	@import 'style'
	@import '../../assets/style/components/btn'
	@import '../../assets/style/utilities/gray-bg'
	@import '../../assets/style/utilities/line-through'
	@import '../../assets/style/utilities/underline'
</style>
