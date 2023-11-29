import{S as a,F as T,C as d,u as $}from"./footer-d6b2a7c2.js";ot();function ot(){document.querySelectorAll(".food-letter").forEach((e,s)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},s*100)})}const v=document.querySelector(".select-menu"),nt=v.querySelector(".select-btn");v.querySelectorAll(".options");const ct=v.querySelector(".sBtn-text"),_=document.querySelector(".select-menu-category"),it=_.querySelector(".select-btn-custom"),rt=_.querySelector(".options"),at=_.querySelector(".sBtn-text-select");function lt(){B(null)}function B(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(s=>{s!==t&&s.classList.contains("active")&&s.classList.remove("active")})}nt.addEventListener("click",function(t){B(v),v.classList.toggle("active"),document.addEventListener("click",lt),t.stopPropagation()});v.addEventListener("click",function(t){const e=t.target.closest(".option");if(e){let s=e.querySelector(".option-text").innerText;ct.innerText=s,v.classList.remove("active")}});it.addEventListener("click",function(t){B(_),_.classList.toggle("active"),t.stopPropagation()});rt.addEventListener("click",function(t){const e=t.target.closest(".option-category");if(e){let s=e.querySelector(".option-text").innerText;at.innerText=s,_.classList.remove("active")}});const g=a.FILTER_KEY,dt=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:"showAll",value:void 0}],ut={byABC:!0},R={keyword:void 0,category:void 0,sortBy:ut,page:1,limit:9},pt=5;class f{static get(){return a.get(g)??R}static getValueByKey(e){return f.get()[e]}static async getCategories(){let e=a.get(a.CATEGORIES_KEY);if(!e)try{e=await T.getCategories(),e=e.filter(s=>!s.includes(" ")),a.set(a.CATEGORIES_KEY,e)}catch(s){console.error("FoodBotiqueApi.getCategories error",s)}return e??[]}static getSortList(){return dt}static async getDiscountedProducts(e=2){let s=a.getWithExpiry(a.DISCOUNTED_PRODUCTS_KEY);if(!s)try{s=await T.getDiscountedProducts(),a.setWithExpiry(a.DISCOUNTED_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getDiscountedProducts error",o)}return s.slice(0,e)??[]}static async getPopularProducts(e=5){let s=a.getWithExpiry(a.POPULAR_PRODUCTS_KEY);if(!s)try{s=await T.getPopularProducts(pt),a.setWithExpiry(a.POPULAR_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getPopularProducts error",o)}return s.slice(0,e)??[]}static set(e){a.set(g,e)}static setKeyword(e){const s=f.get();a.set(g,{...s,keyword:e,page:1})}static setCategory(e){const s=f.get();a.set(g,{...s,category:e,page:1})}static setPage(e){const s=f.get();a.set(g,{...s,page:e})}static setLimit(e){const s=f.get();a.set(g,{...s,limit:e,page:1})}static setSortBy(e,s){const o=f.get();a.set(g,{...o,page:1,sortBy:{[e]:s}})}static reset(){a.set(g,R)}}const u="/organic-food-boutique-store/assets/icons-8fcbdd30.svg",ft=document.querySelector(".discount-container");f.getDiscountedProducts().then(t=>{const e=t.map(mt),s=document.createElement("ul");s.className="discount-list",e.map(o=>{const n=o.dataset.productId,c=!!d.getProduct(n);o.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",o.querySelector(".discount-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),ft.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){D(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!d.getProduct(i)?d.delete(i):d.add(t.find(p=>p._id===i)),$(),E(i),O(i),x(i))})});function E(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const s=!!d.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=s?"none":"block",e.querySelector(".discount-button-icon-check").style.display=s?"block":"none"}function mt({_id:t,img:e,name:s,price:o}){const n=document.createElement("li");return n.className="discount-item",n.dataset.productId=t,n.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${s}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${u}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${s}</h3>
        <p class="discount-product-price">$${o.toFixed(2)}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${u}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${u}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,n}const gt=document.querySelector(".popular-products-container");f.getPopularProducts().then(t=>{const e=t.map(yt),s=document.createElement("ul");s.className="popular-products-list",e.map(o=>{const n=o.dataset.productId,c=!!d.getProduct(n);o.querySelector(".basket-button").style.display=c?"none":"block",o.querySelector(".basket-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),gt.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){D(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!d.getProduct(i)?d.delete(i):d.add(t.find(p=>p._id===i)),$(),E(i),O(i),x(i))})});function x(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const s=!!d.getProduct(t);e.querySelector(".basket-button").style.display=s?"none":"block",e.querySelector(".basket-button-icon-check").style.display=s?"block":"none"}function yt({_id:t,img:e,name:s,is10PercentOff:o,category:n,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=t,r.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${s}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${o?"":"display:none"}">
        <use href="${u}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${s}</h3>
      <button class="basket-button" type="button">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="${u}#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="${u}#icon-check"></use>
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
  `,r}const P=document.querySelector(".modal-background"),H=document.querySelector(".modal");async function D(t){try{P.classList.remove("is-hidden"),H.innerHTML="";const e=await T.getProduct(t);H.innerHTML=ht(e),G(!!d.getProduct(t)),document.querySelector(".modal-btn").addEventListener("click",()=>F(e)),document.querySelector(".modal-close-btn").addEventListener("click",w),P.addEventListener("click",z),document.addEventListener("keydown",Z)}catch(e){console.error("Error fetching product data:",e.message)}}function ht({img:t,name:e,category:s,size:o,popularity:n,desc:c,price:i}){return`
    <button type="button" class="modal-close-btn">
      <svg class="modal-icon-close" width="22" height="22">
        <use href="${u}#icon-x-close"></use>
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
      <div class="quantity-and-add">
      <div class="quantity-in-modal">

      <button type="button" class="minus-btn" aria-label="minus quantity product">
        <svg class="minus-btn-icon">
          <use href="${u}##icon-minus"></use>
        </svg>
      </button>

    <span class="quantity">1</span>

      <button type="button" class="plus-btn" aria-label="plus quantity product">
        <svg class="plus-btn-icon">
          <use href="${u}##icon-plus"></use>
        </svg>
      </button>
      </div>

      <button class="modal-btn" aria-label="add to card">
        <span class="modal-btn-text">Add to</span>
        <svg class="modal-icon-shop" width="18" height="18">
          <use href="${u}#icon-shopping-cart"></use>
        </svg>
      </button>
      </div>
    </div>`}function F(t){let e=!!d.getProduct(t._id);e?d.delete(t._id):d.add(t),G(!e),$(),O(t._id),x(t._id),E(t._id)}function G(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function z({target:t}){t===P&&w()}function w(){P.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",w),P.removeEventListener("click",z),document.removeEventListener("keydown",Z),document.querySelector(".modal-btn").removeEventListener("click",F)}function Z({key:t}){t==="Escape"&&w()}const V=document.querySelector(".all-products"),vt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function bt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const s=e.closest("LI"),o=e.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const n=s.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){D(n);return}(o==null?void 0:o.nodeName)==="BUTTON"&&(!!d.getProduct(n)?d.delete(n):d.add(t.find(i=>i._id===n)),$(),O(n),x(n),E(n))})}function O(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const s=!!d.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=s?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=s?"block":"none"}function _t({page:t,totalPages:e,results:s}){const o=s.map(({_id:c,name:i,img:r,category:p,price:y,size:C,popularity:h,is10PercentOff:S})=>{const b=!!d.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${S?"":"display:none"}"
      >
        <use href="${u}#icon-discount"></use>
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
            <span>${C}</span>
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
            <use href="${u}#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${b?"display:block":"display:none"}"
          >
            <use href="${u}#icon-check"></use>
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
                <use href="${u}#icon-arrow-left"></use>
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
                <use href="${u}#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `}V.innerHTML=`
      <ul class="product-list-product__list">
        ${o}
      </ul>
      ${n}
  `,n&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest("LI");if((i==null?void 0:i.nodeName)!=="LI")return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=t>1?t-1:t),r==="right"&&(r=e-t>0?t+1:t),f.setPage(r),X(),St("#filters"))})}async function X(){try{const t=await T.getProducts(f.get());t.results.length?(_t(t),bt(t.results)):V.innerHTML=vt}catch(t){console.error(t)}}function St(t){const e=document.querySelector(t),s=document.querySelector(".header");e&&window.scrollTo({top:e.offsetTop-s.offsetHeight,behavior:"smooth"})}var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="Expected a function",K=0/0,kt="[object Symbol]",Tt=/^\s+|\s+$/g,Pt=/^[-+]0x[0-9a-f]+$/i,$t=/^0b[01]+$/i,Ct=/^0o[0-7]+$/i,Lt=parseInt,It=typeof I=="object"&&I&&I.Object===Object&&I,qt=typeof self=="object"&&self&&self.Object===Object&&self,Et=It||qt||Function("return this")(),xt=Object.prototype,wt=xt.toString,Ot=Math.max,Nt=Math.min,A=function(){return Et.Date.now()};function At(t,e,s){var o,n,c,i,r,p,y=0,C=!1,h=!1,S=!0;if(typeof t!="function")throw new TypeError(J);e=W(e)||0,q(s)&&(C=!!s.leading,h="maxWait"in s,c=h?Ot(W(s.maxWait)||0,e):c,S="trailing"in s?!!s.trailing:S);function b(l){var m=o,k=n;return o=n=void 0,y=l,i=t.apply(k,m),i}function Q(l){return y=l,r=setTimeout(L,e),C?b(l):i}function tt(l){var m=l-p,k=l-y,j=e-m;return h?Nt(j,c-k):j}function U(l){var m=l-p,k=l-y;return p===void 0||m>=e||m<0||h&&k>=c}function L(){var l=A();if(U(l))return M(l);r=setTimeout(L,tt(l))}function M(l){return r=void 0,S&&o?b(l):(o=n=void 0,i)}function et(){r!==void 0&&clearTimeout(r),y=0,o=p=n=r=void 0}function st(){return r===void 0?i:M(A())}function N(){var l=A(),m=U(l);if(o=arguments,n=this,p=l,m){if(r===void 0)return Q(p);if(h)return r=setTimeout(L,e),b(p)}return r===void 0&&(r=setTimeout(L,e)),i}return N.cancel=et,N.flush=st,N}function Bt(t,e,s){var o=!0,n=!0;if(typeof t!="function")throw new TypeError(J);return q(s)&&(o="leading"in s?!!s.leading:o,n="trailing"in s?!!s.trailing:n),At(t,e,{leading:o,maxWait:e,trailing:n})}function q(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Dt(t){return!!t&&typeof t=="object"}function Ut(t){return typeof t=="symbol"||Dt(t)&&wt.call(t)==kt}function W(t){if(typeof t=="number")return t;if(Ut(t))return K;if(q(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=q(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Tt,"");var s=$t.test(t);return s||Ct.test(t)?Lt(t.slice(2),s?2:8):Pt.test(t)?K:+t}var Mt=Bt;const Y=document.querySelector(".scroll-up");document.addEventListener("scroll",Mt(jt,400));function jt(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?Y.classList.add("scroll-up-is-hidden"):Y.classList.remove("scroll-up-is-hidden")}$();X();
