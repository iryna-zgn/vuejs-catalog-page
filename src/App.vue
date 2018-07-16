<template>
	<div class="c-body">
		
		<header class="c-header">
			<div class="l-container">

				<form class="c-form">
					<div class="c-form__group">
						<div class="c-search">
							<input type="text" v-model="search" placeholder="Search">
							<span class="c-search__icon icon-search"></span>
						</div>
					</div>
				</form>

				<div class="c-counts">
					<div v-if="likes">
						<span class="o-icon icon-heart"></span> {{likes}}
					</div>
					<div>
						<span class="o-icon icon-cart"></span> {{cart.length}}
					</div>
				</div>
				
			</div>
		</header>

		<main class="c-main">
			<div class="l-container">

				<div class="l-goods">
					<div class="l-goods__item" v-for="good in filteredGoods">
						<GoodItem
							:title='good.title'
							:price='good.price'
							:imageSrc='good.image_src'
							@likeClick='likesCount' 
							@buyClick='goodsCount'>
						</GoodItem>
					</div>
				</div>

			</div>
		</main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goods: [],
				search: '',
				likes: 0,
				// countBuy: 0,
				cart: []
			}
		},
		methods: {
			likesCount(arg) {
				if (arg) {
					this.likes++
				} else {
					this.likes--
				}
			},
			goodsCount() {
				// this.countBuy++;
				this.cart.push('item');
				console.log(this.cart);
			}
		},
		created() {
			const vm = this;

			function loadJSON(callback) {
				const xobj = new XMLHttpRequest();
				xobj.overrideMimeType('application/json');
				xobj.open('GET', '/src/goods.json', true);
				xobj.onreadystatechange = function () {
					if (xobj.readyState == 4 && xobj.status == '200') {
						callback(xobj.responseText);
					}
				};
				xobj.send(null);  
			}

			loadJSON(function(response) {
				vm.goods = JSON.parse(response);
			});
		},
		computed: {
			filteredGoods: function() {
				return this.goods.filter((good) => {
					return good.title.toLowerCase().match(this.search);
				});
			}
		}
	}
</script>

<style lang="sass" scoped>
	.c-body
		min-height: 100vh
		font-family: 'Montserrat', sans-serif
		font-size: 16px
		line-height: 1.3
		color: #000000

	.l-container 
		max-width: 1300px
		padding: 0 20px
		margin: 0 auto

	.c-header
		padding: 30px 0

	.c-main
		padding: 50px 0

	.l-goods
		margin: 0 -15px
		font-size: 0
		&__item
			display: inline-block
			vertical-align: top
			max-width: 50%
			width: 100%
			padding: 0 15px
			margin-bottom: 50px
			box-sizing: border-box

	.c-counts
		display: flex
		justify-content: center
		padding: 15px 20px
		font-weight: bold
		font-size: 20px
		> div
			&:not(:first-child)
				margin-left: 20px

	.c-form
		display: flex
		justify-content: center
		.c-btn
			height: 100%;
		input
			padding: 15px
			width: 100%
			background: transparent
			text-align: left
			font-size: 20px
			border: 1px solid rgba(#000000, .3)
			color: rgba(#000000, .5)
			border-radius: 0
			box-sizing: border-box
			outline: none;
			box-shadow: none
			transition: all .2s linear
			-webkit-appearance: none
			appearance: none
			&:placeholder
				color: rgba(#000000, .3)
			&:focus
				border-color: #000000
				color: #000000
		input[type="search"]::-webkit-search-cancel-button
			display: none

	.c-search
		position: relative
		&__icon
			position: absolute
			right: 10px
			top: 50%
			margin-top: -15px
			font-size: 30px
		input
			padding-right: 50px

	.c-btn
		display: inline-block
		vertical-align: middle
		padding: 7px 12px
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
		&:hover
			background-color: #fa3e2e
			transition: none

	.o-icon
		display: inline-block
		vertical-align: middle
		font-size: 28px
		color: #fa3e2e

	@media only screen and (min-width: 768px)
		.l-goods
			&__item
				max-width: 33.33333%
		.c-counts
			position: absolute
			right: 0
		.c-header
			position: relative
			.l-container
				display: flex
				align-items: center
				flex-wrap: wrap
				justify-content: center

	@media only screen and (min-width: 1025px)
		.l-goods
			&__item
				max-width: 20%

</style>
