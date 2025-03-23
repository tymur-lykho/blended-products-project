import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';
import { getCategories, getProducts } from './js/products-api';
import {
  handleClickbyCategory,
  handleSubmitForm,
  handleClearForm,
} from './js/handlers';

//Логіка сторінки Home
renderCategories(await getCategories());
renderProducts(await getProducts());

refs.categoryList.addEventListener('click', handleClickbyCategory);

refs.searchForm.addEventListener('submit', handleSubmitForm);

refs.clearFormBtn.addEventListener('click', handleClearForm);
