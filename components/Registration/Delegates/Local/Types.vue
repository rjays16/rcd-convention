<template>
    <section id="local-delegates-types">
        <div class="container">
            <div class="contents d-flex flex-column justify-content-center avenir-medium">
                <div class="text-center mb-2">
                    <h1 class="fw-bold">Local Delegates</h1>
                </div>
                <div class="row col-sm-12 d-flex flex-column justify-content-around align-items-center text-white">
                    <button class="btn btn-blue w-25 py-2 corner-22px mb-4" @click="goToStep(10)">
                        PDS
                    </button>
                    <button class="btn btn-blue w-25 py-2 corner-22px" @click="goToStep(13)">
                        Non-PDS
                    </button>
                </div>

                <div class="container my-5 col-sm-12">
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
        goToStep(step) {
            this.$parent.goToStep(step);
        },
    },
}
</script>

<style lang="scss" scoped>
#local-delegates-types {
    .contents {
        min-height: 75vh;
        button {
            font-size: 1.5rem;
            letter-spacing: 1px;
        }
    }
}
@media only screen and (max-width: 767px) {
    #local-delegates-types {
        .contents {
            min-height: 75vh;
            button {
                width: 50% !important;
            }
        }
    }
}
</style>