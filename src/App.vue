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
					<div>
						<a href="#" class="c-icon-link">
							<span href="#" class="c-icon-link__icon icon-heart"></span> 
							{{likes}}
						</a>
					</div>
					<div>
						<a href="#" class="c-icon-link">
							<span href="#" class="c-icon-link__icon icon-cart"></span> 
							{{goodsInCart}}
						</a>
					</div>
				</div>
				
			</div>
		</header>

		<main class="c-main">
			<div class="l-container">

				<div class="l-goods">
					<div class="l-goods__item" v-for="good in filteredGoods">
						<GoodItem
							:id='good.id'
							:title='good.title'
							:price='good.price'
							:imageSrc='good.image_src'
							@likeClick='likesCount' 
							@buyClick='goodsMap'>
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
				goodsInCart: 0,
				cartMap: new Map()
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
			goodsMap(id) {
				const m = this.cartMap;
				const key = id;
				const value = this.goods.find(obj => obj.id === key.id);

				if([...m.keys()].find(k => k.id === key.id)) {
					// console.log('find!');
					value['count']++;
				} else {
					// console.log('new!');
					m.set(id, value);
					value['count'] = 1;
				}

				// console.log([...m.values()]);

				this.goodsInCart = [...m.values()]
														.map(obj => obj.count, 0)
														.reduce((sum, e) => sum + e);
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
	
	.c-icon-link
		text-decoration: none
		color: inherit
		&__icon
			display: inline-block
			vertical-align: middle
			font-size: 28px
			color: rgba(#fa3e2e, .7)
			transition: all .2s linear
		&:hover
			.c-icon-link
				&__icon
					color: #fa3e2e
					transition: none

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
