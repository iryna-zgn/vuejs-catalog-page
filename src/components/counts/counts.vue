<template>
	<div class="c-counts">
		<div>
			<a href="#" class="c-icon-link"
				@click.prevent="$emit('clickLikeBtn')">
				<span href="#" class="c-icon-link__icon icon-heart"></span>
				<span v-if="likes">{{likes}}</span>
			</a>
		</div>
		<div>
			<a href="#" class="c-icon-link"
				@click.prevent="$emit('clickCartBtn')">
				<span href="#" class="c-icon-link__icon icon-cart"></span>
				<span v-if="goodsCount">{{goodsCount}}</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['likes', 'goodsCount']
	}
</script>

<style lang="sass">
	@import "style"
</style>
