<template>
    <div class="pr-5 nav-container">
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
                        <el-dropdown-item>
                            <NuxtLink to="/virtual-convention-center/facade" class="text-decoration-none text-dark"><i class="fa fa-home pe-2"></i>Facade</NuxtLink>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <NuxtLink to="/virtual-convention-center/lobby" class="text-decoration-none text-dark"><i class="fa fa-couch pe-2"></i>Lobby</NuxtLink> <!--update-->
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <NuxtLink to="/virtual-convention-center/lobby/plenary" class="text-decoration-none text-dark" @click="updateDelegateAttendance()"><i class="fa fa-display pe-2"></i>Plenary</NuxtLink> <!--update-->
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <NuxtLink to="/virtual-convention-center/lobby/workshops" class="text-decoration-none text-dark"><i class="fa fa-pen-ruler pe-2"></i>Workshop</NuxtLink> <!--update-->
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <NuxtLink to="/virtual-convention-center/lobby/research-hall" class="text-decoration-none text-dark"><i class="fa fa-book pe-2"></i>Research</NuxtLink> <!--update-->
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <NuxtLink to="/virtual-convention-center/exhibit-hall" class="text-decoration-none text-dark"><i class="fa fa-store pe-2"></i>Exhibits</NuxtLink> <!--update-->
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <NuxtLink to="/virtual-convention-center/lobby/symposia" class="text-decoration-none text-dark"><i class="fa fa-book pe-2"></i>Symposia</NuxtLink> <!--update-->
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <NuxtLink to="/virtual-convention-center/lobby/industry-lectures" class="text-decoration-none text-dark"><i class="fa fa-display pe-2"></i>Lectures</NuxtLink> <!--update-->
                        </el-dropdown-item>
                        <el-dropdown class="px-3" trigger="click">
                            <a class="mb-0 text-decoration-none text-dark" href="#">
                                <i class="fa fa-registered pe-2"></i>
                                My Account
                            </a>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <NuxtLink to="/profile" class="text-decoration-none text-dark"><i class="fa fa-home pe-2"></i>Dashboard</NuxtLink>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <NuxtLink to="/virtual-convention-center" class="text-decoration-none text-dark"><i class="fa-solid fa-door-open pe-2"></i>Entrance</NuxtLink>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <NuxtLink to="/profile/virtual-passport" class="text-decoration-none text-dark"><i class="fa-solid fa-passport pe-2"></i>Passport</NuxtLink>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <NuxtLink to="/profile/attendance" class="text-decoration-none text-dark"><i class="fa-solid fa-clipboard-user pe-2"></i>Attendance</NuxtLink>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <a to="" class="text-decoration-none text-dark" @click="logout">
                                        <i class="fa-solid fa-rotate-left pe-2"></i>Logout
                                    </a>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-menu-item>

            <el-menu-item index="1" class="border-0 item-web">
                <NuxtLink to="/virtual-convention-center/facade" class="text-decoration-none fs-5 avenir-medium"><i class="fa-solid fa-house"></i>Facade</NuxtLink>
            </el-menu-item>
            <el-menu-item index="1" class="border-0 item-web">
                <NuxtLink to="/virtual-convention-center/lobby" class="text-decoration-none fs-5 avenir-medium"><i class="fa-solid fa-couch"></i>Lobby</NuxtLink>
            </el-menu-item>
            <el-menu-item index="1" class="border-0 item-web">
                <NuxtLink to="/virtual-convention-center/lobby/plenary" class="text-decoration-none fs-5 avenir-medium"> <i class="fa-solid fa-display"></i>Plenary </NuxtLink>
            </el-menu-item>
            <el-menu-item index="1" class="border-0 item-web">
                <NuxtLink to="/virtual-convention-center/lobby/workshops" class="text-decoration-none fs-5 avenir-medium"><i class="fa-solid fa-pen-ruler"></i>Workshop</NuxtLink>
                <!-- <a class="text-decoration-none fs-5 avenir-medium" type="button"
                    @click="showShouldPayPrompt(has_paid_ws_both, '/virtual-convention-center/lobby/workshops')"><i class="fa-solid fa-pen-ruler"></i>Workshop
                </a> -->
            </el-menu-item>
            <el-menu-item index="1" class="border-0 item-web">
                <NuxtLink to="/virtual-convention-center/lobby/research-hall" class="text-decoration-none fs-5 avenir-medium"><i class="fa-solid fa-book"></i>Research</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2" class="border-0 item-web">
                <NuxtLink to="/virtual-convention-center/exhibit-hall" class="text-decoration-none fs-5 avenir-medium"><i class="fa-solid fa-store"></i>Exhibits</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2" class="border-0 item-web">
                <NuxtLink to="/virtual-convention-center/lobby/symposia" class="text-decoration-none fs-5 avenir-medium"><i class="fa-solid fa-book"></i>Symposia</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2" class="border-0 item-web">
                <NuxtLink to="/virtual-convention-center/lobby/industry-lectures" class="text-decoration-none fs-5 avenir-medium"><i class="fa-solid fa-display"></i>Lectures</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2" class="border-0 item-web">
                <a class="text-decoration-none fs-5 px-3 py-2 avenir-bold user-icon" href="#">
                    <i class="fa-solid fa-address-card"></i>
                </a>
            </el-menu-item>
            <div class="custom-dropdown">
                <ul>
                    <li>
                        <NuxtLink to="/profile" class="text-decoration-none fs-5 avenir-medium"><span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-1.png" alt=""></span>Dashboard</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/virtual-convention-center" class="text-decoration-none fs-5 avenir-medium"><span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-2.png" alt=""></span>Entrance</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/profile/virtual-passport" class="text-decoration-none fs-5 avenir-medium"><span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-3.png" alt=""></span>Passport</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/profile/attendance" class="text-decoration-none fs-5 avenir-medium"><span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-4.png" alt=""></span>Attendance</NuxtLink>
                    </li>
                    <li>
                        <a to="" class="text-decoration-none fs-5 avenir-medium" @click="logout">
                            <span class="custom-icon"><img src="/assets/images/vcc/vcc-subnav-icon-5.png" alt=""></span>Logout
                        </a>
                    </li>
                </ul>
            </div>
        </el-menu>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import $ from 'jquery'
export default {
    data() {
		return {
            member_type: null,
            has_paid_ws_both: false,
            has_paid_ws_aesth: false,
            has_paid_ws_laser: false,
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
            user: 'auth/user'
        }),
    },
    methods: {
        ...mapActions({
            vxLogout: "auth/logout",
        }),
        logout() {
            this.log.convention_member_id = this.user.member.id
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
      // showShouldPayPrompt(has_paid_ws_both, url) {
      //     this.has_paid_ws_both = this.user.member.paid_fees.has_paid_ws_both
      //     this.has_paid_ws_laser = this.user.member.paid_fees.has_paid_ws_laser
      //     this.has_paid_ws_aesth = this.user.member.paid_fees.has_paid_ws_aesth
      //   if(this.has_paid_ws_laser || this.has_paid_ws_aesth) {
      //     this.$router.push(url)
      //   } else {
      //     this.$message.error('Please pay first both workshops')
      //   }
      // }
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
    mounted(){
        $(".user-icon").click(function(event) {
            event.preventDefault();
            $(".custom-dropdown").toggleClass("open-subnav");
        });
    },
}
</script>

<style lang="scss" scoped>

.custom-dropdown {
    position: fixed;
    right: -260px;
    top: 80px;
    max-width: 260px;
    width: 100%;
    padding: 20px;
    background-color: rgba(6,94,153,0.5);
    transition: all ease 0.5s;
}
.custom-dropdown.open-subnav {
    right: 105px;
}
.custom-dropdown ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
.custom-dropdown ul > li {
    margin-bottom: 10px;
}
.custom-dropdown ul > li > a {
    width: 100%;
    text-align: left !important;
    display: flex !important;
    align-items: center;
    border-radius: 30px !important;
    position: relative;
    top: 0;
    cursor: pointer;
    background: #ff7500;
    box-shadow: 0px 4px rgba(0, 0, 0, 0.3);
    color: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.1s ease;
    padding: 10px 20px;
    line-height: normal;
    letter-spacing: 1px;
}
.custom-dropdown ul > li > a:hover {
    top: -2px;
}
.custom-dropdown ul > li > a > .custom-icon {
  padding-right: 10px;
  width: 45px;
}
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
    padding: 0 10px;
}
.el-menu--horizontal > .el-menu-item:hover {
    background: none !important;
}
.main-menu {
    .el-menu-item {
        background: none;
        ::v-deep a {
            position: relative;
            top: 0;
            cursor: pointer;
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
            padding: 10px 20px;
            display: inline-block;
            line-height: normal;
            vertical-align: baseline;
            letter-spacing: 1px;
        }
        &::v-deep a svg {
            margin-right: 10px;
            top: -2px;
            position: relative;
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
    background: none;
    &.el-menu--horizontal {
        border-bottom: 0px;
        >.el-menu-item:not(.is-disabled):focus,
        >.el-menu-item:not(.is-disabled):hover,
        >.el-submenu .el-submenu__title:hover {
            background-color: transparent !important;
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
        .custom-dropdown.open-subnav {
            right: -260px;
        }
    }
}

</style>
