import * as api from '../api';

export const getTickets = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTickets();

        if (data.message) {
            localStorage.clear();

            window.location = "/"
        }
        else {
            dispatch({ type: 'FETCH_ALL', payload: data })
        }
    } catch (error) {
        console.log(error.message);
    }

}

export const createTicket = (ticket) => async (dispatch) => {

    try {
        const { data } = await api.createTicket(ticket);

        console.log(data);

        if (data.message) {
            localStorage.clear();

            window.location = "/signin"
        }

        else {
            dispatch({ type: 'CREATE', payload: data })
        }

    } catch (error) {
        console.log(error);
    }
}

export const updateTicket = (id, ticket) => async (dispatch) => {
    try {
        const { data } = await api.updateTicket(id, ticket);

        if (data.message) {
            localStorage.clear();

            window.location = "/"
        }

        else {
            dispatch({ type: 'UPDATE', payload: data })
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteTicket = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteTicket(id);

        if (data.message) {
            localStorage.clear();

            window.location = "/"
        }

        else {
            dispatch({ type: 'DELETE', payload: data })
        }

    } catch (error) {
        console.log(error);
    }
}