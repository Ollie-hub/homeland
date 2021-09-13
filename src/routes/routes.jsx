import { Route, Redirect, Switch } from 'react-router-dom'
import { ProductList } from '../components/products/ProductList'
import { StandardForm } from '../components/form/Form'
import { Login } from '../components/login/Login'
import { Cart } from '../components/Cart/Cart'

export const Routes = () => {
    return (
        <Switch>
            <Route path='/Frontpage'>

            </Route>
            <Route path='/Products'>
                <ProductList />
            </Route>
            <Route path='/Form'>
                <StandardForm />
            </Route>
            <Route path="Cart">
                <Cart />
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