<template>
	<section>
		<VCCPreLoader />
		<div class="vcc-banner-container">
			<div class="vcc-banner-img">
				<img :src="sponsor.lecture_background ? sponsor.lecture_background : '/assets/images/vcc/ROOM_A.jpg'" alt="">
				<div class="vcc-vimeo-container">
					<iframe :src="sponsor.lecture ? sponsor.lecture : 'https://player.vimeo.com/video/694282347?h=dee28b2946'"
						frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
					</iframe>
				</div>
			</div>
		</div>
		<div class="vcc-switch-btn">
			<NuxtLink to="/virtual-convention-center/lobby/industry-lectures/sponsor">
				Back to<br><span>Industry-Sponsored Lectures Hall</span>
			</NuxtLink>
		</div>
	</section>
</template>

<script>
export default {
	middleware: "auth",
	layout: "vcc",
	data () {
		return {
			sponsor: {
				lecture: null,
				lecture_background: null,
			}
		};
	},
	methods: {
		getLecture() {
            this.$store.dispatch("vcc/getLecture", this.$route.params.slug)
            .then(res => {
                let data = res.data
                this.sponsor.lecture = data.lecture
				this.sponsor.lecture_background = data.lecture_background
            })
            .catch(err => {
                console.error(err)
				this.$router.push('/virtual-convention-center/lobby/industry-lectures/sponsor')
            })
        },
	},
	async fetch() {
		this.getLecture()
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
    .vcc-vimeo-container {
		position: absolute;
        top: 27.8%;
        left: 30.8%;
        width: 38.7%;
        height: 41%;
	}
	.vcc-vimeo-container iframe {
		width: 100%;
		height: 100%;
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
	
	
</style>
