<template>
	<div class="c-notification animated fade-out">
		{{message}}
	</div>
</template>

<script>
	export default {
		props: ['message'],
		data() {
			showNotification: false
		}
	}
</script>

<style lang="sass">
	.c-notification
		position: fixed
		top: 90px
		right: 20px
		padding: 17px
		border-radius: 6px
		font-size: 18px
		background-color: #ffffff
		box-shadow: 0 0 30px rgba(0,0,0,.15)
		z-index: 10

</style>
