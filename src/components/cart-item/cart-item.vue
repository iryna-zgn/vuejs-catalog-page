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
					@click.prevent="$emit('click-change-count', 'minus', id)">-</a>
				<span class="c-spinner__value">{{count}}</span>
				<a href="#" class="c-spinner__btn"
					@click.prevent="$emit('click-change-count', 'plus', id)">+</a>
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
					@click="$emit('click-remove', id)">&times;</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'price', 'imageSrc', 'count', 'id']
	}
</script>

<style lang="sass">
	@import "style"
	@import "../../assets/style/utilities/gray"
</style>
