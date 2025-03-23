import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';
import { getCategories, getProducts } from './js/products-api';
import { handleClickbyCategory } from './js/handlers';

console.log(await getProducts());
//Логіка сторінки Home
renderCategories(await getCategories());
renderProducts(await getProducts());

refs.categoryList.addEventListener('click', handleClickbyCategory);
