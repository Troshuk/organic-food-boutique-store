


export default class LoadSpinner {
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

//   show(container) {
//     container.appendChild(this.container);
//     this.container.classList.remove('is-hidden');
//   }

//   hide() {
//     this.container.classList.add('is-hidden');
    //   }
    
    show(container) {
  console.log('Showing loader');
  container.appendChild(this.container);
  
}

hide() {
  console.log('Hiding loader');
  this.container.classList.add('is-hidden');
}
}
