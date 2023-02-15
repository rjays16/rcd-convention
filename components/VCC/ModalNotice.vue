<template>
    <div class="modal-notice">
		<div class="modal-msg">
            <img src="/assets/images/banner.png" alt="">       
			<h2>Turn your phone horizontally for best experience.</h2>
            <a href="#" class="dismiss-modal">DISMISS</a>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
export default {
    mounted() {

        $( document ).ready(function() {
            $( ".dismiss-modal" ).click(function() {
                $( ".modal-notice" ).fadeOut();
            });
        });
        
    }
};
</script>
<style lang="scss" scoped>
	.modal-notice {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background-color: rgba($color: #000000, $alpha: 0.8);
		justify-content: center;
        align-items: center;
		top: 0;
		left: 0;
        display: none;
	}
	.modal-notice .modal-msg {
		background-color: #ffffff;
		padding: 20px;
        height: auto;
        text-align: center;
        max-width: 450px;
        width: 90%;
        border-radius: 20px;
	}
    .modal-msg img {
        max-width: 300px;
        width: 100%;
        height: auto;
    }
    .modal-msg h2 {
        margin: 20px 0 0;
        font-size: 22px;
    }
    .dismiss-modal {
        background-color: #ff7500;
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 30px;
        display: inline-block;
        margin: 20px 0 0;
        border-radius: 10px;
        font-size: 20px;
        font-weight: 700;
    }
    @media screen and (min-width:320px) and (max-width:767px) and (orientation:portrait) {
        .modal-notice {
            display: flex;
        }
    }
</style>