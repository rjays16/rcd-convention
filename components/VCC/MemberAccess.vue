<template>
</template>

<script>
export default {
    middleware: "auth",
    data() {
        return {
            form: {
                full_name: null,
                registration_type: null,
                has_paid_registration: false,
                has_paid_ws_laser: false,
                has_paid_ws_aesth: false,
                has_paid_ws_both: false,
            }
        }
    },
    methods: {
        getUser() {
            this.$store.dispatch("auth/getUser")
            .then(res => {
                let user_data = res.data
                let member_data = res.data.member

                this.form.full_name = user_data.full_name
                this.form.registration_type = member_data.registration_type ? member_data.registration_type.name : ''
                this.form.has_paid_registration = member_data.paid_fees.has_paid_registration
                this.form.has_paid_ws_both = member_data.paid_fees.has_paid_ws_both
                this.form.has_paid_ws_laser = member_data.paid_fees.has_paid_ws_laser
                this.form.has_paid_ws_aesth = member_data.paid_fees.has_paid_ws_aesth

                if(this.form.has_paid_ws_both) {
                    this.form.has_paid_ws_laser = this.form.has_paid_ws_aesth = true
                }

                console.log('Member Access Form', this.form)
            })
            .catch(err => {
                // this.$message.error("Unable to retrieve the member data. Please try again later.")
                console.log("Member Access Error", err)
            })
        },
    },
    async fetch() {
        this.getUser()
    }
};
</script>