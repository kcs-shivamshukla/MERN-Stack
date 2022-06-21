import * as api from '../api';

export const signin = (formData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: 'AUTH', payload: data});

        navigate('/Dashboard');
    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAILED', payload: error.response.data})
    }
}

export const signup = (formData, navigate) => async(dispatch) => {
    try {
           
        const { data } = await api.signUp(formData);

        dispatch({type: 'AUTH', payload: data});

        navigate('/Dashboard');
    } catch (error) {
        dispatch({type: 'USER_SIGNUP_FAILED', payload: error.response.data})
    }
}