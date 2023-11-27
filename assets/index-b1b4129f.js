import{S as l,F as T,C as u,u as I}from"./footer-5495169b.js";Z();function Z(){document.querySelectorAll(".food-letter").forEach((n,e)=>{setTimeout(()=>{n.style.animation="none",n.offsetHeight,n.style.animation=null},e*100)})}const v=document.querySelector(".select-menu"),tt=v.querySelector(".select-btn");v.querySelectorAll(".options");const et=v.querySelector(".sBtn-text"),h=document.querySelector(".select-menu-category"),nt=h.querySelector(".select-btn-custom"),st=h.querySelector(".options"),ot=h.querySelector(".sBtn-text-select");function it(){w(null)}function w(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(e=>{e!==t&&e.classList.contains("active")&&e.classList.remove("active")})}tt.addEventListener("click",function(t){w(v),v.classList.toggle("active"),document.addEventListener("click",it),t.stopPropagation()});v.addEventListener("click",function(t){const n=t.target.closest(".option");if(n){let e=n.querySelector(".option-text").innerText;et.innerText=e,v.classList.remove("active")}});nt.addEventListener("click",function(t){w(h),h.classList.toggle("active"),t.stopPropagation()});st.addEventListener("click",function(t){const n=t.target.closest(".option-category");if(n){let e=n.querySelector(".option-text").innerText;ot.innerText=e,h.classList.remove("active")}});const g=l.FILTER_KEY,D={keyword:void 0,category:void 0,byABC:!0,byPrice:void 0,byPopularity:void 0,page:1,limit:9},ct=5;class p{static get(){return l.get(g)??D}static getValueByKey(n){return p.get()[n]}static async getCategories(){let n=l.get(l.CATEGORIES_KEY);if(!n)try{n=await T.getCategories(),l.set(l.CATEGORIES_KEY,n)}catch(e){console.error("FoodBotiqueApi.getCategories error",e)}return n??[]}static async getDiscountedProducts(n=2){let e=l.get(l.DISCOUNTED_PRODUCTS_KEY);if(!e)try{e=await T.getDiscountedProducts(),l.set(l.DISCOUNTED_PRODUCTS_KEY,e)}catch(s){console.error("FoodBotiqueApi.getDiscountedProducts error",s)}return e.slice(0,n)??[]}static async getPopularProducts(n=5){let e=l.get(l.POPULAR_PRODUCTS_KEY);if(!e)try{e=await T.getPopularProducts(ct),l.set(l.POPULAR_PRODUCTS_KEY,e)}catch(s){console.error("FoodBotiqueApi.getPopularProducts error",s)}return e.slice(0,n)??[]}static set(n){const e=p.get();l.set(g,{...e,...n})}static setKeyword(n){const e=p.get();l.set(g,{...e,keyword:n,page:1})}static setCategory(n){const e=p.get();l.set(g,{...e,category:n,page:1})}static setPage(n){const e=p.get();l.set(g,{...e,page:n})}static setLimit(n){const e=p.get();l.set(g,{...e,limit:n,page:1})}static setSortBy(n){const e=p.get();l.set(g,{...e,byABC:void 0,byPrice:void 0,byPopularity:void 0,[n]:!0})}static reset(){l.set(g,{...D})}}const k=document.querySelector(".modal-background"),j=document.querySelector(".modal");async function H(t,n=()=>{}){try{k.classList.remove("is-hidden"),j.innerHTML="";const e=await T.getProduct(t);j.innerHTML=rt(e),Y(!!u.getProduct(t)),document.querySelector(".modal-btn").addEventListener("click",()=>K(e,n)),document.querySelector(".modal-close-btn").addEventListener("click",x),k.addEventListener("click",W),document.addEventListener("keydown",G)}catch(e){console.error("Error fetching product data:",e.message)}}function rt({img:t,name:n,category:e,size:s,popularity:o,desc:r,price:i}){return`
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
            alt="${n}"
          />
        </div>
      </div>
      <div class="modal-product-info">
        <h2 class="modal-title">${n}</h2>
        <div class="modal-details">
          <div>
            <span class="modal-subtitle">Category:</span>
            <span class="modal-subtitle-info">
              ${e.replaceAll("_"," ")}
            </span>
          </div>
          <div>
            <span class="modal-subtitle">Size:</span>
            <span class="modal-subtitle-info">${s}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${o}</span>
          </div>
        </div>
        <p class="modal-about-product">${r}</p>
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
    </div>`}function K(t,n){let e=!!u.getProduct(t._id);e?u.delete(t._id):u.add(t),I(),n(t._id),Y(!e)}function Y(t){const n=document.querySelector(".modal-btn-text");t?n.textContent="Remove from":n.textContent="Add to"}function W({target:t}){t===k&&x()}function x(){k.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",x),k.removeEventListener("click",W),document.removeEventListener("keydown",G),document.querySelector(".modal-btn").removeEventListener("click",K)}function G({key:t}){t==="Escape"&&x()}const F=document.querySelector(".all-products"),at=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function lt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:n})=>{const e=n.closest("LI"),s=n.closest("BUTTON");if((e==null?void 0:e.nodeName)!=="LI")return;const o=e.dataset.productId;if((s==null?void 0:s.nodeName)!=="BUTTON"){H(o,dt);return}if((s==null?void 0:s.nodeName)==="BUTTON"){const r=!!u.getProduct(o);r?u.delete(o):u.add(t.find(c=>c._id===o)),I();const i=s.querySelector(".product-list-icon__btn"),a=s.querySelector(".product-list-icon__btn-added");i.style.display=r?"block":"none",a.style.display=r?"none":"block"}})}function dt(t){const n=document.querySelector(`[data-product-id="${t}"]`),e=!!u.getProduct(t);n.querySelector(".product-list-icon__btn").style.display=e?"none":"block",n.querySelector(".product-list-icon__btn-added").style.display=e?"block":"none"}function ut({page:t,perPage:n,totalPages:e,results:s}){const o=s.map(({_id:i,name:a,img:c,category:m,price:L,size:y,popularity:b,is10PercentOff:_})=>{const C=!!u.getProduct(i);return`<li class="product-list-product__card" data-product-id=${i}>
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
          src="${c}"
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
            <span>${m.replaceAll("_"," ")}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${y}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${b}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">${L}</p>
        <button type="button" class="product-list-button__card">
          <svg
            class="product-list-icon__btn"
            width="18"
            height="18"
            style="${C?"display:none":""}"
          >
            <use href="./img/icons.svg#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${C?"display:block":"display:none"}"
          >
            <use href="./img/icons.svg#icon-check"></use>
          </svg>
         </button>
      </div>
    </li>`}).join("");let r="";if(e>1){const i=[];for(let c=1;c<=e;c++)i.push(c);e!==5&&(t<=2||e-t<2?i.splice(2,e-4,"..."):e-t<=3?i.splice(0,i.length-4,"..."):(i.splice(0,t-1),i.splice(2,i.length-4,"..."))),r=`
      <div class="product-list-pagination">
          <ul class="product-list-pagination__list">
            <li class="product-list-page__item nav__btn" data-page-number="left">
              <svg class="icon__arrow" width="24" height="24">
                <use href="./img/icons.svg#icon-arrow-left"></use>
              </svg>
            </li>
            <div class="product-list-page__numbers">
              ${i.map(c=>`<li class="product-list-page__item ${c===t?"active":c==="..."?"not-number":""}" data-page-number="${c}">${c}</li>`).join("")}
            </div>
            <li class="product-list-page__item nav__btn" data-page-number="right">
              <svg class="icon__arrow" width="24" height="24">
                <use href="./img/icons.svg#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `}F.innerHTML=`
      <ul class="product-list-product__list">
        ${o}
      </ul>
      ${r}
  `,r&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:i})=>{const a=i.closest("LI");if((a==null?void 0:a.nodeName)!=="LI")return;let c=a.dataset.pageNumber;c!=="..."&&(c==="left"&&(c=t>1?t-1:t),c==="right"&&(c=e-t>0?t+1:t),p.setPage(c),z())})}async function z(){try{const t=await T.getProducts(p.get());t.results.length?(ut(t),lt(t.results)):F.innerHTML=at}catch(t){console.error(t)}}z();const pt=document.querySelector(".discount-container");p.getDiscountedProducts().then(t=>{const n=t.map(gt),e=document.createElement("ul");e.className="discount-list",n.map(s=>{const o=s.dataset.productId,r=!!u.getProduct(o);s.querySelector(".discount-button-icon-cart").style.display=r?"none":"block",s.querySelector(".discount-button-icon-check").style.display=r?"block":"none",e.appendChild(s)}),pt.appendChild(e),e.addEventListener("click",({target:s})=>{const o=s.closest("LI"),r=s.closest("BUTTON");if(console.log(r),(o==null?void 0:o.nodeName)!=="LI")return;const i=o.dataset.productId;if((r==null?void 0:r.nodeName)!=="BUTTON"){H(i,ft);return}if((r==null?void 0:r.nodeName)==="BUTTON"){const a=!!u.getProduct(i);a?u.delete(i):u.add(t.find(c=>c._id===i)),I(),r.querySelector(".discount-button-icon-cart").style.display=a?"block":"none",r.querySelector(".discount-button-icon-check").style.display=a?"none":"block"}})});function ft(t){const n=document.querySelector(`[data-product-id="${t}"]`),e=!!u.getProduct(t);n.querySelector(".discount-button-icon-cart").style.display=e?"none":"block",n.querySelector(".discount-button-icon-check").style.display=e?"block":"none"}function gt({_id:t,img:n,name:e,price:s}){const o=document.createElement("li");return o.className="discount-item",o.dataset.productId=t,o.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${n}"
           alt="${e}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="./img/icons.svg#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${e}</h3>
        <p class="discount-product-price">$${s}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="./img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="./img/icons.svg#icon-check"></use>
            </svg>
        </button>
    </div>
 `,o}var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V="Expected a function",U=0/0,mt="[object Symbol]",yt=/^\s+|\s+$/g,vt=/^[-+]0x[0-9a-f]+$/i,ht=/^0b[01]+$/i,bt=/^0o[0-7]+$/i,_t=parseInt,St=typeof E=="object"&&E&&E.Object===Object&&E,Tt=typeof self=="object"&&self&&self.Object===Object&&self,kt=St||Tt||Function("return this")(),Lt=Object.prototype,Ct=Lt.toString,Pt=Math.max,Et=Math.min,O=function(){return kt.Date.now()};function qt(t,n,e){var s,o,r,i,a,c,m=0,L=!1,y=!1,b=!0;if(typeof t!="function")throw new TypeError(V);n=R(n)||0,q(e)&&(L=!!e.leading,y="maxWait"in e,r=y?Pt(R(e.maxWait)||0,n):r,b="trailing"in e?!!e.trailing:b);function _(d){var f=s,S=o;return s=o=void 0,m=d,i=t.apply(S,f),i}function C(d){return m=d,a=setTimeout(P,n),L?_(d):i}function X(d){var f=d-c,S=d-m,A=n-f;return y?Et(A,r-S):A}function B(d){var f=d-c,S=d-m;return c===void 0||f>=n||f<0||y&&S>=r}function P(){var d=O();if(B(d))return N(d);a=setTimeout(P,X(d))}function N(d){return a=void 0,b&&s?_(d):(s=o=void 0,i)}function J(){a!==void 0&&clearTimeout(a),m=0,s=c=o=a=void 0}function Q(){return a===void 0?i:N(O())}function $(){var d=O(),f=B(d);if(s=arguments,o=this,c=d,f){if(a===void 0)return C(c);if(y)return a=setTimeout(P,n),_(c)}return a===void 0&&(a=setTimeout(P,n)),i}return $.cancel=J,$.flush=Q,$}function It(t,n,e){var s=!0,o=!0;if(typeof t!="function")throw new TypeError(V);return q(e)&&(s="leading"in e?!!e.leading:s,o="trailing"in e?!!e.trailing:o),qt(t,n,{leading:s,maxWait:n,trailing:o})}function q(t){var n=typeof t;return!!t&&(n=="object"||n=="function")}function xt(t){return!!t&&typeof t=="object"}function $t(t){return typeof t=="symbol"||xt(t)&&Ct.call(t)==mt}function R(t){if(typeof t=="number")return t;if($t(t))return U;if(q(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=q(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=t.replace(yt,"");var e=ht.test(t);return e||bt.test(t)?_t(t.slice(2),e?2:8):vt.test(t)?U:+t}var Ot=It;const M=document.querySelector(".scroll-up");document.addEventListener("scroll",Ot(wt,400));function wt(){const t=window.scrollY,n=document.documentElement.clientHeight;t>n?M.classList.add("scroll-up-is-hidden"):M.classList.remove("scroll-up-is-hidden")}I();
