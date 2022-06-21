const authReducer = (state = { authData: null}, action) => {
    switch(action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({...action?.payload.result }));
            localStorage.setItem('token', JSON.stringify(action?.payload.token));
            return {...state, authData: action?.payload};
        case 'LOGOUT': 
            localStorage.clear();

            return {...state, authData: null};
        
        case 'USER_LOGIN_FAILED': 
            return {
                error: action.payload
            }
        case 'USER_SIGNUP_FAILED': 
            return {
                error: action.payload
            }
        default: 
            return state;
    }
};

export default authReducer;