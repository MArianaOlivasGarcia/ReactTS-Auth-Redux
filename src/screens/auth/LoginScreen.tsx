import { FormEvent } from "react";
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";



export const LoginScreen = () => {

	const dispatch = useDispatch();

	const [ formValues, handleInputChange ] = useForm({
		email: 'test1@test.com',
		password: '123456'
	})

	const { email, password } = formValues;

	const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
		e.preventDefault()
		dispatch( startLogin(email, password) )

	}

    return (
        <form 
			className="login100-form validate-form flex-sb flex-w"
			onSubmit={ handleSubmit }>
			
			<div style={{
				width: '100%',
				justifyContent: 'center',
				display: 'flex',
			}} className="mb-3">
				<img width='250' src='https://ekinbe.com/blog/wp-content/uploads/2018/09/react-redux.png' alt="" />
			</div>
			
			<span className="login100-form-title mb-3">
				INICIAR SESIÓN
			</span>
			
			<div className="wrap-input100 validate-input mb-3">
				<input 
					className="input100" 
					type="email" 
					name="email" 
					placeholder="Email" 
					value={ email }
					onChange={ handleInputChange } />
				<span className="focus-input100"></span>
			</div>
			
			
			<div className="wrap-input100 validate-input mb-3">
				<input 
					className="input100" 
					type="password" 
					name="password" 
					placeholder="Password" 
					value={ password }
					onChange={ handleInputChange } />
				<span className="focus-input100"></span>
			</div>
			
			<div className="row mb-3">
				<div className="col">
					<input 
						className="input-checkbox100" 
						id="ckb1" 
						type="checkbox" 
						name="remember-me" />
					<label className="label-checkbox100">
						Recordarme
					</label>
				</div>

				<div className="col text-right">
					<Link to='/auth/register' className="txt1">
						¿No tienes una cuenta?
					</Link>
				</div>
			</div>

			<div className="container-login100-form-btn m-t-17">
				<button 
					className="login100-form-btn"
					type="submit">
					Iniciar sesión
				</button>
			</div>

		</form>
    )
}
