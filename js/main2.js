const tabsItem= document.querySelectorAll('.tabs__btn-item');
const tabsContent= document.querySelectorAll('.tabs__content-item');

tabsItem.forEach((element)=>{
  element.addEventListener('click', open);
})

function open(event){
  const tabTarger=event.currentTarget;/*Отримуємо той обєкт на який ми нажали*/
  const button= tabTarger.dataset.button;/*Дивимось що написано в дата атрибуті */
  tabsItem.forEach((item)=>{
    item.classList.remove('tabs__btn-item--active');
  });
  tabTarger.classList.add('tabs__btn-item--active');

  tabsContent.forEach((item)=>{
    item.classList.remove('tabs__content-item--active');
  });
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}
