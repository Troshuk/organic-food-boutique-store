import{S as r,F as y,C as l,u as v}from"./footer-71530cf0.js";D();function D(){document.querySelectorAll(".food-letter").forEach((s,t)=>{setTimeout(()=>{s.style.animation="none",s.offsetHeight,s.style.animation=null},t*100)})}const g=document.querySelector(".select-menu"),A=g.querySelector(".select-btn");g.querySelectorAll(".options");const N=g.querySelector(".sBtn-text"),m=document.querySelector(".select-menu-category"),U=m.querySelector(".select-btn-custom"),R=m.querySelector(".options"),M=m.querySelector(".sBtn-text-select");function K(){_(null)}function _(e){document.querySelectorAll(".select-menu, .select-menu-category").forEach(t=>{t!==e&&t.classList.contains("active")&&t.classList.remove("active")})}A.addEventListener("click",function(e){_(g),g.classList.toggle("active"),document.addEventListener("click",K),e.stopPropagation()});g.addEventListener("click",function(e){const s=e.target.closest(".option");if(s){let t=s.querySelector(".option-text").innerText;N.innerText=t,g.classList.remove("active")}});U.addEventListener("click",function(e){_(m),m.classList.toggle("active"),e.stopPropagation()});R.addEventListener("click",function(e){const s=e.target.closest(".option-category");if(s){let t=s.querySelector(".option-text").innerText;M.innerText=t,m.classList.remove("active")}});const p=r.FILTER_KEY,S={keyword:void 0,category:void 0,byABC:!0,byPrice:void 0,byPopularity:void 0,page:1,limit:9},H=5;class u{static get(){return r.get(p)??S}static getValueByKey(s){return u.get()[s]}static async getCategories(){let s=r.get(r.CATEGORIES_KEY);if(!s)try{s=await y.getCategories(),r.set(r.CATEGORIES_KEY,s)}catch(t){console.error("FoodBotiqueApi.getCategories error",t)}return s??[]}static async getDiscountedProducts(s=2){let t=r.get(r.DISCOUNTED_PRODUCTS_KEY);if(!t)try{t=await y.getDiscountedProducts(),r.set(r.DISCOUNTED_PRODUCTS_KEY,t)}catch(o){console.error("FoodBotiqueApi.getDiscountedProducts error",o)}return t.slice(0,s)??[]}static async getPopularProducts(s=5){let t=r.get(r.POPULAR_PRODUCTS_KEY);if(!t)try{t=await y.getPopularProducts(H),r.set(r.POPULAR_PRODUCTS_KEY,t)}catch(o){console.error("FoodBotiqueApi.getPopularProducts error",o)}return t.slice(0,s)??[]}static set(s){const t=u.get();r.set(p,{...t,...s})}static setKeyword(s){const t=u.get();r.set(p,{...t,keyword:s,page:1})}static setCategory(s){const t=u.get();r.set(p,{...t,category:s,page:1})}static setPage(s){const t=u.get();r.set(p,{...t,page:s})}static setLimit(s){const t=u.get();r.set(p,{...t,limit:s,page:1})}static setSortBy(s){const t=u.get();r.set(p,{...t,byABC:void 0,byPrice:void 0,byPopularity:void 0,[s]:!0})}static reset(){r.set(p,{...S})}}const f=document.querySelector(".modal-background"),P=document.querySelector(".modal");async function C(e,s=()=>{}){try{f.classList.remove("is-hidden"),P.innerHTML="";const t=await y.getProduct(e);P.innerHTML=Y(t),L(!!l.getProduct(e)),document.querySelector(".modal-btn").addEventListener("click",()=>k(t,s)),document.querySelector(".modal-close-btn").addEventListener("click",h),f.addEventListener("click",q),document.addEventListener("keydown",T)}catch(t){console.error("Error fetching product data:",t.message)}}function Y({img:e,name:s,category:t,size:o,popularity:d,desc:c,price:n}){return`
    <button type="button" class="modal-close-btn">
      <svg class="modal-icon-close" width="22" height="22">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-container">
      <div>
        <div class="modal-img">
          <img
            src="${e}"
            alt="${s}"
          />
        </div>
      </div>
      <div class="modal-product-info">
        <h2 class="modal-title">${s}</h2>
        <div class="modal-details">
          <div>
            <span class="modal-subtitle">Category:</span>
            <span class="modal-subtitle-info">
              ${t.replaceAll("_"," ")}
            </span>
          </div>
          <div>
            <span class="modal-subtitle">Size:</span>
            <span class="modal-subtitle-info">${o}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${d}</span>
          </div>
        </div>
        <p class="modal-about-product">${c}</p>
      </div>
    </div>
    <div class="modal-price-container">
      <p class="modal-price-product">
        <span>$</span><span class="modal-price">${n}</span>
      </p>
      <button class="modal-btn">
        <span class="modal-btn-text">Add to</span>
        <svg class="modal-icon-shop" width="18" height="18">
          <use href="./img/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
    </div>`}function k(e,s){let t=!!l.getProduct(e._id);t?l.delete(e._id):l.add(e),v(),s(e._id),L(!t)}function L(e){const s=document.querySelector(".modal-btn-text");e?s.textContent="Remove from":s.textContent="Add to"}function q({target:e}){e===f&&h()}function h(){f.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",h),f.removeEventListener("click",q),document.removeEventListener("keydown",T),document.querySelector(".modal-btn").removeEventListener("click",k)}function T({key:e}){e==="Escape"&&h()}const $=document.querySelector(".all-products"),j=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function z(e){document.querySelector(".product-list-product__list").addEventListener("click",({target:s})=>{const t=s.closest("LI"),o=s.closest("BUTTON");if((t==null?void 0:t.nodeName)!=="LI")return;const d=t.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){C(d,G);return}if((o==null?void 0:o.nodeName)==="BUTTON"){const c=!!l.getProduct(d);c?l.delete(d):l.add(e.find(i=>i._id===d)),v();const n=o.querySelector(".product-list-icon__btn"),a=o.querySelector(".product-list-icon__btn-added");n.style.display=c?"block":"none",a.style.display=c?"none":"block"}})}function G(e){const s=document.querySelector(`[data-product-id="${e}"]`),t=!!l.getProduct(e);s.querySelector(".product-list-icon__btn").style.display=t?"none":"block",s.querySelector(".product-list-icon__btn-added").style.display=t?"block":"none"}function V({page:e,perPage:s,totalPages:t,results:o}){const d=o.map(({_id:n,name:a,img:i,category:w,price:I,size:x,popularity:O,is10PercentOff:B})=>{const b=!!l.getProduct(n);return`<li class="product-list-product__card" data-product-id=${n}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${B?"":"display:none"}"
      >
        <use href="./img/icons.svg#icon-discount"></use>
      </svg>
      <div class="product-list-box__img">
        <img
          class="product-list-card__image"
          src="${i}"
          alt="${a}"
          width="140"
          height="140"
        />
      </div>
      <div class="product-list-info__box">
        <h3 class="product-list-name__product">${a}</h3>
        <div class="product-list-info">
          <p class="product-list-info__item">
            <span class="product-list-span__text">Category:</span>
            <span>${w.replaceAll("_"," ")}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${x}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${O}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">${I}</p>
        <button type="button" class="product-list-button__card">
          <svg
            class="product-list-icon__btn"
            width="18"
            height="18"
            style="${b?"display:none":""}"
          >
            <use href="./img/icons.svg#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${b?"display:block":"display:none"}"
          >
            <use href="./img/icons.svg#icon-check"></use>
          </svg>
         </button>
      </div>
    </li>`}).join("");let c="";if(t>1){const n=[];for(let i=1;i<=t;i++)n.push(i);t!==5&&(e<=2||t-e<2?n.splice(2,t-4,"..."):t-e<=3?n.splice(0,n.length-4,"..."):(n.splice(0,e-1),n.splice(2,n.length-4,"..."))),c=`
      <div class="product-list-pagination">
          <ul class="product-list-pagination__list">
            <li class="product-list-page__item nav__btn" data-page-number="left">
              <svg class="icon__arrow" width="24" height="24">
                <use href="./img/icons.svg#icon-arrow-left"></use>
              </svg>
            </li>
            <div class="product-list-page__numbers">
              ${n.map(i=>`<li class="product-list-page__item ${i===e?"active":i==="..."?"not-number":""}" data-page-number="${i}">${i}</li>`).join("")}
            </div>
            <li class="product-list-page__item nav__btn" data-page-number="right">
              <svg class="icon__arrow" width="24" height="24">
                <use href="./img/icons.svg#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `}$.innerHTML=`
      <ul class="product-list-product__list">
        ${d}
      </ul>
      ${c}
  `,c&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:n})=>{const a=n.closest("LI");if((a==null?void 0:a.nodeName)!=="LI")return;let i=a.dataset.pageNumber;i!=="..."&&(i==="left"&&(i=e>1?e-1:e),i==="right"&&(i=t-e>0?e+1:e),u.setPage(i),E())})}async function E(){try{const e=await y.getProducts(u.get());e.results.length?(V(e),z(e.results)):$.innerHTML=j}catch(e){console.error(e)}}E();const F=document.querySelector(".discount-container");u.getDiscountedProducts().then(e=>{const s=e.map(Q),t=document.createElement("ul");t.className="discount-list",s.map(o=>{const d=o.dataset.productId,c=!!l.getProduct(d);o.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",o.querySelector(".discount-button-icon-check").style.display=c?"block":"none",t.appendChild(o)}),F.appendChild(t),t.addEventListener("click",({target:o})=>{const d=o.closest("LI"),c=o.closest("BUTTON");if(console.log(c),(d==null?void 0:d.nodeName)!=="LI")return;const n=d.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){C(n,J);return}if((c==null?void 0:c.nodeName)==="BUTTON"){const a=!!l.getProduct(n);a?l.delete(n):l.add(e.find(i=>i._id===n)),v(),c.querySelector(".discount-button-icon-cart").style.display=a?"block":"none",c.querySelector(".discount-button-icon-check").style.display=a?"none":"block"}})});function J(e){const s=document.querySelector(`[data-product-id="${e}"]`),t=!!l.getProduct(e);s.querySelector(".discount-button-icon-cart").style.display=t?"none":"block",s.querySelector(".discount-button-icon-check").style.display=t?"block":"none"}function Q({_id:e,img:s,name:t,price:o}){const d=document.createElement("li");return d.className="discount-item",d.dataset.productId=e,d.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${s}"
           alt="${t}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="./img/icons.svg#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${t}</h3>
        <p class="discount-product-price">$${o}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="./img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="./img/icons.svg#icon-check"></use>
            </svg>
        </button>
    </div>
 `,d}v();
