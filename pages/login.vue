<template>
    <section id="login-form">
        <HomeBanner />
        <Navbar :page_title="page_title"/>
        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-5 col-md-8">
                    <div class="text-center">
                        <h1 class="avenir-medium fw-bold">Login</h1>
                    </div>
                    <form class="opensans bs-1 color-636568 py-4 px-5 corner-20px" autocomplete="off">
                        <div class="form-group row">
                            <div class="col-12 mb-3">
                              <label class="text mb-2">Email Address</label>
                                <el-input type="email" v-model="$v.form.email.$model" autocomplete="new-email" />
                                <div v-if="$v.form.email.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.email.required">Required</div>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                              <label class="text mb-2">Password</label>
                                <el-input type="password" v-model="$v.form.password.$model" autocomplete="new-password" show-password />
                                <div v-if="$v.form.password.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.password.required">Required</div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="button" class="btn btn-blue py-1 px-4 corner-22px fs-5" @click="recheckInputs()">Submit</button>
                                <div class="mt-3">
                                    <a href="#" tabindex="-1" class="btn bs-0" data-toggle="modal" data-target="#password-request-reset">
                                        Forgot password?
                                    </a>
                                    <ModalsForgotPassword :abstract="abstracts"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import { required } from 'vuelidate/lib/validators/';
import { disableButton } from "~/components/Helper/functions.js"
import Profile from "~/pages/profile";

export default {
    components: {Profile},
    middleware: "isAuth",
    layout: "vcc-login",
    data() {
        return {
            background_image: '',
            page_title: this.$route.name,

            form: {
                email: null,
                password: null,
            }
        };
    },
    computed: {
        ...mapGetters({
            abstracts: 'members/getAbstract'
        }),
    },
    validations: {
        form: {
            email: {
                required,
            },
            password: {
                required,
            },
        }
    },
    created() {
        // this.$router.push('/')
        this.$v.$reset;
    },
    mounted() {
        // window.location.href = "/"
    },
    methods: {
        ...mapActions({
            vxLogin: "auth/login",
        }),
        recheckInputs() {
            this.$v.$touch();
            if(this.$v.$error) {
                this.$message.error('Please fill in required fields.');
			} else {
                this.login();
            }
        },
        login() {
            this.vxLogin(this.form)
            .then((res) => {
                this.$router.push("/profile");
            })
            .catch((err) => {
                if(err.response.status == 400 || err.response.status == 401 || err.response.status == 404) {
					this.$message.error(err.response.data.message);
				} else {
					this.$message.error('Something went wrong. Please contact the site admin.');
				}
            });
        },
    },
};
</script>

<style lang="scss" scoped>
#container-login-form {
    line-height: 18px;
    font-size: 13px;
    .header {
        letter-spacing: 0.04em;
    }
}
.bs-1 {
  box-shadow: 4px 4px 4px 4px #424242
}
.el-checkbox{
  margin-left: -20px;
}
.el-input{
  border: 1px solid #424242;
  color: #606266;
  font-size: 20px;
}
.el-select{
  border: 1px solid #424242;
  font-size: 20px;
  color: #606266;
}
.text{
  font-size: 18px;
}
</style>
