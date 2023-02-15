export const state = () => ({
    first_name: null,
    middle_name: null,
    last_name: null,
    certificate_name: null,

    email: null,
    password: null,
    confirm_password: null,

    country: "Philippines",
    role: null,

    pma_number: null,
    prc_license_number: null,
    prc_expiration_date: null,
    pds_number: null,

    type: null,
    type_name: null,

    has_agreed: false,

    is_interested_for_ws: false,
    ws_to_attend: null,

    resident_certificate: null,
    training_institution: null,

    ideapay_fee: null,
    total_amount: null,
    workshop_fee: null,
    registration_fee: null,
    reg_and_ws_fee: null,
    is_free: false,
    order_id: null,
    ideapay_url: null,

    title: null,
    structured_abstract: null,
    keywords: null,
    conflict_interest: null,
    commercial_funding: null,
    abstract_date: null,
    category: null,
    study_design: null,

    author_lastname: null,
    author_firstname: null,
    author_city: null,
    author_country: null,
    author_email: null,
    institution: null,
    department: null,
    affiliation_city: null,
    affiliation_country: null,
    submission_date: null,
    user_id: null,

    error_header: `<p class="avenir-regular text-center"><b>Sorry, but we are having some issues.</b><br><br>`,
    error_body: `<p>Otherwise, your records from the RCD Registration Committee may not yet be in our system.
    Please input your First Name and Last Name correctly if you are a:</p><br>
    <ul>
        <li>Speaker / Session Workshop Chair</li>
        <li>International LADS Officers and Board of Directors</li>
        <li>Local PDS Council of Advisers (CoA), Board of Directors (BoD) and the Organizing Committee (Org. Comm)</li>
        <li>Local PDS Members in Good Standing</li>
        <li>Local Residents of Accredited Training Institutions</li>
        <li>Local Residents of Applicant Institutions</li>
    </ul>
    <p>If your issue is not mentioned above, please contact our technical support service provider at <a href="mailto:registration@rcd2022manila.com.ph"> <b>registration@rcd2022manila.com.ph </b></a>.</p>
    <p>You will now be redirected back to the registration page.</p>
    `
});

export const mutations = {
    SET_INTL_DELEGATE_FORM_TITLE(state, data) {
        state.intl_delegate_form_title = data
        // console.log('INTL_DELEGATE_FORM_TITLE', state.intl_delegate_form_title)
    },
    SET_TYPE(state, data) {
        state.type = data.id
        state.type_name = data.name
        console.log("Registration Type", state.type)
    },
    SET_ORDER_ID(state, data) {
        state.order_id = data
    },
    SET_FREE_FLAG(state, data) {
        state.is_free = data
    },
    SET_IDEAPAY_URL(state, data) {
        state.ideapay_url = data
    },
    SET_REGISTRATION_INFO(state, data) {
        state.first_name = data.first_name
        state.middle_name = data.middle_name
        state.last_name = data.last_name
        state.certificate_name = data.certificate_name

        state.email = data.email
        state.password = data.password
        state.confirm_password = data.confirm_password

        state.country = data.country
        state.role = data.role

        state.pma_number = data.pma_number
        state.prc_license_number = data.prc_license_number
        state.prc_expiration_date = data.prc_expiration_date
        state.pds_number = data.pds_number

        state.type = data.type
        state.has_agreed = data.has_agreed
        state.is_interested_for_ws = data.is_interested_for_ws
        state.ws_to_attend = data.ws_to_attend

        state.resident_certificate = data.resident_certificate
        state.training_institution = data.training_institution

        state.title = data.title
        state.structured_abstract = data.structured_abstract
        state.keywords = data.keyword
        state.conflict_interest = data.conflict_interest
        state.commercial_funding = data.commercial_funding
        state.abstract_date = data.abstract_date
        state.category = data.category
        state.study_design = data.study_design
        state.submission_date = data.submission_date
        state.author_lastname = data.author_lastname
        state.author_firstname = data.author_firstname
        state.author_city = data.author_city
        state.author_country = data.author_country
        state.author_email = data.author_email
        state.institution = data.institution
        state.department = data.department
        state.affiliation_city = data.affiliation_city
        state.affiliation_country = data.affiliation_country
        state.user_id = data.user_id
	},
    SET_RATE_INFO(state, data) {
        console.log(data);
        state.registration_fee = data.registration_fee;
        state.workshop_fee = data.workshop_fee;
		state.ideapay_fee = data.ideapay_fee;
		state.total_amount = data.total_amount;
        state.reg_and_ws_fee = data.reg_and_ws_fee;
	},
    RESET_FORM(state) {
        state.first_name = null,
        state.middle_name = null,
        state.last_name = null,
        state.certificate_name = null,

        state.email = null,
        state.password = null,

        state.country = "Philippines",
        state.role = null,

        state.pma_number = null,
        state.prc_license_number = null,
        state.prc_expiration_date = null,
        state.pds_number = null,

        state.type = null,
        state.has_agreed = false,

        state.is_interested_for_ws = null,
        state.ws_to_attend = null,
        state.is_free = false
    },
};

export const actions = {
    registerMember({state}, data) {
        return new Promise((resolve, reject) => {
            data['type'] = state.type;
            this.$axios.post('/register', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    registerVIP({state}, data) {
        return new Promise((resolve, reject) => {
            data['type'] = state.type;
            this.$axios.post('/register/vip', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    registerDelegateWalkIn({state}, data) {
        data['type'] = state.type;
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/delegate/walkin', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    registerDelegateExisting({state}, data) {
        data['type'] = state.type;
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/delegate/existing', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    getRatesInfo({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.get('/order/rates', { params: { 'order_id': data }})
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    createIdeapay({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/ideapay', data )
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
    createFreePayment({}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/register/payment/free', data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.response.data.message)
            })
        })
    },
};