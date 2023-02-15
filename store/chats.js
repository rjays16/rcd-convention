export const state = () => ({
    messages: [],
});

export const getters = {
    getMessages: (state) => {
        return state.messages;
    },
};

export const mutations = {
    SET_MESSAGES(state, data) {
        state.messages = data;
    },
};

export const actions = {
    getMessages({commit}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('sponsors/chat/messages', {'user_id': data.sponsor_id})
            .then(res => {
                // commit('SET_MESSAGES', res.data);
                resolve(res)
            })
            .catch(err => {
                // commit('SET_MESSAGES', []);
                reject(err.response.data.message)
            })
        })
    },
    sendMessage({}, data){
        return new Promise((resolve, reject) => {
            this.$axios.post('sponsors/chat/send-message', {'receiver_id':data.receiver_id, 'message':data.message})
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    updateMemberSponsorSession({}, data){
        return new Promise((resolve, reject) => {
            this.$axios.post('sponsors/chat/update-status', {'status_id':data.status_id, 'session_id':data.session_id})
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data)
            })
        })
    },
};