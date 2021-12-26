import { Redirect, Route, Switch } from "react-router-dom"
import { LoginScreen } from "../screens/auth/LoginScreen"
import { RegisterScreen } from "../screens/auth/RegisterScreen"
import '../css/auth.css'


export const AuthRouter = () => {
    return (
        <div className="limiter">
		    <div className="container-login100">
		    	<div className="wrap-login100 p-t-50 p-b-90">
                
                    <Switch>
                        <Route exact path='/auth/login' component={ LoginScreen }/>
                        <Route exact path='/auth/register' component={ RegisterScreen }/>
                    
                        <Redirect to='/auth/login' />
                    </Switch>
                
                </div>
            </div>
        </div>
    )
}
