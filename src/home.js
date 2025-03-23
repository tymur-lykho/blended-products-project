// import refs from './js/refs';
import { renderCategories } from './js/render-function';
import { getCategories } from './js/products-api';

//Логіка сторінки Home
renderCategories(await getCategories());
