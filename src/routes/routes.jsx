import { Route, Redirect, Switch } from 'react-router-dom'
import { ProductList } from '../components/products/ProductList'
import { Login } from '../components/login/Login'
import { FrontPage } from '../pages/frontpage/frontPage'


export const Routes = () => {
    return (
        <Switch>
            <Route path='/Frontpage'>
                <FrontPage />
            </Route>
            <Route path='/Housesforsale'>
                <ProductList />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>



            <Route path='/' exact>
                <Redirect to='/Frontpage' />
            </Route>
            <Route path='/'>
                <h2>404 Page is not found....</h2>
            </Route>
        </Switch>
    )
}