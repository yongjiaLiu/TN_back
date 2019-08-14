<template>
	<div class="index">
		<el-container>
			<el-header>
				<Header></Header>
			</el-header>
			<el-container>
				<el-main>
					<keep-alive>
						<router-view v-if="$route.meta.keepAlive"></router-view>
					</keep-alive>
					<router-view v-if="!$route.meta.keepAlive"></router-view>
				</el-main>

				<div class="bottom gr_bg">

				</div>

			</el-container>
		</el-container>

	</div>
</template>

<script>
	import Header from 'components/common/header/header'
	export default {
		data() {
			return {
				isShow: false
			}
		},
		created() {
			/*if(!this.userData) {
				this.$router.push({
					path: '/login'
				})
			} else {

			}*/
		},
		components: {
			Header
		},
	}
</script>

<style>
	th {
		text-align: center;
	}

	.el-header {
		padding: 0 !important;
	}

	.el-main {
		position: absolute;
		left: 0;
		top: 56px;
		right: 0;
		bottom: 0;
		overflow-y: scroll;
		transition: left .3s ease-in-out;
		background: #f8f8fa;
	}
</style>
