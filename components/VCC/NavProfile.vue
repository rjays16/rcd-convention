<template>
    <div class="pr-5 nav-container" id="vcc-nac-profile">
        <el-menu class="text-uppercase main-menu"
            mode="horizontal"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item index="1" class="border-0 item-mobile">
                <el-dropdown trigger="click">
                    <span class="btn nav-username text-white bs-0">
                        <span class="text-decoration-none nav-mobile-logo fs-5">
                            <img src="/assets/images/vcc/burger_button_2.png" />
                        </span>
                        <!-- <i class="fa fa-bars"></i> -->
                    </span>
                    <el-dropdown-menu slot="dropdown" class="user-options">
                        <el-dropdown-item v-if="is_vcc_open" :class="has_paid_registration ? 'clickable' : 'dis-pointer'">
                            <a class="text-decoration-none text-dark" :class="has_paid_registration ? 'clickable' : 'dis-pointer'"
                                @click="showShouldPayPrompt(has_paid_registration, '/virtual-convention-center')">
                                <i class="fa-solid fa-door-open pe-2"></i>Entrance
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item :class="has_paid_registration ? 'clickable' : 'dis-pointer'">
                            <a class="text-decoration-none text-dark" :class="has_paid_registration ? 'clickable' : 'dis-pointer'"
                                @click="showShouldPayPrompt(has_paid_registration, '/profile/virtual-passport')">
                                <i class="fa-solid fa-passport pe-2"></i>Passport
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item :class="has_paid_registration ? 'clickable' : 'dis-pointer'">
                            <a class="text-decoration-none text-dark" :class="has_paid_registration ? 'clickable' : 'dis-pointer'"
                                @click="showShouldPayPrompt(has_paid_registration, '/profile/attendance')">
                                <i class="fa-solid fa-clipboard-user pe-2"></i>Attendance
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item :class="has_paid_registration ? 'clickable' : 'dis-pointer'">
                            <a class="text-decoration-none text-dark" :class="has_paid_registration ? 'clickable' : 'dis-pointer'"
                                @click="showShouldPayPrompt(has_paid_registration, '/profile')">
                                <i class="fa fa-home pe-2"></i>Dashboard
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <p class="mb-0 text-dark" @click="logout">
                                <i class="fa fa-lock pe-2"></i>
                                Log Out
                            </p>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-menu-item>

            <el-menu-item index="1" class="border-0 item-web" v-if="is_vcc_open" :class="has_paid_registration ? 'clickable' : 'dis-pointer'">
                <a class="text-decoration-none fs-5 avenir-medium" :class="has_paid_registration ? 'clickable' : 'dis-pointer'"
                    @click="showShouldPayPrompt(has_paid_registration, '/virtual-convention-center')">
                    <span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-2.png" alt=""></span>Entrance
                </a>
            </el-menu-item>
            <el-menu-item index="1" class="border-0 item-web" :class="has_paid_registration ? 'clickable' : 'dis-pointer'">
                <a class="text-decoration-none fs-5 avenir-medium" :class="has_paid_registration ? 'clickable' : 'dis-pointer'"
                    @click="showShouldPayPrompt(has_paid_registration, '/profile/virtual-passport')">
                    <span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-3.png" alt=""></span>Passport
                </a>
            </el-menu-item>
            <el-menu-item index="2" class="border-0 item-web" :class="has_paid_registration ? 'clickable' : 'dis-pointer'">
                <a class="text-decoration-none fs-5 avenir-medium" :class="has_paid_registration ? 'clickable' : 'dis-pointer'"
                    @click="showShouldPayPrompt(has_paid_registration, '/profile/attendance')">
                    <span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-4.png" alt=""></span>Attendance
                </a>
            </el-menu-item>
            <el-menu-item index="2" class="border-0 item-web" :class="has_paid_registration ? 'clickable' : 'dis-pointer'">
                <a class="text-decoration-none fs-5 avenir-medium" :class="has_paid_registration ? 'clickable' : 'dis-pointer'"
                    @click="showShouldPayPrompt(has_paid_registration, '/profile')">
                    <span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-1.png" alt=""></span>Dashboard
                </a>
            </el-menu-item>
            <el-menu-item class="border-0 item-web">
                <a class="text-decoration-none fs-5 avenir-medium logout-padding" @click="logout">
                    <img src="/assets/images/vcc/vcc-logout-icon.png" alt=""> 
                    Log Out
                </a>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import { mapGetters, mapActions} from "vuex";

export default {
    data() {
        return {
            has_paid_registration: false,
            is_vcc_open: false,
            member: null,
            log:{
                convention_member_id: null,
                is_login: false,
                is_logout: false,
                url: this.$nuxt.$route.path
            }
        }
    },
    computed: {
        ...mapGetters({
            isLoggedIn: 'auth/isLoggedIn',
        }),
    },
    methods: {
        ...mapActions({
            vxLogout: "auth/logout",
        }),
        logout() {
            this.log.convention_member_id = this.member.id
            this.log.is_logout = true
            this.logoutDelegateAttendance();
            this.vxLogout()
            .then((res) => {
            })
            .catch((err) => {
                console.log(err);
                this.$router.push("/login");
            });
        },
        getUser() {
            this.$store.dispatch("auth/getUser")
            .then(res => {
                let member_data = res.data.member
                this.has_paid_registration = member_data.paid_fees.has_paid_registration
                this.member = res.data.member
            })
            .catch(err => {
                console.error(err)
            })
        },
        getVCCOpeningDate() {
            this.$store.dispatch("vcc/getOpeningDate")
            .then(res => {
                let data = res.data
                this.is_vcc_open = data.is_vcc_open
            })
            .catch(err => {
                this.$message.error(err)
            })
        },
        showShouldPayPrompt(has_paid_registration, url) {
            if(has_paid_registration) {
                this.$router.push(url)
            } else {
                this.$message.error('Please pay first the registration fee for you to be able to access the convention portal.')
            }
        },
        logoutDelegateAttendance(){
            this.$store.dispatch("vcc/create", this.log)
            .then(res => {
                console.log(res.data.message)
                this.$router.push("/login");
            })
            .catch(err => {
                console.error(err)
            })
		},
    },
    async fetch() {
        this.getUser()
        this.getVCCOpeningDate()
    }
}
</script>

<style lang="scss" scoped>
.nav-container {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    z-index: 100;
    top: 0;
    @media only screen and (max-width: 1275px) {
        justify-content: end;
    }
}
.el-menu--horizontal > .el-menu-item {
    margin: 0;
}
.el-menu--horizontal > .el-menu-item:hover {
    background: none !important;
}
.main-menu {
    .el-menu-item {
        display: flex;
        align-items: center;
        padding: 0 10px;
        background: none !important;
        ::v-deep a {
            position: relative;
            top: 0;
            background: #ff7500;
            border-radius: 30px;
            box-shadow: 0px 4px rgba(0, 0, 0, 0.3);
            margin: 0;
            color: #fff;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            transition: all 0.1s ease;
            padding: 8px 20px;
            display: flex;
            line-height: normal;
            letter-spacing: 1px;
            align-items: center;
            height: 50px;
        }
        &::v-deep a.logout-padding {
            padding: 10px 12px;
        }
        &::v-deep a svg {
            margin-right: 10px;
            top: -2px;
            position: relative;
        }
        &::v-deep a span.custom-icon {
            padding-right: 10px;
        }
        &::v-deep a.user-icon {
            font-size: 28px !important;
            vertical-align: baseline;
            line-height: 23px;
            svg {
                margin-right: 0;
            }
        }
        &::v-deep a:hover {
            top: -3px;
            box-shadow: 0px 5px rgba(0, 0, 0, 0.3);
        }
        &::v-deep a:active {
            top: 3px;
            box-shadow: 0px 0px rgba(0, 0, 0, 0.3);
        }
    }
}

.main-menu {
    padding: 10px 0;
    background-color: transparent;
    &.el-menu--horizontal {
        border-bottom: 0px;
        >.el-menu-item:not(.is-disabled):focus,
        >.el-menu-item:not(.is-disabled):hover,
        >.el-submenu .el-submenu__title:hover {
            background-color: #1771AD;
        }
    }
    .item-mobile {
        display: none;
    }
    @media only screen and (max-width: 1275px) {
        justify-content: start;;
        .item-web {
            display: none;
        }
        .item-mobile {
            display: block;
            .nav-mobile-logo {
                max-width: 40px;
                display: inline-block;
                opacity: 0.85;
                img {
                    width: 100%;
                }
            }
        }
    }
}

</style>
