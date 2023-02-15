export const state = () => ({
  abstracts: [],
});

export const getters = {
  getAbstract: (state) => {
    return state.abstracts;
  },
};

export const mutations = {
  SET_ABSTRACTS(state, data) {
    state.abstracts = data
  }
}

export const actions = {
  getAllEposterAbstracts({}, id){
    return new Promise((resolve, reject) => {
      this.$axios.get('/abstract/e-posters')
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err.response.data.message)
        })
    })
  },
  getAllFreePaperAbstracts({}, id){
    return new Promise((resolve, reject) => {
      this.$axios.get('/abstract/free-papers')
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err.response.data.message)
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
  getAbstractSwitch(){
    return new Promise((resolve, reject) => {
      this.$axios.get('/abstract-switch')
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err.response.data.message)
        })
    })
  }
  // getAllCategories({}) {
  //   return new Promise((resolve, reject) => {
  //     this.$axios.get('/abstract/category')
  //       .then(res => {
  //         resolve(res)
  //       })
  //       .catch(err => {
  //         reject(err)
  //       })
  //   })
  // },
}
