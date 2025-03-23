// Функції для роботи з бекендом
import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';
const URL_CATEGORIES = 'https://dummyjson.com/products/category-list';


export async function getCategories() {
  const res = await axios.get(URL_CATEGORIES);
  return res.data;
}

export async function getProducts(currentPage = 1) {
  const res = await axios.get(`${BASE_URL}?limit=12&skip=${(currentPage - 1) * 12}`);
  return res.data.products;
}

