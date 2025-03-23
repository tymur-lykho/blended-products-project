// Функції, які передаються колбеками в addEventListners
import refs from './refs';
import {
  getProducts,
  getProductsByCategory,
  getProductsBySearchQuery,
} from './products-api';
import { renderProducts } from './render-function';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export async function handleClickbyCategory(event) {
  let data;
  const btn = event.target;
  if (btn.nodeName === 'BUTTON') {
    const currentCategory = btn.textContent;
    clearCategoryBtns();
    btn.classList.add('categories__btn--active');
    if (currentCategory !== 'all') {
      data = await getProductsByCategory(currentCategory);
    } else {
      data = await getProducts();
    }
    renderProducts(data);
  }
}

export async function handleSubmitForm(event) {
  event.preventDefault();
  const form = event.target;
  const query = form.elements['searchValue'].value.trim();
  if (!query) {
    iziToast.info({
      title: 'Info',
      position: 'topRight',
      message: 'Enter a search term!',
    });
    return;
  }
  const data = await getProductsBySearchQuery(query);
  clearCategoryBtns();
  renderProducts(data);
}

export async function handleClearForm() {
  refs.searchForm.elements['searchValue'].value = '';
  const data = await getProducts();
  clearCategoryBtns();
  renderProducts(data);
}

function clearCategoryBtns() {
  const categoryBtns = document.querySelectorAll('.categories__btn--active');
  for (let btn of categoryBtns) {
    btn.classList.remove('categories__btn--active');
  }
}
