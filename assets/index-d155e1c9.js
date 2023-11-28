import{S as d,F as k,C as l,u as P}from"./footer-91349371.js";st();function st(){document.querySelectorAll(".food-letter").forEach((e,s)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},s*100)})}const h=document.querySelector(".select-menu"),ot=h.querySelector(".select-btn");h.querySelectorAll(".options");const nt=h.querySelector(".sBtn-text"),b=document.querySelector(".select-menu-category"),ct=b.querySelector(".select-btn-custom"),it=b.querySelector(".options"),rt=b.querySelector(".sBtn-text-select");function dt(){A(null)}function A(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(s=>{s!==t&&s.classList.contains("active")&&s.classList.remove("active")})}ot.addEventListener("click",function(t){A(h),h.classList.toggle("active"),document.addEventListener("click",dt),t.stopPropagation()});h.addEventListener("click",function(t){const e=t.target.closest(".option");if(e){let s=e.querySelector(".option-text").innerText;nt.innerText=s,h.classList.remove("active")}});ct.addEventListener("click",function(t){A(b),b.classList.toggle("active"),t.stopPropagation()});it.addEventListener("click",function(t){const e=t.target.closest(".option-category");if(e){let s=e.querySelector(".option-text").innerText;rt.innerText=s,b.classList.remove("active")}});const f=d.FILTER_KEY,R={keyword:void 0,category:void 0,byABC:!0,byPrice:void 0,byPopularity:void 0,page:1,limit:9},at=5;class u{static get(){return d.get(f)??R}static getValueByKey(e){return u.get()[e]}static async getCategories(){let e=d.get(d.CATEGORIES_KEY);if(!e)try{e=await k.getCategories(),d.set(d.CATEGORIES_KEY,e)}catch(s){console.error("FoodBotiqueApi.getCategories error",s)}return e??[]}static async getDiscountedProducts(e=2){let s=d.getWithExpiry(d.DISCOUNTED_PRODUCTS_KEY);if(!s)try{s=await k.getDiscountedProducts(),d.setWithExpiry(d.DISCOUNTED_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getDiscountedProducts error",o)}return s.slice(0,e)??[]}static async getPopularProducts(e=5){let s=d.getWithExpiry(d.POPULAR_PRODUCTS_KEY);if(!s)try{s=await k.getPopularProducts(at),d.setWithExpiry(d.POPULAR_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getPopularProducts error",o)}return s.slice(0,e)??[]}static set(e){const s=u.get();d.set(f,{...s,...e})}static setKeyword(e){const s=u.get();d.set(f,{...s,keyword:e,page:1})}static setCategory(e){const s=u.get();d.set(f,{...s,category:e,page:1})}static setPage(e){const s=u.get();d.set(f,{...s,page:e})}static setLimit(e){const s=u.get();d.set(f,{...s,limit:e,page:1})}static setSortBy(e,s=!0){u.resetSort();const o=u.get();d.set(f,{...o,[e]:s})}static resetSort(){const e=u.get();d.set(f,{...e,byABC:void 0,byPrice:void 0,byPopularity:void 0,page:1})}static reset(){d.set(f,{...R})}}const lt=document.querySelector(".discount-container");u.getDiscountedProducts().then(t=>{const e=t.map(ut),s=document.createElement("ul");s.className="discount-list",e.map(o=>{const n=o.dataset.productId,c=!!l.getProduct(n);o.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",o.querySelector(".discount-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),lt.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){B(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!l.getProduct(i)?l.delete(i):l.add(t.find(p=>p._id===i)),P(),E(i),w(i),x(i))})});function E(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const s=!!l.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=s?"none":"block",e.querySelector(".discount-button-icon-check").style.display=s?"block":"none"}function ut({_id:t,img:e,name:s,price:o}){const n=document.createElement("li");return n.className="discount-item",n.dataset.productId=t,n.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${s}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="./img/icons.svg#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${s}</h3>
        <p class="discount-product-price">$${o.toFixed(2)}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="./img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="./img/icons.svg#icon-check"></use>
            </svg>
        </button>
    </div>
 `,n}const pt=document.querySelector(".popular-products-container");u.getPopularProducts().then(t=>{const e=t.map(ft),s=document.createElement("ul");s.className="popular-products-list",e.map(o=>{const n=o.dataset.productId,c=!!l.getProduct(n);o.querySelector(".basket-button").style.display=c?"none":"block",o.querySelector(".basket-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),pt.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){B(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!l.getProduct(i)?l.delete(i):l.add(t.find(p=>p._id===i)),P(),E(i),w(i),x(i))})});function x(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const s=!!l.getProduct(t);e.querySelector(".basket-button").style.display=s?"none":"block",e.querySelector(".basket-button-icon-check").style.display=s?"block":"none"}function ft({_id:t,img:e,name:s,is10PercentOff:o,category:n,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=t,r.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${s}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${o?"":"display:none"}">
        <use href="./img/icons.svg#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${s}</h3>
      <button class="basket-button" type="button">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="./img/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="./img/icons.svg#icon-check"></use>
        </svg>
      </button> 

      <div class="popular-products-description-container">
        <p class="popular-products-description">
          Category:
          <span class="popular-description">
            ${n.replaceAll("_"," ")}
          </span>
        </p>

        <p class="popular-products-description">
          Size:
          <span class="popular-description">${c}</span>
        </p>

        <p class="popular-products-description">
          Popularity:
          <span class="popular-description">${i}</span>
        </p>
      </div>
    </div>
  `,r}const C=document.querySelector(".modal-background"),M=document.querySelector(".modal");async function B(t){try{C.classList.remove("is-hidden"),M.innerHTML="";const e=await k.getProduct(t);M.innerHTML=gt(e),G(!!l.getProduct(t)),document.querySelector(".modal-btn").addEventListener("click",()=>Y(e)),document.querySelector(".modal-close-btn").addEventListener("click",q),C.addEventListener("click",z),document.addEventListener("keydown",F)}catch(e){console.error("Error fetching product data:",e.message)}}function gt({img:t,name:e,category:s,size:o,popularity:n,desc:c,price:i}){return`
    <button type="button" class="modal-close-btn">
      <svg class="modal-icon-close" width="22" height="22">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-container">
      <div>
        <div class="modal-img">
          <img
            src="${t}"
            alt="${e}"
          />
        </div>
      </div>
      <div class="modal-product-info">
        <h2 class="modal-title">${e}</h2>
        <div class="modal-details">
          <div>
            <span class="modal-subtitle">Category:</span>
            <span class="modal-subtitle-info">
              ${s.replaceAll("_"," ")}
            </span>
          </div>
          <div>
            <span class="modal-subtitle">Size:</span>
            <span class="modal-subtitle-info">${o}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${n}</span>
          </div>
        </div>
        <p class="modal-about-product">${c}</p>
      </div>
    </div>
    <div class="modal-price-container">
      <p class="modal-price-product">
        <span>$</span><span class="modal-price">${i}</span>
      </p>
      <button class="modal-btn">
        <span class="modal-btn-text">Add to</span>
        <svg class="modal-icon-shop" width="18" height="18">
          <use href="./img/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
    </div>`}function Y(t){let e=!!l.getProduct(t._id);e?l.delete(t._id):l.add(t),G(!e),P(),w(t._id),x(t._id),E(t._id)}function G(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function z({target:t}){t===C&&q()}function q(){C.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",q),C.removeEventListener("click",z),document.removeEventListener("keydown",F),document.querySelector(".modal-btn").removeEventListener("click",Y)}function F({key:t}){t==="Escape"&&q()}const V=document.querySelector(".all-products"),mt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function yt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const s=e.closest("LI"),o=e.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const n=s.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){B(n);return}(o==null?void 0:o.nodeName)==="BUTTON"&&(!!l.getProduct(n)?l.delete(n):l.add(t.find(i=>i._id===n)),P(),w(n),x(n),E(n))})}function w(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const s=!!l.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=s?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=s?"block":"none"}function ht({page:t,totalPages:e,results:s}){const o=s.map(({_id:c,name:i,img:r,category:p,price:m,size:T,popularity:y,is10PercentOff:_})=>{const v=!!l.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${_?"":"display:none"}"
      >
        <use href="./img/icons.svg#icon-discount"></use>
      </svg>
      <div class="product-list-box__img">
        <img
          class="product-list-card__image"
          src="${r}"
          alt="${i}"
          width="140"
          height="140"
        />
      </div>
      <div class="product-list-info__box">
        <h3 class="product-list-name__product">${i}</h3>
        <div class="product-list-info">
          <p class="product-list-info__item">
            <span class="product-list-span__text">Category:</span>
            <span>${p.replaceAll("_"," ")}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${T}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${y}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">$${m.toFixed(2)}</p>
        <button type="button" class="product-list-button__card">
          <svg
            class="product-list-icon__btn"
            width="18"
            height="18"
            style="${v?"display:none":""}"
          >
            <use href="./img/icons.svg#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${v?"display:block":"display:none"}"
          >
            <use href="./img/icons.svg#icon-check"></use>
          </svg>
         </button>
      </div>
    </li>`}).join("");let n="";if(e>1){const c=[];for(let r=1;r<=e;r++)c.push(r);e!==5&&(t<=2||e-t<2?c.splice(2,e-4,"..."):(c.length-t!==2&&c.splice(t,c.length-t-1,"..."),t!==3&&c.splice(1,t-2,"...")));const i=c.map(r=>`<li class="product-list-page__item ${r===t?"active":r==="..."?"not-number":""}" data-page-number="${r}">${r}</li>`).join("");n=`
      <div class="product-list-pagination">
          <ul class="product-list-pagination__list">
            <li
              class="product-list-page__item nav__btn"
              data-page-number="left"
              ${t===1?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="./img/icons.svg#icon-arrow-left"></use>
              </svg>
            </li>
            <div class="product-list-page__numbers">
              ${i}
            </div>
            <li
              class="product-list-page__item nav__btn"
              data-page-number="right"
              ${t===e?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="./img/icons.svg#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `}V.innerHTML=`
      <ul class="product-list-product__list">
        ${o}
      </ul>
      ${n}
  `,n&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest("LI");if((i==null?void 0:i.nodeName)!=="LI")return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=t>1?t-1:t),r==="right"&&(r=e-t>0?t+1:t),u.setPage(r),X())})}async function X(){try{const t=await k.getProducts(u.get());t.results.length?(ht(t),yt(t.results)):V.innerHTML=mt}catch(t){console.error(t)}}var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="Expected a function",H=0/0,vt="[object Symbol]",bt=/^\s+|\s+$/g,_t=/^[-+]0x[0-9a-f]+$/i,St=/^0b[01]+$/i,kt=/^0o[0-7]+$/i,Ct=parseInt,Pt=typeof L=="object"&&L&&L.Object===Object&&L,Tt=typeof self=="object"&&self&&self.Object===Object&&self,It=Pt||Tt||Function("return this")(),Lt=Object.prototype,$t=Lt.toString,Et=Math.max,xt=Math.min,N=function(){return It.Date.now()};function qt(t,e,s){var o,n,c,i,r,p,m=0,T=!1,y=!1,_=!0;if(typeof t!="function")throw new TypeError(J);e=K(e)||0,$(s)&&(T=!!s.leading,y="maxWait"in s,c=y?Et(K(s.maxWait)||0,e):c,_="trailing"in s?!!s.trailing:_);function v(a){var g=o,S=n;return o=n=void 0,m=a,i=t.apply(S,g),i}function Q(a){return m=a,r=setTimeout(I,e),T?v(a):i}function Z(a){var g=a-p,S=a-m,j=e-g;return y?xt(j,c-S):j}function D(a){var g=a-p,S=a-m;return p===void 0||g>=e||g<0||y&&S>=c}function I(){var a=N();if(D(a))return U(a);r=setTimeout(I,Z(a))}function U(a){return r=void 0,_&&o?v(a):(o=n=void 0,i)}function tt(){r!==void 0&&clearTimeout(r),m=0,o=p=n=r=void 0}function et(){return r===void 0?i:U(N())}function O(){var a=N(),g=D(a);if(o=arguments,n=this,p=a,g){if(r===void 0)return Q(p);if(y)return r=setTimeout(I,e),v(p)}return r===void 0&&(r=setTimeout(I,e)),i}return O.cancel=tt,O.flush=et,O}function wt(t,e,s){var o=!0,n=!0;if(typeof t!="function")throw new TypeError(J);return $(s)&&(o="leading"in s?!!s.leading:o,n="trailing"in s?!!s.trailing:n),qt(t,e,{leading:o,maxWait:e,trailing:n})}function $(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ot(t){return!!t&&typeof t=="object"}function Nt(t){return typeof t=="symbol"||Ot(t)&&$t.call(t)==vt}function K(t){if(typeof t=="number")return t;if(Nt(t))return H;if($(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=$(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(bt,"");var s=St.test(t);return s||kt.test(t)?Ct(t.slice(2),s?2:8):_t.test(t)?H:+t}var At=wt;const W=document.querySelector(".scroll-up");document.addEventListener("scroll",At(Bt,400));function Bt(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?W.classList.add("scroll-up-is-hidden"):W.classList.remove("scroll-up-is-hidden")}P();X();
