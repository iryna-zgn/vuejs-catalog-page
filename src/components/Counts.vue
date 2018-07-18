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
	$accent-color: #fa3e2e
	
	.c-counts
		display: flex
		justify-content: center
		padding: 15px 20px
		font-weight: bold
		font-size: 20px
		> div
			&:not(:first-child)
				margin-left: 20px

	@media only screen and (min-width: 768px)
		.c-counts
			position: absolute
			right: 0

	.c-icon-link
		text-decoration: none
		color: inherit
		&__icon
			display: inline-block
			vertical-align: middle
			font-size: 28px
			color: rgba($accent-color, .7)
			transition: all .2s linear
		&:hover
			.c-icon-link
				&__icon
					color: $accent-color
					transition: none
</style>
