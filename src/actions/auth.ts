import { Dispatch } from "redux"
import Swal from "sweetalert2"
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { User } from "../interfaces/interfaces"
import { types } from "../types/types"



export const startRegister = ( name: string , email: string, password: string ) => {
    
    return async( dispatch: Dispatch ) => {

        const resp = await fetchWithoutToken('auth/register', {name, email, password}, 'POST')
        const body = await resp.json()

        if ( body.status ) {
            localStorage.setItem('accessToken', body.token )
            dispatch( register( body.user ) )
        } else {
            Swal.fire({
                icon: 'error',
                text: body.message
            })
        }


    }
}



export const startLogin = ( email: string, password: string ) => {

    return async( dispatch: Dispatch ) => {
        const resp = await fetchWithoutToken('auth/login', { email, password}, 'POST')
        const body = await resp.json()

        if ( body.status ) {
            localStorage.setItem('accessToken', body.token )
            dispatch( login( body.user ) )
        } else {
            Swal.fire({
                icon: 'error',
                text: body.message
            })
        }
    }

}


export const startIsCheking = () => {
    return async( dispatch: Dispatch ) => {
        const resp = await fetchWithToken('auth/renew')
        const body = await resp.json()

        if ( body.status ) {
            localStorage.setItem('accessToken', body.token )
            dispatch( login( body.user ) )
        } else {
            dispatch( chekingFinish() )
        }
    }
}



export const startLogout = () => {
    return ( dispatch: Dispatch ) => {

        localStorage.removeItem('accessToken')
        dispatch( logout() )

    }
}


const register = ( user: User ) => ({
    type: types.register,
    payload: user
})



const login = ( user: User ) => ({
    type: types.login,
    payload: user
})


const chekingFinish = () => ({
    type: types.chekingFinish
})


const logout = () => ({
    type: types.logout
})