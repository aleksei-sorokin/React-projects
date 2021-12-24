import { $authHost, $host } from "./index";
// import jwt_decode from 'jwt-decode';


export const createType = async (type) => {
	const {data} = await $authHost.post('api/type')
	return data
}

export const fetchType = async () => {
	const {data} = await $host.get('api/type')
	return data
}

export const createBrand = async (brand) => {
	const {data} = await $authHost.post('api/brand')
	return data
}

export const fetchBrand = async () => {
	const {data} = await $host.get('api/brand')
	return data
}

export const createProduct = async (product) => {
	const {data} = await $authHost.post('api/device', product)
	return data
}

export const fetchProducts = async () => {
	const {data} = await $host.get('api/device')
	return data
}


export const fetchProduct = async (id) => {
	const {data} = await $host.get('api/device/' + id)
	return data
}
