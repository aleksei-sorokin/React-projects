import { $authHost, $host } from './index';
// import jwt_decode from 'jwt-decode';

export const createType = async (type) => {
  const { data } = await $authHost.post('api/type', type);
  return data;
};

export const fetchType = async () => {
  const { data } = await $host.get('api/type');
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post('api/brand', brand);
  return data;
};

export const fetchBrand = async () => {
  const { data } = await $host.get('api/brand');
  return data;
};

export const createProduct = async (product) => {
  const { data } = await $authHost.post('api/device', product);
  return data;
};

export const basket = async (basket) => {
  const {data} = await $authHost.post('api/basket', basket);
  return data;
}

export const basketGet = async (id) => {
  const {data} = await $authHost.get('api/basket', id);
  return data;
}

export const rating = async (rating) => {
  const {data} = await $authHost.post('api/rating', rating);
  return data;
}

export const fetchProducts = async (typeId, brandId, page, limit = 5) => {
  const { data } = await $host.get('api/device', {
    params: {
      typeId,
      brandId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await $host.get('api/device/' + id);
  return data;
};
