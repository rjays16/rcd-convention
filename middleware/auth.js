export default function({ store, redirect, route }) {
    if(!store.state.auth.token) {
        return redirect('/');
    }

    setTimeout(() => {
        let user = store.state.auth.user
        if(user) {
            let vcc_route_base = 'virtual-convention-center'
            let route_set = route
            let member = user.member
            
            if(member && member.limit_convention_access && route_set.name.includes(vcc_route_base)) {
                return redirect('/profile');
            }
        }
    }, 2000);
}