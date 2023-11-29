import{S as a,F as C,C as d,u as L}from"./footer-d6b2a7c2.js";at();function at(){document.querySelectorAll(".food-letter").forEach((e,s)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},s*100)})}const g=a.FILTER_KEY,lt=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:"showAll",value:void 0}],dt={byABC:!0},H={keyword:void 0,category:void 0,sortBy:dt,page:1,limit:9},ut=5;class u{static get(){return a.get(g)??H}static getValueByKey(e){return u.get()[e]}static async getCategories(){let e=a.get(a.CATEGORIES_KEY);if(!e)try{e=await C.getCategories(),e=e.filter(s=>!s.includes(" ")),a.set(a.CATEGORIES_KEY,e)}catch(s){console.error("FoodBotiqueApi.getCategories error",s)}return e??[]}static getSortList(){return lt}static async getDiscountedProducts(e=2){let s=a.getWithExpiry(a.DISCOUNTED_PRODUCTS_KEY);if(!s)try{s=await C.getDiscountedProducts(),a.setWithExpiry(a.DISCOUNTED_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getDiscountedProducts error",o)}return s.slice(0,e)??[]}static async getPopularProducts(e=5){let s=a.getWithExpiry(a.POPULAR_PRODUCTS_KEY);if(!s)try{s=await C.getPopularProducts(ut),a.setWithExpiry(a.POPULAR_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getPopularProducts error",o)}return s.slice(0,e)??[]}static set(e){a.set(g,e)}static setKeyword(e){const s=u.get();a.set(g,{...s,keyword:e,page:1})}static setCategory(e){const s=u.get();a.set(g,{...s,category:e,page:1})}static setPage(e){const s=u.get();a.set(g,{...s,page:e})}static setLimit(e){const s=u.get();a.set(g,{...s,limit:e,page:1})}static setSortBy(e,s){const o=u.get();a.set(g,{...o,page:1,sortBy:{[e]:s}})}static reset(){a.set(g,H)}}const p="/organic-food-boutique-store/assets/icons-8fcbdd30.svg",pt=document.querySelector(".discount-container");u.getDiscountedProducts().then(t=>{const e=t.map(ft),s=document.createElement("ul");s.className="discount-list",e.map(o=>{const n=o.dataset.productId,c=!!d.getProduct(n);o.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",o.querySelector(".discount-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),pt.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){D(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!d.getProduct(i)?d.delete(i):d.add(t.find(f=>f._id===i)),L(),w(i),O(i),x(i))})});function w(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const s=!!d.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=s?"none":"block",e.querySelector(".discount-button-icon-check").style.display=s?"block":"none"}function ft({_id:t,img:e,name:s,price:o}){const n=document.createElement("li");return n.className="discount-item",n.dataset.productId=t,n.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${s}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${p}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${s}</h3>
        <p class="discount-product-price">$${o.toFixed(2)}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${p}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${p}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,n}const mt=document.querySelector(".popular-products-container");u.getPopularProducts().then(t=>{const e=t.map(gt),s=document.createElement("ul");s.className="popular-products-list",e.map(o=>{const n=o.dataset.productId,c=!!d.getProduct(n);o.querySelector(".basket-button").style.display=c?"none":"block",o.querySelector(".basket-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),mt.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){D(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!d.getProduct(i)?d.delete(i):d.add(t.find(f=>f._id===i)),L(),w(i),O(i),x(i))})});function x(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const s=!!d.getProduct(t);e.querySelector(".basket-button").style.display=s?"none":"block",e.querySelector(".basket-button-icon-check").style.display=s?"block":"none"}function gt({_id:t,img:e,name:s,is10PercentOff:o,category:n,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=t,r.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${s}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${o?"":"display:none"}">
        <use href="${p}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${s}</h3>
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
  `,r}const T=document.querySelector(".modal-background"),W=document.querySelector(".modal");async function D(t){try{T.classList.remove("is-hidden"),W.innerHTML="";const e=await C.getProduct(t);W.innerHTML=yt(e),X(!!d.getProduct(t)),document.querySelector(".modal-btn").addEventListener("click",()=>Z(e)),document.querySelector(".modal-close-btn").addEventListener("click",q),T.addEventListener("click",J),document.addEventListener("keydown",Q)}catch(e){console.error("Error fetching product data:",e.message)}}function yt({img:t,name:e,category:s,size:o,popularity:n,desc:c,price:i}){return`
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
          <use href="${p}#icon-minus"></use>
        </svg>
      </button>

    <span class="quantity">1</span>

      <button type="button" class="plus-btn" aria-label="plus quantity product">
        <svg class="plus-btn-icon">
          <use href="${p}#icon-plus"></use>
        </svg>
      </button>
      </div>

      <button class="modal-btn" aria-label="add to card">
        <span class="modal-btn-text">Add to</span>
        <svg class="modal-icon-shop" width="18" height="18">
          <use href="${p}#icon-shopping-cart"></use>
        </svg>
      </button>
      </div>
    </div>`}function Z(t){let e=!!d.getProduct(t._id);e?d.delete(t._id):d.add(t),X(!e),L(),O(t._id),x(t._id),w(t._id)}function X(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function J({target:t}){t===T&&q()}function q(){T.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",q),T.removeEventListener("click",J),document.removeEventListener("keydown",Q),document.querySelector(".modal-btn").removeEventListener("click",Z)}function Q({key:t}){t==="Escape"&&q()}const tt=document.querySelector(".all-products"),ht=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function vt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const s=e.closest("LI"),o=e.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const n=s.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){D(n);return}(o==null?void 0:o.nodeName)==="BUTTON"&&(!!d.getProduct(n)?d.delete(n):d.add(t.find(i=>i._id===n)),L(),O(n),x(n),w(n))})}function O(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const s=!!d.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=s?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=s?"block":"none"}function bt({page:t,totalPages:e,results:s}){const o=s.map(({_id:c,name:i,img:r,category:f,price:y,size:P,popularity:h,is10PercentOff:S})=>{const _=!!d.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
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
            <span>${f.replaceAll("_"," ")}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${P}</span>
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
            style="${_?"display:none":""}"
          >
            <use href="${p}#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${_?"display:block":"display:none"}"
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
    `}tt.innerHTML=`
      <ul class="product-list-product__list">
        ${o}
      </ul>
      ${n}
  `,n&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest("LI");if((i==null?void 0:i.nodeName)!=="LI")return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=t>1?t-1:t),r==="right"&&(r=e-t>0?t+1:t),u.setPage(r),N(),_t("#filters"))})}async function N(){try{const t=await C.getProducts(u.get());t.results.length?(bt(t),vt(t.results)):tt.innerHTML=ht}catch(t){console.error(t)}}function _t(t){const e=document.querySelector(t),s=document.querySelector(".header");e&&window.scrollTo({top:e.offsetTop-s.offsetHeight,behavior:"smooth"})}const v=document.querySelector(".select-menu"),St=v.querySelector(".select-btn"),kt=v.querySelector(".sBtn-text"),b=document.querySelector(".select-menu-category"),Ct=b.querySelector(".select-btn-custom"),Y=b.querySelector(".sBtn-text-select"),Tt=document.querySelector(".search-form"),Lt=document.getElementById("search-icon"),et=document.getElementById("search-item"),F=u.getValueByKey("keyword");F&&(et.value=F);function U(){j(null)}function j(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(s=>{s!==t&&s.classList.contains("active")&&s.classList.remove("active")}),document.removeEventListener("click",U)}St.addEventListener("click",t=>{j(v),v.classList.toggle("active"),t.stopPropagation(),v.classList.contains("active")&&document.addEventListener("click",U)});v.addEventListener("click",function(t){const e=t.target.closest(".option");if(e){let s=e.querySelector(".option-text").innerText;kt.innerText=s,v.classList.remove("active")}});Ct.addEventListener("click",t=>{j(b),b.classList.toggle("active"),t.stopPropagation(),b.classList.contains("active")&&document.addEventListener("click",U)});u.getCategories().then(t=>{const e=document.createElement("ul");e.className="options";const s=u.getValueByKey("category");s&&(Y.innerText=s.replace(/_/g," ")),t.push("Show All"),t.forEach(o=>{const n=document.createElement("li");n.className="option-category",o!=="Show All"&&(n.dataset.originalCategory=o);const c=document.createElement("span");c.className="option-text",c.textContent=o.replace(/_/g," "),n.appendChild(c),e.appendChild(n)}),b.appendChild(e),e.addEventListener("click",function(o){const n=o.target.closest(".option-category");if(n){let c=n.dataset.originalCategory;Y.innerText=n.textContent,b.classList.remove("active"),u.setCategory(c),N()}})});Tt.addEventListener("submit",st);Lt.addEventListener("click",st);function st(t){t.preventDefault();const e=et.value.trim();u.setKeyword(e),N()}var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ot="Expected a function",G=0/0,Pt="[object Symbol]",$t=/^\s+|\s+$/g,Et=/^[-+]0x[0-9a-f]+$/i,It=/^0b[01]+$/i,wt=/^0o[0-7]+$/i,xt=parseInt,qt=typeof E=="object"&&E&&E.Object===Object&&E,Ot=typeof self=="object"&&self&&self.Object===Object&&self,Nt=qt||Ot||Function("return this")(),At=Object.prototype,Bt=At.toString,Dt=Math.max,Ut=Math.min,B=function(){return Nt.Date.now()};function jt(t,e,s){var o,n,c,i,r,f,y=0,P=!1,h=!1,S=!0;if(typeof t!="function")throw new TypeError(ot);e=z(e)||0,I(s)&&(P=!!s.leading,h="maxWait"in s,c=h?Dt(z(s.maxWait)||0,e):c,S="trailing"in s?!!s.trailing:S);function _(l){var m=o,k=n;return o=n=void 0,y=l,i=t.apply(k,m),i}function nt(l){return y=l,r=setTimeout($,e),P?_(l):i}function ct(l){var m=l-f,k=l-y,K=e-m;return h?Ut(K,c-k):K}function M(l){var m=l-f,k=l-y;return f===void 0||m>=e||m<0||h&&k>=c}function $(){var l=B();if(M(l))return R(l);r=setTimeout($,ct(l))}function R(l){return r=void 0,S&&o?_(l):(o=n=void 0,i)}function it(){r!==void 0&&clearTimeout(r),y=0,o=f=n=r=void 0}function rt(){return r===void 0?i:R(B())}function A(){var l=B(),m=M(l);if(o=arguments,n=this,f=l,m){if(r===void 0)return nt(f);if(h)return r=setTimeout($,e),_(f)}return r===void 0&&(r=setTimeout($,e)),i}return A.cancel=it,A.flush=rt,A}function Mt(t,e,s){var o=!0,n=!0;if(typeof t!="function")throw new TypeError(ot);return I(s)&&(o="leading"in s?!!s.leading:o,n="trailing"in s?!!s.trailing:n),jt(t,e,{leading:o,maxWait:e,trailing:n})}function I(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Rt(t){return!!t&&typeof t=="object"}function Kt(t){return typeof t=="symbol"||Rt(t)&&Bt.call(t)==Pt}function z(t){if(typeof t=="number")return t;if(Kt(t))return G;if(I(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=I(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace($t,"");var s=It.test(t);return s||wt.test(t)?xt(t.slice(2),s?2:8):Et.test(t)?G:+t}var Ht=Mt;const V=document.querySelector(".scroll-up");document.addEventListener("scroll",Ht(Wt,400));function Wt(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?V.classList.add("scroll-up-is-hidden"):V.classList.remove("scroll-up-is-hidden")}L();N();
