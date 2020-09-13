import './js/theme';
import menu from './menu.json';
import dishItemTemplate from './templates/dish-item.hbs';

import './styles.css';

console.log(menu);
//console.log(dishItemTemplate);

const refs = {
  menu: document.querySelector('.js-menu'),
};

//const markup = dishItemTemplate(menu[7]);
//console.log(markup);

//refs.menu.insertAdjacentHTML('beforeend', markup);

function buildDish(menu) {
  const markup = menu.map(dishItem => dishItemTemplate(dishItem)).join('');
  //console.log(markup);
  refs.menu.insertAdjacentHTML('beforeend', markup);
}
buildDish(menu);
