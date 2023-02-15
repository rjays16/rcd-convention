<template>
    <section id="attendance">
        <div class="banner-profile mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img class="mw-100" src="/assets/images/vcc/vcc-profile-banner.png" alt="">
                        <div class="custom-card">
                            <h1>ATTENDANCE REPORT</h1>
                            <div class="custom-card-content">
                                <p>Welcome to your virtual attendance report from the RCD 2022 Plenary Hall and/or Workshop Hall Sessions. Your attendance will be recorded here by checking your attendance during the Livestream virtual event.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-4 mh-50" v-loading="!isLoaded">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="plenary-head-title text-center text-uppercase font-weight-bold pb-5">Plenary Hall Session</h2>
                    <div class="attendance-content flex-wrap d-flex align-items-center justify-content-between text-center flex-column flex-lg-row"
                        v-for="(plenary_attendance, day) in plenary_attendance_list" :key="day">
                        <div class="px-1 py-3">
                            <div v-if="plenary_attendance.Logged_Date === '2022-10-04'" class="plenary-tab orange">
                            <!-- <div v-if="plenary_attendance.Logged_Date === '2022-10-26'" class="plenary-tab orange"> -->
                                <span class="tab-head-main gwendolyn-bold">{{ plenary_attendance.Program }}</span>
                                <span class="tab-head-second">Day {{day+1}}: {{ plenary_attendance.Logged_Date }} ({{ plenary_attendance.Logged_Day }})</span>
                            </div>
                            <div v-if="plenary_attendance.Logged_Date === '2022-10-05'" class="plenary-tab blue">
                            <!-- <div v-if="plenary_attendance.Logged_Date === '2022-10-27'" class="plenary-tab blue"> -->
                                <span class="tab-head-main gwendolyn-bold">{{ plenary_attendance.Program }}</span>
                                <span class="tab-head-second">Day {{day+1}}: {{ plenary_attendance.Logged_Date }} ({{ plenary_attendance.Logged_Day }})</span>
                            </div>
                            <div v-if="plenary_attendance.Logged_Date === '2022-10-06'" class="plenary-tab yellow">
                            <!-- <div v-if="plenary_attendance.Logged_Date === '2022-10-28'" class="plenary-tab yellow"> -->
                                <span class="tab-head-main gwendolyn-bold">{{ plenary_attendance.Program }}</span>
                                <span class="tab-head-second">Day {{day+1}}: {{ plenary_attendance.Logged_Date }} ({{ plenary_attendance.Logged_Day }})</span>
                            </div>
                        </div>
                        <div class="px-1 py-3">
                            <h6>Status</h6>
                            <button v-if="plenary_attendance.Status === 'Waiting'" class="status waiting">
                                Waiting
                            </button>
                            <button v-if="plenary_attendance.Status === 'Present'" class="status present">
                                Present
                            </button>
                            <button v-if="plenary_attendance.Status === 'No Record'" class="status no-record">
                                No record
                            </button>
                        </div>
                        <div class="px-1 py-3">
                            <h6>TIME LOGGED IN</h6>
                            <p class="time-in">{{ plenary_attendance.Login_Time }}</p>
                        </div>
                        <div class="px-1 py-3">
                            <h6>TIME LOGGED OUT</h6>
                            <p class="time-out">{{ plenary_attendance.Logout_Time }}</p>
                        </div>
                        <div class="px-1 py-3">
                            <h6>EST. SESSION DURATION</h6>
                            <p class="time-duration"> {{ plenary_attendance.Estimated_Time_Duration }} </p>
                        </div>
                    </div>
                    <h2 class="plenary-head-title text-center text-uppercase font-weight-bold pb-5">Workshop Hall Session</h2>
                    <div class="attendance-content flex-wrap d-flex align-items-center justify-content-between text-center flex-column flex-lg-row"
                        v-for="(workshop_attendance, day) in workshop_attendance_list" :key="day">
                        <div class="px-1 py-3">
                            <div v-if="workshop_attendance.Logged_Date === '2022-10-05'" class="plenary-tab orange">
                            <!-- <div v-if="plenary_attendance.Logged_Date === '2022-10-26'" class="plenary-tab orange"> -->
                                <span class="tab-head-main gwendolyn-bold">{{ workshop_attendance.Workshop }}  </span>
                                <span class="tab-head-second">Day {{day+1}}: {{ workshop_attendance.Logged_Date }} ({{ workshop_attendance.Logged_Day }})</span>
                            </div>
                            <div v-if="workshop_attendance.Logged_Date === '2022-10-27'" class="plenary-tab blue">
                            <!-- <div v-if="plenary_attendance.Logged_Date === '2022-10-27'" class="plenary-tab blue"> -->
                                <span class="tab-head-main gwendolyn-bold">{{ workshop_attendance.Workshop }}</span>
                                <span class="tab-head-second">Day {{day+1}}: {{ workshop_attendance.Logged_Date }} ({{ workshop_attendance.Logged_Day }})</span>
                            </div>
                        </div>
                        <div class="px-1 py-3">
                            <h6>Status</h6>
                            <button v-if="workshop_attendance.Status === 'Waiting'" class="status waiting">
                                Waiting
                            </button>
                            <button v-if="workshop_attendance.Status === 'Present'" class="status present">
                                Present
                            </button>
                            <button v-if="workshop_attendance.Status === 'No Record'" class="status no-record">
                                No record
                            </button>
                        </div>
                        <div class="px-1 py-3">
                            <h6>TIME LOGGED IN</h6>
                            <p class="time-in">{{ workshop_attendance.Login_Time }}</p>
                        </div>
                        <div class="px-1 py-3">
                            <h6>TIME LOGGED OUT</h6>
                            <p class="time-out">{{ workshop_attendance.Logout_Time }}</p>
                        </div>
                        <div class="px-1 py-3">
                            <h6>EST. SESSION DURATION</h6>
                            <p class="time-duration"> {{ workshop_attendance.Estimated_Time_Duration }} </p>
                        </div>
                    </div>
                    <!-- <h2 class="plenary-head-title text-center text-uppercase font-weight-bold pb-5"> Symposia Hall Session</h2>
                    <div class="attendance-content flex-wrap d-flex align-items-center justify-content-between text-center flex-column flex-lg-row"
                        v-for="(symposia_attendance, day) in symposia_attendance_list" :key="day">
                        <div class="px-1 py-3">
                            <div v-if="symposia_attendance.Logged_Date === '2022-10-26'" class="plenary-tab orange">
                                <span class="tab-head-main gwendolyn-bold">{{ symposia_attendance.Workshop }}  </span>
                                <span class="tab-head-second">Day {{day+1}}: {{ symposia_attendance.Logged_Date }} ({{ symposia_attendance.Logged_Day }})</span>
                            </div>
                            <div v-if="symposia_attendance.Logged_Date === '2022-10-27'" class="plenary-tab blue">
                                <span class="tab-head-main gwendolyn-bold">{{ symposia_attendance.Workshop }}</span>
                                <span class="tab-head-second">Day {{day+1}}: {{ symposia_attendance.Logged_Date }} ({{ symposia_attendance.Logged_Day }})</span>
                            </div>
                        </div>
                        <div class="px-1 py-3">
                            <h6>Status</h6>
                            <button v-if="symposia_attendance.Status === 'Waiting'" class="status waiting">
                                Waiting
                            </button>
                            <button v-if="symposia_attendance.Status === 'Present'" class="status present">
                                Present
                            </button>
                            <button v-if="symposia_attendance.Status === 'No Record'" class="status no-record">
                                No record
                            </button>
                        </div>
                        <div class="px-1 py-3">
                            <h6>TIME LOGGED IN</h6>
                            <p class="time-in">{{ workshop_attendance.Login_Time }}</p>
                        </div>
                        <div class="px-1 py-3">
                            <h6>TIME LOGGED OUT</h6>
                            <p class="time-out">{{ workshop_attendance.Logout_Time }}</p>
                        </div>
                        <div class="px-1 py-3">
                            <h6>EST. SESSION DURATION</h6>
                            <p class="time-duration"> {{ workshop_attendance.Estimated_Time_Duration }} </p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
	layout: "vcc-profile",
    middleware: "auth",
	data(){
		return {
            isLoaded: false,
            plenary_attendance_list:[],
            workshop_attendance_list:[],
            symposia_attendance_list:[]
		};
    },
    methods: {
        getUser(){
           this.$store.dispatch("auth/getUser")
            .then(res => {
                this.getPlenaryAttendanceList(res.data.member.id)
                this.getWorkshopAttendanceList(res.data.member.id)
                // this.getSymposiaAttendanceList(res.data.member.id)
            })
            .catch(err => {
                console.error(err)
            })
        },
        getPlenaryAttendanceList(user_id){
           this.$store.dispatch("vcc/getPlenaryAttendanceList", user_id)
            .then(res => {
                this.plenary_attendance_list = res.data;
            })
            .catch(err => {
                console.error(err)
            })
        },
        getWorkshopAttendanceList(user_id){
           this.$store.dispatch("vcc/getWorkshopAttendanceList", user_id)
            .then(res => {
                this.workshop_attendance_list = res.data;
                this.isLoaded = true
            })
            .catch(err => {
                console.error(err)
                this.isLoaded = true
            })
        },
        getSymposiaAttendanceList(user_id){
           this.$store.dispatch("vcc/getSymposiaAttendanceList", user_id)
            .then(res => {
                this.symposia_attendance_list = res.data;
                this.isLoaded = true
            })
            .catch(err => {
                console.error(err)
                this.isLoaded = true
            })
        },
        bindPusher() {
            var self = this;
            var channel = pusher.subscribe(process.env.PUSHER_CHANNEL);
            channel.bind("member-log", function() {
                self.getUser()
            });
        }
    },
    mounted(){
        this.getUser()
        this.bindPusher()
    }
};
</script>

<style lang="scss" scoped>
    .banner-profile {
        background: url('/assets/images/vcc/profile-banner-bg-3.png') no-repeat center bottom #ffffff;
        background-size: cover;
        text-align: center;
        padding: 70px 0 30px;
    }
    .custom-card {
        background-color: #ffffff;
        height: auto;
        text-align: center;
        max-width: 730px;
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
        font-size: 1rem;
        font-weight: 700;
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
        padding: 20px;
    }
    .custom-card .custom-card-content p {
        line-height: normal;
        font-size: 0.8rem;
        margin: 0 0 10px;
    }
    .plenary-tab {
		background: url('/assets/images/small-weave.png') right center repeat-y;
		border-radius: 10px;
		color: #000000;
		padding: 10px;
		box-shadow: 0 3px 3px rgba(0,0,0,0.3);
		max-width: 430px;
		width: 430px;

	}
	.plenary-tab.orange {
		background-color: #ff7500;
	}
	.plenary-tab.yellow {
		background-color: #fab623;
	}
	.plenary-tab.blue {
		background-color: #0776bc;
	}
	.plenary-tab span {
		display: block;
	}
	.tab-head-main.gwendolyn-bold {
		font-size: 2.0rem;
		line-height: 2.5rem;
	}
	.tab-head-second {
		font-weight: 700;
		text-transform: uppercase;
		font-size: 0.8rem;
	}
    .attendance-content {
        margin-bottom: 50px;
    }
    .attendance-content h6 {
        margin: 0 0 10px;
        text-transform: uppercase;
    }
    .attendance-content p {
        font-size: 1.6rem;
        margin: 0;
        line-height: 1.7rem;
    }
    .status {
        border: none;
        background-color: #e5e5e5;
        color: #636568;
        font-size: 0.8rem;
        text-transform: uppercase;
        border-radius: 15px;
        padding: 4px 10px 5px 35px;
    }
    .status.waiting {
        background: url('/assets/images/vcc/waiting-icon.png') no-repeat 8px center rgba($color: #636568, $alpha: 0.10);
        color: #636568;
    }
    .status.present {
        background: url('/assets/images/vcc/present-icon.png') no-repeat 8px center rgba($color: #03A89E, $alpha: 0.10);
        color: #03A89E;
    }
    .status.no-record {
        background: url('/assets/images/vcc/norecord-icon.png') no-repeat 8px center rgba($color: #FF0000, $alpha: 0.10);
        color: rgba($color: #FF0000, $alpha: 0.50);
    }
    .plenary-head-title {
        color:#065E99;
    }

    @media screen and (max-width: 1199px) {
        .plenary-tab {
            width: 290px;
        }
    }
    @media screen and (max-width: 991px) {
        .plenary-tab {
            width: 400px;
        }
    }
    @media screen and (max-width: 480px) {
        .plenary-tab {
            width: 100%;
            padding: 10px 40px 10px 15px;
        }
    }
</style>