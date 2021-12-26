
const baseUrl = process.env.REACT_APP_API_URL

export const fetchWithoutToken = ( endpoint: string, data: {}, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })
    }

}



export const fetchWithToken = ( endpoint: string, data?: {}, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoint }`
    const accessToken = localStorage.getItem('accessToken') || ''

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                accessToken
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                accessToken
            },
            body: JSON.stringify( data )
        })
    }

}

