<template>
    <div class="mh-75">
        <div class="registration-enabled" v-if="can_register">
            <RegistrationTypes v-if="current_step === 1"/>
            <RegistrationSpeakerForm v-if="current_step === 2" :countries="countries" :specific_countries="specific_countries"/>

            <RegistrationDelegatesMainType v-if="current_step === 3"/>

            <RegistrationDelegatesInternationalTypes v-if="current_step === 4"/>
            <RegistrationDelegatesInternationalLADSTypes v-if="current_step === 5" />
            <RegistrationDelegatesInternationalLADSForm v-if="current_step === 6" :countries="countries" :specific_countries="specific_countries" />
            <RegistrationDelegatesInternationalNONLADSForm v-if="current_step === 7" :customed_countries="customed_countries" />
            <RegistrationDelegatesInternationalResidentsForm v-if="current_step === 8" :specific_countries="specific_countries" />

            <RegistrationDelegatesLocalTypes v-if="current_step === 9"/>
            <RegistrationDelegatesLocalPDSTypes v-if="current_step === 10"/>
            <RegistrationDelegatesLocalPDSCOABODOCForm v-if="current_step === 11" :countries="countries" />
            <RegistrationDelegatesLocalPDSForm v-if="current_step === 12" :countries="countries" />
            <RegistrationDelegatesLocalNonPDSTypes v-if="current_step === 13" />
            <RegistrationDelegatesLocalNonPDSMDForm v-if="current_step === 14" :countries="countries" />
            <RegistrationDelegatesLocalNonPDSROAForm v-if="current_step === 15" :countries="countries" />
            
            <RegistrationPaymentsPaymentSummary v-if="current_step === 16"/>
        </div>
        <div class="registration-disabled" v-else>
            <RegistrationAdvisory v-if="current_step === 1" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	layout: "registration",
    middleware: "isAuth",
	data() {
		return {
            current_step: 1,
            can_register: false,
        }
	},
    computed: {
        ...mapGetters({
            countries: 'options/getCountries',
            specific_countries: 'options/getSpecific_Country',
            customed_countries: 'options/getCustomed_Country',
        }),
    },
    methods: {
        prevStep(step) {
            if(this.current_step > 1) {
                this.current_step -= step
            }
            // this.scrollToTop()
        },
        nextStep(step) {
            this.current_step += step
            // this.scrollToTop()
        },
        goToStep(step) {
            this.current_step = step
            // this.scrollToTop()
        },
        scrollToTop() {
            window.scrollTo(0,0)
        },
        getRegistrationSwitch() {
			this.$store.dispatch("options/getRegistrationSwitch")
			.then(res => {
                this.can_register = res.data
			})
			.catch(err => {
				console.error(err)
			})
		},
    },
    mounted() {
        // window.location.href = "/"
        this.$store.dispatch("options/getCountries") // Get the list of countries
        this.$store.dispatch("options/getSpecific_Country") // Get the list of specific countries if Delegates > LADS
        this.$store.dispatch("options/getCustomed_Country")// Get the list of customed countries if Delegates > Non LADS
        this.getRegistrationSwitch()
    }
};
</script>
