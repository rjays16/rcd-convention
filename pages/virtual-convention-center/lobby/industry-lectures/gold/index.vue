<template>
	<section>
		<VCCPreLoader />
		<div class="vcc-banner-container">
			<div class="vcc-banner-img">
				<img src="/assets/images/vcc/GOLD_BREAKOUT.jpg" alt="">
				<NuxtLink to="/virtual-convention-center/lobby/industry-lectures/gold/creative-skin" class="industry-a">
					<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
					<span>Enter Here</span>
				</NuxtLink>
				<NuxtLink to="/virtual-convention-center/lobby/industry-lectures/gold/johnson-johnson" class="industry-b">
					<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
					<span>Enter Here</span>
				</NuxtLink>
				<NuxtLink to="/virtual-convention-center/lobby/industry-lectures/gold/zuellig-pharma" class="industry-c">
					<img src="/assets/images/vcc/RCD-2022-Marker.png" alt="">
					<span>Enter Here</span>
				</NuxtLink>
			</div>
		</div>
		<div class="vcc-switch-btn">
			<NuxtLink to="/virtual-convention-center/lobby/industry-lectures">
				Back to<br><span>Industry Lectures</span>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
import $ from 'jquery'
export default {
	middleware: "auth",
	layout: "vcc",
	data () {
		return {
		};
  },
  mounted(){
	
  },

};
</script>
<style lang="scss" scoped>
	.vcc-banner-img {
		position: relative;
		img {
			max-width: 100%;
		}
	}
	.vcc-banner-img a {
		position: absolute;
		color: #ffffff;
		opacity: 0.9;
		width: 6%;
		display: block;
		text-align: center;
		text-decoration: none;
		transition: all 0.5s ease;
		animation: pulse 1s infinite;
	}
	.vcc-banner-img a img {
		width: 50%;
	}
	.vcc-banner-img a span {
		display: block;
		text-transform: uppercase;
		font-size: 1vw;
		font-weight: 700;
		visibility: hidden;
	}
	.vcc-banner-img a:hover {
		opacity: 1;
	}
	.vcc-banner-img a:hover span {
		visibility: visible;
	}
	.vcc-banner-img a.industry-a {
		top: 52%;
        left: 20.2%;
	}
	.vcc-banner-img a.industry-b {
		top: 52%;
        left: 47.1%;
	}
	.vcc-banner-img a.industry-c {
		top: 52%;
        left: 74%;
	}

	.vcc-switch-btn, .vcc-switch-btn-360 {
		padding: 50px 0;
		background: url(/assets/comm-lines-web.png) no-repeat center center;
		text-align: center;
		background-size: contain;
	}
	.vcc-switch-btn a, .vcc-switch-btn-360 a {
		text-transform: uppercase;
		color: #fff;
		background-color: #005b97;
		border-radius: 20px;
		display: inline-block;
		padding: 8px 30px;
		font-weight: 300;
		line-height: 25px;
		text-decoration: none;
		max-width: 320px;
		width: 100%;
		cursor: pointer;
	}
	.vcc-switch-btn a span, .vcc-switch-btn-360 a span {
		font-weight: 700;
		font-size: 25px;
	}
	
	@keyframes pulse {
		0% {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(0, -9%);
		}
		100% {
			transform: translate(0, 0);
		}
	}
	
</style>
