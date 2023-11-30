import{u as f,C as c,i as d,F as q}from"./icons-263a26ae.js";const S=document.querySelector(".success-modal-close-btn"),y=document.querySelector(".success-blackdrop"),L=document.querySelector(".success-modal-title"),E=document.querySelector(".success-modal-text");function b(e,t,s=()=>{}){L.textContent=t?"Order success":"Order error",E.textContent=e,document.body.classList.add("is-modal-open"),y.classList.remove("is-hidden"),S.addEventListener("click",function(){y.classList.add("is-hidden"),document.body.classList.remove("is-modal-open"),s()})}f();const $=document.querySelector(".cart"),x=document.querySelector(".empty-cart"),k=document.querySelector(".cart-delete-button"),I=document.querySelector(".cart-sum span"),P=document.querySelector(".cart-added-list"),v=document.querySelector(".cart-basket-input"),C=document.querySelector(".checkout-field");v.value=c.getEmail();function g(){c.clearCart(),m()}k.addEventListener("click",g);C.addEventListener("submit",z);v.addEventListener("focusout",F);h();function m(){f(),h()}function B(){x.style.display="block",$.style.display="none"}function h(){if(c.getCount()===0){B();return}const e=c.getProducts();T(e),M()}function T(e){let t=document.querySelector(".cart-basket-list");t&&t.remove(),t=document.createElement("ul"),t.className="cart-basket-list",e.forEach(s=>{const o=w(s);t.appendChild(o)}),P.appendChild(t),t.addEventListener("click",({target:s})=>{const o=s.closest("LI");if(!o)return;const i=s.closest(".cart-product-delete-button"),u=s.closest(".minus-btn"),l=s.closest(".plus-btn");if(!i&&!u&&!l){console.log("wrong click");return}const r=o.dataset.productId;if(i){c.delete(r),m();return}const n=o.querySelector(".quantity"),p=c.getProduct(r).product;if(u){const a=n.textContent-1;n.textContent=a,a<1?(n.textContent=1,c.delete(r)):c.update(p,a)}else{const a=Number(n.textContent)+1;n.textContent=a,c.update(p,a)}m()})}function w({product:e,productId:t,amount:s}){const{name:o="Product name",category:i="Category",size:u="Size",price:l=0,img:r=""}=e,n=document.createElement("li");return n.classList.add("cart-basket-item"),n.dataset.productId=t,n.innerHTML=`
    <button class="cart-product-delete-button" type="button" arial-label="cart product delete">
      <svg class="cart-delete-product-icon" width="18" height="18">
        <use href="${d}#icon-x-close" data-product-id="${t}"></use>
      </svg>
    </button>
    <div class="image-cart-thumb">
      <img class="cart-image" src="${r}" alt="${o}" width="64" />
    </div>
    <div class="cart-description-thumb">
      <h3 class="cart-product-name">${o}</h3>
      <div class="cart-text-description-container">
        <p class="cart-product-description">
          Category:
          <span class="category cart-description">${i}</span>
        </p>
        <p class="cart-product-description">
          Size:
          <span class="size cart-description">${u}</span>
        </p>
      </div>
      <div class="price-and-quantity">
        <span class="cart-price">$${l.toFixed(2)}</span>

        <div class="quantity-in-cart">
            <button type="button" class="minus-btn" aria-label="minus quantity product">
              <svg class="minus-btn-icon">
                <use href="${d}#icon-minus"></use>
              </svg>
            </button>
          <span class="quantity">${s}</span>
            <button type="button" class="plus-btn" aria-label="plus quantity product">
              <svg class="plus-btn-icon">
                <use href="${d}#icon-plus"></use>
              </svg>
            </button>
        </div>
      </div>
    </div>
  `,n}function z(e){e.preventDefault(),q.placeOrder(c.get()).then(t=>b(t.message,!0,g)).catch(t=>b(t.response.data.message,!1))}function F(){const e=C.elements["cart-client-email"].value.trim();c.setEmail(e)}function M(){const e=c.getTotal();I.innerHTML=`$${e.toFixed(2)}`}
