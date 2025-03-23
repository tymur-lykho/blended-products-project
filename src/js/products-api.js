// Функції для роботи з бекендом
import axios from 'axios';

const URL_CATEGORIES = 'https://dummyjson.com/products/category-list';

export async function getCategories() {
  const res = await axios.get(URL_CATEGORIES);
  return res.data;
}
