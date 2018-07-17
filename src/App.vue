<template>
	<div>
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

					<div class="c-counts" v-if="goodsCount || likes">
						<div v-if="likes">
							<a href="#" class="c-icon-link">
								<span href="#" class="c-icon-link__icon icon-heart"></span> 
								{{likes}}
							</a>
						</div>
						<div v-if="goodsCount">
							<a href="#" class="c-icon-link" 
								@click.prevent="showModal = true">
								<span href="#" class="c-icon-link__icon icon-cart"></span> 
								{{goodsCount}}
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
	
		<div class="c-modal" v-if="showModal" @keyup.esc="showModal=false">
			<div class="c-modal__overlay" @click="showModal=false"></div>
			<div class="c-modal__container">
				<div class="c-modal__close" @click="showModal=false">&times;</div>	
				<div class="c-cart" v-if="cartGoods.length">
					<div v-for="cartGood in cartGoods">
						<CartItem
							:title='cartGood.title' 
							:price='cartGood.price' 
							:imageSrc='cartGood.image_src'
							:count='cartGood.count'>
						</CartItem>
					</div>
					<div class="c-cart__sum">{{totalSum}}&nbsp;грн.</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goods: [],
				cartGoods: [],
				search: '',
				likes: 0,
				cartMap: new Map(),
				goodsCount: 0,
				totalSum: 0,
				showModal: false
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
					value['count']++;
				} else {
					m.set(id, value);
					value['count'] = 1;
				}

				const values = [...m.values()];
				this.cartGoods = values;

				this.goodsCount = values
													.map(obj => obj.count)
													.reduce((sum, e) => sum + e);

				this.totalSum = values
												.map(obj => obj.count * obj.price)
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
		},
		mounted() {
			document.body.addEventListener('keyup', e => {
				if (e.keyCode === 27) {
					this.showModal = false
				}
			})
		}
	}
</script>

<style lang="sass" scoped>
	.c-body
		height: 100vh
		overflow: auto
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

	@media only screen and (min-width: 768px)
		.c-header
			position: relative
			.l-container
				display: flex
				align-items: center
				flex-wrap: wrap
				justify-content: center

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

	@media only screen and (min-width: 768px)
		.l-goods
			&__item
				max-width: 33.33333%

	@media only screen and (min-width: 1025px)
		.l-goods
			&__item
				max-width: 20%

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

	.c-cart
		width: 100%
		&__sum
			margin-top: 20px
			padding: 15px 0 10px
			border-top: 5px solid #fa3e2e
			font-size: 30px
			font-weight: bold
			text-align: right

	.c-modal
		position: fixed
		top: 0
		right: 0
		bottom: 0
		left: 0
		text-align: center
		overflow-y: auto
		z-index: 100
		&__overlay
			position: fixed
			top: 0
			right: 0
			bottom: 0
			left: 0
			background-color: rgba(0, 0, 0, .9)
		&__container
			position: relative
			display: inline-block
			vertical-align: middle
			max-width: 700px
			width: 100%
			background-color: #ffffff
			padding: 30px 20px 20px
			margin: 50px auto
			text-align: left
			box-sizing: border-box
		&:after
			content: ""
			display: inline-block
			vertical-align: middle
			height: 100%
			width: .1%
			margin-left: -.1%
		&__close
			position: absolute
			left: 100%
			bottom: 100%
			padding: 0 5px
			font-size: 40px
			line-height: 1
			color: rgba(255, 255, 255, .7)
			transition: all .1s linear
			cursor: pointer
			&:hover
				color: rgba(255, 255, 255, 1)
				transition: none

</style>
