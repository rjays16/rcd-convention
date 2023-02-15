<template>
  <div class="modal fade" id="abstract-preview" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="abstract-guidelines">Abstract Preview</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close" @click="close">
            </button>
        </div>
        <div class="modal-body">
          <p class="mb-1">
            <span class="fw-bold">Type of Presentation:</span>
            <span :data-type="form.abstract_type">{{ form.abstract_type == 2 ? "Free Paper Presentation" : "E-Poster" }}</span>
          </p>
          <p class="mb-1">
            <span class="fw-bold">Category:</span>
            <span>{{ form.abstract_category }}</span>
          </p>
          <p>
            <span class="fw-bold">Study Design:</span>
            <span>{{ form.study_design }}</span>
          </p>
          <p class="mb-3 mt-3">
            <span class="fw-bold">Title:</span>
            <span>{{ form.title }}</span>
          </p>
          <p v-for="author, index in form.authors" :key="author.id">
            <span v-if="index === 0" class="fw-bold">Submitting author:</span>
            <span v-else class="fw-bold">Co-Author:</span>
            <span>{{ author.first_name }} {{ author.last_name }}</span>
            <span v-if="index === 0" class="fw-bold pl">Email: </span><span class="pl-3px" v-if="index === 0" >{{form.authors[0].email}}</span>
            <br/>
            <span class="fw-bold">Affiliation:</span> {{ author.institution }}, {{ author.department }}, {{ author.affiliation_city }}, {{ author.affiliation_country }}
          </p>
          <p class="mt-1 text-justify">
            {{form.structured_abstract}}
          </p>
          <p class="mt-1">
            <span class="fw-bold">Keywords:</span>
            <span>{{form.keywords}}</span>
          </p>
          <p class="mb-1">
            <span class="fw-bold">Conflict of interest:</span>
            <span>{{ form.is_conflict_interest ? "YES - " + form.conflict_interest : "None" }}</span>
          </p>
          <p class="mb-1">
            <span class="fw-bold">Commercial funding:</span>
            <span>{{ form.is_commercial_funding ? "YES - " + form.commercial_funding : "None" }}</span>
          </p>
          <p class="mb-1">
            <span class="fw-bold">Date Submitted:</span>
            <span>{{ form.submission_date }}</span>
          </p>
        </div>
        <div class="modal-footer avenir-bold justify-content-center">
          <hr>
          <div v-if="!is_preview" class="opensans text-start mb-4">
            <p>
              <el-checkbox v-model="has_agreed"></el-checkbox>
              I have read and agree with the <a href="https://beta.rcd2022manila.com.ph/abstract-guidelines" target="_blank">submission guidelines</a>. In clicking SUBMIT,
              I declare that this abstract has not been previously presented at a major international meeting,
              that the presentation is based on scientific and/or clinical methods that are ethical and valid,
              that all co-authors have consented to being listed as authors and have contributed to, agree,
              and approve the abstract in its entirety.
            </p>
          </div>
          <button type="button" class="btn btn-blue corner-22px" data-dismiss="modal" @click="close">
            {{ is_preview ? "Close" : "Edit" }}
          </button>
          <button type="button" class="btn btn-blue corner-22px" @click="submit" v-if="!is_preview">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import $ from 'jquery';
import splash from '~/pages/splash.vue';
export default {
  components: { splash },
  props:['abstractType'],
  middleware: "auth",
  data() {
    return{
      form:{
        abstract_type: null,
        title: null,
        structured_abstract: null,
        keywords: null,
        is_conflict_interest: null,
        conflict_interest: null,
        commercial_funding: null,
        is_commercial_funding:null,
        submission_date: null,
        abstract_category: null,
        study_design: null,
        authors: [{
          first_name: null, last_name: null,
          city: null, country: null,
          email: null,
          institution: null, department: null,
          affiliation_city: null, affiliation_country: null
        }],
      },
      has_agreed: false,
      is_preview: false,
    }
  },
  computed: {
		...mapGetters({
      abstract: 'members/getAbstract',
    }),
	},
  methods: {
    submit() {
      if(this.has_agreed === false){
        this.$message.error('Please check the agreement first');
      } else {
        this.$store.dispatch('members/createAbstract', this.form)
        .then(res => {
          $(".modal-backdrop").remove();
          this.close()
          this.$router.push('/abstract/thank-you')
        })
        .catch(err => {
          this.$message.error(err)
        })
      }
    },
    preview(abstractData, formAuthor, abstract_type = null) {
      const moment = require('moment');
      
      console.log("Abstract Data for Preview: ", abstractData)
      this.form.title = abstractData.title
      this.form.commercial_funding = abstractData.commercial_funding
      this.form.is_commercial_funding = abstractData.is_commercial_funding
      this.form.study_design = abstractData.study_design
      this.form.keywords = abstractData.keywords
      this.form.conflict_interest = abstractData.conflict_interest
      this.form.is_conflict_interest = abstractData.is_conflict_interest
      this.form.abstract_category = abstractData.abstract_category
      this.form.structured_abstract = abstractData.structured_abstract
      this.form.submission_date = !this.is_preview ? moment(new Date()).format("MMMM DD, YYYY") : moment(new Date(abstractData.created_at)).format("MMMM DD, YYYY")
      // this.form.date = new Date().toLocaleDateString("en", {day: 'numeric', month: 'long', year: 'numeric'})
      this.form.abstract_type = abstract_type
      this.form.authors = formAuthor
      // console.log("Authors: ", formAuthor)
    },
    openModal(id, is_preview) {
      console.log("Abstract ID:", id, "Is preview?", is_preview)
      this.is_preview = is_preview
      this.$store.dispatch("members/getAbstract", id)
      .then((res) => {
        var data = res.data;
        // console.log("Abstract Data for Preview: ", res.data)
        this.preview(data, data.authors, data.abstract_type)
        setTimeout(() => {
          $('#abstract-preview').modal('show');
        }, 3000);
      })
      .catch((err) => {
        this.$message.error(err.message)
      })
    },
    close() {
      $('#abstract-preview').modal('hide');
    }
  },
}
</script>

<style lang="scss" class="scoped">
.v-editor {
  .ql-align-center {
    text-align: center;
  }
  .ql-align-right {
    text-align: right;
  }
  .editor {
    p {
      margin-bottom: 0;
    }
    ul {
      text-align: center;
      list-style-position: inside;
    }
    ol{
      text-align: center;
      list-style-position: inside;
    }
  }
}
.text-justify {
  text-align: justify;
}
ul.no-bullets {
  list-style-type: none; /* Remove bullets */
  // padding: 0; /* Remove padding */
  // margin: 0; /* Remove margins */
}
.structured{
  overflow-wrap: break-word;
}
</style>
