import FoodBotiqueApi from './services/FoodBoutiqueApi';
import Filter from './services/Filter';
import Cart from './services/Cart';
import updateCartItemCount from './header';
import openModalProductDetails from './modal';
import LoadSpinner from './loader';
import { reRenderPopularCartIcon } from './popular-products';
import { reRenderDiscountedCartIcon } from './discounted-products';
import icons from '../img/icons.svg';

const sectionAllProducts = document.querySelector('.all-products');
const loader = new LoadSpinner(sectionAllProducts);
const markupTextBox = `<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;

function changeBtn(results) {
  document
    .querySelector('.product-list-product__list')
    .addEventListener('click', ({ target }) => {
      const cartElement = target.closest('LI');
      const cartButton = target.closest('BUTTON');

      if (cartElement?.nodeName !== 'LI') {
        return;
      }

      const productId = cartElement.dataset.productId;

      if (cartButton?.nodeName !== 'BUTTON') {
        openModalProductDetails(productId);
        return;
      }

      if (cartButton?.nodeName === 'BUTTON') {
        const isProductInCart = !!Cart.getProduct(productId);

        if (isProductInCart) {
          Cart.delete(productId);
        } else {
          Cart.add(results.find(e => e._id === productId));
        }

        updateCartItemCount();
        reRenderProductCartIcon(productId);
        reRenderPopularCartIcon(productId);
        reRenderDiscountedCartIcon(productId);
      }
    });
}

export function reRenderProductCartIcon(productId) {
  const productCard = document.querySelector(
    `.product-list-product__card[data-product-id="${productId}"]`
  );

  if (!productCard) return;

  const isProductInCart = !!Cart.getProduct(productId);

  productCard.querySelector('.product-list-icon__btn').style.display =
    isProductInCart ? 'none' : 'block';
  productCard.querySelector('.product-list-icon__btn-added').style.display =
    isProductInCart ? 'block' : 'none';
}

function renderProductCards({ page, totalPages, results }) {
  const markup = results
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        popularity,
        is10PercentOff,
      }) => {
        const isProductInCart = !!Cart.getProduct(_id);

        return `<li class="product-list-product__card" data-product-id=${_id}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${is10PercentOff ? '' : 'display:none'}"
      >
        <use href="${icons}#icon-discount"></use>
      </svg>
      <div class="product-list-box__img">
        <img
          class="product-list-card__image"
          src="${img}"
          alt="${name}"
          width="140"
          height="140"
        />
      </div>
      <div class="product-list-info__box">
        <h3 class="product-list-name__product">${name}</h3>
        <div class="product-list-info">
          <p class="product-list-info__item">
            <span class="product-list-span__text">Category:</span>
            <span>${category.replaceAll('_', ' ')}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${size}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${popularity}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">$${price.toFixed(2)}</p>
        <button type="button" class="product-list-button__card" arial-label="product button">
          <svg
            class="product-list-icon__btn"
            width="18"
            height="18"
            style="${isProductInCart ? 'display:none' : ''}"
          >
            <use href="${icons}#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${isProductInCart ? 'display:block' : 'display:none'}"
          >
            <use href="${icons}#icon-check"></use>
          </svg>
         </button>
      </div>
    </li>`;
      }
    )
    .join('');

  let paginationDiv = '';

  if (totalPages > 1) {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    // If there are only 5 pages, then display all numbers
    if (totalPages !== 5) {
      // If current page is first or last 2 pages of the pagination
      if (page <= 2 || totalPages - page < 2) {
        // Replace all the numbers in between first 2 and last 2 page numbers with ...
        pages.splice(2, totalPages - 4, '...');
      } else {
        // If this is 3rd number from the end, then just leave them as is, don't do replacement with ...
        if (pages.length - page !== 2) {
          // Replace all number in between the current page and the last page
          pages.splice(page, pages.length - page - 1, '...');
        }

        // If this is 3rd number from the beginning, then just leave them as is, don't do replacement with ...
        if (page !== 3) {
          // Replace all number in between the first page and the current
          pages.splice(1, page - 2, '...');
        }
      }
    }

    const pageItems = pages
      .map(
        number =>
          `<li class="product-list-page__item ${
            number === page ? 'active' : number === '...' ? 'not-number' : ''
          }" data-page-number="${number}">${number}</li>`
      )
      .join('');

    paginationDiv = `
      <div class="product-list-pagination">
          <ul class="product-list-pagination__list">
            <li
              class="product-list-page__item nav__btn"
              data-page-number="left"
              ${page === 1 ? 'disabled' : ''}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
            </li>
            <ul class="product-list-page__numbers">
              ${pageItems}
            </ul>
            <li
              class="product-list-page__item nav__btn"
              data-page-number="right"
              ${page === totalPages ? 'disabled' : ''}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `;
  }

  sectionAllProducts.innerHTML = `
      <ul class="product-list-product__list">
        ${markup}
      </ul>
      ${paginationDiv}
  `;

  if (paginationDiv) {
    document
      .querySelector('.product-list-pagination__list')
      .addEventListener('click', ({ target }) => {
        const pageElement = target.closest('LI');

        if (pageElement?.nodeName !== 'LI') {
          return;
        }

        let pageNumber = pageElement.dataset.pageNumber;

        if (pageNumber === '...') {
          return;
        }

        if (pageNumber === 'left') {
          pageNumber = page > 1 ? page - 1 : page;
        }

        if (pageNumber === 'right') {
          pageNumber = totalPages - page > 0 ? page + 1 : page;
        }

        Filter.setPage(pageNumber);
        fetchProducts();
        windowScrollToSection('#filters');
      });
  }
}

export async function fetchProducts() {
  try {
    loader.show();
    const data = await FoodBotiqueApi.getProducts(Filter.get());

    if (data.results.length) {
      renderProductCards(data);
      changeBtn(data.results);
    } else {
      sectionAllProducts.innerHTML = markupTextBox;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loader.remove();
  }
}

function windowScrollToSection(selector) {
  const section = document.querySelector(selector);
  const header = document.querySelector('.header');

  if (section) {
    window.scrollTo({
      top: section.offsetTop - header.offsetHeight,
      behavior: 'smooth',
    });
  }
}
