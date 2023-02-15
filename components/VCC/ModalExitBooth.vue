<template>
    <div class="exit-booth">

        <!-- <el-button class="exit-icon" type="text" @click="dialogVisible = true">
            <img src="/assets/images/vcc/exit-booth-icon.png" alt="">
        </el-button> -->

        <el-dialog
        title="LEAVING TOO SOON?"
        :visible.sync="dialogVisible"
        class=""
        :before-close="handleClose">
        <p><strong>Are you sure you want to leave this page? You will lose progress if you leave now.</strong></p>
		<p>Visiting this exhibitor again will restart the countdown timer before you can collect the virtual stamp for your RCD virtual passport.</p>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">OK, I'LL STAY</el-button>
            <el-button type="primary" @click="dialogVisible = false">I'LL LEAVE NOW</el-button>
        </span>
        </el-dialog>

    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false
        };
    },
    methods: {
		handleClose() {
		}
	},
    mounted() {
    }
}

</script>

<style lang="scss" scoped>

.exit-icon {
    position: absolute;
    bottom: 5%;
    left: 5%;
    display: block;
    width: 46px;
    height: 46px;
    z-index: 50;
    img {
        display: block;
    }
}

::v-deep .el-dialog {
    background-color: #ffffff;
    height: auto;
    text-align: center;
    max-width: 730px;
    width: 90%;
    border-radius: 10px;
    overflow: hidden;
    .el-dialog__header {
        background-color: rgba(255, 0, 0, 0.75);
        margin: 0;
        padding: 5px;
        .el-dialog__headerbtn {
            display: none;
        }
        .el-dialog__title {
            font-size: 1.6rem;
            text-transform: uppercase;
            font-weight: 700;
            color: #ffffff;
        }
    }
    .el-dialog__body {
        padding: 20px;
        font-size: 1rem;
        color: #000000;

        p{
            word-break: break-word;
        }
    }
    .el-dialog__footer {
        padding: 0 20px 20px;
        text-align: center;
        button {
            border: none;
            background-color: #0776BC;
            color: #ffffff;
            text-transform: uppercase;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 10px 20px;
            width: 150px;
            border-radius: 20px;
            margin: 0 15px 5px;
        }
    }
}

</style>