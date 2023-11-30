import{S as d,F as k,C as a,u as T}from"./footer-5e3389c9.js";lt();function lt(){document.querySelectorAll(".food-letter").forEach((e,n)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},n*100)})}const v=d.FILTER_KEY,M=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:void 0,value:void 0}],ut=M[0],z={keyword:void 0,category:void 0,sortBy:ut,page:1,limit:9},pt=5;class l{static get(){return d.get(v)??z}static getValueByKey(e){return l.get()[e]}static async getCategories(){let e=d.get(d.CATEGORIES_KEY);if(!e)try{e=await k.getCategories(),e=e.filter(n=>!n.includes(" ")),d.set(d.CATEGORIES_KEY,e)}catch(n){console.error("FoodBotiqueApi.getCategories error",n)}return e??[]}static getSortList(){return M}static async getDiscountedProducts(e=2){let n=d.getWithExpiry(d.DISCOUNTED_PRODUCTS_KEY);if(!n)try{n=await k.getDiscountedProducts(),d.setWithExpiry(d.DISCOUNTED_PRODUCTS_KEY,n)}catch(s){console.error("FoodBotiqueApi.getDiscountedProducts error",s)}return n.slice(0,e)??[]}static async getPopularProducts(e=5){let n=d.getWithExpiry(d.POPULAR_PRODUCTS_KEY);if(!n)try{n=await k.getPopularProducts(pt),d.setWithExpiry(d.POPULAR_PRODUCTS_KEY,n)}catch(s){console.error("FoodBotiqueApi.getPopularProducts error",s)}return n.slice(0,e)??[]}static setKeyword(e){const n=l.get();d.set(v,{...n,keyword:e,page:1})}static setCategory(e){const n=l.get();d.set(v,{...n,category:e,page:1})}static setPage(e){const n=l.get();d.set(v,{...n,page:e})}static setLimit(e){const n=l.get();d.set(v,{...n,limit:e,page:1})}static setSortBy(e,n){const s=l.get();console.log(e,n),d.set(v,{...s,page:1,sortBy:M.find(o=>o.key===e&&o.value===JSON.parse(n))})}static reset(){d.set(v,z)}}const p="/organic-food-boutique-store/assets/icons-8fcbdd30.svg",ft=document.querySelector(".discount-container");l.getDiscountedProducts().then(t=>{const e=t.map(mt),n=document.createElement("ul");n.className="discount-list",e.map(s=>{const o=s.dataset.productId,c=!!a.getProduct(o);s.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",s.querySelector(".discount-button-icon-check").style.display=c?"block":"none",n.appendChild(s)}),ft.appendChild(n),n.addEventListener("click",({target:s})=>{const o=s.closest("LI"),c=s.closest("BUTTON");if((o==null?void 0:o.nodeName)!=="LI")return;const i=o.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){R(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!a.getProduct(i)?a.delete(i):a.add(t.find(f=>f._id===i)),T(),w(i),B(i),O(i))})});function w(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const n=!!a.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=n?"none":"block",e.querySelector(".discount-button-icon-check").style.display=n?"block":"none"}function mt({_id:t,img:e,name:n,price:s}){const o=document.createElement("li");return o.className="discount-item",o.dataset.productId=t,o.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${n}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${p}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${n}</h3>
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
 `,o}const yt=document.querySelector(".popular-products-container");l.getPopularProducts().then(t=>{const e=t.map(gt),n=document.createElement("ul");n.className="popular-products-list",e.map(s=>{const o=s.dataset.productId,c=!!a.getProduct(o);s.querySelector(".basket-button").style.display=c?"none":"block",s.querySelector(".basket-button-icon-check").style.display=c?"block":"none",n.appendChild(s)}),yt.appendChild(n),n.addEventListener("click",({target:s})=>{const o=s.closest("LI"),c=s.closest("BUTTON");if((o==null?void 0:o.nodeName)!=="LI")return;const i=o.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){R(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!a.getProduct(i)?a.delete(i):a.add(t.find(f=>f._id===i)),T(),w(i),B(i),O(i))})});function O(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const n=!!a.getProduct(t);e.querySelector(".basket-button").style.display=n?"none":"block",e.querySelector(".basket-button-icon-check").style.display=n?"block":"none"}function gt({_id:t,img:e,name:n,is10PercentOff:s,category:o,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=t,r.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${n}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${s?"":"display:none"}">
        <use href="${p}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${n}</h3>
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
            ${o.replaceAll("_"," ")}
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
  `,r}const L=document.querySelector(".modal-background"),Z=document.querySelector(".modal");async function R(t){try{L.classList.remove("is-hidden"),Z.innerHTML="";const e=await k.getProduct(t);Z.innerHTML=ht(e);const n=a.getProduct(t);et(!!n),document.querySelector(".modal-btn").addEventListener("click",()=>I(e)),document.querySelector(".modal-close-btn").addEventListener("click",N),L.addEventListener("click",nt),document.addEventListener("keydown",st);const s=document.querySelector(".quantity");s.textContent=(n==null?void 0:n.amount)??1,document.querySelector('button[data-action="decrement"]').addEventListener("click",()=>{const o=s.textContent-1;s.textContent=o,o<1?(s.textContent=1,a.getProduct(t)&&I(e)):a.update(e,o)}),document.querySelector('button[data-action="increment"]').addEventListener("click",()=>{const o=Number(s.textContent)+1;s.textContent=o,a.getProduct(t)?a.update(e,o):I(e)})}catch(e){console.error("Error fetching product data:",e.message)}}function ht({img:t,name:e,category:n,size:s,popularity:o,desc:c,price:i}){return`
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
              ${n.replaceAll("_"," ")}
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
        <p class="modal-about-product">${c}</p>
      </div>
    </div>
    <div class="modal-price-container">
      <p class="modal-price-product">
        <span>$</span><span class="modal-price">${i}</span>
      </p>
      <div class="quantity-and-add">
        <div class="quantity-in-modal">
          <button type="button" class="minus-btn" data-action="decrement" aria-label="minus quantity product">
            <svg class="minus-btn-icon">
              <use href="${p}#icon-minus"></use>
            </svg>
          </button>

          <span class="quantity">1</span>

          <button type="button" class="plus-btn" data-action="increment" aria-label="plus quantity product">
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
    </div>`}function I(t){let e=!!a.getProduct(t._id);e?(a.delete(t._id),document.querySelector(".quantity").textContent=1):a.add(t),et(!e),T(),B(t._id),O(t._id),w(t._id)}function et(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function nt({target:t}){t===L&&N()}function N(){L.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",N),L.removeEventListener("click",nt),document.removeEventListener("keydown",st),document.querySelector(".modal-btn").removeEventListener("click",I)}function st({key:t}){t==="Escape"&&N()}const ot=document.querySelector(".all-products"),vt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function bt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const n=e.closest("LI"),s=e.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const o=n.dataset.productId;if((s==null?void 0:s.nodeName)!=="BUTTON"){R(o);return}(s==null?void 0:s.nodeName)==="BUTTON"&&(!!a.getProduct(o)?a.delete(o):a.add(t.find(i=>i._id===o)),T(),B(o),O(o),w(o))})}function B(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const n=!!a.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=n?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=n?"block":"none"}function _t({page:t,totalPages:e,results:n}){const s=n.map(({_id:c,name:i,img:r,category:f,price:g,size:P,popularity:h,is10PercentOff:C})=>{const _=!!a.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${C?"":"display:none"}"
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
    </li>`}).join("");let o="";if(e>1){const c=[];for(let r=1;r<=e;r++)c.push(r);e!==5&&(t<=2||e-t<2?c.splice(2,e-4,"..."):(c.length-t!==2&&c.splice(t,c.length-t-1,"..."),t!==3&&c.splice(1,t-2,"...")));const i=c.map(r=>`<li class="product-list-page__item ${r===t?"active":r==="..."?"not-number":""}" data-page-number="${r}">${r}</li>`).join("");o=`
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
    `}ot.innerHTML=`
      <ul class="product-list-product__list">
        ${s}
      </ul>
      ${o}
  `,o&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest("LI");if((i==null?void 0:i.nodeName)!=="LI")return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=t>1?t-1:t),r==="right"&&(r=e-t>0?t+1:t),l.setPage(r),E(),Ct("#filters"))})}async function E(){try{const t=await k.getProducts(l.get());t.results.length?(_t(t),bt(t.results)):ot.innerHTML=vt}catch(t){console.error(t)}}function Ct(t){const e=document.querySelector(t),n=document.querySelector(".header");e&&window.scrollTo({top:e.offsetTop-n.offsetHeight,behavior:"smooth"})}const y=document.querySelector(".select-menu"),St=y.querySelector(".select-btn"),D=y.querySelector(".sBtn-text"),b=document.querySelector(".select-menu-category"),kt=b.querySelector(".select-btn-custom"),U=b.querySelector(".sBtn-text-select"),Lt=document.querySelector(".search-form"),Tt=document.getElementById("search-icon"),K=document.getElementById("search-item"),J=l.getValueByKey("keyword");J&&(K.value=J);function H(){W(null)}function W(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(n=>{n!==t&&n.classList.contains("active")&&n.classList.remove("active")}),document.removeEventListener("click",H)}Et();St.addEventListener("click",t=>{W(y),y.classList.toggle("active"),t.stopPropagation(),y.classList.contains("active")&&document.addEventListener("click",H)});kt.addEventListener("click",t=>{W(b),b.classList.toggle("active"),t.stopPropagation(),b.classList.contains("active")&&document.addEventListener("click",H)});function Et(){const t=document.createElement("ul");t.className="options";const e=l.getValueByKey("sortBy");e!=null&&e.name&&(D.innerText=e.name),l.getSortList().forEach(n=>{const s=document.createElement("li");s.className="option",s.dataset.sortByKey=n.key,s.dataset.sortByValue=n.value;const o=document.createElement("span");o.className="option-text",o.textContent=n.name,D.innerText===o.textContent&&s.classList.add("active"),s.appendChild(o),t.appendChild(s)}),y.appendChild(t),y.addEventListener("click",function(n){const s=n.target.closest(".option");if(s){let o=s.firstChild.innerText;D.innerText=o,y.classList.remove("active");const c=t.querySelector(".option.active");c&&c.classList.remove("active"),s.classList.add("active"),l.setSortBy(s.dataset.sortByKey,s.dataset.sortByValue),E()}})}l.getCategories().then(t=>{const e=document.createElement("ul");e.className="options";const n=l.getValueByKey("category");n&&(U.innerText=n.replace(/_/g," ")),t.push("Show All"),t.forEach(s=>{const o=document.createElement("li");o.className="option-category",s!=="Show All"&&(o.dataset.originalCategory=s);const c=document.createElement("span");c.className="option-text",c.textContent=s.replace(/_/g," "),U.innerText===c.textContent&&o.classList.add("active"),o.appendChild(c),e.appendChild(o)}),b.appendChild(e),e.addEventListener("click",function(s){const o=s.target.closest(".option-category");if(o){let c=o.dataset.originalCategory;U.innerText=o.textContent,b.classList.remove("active");const i=e.querySelector(".option-category.active");i&&i.classList.remove("active"),o.classList.add("active"),l.setCategory(c),E()}})});Lt.addEventListener("submit",V);Tt.addEventListener("click",V);K.addEventListener("focusout",V);function V(t){t.preventDefault();const e=K.value.trim();e!==l.getValueByKey("keyword")&&(l.setKeyword(e),E())}var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ct="Expected a function",Q=0/0,Pt="[object Symbol]",$t=/^\s+|\s+$/g,xt=/^[-+]0x[0-9a-f]+$/i,It=/^0b[01]+$/i,qt=/^0o[0-7]+$/i,wt=parseInt,Ot=typeof x=="object"&&x&&x.Object===Object&&x,Nt=typeof self=="object"&&self&&self.Object===Object&&self,Bt=Ot||Nt||Function("return this")(),At=Object.prototype,Dt=At.toString,Ut=Math.max,jt=Math.min,j=function(){return Bt.Date.now()};function Mt(t,e,n){var s,o,c,i,r,f,g=0,P=!1,h=!1,C=!0;if(typeof t!="function")throw new TypeError(ct);e=X(e)||0,q(n)&&(P=!!n.leading,h="maxWait"in n,c=h?Ut(X(n.maxWait)||0,e):c,C="trailing"in n?!!n.trailing:C);function _(u){var m=s,S=o;return s=o=void 0,g=u,i=t.apply(S,m),i}function it(u){return g=u,r=setTimeout($,e),P?_(u):i}function rt(u){var m=u-f,S=u-g,G=e-m;return h?jt(G,c-S):G}function Y(u){var m=u-f,S=u-g;return f===void 0||m>=e||m<0||h&&S>=c}function $(){var u=j();if(Y(u))return F(u);r=setTimeout($,rt(u))}function F(u){return r=void 0,C&&s?_(u):(s=o=void 0,i)}function at(){r!==void 0&&clearTimeout(r),g=0,s=f=o=r=void 0}function dt(){return r===void 0?i:F(j())}function A(){var u=j(),m=Y(u);if(s=arguments,o=this,f=u,m){if(r===void 0)return it(f);if(h)return r=setTimeout($,e),_(f)}return r===void 0&&(r=setTimeout($,e)),i}return A.cancel=at,A.flush=dt,A}function Rt(t,e,n){var s=!0,o=!0;if(typeof t!="function")throw new TypeError(ct);return q(n)&&(s="leading"in n?!!n.leading:s,o="trailing"in n?!!n.trailing:o),Mt(t,e,{leading:s,maxWait:e,trailing:o})}function q(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Kt(t){return!!t&&typeof t=="object"}function Ht(t){return typeof t=="symbol"||Kt(t)&&Dt.call(t)==Pt}function X(t){if(typeof t=="number")return t;if(Ht(t))return Q;if(q(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=q(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace($t,"");var n=It.test(t);return n||qt.test(t)?wt(t.slice(2),n?2:8):xt.test(t)?Q:+t}var Wt=Rt;const tt=document.querySelector(".scroll-up");document.addEventListener("scroll",Wt(Vt,400));function Vt(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?tt.classList.add("scroll-up-is-hidden"):tt.classList.remove("scroll-up-is-hidden")}T();E();
