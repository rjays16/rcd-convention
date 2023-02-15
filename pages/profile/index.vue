<template>
	<section id="profile">
        <!-- <HomeBanner /> -->

        <div class="banner-profile mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img class="mw-100" src="/assets/images/vcc/vcc-profile-banner.png" alt="">
                        <div class="custom-card">
                            <h1>DELEGATES DASHBOARD</h1>
                            <div class="custom-card-content">
                                <p>Welcome to the 25th Regional Conference of Dermatology! This is your official virtual dashboard for this virtual convention portal with the following details based on your registration.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <ProfileNav /> -->

        <div class="container-md mt-4 mb-5" v-loading="!is_loaded">
            <div class="row" :class="!form.is_sponsor_exhibitor ? '' : 'justify-content-center'">
                <div :class="!form.is_sponsor_exhibitor ? 'col-lg-5' : 'col-lg-6'">
                    <el-card class="box-card profile-card member-info mt-2 opensans">
                        <div class="sec-personal-info">
                            <p class="mb-1 fw-bold">First Name</p>
                            <el-input class="mb-3 el-uppercase" v-model="$v.form.first_name.$model" @input="form.first_name = toUpper($event)" placeholder="First Name" />
                            <div v-if="$v.form.first_name.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.first_name.required">Required Field</div>
                                <div class="note-small color-FF2C2C" v-if="!$v.form.first_name.maxLength">Max of {{ $v.form.first_name.$params.maxLength.max }} characters.</div>
                            </div>

                            <p class="mb-1 fw-bold">Middle Initial</p>
                            <el-input class="mb-3 el-uppercase" v-model="$v.form.middle_name.$model" @input="form.middle_name = toUpper($event)" placeholder="Middle Name" />
                            <div v-if="$v.form.middle_name.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.middle_name.maxLength">Max of {{ $v.form.middle_name.$params.maxLength.max }} characters.</div>
                            </div>

                            <p class="mb-1 fw-bold">Last Name</p>
                            <el-input class="mb-3 el-uppercase" v-model="$v.form.last_name.$model" @input="form.last_name = toUpper($event)" placeholder="Last Name" />
                            <div v-if="$v.form.last_name.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.last_name.required">Required Field</div>
                                <div class="note-small color-FF2C2C" v-if="!$v.form.last_name.maxLength">Max of {{ $v.form.last_name.$params.maxLength.max }} characters.</div>
                            </div>

                            <p class="mb-1 fw-bold">Name to appear in certificates(ALL CAPS)</p>
                            <el-input class="mb-3 el-uppercase" v-model="$v.form.certificate_name.$model" @input="form.certificate_name = toUpper($event)" placeholder="Name to appear in certificates" />
                            <div v-if="$v.form.certificate_name.$dirty">
                                <div class="note-small color-FF2C2C" v-if="!$v.form.certificate_name.required">Required Field</div>
                                <div class="note-small color-FF2C2C" v-if="!$v.form.certificate_name.maxLength">Max of {{ $v.form.certificate_name.$params.maxLength.max }} characters.</div>
                            </div>

                            <a href="#update-password" class="mb-1 fw-bold" data-toggle="modal" data-target="#update-password">Click here to Update your Password</a>
                        </div>
                        <el-collapse accordion class="mt-3">
                            <el-collapse-item>
                                <template slot="title">
                                    <div class="accordion-title">
                                        <p class="fw-bold">Personal Information</p>
                                        <i class="el-icon-info" aria-hidden="true"></i>
                                    </div>
                                </template>

                                <div class="sec-personal-info">
                                    <p class="mb-1 fw-bold">Email</p>
                                    <el-input class="mb-3" v-model="form.email" placeholder="Email" />

                                    <div v-if="!form.is_sponsor_exhibitor">
                                        <p class="mb-1 fw-bold">PRC Number</p>
                                        <el-input class="mb-3" v-model="form.prc_license_number" placeholder="PRC Number" disabled/>

                                        <p class="mb-1 fw-bold">PMA Number</p>
                                        <el-input class="mb-3" v-model="form.pma_number" placeholder="PMA Number" disabled/>

                                        <p class="mb-1 fw-bold">Country</p>
                                        <span v-show="hide.includes(form.type)">
                                            <country-select v-model="$v.form.country.$model" :country="$v.form.country.$model"
                                                className="country-select form-control" :countryName="true" placeholder="Country" />
                                            <div v-if="$v.form.country.$dirty">
                                                <div class="note-small color-FF2C2C" v-if="!$v.form.country.required">Required Field</div>
                                            </div>
                                        </span>
                                        <span v-show="!hide.includes(form.type)">
                                            <country-select v-model="$v.form.country.$model" :country="$v.form.country.$model" disabled
                                                className="country-select form-control" :countryName="true" placeholder="Country" />
                                        </span>
                                    </div>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                        <div class="sec-profile-register mt-4 text-center" v-show="form.type===1?false:true">
                            <button @click="recheckInputs()" class="btn btn-blue btn-update-profile px-4 avenir-medium corner-pill fs-6">
                                Update
                            </button>
                        </div>
                    </el-card>
                </div>
                <div class="col-lg-7" v-if="!form.is_sponsor_exhibitor">
                    <div class="custom-card box-card profile-card w-100 mt-2 mb-4">
                        <div class="text-center">
                            <h3>Registration</h3>
                            <div class="row">
                                <b-table
                                    :items="registration"
                                    :fields="reg_fields"
                                    :responsive="true"
                                    class=""
                                    :show-empty="registration.length === 0"
                                    striped>
                                    <template #empty>
                                        <div class="text-center">
                                            No order found.
                                        </div>
                                    </template>
                                    <template v-slot:cell(description)="row">
                                        {{ row.item.Registration_Type }}
                                    </template>
                                    <template v-slot:cell(amount)="row">
                                        ₱ {{ formatDecimal(row.item.Order_Amount ,2) }}
                                    </template>
                                    <template v-slot:cell(conv_fee)="row">
                                        ₱ {{ formatDecimal(row.item.Convenience_Fee,2) }}
                                    </template>
                                    <template v-slot:cell(total_amount)="row">
                                        ₱ {{ formatDecimal( parseFloat(row.item.Order_Amount) + parseFloat(row.item.Convenience_Fee),2) }}
                                    </template>
                                    <template v-slot:cell(action_status)="row">
                                        <div class="text-center">
                                            <div v-if="row.item.Is_Applicable && row.item.Order_Status === 'Pending' && row.item.PayButton_Status == 'AVAILABLE'">
                                                <button class="btn btn-blue corner-pill mt-2" @click="payOrder(null)">
                                                    PAY BALANCE
                                                </button>
                                            </div>
                                            <div v-else>
                                                {{ row.item.PayButton_Status }}
                                            </div>
                                        </div>
                                    </template>
                                </b-table>
                            </div>
                        </div>
                    </div>
                    <div class="custom-card box-card profile-card w-100 mt-4 mb-5">
                        <div class="" v-if="form.type !== 7">
                            <h3>Workshop To Attend</h3>
                            <div class="row">
                                <b-table
                                    :items="workshops"
                                    :fields="ws_fields"
                                    :responsive="true"
                                    class=""
                                    :show-empty="workshops.length === 0"
                                    :busy="isBusy"
                                    striped>
                                     <template #empty>
                                        <div class="text-center">
                                            No order found.
                                        </div>
                                    </template>
                                    <template v-slot:cell(description)="row">
                                        <span v-if="row.item.workshop_type !==3">
                                            <a href="#program" data-toggle="modal" @click="setWorkshop(row.item.workshop_type)" data-target="#program">{{ row.item.Workshop_Name }}</a>
                                        </span>
                                        <span v-else>Both Workshops</span>
                                    </template>
                                    <template v-slot:cell(amount)="row">
                                        ₱ {{ formatDecimal(row.item.Order_Amount,2) }}
                                    </template>
                                    <template v-slot:cell(conv_fee)="row">
                                        ₱ {{ formatDecimal( row.item.Convenience_Fee,2 ) }}
                                    </template>
                                    <template v-slot:cell(total_amount)="row">
                                        ₱ {{ formatDecimal(parseFloat(row.item.Order_Amount) + parseFloat(row.item.Convenience_Fee),2) }}
                                    </template>
                                    <template v-slot:cell(action_status)="row">
                                        <div class="text-center" :disabled="registration[0].PayButton_Status !== 'PAID'">
                                            <div v-if="row.item.Is_Applicable && row.item.Order_Status === 'Pending' && row.item.PayButton_Status == 'AVAILABLE'">
                                                <button class="btn btn-blue corner-pill mt-2"
                                                    :disabled="registration[0].PayButton_Status !== 'PAID'"
                                                    @click="payOrder(row.item.workshop_type)">
                                                    Pay Balance
                                                </button>
                                                <button class="btn btn-danger corner-pill mt-2"
                                                    :disabled="registration[0].PayButton_Status !== 'PAID'"
                                                    @click="cancelWorkshop(row.item.workshop_type)">
                                                    <i class="fa fa-close red" :disabled = "registration[0].PayButton_Status !== 'PAID'"></i>
                                                </button>
                                            </div>
                                            <div v-else>
                                                {{ row.item.PayButton_Status }}
                                            </div>
                                        </div>
                                    </template>
                                </b-table>
                            </div>
                        </div>
                    </div>
                    <el-card class="box-card profile-card w-100 mt-2 mb-5">
                        <div class="text-center mt-2 sec-fees-info">
                            <h3 class="avenir-bold">Your Abstracts</h3>
                            <p class="mb-0">
                                You can only view submitted abstracts where you are the submitting author. For the complete guidelines on abstracts submission, click
                                <a href="/abstract-guidelines" target="_blank" class="text-dark">here</a>.
                            </p>
                            <div class="row mb-2">
                                <b-table
                                    hover
                                    :items="abstracts"
                                    :fields="abstFields"
                                    :per-page="abstPerPage"
                                    :current-page="abstCurrentPage"
                                    :responsive="true"
                                    :busy="abstIsBusy"
                                    class="m-2"
                                    striped
                                    :show-empty="abstRows == 0">
                                <template v-slot:cell(created_at)="row">
                                    {{ new Date(row.item.created_at) | moment("MMMM D, YYYY") }}
                                </template>
                                <template v-slot:cell(actions)="row">
                                    <div class="actions same-size text-center">
                                        <a class="dmsans-bold fw-bold link-dark clickable" @click="openAbstractModal(row.item.id)">
                                            VIEW
                                        </a>
                                    </div>
                                </template>
                                <template slot="table-busy">
                                    <div class="text-center text-success my-2">
                                        <b-spinner class="align-middle"></b-spinner>
                                        <strong>Loading...</strong>
                                    </div>
                                </template>
                                    <template #empty>
                                        <div class="text-center">
                                            No abstract submissions yet.
                                        </div>
                                    </template>
                                </b-table>
                                <div class="w-100 m-2" v-if="abstRows > 5">
                                    <b-pagination
                                        v-model="abstCurrentPage"
                                        :total-rows="abstRows"
                                        :per-page="abstPerPage"
                                        class="float-right blue-pagination"
                                        prev-text="Previous"
                                        next-text="Next"
                                        first-number
                                        last-number
                                    ></b-pagination>
                                </div>
                            </div>
                            <div class="row text-center" v-if="is_loaded">
                                <div v-if="form.abstract_switch === true">
                                    <button type="button" class="btn btn-blue w-25 py-2 corner-22px opensans w-50 btn-submit-abstract"
                                        @click="form.can_submit_abstract || form.payment_status === 2 ? $router.push('/abstract') : SubmitError()"
                                        :disabled="form.can_submit_abstract || form.payment_status === 2 ? false : true">
                                        Submit an Abstract
                                    </button>
                                </div>
                              <div v-else>
                                <button type="button" class="btn gray w-25 py-2 corner-22px opensans w-50 btn-submit-abstract disabled">
                                  Submit an Abstract
                                </button>
                              </div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>
            <ModalsAbstractPreview ref="AbstractPreviewModal"/>
            <ModalsWorkshopProgram :ws_to_attend="form.ws_to_attend"/>
            <ModalsWorkshopCancelled ref="CancelWsModal" :workshop_type="cancel_workshop_type" :user_id="form.id"/>
            <ModalsWorkshopTransactionResult ref="TransactionResultModal"/>
            <ModalsUpdatePassword/>
        </div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators/";
import { formatDecimal, disableButton, toUpper } from "~/components/Helper/functions.js";
import UpdatePassword from "../../components/Modals/UpdatePassword.vue";

export default {
    layout: "vcc-profile",
    middleware: "auth",
    data() {
        return {
            is_loaded: false,
            list_of_authors: [],
            form: {
                abstract_switch: false,
                id: null,
                member_id: null,
                first_name: null,
                middle_name: null,
                last_name: null,
                certificate_name: null,
                full_name: null,
                payment_status: 1,
                pma_number: null,
                pds_number: null,
                prc_license_number: null,
                resident_certificate: null,
                training_institution: null,
                ws_to_attend: null,
                type: null,
                is_interested_for_ws: false,
                is_free: false,
                is_early_bird: false,
                can_submit_abstract: false,
                is_sponsor_exhibitor: false,
            },
            // Start of Orders (Fees) table vars
            reg_fields: [
                { key: "description", label: "Description", tdClass: "align-middle" },
                { key: "amount", label: "Order Amount", tdClass: "align-middle" },
                { key: "conv_fee", label: "Convenience Fee", tdClass: "align-middle" },
                { key: "total_amount", label: "Total Payment", tdClass: "align-middle" },
                { key: "action_status", label: "Status", thClass: "text-center", tdClass: "align-middle" },
            ],
            ws_fields: [
                { key: "description", label: "Description", tdClass: "align-middle" },
                { key: "amount", label: "Amount", tdClass: "align-middle" },
                { key: "conv_fee", label: "Convenience Fee", tdClass: "align-middle" },
                { key: "total_amount", label: "Total Payment", tdClass: "align-middle" },
                { key: "action_status", label: "Status", thClass: "text-center", tdClass: "align-middle" },
            ],
            currentPage: 1,
            perPage: 10,
            orderCriteria: "",
            orderFilterTimeout: null,
            isBusy: true,
            // End of Orders (Fees) table vars
            // Start of Abstract table vars
            abstFields: [
                { key: "title", label: "Title", tdClass: "align-middle" },
                { key: "created_at", label: "Date Submitted", tdClass: "align-middle" },
                { key: "actions", label: "Action", thClass: "text-center", tdClass: "align-middle" },
            ],
            abstCurrentPage: 1,
            abstPerPage: 10,
            abstIsBusy: false,
            // End of Abstract table vars
            img_url: "",
            img_url_change: false,
            img_url_deleted: false,
            image_types: ["image/png", "image/jpg", "image/jpeg"],
            file_max: 10000000,
            hide: [1, 2, 3, 4, 9],
            vips: [1, 10],
            order: [],
            registration: [],
            workshops: [],
            cancel_workshop_type: null,
        };
    },
    validations: {
        form: {
            first_name: {
                required,
                maxLength: maxLength(255)
            },
            middle_name: {
                maxLength: maxLength(255)
            },
            last_name: {
                required,
                maxLength: maxLength(255)
            },
            certificate_name: {
                required,
                maxLength: maxLength(255)
            },
            country: {
                required
            },
        },
    },
    computed: {
        ...mapGetters({
            abstracts: "members/getAbstract",
        }),
        abstRows() {
            return this.abstracts.length;
        },
    },
    methods: {
        formatDecimal(value, places) {
            return formatDecimal(value, places);
        },
        getUser() {
            this.$store.dispatch("auth/getUser")
                .then(res => {
                let user_data = res.data;
                let member_data = res.data.member;
                this.form.id = user_data.id;
                this.form.email = user_data.email;
                this.form.full_name = user_data.full_name;
                this.form.first_name = user_data.first_name;
                this.form.last_name = user_data.last_name;
                this.form.middle_name = user_data.middle_name;
                this.form.certificate_name = user_data.certificate_name;
                this.form.country = user_data.country;
                this.form.status = user_data.status;
                this.form.member_id = member_data.id;
                this.form.type = member_data.type;
                this.form.prc_license_number = member_data.prc_license_number;
                this.form.pds_number = member_data.pds_number;
                this.form.pma_number = member_data.pma_number;
                this.form.is_interested_for_ws = member_data.is_interested_for_ws;
                this.form.ws_to_attend = member_data.ws_to_attend;
                this.form.can_submit_abstract = member_data.can_submit_abstract;
                this.form.is_sponsor_exhibitor = member_data.is_sponsor_exhibitor;
                this.getAbstracts();
                this.getOrderFees();
                this.abstractSwitch();
            })
                .catch(err => {
                this.$message.error(err);
            });
        },
        payOrder(ws_type) {
            this.$store.dispatch("members/create", { ws_to_attend: ws_type, is_interested_for_ws: ws_type !== null ? true : false, user_id: this.form.id })
                .then(res => {
                let data = res.data;
                console.log("Data: ", data);
                console.log("Payment URL:", data.payment_url);
                if (!data.is_free) {
                    window.location.replace(data.payment_url);
                }
                else {
                    let self = this;
                    self.isBusy = true;
                    setTimeout(() => {
                        self.getOrderFees();
                    }, 3000);
                }
            })
                .catch(err => {
                console.error(err);
                this.$message.error(err);
            });
        },
        recheckInputs() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.$message.error("Please fill in the required fields.");
            }
            else {
                this.updateProfile();
            }
        },
        SubmitError() {
            this.$message.error("Sorry, but your account is not yet eligible to submit for an abstract. Please complete your payment to update your registration status.");
        },
        updateProfile() {
            disableButton(".btn-update-profile", true);
            this.$store.dispatch("members/update", this.form)
                .then(res => {
                this.getUser();
                this.$message.success(res.data.message);
                // setTimeout(() => {
                //     window.location.reload()
                // }, 1000);
            })
                .catch(err => {
                this.$message.error(err);
                disableButton(".btn-update-profile", false);
            });
        },
        getOrderFees() {
            this.setWorkshopToBothIfVIP();
            this.$store.dispatch("members/getOrderFees", this.form.id)
                .then(res => {
                if (this.registration.length == 0) {
                    this.registration.push(res.data[0]);
                }
                this.workshops = res.data;
                this.workshops.shift();
                this.isBusy = false;
                this.is_loaded = true;
                console.log("Loaded: ", this.is_loaded);
                if (this.$store.state.members.is_from_ideapay_page === true) {
                    $("#transactionResult").modal("show");
                }
            })
                .catch(err => {
                console.error(err);
                this.isBusy = false;
                this.is_loaded = true;
                console.log("Loaded: ", this.is_loaded);
            });
        },
        getAbstracts() {
            this.$store.dispatch("members/getAbstracts", this.form.member_id)
                .catch(err => {
                console.error(err);
            });
        },
        getAbstract() {
            this.$store.dispatch("members/getAbstract", this.form.member_id)
                .then(res => {
                this.list_of_authors = res.data.authors;
            })
                .catch(err => {
                console.error(err);
            });
        },
        setWorkshopToBothIfVIP() {
            if (this.form.type === 1 || this.form.type === 10) {
                if (this.form.ws_to_attend === null || this.form.ws_to_attend !== 3) {
                    this.form.new_ws_to_attend = 3;
                }
            }
        },
        cancelWorkshop(workshop_type) {
            this.cancel_workshop_type = workshop_type;
            $("#cancelledWorkshop").modal("show");
            console.log("here");
            this.getOrderFees();
        },
        disableButtonsForSpeakers() {
            if (this.form.type === 1) {
                disableButton(".btn-update-profile", true);
                disableButton(".btn-submit-abstract", true);
                disableButton(".btn-submit-abstract", true);
            }
        },
        toUpper(value) {
            return toUpper(value);
        },
        getSponsors() {
            this.$store.dispatch("sponsors/getSponsors")
                .then(res => {
                this.sponsors = res.data;
            })
                .catch(err => {
                console.error(err);
            });
        },
        openAbstractModal(abstract_id) {
            this.$refs.AbstractPreviewModal.openModal(abstract_id, true);
        },
        setWorkshop(ws_type) {
            this.form.ws_to_attend = ws_type;
        },
      abstractSwitch(){
          this.$store.dispatch("abstracts/getAbstractSwitch")
            .then(res => {
              this.form.abstract_switch = res.data
            })
      }
    },
    mounted() {
        this.getUser();
    },
    components: { UpdatePassword }
};
</script>

<style lang="scss" scoped>

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
.table-responsive table {
    color: #065E99;
}
.table-responsive {
    ::v-deep table {
        color: #065E99;
    }
    &::v-deep table th {
        text-transform: uppercase;
        white-space: nowrap;
    }
}

#profile {
    .banner-profile {
        background: url('/assets/images/vcc/profile-banner-bg-1.png') no-repeat center bottom #ffffff;
        background-size: cover;
        text-align: center;
        padding: 70px 0 30px;
    }
	.member-info {
		.fw-bold {
			font-size: 13px;
			margin-bottom: 5px;
		}
	}
	.profile-card {
		h1 {
			font-size: 24px;
			text-align: center;
		}
		.el-input.is-disabled .el-input__inner,
		.el-textarea.is-disabled .el-textarea__inner {
			background-color: #fff;
			border-color: #c0c4cc;
			color: #606266;
		}
	}
	.accordion-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding-right: 1em;
		align-items: center;
		p {
			margin:0px;
		}
		&:hover {
			color: #409eff;
		}
	}
	.passport-card {
		margin-bottom: 200px;
		.sponsor {
			min-height: 250px;
			.icon {
				img {
					width: 100%;
					height: 100px;
					object-fit: contain;
				}
				.fa-person-booth {
					font-size: 100px;
				}
			}
		}
	}

	@media only screen and (max-width: 475px) {
		.el-select-dropdown {
			&.el-popper {
				max-width: 320px;
				.el-select-dropdown__item {
					span {
						white-space: normal;
					}
				}
			}
		}
	}
}
.gray {
  background-color: gray;
}
</style>
