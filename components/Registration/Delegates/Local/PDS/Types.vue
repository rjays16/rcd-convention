<template>
    <section id="pds-delegates-types">
        <div class="container">
            <div class="contents d-flex flex-column justify-content-center avenir-medium py-5">
                <div class="text-center mb-2">
                    <h1 class="fw-bold">Local PDS Delegates</h1>
                </div>
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center text-white">
                     <button class="btn btn-blue of-btn py-2 corner-22px mb-4" @click="setTypeToPDSCOABODOC()">
                        COA , Board of Directors, <br> Organizing Committee
                    </button>
                    <button class="btn btn-blue of-btn py-2 corner-22px mb-4" @click="setTypeToPDSMember()">
                        Members
                    </button>
                    <button class="btn btn-blue of-btn py-2 corner-22px" @click="setTypeToPDSResident()">
                        Residents
                    </button>
                </div>

                <div class="container my-5 col-sm-12">
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
         setTypeToPDSCOABODOC(){
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[9]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "Local PDS Registration (COA , Board of Directors, Organizing Committee)");
            this.$parent.goToStep(11);
        },
        setTypeToPDSMember(){
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[4]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "Local PDS Registration (Members)");
            this.$parent.goToStep(12);
        },
        setTypeToPDSResident(){
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[5]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "Local PDS Registration (Residents)");
             this.$parent.goToStep(12);
        },
    },
}
</script>

<style lang="scss" scoped>
#pds-delegates-types {
    .contents {
        min-height: 75vh;
        button {
            font-size: 1.5rem;
            letter-spacing: 1px;
        }
        .of-btn{
            width: 36%;
        }
    }
}
@media only screen and (max-width: 767px) {
    #pds-delegates-types {
        .contents {
            min-height: 75vh;
            button {
                width: 50% !important;
            }
        }
    }
}
</style>