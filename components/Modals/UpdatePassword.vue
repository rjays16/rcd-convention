<template>
    <div class="modal fade" id="update-password" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered">
            <div class="modal-content py-4">
                <div class="col-12 col-md-12">
                    <h4 class="text-uppercase text-center mb-3">Update Password</h4>
                    <form autocomplete="off">
                        <div class="row m-2">
                            <div class="form-group col-lg-12 mb-2">
                                <label class="mb-1">Email Address</label>
                                <el-input class="input" v-model="$v.form.email.$model"/>
                                <div v-if="$v.form.email.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.email.required">Required Field</div>
                                </div>
                            </div>
                            <div class="form-group col-lg-12 mb-2">
                                <label class="mb-1">Current Password</label>
                                <el-input class="input" v-model="$v.form.current_password.$model" type="password" autocomplete="new-password" show-password />
                                <div v-if="$v.form.current_password.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.current_password.required">Required Field</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.current_password.maxLength">Max of {{ $v.form.current_password.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                            <div class="form-group col-lg-12 mb-2">
                                <label class="mb-1">New Password</label>
                                <el-input class="input" v-model="$v.form.new_password.$model" type="password" show-password />
                                <div v-if="$v.form.new_password.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.new_password.required">Required Field</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.new_password.minLength">Min of {{ $v.form.new_password.$params.minLength.min }} characters.</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.new_password.maxLength">Max of {{ $v.form.new_password.$params.maxLength.max }} characters.</div>
                                </div>
                            </div>
                            <div class="form-group col-lg-12 mb-2">
                                <label class="mb-1">Confirm Password</label>
                                <el-input class="input" v-model="$v.form.confirm_password.$model" type="password" show-password />
                                <div v-if="$v.form.confirm_password.$dirty">
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.required">Required Field</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.minLength">Min of {{ $v.form.confirm_password.$params.minLength.min }} characters.</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.maxLength">Max of {{ $v.form.confirm_password.$params.maxLength.max }} characters.</div>
                                    <div class="note-small color-FF2C2C" v-if="!$v.form.confirm_password.sameAsPassword">New and confirm password must be identical</div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="text-center mt-2">
                        <!-- <button type="button" class="btn btn-secondary mt-2 corner-22px text-uppercase" data-dismiss="modal">Cancel</button> -->
                        <button type="button" class="btn btn-blue mt-2 corner-22px" @click="recheckInputs">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, maxLength, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
    data() {
        return {
            form: {
                email: null,
                new_password: null,
                current_password: null,
                confirm_password: null,
            }
        };
    },
    validations: {
        form: {
            email: {
                required,
            },
            new_password: {
                required,
                minLength: minLength(7),
                maxLength: maxLength(150)
            },
            current_password: {
                required,
                maxLength: maxLength(150)
            },
            confirm_password: {
                required,
                minLength: minLength(7),
                maxLength: maxLength(150),
                sameAsPassword: sameAs('new_password')
            },
        },
    },
    methods: {
        recheckInputs() {
            this.$v.form.$touch()
            if(this.$v.form.$invalid) {
                this.$message.error("Please fill in the required fields.")
            } else {
                this.save()
            }
        },
        save() {
            this.$store.dispatch("auth/updatePassword", this.form)
            .then((res) => {
                this.$message.success(res.data.message)
                this.close()
            })
            .catch((err) => {
                this.$message.error(err.message)
            })
        },
        close(){
            $(".modal-backdrop").remove();
            $('#update-password').hide();
        },
    },
}
</script>
<style lang="scss" scoped>
    .form-group .input{
    border: solid 0px #D3D3D3;
    border-radius: 5px;
    -moz-box-shadow: 0px 3px 8px #D3D3D3;
    -webkit-box-shadow: 0px 3px 8px #D3D3D3;
    box-shadow: 0px 3px 8px #D3D3D3;
  }
</style>
    