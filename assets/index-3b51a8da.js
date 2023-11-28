import{S as d,F as C,C as l,u as T}from"./footer-91349371.js";ot();function ot(){document.querySelectorAll(".food-letter").forEach((e,s)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},s*100)})}const v=document.querySelector(".select-menu"),nt=v.querySelector(".select-btn");v.querySelectorAll(".options");const ct=v.querySelector(".sBtn-text"),_=document.querySelector(".select-menu-category"),it=_.querySelector(".select-btn-custom"),rt=_.querySelector(".options"),dt=_.querySelector(".sBtn-text-select");function at(){B(null)}function B(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(s=>{s!==t&&s.classList.contains("active")&&s.classList.remove("active")})}nt.addEventListener("click",function(t){B(v),v.classList.toggle("active"),document.addEventListener("click",at),t.stopPropagation()});v.addEventListener("click",function(t){const e=t.target.closest(".option");if(e){let s=e.querySelector(".option-text").innerText;ct.innerText=s,v.classList.remove("active")}});it.addEventListener("click",function(t){B(_),_.classList.toggle("active"),t.stopPropagation()});rt.addEventListener("click",function(t){const e=t.target.closest(".option-category");if(e){let s=e.querySelector(".option-text").innerText;dt.innerText=s,_.classList.remove("active")}});const g=d.FILTER_KEY,M={keyword:void 0,category:void 0,byABC:!0,byPrice:void 0,byPopularity:void 0,page:1,limit:9},lt=5;class u{static get(){return d.get(g)??M}static getValueByKey(e){return u.get()[e]}static async getCategories(){let e=d.get(d.CATEGORIES_KEY);if(!e)try{e=await C.getCategories(),d.set(d.CATEGORIES_KEY,e)}catch(s){console.error("FoodBotiqueApi.getCategories error",s)}return e??[]}static async getDiscountedProducts(e=2){let s=d.getWithExpiry(d.DISCOUNTED_PRODUCTS_KEY);if(!s)try{s=await C.getDiscountedProducts(),d.setWithExpiry(d.DISCOUNTED_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getDiscountedProducts error",o)}return s.slice(0,e)??[]}static async getPopularProducts(e=5){let s=d.getWithExpiry(d.POPULAR_PRODUCTS_KEY);if(!s)try{s=await C.getPopularProducts(lt),d.setWithExpiry(d.POPULAR_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getPopularProducts error",o)}return s.slice(0,e)??[]}static set(e){const s=u.get();d.set(g,{...s,...e})}static setKeyword(e){const s=u.get();d.set(g,{...s,keyword:e,page:1})}static setCategory(e){const s=u.get();d.set(g,{...s,category:e,page:1})}static setPage(e){const s=u.get();d.set(g,{...s,page:e})}static setLimit(e){const s=u.get();d.set(g,{...s,limit:e,page:1})}static setSortBy(e,s=!0){u.resetSort();const o=u.get();d.set(g,{...o,[e]:s})}static resetSort(){const e=u.get();d.set(g,{...e,byABC:void 0,byPrice:void 0,byPopularity:void 0,page:1})}static reset(){d.set(g,{...M})}}const f="/organic-food-boutique-store/assets/icons-8fcbdd30.svg",ut=document.querySelector(".discount-container");u.getDiscountedProducts().then(t=>{const e=t.map(pt),s=document.createElement("ul");s.className="discount-list",e.map(o=>{const n=o.dataset.productId,c=!!l.getProduct(n);o.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",o.querySelector(".discount-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),ut.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){D(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!l.getProduct(i)?l.delete(i):l.add(t.find(p=>p._id===i)),T(),x(i),O(i),q(i))})});function x(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const s=!!l.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=s?"none":"block",e.querySelector(".discount-button-icon-check").style.display=s?"block":"none"}function pt({_id:t,img:e,name:s,price:o}){const n=document.createElement("li");return n.className="discount-item",n.dataset.productId=t,n.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${s}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${f}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${s}</h3>
        <p class="discount-product-price">$${o.toFixed(2)}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${f}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${f}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,n}const ft=document.querySelector(".popular-products-container");u.getPopularProducts().then(t=>{const e=t.map(gt),s=document.createElement("ul");s.className="popular-products-list",e.map(o=>{const n=o.dataset.productId,c=!!l.getProduct(n);o.querySelector(".basket-button").style.display=c?"none":"block",o.querySelector(".basket-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),ft.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){D(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!l.getProduct(i)?l.delete(i):l.add(t.find(p=>p._id===i)),T(),x(i),O(i),q(i))})});function q(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const s=!!l.getProduct(t);e.querySelector(".basket-button").style.display=s?"none":"block",e.querySelector(".basket-button-icon-check").style.display=s?"block":"none"}function gt({_id:t,img:e,name:s,is10PercentOff:o,category:n,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=t,r.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${s}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${o?"":"display:none"}">
        <use href="${f}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${s}</h3>
      <button class="basket-button" type="button">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="${f}#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="${f}#icon-check"></use>
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
  `,r}const P=document.querySelector(".modal-background"),H=document.querySelector(".modal");async function D(t){try{P.classList.remove("is-hidden"),H.innerHTML="";const e=await C.getProduct(t);H.innerHTML=mt(e),z(!!l.getProduct(t)),document.querySelector(".modal-btn").addEventListener("click",()=>G(e)),document.querySelector(".modal-close-btn").addEventListener("click",w),P.addEventListener("click",F),document.addEventListener("keydown",V)}catch(e){console.error("Error fetching product data:",e.message)}}function mt({img:t,name:e,category:s,size:o,popularity:n,desc:c,price:i}){return`
    <button type="button" class="modal-close-btn">
      <svg class="modal-icon-close" width="22" height="22">
        <use href="${f}#icon-x-close"></use>
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
          <use href="${f}#icon-shopping-cart"></use>
        </svg>
      </button>
    </div>`}function G(t){let e=!!l.getProduct(t._id);e?l.delete(t._id):l.add(t),z(!e),T(),O(t._id),q(t._id),x(t._id)}function z(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function F({target:t}){t===P&&w()}function w(){P.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",w),P.removeEventListener("click",F),document.removeEventListener("keydown",V),document.querySelector(".modal-btn").removeEventListener("click",G)}function V({key:t}){t==="Escape"&&w()}const X=document.querySelector(".all-products"),yt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function ht(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const s=e.closest("LI"),o=e.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const n=s.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){D(n);return}(o==null?void 0:o.nodeName)==="BUTTON"&&(!!l.getProduct(n)?l.delete(n):l.add(t.find(i=>i._id===n)),T(),O(n),q(n),x(n))})}function O(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const s=!!l.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=s?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=s?"block":"none"}function vt({page:t,totalPages:e,results:s}){const o=s.map(({_id:c,name:i,img:r,category:p,price:y,size:$,popularity:h,is10PercentOff:S})=>{const b=!!l.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${S?"":"display:none"}"
      >
        <use href="${f}#icon-discount"></use>
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
            <span>${$}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${h}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">$${y.toFixed(2)}</p>
        <button type="button" class="product-list-button__card">
          <svg
            class="product-list-icon__btn"
            width="18"
            height="18"
            style="${b?"display:none":""}"
          >
            <use href="${f}#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${b?"display:block":"display:none"}"
          >
            <use href="${f}#icon-check"></use>
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
                <use href="${f}#icon-arrow-left"></use>
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
                <use href="${f}#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `}X.innerHTML=`
      <ul class="product-list-product__list">
        ${o}
      </ul>
      ${n}
  `,n&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest("LI");if((i==null?void 0:i.nodeName)!=="LI")return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=t>1?t-1:t),r==="right"&&(r=e-t>0?t+1:t),u.setPage(r),J())})}async function J(){try{const t=await C.getProducts(u.get());t.results.length?(vt(t),ht(t.results)):X.innerHTML=yt}catch(t){console.error(t)}}var L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q="Expected a function",K=0/0,bt="[object Symbol]",_t=/^\s+|\s+$/g,St=/^[-+]0x[0-9a-f]+$/i,kt=/^0b[01]+$/i,Ct=/^0o[0-7]+$/i,Pt=parseInt,Tt=typeof L=="object"&&L&&L.Object===Object&&L,$t=typeof self=="object"&&self&&self.Object===Object&&self,It=Tt||$t||Function("return this")(),Lt=Object.prototype,Et=Lt.toString,xt=Math.max,qt=Math.min,A=function(){return It.Date.now()};function wt(t,e,s){var o,n,c,i,r,p,y=0,$=!1,h=!1,S=!0;if(typeof t!="function")throw new TypeError(Q);e=W(e)||0,E(s)&&($=!!s.leading,h="maxWait"in s,c=h?xt(W(s.maxWait)||0,e):c,S="trailing"in s?!!s.trailing:S);function b(a){var m=o,k=n;return o=n=void 0,y=a,i=t.apply(k,m),i}function Z(a){return y=a,r=setTimeout(I,e),$?b(a):i}function tt(a){var m=a-p,k=a-y,R=e-m;return h?qt(R,c-k):R}function U(a){var m=a-p,k=a-y;return p===void 0||m>=e||m<0||h&&k>=c}function I(){var a=A();if(U(a))return j(a);r=setTimeout(I,tt(a))}function j(a){return r=void 0,S&&o?b(a):(o=n=void 0,i)}function et(){r!==void 0&&clearTimeout(r),y=0,o=p=n=r=void 0}function st(){return r===void 0?i:j(A())}function N(){var a=A(),m=U(a);if(o=arguments,n=this,p=a,m){if(r===void 0)return Z(p);if(h)return r=setTimeout(I,e),b(p)}return r===void 0&&(r=setTimeout(I,e)),i}return N.cancel=et,N.flush=st,N}function Ot(t,e,s){var o=!0,n=!0;if(typeof t!="function")throw new TypeError(Q);return E(s)&&(o="leading"in s?!!s.leading:o,n="trailing"in s?!!s.trailing:n),wt(t,e,{leading:o,maxWait:e,trailing:n})}function E(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Nt(t){return!!t&&typeof t=="object"}function At(t){return typeof t=="symbol"||Nt(t)&&Et.call(t)==bt}function W(t){if(typeof t=="number")return t;if(At(t))return K;if(E(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=E(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(_t,"");var s=kt.test(t);return s||Ct.test(t)?Pt(t.slice(2),s?2:8):St.test(t)?K:+t}var Bt=Ot;const Y=document.querySelector(".scroll-up");document.addEventListener("scroll",Bt(Dt,400));function Dt(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?Y.classList.add("scroll-up-is-hidden"):Y.classList.remove("scroll-up-is-hidden")}T();J();
