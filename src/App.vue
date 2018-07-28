<template>
	<div class="l-site">
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

					<Counts
						:likes='likes.length'
						:goodsCount='goodsCount'
						@clickLikeBtn='showLikesModal'
						@clickCartBtn='showCartModal'
						>
					</Counts>

				</div>
			</header>

			<main class="l-main">
				<div class="l-container">

					<div class="l-goods">
						<div class="l-goods__item" v-for="good in filteredGoods">
							<GoodItem
								:id='good.id'
								:title='good.title'
								:price='good.price'
								:oldPrice='good.old_price'
								:imageSrc='good.image_src'
								:top='good.top'
								:label='good.label'
								@likeClick='wishlistMap'
								@buyClick='goodsMap'>
							</GoodItem>
						</div>
					</div>

				</div>
			</main>

		</div>

		<div class="c-modal" v-if="modal">
			<div class="c-modal__overlay"
						@click="modal=false, showCart=false, showLikes=false"></div>
			<div class="c-modal__container">
				<div class="c-modal__close" title="esc"
							@click="modal=false, showCart=false, showLikes=false">
							&times;
				</div>

				<div class="c-cart" v-if="showCart">
					<div v-if="cartGoods.length">
						<div v-for="cartGood in cartGoods">
							<CartItem
								:id='cartGood.id'
								:title='cartGood.title'
								:price='cartGood.price'
								:imageSrc='cartGood.image_src'
								:count='cartGood.count'
								@removeClick='deleteGood'
								@clickChangeCount='recalculatePrice'>
							</CartItem>
						</div>
						<div class="c-cart__sum">{{totalSum}}&nbsp;₴</div>
					</div>
					<div class="c-message"
								v-if="cartGoods.length === 0">Cart is empty</div>
				</div>

				<div class="c-cart" v-if="showLikes">
					<div v-if="likes.length">
						<div v-for="like in likes">
							<WishlistItem
								:id='like.id'
								:title='like.title'
								:price='like.price'
								:oldPrice='like.old_price'
								:imageSrc='like.image_src'>
							</WishlistItem>
						</div>
					</div>
					<div class="c-message" v-if="likes.length === 0">Wish list is empty</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: '',
				goods: [],
				cartGoods: [],
				cartMap: new Map(),
				goodsCount: 0,
				totalSum: 0,
				likes: [],
				likesMap: new Map(),
				modal: false,
				showCart: false,
				showLikes: false
			}
		},
		methods: {
			wishlistMap(id) {
				let m = this.likesMap;
				const item = this.goods.find(obj => obj.id === id);

				if(!m.has(id)) {
					m.set(id, item);
				} else {
					m.delete(id);
				}
				this.likes = [...m.values()];
			},
			goodsMap(id) {
				let m = this.cartMap;
				let item = this.goods.find(obj => obj.id === id);

				if (m.has(id)) {
					m.get(id).count++;
				} else {
					item.count = 1;
					m.set(id, item);
				}
				this.cartGoods = [...m.values()];

				let itemsCount = 0;
				let totalPrice = 0;
				for (let item of m.values()){
					itemsCount += item.count;
					totalPrice += item.count * item.price;
				}
				this.goodsCount = itemsCount;
				this.totalSum = totalPrice;
			},
			deleteGood(id) {
				let m = this.cartMap;
				let item = m.get(id);

				this.totalSum -= item.count * item.price;
				this.goodsCount -= item.count;

				m.delete(id);
				this.cartGoods = [...m.values()];
			},
			recalculatePrice(sign, id) {
				let m = this.cartMap;
				let item = m.get(id);

				if (sign === 'minus') {
						item.count--;
						this.goodsCount--;
						this.totalSum -= Number(item.price);
					if (item.count === 0) {
						this.deleteGood(id);
					}
				} else {
					item.count++;
					this.goodsCount++;
					this.totalSum += Number(item.price);
				}

				this.cartGoods = [...m.values()];
			},
			showCartModal() {
				this.showCart = true;
				this.modal = true;
			},
			showLikesModal() {
				this.showLikes = true;
				this.modal = true;
			}
		},
		created() {
			const vm = this;

			function loadJSON(callback) {
				const xobj = new XMLHttpRequest();
				xobj.overrideMimeType('application/json');
				xobj.open('GET', 'src/goods.json', true);
				xobj.onreadystatechange = function () {
					if (xobj.readyState == 4 && xobj.status == '200') {
						callback(xobj.responseText);
					}
				};
				xobj.send(null);
			}

			loadJSON(function(response) {
				vm.goods = JSON.parse(response);

				vm.goods.sort(function (a, b) {
					if (a.top > b.top) {
						return -1;
					}
					if (a.top < b.top) {
						return 1;
					}
					return 0;
				});
			});
		},
		computed: {
			filteredGoods() {
				return this.goods.filter( good =>
					good.title.toLowerCase().match(this.search.toLowerCase())
				);
			}
		},
		mounted() {
			document.body.addEventListener('keyup', e => {
				if (e.keyCode === 27) { //'Ecs'-key code
					this.modal = false;
					this.showCart = false;
					this.showLikes = false;
				}
			})
		}
	}
</script>

<style lang="sass" scoped>
	@import "./assets/style/layout/main"
	@import "./assets/style/layout/container"
	@import "./assets/style/layout/goods"

	@import "./assets/style/components/main"
	@import "./assets/style/components/header"
	@import "./assets/style/components/form"
	@import "./assets/style/components/search"
	@import "./assets/style/components/btn"
	@import "./assets/style/components/cart"
	@import "./assets/style/components/message"
	@import "./assets/style/components/modal"
</style>
