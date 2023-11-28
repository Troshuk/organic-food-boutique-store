

export default class LoadSpinner {
  constructor({ loader }) {
    this.loader = loader;
  }

  show() {
    if (this.loader) {
      this.loader.classList.remove('is-hidden');
    }
  }

  hide() {
    if (this.loader) {
      this.loader.classList.add('is-hidden');
    }
  }


  async fetchData(requestFunction) {
    try {
        this.show();
          
      const data = await requestFunction();
      console.log('Отримані дані:', data);
    } catch (error) {
      console.error('Помилка отримання даних:', error);
    } finally {
      this.hide();
    }
  }
}


