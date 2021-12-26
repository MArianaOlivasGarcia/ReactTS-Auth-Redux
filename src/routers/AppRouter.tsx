
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { startIsCheking } from '../actions/auth'
import { RootState } from '../reducers/rootReducer'
import { DashboardScreen } from '../screens/dashboard/DashboardScreen'
import { AuthRouter } from './AuthRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {


    const dispatch = useDispatch();
    
    const { isCheking, isLogged } = useSelector((state: RootState) => state.auth )

    useEffect(() => {
        
        // Checando si el token es valido
        dispatch( startIsCheking() )

    }, [ dispatch ])


    if ( isCheking ) {
        return (
            <div className='row justify-content-center' style={{
                height: '100vh',
                alignItems: 'center'
            }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
      )
    }

    return (
        <Router>
            <div>

                <Switch>
                    <PublicRouter 
                        isAuthenticated={ isLogged }
                        path='/auth' 
                        component={ AuthRouter } 
                    />
                    <PrivateRouter 
                        isAuthenticated={ isLogged }
                        path='/'
                        component={ DashboardScreen }
                    />

                    <Redirect to='/'/>
                </Switch>

            </div>
        </Router>
    )


}