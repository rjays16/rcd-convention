export const state = () => ({
    yesNo: [
        { id: 1, value: true, name: "Yes" },
        { id: 2, value: false, name: "No" }
    ],
    yesNone: [
        { id: 1, value: true, name: "Yes" },
        { id: 2, value: false, name: "None" }
    ],
    agreement: [
        { id: 1, value: true, name: "Agree" },
        { id: 2, value: false, name: "Disagree" }
    ],
    worskhops: [
        { id: 1, name: "Aesthetic" },
        { id: 2, name: "Laser" },
        { id: 3, name: "Both" },
    ],
    countries: [],
    specific_countries: [],
    customed_countries:[],
    registerable_role: 3,
    registration_types: [
        { id: 1, name: "Speaker/Session, Workshop Chair" },
        { id: 2, name: "International LADS" },
        { id: 3, name: "International non-LADS" },
        { id: 4, name: "International Resident" },
        { id: 5, name: "Local PDS Member" },
        { id: 6, name: "Local PDS Resident" },
        { id: 7, name: "Local Non PDS MD" },
        { id: 8, name: "Local Non PDS Resident of Applicants Institutions"},
        { id: 9, name: "International LADS Officer" },
        { id: 10, name: "Local PDS Council of Advisers, Board of Directors, Organizing Committee"}
    ],
    applicant_institutions:  [
        { id: 1, name: "Dr. Jose N. Rodriguez Memorial Hospital (DJNRMHS)" },
        { id: 2, name: "Southern Isabela Medical Center (SIMC)" },
        { id: 3, name: "Tondo Medical Center (TMC)" },
        { id: 4, name: "Valenzuela Medical Center (VMC)" },
    ],
   
    payment_method: 1,
    
    training_institution: [],
    trainingInstitutions: [
        { id: 1, name: 'East Avenue Medical Center' },
        { id: 2, name: 'Jose R. Reyes Memorial Medical Center' },
        { id: 3, name: 'Makati Medical Center' },
        { id: 4, name: 'Ospital ng Maynila Medical Center' },
        { id: 5, name: 'Region 1 Medical Center' },
        { id: 6, name: 'Research Institute for Tropical Medicine' },
        { id: 7, name: 'Rizal Medical Center' },
        { id: 8, name: 'Skin Cancer and Foundation Inc.' },
        { id: 9, name: 'Southern Philippines Medical Center' },
        { id: 10, name: "St. Luke's Medical Center" },
        { id: 11, name: 'University of Santo Tomas Hospital' },
        { id: 12, name: 'University of the East Ramon Magsaysay Memorial Medical Center' },
        { id: 13, name: 'UP-Philippine General Hospital' },
    ]
});

export const getters = {
    getCountries: (state) => {
        return state.countries;
    },
    getSpecific_Country: (state) => {
        return state.specific_countries;
    },
    getTrainingInstitution: (state) => {
        return state.training_institution;
    },
    getCustomed_Country: (state) => {
        return state.customed_countries;
    },
}


export const mutations = {
    SET_COUNTRIES(state, data) {
        state.countries = data;
    },
    SET_SPECIFIC_COUNTRIES(state, data){
          state.specific_countries = data;
    },
    SET_TRAINING_INSTITUTION(state, data){
        state.specific_countries = data;
    },
    SET_CUSTOMED_COUNTRIES(state, data){
        state.customed_countries = data;
    },
};

export const actions = {
    getCountries({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/countries')
            .then(res => {
                resolve(res)
                commit('SET_COUNTRIES', res.data);
            })
            .catch(err => {
                console.log(err)
                reject(err)
                commit('SET_COUNTRIES', []);
            })
        })
    },
    getSpecific_Country({ commit }) {
        return new Promise((resolve, reject) => {
        this.$axios.get('/countries/specific_country')
            .then(res => {
                resolve(res)
                commit('SET_SPECIFIC_COUNTRIES', res.data);
            })
            .catch(err => {
                console.log(err)
                reject(err)
                commit('SET_SPECIFIC_COUNTRIES', []);
            })
        })
    },
    getRegistrationSwitch({}) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/registration-switch')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    getTrainingInstitution({commit}) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/training-institutions')
            .then(res => {
                resolve(res)
                commit('SET_TRAINING_INSTITUTION', res.data);
            })
            .catch(err => {
                console.log(err)
                reject(err)
                commit('SET_TRAINING_INSTITUTION', []);
            })
        })
    },
    getCustomed_Country({ commit }) {
        return new Promise((resolve, reject) => {
        this.$axios.get('/countries/customed_country')
            .then(res => {
                resolve(res)
                commit('SET_CUSTOMED_COUNTRIES', res.data);
            })
            .catch(err => {
                console.log(err)
                reject(err)
                commit('SET_CUSTOMED_COUNTRIES', []);
            })
        })
    },
};
