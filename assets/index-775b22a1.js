import{S as a,F as T,C as l,u as C}from"./footer-26a65bb7.js";st();function st(){document.querySelectorAll(".food-letter").forEach((e,o)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},o*100)})}const v=document.querySelector(".select-menu"),nt=v.querySelector(".select-btn");v.querySelectorAll(".options");const ct=v.querySelector(".sBtn-text"),_=document.querySelector(".select-menu-category"),it=_.querySelector(".select-btn-custom"),rt=_.querySelector(".options"),at=_.querySelector(".sBtn-text-select");function dt(){B(null)}function B(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(o=>{o!==t&&o.classList.contains("active")&&o.classList.remove("active")})}nt.addEventListener("click",function(t){B(v),v.classList.toggle("active"),document.addEventListener("click",dt),t.stopPropagation()});v.addEventListener("click",function(t){const e=t.target.closest(".option");if(e){let o=e.querySelector(".option-text").innerText;ct.innerText=o,v.classList.remove("active")}});it.addEventListener("click",function(t){B(_),_.classList.toggle("active"),t.stopPropagation()});rt.addEventListener("click",function(t){const e=t.target.closest(".option-category");if(e){let o=e.querySelector(".option-text").innerText;at.innerText=o,_.classList.remove("active")}});const g=a.FILTER_KEY,lt=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:"showAll",value:void 0}],ut={byABC:!0},R={keyword:void 0,category:void 0,sortBy:ut,page:1,limit:9},pt=5;class f{static get(){return a.get(g)??R}static getValueByKey(e){return f.get()[e]}static async getCategories(){let e=a.get(a.CATEGORIES_KEY);if(!e)try{e=await T.getCategories(),e=e.filter(o=>!o.includes(" ")),a.set(a.CATEGORIES_KEY,e)}catch(o){console.error("FoodBotiqueApi.getCategories error",o)}return e??[]}static getSortList(){return lt}static async getDiscountedProducts(e=2){let o=a.getWithExpiry(a.DISCOUNTED_PRODUCTS_KEY);if(!o)try{o=await T.getDiscountedProducts(),a.setWithExpiry(a.DISCOUNTED_PRODUCTS_KEY,o)}catch(s){console.error("FoodBotiqueApi.getDiscountedProducts error",s)}return o.slice(0,e)??[]}static async getPopularProducts(e=5){let o=a.getWithExpiry(a.POPULAR_PRODUCTS_KEY);if(!o)try{o=await T.getPopularProducts(pt),a.setWithExpiry(a.POPULAR_PRODUCTS_KEY,o)}catch(s){console.error("FoodBotiqueApi.getPopularProducts error",s)}return o.slice(0,e)??[]}static set(e){a.set(g,e)}static setKeyword(e){const o=f.get();a.set(g,{...o,keyword:e,page:1})}static setCategory(e){const o=f.get();a.set(g,{...o,category:e,page:1})}static setPage(e){const o=f.get();a.set(g,{...o,page:e})}static setLimit(e){const o=f.get();a.set(g,{...o,limit:e,page:1})}static setSortBy(e,o){const s=f.get();a.set(g,{...s,page:1,sortBy:{[e]:o}})}static reset(){a.set(g,R)}}const p="/organic-food-boutique-store/assets/icons-8fcbdd30.svg",ft=document.querySelector(".discount-container");f.getDiscountedProducts().then(t=>{const e=t.map(mt),o=document.createElement("ul");o.className="discount-list",e.map(s=>{const n=s.dataset.productId,c=!!l.getProduct(n);s.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",s.querySelector(".discount-button-icon-check").style.display=c?"block":"none",o.appendChild(s)}),ft.appendChild(o),o.addEventListener("click",({target:s})=>{const n=s.closest("LI"),c=s.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){D(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!l.getProduct(i)?l.delete(i):l.add(t.find(u=>u._id===i)),C(),x(i),O(i),q(i))})});function x(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const o=!!l.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=o?"none":"block",e.querySelector(".discount-button-icon-check").style.display=o?"block":"none"}function mt({_id:t,img:e,name:o,price:s}){const n=document.createElement("li");return n.className="discount-item",n.dataset.productId=t,n.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${o}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${p}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${o}</h3>
        <p class="discount-product-price">$${s.toFixed(2)}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${p}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${p}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,n}const gt=document.querySelector(".popular-products-container");f.getPopularProducts().then(t=>{const e=t.map(yt),o=document.createElement("ul");o.className="popular-products-list",e.map(s=>{const n=s.dataset.productId,c=!!l.getProduct(n);s.querySelector(".basket-button").style.display=c?"none":"block",s.querySelector(".basket-button-icon-check").style.display=c?"block":"none",o.appendChild(s)}),gt.appendChild(o),o.addEventListener("click",({target:s})=>{const n=s.closest("LI"),c=s.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){D(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!l.getProduct(i)?l.delete(i):l.add(t.find(u=>u._id===i)),C(),x(i),O(i),q(i))})});function q(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const o=!!l.getProduct(t);e.querySelector(".basket-button").style.display=o?"none":"block",e.querySelector(".basket-button-icon-check").style.display=o?"block":"none"}function yt({_id:t,img:e,name:o,is10PercentOff:s,category:n,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=t,r.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${o}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${s?"":"display:none"}">
        <use href="${p}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${o}</h3>
      <button class="basket-button" type="button">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="${p}#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="${p}#icon-check"></use>
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
  `,r}const P=document.querySelector(".modal-background"),H=document.querySelector(".modal");async function D(t){try{P.classList.remove("is-hidden"),H.innerHTML="";const e=await T.getProduct(t);H.innerHTML=ht(e),G(!!l.getProduct(t)),document.querySelector(".modal-btn").addEventListener("click",()=>F(e)),document.querySelector(".modal-close-btn").addEventListener("click",w),P.addEventListener("click",z),document.addEventListener("keydown",Z)}catch(e){console.error("Error fetching product data:",e.message)}}function ht({img:t,name:e,category:o,size:s,popularity:n,desc:c,price:i}){return`
    <button type="button" class="modal-close-btn">
      <svg class="modal-icon-close" width="22" height="22">
        <use href="${p}#icon-x-close"></use>
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
              ${o.replaceAll("_"," ")}
            </span>
          </div>
          <div>
            <span class="modal-subtitle">Size:</span>
            <span class="modal-subtitle-info">${s}</span>
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
          <use href="${p}#icon-shopping-cart"></use>
        </svg>
      </button>
    </div>`}function F(t){let e=!!l.getProduct(t._id);e?l.delete(t._id):l.add(t),G(!e),C(),O(t._id),q(t._id),x(t._id)}function G(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function z({target:t}){t===P&&w()}function w(){P.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",w),P.removeEventListener("click",z),document.removeEventListener("keydown",Z),document.querySelector(".modal-btn").removeEventListener("click",F)}function Z({key:t}){t==="Escape"&&w()}const V=document.querySelector(".all-products"),vt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function bt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const o=e.closest("LI"),s=e.closest("BUTTON");if((o==null?void 0:o.nodeName)!=="LI")return;const n=o.dataset.productId;if((s==null?void 0:s.nodeName)!=="BUTTON"){D(n);return}(s==null?void 0:s.nodeName)==="BUTTON"&&(!!l.getProduct(n)?l.delete(n):l.add(t.find(i=>i._id===n)),C(),O(n),q(n),x(n))})}function O(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const o=!!l.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=o?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=o?"block":"none"}function _t({page:t,totalPages:e,results:o}){const s=o.map(({_id:c,name:i,img:r,category:u,price:y,size:$,popularity:h,is10PercentOff:S})=>{const b=!!l.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${S?"":"display:none"}"
      >
        <use href="${p}#icon-discount"></use>
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
            <span>${u.replaceAll("_"," ")}</span>
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
            <use href="${p}#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${b?"display:block":"display:none"}"
          >
            <use href="${p}#icon-check"></use>
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
                <use href="${p}#icon-arrow-left"></use>
              </svg>
            </li>
            <ul class="product-list-page__numbers">
              ${i}
            </ul>
            <li
              class="product-list-page__item nav__btn"
              data-page-number="right"
              ${t===e?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${p}#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `}V.innerHTML=`
      <ul class="product-list-product__list">
        ${s}
      </ul>
      ${n}
  `,n&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest("LI");if((i==null?void 0:i.nodeName)!=="LI")return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=t>1?t-1:t),r==="right"&&(r=e-t>0?t+1:t),f.setPage(r),X(),St("#filters"))})}async function X(){try{const t=await T.getProducts(f.get());t.results.length?(_t(t),bt(t.results)):V.innerHTML=vt}catch(t){console.error(t)}}function St(t){const e=document.querySelector(t),o=document.querySelector(".header");e&&window.scrollTo({top:e.offsetTop-o.offsetHeight,behavior:"smooth"})}var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="Expected a function",K=0/0,kt="[object Symbol]",Tt=/^\s+|\s+$/g,Pt=/^[-+]0x[0-9a-f]+$/i,Ct=/^0b[01]+$/i,$t=/^0o[0-7]+$/i,Lt=parseInt,It=typeof I=="object"&&I&&I.Object===Object&&I,Et=typeof self=="object"&&self&&self.Object===Object&&self,xt=It||Et||Function("return this")(),qt=Object.prototype,wt=qt.toString,Ot=Math.max,Nt=Math.min,A=function(){return xt.Date.now()};function At(t,e,o){var s,n,c,i,r,u,y=0,$=!1,h=!1,S=!0;if(typeof t!="function")throw new TypeError(J);e=W(e)||0,E(o)&&($=!!o.leading,h="maxWait"in o,c=h?Ot(W(o.maxWait)||0,e):c,S="trailing"in o?!!o.trailing:S);function b(d){var m=s,k=n;return s=n=void 0,y=d,i=t.apply(k,m),i}function Q(d){return y=d,r=setTimeout(L,e),$?b(d):i}function tt(d){var m=d-u,k=d-y,j=e-m;return h?Nt(j,c-k):j}function U(d){var m=d-u,k=d-y;return u===void 0||m>=e||m<0||h&&k>=c}function L(){var d=A();if(U(d))return M(d);r=setTimeout(L,tt(d))}function M(d){return r=void 0,S&&s?b(d):(s=n=void 0,i)}function et(){r!==void 0&&clearTimeout(r),y=0,s=u=n=r=void 0}function ot(){return r===void 0?i:M(A())}function N(){var d=A(),m=U(d);if(s=arguments,n=this,u=d,m){if(r===void 0)return Q(u);if(h)return r=setTimeout(L,e),b(u)}return r===void 0&&(r=setTimeout(L,e)),i}return N.cancel=et,N.flush=ot,N}function Bt(t,e,o){var s=!0,n=!0;if(typeof t!="function")throw new TypeError(J);return E(o)&&(s="leading"in o?!!o.leading:s,n="trailing"in o?!!o.trailing:n),At(t,e,{leading:s,maxWait:e,trailing:n})}function E(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Dt(t){return!!t&&typeof t=="object"}function Ut(t){return typeof t=="symbol"||Dt(t)&&wt.call(t)==kt}function W(t){if(typeof t=="number")return t;if(Ut(t))return K;if(E(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=E(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Tt,"");var o=Ct.test(t);return o||$t.test(t)?Lt(t.slice(2),o?2:8):Pt.test(t)?K:+t}var Mt=Bt;const Y=document.querySelector(".scroll-up");document.addEventListener("scroll",Mt(jt,400));function jt(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?Y.classList.add("scroll-up-is-hidden"):Y.classList.remove("scroll-up-is-hidden")}C();X();
