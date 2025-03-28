//Функцію для створення, рендеру або видалення розмітки
import refs from './refs';

export function renderCategories(categories) {
  categories.unshift('all');
  //categories.unshift('not-res-category');//for test
  const markup = categories
    .map(category => {
      return `<li class="categories__item">
        <button class="categories__btn" type="button">${category}</button>
      </li>`;
    })
    .join('');

  refs.categoryList.insertAdjacentHTML('beforeend', markup);
}

export function renderProducts(products) {
  refs.products.innerHTML = '';
  if (products.length === 0) {
    refs.notFound.classList.add('not-found--visible');
    return;
  }
  refs.notFound.classList.remove('not-found--visible');
  const markup = products
    .map(({ id, thumbnail, title, brand, category, price }) => {
      return `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
    <p class="products__category">Category:${category} </p>
    <p class="products__price">Price: $${price} </p>
 </li>`;
    })
    .join('');

  refs.products.insertAdjacentHTML('beforeend', markup);
}
