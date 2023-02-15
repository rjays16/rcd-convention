export const state = () => ({
    orders: [],

    abstracts: [],
    abstractType: null,
    authors: [],
    category: [],
    study_design: [],

    is_from_ideapay_page: false,
    is_success: false
});


export const getters = {
    getOrders: (state) => {
        return state.orders;
    },
    getAbstract: (state) => {
        return state.abstracts;
    },
    getAbstractAuthor({}, id) {
      return state.authors;
    },
    getCategoryList: (state) => {
      return state.category;
    },
    getStudyList: (state) => {
      return state.study_design;
    },
};

export const mutations = {
    SET_ORDERS(state, data) {
        state.orders = data;
    },
    SET_ABSTRACTS(state, data) {
        state.abstracts = data;
    },
    SET_ABSTRACT_TYPE(state, data) {
        state.abstractType = data;
        console.log("Abstract type", state.abstractType)
    },
    SET_AUTHORS(state, data) {
       state.authors = data;
    },
    SET_CATEGORY(state, data){
       state.category = data;
    },
    SET_STUDY(state, data){
       state.study_design = data;
    }, 
    SET_IS_SUCCESS(state, data){
        state.is_success = data;
    },
    SET_IS_FROM_IDEAPAY(state, data){
        console.log('is_from_ideapay_page', data)
        state.is_from_ideapay_page = data;
    },
};

export const actions = {
    // Start of Orders
    getOrders({ commit }, member_id) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/orders', {
				params: {
					member_id: member_id
				}
			})
            .then(res => {
                resolve(res)
                console.log(res.data)
                commit('SET_ORDERS', res.data);
            })
            .catch(err => {
                reject(err.response.data.message)
                commit('SET_ORDERS', []);
            })
        })
    },
    getOrderFees({}, member_id) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/member/order/fee/${member_id}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    create({ }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/member/order', data )
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    cancel({}, data) {
        return new Promise((resolve, reject) => {
            console.log(data)
            this.$axios.post('/member/order/cancel', data )
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },

    // End of Orders

    // Start of user functions
    update({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post(`/member/${data['id']}/edit`, data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    // End of user functions

    // Start of Ideapay
    createIdeapay({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/member/ideapay', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    // End of Ideapay

    // Start of abstracts
    getAbstracts({ commit }, member_id){
        return new Promise((resolve, reject) => {
            this.$axios.get('/abstract', {
                params: {
                    member_id: member_id
                }
            })
            .then(res => {
                resolve(res)
                commit('SET_ABSTRACTS', res.data);
            })
            .catch(err => {
                reject(err.response.data.message)
                commit('SET_ABSTRACTS', []);
            })
        })
    },
    getAbstract({}, id){
        return new Promise((resolve, reject) => {
            this.$axios.get(`/abstract/${id}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    createAbstract({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/abstract', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    // End of abstracts

    // Start list of category list
    getCategoryList({commit}){
      return new Promise((resolve, reject) => {
        this.$axios.get('/abstract/category')
          .then(res => {
            resolve(res)
            commit('SET_CATEGORY', res.data);
          })
          .catch(err => {
            console.log(err);
            reject(err)
            commit('SET_CATEGORY', []);
          })
      })
    },
    // End list of category list

    // start get list study design
    getStudyList({commit}){
      return new Promise((resolve, reject) => {
        this.$axios.get('/abstract/design')
          .then(res => {
            resolve(res)
            commit('SET_STUDY', res.data);
          })
          .catch(err => {
            console.log(err);
            reject(err)
            commit('SET_STUDY', []);
          })
      })
   },
  // end of list study design
};
