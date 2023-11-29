import{S as a,F as k,C as u,u as T}from"./footer-d3207f33.js";lt();function lt(){document.querySelectorAll(".food-letter").forEach((e,s)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},s*100)})}const v=a.FILTER_KEY,j=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:void 0,value:void 0}],ut=j[0],G={keyword:void 0,category:void 0,sortBy:ut,page:1,limit:9},pt=5;class d{static get(){return a.get(v)??G}static getValueByKey(e){return d.get()[e]}static async getCategories(){let e=a.get(a.CATEGORIES_KEY);if(!e)try{e=await k.getCategories(),e=e.filter(s=>!s.includes(" ")),a.set(a.CATEGORIES_KEY,e)}catch(s){console.error("FoodBotiqueApi.getCategories error",s)}return e??[]}static getSortList(){return j}static async getDiscountedProducts(e=2){let s=a.getWithExpiry(a.DISCOUNTED_PRODUCTS_KEY);if(!s)try{s=await k.getDiscountedProducts(),a.setWithExpiry(a.DISCOUNTED_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getDiscountedProducts error",o)}return s.slice(0,e)??[]}static async getPopularProducts(e=5){let s=a.getWithExpiry(a.POPULAR_PRODUCTS_KEY);if(!s)try{s=await k.getPopularProducts(pt),a.setWithExpiry(a.POPULAR_PRODUCTS_KEY,s)}catch(o){console.error("FoodBotiqueApi.getPopularProducts error",o)}return s.slice(0,e)??[]}static setKeyword(e){const s=d.get();a.set(v,{...s,keyword:e,page:1})}static setCategory(e){const s=d.get();a.set(v,{...s,category:e,page:1})}static setPage(e){const s=d.get();a.set(v,{...s,page:e})}static setLimit(e){const s=d.get();a.set(v,{...s,limit:e,page:1})}static setSortBy(e,s){const o=d.get();console.log(e,s),a.set(v,{...o,page:1,sortBy:j.find(n=>n.key===e&&n.value===JSON.parse(s))})}static reset(){a.set(v,G)}}const p="/organic-food-boutique-store/assets/icons-8fcbdd30.svg",ft=document.querySelector(".discount-container");d.getDiscountedProducts().then(t=>{const e=t.map(mt),s=document.createElement("ul");s.className="discount-list",e.map(o=>{const n=o.dataset.productId,c=!!u.getProduct(n);o.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",o.querySelector(".discount-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),ft.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){M(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!u.getProduct(i)?u.delete(i):u.add(t.find(f=>f._id===i)),T(),w(i),N(i),q(i))})});function w(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const s=!!u.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=s?"none":"block",e.querySelector(".discount-button-icon-check").style.display=s?"block":"none"}function mt({_id:t,img:e,name:s,price:o}){const n=document.createElement("li");return n.className="discount-item",n.dataset.productId=t,n.innerHTML=`
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
 `,n}const yt=document.querySelector(".popular-products-container");d.getPopularProducts().then(t=>{const e=t.map(gt),s=document.createElement("ul");s.className="popular-products-list",e.map(o=>{const n=o.dataset.productId,c=!!u.getProduct(n);o.querySelector(".basket-button").style.display=c?"none":"block",o.querySelector(".basket-button-icon-check").style.display=c?"block":"none",s.appendChild(o)}),yt.appendChild(s),s.addEventListener("click",({target:o})=>{const n=o.closest("LI"),c=o.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const i=n.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){M(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!u.getProduct(i)?u.delete(i):u.add(t.find(f=>f._id===i)),T(),w(i),N(i),q(i))})});function q(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const s=!!u.getProduct(t);e.querySelector(".basket-button").style.display=s?"none":"block",e.querySelector(".basket-button-icon-check").style.display=s?"block":"none"}function gt({_id:t,img:e,name:s,is10PercentOff:o,category:n,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=t,r.innerHTML=`
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
  `,r}const L=document.querySelector(".modal-background"),z=document.querySelector(".modal");async function M(t){try{L.classList.remove("is-hidden"),z.innerHTML="";const e=await k.getProduct(t);z.innerHTML=ht(e),et(!!u.getProduct(t)),document.querySelector(".modal-btn").addEventListener("click",()=>tt(e)),document.querySelector(".modal-close-btn").addEventListener("click",O),L.addEventListener("click",st),document.addEventListener("keydown",ot)}catch(e){console.error("Error fetching product data:",e.message)}}function ht({img:t,name:e,category:s,size:o,popularity:n,desc:c,price:i}){return`
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
    </div>`}function tt(t){let e=!!u.getProduct(t._id);e?u.delete(t._id):u.add(t),et(!e),T(),N(t._id),q(t._id),w(t._id)}function et(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function st({target:t}){t===L&&O()}function O(){L.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",O),L.removeEventListener("click",st),document.removeEventListener("keydown",ot),document.querySelector(".modal-btn").removeEventListener("click",tt)}function ot({key:t}){t==="Escape"&&O()}const nt=document.querySelector(".all-products"),vt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function bt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const s=e.closest("LI"),o=e.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const n=s.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){M(n);return}(o==null?void 0:o.nodeName)==="BUTTON"&&(!!u.getProduct(n)?u.delete(n):u.add(t.find(i=>i._id===n)),T(),N(n),q(n),w(n))})}function N(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const s=!!u.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=s?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=s?"block":"none"}function _t({page:t,totalPages:e,results:s}){const o=s.map(({_id:c,name:i,img:r,category:f,price:g,size:P,popularity:h,is10PercentOff:S})=>{const _=!!u.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
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
        <p class="product-list-price__product">$${g.toFixed(2)}</p>
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
    `}nt.innerHTML=`
      <ul class="product-list-product__list">
        ${o}
      </ul>
      ${n}
  `,n&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest("LI");if((i==null?void 0:i.nodeName)!=="LI")return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=t>1?t-1:t),r==="right"&&(r=e-t>0?t+1:t),d.setPage(r),E(),St("#filters"))})}async function E(){try{const t=await k.getProducts(d.get());t.results.length?(_t(t),bt(t.results)):nt.innerHTML=vt}catch(t){console.error(t)}}function St(t){const e=document.querySelector(t),s=document.querySelector(".header");e&&window.scrollTo({top:e.offsetTop-s.offsetHeight,behavior:"smooth"})}const y=document.querySelector(".select-menu"),Ct=y.querySelector(".select-btn"),A=y.querySelector(".sBtn-text"),b=document.querySelector(".select-menu-category"),kt=b.querySelector(".select-btn-custom"),D=b.querySelector(".sBtn-text-select"),Lt=document.querySelector(".search-form"),Tt=document.getElementById("search-icon"),R=document.getElementById("search-item"),Z=d.getValueByKey("keyword");Z&&(R.value=Z);function K(){H(null)}function H(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(s=>{s!==t&&s.classList.contains("active")&&s.classList.remove("active")}),document.removeEventListener("click",K)}Et();Ct.addEventListener("click",t=>{H(y),y.classList.toggle("active"),t.stopPropagation(),y.classList.contains("active")&&document.addEventListener("click",K)});kt.addEventListener("click",t=>{H(b),b.classList.toggle("active"),t.stopPropagation(),b.classList.contains("active")&&document.addEventListener("click",K)});function Et(){const t=document.createElement("ul");t.className="options";const e=d.getValueByKey("sortBy");e!=null&&e.name&&(A.innerText=e.name),d.getSortList().forEach(s=>{const o=document.createElement("li");o.className="option",o.dataset.sortByKey=s.key,o.dataset.sortByValue=s.value;const n=document.createElement("span");n.className="option-text",n.textContent=s.name,A.innerText===n.textContent&&o.classList.add("active"),o.appendChild(n),t.appendChild(o)}),y.appendChild(t),y.addEventListener("click",function(s){const o=s.target.closest(".option");if(o){let n=o.firstChild.innerText;A.innerText=n,y.classList.remove("active");const c=t.querySelector(".option.active");c&&c.classList.remove("active"),o.classList.add("active"),d.setSortBy(o.dataset.sortByKey,o.dataset.sortByValue),E()}})}d.getCategories().then(t=>{const e=document.createElement("ul");e.className="options";const s=d.getValueByKey("category");s&&(D.innerText=s.replace(/_/g," ")),t.push("Show All"),t.forEach(o=>{const n=document.createElement("li");n.className="option-category",o!=="Show All"&&(n.dataset.originalCategory=o);const c=document.createElement("span");c.className="option-text",c.textContent=o.replace(/_/g," "),D.innerText===c.textContent&&n.classList.add("active"),n.appendChild(c),e.appendChild(n)}),b.appendChild(e),e.addEventListener("click",function(o){const n=o.target.closest(".option-category");if(n){let c=n.dataset.originalCategory;D.innerText=n.textContent,b.classList.remove("active");const i=e.querySelector(".option-category.active");i&&i.classList.remove("active"),n.classList.add("active"),d.setCategory(c),E()}})});Lt.addEventListener("submit",W);Tt.addEventListener("click",W);R.addEventListener("focusout",W);function W(t){t.preventDefault();const e=R.value.trim();e!==d.getValueByKey("keyword")&&(d.setKeyword(e),E())}var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ct="Expected a function",J=0/0,Pt="[object Symbol]",$t=/^\s+|\s+$/g,It=/^[-+]0x[0-9a-f]+$/i,xt=/^0b[01]+$/i,wt=/^0o[0-7]+$/i,qt=parseInt,Ot=typeof I=="object"&&I&&I.Object===Object&&I,Nt=typeof self=="object"&&self&&self.Object===Object&&self,Bt=Ot||Nt||Function("return this")(),At=Object.prototype,Dt=At.toString,Ut=Math.max,jt=Math.min,U=function(){return Bt.Date.now()};function Mt(t,e,s){var o,n,c,i,r,f,g=0,P=!1,h=!1,S=!0;if(typeof t!="function")throw new TypeError(ct);e=X(e)||0,x(s)&&(P=!!s.leading,h="maxWait"in s,c=h?Ut(X(s.maxWait)||0,e):c,S="trailing"in s?!!s.trailing:S);function _(l){var m=o,C=n;return o=n=void 0,g=l,i=t.apply(C,m),i}function it(l){return g=l,r=setTimeout($,e),P?_(l):i}function rt(l){var m=l-f,C=l-g,V=e-m;return h?jt(V,c-C):V}function Y(l){var m=l-f,C=l-g;return f===void 0||m>=e||m<0||h&&C>=c}function $(){var l=U();if(Y(l))return F(l);r=setTimeout($,rt(l))}function F(l){return r=void 0,S&&o?_(l):(o=n=void 0,i)}function at(){r!==void 0&&clearTimeout(r),g=0,o=f=n=r=void 0}function dt(){return r===void 0?i:F(U())}function B(){var l=U(),m=Y(l);if(o=arguments,n=this,f=l,m){if(r===void 0)return it(f);if(h)return r=setTimeout($,e),_(f)}return r===void 0&&(r=setTimeout($,e)),i}return B.cancel=at,B.flush=dt,B}function Rt(t,e,s){var o=!0,n=!0;if(typeof t!="function")throw new TypeError(ct);return x(s)&&(o="leading"in s?!!s.leading:o,n="trailing"in s?!!s.trailing:n),Mt(t,e,{leading:o,maxWait:e,trailing:n})}function x(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Kt(t){return!!t&&typeof t=="object"}function Ht(t){return typeof t=="symbol"||Kt(t)&&Dt.call(t)==Pt}function X(t){if(typeof t=="number")return t;if(Ht(t))return J;if(x(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=x(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace($t,"");var s=xt.test(t);return s||wt.test(t)?qt(t.slice(2),s?2:8):It.test(t)?J:+t}var Wt=Rt;const Q=document.querySelector(".scroll-up");document.addEventListener("scroll",Wt(Yt,400));function Yt(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?Q.classList.add("scroll-up-is-hidden"):Q.classList.remove("scroll-up-is-hidden")}T();E();
