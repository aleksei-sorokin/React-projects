import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Product from './pages/Product'
import Shop from './pages/Shop'
import Basket from './pages/Basket'
import { admin_route, login_route, product_route, register_route, shop_route, basket_route } from './utils/consts'

export const authRoutes = [
	{
		path: admin_route,
		Component: Admin
	},
	{
		path: basket_route,
		Component: Basket
	}
]

export const publicRoutes = [
	{
		path: shop_route,
		Component: Shop
	},
	{
		path: login_route,
		Component: Auth
	},
	{
		path: register_route,
		Component: Auth
	},
	{
		path: product_route + '/:id',
		Component: Product
	}
]