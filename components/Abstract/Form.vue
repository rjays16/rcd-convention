<template>
  <section id="abstract-form">
    <div class="container my-4">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12">
          <div class="text-center">
            <h1 class="avenir-medium fw-bold">Abstract Form</h1>
          </div>
          <div class="opensans bs-1 py-4 px-5 corner-20px"
            :class="index > 0 ? 'mt-3' : ''"
            v-for="(author, index) in formAuthor"
            :key="index"
            :set="v = $v.formAuthor.$each[index]">
            <div class="px-0 position-relative" :class="index == 0 ? 'text-center' : ''">
              <p class="h2 avenir-medium fw-bold d-inline-block mb-4" v-if="index === 0">Submitting Author <br/><span class="small-auth">(Presenting Author)</span></p>
              <p class="h2 avenir-medium fw-bold d-inline-block mb-4" v-else>Author {{ index + 1 }}</p>

              <div class="position-absolute top-0 end-0">
                <button type="button" class="btn btn-blue btn-minus corner-circle d-inline-block bs-0" v-if="index > 0" @click="removeAuthor(index)">
                  <font-awesome-icon :icon="['fas', 'times']"/>
                </button>
              </div>
            </div>

            <div class="container px-0 mt-2">
              <div class="row">
                <div class="col-lg-6 col-md-12 mb-3">
                  <label class="text mb-2">Last Name</label>
                  <el-input  v-model="author.last_name" />
                  <div v-if="v.last_name.$dirty">
                    <div class="note-small color-FF2C2C" v-if="!v.last_name.required">Required</div>
                    <div class="note-small color-FF2C2C" v-if="!v.last_name.maxLength">Max of {{ v.last_name.$params.maxLength.max }} characters.</div>
                  </div>
                </div>
                  <div class="col-lg-6 col-md-12 mb-3">
                    <label class="text mb-2">First Name</label>
                    <el-input v-model="author.first_name"/>
                    <div v-if="v.first_name.$dirty">
                      <div class="note-small color-FF2C2C" v-if="!v.first_name.required">Required</div>
                      <div class="note-small color-FF2C2C" v-if="!v.first_name.maxLength">Max of {{ v.first_name.$params.maxLength.max }} characters.</div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 mb-3" v-if="index === 0">
                    <label class="text mb-2">Email</label>
                    <el-input v-model="author.email" />
                    <div v-if="v.email.$dirty">
                      <div class="note-small color-FF2C2C" v-if="!v.email.required">Required</div>
                      <div class="note-small color-FF2C2C" v-if="!v.email.maxLength">Max of {{ v.email.$params.maxLength.max }} characters.</div>
                    </div>
                  </div>
              </div>
            </div>

            <div class="container px-0 mt-4">
              <div class="row">
                <div class="col-12 text-center">
                    <h5 class="avenir-medium fw-bold">Affiliation</h5>
                </div>
                <div class="col-lg-6 col-md-12 mb-3">
                  <label class="text mb-2">Institution/University/Hospital</label>
                  <el-input v-model="author.institution"/>
                  <div v-if="v.institution.$dirty">
                    <div class="note-small color-FF2C2C" v-if="!v.institution.required">Required</div>
                    <div class="note-small color-FF2C2C" v-if="!v.institution.maxLength">Max of {{ v.institution.$params.maxLength.max }} characters.</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 mb-3">
                  <label class="text mb-2">Department</label>
                  <el-input v-model="author.department" />
                  <div v-if="v.department.$dirty">
                    <div class="note-small color-FF2C2C" v-if="!v.department.required">Required</div>
                    <div class="note-small color-FF2C2C" v-if="!v.department.maxLength">Max of {{ v.department.$params.maxLength.max }} characters.</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 mb-3">
                  <label class="text mb-2">City</label>
                  <el-input v-model="author.affiliation_city" />
                  <div v-if="v.affiliation_city.$dirty">
                    <div class="note-small color-FF2C2C" v-if="!v.affiliation_city.required">Required</div>
                    <div class="note-small color-FF2C2C" v-if="!v.affiliation_city.maxLength">Max of {{ v.affiliation_city.$params.maxLength.max }} characters.</div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 mb-3">
                  <label class="text mb-2">Country</label>
                  <el-input v-model="author.affiliation_country" />
                  <div v-if="v.affiliation_country.$dirty">
                    <div class="note-small color-FF2C2C" v-if="!v.affiliation_country.required">Required</div>
                    <div class="note-small color-FF2C2C" v-if="!v.affiliation_country.maxLength">Max of {{ v.affiliation_country.$params.maxLength.max }} characters.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center my-4">
          <button class="btn btn-blue btn-add corner-circle d-inline-block bs-0" @click="addAuthor(limit)">
            <font-awesome-icon :icon="['fas', 'plus']"/>
          </button>
          <h4 class="avenir-medium fw-bold pt-2 mb-0 d-inline-block">
            Add Author
          </h4>
        </div>

        <div class="opensans bs-1 py-4 px-5 corner-20px text-center mb-3">
          <div class="col-12 text-center">
            <h2 class="avenir-medium fw-bold">Abstract Category and Study Design</h2>
          </div>
          <div class="container px-0 mt-4">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-3">
                <label class="text mb-2">Category</label>
                <el-select v-model="$v.formAbstract.abstract_category.$model" class="w-100">
                  <el-option
                    v-for="option in category"
                    :key="option.id"
                    :label="option.category_value"
                    :value="option.category_value"
                  />
                </el-select>
              </div>
              <div class="col-lg-6 col-md-12 mb-3">
                <label class="text mb-2">Study Design</label>
                <el-select v-model="$v.formAbstract.study_design.$model" class="w-100">
                  <el-option
                    v-for="option in study"
                    :key="option.id"
                    :label="option.study_value"
                    :value="option.study_value"
                  />
                </el-select>
              </div>
            </div>
          </div>
        </div>

        <div class="opensans bs-1 py-4 px-5 corner-20px text-center mb-5">
          <div class="col-12 text-center">
            <h2 class="avenir-medium fw-bold">Abstract</h2>
          </div>
          <div class="container px-0 mt-4">
            <div class="row">
              <div class="col-12 mb-3">
                <label class="text mb-2">Title</label>
                <el-input v-model="$v.formAbstract.title.$model" />
                <div v-if="$v.formAbstract.title.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.title.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.title.maxLength">Max of {{ $v.formAbstract.title.$params.maxLength.max }} characters.</div>
                </div>
              </div>
              <div class="col-12 mb-3">
                <label class="text">Structured Abstract</label>
                  <textarea v-model="$v.formAbstract.structured_abstract.$model" data-max-length="300" type="textarea" :rows="4" class="w-100 h-100" v-on:keyup="countWords"/>
                </div>
              <div class="mb-4"></div>
                <div id="words"> <small>Words Left:</small> </div>
              </div>
                <div v-if="$v.formAbstract.structured_abstract.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.structured_abstract.required">Required</div>
                </div>
              </div>
                  <div class="col-12 mb-3">
                    <label class="text mb-2">Keywords<span class="note-small color-FF2C2C"> (separated by commas)</span></label>
                      <el-input data-max-keyword="5" v-model="$v.formAbstract.keywords.$model" v-on:keyup="keywordLimit"/>
                    <div v-if="$v.formAbstract.keywords.$dirty">
                      <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.keywords.required">Required</div>
                      <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.title.maxLength">Max of {{ $v.formAbstract.title.$params.maxLength.max }} characters.</div>
                  </div>
                </div>
              <div class="col-12 mb-3">
                <label class="text mb-2">Conflict of Interest</label>
                <el-radio v-model="formAbstract.is_conflict_interest"
                  v-for="option in yesNone_COI"
                  :key="option.id"
                  :label="option.value"
                  :value="option.value"
                  class="blue-input">
                  {{ option.name }}
                </el-radio>
                <el-input v-if="formAbstract.is_conflict_interest === false || formAbstract.is_conflict_interest === null" disabled/>
                <el-input v-else v-model="$v.formAbstract.conflict_interest.$model"/>
                <div v-if="$v.formAbstract.conflict_interest.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.conflict_interest.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.conflict_interest.maxLength">Max of {{ $v.formAbstract.conflict_interest.$params.maxLength.max }} characters.</div>
                </div>
              </div>
              <div class="col-12 mb-3">
                <label class="text mb-2">Commercial Funding</label>
                <el-radio v-model="formAbstract.is_commercial_funding"
                  v-for="option in yesNone_CF"
                  :key="option.id"
                  :label="option.value"
                  :value="option.value"
                  class="blue-input">
                  {{ option.name }}
                </el-radio>
                <el-input v-if="formAbstract.is_commercial_funding === false || formAbstract.is_commercial_funding === null" disabled/>
                <el-input v-else v-model="$v.formAbstract.commercial_funding.$model"/>
                <div v-if="$v.formAbstract.commercial_funding.$dirty">
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.commercial_funding.required">Required</div>
                  <div class="note-small color-FF2C2C" v-if="!$v.formAbstract.commercial_funding.maxLength">Max of {{ $v.formAbstract.commercial_funding.$params.maxLength.max }} characters.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div class="container my-5">
        <div class="row text-center">
          <div class="inline-block avenir-medium">
            <button class="btn btn-blue py-2 px-5 corner-22px fs-5 me-3" href="#" tabindex="-1" data-toggle="modal" @click="recheckInputs">
              Preview
            </button>
            <button class="btn btn-blue py-2 px-5 corner-22px fs-5 me-3" @click="back()">
              Back
            </button>
          </div>
        </div>
      </div>

    <ModalsAbstractPreview ref="AbstractPreviewModal" :abstractType="abstract_type"/>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import $ from 'jquery';
import { required, maxLength,requiredIf } from 'vuelidate/lib/validators/';
import { VueEditor } from  "vue2-editor";
export default {
  head: {
    script: [{ src: "https://code.jquery.com/jquery-3.2.1.min.js",
      integrity: "sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=",
      crossorigin: "anonymous"
    }],
  },
  props:['abstract_type','category', 'study'],
 components: {
   VueEditor,
 },
	data() {
		return {
		  limit: 1,
      limitmaxCount: 300,
      totalRemainCount: 300,
      theMessage: '',
      generateErr: false,
      yesNone_COI: this.$store.state.options.yesNone,
      yesNone_CF: this.$store.state.options.yesNone,

      formAuthor: [{
        index: 0,
        last_name: null,
        first_name: null,
        city: null,
        country: null,
        email: null,

        institution: null,
        department: null,
        affiliation_city: null,
        affiliation_country: null,
      }],

      formAbstract: {
        abstract_category: "Acne, hidradenitis suppurativa,",
        study_design: "Case Control Study",

        title: null,
        structured_abstract: null, // Structured Abstract
        keywords: null,
        is_conflict_interest: false,
        conflict_interest: null,
        is_commercial_funding: false,
        commercial_funding: null,
        abstract_type: this.abstract_type,
      },
    }
  },
  validations: {
    formAuthor: {
      $each: {
        last_name: {
          required,
          maxLength: maxLength(255)
        },
        first_name: {
          required,
          maxLength: maxLength(255)
        },
        email: {
          maxLength: maxLength(255),
          required: requiredIf((value) => value.index === 0)
        },
        institution: {
          required,
          maxLength: maxLength(255)
        },
        department: {
          required,
          maxLength: maxLength(255)
        },
        affiliation_city: {
          required,
          maxLength: maxLength(255)
        },
        affiliation_country: {
          required,
          maxLength: maxLength(255)
        },
      }
    },
    formAbstract: {
      abstract_category: {
        required,
        maxLength: maxLength(255)
      },
      study_design: {
        required,
        maxLength: maxLength(255)
      },
      title: {
        required,
        maxLength: maxLength(255)
      },
      structured_abstract: {
        required,
      },
      keywords: {
        required,
        maxLength: maxLength(255)
      },
      conflict_interest: {
        required: requiredIf(function() {
					return this.formAbstract.is_conflict_interest === true /* required if yes */
				}),
        maxLength: maxLength(255)
      },
      commercial_funding: {
        required: requiredIf(function() {
					return this.formAbstract.is_commercial_funding === true /* required if yes */
				}),
        maxLength: maxLength(255)
      },
    },
  },
  computed: {
		...mapGetters({
      list_of_authors: 'members/getAbstractAuthor'
    }),
	},
  methods: {
    liveCountWords: function() {
      this.totalRemainCount = this.limitmaxCount - this.formAbstract.structured_abstract.length;
      this.generateErr = this.totalRemainCount <= 0;
    },
      countWords: function() {
        $(function() {
          const counter_str = function() {
            $('[data-max-length]').each(function(){
              var field = $(this);
              var value = $(this).val();
              var strLimit = $(this).attr('data-max-length');
              var words = value.split(/[\s\.\?]+/);
              var words = words.slice(0,strLimit);
              var wordCount=value.split(/[\s\.\?]+/).length;
              if((strLimit - wordCount) >= 0){
               var left = strLimit - wordCount;
              }else{
                var left = 0;
              }
              $('small').html("Words left : " + left) ;
              if(wordCount > strLimit){
                field.val(words.join(" "));
              }
            })
          }
          $('[data-max-length]').each(function(){
            $(this).change(counter_str);
            $(this).keydown(counter_str);
            $(this).keypress(counter_str);
            $(this).keyup(counter_str);
            $(this).blur(counter_str);
            $(this).focus(counter_str);
          });
        });
      },
    keywordLimit: function() {
      $(function() {
        const counter_str = function() {
          $('[data-max-keyword]').each(function(){
            var field = $(this);
            var value = $(this).val();
            var strLimit = $(this).attr('data-max-keyword');
            var words = value.split(/[\s\.\?]+/);
            var words = words.slice(0,strLimit);
            var wordCount=value.split(/[\s\.\?]+/).length;
            if((strLimit - wordCount) >= 0){
              var left = strLimit - wordCount;
            }else{
              var left = 0;
            }
            $('keys').html("Words left : " + left) ;
            if(wordCount > strLimit){
              field.val(words.join(" "));
            }
          })
        }
        $('[data-max-keyword]').each(function(){
          $(this).change(counter_str);
          $(this).keydown(counter_str);
          $(this).keypress(counter_str);
          $(this).keyup(counter_str);
          $(this).blur(counter_str);
          $(this).focus(counter_str);
        });
      });
    },
    back(){
      this.$parent.goToStep(1)
    },
    addAuthor() {
      if(this.limit != 6){
        const limit = Number(this.limit);
        this.formAuthor = [...Array(limit).keys()].map(i => this.formAuthor[i] || {});
        this.limit++;
      } else {
        this.$message.error("Maximum of 5 authors only per abstract submission.")
      }
    },
    removeAuthor(index) {
      if(index > 0) {
        this.formAuthor.splice(index, 1);
      }
      this.limit--;
    },
    preview() {
      this.formAbstract.conflict_interest = this.formAbstract.is_conflict_interest ? this.formAbstract.conflict_interest : null
      this.formAbstract.commercial_funding = this.formAbstract.is_commercial_funding ? this.formAbstract.commercial_funding : null
      this.$refs.AbstractPreviewModal.preview(this.formAbstract, this.formAuthor, this.abstract_type);
      $('#abstract-preview').modal('show');
    },
		recheckInputs() {
			this.$v.$touch()
			if(this.$v.$invalid) {
        this.$message.error("Please fill in the required fields.")
      } else {
        this.preview()
      }
		},
  },
  mounted() {
    this.$v.$reset
  }
}
</script>

<style lang="scss" scoped>
#abstract-form {
  .btn-add {
    padding: 1px 7px;
  }
  .btn-minus {
    padding: 1px 9px;
  }
}
.bs-1 {
  box-shadow: 4px 4px 4px 4px #424242
}
.el-checkbox{
  margin-left: -20px;
}
.el-input{
  border: 1px solid #424242;
  color: #606266;
  font-size: 20px;
}
.el-textarea{
  border: 1px solid #424242;
  color: #606266;
}
.el-select{
  border: 1px solid #424242;
  font-size: 20px;
  color: #606266;
}
#words small{
  float: right;
}
.text{
  font-size: 18px;
  float: left;
}
input{
  border: 1px solid #333;
  font-size: 22px;
  padding: 15px;
  color: #606266;
}
</style>
