<template>
    <div class="modal fade" id="password-request-reset" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <a class="close corner-circle link-close clickable" data-dismiss="modal">
                    <i class="fa-solid fa-circle-xmark"></i>
                </a>
                <div class="head py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <h4 class="text-uppercase text-center mb-3 col-12 text-dark">Reset Password Request</h4>
                                <form @submit.prevent>
                                    <div class="row">
                                        <div class="form-group col-lg-12 text-left">
                                            <label class="dmsans-regular">Email Address</label>
                                            <el-input v-model="$v.form.email.$model" placeholder="Email Address" class="pr-2" />
                                            <div v-if="$v.form.email.$dirty">
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.email.required">Required Field</div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div class="text-center mt-3">
                                    <button type="button" class="btn btn-blue btn-send mt-2 corner-pill opensans" @click="recheckInputs">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { disableButton } from "~/components/Helper/functions.js"
import $ from 'jquery';
export default {
    data() {
        return {
            form: {
                email: null,
            }
        };
    },
    validations: {
        form: {
            email: {
                required
            }
        },
    },
    methods: {
        recheckInputs() {
            this.$v.$touch()
            if(this.$v.$invalid) {
                this.$message.error("Please fill in the required fields.")
            } else {
                this.sendRequest()
            }
        },
        sendRequest() {
            disableButton('.btn-send', true)
            this.$store.dispatch("auth/sendPasswordResetRequest", this.form)
            .then((res) => {
                $('#password-request-reset').modal('hide');
                this.$message.success("Successfully sent request. Please check your email.")
                disableButton('.btn-send', false)
            })
            .catch((err) => {
                this.$message.error(err)
                disableButton('.btn-send', false)
            });
        }
    },
}
</script>
<style lang="scss" class="scoped">
    #password-request-reset a{
        width: 2em;
        padding: 5px;
        align-self: end;
        font-size: 1.2em !important;
    }
</style>