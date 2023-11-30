export default class LoadSpinner {
  loader;
  container;

  constructor() {
    this.container = document.createElement('div');
    this.container.classList.add('loader-container', 'is-hidden');

    this.loader = this.createLoader();
    this.container.appendChild(this.loader);
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');
    return loader;
  }

  show(container) {
    container.style.position = 'relative';
    container.appendChild(this.container);
    this.container.classList.remove('is-hidden');
  }

  hide() {
    this.container.classList.add('is-hidden');
  }

  remove() {
    this.container.parentNode.removeChild(this.container);
  }

  hideAndRemove() {
    this.hide();
    this.remove();
  }
}
