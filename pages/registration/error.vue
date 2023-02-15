<template>
    <section id="registration-error" class="avenir-regular h-100 my-5 text-center">
        <button class="avenir-bold btn btn-blue no-pointer w-75 p-4 corner-22px mb-4 text-white fw-bold text-uppercase">
           <h2>Sorry, but your payment may have been declined.</h2>
        </button>
        <div class="text-center text-wrap message m-4">
            <p>
                You can <a href="/login"> <b>login your account</b></a> and try to process your payment again through the profile dashboard page.
            </p>
           <p class="text-wrap">
                If your issue is not mentioned above, please contact our technical support at <a href="mailto:registration@rcd2022manila.com.ph"> <b>registration@rcd2022manila.com.ph </b></a>, expect a 24-48 hour turn around. 
            </p>
        </div>
        <button type="button" @click="$router.push('/registration')"
            class="avenir-regular btn btn-blue go-back p-3 corner-22px mb-4 mt-5 text-white fw-bold">
            Go Back to Registration
        </button>
    </section>
</template>

<script>
import { mapGetters} from "vuex";
export default {
    layout: "registration",
    computed: {
        ...mapGetters({
            isLoggedIn: 'auth/isLoggedIn',
        }),
    },
    methods:{
        redirectToProfile(){
            if(this.isLoggedIn){
                this.$store.commit("members/SET_IS_FROM_IDEAPAY", true);
                this.$router.push('/profile')
            }
        }
    },
    mounted(){
        this.$store.commit("members/SET_IS_SUCCESS", false);
        this.redirectToProfile()
    }
}
</script>

<style lang="scss" scoped>
#registration-error {
    button, .message {
        // font-size: 30px;
        font-size: calc(80% + .5vw + .5vh);
        line-height: 30px;
        letter-spacing: 1px;
    }
    .go-back{
		width: 35%;
	}
}
</style>