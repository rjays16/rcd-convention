<template>
    <div class="pr-5 bg-065E99 nav-container">
        <el-menu class="text-uppercase bg-065E99 main-menu"
            mode="horizontal"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item index="1" class="border-0 item-mobile">
                <el-dropdown trigger="click">
                    <span class="btn nav-username text-white bs-0">
                        <a class="text-decoration-none fs-5">
                            <img src="/assets/images/logos/logo-rcd-white.png" />
                        </a>
                        <i class="fa fa-bars"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" class="user-options">
                        <el-dropdown-item @click.native="redirectTo('/', '/')">
                            <a class="text-decoration-none text-dark" href="/">
                                <i class="fa fa-home pe-2"></i>
                                Home
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item @click.native="redirectTo('/about', '/about')">
                            <a class="text-decoration-none text-dark" href="/about">
                                <i class="fa fa-sticky-note pe-2"></i>
                                About
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item @click.native="redirectTo('/scientific-program', '/scientific-program')">
                            <a class="text-decoration-none text-dark" href="/scientific-program">
                                <i class="fa fa-flask pe-2"></i>
                                Scientific Program
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item @click.native="redirectTo('/faculty', '/faculty')">
                            <a class="text-decoration-none text-dark" href="/faculty">
                                <i class="fa fa-book pe-2"></i>
                                Faculty
                            </a>
                        </el-dropdown-item>
                        <!-- <el-dropdown-item @click.native="redirectTo('/profile', '/#abstract')">
                            <a class="text-decoration-none text-dark" v-if="isLoggedIn" href="/profile">
                                <i class="fa fa-book pe-2"></i>
                                Abstract Submission &emsp;&emsp;
                            </a>
                            <a class="text-decoration-none text-dark" v-else href="/#abstract">
                               <i class="fa fa-book pe-2"></i>
                                Abstract Submission
                            </a>
                        </el-dropdown-item> -->
                        <el-dropdown-item v-if="!isLoggedIn" @click.native="redirectTo('/registration', '/registration')">
                            <a class="mb-0 text-decoration-none text-dark" href="/registration">
                                <i class="fa fa-registered pe-2"></i>
                                Register
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item @click.native="redirectToLogin('/login')">
                            <p class="mb-0 text-dark" @click="logout" v-if="isLoggedIn">
                                <i class="fa fa-lock pe-2"></i>
                                Log Out
                            </p>
                            <a class="mb-0 text-decoration-none text-dark" href="/login" v-else>
                                <i class="fa fa-lock pe-2"></i>
                                Log In
                            </a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-menu-item>
            <el-menu-item index="1" class="border-0 item-web">
                <a class="text-decoration-none fs-5" href="/">
                    <img src="/assets/images/logos/logo-rcd-white.png" />
                </a>
            </el-menu-item>
            <el-menu-item index="1" class="border-0 item-web">
                <a class="text-decoration-none fs-5 avenir-medium" href="/">
                    Home
                </a>
            </el-menu-item>
            <el-menu-item index="1" class="border-0 item-web">
                <a class="text-decoration-none fs-5 avenir-medium" href="/about">
                    About
                </a>
            </el-menu-item>
            <el-menu-item index="2" class="border-0 item-web">
                <a class="text-decoration-none fs-5 avenir-medium" href="/scientific-program">
                    Scientific Program
                </a>
            </el-menu-item>
            <el-menu-item index="2" class="border-0 item-web">
                <a class="text-decoration-none fs-5 avenir-medium" href="/faculty">
                    Faculty
                </a>
            </el-menu-item>
            <!-- <el-menu-item index="2" class="border-0 item-web">
                <a class="text-decoration-none fs-5 avenir-medium" v-if="isLoggedIn" href="/profile">
                    Abstract Submission &emsp;&emsp;
                </a>
                <a class="text-decoration-none fs-5 avenir-medium" v-else href="/#abstract">
                    Abstract Submission
                </a>
            </el-menu-item> -->
            <el-menu-item index="2" class="border-0 item-web">
              <a class="text-decoration-none fs-5 avenir-medium" v-if="isLoggedIn" href="/profile">
                Profile
             </a>
            </el-menu-item>
            <el-menu-item  v-if="!isLoggedIn" index="2" class="border-0 item-web">
                <a class="text-decoration-none fs-5 px-3 py-2 bg-white corner-pill color-065E99 avenir-bold" href="/login">
                    Log In
                </a>
            </el-menu-item>
            <el-menu-item v-if="!isLoggedIn" index="2" class="border-0 item-web">
                <a class="text-decoration-none fs-5 px-3 py-2 bg-white corner-pill color-065E99 avenir-bold" href="/registration">
                    Register
                </a>
            </el-menu-item>
            <el-menu-item  v-else class="border-0 item-web">
                &emsp;&emsp;
                <a class="text-decoration-none fs-5 px-3 py-2 bg-white corner-pill color-065E99 avenir-bold" @click="logout">
                    &emsp; Log Out &emsp;
                </a>
                &emsp;&emsp;
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import { mapGetters, mapActions} from "vuex";

export default {
    data() {
        return {
            type: null,
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
            getUser: "auth/getUser"
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
        setUserType(){
            this.getUser()
            .then((res) => {
                this.type = res.data.member.type
                this.member = res.data.member
            })
            .catch((err) => {
                console.log(err);
            });
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
        redirectTo(route, fallback_route = null) {
            if(this.isLoggedIn) {
                console.log('isLoggedIn')
                this.$router.push(route)
            } else {
                console.log('not isLoggedIn')
                this.$router.push(fallback_route)
            }
        },
        redirectToLogin(route) {
            if(this.isLoggedIn) {
                console.log('isLoggedIn')
                this.$router.push(route)
            } else {
                console.log('not isLoggedIn')
                this.logout()
            }
        }
    },
    mounted() {
		if(this.isLoggedIn){
            this.setUserType();
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-container {
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 1275px) {
        justify-content: end;
    }
}

.main-menu {
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
        }
    }
}
.tab{
    margin-right: 400px;
}

</style>
