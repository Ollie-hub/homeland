import { Route, Redirect, Switch } from 'react-router-dom'
import { ProductDetails } from '../components/products/ProductDetails'
import { ProductList } from '../components/products/ProductList'
import { FrontPage } from '../pages/frontpage/frontPage'
import { LoginPage } from '../pages/loginpage/loginPage'


export const Routes = () => {
    return (
        <Switch>
            <Route path='/Frontpage' exact>
                <FrontPage />
            </Route>
            <Route path='/Housesforsale' exact>
                <ProductList />
            </Route>
            <Route path='/Housesforsale/:HouseAddress' exact>
                <ProductDetails />
            </Route>
            <Route path="/Login" exact>
                <LoginPage />
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