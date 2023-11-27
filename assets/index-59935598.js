import{S as a,F as S,C as l,u as C}from"./footer-37300458.js";Z();function Z(){document.querySelectorAll(".food-letter").forEach((e,s)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},s*100)})}const h=document.querySelector(".select-menu"),tt=h.querySelector(".select-btn");h.querySelectorAll(".options");const et=h.querySelector(".sBtn-text"),b=document.querySelector(".select-menu-category"),st=b.querySelector(".select-btn-custom"),ot=b.querySelector(".options"),nt=b.querySelector(".sBtn-text-select");function ct(){w(null)}function w(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(s=>{s!==t&&s.classList.contains("active")&&s.classList.remove("active")})}tt.addEventListener("click",function(t){w(h),h.classList.toggle("active"),document.addEventListener("click",ct),t.stopPropagation()});h.addEventListener("click",function(t){const e=t.target.closest(".option");if(e){let s=e.querySelector(".option-text").innerText;et.innerText=s,h.classList.remove("active")}});st.addEventListener("click",function(t){w(b),b.classList.toggle("active"),t.stopPropagation()});ot.addEventListener("click",function(t){const e=t.target.closest(".option-category");if(e){let s=e.querySelector(".option-text").innerText;nt.innerText=s,b.classList.remove("active")}});const f=a.FILTER_KEY,D={keyword:void 0,category:void 0,byABC:!0,byPrice:void 0,byPopularity:void 0,page:1,limit:9},it=5;class p{static get(){return a.get(f)??D}static getValueByKey(e){return p.get()[e]}static async getCategories(){let e=a.get(a.CATEGORIES_KEY);if(!e)try{e=await S.getCategories(),a.set(a.CATEGORIES_KEY,e)}catch(s){console.error("FoodBotiqueApi.getCategories error",s)}return e??[]}static async getDiscountedProducts(e=2){let s=a.get(a.DISCOUNTED_PRODUCTS_KEY);if(!s)try{s=await S.getDiscountedProducts(),a.set(a.DISCOUNTED_PRODUCTS_KEY,s)}catch(n){console.error("FoodBotiqueApi.getDiscountedProducts error",n)}return s.slice(0,e)??[]}static async getPopularProducts(e=5){let s=a.get(a.POPULAR_PRODUCTS_KEY);if(!s)try{s=await S.getPopularProducts(it),a.set(a.POPULAR_PRODUCTS_KEY,s)}catch(n){console.error("FoodBotiqueApi.getPopularProducts error",n)}return s.slice(0,e)??[]}static set(e){const s=p.get();a.set(f,{...s,...e})}static setKeyword(e){const s=p.get();a.set(f,{...s,keyword:e,page:1})}static setCategory(e){const s=p.get();a.set(f,{...s,category:e,page:1})}static setPage(e){const s=p.get();a.set(f,{...s,page:e})}static setLimit(e){const s=p.get();a.set(f,{...s,limit:e,page:1})}static setSortBy(e){const s=p.get();a.set(f,{...s,byABC:void 0,byPrice:void 0,byPopularity:void 0,[e]:!0})}static reset(){a.set(f,{...D})}}const T=document.querySelector(".modal-background"),U=document.querySelector(".modal");async function O(t,e=()=>{}){try{T.classList.remove("is-hidden"),U.innerHTML="";const s=await S.getProduct(t);U.innerHTML=rt(s),K(!!l.getProduct(t)),document.querySelector(".modal-btn").addEventListener("click",()=>H(s,e)),document.querySelector(".modal-close-btn").addEventListener("click",$),T.addEventListener("click",Y),document.addEventListener("keydown",F)}catch(s){console.error("Error fetching product data:",s.message)}}function rt({img:t,name:e,category:s,size:n,popularity:i,desc:o,price:r}){return`
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
            <span class="modal-subtitle-info">${n}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${i}</span>
          </div>
        </div>
        <p class="modal-about-product">${o}</p>
      </div>
    </div>
    <div class="modal-price-container">
      <p class="modal-price-product">
        <span>$</span><span class="modal-price">${r}</span>
      </p>
      <button class="modal-btn">
        <span class="modal-btn-text">Add to</span>
        <svg class="modal-icon-shop" width="18" height="18">
          <use href="./img/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
    </div>`}function H(t,e){let s=!!l.getProduct(t._id);s?l.delete(t._id):l.add(t),C(),e(t._id),K(!s)}function K(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function Y({target:t}){t===T&&$()}function $(){T.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",$),T.removeEventListener("click",Y),document.removeEventListener("keydown",F),document.querySelector(".modal-btn").removeEventListener("click",H)}function F({key:t}){t==="Escape"&&$()}const W=document.querySelector(".all-products"),at=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function dt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const s=e.closest("LI"),n=e.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const i=s.dataset.productId;if((n==null?void 0:n.nodeName)!=="BUTTON"){O(i,lt);return}if((n==null?void 0:n.nodeName)==="BUTTON"){const o=!!l.getProduct(i);o?l.delete(i):l.add(t.find(u=>u._id===i)),C();const r=n.querySelector(".product-list-icon__btn"),c=n.querySelector(".product-list-icon__btn-added");r.style.display=o?"block":"none",c.style.display=o?"none":"block"}})}function lt(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`),s=!!l.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=s?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=s?"block":"none"}function ut({page:t,totalPages:e,results:s}){const n=s.map(({_id:o,name:r,img:c,category:u,price:m,size:P,popularity:y,is10PercentOff:_})=>{const v=!!l.getProduct(o);return`<li class="product-list-product__card" data-product-id=${o}>
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
          alt="${r}"
          width="140"
          height="140"
        />
      </div>
      <div class="product-list-info__box">
        <h3 class="product-list-name__product">${r}</h3>
        <div class="product-list-info">
          <p class="product-list-info__item">
            <span class="product-list-span__text">Category:</span>
            <span>${u.replaceAll("_"," ")}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${P}</span>
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
    </li>`}).join("");let i="";if(e>1){const o=[];for(let c=1;c<=e;c++)o.push(c);e!==5&&(t<=2||e-t<2?o.splice(2,e-4,"..."):e-t<=3?o.splice(0,o.length-4,"..."):(o.splice(0,t-1),o.splice(2,o.length-4,"..."))),i=`
      <div class="product-list-pagination">
          <ul class="product-list-pagination__list">
            <li class="product-list-page__item nav__btn" data-page-number="left">
              <svg class="icon__arrow" width="24" height="24">
                <use href="./img/icons.svg#icon-arrow-left"></use>
              </svg>
            </li>
            <div class="product-list-page__numbers">
              ${o.map(c=>`<li class="product-list-page__item ${c===t?"active":c==="..."?"not-number":""}" data-page-number="${c}">${c}</li>`).join("")}
            </div>
            <li class="product-list-page__item nav__btn" data-page-number="right">
              <svg class="icon__arrow" width="24" height="24">
                <use href="./img/icons.svg#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `}W.innerHTML=`
      <ul class="product-list-product__list">
        ${n}
      </ul>
      ${i}
  `,i&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:o})=>{const r=o.closest("LI");if((r==null?void 0:r.nodeName)!=="LI")return;let c=r.dataset.pageNumber;c!=="..."&&(c==="left"&&(c=t>1?t-1:t),c==="right"&&(c=e-t>0?t+1:t),p.setPage(c),G())})}async function G(){try{const t=await S.getProducts(p.get());t.results.length?(ut(t),dt(t.results)):W.innerHTML=at}catch(t){console.error(t)}}const pt=document.querySelector(".popular-products-container");p.getPopularProducts().then(t=>{const e=t.map(ft),s=document.createElement("ul");s.className="popular-products-list",e.map(n=>{const i=n.dataset.productId,o=!!l.getProduct(i);n.querySelector(".basket-button").style.display=o?"none":"block",n.querySelector(".basket-button-icon-check").style.display=o?"block":"none",s.appendChild(n)}),pt.appendChild(s),s.addEventListener("click",({target:n})=>{const i=n.closest("LI"),o=n.closest("BUTTON");if((i==null?void 0:i.nodeName)!=="LI")return;const r=i.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){O(r,gt);return}if((o==null?void 0:o.nodeName)==="BUTTON"){const c=!!l.getProduct(r);c?l.delete(r):l.add(t.find(u=>u._id===r)),C(),i.querySelector(".basket-button").style.display=c?"block":"none",i.querySelector(".basket-button-icon-check").style.display=c?"none":"block"}})});function gt(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`),s=!!l.getProduct(t);e.querySelector(".basket-button").style.display=s?"none":"block",e.querySelector(".basket-button-icon-check").style.display=s?"block":"none"}function ft({_id:t,img:e,name:s,is10PercentOff:n,category:i,size:o,popularity:r}){const c=document.createElement("li");return c.className="popular-products-item",c.dataset.productId=t,c.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${s}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${n?"":"display:none"}">
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
            ${i.replaceAll("_"," ")}
          </span>
        </p>

        <p class="popular-products-description">
          Size:
          <span class="popular-description">${o}</span>
        </p>

        <p class="popular-products-description">
          Popularity:
          <span class="popular-description">${r}</span>
        </p>
      </div>
    </div>
  `,c}const mt=document.querySelector(".discount-container");p.getDiscountedProducts().then(t=>{const e=t.map(ht),s=document.createElement("ul");s.className="discount-list",e.map(n=>{const i=n.dataset.productId,o=!!l.getProduct(i);n.querySelector(".discount-button-icon-cart").style.display=o?"none":"block",n.querySelector(".discount-button-icon-check").style.display=o?"block":"none",s.appendChild(n)}),mt.appendChild(s),s.addEventListener("click",({target:n})=>{const i=n.closest("LI"),o=n.closest("BUTTON");if((i==null?void 0:i.nodeName)!=="LI")return;const r=i.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){O(r,yt);return}if((o==null?void 0:o.nodeName)==="BUTTON"){const c=!!l.getProduct(r);c?l.delete(r):l.add(t.find(u=>u._id===r)),C(),o.querySelector(".discount-button-icon-cart").style.display=c?"block":"none",o.querySelector(".discount-button-icon-check").style.display=c?"none":"block"}})});function yt(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`),s=!!l.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=s?"none":"block",e.querySelector(".discount-button-icon-check").style.display=s?"block":"none"}function ht({_id:t,img:e,name:s,price:n}){const i=document.createElement("li");return i.className="discount-item",i.dataset.productId=t,i.innerHTML=`
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
        <p class="discount-product-price">$${n.toFixed(2)}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="./img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="./img/icons.svg#icon-check"></use>
            </svg>
        </button>
    </div>
 `,i}var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z="Expected a function",j=0/0,vt="[object Symbol]",bt=/^\s+|\s+$/g,_t=/^[-+]0x[0-9a-f]+$/i,kt=/^0b[01]+$/i,St=/^0o[0-7]+$/i,Tt=parseInt,Ct=typeof I=="object"&&I&&I.Object===Object&&I,Pt=typeof self=="object"&&self&&self.Object===Object&&self,Lt=Ct||Pt||Function("return this")(),It=Object.prototype,qt=It.toString,$t=Math.max,Et=Math.min,x=function(){return Lt.Date.now()};function xt(t,e,s){var n,i,o,r,c,u,m=0,P=!1,y=!1,_=!0;if(typeof t!="function")throw new TypeError(z);e=R(e)||0,q(s)&&(P=!!s.leading,y="maxWait"in s,o=y?$t(R(s.maxWait)||0,e):o,_="trailing"in s?!!s.trailing:_);function v(d){var g=n,k=i;return n=i=void 0,m=d,r=t.apply(k,g),r}function V(d){return m=d,c=setTimeout(L,e),P?v(d):r}function X(d){var g=d-u,k=d-m,A=e-g;return y?Et(A,o-k):A}function N(d){var g=d-u,k=d-m;return u===void 0||g>=e||g<0||y&&k>=o}function L(){var d=x();if(N(d))return B(d);c=setTimeout(L,X(d))}function B(d){return c=void 0,_&&n?v(d):(n=i=void 0,r)}function J(){c!==void 0&&clearTimeout(c),m=0,n=u=i=c=void 0}function Q(){return c===void 0?r:B(x())}function E(){var d=x(),g=N(d);if(n=arguments,i=this,u=d,g){if(c===void 0)return V(u);if(y)return c=setTimeout(L,e),v(u)}return c===void 0&&(c=setTimeout(L,e)),r}return E.cancel=J,E.flush=Q,E}function wt(t,e,s){var n=!0,i=!0;if(typeof t!="function")throw new TypeError(z);return q(s)&&(n="leading"in s?!!s.leading:n,i="trailing"in s?!!s.trailing:i),xt(t,e,{leading:n,maxWait:e,trailing:i})}function q(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ot(t){return!!t&&typeof t=="object"}function Nt(t){return typeof t=="symbol"||Ot(t)&&qt.call(t)==vt}function R(t){if(typeof t=="number")return t;if(Nt(t))return j;if(q(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=q(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(bt,"");var s=kt.test(t);return s||St.test(t)?Tt(t.slice(2),s?2:8):_t.test(t)?j:+t}var Bt=wt;const M=document.querySelector(".scroll-up");document.addEventListener("scroll",Bt(At,400));function At(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?M.classList.add("scroll-up-is-hidden"):M.classList.remove("scroll-up-is-hidden")}C();G();
