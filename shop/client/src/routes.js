import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Shop from './pages/Shop'
import { admin_route, cart_route, login_route, product_route, register_route, shop_route } from './utils/consts'

export const authRoutes = [
	{
		path: admin_route,
		Component: Admin
	},
	{
		path: cart_route,
		Component: Cart
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