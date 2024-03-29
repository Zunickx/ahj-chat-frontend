/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable indent */
// Создает скрытый элемент, с помощью которого можно проинициализировать объект:
// вставить в этот элемент разметку блока данного объекта, найти в ней по селекторам
// необходимые элементы, сохранить их в объекте этого блока.
// указать этим элементам параметры, добавить в них текст и т.д. ...
// После завершения инициализации нужно удалить этот элемент из body ( ht.el.remove() )
// При этом главный элемент блока будет хранится в объекте и его можно вставить
// в конкретного родителя.
// Предназначен для случая, когда разметка берется из готового html файла.
// Разметку можно передать в качестве параметра.
export default class HiddenTempEl {
    constructor(html = '') {
      this.el = null;
      this.init(html);
    }
  
    init(html) {
      const bodyEl = document.getElementsByTagName('body')[0];
      this.el = document.createElement('div');
      this.el.dataset.visibility = 'hidden';
      if (html !== '') this.el.innerHTML = html;
      bodyEl.append(this.el);
    }
  }