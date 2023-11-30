export default class LoadSpinner {
  loader;
  container;

  constructor(container = null) {
    this.createLoader();
    this.container = container;
  }

  createLoader() {
    const loader = document.createElement('div');
    loader.classList.add('loader');

    this.loader = document.createElement('div');
    this.loader.classList.add('loader-container');
    this.loader.appendChild(loader);
  }

  show() {
    this.container.style.position = 'relative';
    this.container.appendChild(this.loader);
  }

  remove() {
    this.loader.remove();
  }
}
