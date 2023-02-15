<template>
    <section id="thank-you" class="avenir-regular h-100 my-5 text-center">
        <button class="avenir-bold btn btn-blue no-pointer w-75 p-4 corner-22px mb-4 text-white fw-bold text-uppercase">
            <h1>Your registration is successful!</h1>
        </button>
        <div  class="text-center message py-5 mt-2">
            <p>
                Thank you for joining the 25th Regional Conference of Dermatology!
            </p>
             <p>
                Please check your email for your transaction details. You may also click the button below to log in to your account.
            </p>
            <p>
                See you virtually!
            </p>
        </div>
        <button type="button" @click="$router.push('/login')"
            class="avenir-regular login btn btn-blue p-3 corner-22px mb-4 text-white fw-bold">
            Log in
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
        this.$store.commit("members/SET_IS_SUCCESS", true);
        this.redirectToProfile()
    }
}
</script>

<style lang="scss" scoped>
#thank-you {
    button, .message {
        // font-size: 30px;
        font-size: calc(90% + .5vw + .5vh);
        line-height: 30px;
        letter-spacing: 1px;
    }
    .login{
		width: 30%;
	}
}
</style>