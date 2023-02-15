<template>
    <section id="international-type">
        <div class="container">
            <div class="contents d-flex flex-column justify-content-center avenir-medium py-5">
                <div class="text-center mb-2">
                    <h1 class="fw-bold">International Delegates</h1>
                </div>
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center text-white">
                    <button class="btn btn-blue w-25 py-2 corner-22px mb-4" @click="setTypetoINTLADS()">
                        LADS
                    </button>
                    <button class="btn btn-blue w-25 py-2 corner-22px mb-4" @click="setTypetoINTNONLADS()">
                        Non-LADS
                    </button>
                    <button class="btn btn-blue w-25 py-2 corner-22px" @click="setTypetoINTLRESIDENTS()">
                        Residents
                    </button>
                </div>
                <div class="container my-5">
                    <div class="row text-center">
                        <div class="inline-block avenir-medium">
                            <button class="btn btn-blue py-2 px-5 corner-22px fs-5 me-3" @click="$parent.goToStep(3)">
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
        setTypetoINTLADS() {
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[1]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "International Delegates Registration (LADS)");
            this.$parent.goToStep(5);
        },
        setTypetoINTNONLADS() {
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[2]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "International Delegates Registration (Non-LADS)");
            this.$parent.goToStep(7);
        },
        setTypetoINTLRESIDENTS() {
            this.$store.commit("registration/SET_TYPE", this.$store.state.options.registration_types[3]);
            this.$store.commit("registration/SET_INTL_DELEGATE_FORM_TITLE", "International Delegates Registration (Residents)");
            this.$parent.goToStep(8);
        }
    },
}
</script>

<style lang="scss" scoped>
#international-type {
    .contents {
        min-height: 75vh;
        button {
            font-size: 1.5rem;
            letter-spacing: 1px;
        }
    }
}
@media only screen and (max-width: 767px) {
    #international-type {
        .contents {
            min-height: 75vh;
            button {
                width: 50% !important;
            }
        }
    }
}
</style>
