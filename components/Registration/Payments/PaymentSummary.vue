<template>
    <section id="payments" >
        <div class="container my-4">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12">
                    <div class="text-center">
                        <h1 class="avenir-medium fw-bold">Please review your registration details</h1>
                    </div>
                    <div class="container py-4 mobile-table">
                        <table class="table table-bordered avenir-regular">
                            <thead>
                            <tr>
                                <th class="avenir-medium fw-bold gray">Registration Type</th>
                                <th class="avenir-medium fw-bold gray">{{ type_name }}</th>
                            </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td class="textend">Last Name</td>
                                    <td>{{ last_name }}</td>
                                </tr>
                                <tr>
                                    <td class="textend">First Name</td>
                                    <td>{{ first_name }}</td>
                                </tr>
                                <tr>
                                    <td class="textend">Middle Initial</td>
                                    <td>{{ middle_name }}</td>
                                </tr>
                                <tr>
                                    <td class="textend">Name to Appear in Certificate</td>
                                    <td>{{ certificate_name }}</td>
                                </tr>
                                <tr>
                                    <td class="textend">Email Address</td>
                                    <td>{{ email }}</td>
                                </tr>
                                <tr>
                                    <td class="textend">Country</td>
                                    <td>{{ country }}</td>
                                </tr>
                                <tr v-show="!nonLocalTypes.includes(type)">
                                    <td class="textend">PRC Number <span v-show="type===1">(for PH delegates)</span></td>
                                    <td>{{ prc_license_number }}</td>
                                </tr>
                                <tr v-show="!nonLocalTypes.includes(type)">
                                    <td class="textend">PMA Number <span v-show="type===1">(for PH delegates)</span></td>
                                    <td>{{ pma_number }}</td>
                                </tr>
                                <span v-show="!type == 7">
                                    <tr>
                                        <td class="textend">Interested to attend in workshop?</td>
                                        <td>{{ is_interested_for_ws ? "Yes" : "No" }}</td>
                                    </tr>
                                    <tr>
                                        <td class="textend">Workshop/s to Attend<br>
                                            <small>(Aesthetic, Laser or both)</small></td>
                                        <td>
                                            {{
                                                is_interested_for_ws && ws_to_attend !== null ?
                                                    ws_to_attend === 1 ? "Aesthetic" :
                                                        ws_to_attend === 2 ? "Laser" :
                                                            ws_to_attend === 3 ? "Both" :
                                                                "None" : "None"
                                            }}
                                        </td>
                                    </tr>
                                </span>
                                <tr>
                                    <td class="textend"> {{ type !== 7 ? "Registration and Workshop Fees" : "Registration Fee" }}</td>
                                    <td>₱ {{ reg_and_ws_fee }}</td>
                                </tr>
                                <tr>
                                    <td class="textend">Convenience Fee to Pay</td>
                                    <td>₱ {{ ideapay_fee }}</td>
                                </tr>
                                <tr>
                                    <td class="textend">Total Amount to Pay</td>
                                    <td>₱ {{ total_amount }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                        <p class="avenir-regular fw-bold">Payment Terms and Conditions</p>
                        <p class="mb-6"> By clicking on “Register Now” below, I acknowledged that I have reviewed
                            my registration details and that everything is true and correct to the best of
                            my knowledge. I also express full agreement to the Payment Terms and Conditions
                            enumerated <a href="https://www.ideapay.ph/terms-and-conditions/" target="_blank">here</a>.
                        </p>

                      <p class="avenir-regular fw-bold">CANCELLATION POLICY:</p>
                      <p> All request for cancellations must be submitted in writing (by email) to registration@rcd2022manila.com.ph according
                        to the following policy:</p>
                      <ol>
                        <li>Cancellations received in writing by 15 July 2022, at 11:59PM are refunded with the full amount.</li>
                        <li>Cancellations received in writing between July 16 to July 31, 2022 are entitled to 50% refund.</li>
                        <li>Cancellations received after July 31, 2022 at 11:59PM (Philippine time) – no refund shall be due;</li>
                        <li>Requests submitted after this period shall not be considered. Refunds, if due,
                            will be made on the same credit card used for the payment of the services.
                            All bank charges will be charged to the delegate. All refunds will be made within
                            three (3) months after the end of the event; and, </li>
                        <li>Any participant initially registered as an individual, who then received sponsorship by
                            an Industry Company, shall not entitled to a refund.
                        </li>
                      </ol>
                      <el-checkbox v-model="agreement">
                        By proceeding with my registration, I hereby agree on these terms and conditions.
                      </el-checkbox>
<!--                      <div class="row">-->
<!--                        <div class="p-2 text-cobalt border-solid">-->
<!--                          <div class="container">-->
<!--                            <div class="row">-->
<!--                              <small class="avenir-regular">-->
<!--                                If you have a Mac device,<a href="https://support.apple.com/en-ph/guide/safari/sfri40696/15.1/mac/12.0" target="_blank">-->
<!--                                please follow this guide</a> on Safari to enable or allow pop-ups on your Safari web browser.</small>-->
<!--                              <small class="avenir-regular text-center mb-3">-->
<!--                                <a href="#IOS">Here's how to do it on iOS Devices (iPhone)</a></small>-->
<!--                              <small class="avenir-regular text-center mb-3">-->
<!--                                There will be another window that will be opened to complete your registration via our IdeaPay payment.-->
<!--                              </small>-->
<!--                              <p class="avenir-regular text-center">-->
<!--                              <small class="avenir-regular text-center">-->
<!--                                Alternatively, you may watch this quick video if you wist to register using your Safari web browser.</small>-->
<!--                              <p class="avenir-regular text-center">-->
<!--                                <a href="#method1" data-toggle="modal" data-target="#method1">Mac OS Method 1</a>-->
<!--                                <span class="color-gray">|</span>-->
<!--                                <a href="#method2" data-toggle="modal" data-target="#method2">Mac OS Method 2</a></p>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
                </div>
                    <div class="contents d-flex flex-column justify-content-center py-2" :data-free="is_free">
                        <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center avenir-medium">
                            <button type="button" class="btn btn-blue w-25 py-2 corner-22px mb-4" id="hide" @click="$parent.goToStep(1)">
                                Back
                            </button>
                            <button type="button" class="btn btn-blue btn-proceed w-25 py-2 corner-22px" @click="is_free ? createFreePayment() : proceedToIdeapay()">
                                Register Now!
                            </button>
                            <!-- <span class="note mt-2">A new tab or window will appear after you click this button, please allow pop-up temporarily for the payment process.</span> -->
                            <span class="note mt-2">You will be redirected to ideapay page to proccess payment and will not be able to preview this page again.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <ModalsMethod1/>
      <ModalsMethod2/>
    </section>
</template>

<script>
import { formatDecimal, disableButton } from "~/components/Helper/functions.js";
import { mapState } from "vuex";
export default {
    data() {
		return {
            agreement: false,
            nonLocalTypes: [1, 2, 3, 4, 9]
        }
    },
    computed: {
        ...mapState({
            first_name: (state) => state.registration.first_name,
            last_name: (state) => state.registration.last_name,
            middle_name: (state) => state.registration.middle_name,
            certificate_name: (state) => state.registration.certificate_name,

            email: (state) => state.registration.email,
            password: (state) => state.registration.password,

            country: (state) => state.registration.country,
            role: (state) => state.registration.role,

            pma_number: (state) => state.registration.pma_number,
            prc_license_number: (state) => state.registration.prc_license_number,
            prc_expiration_date: (state) => state.registration.prc_expiration_date,
            pds_number: (state) => state.registration.pds_number,

            resident_certificate: (state) => state.registration.resident_certificate,

            type: (state) => state.registration.type,
            type_name:  (state) => state.registration.type_name,
            intl_delegate_form_title: (state) => state.intl_delegate_form_title,
            is_interested_for_ws: (state) => state.registration.is_interested_for_ws,
            ws_to_attend: (state) => state.registration.ws_to_attend,

            total_amount: (state) => state.registration.total_amount,
            workshop_fee: (state) => state.registration.workshop_fee,
            registration_fee: (state) => state.registration.registration_fee,
            ideapay_fee: (state) => state.registration.ideapay_fee,
            reg_and_ws_fee: (state) => state.registration.reg_and_ws_fee,

            is_free: (state) => state.registration.is_free,
            order_id: (state) => state.registration.order_id,
        }),
    },
    methods: {
        formatDecimal(value, places) {
            return formatDecimal(value, places);
        },
        proceedToThankYouPage() {
            this.$router.push('/registration/thank-you')
        },
        proceedToErrorPage() {
            this.$router.push('/registration/error')
        },
        createFreePayment() {
            let data = {
                order_id: this.order_id
            }
            if(this.agreement === false){
              this.$message.error("Please check the agrement first")
            } else {
              console.log('payload', data)
              disableButton('.btn-proceed', true)
              this.$store.dispatch("registration/createFreePayment", data)
                .then(res => {
                  this.proceedToThankYouPage()
                })
                .catch(err => {
                  console.error(err)
                  this.$message.error(err)
                  disableButton('.btn-proceed', false)
                });
            }
        },
        proceedToIdeapay() {
          if (this.agreement === false) {
            this.$message.error("Please check the agrement first")
          } else {
            if(this.order_id && !this.is_free) {
                let data = {
                  order_id: this.order_id
                }
                this.$store.dispatch("registration/createIdeapay", data)
                .then(res => {
                    console.log(res)
                    console.log(res.data.payment_url)
                    // window.open(res.data.payment_url)
                    window.location.replace(res.data.payment_url)
                  })
                  .catch(err => {
                    console.error(err)
                    this.$message.error(err)
                  });
              } else {
                this.$message.error("Unable to proceed with your registration. Please contact the site admin")
              }
            }
		},
        bindPusher() {
            console.log("Binding Pusher...");
            var order_status = null;
            var order_id = null;
            var self = this;
            var channel = pusher.subscribe(process.env.PUSHER_CHANNEL);
            channel.bind("payment-redirect", function(data) {
                console.log("Order ID:", self.order_id)
                console.log("Payment Redirect Data", data)
                order_status = data.order.status
                order_id = data.order.id
                if(order_id === self.order_id && order_status == 2) {
                    self.proceedToThankYouPage()
                } else {
                    self.proceedToErrorPage()
                }
            });
        }
    },
    mounted() {
        console.log('is_free', this.is_free)
        console.log('order_id', this.order_id)

        // this.bindPusher()
    }
}
</script>

<style lang="scss" scoped>
    #payments{
        h1{
            padding: 1em;
            color: #0776BC;
        }
        .gray{
            background: rgba(0, 0, 0, 0.05);
        }
    }
    .el-menu--horizontal>.el-menu-item a {
        display: none;
    }
    #hide{
        display: none;
    }
    .note{
        font-size: 15px;
        text-align: center;
        color:#ccc;
        font-weight: bold;
    }
    @media only screen and (max-width: 767px) {
        #payments{
            font-size: 14px;
            h1{
                font-size: 20px;
                padding: 0;
            }

            .mobile-table{
                padding: 0;
            }
            .table-bordered{
                border: solid 0px transparent;
                font-size: 12px;
                line-height: 12px;
                font-weight: bold;
            }
            .textend{
                text-align: right !important;
            }
            .terms{
                padding: 0 !important;

                p{
                    font-size: 18px;
                    text-align: center;
                }
            }
            button{
                width: 50% !important;
                font-size: 1.2rem;
            }
        }
    }
    .text-cobalt{
      border: 1px solid black;
    }
    .text-cobalt small {
      color: black;
    }
    .text-cobalt p{
      color: black;
    }
    .color-gray{
      color: #808080;
    }
    ol{
      list-style-type: lower-alpha;
    }
</style>
