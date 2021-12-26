import { Redirect, Route } from "react-router-dom"



interface Props {
    isAuthenticated: boolean
    component: () => JSX.Element
    path: string
}


export const PublicRouter = ({ isAuthenticated, component: Component, ...rest }: Props) => {
    return (
        <div>
            <Route 
                { ...rest } 
                component={ ( props: any ) => (
                    ( !isAuthenticated )
                        ? <Component { ...props } />
                        : <Redirect to='/' />
                )}
            />
        </div>
    )
}
