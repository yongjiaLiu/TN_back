<template>
	<div >
		<navPic></navPic>
		<div class="classify">
			<div class="cont">
				<h2 class="zi">活动分类</h2>
				<h3 class="yw">CLASS NAME</h3>
				<div class="content clearfix">
					<div class="lef">
						<div class="lefs">
							<div class="im">
								<img src="../../../../static/img/index/tu1.png" alt="">
								<div class="detail">
									<p class="wz"><span class="sp">圣彼得堡</span></p>
									<p class="pirce"><span>￥6888起</span></p>
								</div>
							</div>
							
						</div>
					</div>
					<div class="righ">
						<div class="to clearfix">
							<div style="float: left;width: 50%;padding-right: 12px;" >
								<div class="pic1" style="margin-right: 24px;">
									<img src="../../../../static/img/index/tu2.png" alt="" >
									<div class="detail">
										<p class="wz"><span class="sp">潮汕日出</span></p>
										<p class="pirce"><span>￥1688起</span></p>
									</div>
								</div>
							</div>
							<div style="float: left;width: 50%;padding-left: 12px;" >
								<div class="pic2">
									<img src="../../../../static/img/index/tu3.png" alt="">
									<div class="detail">
										<p class="wz"><span class="sp">夏威夷</span></p>
										<p class="pirce"><span>￥5888起</span></p>
									</div>
								</div>
							</div>	
								
						</div>
						<div class="bott">
							<div class="botts">
								<img src="../../../../static/img/index/tu4.png" alt="">
								<div class="cost">
									<p class="p1">圣托里尼三日游</p>
									<p class="p2">国庆专属定制路线</p>
									<p class="p3">￥6666起</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="more">查看更多</div>
			</div>
		</div>
		<div style="float: left;" class="pic2">
			
		</div>
	<div class="commodity">
			<div class="cont">
					<h2 class="zi">商品分类</h2>
					<h3 class="yw">CLASSIFICATION OF GOODS</h3>
					<div class="contents clearfix">
						<div class="lef">
							<div class="to">
								<img src="../../../../static/img/index/tu8.png" alt="">
								<div class="detail">
									<p class="wz"><span class="sp">自行车</span></p>
									<p class="pirce"><span>￥888起</span></p>
								</div>
							</div>
							<div class="bott clearfix">
							<div style="float: left;width: 50%;padding-right: 12px;" >
								<div class="pic1" style="margin-right: 24px;">
									<img src="../../../../static/img/index/tu6.png" alt="" >
									<div class="detail">
										<p class="wz"><span class="sp">骑行服</span></p>
										<p class="pirce"><span>￥78起</span></p>
									</div>
								</div>
							</div>
							<div style="float: left;width: 50%;padding-left: 12px;" >
								<div class="pic2">
									<img src="../../../../static/img/index/tu7.png" alt="">
									<div class="detail">
										<p class="wz"><span class="sp">露营帐篷</span></p>
										<p class="pirce"><span>￥288起</span></p>
									</div>
								</div>
							</div>	
							</div>
						</div>
						<div class="righ">
							<div class="righs">
								<img src="../../../../static/img/index/tu5.png" alt="">
								<div class="detail">
									<p class="wz"><span class="sp">装备</span></p>
									<p class="pirce"><span>￥32起</span></p>
								</div>
							</div>
						</div>
					</div>
					<div class="more">查看更多</div>
				</div>
			</div>
	</div>
</template>

<script>
	import navPic from "../../common/navPic/index.vue"
	export default {
		name: "home",
		components: {
			navPic:navPic
		},
		data() {
			return {

			};
		},
		computed: {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
	.classify{
		width: 100%;
		.cont{
			width: 90%;
			margin: 0 auto;
			.zi{
			font-family: SimHei;
			text-align: center;
			font-size: 30px;
			color: #333;
			letter-spacing: 3px;
			margin-bottom: 34px;
			}
			.yw{
				text-align: center;
				font-size: 20px;
				color: #999;
				letter-spacing: 2px;
			}
			.content{
				margin-top: 60px;
				.lef{
					float: left;
					width: 31.2%;
					.lefs{
					padding-right: 24px;
						.im{
							position: relative;
							width: 100%;
							img{
								width: 100%;
							}
							.detail{
								text-align: right;
								position: absolute;
								right:0px;
								top:27px;
								.wz{
									position: relative;
									padding-right: 18px;
									font-size: 15px;
									color:#fefefe;
								}
								.sp{
									position: relative;
								}
								.sp:before{
									position: absolute;
									top:3px;
									left: -10px;
									display: inline-block;
									content:"" ;
									clear: both;
									height: 15px;
									width: 4px;
									background: #fff;
									margin-right: 6px;
								}
								.pirce{
									margin-top: 19px;
									font-size: 15px;
									color: #ffcd30;
									padding-right: 20px;
									letter-spacing: 1px;
									font-family: MicrosoftYaHei-Bold;
								}
							}
						}
					}
					
				}
				.righ{
					width: 66.6%;
					float: left;
					.to{
						width: 100%;
						.pic1,.pic2{
							width: 100%;
							position: relative;
							img{
								width: 100%;
							}
							.detail{
								text-align: right;
								position: absolute;
								right:0px;
								top:27px;
								.wz{
									position: relative;
									padding-right: 18px;
									font-size: 15px;
									color:#fefefe;
								}
								.sp{
									position: relative;
								}
								.sp:before{
									position: absolute;
									top:3px;
									left: -10px;
									display: inline-block;
									content:"" ;
									clear: both;
									height: 15px;
									width: 4px;
									background: #fff;
									margin-right: 6px;
								}
								.pirce{
									margin-top: 19px;
									font-size: 15px;
									color: #ffcd30;
									padding-right: 20px;
									letter-spacing: 1px;
									font-family: MicrosoftYaHei-Bold;
								}
							}
						}
					}
					.bott{
						width: 100%;
						position: relative;
						.botts{
							margin-top: 14px;
							width: 100%;
							img{
								width: 100%;
							}
							.cost{
								width: 400px;
								height: 150px;
								text-align: center;
								position: absolute;
								left: 0;
								top:0;
								right: 0;
								bottom: 0;
								margin:auto;
								color: #fefefe;
								.p1{
									font-size: 19px;
									margin-bottom: 19px;
									letter-spacing: 2px;
								}
								.p2{
									font-size: 12px;
									margin-bottom: 34px;
									letter-spacing: 2px;
								}
								.p3{
									color: #ffcd30;
									font-size:15px ;
								}
							}
						}
						
					}
				}
		}
		
	}
	.more{
		margin: 0 auto;
		margin-top: 56px;
		width: 338px;
		height: 85px;
		background: rgba(86,128,249);
		font-size:20px ;
		line-height: 83px;
		border-radius: 43px 43px 43px 43px;
		text-align: center;
		color: #fff;
		margin-bottom: 179px;
	}
	}
	.commodity{
		width: 100%;
		.cont{
			width: 90%;
			margin: 0 auto;
			.zi{
			font-family: SimHei;
			text-align: center;
			font-size: 30px;
			color: #333;
			letter-spacing: 3px;
			margin-bottom: 34px;
			}
			.yw{
				text-align: center;
				font-size: 20px;
				color: #999;
				letter-spacing: 2px;
			}
			.contents{
				margin-top: 60px;
				.lef{
					float: left;
					position: relative;
					width: 66.6%;
					.to{
						width: 100%;
						img{
							width: 100%;
						}
						.detail{
						text-align: right;
						position: absolute;
						right:160px;
						top:70px;
						.wz{
							position: relative;
							padding-right: 18px;
							font-size: 19px;
							color:#fefefe;
						}
						.pirce{
							margin-top: 19px;
							font-size: 15px;
							color: #ffcd30;
							padding-right: 20px;
							letter-spacing: 1px;
							font-family: MicrosoftYaHei-Bold;
						}
						}
					}
					.bott{
						padding-top: 14px;
					width: 100%;
					.pic1,.pic2{
						width: 100%;
						position: relative;
						img{
							width: 100%;
						}
						.detail{
							text-align: right;
							position: absolute;
							right:0px;
							top:27px;
							.wz{
								position: relative;
								padding-right: 18px;
								font-size: 15px;
								color:#fefefe;
							}
							.sp{
								position: relative;
							}
							.sp:before{
								position: absolute;
								top:3px;
								left: -10px;
								display: inline-block;
								content:"" ;
								clear: both;
								height: 15px;
								width: 4px;
								background: #fff;
								margin-right: 6px;
							}
							.pirce{
								margin-top: 19px;
								font-size: 15px;
								color: #ffcd30;
								padding-right: 20px;
								letter-spacing: 1px;
								font-family: MicrosoftYaHei-Bold;
							}
						}
					}	
					}
				}
				.righ{
					float: left;
					position: relative;
					width: 31.2%;
					.righs{
						padding-left: 24px;
						position: relative;
						img{
							width: 100%;
						}
						.detail{
							text-align: right;
							position: absolute;
							right:50px;
							top:27px;
							.wz{
								position: relative;
								padding-right: 18px;
								font-size: 15px;
								color:#fefefe;
							}
							.sp{
								position: relative;
							}
							.sp:before{
								position: absolute;
								top:3px;
								left: -10px;
								display: inline-block;
								content:"" ;
								clear: both;
								height: 15px;
								width: 4px;
								background: #fff;
								margin-right: 6px;
							}
							.pirce{
								margin-top: 19px;
								font-size: 15px;
								color: #ffcd30;
								padding-right: 20px;
								letter-spacing: 1px;
								font-family: MicrosoftYaHei-Bold;
							}
						}
					}	
				}
			}
			.more{
				margin: 0 auto;
				margin-top: 56px;
				width: 338px;
				height: 85px;
				background: rgba(86,128,249);
				font-size:20px ;
				line-height: 83px;
				border-radius: 43px 43px 43px 43px;
				text-align: center;
				color: #fff;
				margin-bottom: 116px;
			}
		}
	}
</style>
