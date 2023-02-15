<template>
    <section id="local-pds-coa-bod-oc-delegates-registration">
        <div class="container my-4">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="text-center">
                        <h1 class="avenir-medium fw-bold"> {{ form_title }} </h1>
                    </div>
                    <form class="opensans bs-1 color-636568 py-4 px-5 corner-20px" autocomplete="off">
                        <div class="form-group row">
                            <div class="col-5 mb-3">
                                <el-input placeholder="Last Name*" v-model="$v.form.last_name.$model" @input="form.last_name = toUpper($event)"/>
                                <div v-if="$v.form.last_name.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.last_name.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.last_name.maxLength">Max of {{ $v.form.last_name.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                            <div class="col-5 mb-3">
                                <el-input placeholder="First Name*" v-model="$v.form.first_name.$model" @input="form.first_name = toUpper($event)"/>
                                <div v-if="$v.form.first_name.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.first_name.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.first_name.maxLength">Max of {{ $v.form.first_name.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                            <div class="col-2 mb-3">
                                <el-input placeholder="MI*" v-model="$v.form.middle_name.$model" @input="form.middle_name = toUpper($event)"/>
                                <div v-if="$v.form.middle_name.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.middle_name.maxLength">Max of {{ $v.form.middle_name.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <el-input placeholder="Name to appear in certificates (ALL CAPS)*" v-model="$v.form.certificate_name.$model" @input="form.certificate_name = toUpper($event)" />
                                <div v-if="$v.form.certificate_name.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.certificate_name.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.certificate_name.maxLength">Max of {{ $v.form.certificate_name.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-12 mb-3">
                                <el-input type="email" placeholder="Email Address*" v-model="$v.form.email.$model" autocomplete="new-email" />
                                <div v-if="$v.form.email.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.email.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.email.email">Must be valid</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.email.maxLength">Max of {{ $v.form.email.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-12 mb-3">
                                <el-input type="password" placeholder="Password*" v-model="$v.form.password.$model" autocomplete="new-password" show-password />
                                <div v-if="$v.form.password.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.password.required">Required</div>
            						<div class="note-small color-FF2C2C" v-if="!$v.form.password.strongPassword">Strong passwords need to have a capital letter and a small letter, a number, a special character, and be more than 8 characters long.</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.password.maxLength">Max of {{ $v.form.password.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <el-input type="password" placeholder="Confirm Password*" v-model="$v.form.confirm_password.$model" autocomplete="new-password" show-password />
                                <div v-if="$v.form.confirm_password.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.sameAsPassword">Passwords do not match</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.maxLength">Max of {{ $v.form.confirm_password.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-3">
                            <el-input placeholder="PRC Number*" v-model="$v.form.prc_license_number.$model" />
                                <div v-if="$v.form.prc_license_number.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.prc_license_number.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.prc_license_number.maxLength">Max of {{ $v.form.prc_license_number.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                            <div class="col-12 mb-3">
                                <el-input placeholder="PMA Number*" v-model="$v.form.pma_number.$model" />
                                <div v-if="$v.form.pma_number.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.pma_number.required">Required</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.pma_number.maxLength">Max of {{ $v.form.pma_number.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                        <div class="form-group row">
                            <div class="col-12">
                                <p>
                                    I hereby certify that the above information is true and correct. Under RA10173,
                                    all information collected, stored and processed by Ideahub IT Solutions Provider,
                                    Inc. shall be duty bound to observe and respect your privacy rights.
                                </p>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="mt-4 opensans">
                                <el-radio v-model="form.has_agreed"
                                    v-for="option in agreement"
                                    :key="option.id"
                                    :label="option.value"
                                    :value="option.value"
                                    class="blue-input d-block me-0 mb-3">
                                    {{ option.name }}
                                </el-radio>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="container mb-5 color-636568" v-if="form.has_agreed">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="bs-1 py-4 px-5 opensans text-center corner-20px">
                        <h2 class="header">
                            Interested to attend the Workshop?
                        </h2>
                        <div class="mt-4">
                            <el-radio v-model="form.is_interested_for_ws"
                                v-for="option in yesNo"
                                :key="option.id"
                                :label="option.value"
                                :value="option.value"
                                class="blue-input">
                                {{ option.name }}
                            </el-radio>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mb-5 color-636568" v-if="form.has_agreed && form.is_interested_for_ws">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="bs-1 bs-2 py-4 px-5 opensans text-center corner-20px">
                        <div class="mt-4 options">
                            <el-radio v-model="form.ws_to_attend"
                                v-for="option in worskhops"
                                :key="option.id"
                                :label="option.id"
                                :value="option.id"
                                class="blue-input">
                                {{ option.name }}
                            </el-radio>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container my-5">
            <div class="row text-center">
                <div class="inline-block avenir-medium">
                    <button class="btn btn-blue py-2 px-5 corner-22px fs-5 me-3" @click="$parent.goToStep(10)">
                        Back
                    </button>
                    <button class="btn btn-blue btn-submit py-2 px-5 corner-22px fs-5" @click="recheckInputs" v-if="!$v.$invalid">
                        Next
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";
import { required, maxLength, email, sameAs , requiredIf } from 'vuelidate/lib/validators/';
import { disableButton, toUpper, createFormData } from "~/components/Helper/functions.js"
export default {
    props: ['countries'],
    computed: {
        ...mapState({
            form_title: (state) => state.registration.intl_delegate_form_title
        }),
    },
	data() {
		return {
			form: {
                last_name: this.$store.state.registration.last_name,
                first_name: this.$store.state.registration.first_name,
                middle_name: this.$store.state.registration.middle_name,
                certificate_name: this.$store.state.registration.certificate_name,

                email: this.$store.state.registration.email,
                password: this.$store.state.registration.password,

                confirm_password: this.$store.state.registration.confirm_password,

                country: this.$store.state.registration.country,

                prc_license_number: this.$store.state.registration.prc_license_number,
                pma_number: this.$store.state.registration.pma_number,

                pds_number: this.$store.state.registration.pds_number,
                training_institution: this.$store.state.registration.training_institution,

				has_agreed: this.$store.state.registration.has_agreed,

                is_interested_for_ws: this.$store.state.registration.is_interested_for_ws,
                ws_to_attend: this.$store.state.registration.ws_to_attend,
                resident_certificate: null,

                payment_method: this.$store.state.options.payment_method,

                type: this.$store.state.registration.type,
                role: this.$store.state.options.registerable_role /* Convention Member */
            },

            image_types: ["image/png", "image/jpg", "image/jpeg"],
            file_max: 10000000,
            img_url: null,
            img_url_change: false,
            img_url_deleted: false,
            hasFile: false,

            allow_registration: false,
            yesNo: this.$store.state.options.yesNo,
            agreement: this.$store.state.options.agreement,
            worskhops: this.$store.state.options.worskhops,

            error_header: this.$store.state.registration.error_header,
            error_body: this.$store.state.registration.error_body,
             error_email_registered: "This account has already been registered.<br/><br/>If this is your 2nd time trying to register, you can <a href='/login'><b>login your acount</b></a> using the email & password you have previously set and try to process your payment again through the profile dashboard page."
        }
    },
    validations: {
        form: {
            first_name: {
                required,
                maxLength: maxLength(255)
            },
            last_name: {
                required,
                maxLength: maxLength(255)
            },
            middle_name: {
                maxLength: maxLength(255)
            },
            certificate_name: {
                required,
                maxLength: maxLength(255)
            },
            email: {
                required,
                email,
                maxLength: maxLength(255)
            },
            pma_number: {
                required,
                maxLength: maxLength(255)
            },
            prc_license_number: {
                required,
                maxLength: maxLength(255)
            },
            password: {
                required,
                maxLength: maxLength(150),
                strongPassword(password1) {
                    return (
                        /[a-z]/.test(password1) &&
                        /[0-9]/.test(password1) &&
                        /\W|_/.test(password1) &&
                        password1.length >= 8
                    );
                }
            },
            confirm_password: {
                required,
                maxLength: maxLength(150),
                sameAsPassword: sameAs("password")
            },
            ws_to_attend: {
                required: requiredIf(function() {
					return this.form.is_interested_for_ws
				}),
            },
            resident_certificate: {
                required: requiredIf(function() {
					return this.form.type == 6 /* require the certificate for PDS Resident Delegate type */
				}),
            },
        }
    },
    methods: {
        getRegistrationSwitch() {
			this.$store.dispatch("options/getRegistrationSwitch")
			.then(res => {
				this.allow_registration = res.data
			})
			.catch(err => {
				console.error(err)
			})
		},
		recheckInputs() { // this is used for validation
			this.$v.$touch() // this will trigger the vuelidate conditions ($touch)
            if(this.form.resident_certificate === null && this.form.type === 6) {
                this.$message.error("Please upload your resident certificate.");
            } else {
                this.$v.$touch() // this will trigger the vuelidate conditions ($touch)
                if(!this.form.has_agreed) { // check if the user has already agreed
                    this.$message.error("Please certify for agreement first.")
                } else if(this.$v.$invalid) { // check if the form input is valid
                    this.$message.error("Please fill in the required fields.")
                } else { // if the user has agreed and the form is valid, we will use the registration function
                    this.register()
                }
            }
		},
        register() {
			disableButton('.btn-submit', true)

			this.$store.dispatch("registration/registerDelegateExisting", this.form)
            .then(res => {
                console.log('Registration Response', res)
                let data = res.data

                this.$store.commit("registration/SET_FREE_FLAG", data.is_free);
                this.$store.commit("registration/SET_ORDER_ID", data.order_id);
               
                let rate_info = {
                    registration_fee: data.registration_fee,
                    workshop_fee: data.workshop_fee,
                    ideapay_fee: data.ideapay_fee,
                    total_amount: data.total_amount,
                    reg_and_ws_fee: data.reg_and_ws_fee,
                }
                    
                this.$store.commit("registration/SET_RATE_INFO", rate_info);
                this.next()
            })
            .catch(err => {
                console.error(err)
				disableButton('.btn-submit', false)
                let msg = this.error_header + `<p>`+err+`</p>` + this.error_body;
                if( err === "This account has already been registered. Please try logging in to continue with the registration process." || 
                    err === "This account has already been registered."){
                    msg = this.error_header + this.error_email_registered;
                }
                this.$confirm( msg, {
                    dangerouslyUseHTMLString: true,
                    confirmButtonText: 'Close',
                    type: 'warning',
                    showCancelButton: false
                }).then(() => {
                    window.location.href = "/registration"
                }).catch(() => {
                    window.location.href = "/registration"
                })
            });
		},
        onChangeImage(file) {
            this.validateFile(file.raw, "photo", (result) => {
                if (result == true) {
                    console.log(this.form.resident_certificate, file.raw)
                    this.form.resident_certificate = file.raw;
                    this.img_url = URL.createObjectURL(file.raw);
                    this.img_url_change = true;
                    this.hasFile = true;
                }
            });
        },
        validateFile(file, type, callback) {
            let valid_types = this.image_types;
            const is_larger_than_max = file.size / 1024 / 1024 < 50;

            if (!file) {
                callback(false);
            } else if (!is_larger_than_max) {
                this.$message.error("File is too big!");
                callback(false);
            } else if (!valid_types.includes(file.type)) {
                this.$message.error("Invalid file type");
                callback(false);
            } else {
                callback(true);
            }
        },
        toUpper(value) {
            return toUpper(value)
        },
        next() {
            this.setRegistrationInfo()
        },
        setRegistrationInfo() {
            console.log(this.form)
            this.$store.commit("registration/SET_REGISTRATION_INFO", this.form);
            this.$parent.goToStep(16)
        },
    },
    mounted() {
		this.$v.form.$reset
    }
}
</script>

<style lang="scss" scoped>
#local-pds-delegates-registration {
    line-height: 18px;
    font-size: 13px;
    .header {
        letter-spacing: 0.04em;
    }
    .el-select{
        width: 100%;
    }
    form{
        img{
            padding: 5px;
            border: 4px dashed rgba(0, 0, 0, .2);
            cursor: pointer;
        }
        .avatar-text{
            margin: auto 0;
        }
    }
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
    object-fit: contain;
    &-uploader {
        &::v-deep {
            .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                &:hover {
                    border-color: #409EFF;
                }
            }
            i {
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                line-height: 178px;
                text-align: center;
            }
        }
    }
}
</style>