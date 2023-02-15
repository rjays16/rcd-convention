export const state = () => ({
});

export const getters = {
}

export const mutations = {
}

export const actions = {
    getSponsorBySlug({}, slug) {
        return new Promise((resolve, reject) => {
        this.$axios.get(`/sponsors/${slug}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    getSponsorByType({}, slug) {
        return new Promise((resolve, reject) => {
        this.$axios.get('/sponsors/type')
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    stamp({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/sponsors/stamps', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    logMemberVisit({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/sponsors/visit-logs', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
	updateTour({}, id) {
		return new Promise((resolve, reject) => {
		this.$axios.post(`/sponsors/${id}/analytics/kuula`)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err.response.data.message)
			})
		})
	},
	updateCompanyProfile({}, id) {
		return new Promise((resolve, reject) => {
		this.$axios.post(`/sponsors/${id}/analytics/company-profile`)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err.response.data.message)
			})
		})
	},
	updateVisitVexBooth({}, data) {
		return new Promise((resolve, reject) => {
		this.$axios.post(`/sponsors/${data.sponsor_id}/analytics/asset`, data)
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err.response.data.message)
			})
		})
	},
  // updateName({}, data) {
  //   return new Promise((resolve, reject) => {
  //     this.$axios.post(`/sponsors/${data.sponsor_id}/analytics/updateName`, data)
  //       .then(res => {
  //         resolve(res)
  //       })
  //       .catch(err => {
  //         reject(err.response.data.message)
  //       })
  //   })
  // },
}
