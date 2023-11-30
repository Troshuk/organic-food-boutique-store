var Ct=Object.defineProperty;var Lt=(t,e,n)=>e in t?Ct(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var F=(t,e,n)=>(Lt(t,typeof e!="symbol"?e+"":e,n),n);import{S as p,F as I,C as d,u as O,i as m}from"./icons-263a26ae.js";Tt();function Tt(){document.querySelectorAll(".food-letter").forEach((e,n)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},n*100)})}const L=p.FILTER_KEY,X=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:void 0,value:void 0}],Et=X[0],it={keyword:void 0,category:void 0,sortBy:Et,page:1,limit:9},xt=5;class u{static get(){return p.get(L)??it}static getValueByKey(e){return u.get()[e]}static async getCategories(){let e=p.get(p.CATEGORIES_KEY);if(!e)try{e=await I.getCategories(),e=e.filter(n=>!n.includes(" ")),p.set(p.CATEGORIES_KEY,e)}catch(n){console.error("FoodBotiqueApi.getCategories error",n)}return e??[]}static getSortList(){return X}static async getDiscountedProducts(e=2){let n=p.getWithExpiry(p.DISCOUNTED_PRODUCTS_KEY);if(!n)try{n=await I.getDiscountedProducts(),p.setWithExpiry(p.DISCOUNTED_PRODUCTS_KEY,n)}catch(o){console.error("FoodBotiqueApi.getDiscountedProducts error",o)}return n.slice(0,e)??[]}static async getPopularProducts(e=5){let n=p.getWithExpiry(p.POPULAR_PRODUCTS_KEY);if(!n)try{n=await I.getPopularProducts(xt),p.setWithExpiry(p.POPULAR_PRODUCTS_KEY,n)}catch(o){console.error("FoodBotiqueApi.getPopularProducts error",o)}return n.slice(0,e)??[]}static setKeyword(e){const n=u.get();p.set(L,{...n,keyword:e,page:1})}static setCategory(e){const n=u.get();p.set(L,{...n,category:e,page:1})}static setPage(e){const n=u.get();p.set(L,{...n,page:e})}static setLimit(e){const n=u.get();p.set(L,{...n,limit:e,page:1})}static setSortBy(e,n){const o=u.get();console.log(e,n),p.set(L,{...o,page:1,sortBy:X.find(s=>s.key===e&&s.value===JSON.parse(n))})}static reset(){p.set(L,it)}}class j{constructor(e=null){F(this,"loader");F(this,"container");this.createLoader(),this.container=e}createLoader(){const e=document.createElement("div");e.classList.add("loader"),this.loader=document.createElement("div"),this.loader.classList.add("loader-container"),this.loader.appendChild(e)}show(){this.container.style.position="relative",this.container.appendChild(this.loader)}remove(){this.loader.remove()}}const yt=document.querySelector(".discount-container"),gt=new j(yt);gt.show();u.getDiscountedProducts().then(t=>{const e=t.map(Pt),n=document.createElement("ul");n.className="discount-list",e.map(o=>{const s=o.dataset.productId,i=!!d.getProduct(s);o.querySelector(".discount-button-icon-cart").style.display=i?"none":"block",o.querySelector(".discount-button-icon-check").style.display=i?"block":"none",n.appendChild(o)}),yt.appendChild(n),n.addEventListener("click",({target:o})=>{const s=o.closest("LI"),i=o.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const r=s.dataset.productId;if((i==null?void 0:i.nodeName)!=="BUTTON"){Q(r);return}(i==null?void 0:i.nodeName)==="BUTTON"&&(!!d.getProduct(r)?d.delete(r):d.add(t.find(l=>l._id===r)),O(),A(r),M(r),D(r))})}).finally(()=>gt.remove());function A(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const n=!!d.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=n?"none":"block",e.querySelector(".discount-button-icon-check").style.display=n?"block":"none"}function Pt({_id:t,img:e,name:n,price:o}){const s=document.createElement("li");return s.className="discount-item",s.dataset.productId=t,s.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${n}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${m}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${n}</h3>
        <p class="discount-product-price">$${o.toFixed(2)}</p>
        <button type="button" class="discount-btn" aria-label="discount product">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${m}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${m}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,s}const ht=document.querySelector(".popular-products-container"),vt=new j(ht);vt.show();u.getPopularProducts().then(t=>{const e=t.map(wt),n=document.createElement("ul");n.className="popular-products-list",e.map(o=>{const s=o.dataset.productId,i=!!d.getProduct(s);o.querySelector(".basket-button").style.display=i?"none":"block",o.querySelector(".basket-button-icon-check").style.display=i?"block":"none",n.appendChild(o)}),ht.appendChild(n),n.addEventListener("click",({target:o})=>{const s=o.closest("LI"),i=o.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const r=s.dataset.productId;if((i==null?void 0:i.nodeName)!=="BUTTON"){Q(r);return}(i==null?void 0:i.nodeName)==="BUTTON"&&(!!d.getProduct(r)?d.delete(r):d.add(t.find(l=>l._id===r)),O(),A(r),M(r),D(r))})}).finally(()=>vt.remove());function D(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const n=!!d.getProduct(t);e.querySelector(".basket-button").style.display=n?"none":"block",e.querySelector(".basket-button-icon-check").style.display=n?"block":"none"}function wt({_id:t,img:e,name:n,is10PercentOff:o,category:s,size:i,popularity:r}){const c=document.createElement("li");return c.className="popular-products-item",c.dataset.productId=t,c.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${n}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${o?"":"display:none"}">
        <use href="${m}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${n}</h3>
      <button class="basket-button" type="button" aria-label="basket shopping">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="${m}#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check" aria-label="basket check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="${m}#icon-check"></use>
        </svg>
      </button> 

      <div class="popular-products-description-container">
        <p class="popular-products-description">
          Category:
          <span class="popular-description">
            ${s.replaceAll("_"," ")}
          </span>
        </p>

        <p class="popular-products-description">
          Size:
          <span class="popular-description">${i}</span>
        </p>

        <p class="popular-products-description">
          Popularity:
          <span class="popular-description">${r}</span>
        </p>
      </div>
    </div>
  `,c}const q=document.querySelector(".modal-background"),Z=document.querySelector(".modal"),ct=new j(Z);async function Q(t){try{q.classList.remove("is-hidden"),document.body.classList.add("is-modal-open"),Z.innerHTML=`
      <button type="button" class="modal-close-btn" aria-label="modal close">
        <svg class="modal-icon-close" width="22" height="22">
          <use href="${m}#icon-x-close"></use>
        </svg>
      </button>
    `,ct.show();const e=await I.getProduct(t);Z.insertAdjacentHTML("beforeend",It(e));const n=d.getProduct(t);bt(!!n),document.querySelector(".modal-btn").addEventListener("click",()=>N(e)),document.querySelector(".modal-close-btn").addEventListener("click",U),q.addEventListener("click",_t),document.addEventListener("keydown",St);const o=document.querySelector(".quantity");o.textContent=(n==null?void 0:n.amount)??1,document.querySelector('button[data-action="decrement"]').addEventListener("click",()=>{const s=o.textContent-1;o.textContent=s,s<1?(o.textContent=1,d.getProduct(t)&&N(e)):d.update(e,s)}),document.querySelector('button[data-action="increment"]').addEventListener("click",()=>{const s=Number(o.textContent)+1;o.textContent=s,d.getProduct(t)?d.update(e,s):N(e)})}catch(e){console.error("Error fetching product data:",e.message)}finally{ct.remove()}}function It({img:t,name:e,category:n,size:o,popularity:s,desc:i,price:r}){return`
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
            <span class="modal-subtitle-info">${o}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${s}</span>
          </div>
        </div>
        <p class="modal-about-product">${i}</p>
      </div>
    </div>
    <div class="modal-price-container">
      <p class="modal-price-product">
        <span>$</span><span class="modal-price">${r}</span>
      </p>
      <div class="quantity-and-add">
        <div class="quantity-in-modal">
          <button type="button" class="minus-btn" data-action="decrement" aria-label="minus quantity product">
            <svg class="minus-btn-icon">
              <use href="${m}#icon-minus"></use>
            </svg>
          </button>

          <span class="quantity">1</span>

          <button type="button" class="plus-btn" data-action="increment" aria-label="plus quantity product">
            <svg class="plus-btn-icon">
              <use href="${m}#icon-plus"></use>
            </svg>
          </button>
        </div>

        <button class="modal-btn" aria-label="add to card">
          <span class="modal-btn-text">Add to</span>
          <svg class="modal-icon-shop" width="18" height="18">
            <use href="${m}#icon-shopping-cart"></use>
          </svg>
        </button>
      </div>
    </div>`}function N(t){let e=!!d.getProduct(t._id);e?(d.delete(t._id),document.querySelector(".quantity").textContent=1):d.add(t),bt(!e),O(),M(t._id),D(t._id),A(t._id)}function bt(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function _t({target:t}){t===q&&U()}function U(){q.classList.add("is-hidden"),document.body.classList.remove("is-modal-open"),document.querySelector(".modal-close-btn").removeEventListener("click",U),q.removeEventListener("click",_t),document.removeEventListener("keydown",St),document.querySelector(".modal-btn").removeEventListener("click",N)}function St({key:t}){t==="Escape"&&U()}const tt=document.querySelector(".all-products"),rt=new j(tt),qt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function Ot(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const n=e.closest("LI"),o=e.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const s=n.dataset.productId;if((o==null?void 0:o.nodeName)!=="BUTTON"){Q(s);return}(o==null?void 0:o.nodeName)==="BUTTON"&&(!!d.getProduct(s)?d.delete(s):d.add(t.find(r=>r._id===s)),O(),M(s),D(s),A(s))})}function M(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const n=!!d.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=n?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=n?"block":"none"}function Nt({page:t,totalPages:e,results:n}){const o=n.map(({_id:i,name:r,img:c,category:l,price:y,size:$,popularity:g,is10PercentOff:b})=>{const v=!!d.getProduct(i);return`<li class="product-list-product__card" data-product-id=${i}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${b?"":"display:none"}"
      >
        <use href="${m}#icon-discount"></use>
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
            <span>${l.replaceAll("_"," ")}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${$}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${g}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">$${y.toFixed(2)}</p>
        <button type="button" class="product-list-button__card" aria-label="product button">
          <svg
            class="product-list-icon__btn"
            width="18"
            height="18"
            style="${v?"display:none":""}"
          >
            <use href="${m}#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${v?"display:block":"display:none"}"
          >
            <use href="${m}#icon-check"></use>
          </svg>
         </button>
      </div>
    </li>`}).join("");let s="";if(e>1){const i=[];for(let c=1;c<=e;c++)i.push(c);e!==5&&(t<=2||e-t<2?i.splice(2,e-4,"..."):(i.length-t!==2&&i.splice(t,i.length-t-1,"..."),t!==3&&i.splice(1,t-2,"...")));const r=i.map(c=>`<li class="product-list-page__item ${c===t?"active":c==="..."?"not-number":""}" data-page-number="${c}">${c}</li>`).join("");s=`
      <div class="product-list-pagination">
          <div class="product-list-pagination__list">
            <div
              class="product-list-page__item nav__btn"
              data-page-number="left"
              ${t===1?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${m}#icon-arrow-left"></use>
              </svg>
            </div>
            <ul class="product-list-page__numbers">
              ${r}
            </ul>
            <div
              class="product-list-page__item nav__btn"
              data-page-number="right"
              ${t===e?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${m}#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
      </div>
    `}tt.innerHTML=`
      <h2 class="visually-hidden">Filtered Products</h2>
      <ul class="product-list-product__list">
        ${o}
      </ul>
      ${s}
  `,s&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:i})=>{const r=i.closest(".product-list-page__item");if(!r)return;let c=r.dataset.pageNumber;c!=="..."&&(c==="left"&&(c=t>1?t-1:t,t===1)||c==="right"&&(c=e-t>0?t+1:t,t===e)||(u.setPage(c),E(),Bt("#filters")))})}async function E(){try{let t=9;window.innerWidth<1440&&(t=8),window.innerWidth<768&&(t=6),u.setLimit(t),rt.show();const e=await I.getProducts(u.get());e.results.length?(Nt(e),Ot(e.results)):tt.innerHTML=qt}catch(t){console.error(t)}finally{rt.remove()}}function Bt(t){const e=document.querySelector(t),n=document.querySelector(".header");e&&window.scrollTo({top:e.offsetTop-n.offsetHeight,behavior:"smooth"})}const k=document.querySelector(".select-menu"),jt=k.querySelector(".select-btn"),V=k.querySelector(".sBtn-text"),T=document.querySelector(".select-menu-category"),At=T.querySelector(".select-btn-custom"),Y=T.querySelector(".sBtn-text-select"),Dt=document.querySelector(".search-form"),Ut=document.getElementById("search-icon"),et=document.getElementById("search-item"),at=u.getValueByKey("keyword");at&&(et.value=at);function nt(){ot(null)}function ot(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(n=>{n!==t&&n.classList.contains("active")&&n.classList.remove("active")}),document.removeEventListener("click",nt)}Mt();jt.addEventListener("click",t=>{ot(k),k.classList.toggle("active"),t.stopPropagation(),k.classList.contains("active")&&document.addEventListener("click",nt)});At.addEventListener("click",t=>{ot(T),T.classList.toggle("active"),t.stopPropagation(),T.classList.contains("active")&&document.addEventListener("click",nt)});function Mt(){const t=document.createElement("ul");t.className="options";const e=u.getValueByKey("sortBy");e!=null&&e.name&&(V.innerText=e.name),u.getSortList().forEach(n=>{const o=document.createElement("li");o.className="option",o.dataset.sortByKey=n.key,o.dataset.sortByValue=n.value;const s=document.createElement("span");s.className="option-text",s.textContent=n.name,V.innerText===s.textContent&&o.classList.add("active"),o.appendChild(s),t.appendChild(o)}),k.appendChild(t),k.addEventListener("click",function(n){const o=n.target.closest(".option");if(o){let s=o.firstChild.innerText;V.innerText=s,k.classList.remove("active");const i=t.querySelector(".option.active");i&&i.classList.remove("active"),o.classList.add("active"),u.setSortBy(o.dataset.sortByKey,o.dataset.sortByValue),E()}})}u.getCategories().then(t=>{const e=document.createElement("ul");e.className="options";const n=u.getValueByKey("category");n&&(Y.innerText=n.replace(/_/g," ")),t.push("Show All"),t.forEach(o=>{const s=document.createElement("li");s.className="option-category",o!=="Show All"&&(s.dataset.originalCategory=o);const i=document.createElement("span");i.className="option-text",i.textContent=o.replace(/_/g," "),Y.innerText===i.textContent&&s.classList.add("active"),s.appendChild(i),e.appendChild(s)}),T.appendChild(e),e.addEventListener("click",function(o){const s=o.target.closest(".option-category");if(s){let i=s.dataset.originalCategory;Y.innerText=s.textContent,T.classList.remove("active");const r=e.querySelector(".option-category.active");r&&r.classList.remove("active"),s.classList.add("active"),u.setCategory(i),E()}})});Dt.addEventListener("submit",st);Ut.addEventListener("click",st);et.addEventListener("focusout",st);function st(t){t.preventDefault();const e=et.value.trim();e!==u.getValueByKey("keyword")&&(u.setKeyword(e),E())}var S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},kt="Expected a function",dt=0/0,Rt="[object Symbol]",Kt=/^\s+|\s+$/g,Wt=/^[-+]0x[0-9a-f]+$/i,Ht=/^0b[01]+$/i,Ft=/^0o[0-7]+$/i,Vt=parseInt,Yt=typeof S=="object"&&S&&S.Object===Object&&S,Gt=typeof self=="object"&&self&&self.Object===Object&&self,zt=Yt||Gt||Function("return this")(),Xt=Object.prototype,Zt=Xt.toString,Jt=Math.max,Qt=Math.min,G=function(){return zt.Date.now()};function te(t,e,n){var o,s,i,r,c,l,y=0,$=!1,g=!1,b=!0;if(typeof t!="function")throw new TypeError(kt);e=lt(e)||0,B(n)&&($=!!n.leading,g="maxWait"in n,i=g?Jt(lt(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b);function v(a){var f=o,h=s;return o=s=void 0,y=a,r=t.apply(h,f),r}function R(a){return y=a,c=setTimeout(_,e),$?v(a):r}function K(a){var f=a-l,h=a-y,w=e-f;return g?Qt(w,i-h):w}function x(a){var f=a-l,h=a-y;return l===void 0||f>=e||f<0||g&&h>=i}function _(){var a=G();if(x(a))return P(a);c=setTimeout(_,K(a))}function P(a){return c=void 0,b&&o?v(a):(o=s=void 0,r)}function W(){c!==void 0&&clearTimeout(c),y=0,o=l=s=c=void 0}function H(){return c===void 0?r:P(G())}function C(){var a=G(),f=x(a);if(o=arguments,s=this,l=a,f){if(c===void 0)return R(l);if(g)return c=setTimeout(_,e),v(l)}return c===void 0&&(c=setTimeout(_,e)),r}return C.cancel=W,C.flush=H,C}function ee(t,e,n){var o=!0,s=!0;if(typeof t!="function")throw new TypeError(kt);return B(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),te(t,e,{leading:o,maxWait:e,trailing:s})}function B(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function ne(t){return!!t&&typeof t=="object"}function oe(t){return typeof t=="symbol"||ne(t)&&Zt.call(t)==Rt}function lt(t){if(typeof t=="number")return t;if(oe(t))return dt;if(B(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=B(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Kt,"");var n=Ht.test(t);return n||Ft.test(t)?Vt(t.slice(2),n?2:8):Wt.test(t)?dt:+t}var se=ee;const ut=document.querySelector(".scroll-up");document.addEventListener("scroll",se(ie,400));function ie(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?ut.classList.add("scroll-up-is-hidden"):ut.classList.remove("scroll-up-is-hidden")}var ce="Expected a function",pt=0/0,re="[object Symbol]",ae=/^\s+|\s+$/g,de=/^[-+]0x[0-9a-f]+$/i,le=/^0b[01]+$/i,ue=/^0o[0-7]+$/i,pe=parseInt,fe=typeof S=="object"&&S&&S.Object===Object&&S,me=typeof self=="object"&&self&&self.Object===Object&&self,ye=fe||me||Function("return this")(),ge=Object.prototype,he=ge.toString,ve=Math.max,be=Math.min,z=function(){return ye.Date.now()};function _e(t,e,n){var o,s,i,r,c,l,y=0,$=!1,g=!1,b=!0;if(typeof t!="function")throw new TypeError(ce);e=ft(e)||0,J(n)&&($=!!n.leading,g="maxWait"in n,i=g?ve(ft(n.maxWait)||0,e):i,b="trailing"in n?!!n.trailing:b);function v(a){var f=o,h=s;return o=s=void 0,y=a,r=t.apply(h,f),r}function R(a){return y=a,c=setTimeout(_,e),$?v(a):r}function K(a){var f=a-l,h=a-y,w=e-f;return g?be(w,i-h):w}function x(a){var f=a-l,h=a-y;return l===void 0||f>=e||f<0||g&&h>=i}function _(){var a=z();if(x(a))return P(a);c=setTimeout(_,K(a))}function P(a){return c=void 0,b&&o?v(a):(o=s=void 0,r)}function W(){c!==void 0&&clearTimeout(c),y=0,o=l=s=c=void 0}function H(){return c===void 0?r:P(z())}function C(){var a=z(),f=x(a);if(o=arguments,s=this,l=a,f){if(c===void 0)return R(l);if(g)return c=setTimeout(_,e),v(l)}return c===void 0&&(c=setTimeout(_,e)),r}return C.cancel=W,C.flush=H,C}function J(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Se(t){return!!t&&typeof t=="object"}function ke(t){return typeof t=="symbol"||Se(t)&&he.call(t)==re}function ft(t){if(typeof t=="number")return t;if(ke(t))return pt;if(J(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=J(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(ae,"");var n=le.test(t);return n||ue.test(t)?pe(t.slice(2),n?2:8):de.test(t)?pt:+t}var $e=_e;const Ce=768,Le=1440;O();E();let mt=$t(window.innerWidth);window.addEventListener("resize",$e(()=>{const t=$t(window.innerWidth);mt!==t&&(mt=t,E())},300));function $t(t){switch(!0){case t<Ce:return"mobile";case t>=Le:return"desktop";default:return"tablet"}}
