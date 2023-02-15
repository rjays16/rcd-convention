export const state = () => ({
  	plenary: [],
});

export const getters = {
	getPlenaryEvents: (state) => {
		return state.plenary;
	},
}

export const mutations = {
	SET_PLENARY_EVENTS(state, data){
		state.plenary = data;
	},
}

export const actions = {
  	getOpeningDate({}) {
		return new Promise((resolve, reject) => {
			this.$axios.get('/vcc/opening-date')
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err.response.data.message)
			})
		})
	},
    getUserStamps({}) {
        return new Promise((resolve, reject) => {
        	this.$axios.get('/vcc/stamps')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },

	//start of logs
	create({ }, data) {
		return new Promise((resolve, reject) => {
			this.$axios.post('/vcc/log', data )
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err.response.data.message)
			})
		})
  	},
	delete({ }, data) {
		return new Promise((resolve, reject) => {
			this.$axios.post('/vcc/log', data )
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err.response.data.message)
			})
		})
  	},
	//end of logs

	getPlenaryEvents({}, date) {
		return new Promise((resolve, reject) => {
		this.$axios.get('/vcc/plenary/events', {
				params: {
					date: date
				}
			})
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err.response.data.message)
			})
		})
	},
	getOpeningDateWorkshop({}) {
		return new Promise((resolve, reject) => {
		this.$axios.get('/vcc/workshop')
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
		})
	},
	getWorkshopInfoUser({},id_dates){
		return new Promise((resolve, reject) => {
		this.$axios.get(`/vcc/workshop/${id_dates}`)
			.then(res => {
				console.log(res)
				resolve(res)
			})
			.catch(err => {
				console.log(err);
				reject(err)
			})
		})
	},
  	// start get list plenary attendance
	getPlenaryAttendanceList({}, id){
		return new Promise((resolve, reject) => {
		// this.$axios.get(`/vcc/plenary/attendance/${id}`)
		this.$axios.get(`/vcc/plenary/user/${id}/attendance`)
			.then(res => {
				// console.log(res)
				resolve(res)
			})
			.catch(err => {
				console.log(err);
				reject(err)
			})
		})
	},
	// end of list plenary attendance

	// start get list workshop attendance
	getWorkshopAttendanceList({}, id){
		return new Promise((resolve, reject) => {
		this.$axios.get(`/vcc/workshop/user/${id}/attendance`)
			.then(res => {
				// console.log(res)
				resolve(res)
			})
			.catch(err => {
				console.log(err);
				reject(err)
			})
		})
	},
	// end of list workshop attendance

	// start get list symposia attendance
	// getSymposiaAttendanceList({}, id){
	// 	return new Promise((resolve, reject) => {
	// 	this.$axios.get(`/vcc/symposia/attendance/${id}`)
	// 		.then(res => {
	// 			// console.log(res)
	// 			resolve(res)
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 			reject(err)
	// 		})
	// 	})
	// },
	// end of list workshop attendance

	getSymposiaCategorizedEvents() {
		return new Promise((resolve, reject) => {
			this.$axios.get(`/vcc/symposia/categorized-events`)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err.response.data.message)
			})
		})
	},
	getLecture({}, slug) {
        return new Promise((resolve, reject) => {
            this.$axios.get(`/vcc/industry-lectures/${slug}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },

  getCategoryListDefaultEPoster({commit}){
    return new Promise((resolve, reject) => {
      this.$axios.get('/vcc/workshop/e-poster')
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

  getCategoryListDefaultFreePaper({commit}){
    return new Promise((resolve, reject) => {
      this.$axios.get('/vcc/workshop/free-paper')
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

  getList({commit}){
    return new Promise((resolve, reject) => {
      this.$axios.get('/vcc/workshop/get-list')
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
}

