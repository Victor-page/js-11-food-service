const refs = {
  checkbox: document.querySelector('input.js-switch-input'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const whetherCheckedCheckbox = localStorage.getItem('isChecked');
//console.log(whetherCheckedCheckbox);
if (whetherCheckedCheckbox === 'true') {
  refs.checkbox.checked = whetherCheckedCheckbox;
  console.log(refs.checkbox.checked);
  addClassDarkTheme();
} else {
  addClassLightTheme();
}

refs.checkbox.addEventListener('change', e => {
  const checkbox = e.currentTarget;
  localStorage.setItem('isChecked', checkbox.checked);
  addClassDarkTheme();
  addClassLightTheme();
});

function addClassDarkTheme() {
  refs.body.classList.toggle(Theme.DARK);
}

function addClassLightTheme() {
  refs.body.classList.toggle(Theme.LIGHT);
}
