//Функцію для створення, рендеру або видалення розмітки
import refs from './refs';

export function renderCategories(categories) {
  categories.unshift('all');
  const markup = categories
    .map(category => {
      return `<li class="categories__item">
        <button class="categories__btn" type="button">${category}</button>
      </li>`;
    })
    .join('');

  refs.categoryList.insertAdjacentHTML('beforeend', markup);
}
