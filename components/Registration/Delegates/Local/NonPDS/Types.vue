<template>
    <section id="local-nonpds-types">
        <div class="container">
            <div class="contents d-flex flex-column justify-content-center avenir-medium">
                <div class="text-center mb-2">
                    <h1 class="fw-bold">Local Non-PDS Delegates</h1>
                </div>
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center text-white">
                    <button class="btn btn-blue w-25 py-2 corner-22px mb-4" @click="setTypeToNonPDSMD()">
                        Non-PDS MD
                    </button>
                    <button class="btn btn-blue w-25 py-2 corner-22px rai" @click="setTypeToNonPDSRAI()">
                        Residents of Applicant Institutions
                    </button>
                </div>
                <div class="container my-5">
                    <div class="row text-center">
                        <div class="inline-block avenir-medium">
                            <button class="btn btn-blue py-2 px-5 corner-22px fs-5 me-3" @click="$parent.goToStep(9)">
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>

<script>
export default {
    methods: {
        setTypeToNonPDSMD(){
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[6]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "Local Delegates Registration\n(Non-PDS MD)");
            this.$parent.goToStep(14);
        },
        setTypeToNonPDSRAI(){
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[7]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "Local Delegates Registration (Residents of Applicant Institutions)");
            this.$parent.goToStep(15);
        },
    },
}
</script>

<style lang="scss" scoped>
#local-nonpds-types {
    .contents {
        min-height: 75vh;
        button {
            font-size: 1.5rem;
            letter-spacing: 1px;
        }
    }
}
@media only screen and (max-width: 767px) {
    #local-nonpds-types {
        .contents {
            min-height: 75vh;
            button {
                width: 50% !important;
            }
            .rai{
                font-size: .8rem;
                letter-spacing: 1px;
            }
        }
    }
}
</style>