<template>
    <section id="passport">
        <div class="banner-profile mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img class="mw-100" src="/assets/images/vcc/vcc-profile-banner.png" alt="">
                    </div>
                </div>
                <div class="row row-flex">
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="custom-card">
                            <h1>Earned Raffle Tickets</h1>
                            <div class="custom-card-content pt-0">
                                <h2 class="stamp-counter">
                                    <span>{{ num_raffle_tickets }}</span>
                                    <span class="stamp-icon position-relative d-inline-block">
                                        <img src="/assets/images/vcc/Passport Raffle Ticket.png" alt="">
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-3">
                        <div class="custom-card grey">
                            <h1>COLLECTED STAMPS</h1>
                            <div class="custom-card-content">
                                <h2 class="stamp-counter">
                                    {{ total_stamps_for_current_round }}
                                    <span class="stamp-icon">
                                        <img src="/assets/images/vcc/rcd-stamp-icon-1.png" alt="">
                                    </span>
                                </h2>
                                <h6>out of {{ stampable_sponsors }} collected virtual stamps for the current round</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 mb-3">
                        <div class="custom-card">
                            <h1>VISIT OUR EXHBITORS BOOTHS</h1>
                            <div class="custom-card-content">
                                <div class="d-flex align-items-center justify-content-center flex-column flex-md-row">
                                    <div>
                                        <h4>STAMP</h4>
                                        <img src="/assets/images/vcc/rcd-stamp-icon-3.png" alt="">
                                    </div>
                                    <div class="px-3">
                                        <p>Start collecting stamps from all of our featured exhibitor booths! Complete <span class="fw-bold">ALL 34 VIRTUAL STAMPS</span> for <span class="fw-bold">1 RAFFLE TICKET</span>. Get more raffle tickets, and you can have more chances of entries to the RCD Raffle Draw!</p>
                                    </div>
                                    <div class="px-1">
                                        <NuxtLink to="/virtual-convention-center/exhibit-hall" class="custom-enter-btn">EXHIBIT HALL</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container platinum-booth">
            <div class="row">
                <div class="col-md-12">
                    <div class="booth-title d-flex align-items-center justify-content-start mb-4">
                        <h1 class="text-uppercase">Platinum</h1>
                        <NuxtLink to="/virtual-convention-center/exhibit-hall/platinum" class="custom-enter-btn text-uppercase">Platinum Room</NuxtLink>
                    </div>
                    <div v-for="(platinum_sponsor, index) in platinum_sponsors" :key="index" class="booth flex-wrap d-flex align-items-center justify-content-between text-center mb-4 flex-column flex-md-row">
                        <div class="px-3">
                            <img v-if="platinum_sponsor.logo" :src="platinum_sponsor.logo" :alt="platinum_sponsor.name">
                        </div>
                        <div class="px-3 my-2">
                            <h2 class="text-uppercase">{{ platinum_sponsor.name }}</h2>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-end">
                            <NuxtLink :to="'/virtual-convention-center/exhibit-hall/platinum/' + (platinum_sponsor.slug ? platinum_sponsor.slug : '')" class="custom-enter-btn">
                                Visit Booth
                            </NuxtLink>
                            <a class="custom-stamp-btn" :class="platinum_sponsor.user_has_stamped_for_current_round ? 'stamp-received' : 'custom-stamp-btn'">
                                {{ platinum_sponsor.user_has_stamped_for_current_round ? 'Stamp Received' : 'No Stamp' }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container gold-booth">
            <div class="row">
                <div class="col-md-12">
                    <div class="booth-title d-flex align-items-center justify-content-start mb-4">
                        <h1 class="text-uppercase">Gold</h1>
                        <NuxtLink to="/virtual-convention-center/exhibit-hall/gold" class="custom-enter-btn text-uppercase">Gold Room</NuxtLink>
                    </div>
                    <div v-for="(gold_sponsor, index) in gold_sponsors" :key="index" class="booth flex-wrap d-flex align-items-center justify-content-between text-center mb-4 flex-column flex-md-row">
                        <div class="px-3">
                            <img v-if="gold_sponsor.logo" :src="gold_sponsor.logo" :alt="gold_sponsor.name">
                        </div>
                        <div class="px-3 my-2">
                            <h2 class="text-uppercase">{{ gold_sponsor.name }}</h2>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-end">
                            <NuxtLink :to="'/virtual-convention-center/exhibit-hall/gold/' + (gold_sponsor.slug ? gold_sponsor.slug : '')" class="custom-enter-btn">
                                Visit Booth
                            </NuxtLink>
                            <a class="custom-stamp-btn" :class="gold_sponsor.user_has_stamped_for_current_round ? 'stamp-received' : 'custom-stamp-btn'">
                                {{ gold_sponsor.user_has_stamped_for_current_round ? 'Stamp Received' : 'No Stamp' }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container silver-booth">
            <div class="row">
                <div class="col-md-12">
                    <div class="booth-title d-flex align-items-center justify-content-start mb-4">
                        <h1 class="text-uppercase">Silver</h1>
                        <NuxtLink to="/virtual-convention-center/exhibit-hall/silver" class="custom-enter-btn text-uppercase">Silver Room</NuxtLink>
                    </div>
                    <div v-for="(silver_sponsor, index) in silver_sponsors" :key="index" class="booth flex-wrap d-flex align-items-center justify-content-between text-center mb-4 flex-column flex-md-row">
                        <div class="px-3 my-2">
                            <h2 class="text-uppercase">{{ silver_sponsor.name }}</h2>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-end">
                            <NuxtLink :to="'/virtual-convention-center/exhibit-hall/silver/' + (silver_sponsor.slug ? silver_sponsor.slug : '')" class="custom-enter-btn">
                                Visit Booth
                            </NuxtLink>
                            <a class="custom-stamp-btn" :class="silver_sponsor.user_has_stamped_for_current_round ? 'stamp-received' : 'custom-stamp-btn'">
                                {{ silver_sponsor.user_has_stamped_for_current_round ? 'Stamp Received' : 'No Stamp' }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container bronze-booth pb-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="booth-title d-flex align-items-center justify-content-start mb-4">
                        <h1 class="text-uppercase">Bronze</h1>
                        <NuxtLink to="/virtual-convention-center/exhibit-hall/bronze" class="custom-enter-btn text-uppercase">Bronze Room</NuxtLink>
                    </div>
                    <div v-for="(bronze_sponsor, index) in bronze_sponsors" :key="index" class="booth flex-wrap d-flex align-items-center justify-content-between text-center mb-4 flex-column flex-md-row">
                        <div class="px-3 my-2">
                            <h2 class="text-uppercase">{{ bronze_sponsor.name }}</h2>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-end">
                            <NuxtLink :to="'/virtual-convention-center/exhibit-hall/bronze/' + (bronze_sponsor.slug ? bronze_sponsor.slug : '')" class="custom-enter-btn">
                                Visit Booth
                            </NuxtLink>
                            <a class="custom-stamp-btn" :class="bronze_sponsor.user_has_stamped_for_current_round ? 'stamp-received' : 'custom-stamp-btn'">
                                {{ bronze_sponsor.user_has_stamped_for_current_round ? 'Stamp Received' : 'No Stamp' }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="stamp-notice">
            <div class="stamp-flex">
                <div class="stamp-modal">
                    <h1>GET STAMP</h1>
                    <div class="stamp-msg">
                        <p><strong>Congratulations! You are now eligible to collect the stamp from this exhibitor!</strong></p>
                        <p>By clicking "Agree" you hereby give your consent to share your information with this exhibitor. More so, your complete name and email address will be automatically submitted to this exhibitor in exchange of a virtual stamp for your RCD virtual passport.</p>
                        <button class="stamp-agree">Agree</button>
                        <button class="stamp-cancel">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import $ from 'jquery'
export default {
	layout: "vcc-profile",
    middleware: "auth",
	data () {
		return {
            total_stamps_for_current_round: 0,
            stampable_sponsors: 34,
            num_raffle_tickets: 0,

            platinum_sponsors: [],
            gold_sponsors: [],
            silver_sponsors: [],
            bronze_sponsors: []
		};
    },
    methods: {
        formatDecimal(value, places) {
            return formatDecimal(value, places);
        },
		getSponsorByType() {
			this.$store.dispatch("sponsors/getSponsorByType")
            .then(res => {
                let data = res.data
                // console.log('getSponsorByType', data)

                this.platinum_sponsors = data.platinum_sponsors
                this.gold_sponsors = data.gold_sponsors
                this.silver_sponsors = data.silver_sponsors
                this.bronze_sponsors = data.bronze_sponsors
            })
            .catch(err => {
                this.$message.error(err)
            })
		},
        getUserStamps() {
            this.$store.dispatch("vcc/getUserStamps")
            .then(res => {
                let data = res.data
                // console.log('getUserStamps', data)

                this.total_stamps_for_current_round = data.total_stamps_for_current_round
                this.stampable_sponsors = data.stampable_sponsors
                this.num_raffle_tickets = data.num_raffle_tickets
            })
            .catch(err => {
                this.$message.error(err)
            })
        }
    },
    mounted() {
        $(".stamp-ready").click(function(event) {
            event.preventDefault();
            $(".stamp-notice").fadeIn();
        });
        $(".stamp-agree").click(function(event) {
            event.preventDefault();
            $(".stamp-notice").fadeOut();
        });
        $(".stamp-cancel").click(function(event) {
            event.preventDefault();
            $(".stamp-notice").fadeOut();
        });
    },
    async fetch() {
        this.getSponsorByType()
        this.getUserStamps()
    }
};
</script>

<style lang="scss" scoped>
    .custom-enter-btn {
        width: 180px;
        display: inline-block;
        padding: 4px 30px 5px 10px;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.9rem;
        border-radius: 15px;
        background: url('/assets/images/vcc/small-enter-icon.png') no-repeat 92% center #0776BC;
        white-space: nowrap;
        text-align: center;
    }
    .custom-stamp-btn {
        width: 180px;
        display: inline-block;
        padding: 4px 30px 5px 10px;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.9rem;
        border-radius: 15px;
        background: url('/assets/images/vcc/small-stamp-icon.png') no-repeat 92% center #B5B5B5;
        white-space: nowrap;
        text-align: center;
        cursor: default;
    }
    .custom-stamp-btn.stamp-ready {
        background-color: #4F9D5C;
        cursor: pointer;
    }
    .custom-stamp-btn.stamp-received {
        background: url('/assets/images/vcc/small-circle-check.png') no-repeat 92% center #4F9D5C;
    }
    .banner-profile {
        background: url('/assets/images/vcc/profile-banner-bg-2.png') no-repeat center bottom #ffffff;
        background-size: cover;
        text-align: center;
        padding: 70px 0 30px;
    }
    .row-flex {
        display: flex;
        flex-wrap: wrap;
    }
    .row-flex .custom-card {
        height: 100%;
    }
    .custom-card {
        background-color: #ffffff;
        height: auto;
        text-align: center;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 auto;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .custom-card h1 {
        background-color: #065E99;
        color: #ffffff;
        margin: 0;
        padding: 8px;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 700;
    }
    .custom-card.grey h1 {
        background-color: #B9B9B9;
    }
    .custom-card h3 {
        background-color: #065E99;
        color: #ffffff;
        margin: 0;
        padding: 8px;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 700;
    }
    .custom-card .custom-card-content {
        padding: 5px;
    }
    .custom-card .custom-card-content p {
        line-height: normal;
        font-size: 0.8rem;
        margin: 0 0 5px;
    }
    .custom-card-content h4 {
        font-size: 0.9rem;
        margin: 0;
        font-weight: 700;
        color: #FF7500;
    }
    .custom-card-content h6 {
        margin: 0;
        font-weight: 700;
    }
    .stamp-counter {
        margin: 0 auto;
        max-width: 220px;
        width: 100%;
        position: relative;
        font-size: 2.6rem;
        font-weight: 700;
        padding: 10px 0;
    }
    .stamp-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
    }
    .platinum-booth h1 {
        background-color: #E5E4E2;
        border-radius: 10px;
        position: relative;
        color: #000000;
        padding: 18px 33px 20px 13px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        width: 100%;
        text-align: center;
        font-weight: 700;
        overflow: hidden;
        margin: 0 6% 0 0;
        background:
        linear-gradient(
            -72deg,
            #dedeff,
            #ffffff 16%,
            #dedeff 21%,
            #ffffff 24%,
            #b5b5c4 27%,
            #dedeff 36%,
            #ffffff 45%,
            #ffffff 60%,
            #dedeff 72%,
            #ffffff 80%,
            #dedeff 84%,
            #a8a8b6
        );
    }
    .platinum-booth h1::after {
        content: "";
        background: url("/assets/images/small-weave.png") right center repeat-y;
        position: absolute;
        right: 0;
        top: 0;
        width: 35px;
        height: 100%;
    }
    .gold-booth h1 {
        background-color: #D4AF37;
        border-radius: 10px;
        position: relative;
        color: #000000;
        padding: 18px 33px 20px 13px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        width: 100%;
        text-align: center;
        font-weight: 700;
        overflow: hidden;
        margin: 0 6% 0 0;
        background:
        linear-gradient(
            -72deg,
            #ffde45,
            #ffffff 16%,
            #ffde45 21%,
            #ffffff 24%,
            #e5aa44 27%,
            #ffde45 36%,
            #ffffff 45%,
            #ffffff 60%,
            #ffde45 72%,
            #ffffff 80%,
            #ffde45 84%,
            #d19939
        );
    }
    .gold-booth h1::after {
        content: "";
        background: url("/assets/images/small-weave.png") right center repeat-y;
        position: absolute;
        right: 0;
        top: 0;
        width: 35px;
        height: 100%;
    }
    .silver-booth h1 {
        background-color: #C0C0C0;
        border-radius: 10px;
        position: relative;
        color: #000000;
        padding: 18px 33px 20px 13px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        width: 100%;
        text-align: center;
        font-weight: 700;
        overflow: hidden;
        margin: 0 6% 0 0;
        background:
        linear-gradient(
            -72deg,
            #dedede,
            #ffffff 16%,
            #dedede 21%,
            #ffffff 24%,
            #a0a0a0 27%,
            #dedede 36%,
            #ffffff 45%,
            #ffffff 60%,
            #dedede 72%,
            #ffffff 80%,
            #dedede 84%,
            #a1a1a1
        );
    }
    .silver-booth h1::after {
        content: "";
        background: url("/assets/images/small-weave.png") right center repeat-y;
        position: absolute;
        right: 0;
        top: 0;
        width: 35px;
        height: 100%;
    }
    .bronze-booth h1 {
        background-color: #CD7F32;
        border-radius: 10px;
        position: relative;
        color: #000000;
        padding: 18px 33px 20px 13px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        width: 100%;
        text-align: center;
        font-weight: 700;
        overflow: hidden;
        margin: 0 6% 0 0;
        background:
        linear-gradient(
            -72deg,
            #ca7345,
            #ffdeca 16%,
            #ca7345 21%,
            #ffdeca 24%,
            #cb5d31 27%,
            #ca7345 36%,
            #ffdeca 45%,
            #ffdeca 60%,
            #ca7345 72%,
            #ffdeca 80%,
            #ca7345 84%,
            #8b2f0a
        );
    }
    .bronze-booth h1::after {
        content: "";
        background: url("/assets/images/small-weave.png") right center repeat-y;
        position: absolute;
        right: 0;
        top: 0;
        width: 35px;
        height: 100%;
    }
    .platinum-booth .booth,
    .gold-booth .booth {
        min-height: 90px;
    }
    .booth {
        background-color: rgba(239, 239, 239, 0.5);
        border-radius: 10px;
        position: relative;
        color: #000000;
        padding: 7px 20px;
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
        width: 100%;
        font-weight: 700;
        overflow: hidden;
        margin: 0 0 20px;
        border-left: 15px solid #065E99;
    }
    .booth h2 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    .booth img {
        max-height: 75px;
        max-width: 100%;
        width: auto;
    }
    .booth a {
        margin: 5px 10px;
    }
    .booth > div {
        flex: 1;
    }
    .stamp-notice {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 7777;
		background-color: rgba($color: #000000, $alpha: 0.4);
		top: 0;
		left: 0;
        display: none;
	}
    .stamp-flex {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }
	.stamp-notice .stamp-modal {
		background-color: #ffffff;
        height: auto;
        text-align: center;
        max-width: 740px;
        width: 90%;
        border-radius: 10px;
        overflow: hidden;
	}
    .stamp-notice .stamp-modal h1 {
        background-color: #4F9D5C;
        color: #ffffff;
        margin: 0;
        padding: 5px;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 700;
    }
    .stamp-notice .stamp-modal .stamp-msg {
        padding: 20px;
    }
    .stamp-notice .stamp-modal .stamp-msg p {
        line-height: normal;
    }
    .stamp-notice .stamp-modal .stamp-msg button {
        border: none;
        background-color: #0776BC;
        color: #ffffff;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 700;
        padding: 5px 20px;
        width: 100px;
        border-radius: 20px;
        margin: 10px 15px 10px;
    }
    @media screen and (max-width: 767px) {
        .custom-card {
            margin: 0 0 20px;
        }
        .row-flex .custom-card {
            height: auto;
        }
        .platinum-booth h1,
        .gold-booth h1,
        .silver-booth h1,
        .bronze-booth h1 {
            font-size: 1.3rem;
        }
    }
</style>