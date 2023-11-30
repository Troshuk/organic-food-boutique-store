import Storage from './Storage';
import FoodBotiqueApi from './FoodBoutiqueApi';

const storageKey = Storage.FILTER_KEY;
const sortList = [
  { name: 'A to Z', key: 'byABC', value: true },
  { name: 'Z to A', key: 'byABC', value: false },
  { name: 'Least Expensive', key: 'byPrice', value: true },
  { name: 'Most Expensive', key: 'byPrice', value: false },
  { name: 'Least Popular', key: 'byPopularity', value: true },
  { name: 'Most Popular', key: 'byPopularity', value: false },
  { name: 'Show All', key: undefined, value: undefined },
];
const defaultSortBy = sortList[0];
const filterDefault = {
  keyword: undefined,
  category: undefined,
  sortBy: defaultSortBy,
  page: 1,
  limit: 9,
};
const POPULAR_PRODUCTS_LIMIT = 5;

export default class Filter {
  // Get all current filter properties
  static get() {
    return Storage.get(storageKey) ?? filterDefault;
  }

  // Get one property of the filter by key
  static getValueByKey(key) {
    return Filter.get()[key];
  }

  // Get list of categories [Promise]. Will fetch from storage when available
  static async getCategories() {
    let categories = Storage.get(Storage.CATEGORIES_KEY);

    // If categories have not been loaded yet, fetch them from the API and store
    if (!categories) {
      try {
        categories = await FoodBotiqueApi.getCategories();
        // Remove bad duplicated categories that have a space instead of _
        categories = categories.filter(category => !category.includes(' '));
        Storage.set(Storage.CATEGORIES_KEY, categories);
      } catch (error) {
        console.error('FoodBotiqueApi.getCategories error', error);
      }
    }

    return categories ?? [];
  }

  // Get list of object options to sort by
  static getSortList() {
    return sortList;
  }

  // Get list of discounted products [Promise]. Will fetch from storage when available
  static async getDiscountedProducts(limit = 2) {
    let products = Storage.getWithExpiry(Storage.DISCOUNTED_PRODUCTS_KEY);

    // If products have not been loaded yet, fetch them from the API and store
    if (!products) {
      try {
        products = await FoodBotiqueApi.getDiscountedProducts();
        Storage.setWithExpiry(Storage.DISCOUNTED_PRODUCTS_KEY, products);
      } catch (error) {
        console.error('FoodBotiqueApi.getDiscountedProducts error', error);
      }
    }

    return products.sort(() => Math.random() - 0.5).slice(0, limit) ?? [];
  }

  // Get list of popular products [Promise]. Will fetch from storage when available
  static async getPopularProducts(limit = 5) {
    let products = Storage.getWithExpiry(Storage.POPULAR_PRODUCTS_KEY);

    // If products have not been loaded yet, fetch them from the API and store
    if (!products) {
      try {
        products = await FoodBotiqueApi.getPopularProducts(
          POPULAR_PRODUCTS_LIMIT
        );
        Storage.setWithExpiry(Storage.POPULAR_PRODUCTS_KEY, products);
      } catch (error) {
        console.error('FoodBotiqueApi.getPopularProducts error', error);
      }
    }

    // Slice based on the requeted limit
    return products.slice(0, limit) ?? [];
  }

  static setKeyword(keyword) {
    const filter = Filter.get();
    Storage.set(storageKey, {
      ...filter,
      keyword,
      page: 1,
    });
  }

  static setCategory(category) {
    const filter = Filter.get();
    Storage.set(storageKey, {
      ...filter,
      category,
      page: 1,
    });
  }

  static setPage(page) {
    const filter = Filter.get();
    Storage.set(storageKey, {
      ...filter,
      page,
    });
  }

  static setLimit(limit) {
    const filter = Filter.get();
    Storage.set(storageKey, {
      ...filter,
      limit,
      page: 1,
    });
  }

  static setSortBy(sortKey, sortValue) {
    const filter = Filter.get();
    console.log(sortKey, sortValue);
    Storage.set(storageKey, {
      ...filter,
      page: 1,
      sortBy: sortList.find(
        option =>
          option.key === sortKey && option.value === JSON.parse(sortValue)
      ),
    });
  }

  // Reset filter to default values
  static reset() {
    Storage.set(storageKey, filterDefault);
  }
}
