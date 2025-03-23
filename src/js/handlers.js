// Функції, які передаються колбеками в addEventListners
import { getProductsByCategory } from './products-api';
import refs from './refs';
import { renderProducts } from './render-function';

export async function handleClickbyCategory(event) {
  if (event.target.nodeName === 'BUTTON') {
    const currentCategory = event.target.textContent;
    event.target.classList.add('categories__btn--active');
    const dataCategory = await getProductsByCategory(currentCategory);
    refs.products.innerHTML = '';
    renderProducts(dataCategory);
  }
}
