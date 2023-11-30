var vt=Object.defineProperty;var bt=(e,t,o)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var U=(e,t,o)=>(bt(e,typeof t!="symbol"?t+"":t,o),o);import{S as l,F as k,C as a,u as E,i as p}from"./icons-263a26ae.js";_t();function _t(){document.querySelectorAll(".food-letter").forEach((t,o)=>{setTimeout(()=>{t.style.animation="none",t.offsetHeight,t.style.animation=null},o*100)})}const v=l.FILTER_KEY,K=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:void 0,value:void 0}],Ct=K[0],X={keyword:void 0,category:void 0,sortBy:Ct,page:1,limit:9},St=5;class d{static get(){return l.get(v)??X}static getValueByKey(t){return d.get()[t]}static async getCategories(){let t=l.get(l.CATEGORIES_KEY);if(!t)try{t=await k.getCategories(),t=t.filter(o=>!o.includes(" ")),l.set(l.CATEGORIES_KEY,t)}catch(o){console.error("FoodBotiqueApi.getCategories error",o)}return t??[]}static getSortList(){return K}static async getDiscountedProducts(t=2){let o=l.getWithExpiry(l.DISCOUNTED_PRODUCTS_KEY);if(!o)try{o=await k.getDiscountedProducts(),l.setWithExpiry(l.DISCOUNTED_PRODUCTS_KEY,o)}catch(n){console.error("FoodBotiqueApi.getDiscountedProducts error",n)}return o.slice(0,t)??[]}static async getPopularProducts(t=5){let o=l.getWithExpiry(l.POPULAR_PRODUCTS_KEY);if(!o)try{o=await k.getPopularProducts(St),l.setWithExpiry(l.POPULAR_PRODUCTS_KEY,o)}catch(n){console.error("FoodBotiqueApi.getPopularProducts error",n)}return o.slice(0,t)??[]}static setKeyword(t){const o=d.get();l.set(v,{...o,keyword:t,page:1})}static setCategory(t){const o=d.get();l.set(v,{...o,category:t,page:1})}static setPage(t){const o=d.get();l.set(v,{...o,page:t})}static setLimit(t){const o=d.get();l.set(v,{...o,limit:t,page:1})}static setSortBy(t,o){const n=d.get();console.log(t,o),l.set(v,{...n,page:1,sortBy:K.find(s=>s.key===t&&s.value===JSON.parse(o))})}static reset(){l.set(v,X)}}class q{constructor(t=null){U(this,"loader");U(this,"container");this.createLoader(),this.container=t}createLoader(){const t=document.createElement("div");t.classList.add("loader"),this.loader=document.createElement("div"),this.loader.classList.add("loader-container"),this.loader.appendChild(t)}show(){this.container.style.position="relative",this.container.appendChild(this.loader)}remove(){this.loader.remove()}}const it=document.querySelector(".discount-container"),rt=new q(it);rt.show();d.getDiscountedProducts().then(e=>{const t=e.map(kt),o=document.createElement("ul");o.className="discount-list",t.map(n=>{const s=n.dataset.productId,c=!!a.getProduct(s);n.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",n.querySelector(".discount-button-icon-check").style.display=c?"block":"none",o.appendChild(n)}),it.appendChild(o),o.addEventListener("click",({target:n})=>{const s=n.closest("LI"),c=n.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const i=s.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){W(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!a.getProduct(i)?a.delete(i):a.add(e.find(m=>m._id===i)),E(),O(i),A(i),N(i))})}).finally(()=>rt.remove());function O(e){const t=document.querySelector(`.discount-item[data-product-id="${e}"]`);if(!t)return;const o=!!a.getProduct(e);t.querySelector(".discount-button-icon-cart").style.display=o?"none":"block",t.querySelector(".discount-button-icon-check").style.display=o?"block":"none"}function kt({_id:e,img:t,name:o,price:n}){const s=document.createElement("li");return s.className="discount-item",s.dataset.productId=e,s.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${t}"
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
        <p class="discount-product-price">$${n.toFixed(2)}</p>
        <button type="button" class="discount-btn" arial-label="discount product">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${p}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${p}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,s}const at=document.querySelector(".popular-products-container"),lt=new q(at);lt.show();d.getPopularProducts().then(e=>{const t=e.map(Lt),o=document.createElement("ul");o.className="popular-products-list",t.map(n=>{const s=n.dataset.productId,c=!!a.getProduct(s);n.querySelector(".basket-button").style.display=c?"none":"block",n.querySelector(".basket-button-icon-check").style.display=c?"block":"none",o.appendChild(n)}),at.appendChild(o),o.addEventListener("click",({target:n})=>{const s=n.closest("LI"),c=n.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const i=s.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){W(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!a.getProduct(i)?a.delete(i):a.add(e.find(m=>m._id===i)),E(),O(i),A(i),N(i))})}).finally(()=>lt.remove());function N(e){const t=document.querySelector(`.popular-products-item[data-product-id="${e}"]`);if(!t)return;const o=!!a.getProduct(e);t.querySelector(".basket-button").style.display=o?"none":"block",t.querySelector(".basket-button-icon-check").style.display=o?"block":"none"}function Lt({_id:e,img:t,name:o,is10PercentOff:n,category:s,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=e,r.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${t}" alt="${o}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${n?"":"display:none"}">
        <use href="${p}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${o}</h3>
      <button class="basket-button" type="button" arial-label="basket shopping">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="${p}#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check" arial-label="basket check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="${p}#icon-check"></use>
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
          <span class="popular-description">${c}</span>
        </p>

        <p class="popular-products-description">
          Popularity:
          <span class="popular-description">${i}</span>
        </p>
      </div>
    </div>
  `,r}const L=document.querySelector(".modal-background"),H=document.querySelector(".modal"),tt=new q(H);async function W(e){try{L.classList.remove("is-hidden"),document.body.classList.add("is-modal-open"),H.innerHTML=`
      <button type="button" class="modal-close-btn" arial-label="modal close">
        <svg class="modal-icon-close" width="22" height="22">
          <use href="${p}#icon-x-close"></use>
        </svg>
      </button>
    `,tt.show();const t=await k.getProduct(e);H.insertAdjacentHTML("beforeend",Et(t));const o=a.getProduct(e);dt(!!o),document.querySelector(".modal-btn").addEventListener("click",()=>w(t)),document.querySelector(".modal-close-btn").addEventListener("click",B),L.addEventListener("click",ut),document.addEventListener("keydown",pt);const n=document.querySelector(".quantity");n.textContent=(o==null?void 0:o.amount)??1,document.querySelector('button[data-action="decrement"]').addEventListener("click",()=>{const s=n.textContent-1;n.textContent=s,s<1?(n.textContent=1,a.getProduct(e)&&w(t)):a.update(t,s)}),document.querySelector('button[data-action="increment"]').addEventListener("click",()=>{const s=Number(n.textContent)+1;n.textContent=s,a.getProduct(e)?a.update(t,s):w(t)})}catch(t){console.error("Error fetching product data:",t.message)}finally{tt.remove()}}function Et({img:e,name:t,category:o,size:n,popularity:s,desc:c,price:i}){return`
    <div class="modal-container">
      <div>
        <div class="modal-img">
          <img
            src="${e}"
            alt="${t}"
          />
        </div>
      </div>
      <div class="modal-product-info">
        <h2 class="modal-title">${t}</h2>
        <div class="modal-details">
          <div>
            <span class="modal-subtitle">Category:</span>
            <span class="modal-subtitle-info">
              ${o.replaceAll("_"," ")}
            </span>
          </div>
          <div>
            <span class="modal-subtitle">Size:</span>
            <span class="modal-subtitle-info">${n}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${s}</span>
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
    </div>`}function w(e){let t=!!a.getProduct(e._id);t?(a.delete(e._id),document.querySelector(".quantity").textContent=1):a.add(e),dt(!t),E(),A(e._id),N(e._id),O(e._id)}function dt(e){const t=document.querySelector(".modal-btn-text");e?t.textContent="Remove from":t.textContent="Add to"}function ut({target:e}){e===L&&B()}function B(){L.classList.add("is-hidden"),document.body.classList.remove("is-modal-open"),document.querySelector(".modal-close-btn").removeEventListener("click",B),L.removeEventListener("click",ut),document.removeEventListener("keydown",pt),document.querySelector(".modal-btn").removeEventListener("click",w)}function pt({key:e}){e==="Escape"&&B()}const V=document.querySelector(".all-products"),et=new q(V),Tt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function $t(e){document.querySelector(".product-list-product__list").addEventListener("click",({target:t})=>{const o=t.closest("LI"),n=t.closest("BUTTON");if((o==null?void 0:o.nodeName)!=="LI")return;const s=o.dataset.productId;if((n==null?void 0:n.nodeName)!=="BUTTON"){W(s);return}(n==null?void 0:n.nodeName)==="BUTTON"&&(!!a.getProduct(s)?a.delete(s):a.add(e.find(i=>i._id===s)),E(),A(s),N(s),O(s))})}function A(e){const t=document.querySelector(`.product-list-product__card[data-product-id="${e}"]`);if(!t)return;const o=!!a.getProduct(e);t.querySelector(".product-list-icon__btn").style.display=o?"none":"block",t.querySelector(".product-list-icon__btn-added").style.display=o?"block":"none"}function Pt({page:e,totalPages:t,results:o}){const n=o.map(({_id:c,name:i,img:r,category:m,price:g,size:$,popularity:h,is10PercentOff:C})=>{const _=!!a.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
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
            <span>${m.replaceAll("_"," ")}</span>
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
        <p class="product-list-price__product">$${g.toFixed(2)}</p>
        <button type="button" class="product-list-button__card" arial-label="product button">
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
    </li>`}).join("");let s="";if(t>1){const c=[];for(let r=1;r<=t;r++)c.push(r);t!==5&&(e<=2||t-e<2?c.splice(2,t-4,"..."):(c.length-e!==2&&c.splice(e,c.length-e-1,"..."),e!==3&&c.splice(1,e-2,"...")));const i=c.map(r=>`<li class="product-list-page__item ${r===e?"active":r==="..."?"not-number":""}" data-page-number="${r}">${r}</li>`).join("");s=`
      <div class="product-list-pagination">
          <ul class="product-list-pagination__list">
            <li
              class="product-list-page__item nav__btn"
              data-page-number="left"
              ${e===1?"disabled":""}
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
              ${e===t?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${p}#icon-arrow-right"></use>
              </svg>
            </li>
          </ul>
      </div>
    `}V.innerHTML=`
      <ul class="product-list-product__list">
        ${n}
      </ul>
      ${s}
  `,s&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest("LI");if((i==null?void 0:i.nodeName)!=="LI")return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=e>1?e-1:e),r==="right"&&(r=t-e>0?e+1:e),d.setPage(r),T(),xt("#filters"))})}async function T(){try{et.show();const e=await k.getProducts(d.get());e.results.length?(Pt(e),$t(e.results)):V.innerHTML=Tt}catch(e){console.error(e)}finally{et.remove()}}function xt(e){const t=document.querySelector(e),o=document.querySelector(".header");t&&window.scrollTo({top:t.offsetTop-o.offsetHeight,behavior:"smooth"})}const y=document.querySelector(".select-menu"),wt=y.querySelector(".select-btn"),j=y.querySelector(".sBtn-text"),b=document.querySelector(".select-menu-category"),It=b.querySelector(".select-btn-custom"),M=b.querySelector(".sBtn-text-select"),qt=document.querySelector(".search-form"),Ot=document.getElementById("search-icon"),Y=document.getElementById("search-item"),ot=d.getValueByKey("keyword");ot&&(Y.value=ot);function F(){G(null)}function G(e){document.querySelectorAll(".select-menu, .select-menu-category").forEach(o=>{o!==e&&o.classList.contains("active")&&o.classList.remove("active")}),document.removeEventListener("click",F)}Nt();wt.addEventListener("click",e=>{G(y),y.classList.toggle("active"),e.stopPropagation(),y.classList.contains("active")&&document.addEventListener("click",F)});It.addEventListener("click",e=>{G(b),b.classList.toggle("active"),e.stopPropagation(),b.classList.contains("active")&&document.addEventListener("click",F)});function Nt(){const e=document.createElement("ul");e.className="options";const t=d.getValueByKey("sortBy");t!=null&&t.name&&(j.innerText=t.name),d.getSortList().forEach(o=>{const n=document.createElement("li");n.className="option",n.dataset.sortByKey=o.key,n.dataset.sortByValue=o.value;const s=document.createElement("span");s.className="option-text",s.textContent=o.name,j.innerText===s.textContent&&n.classList.add("active"),n.appendChild(s),e.appendChild(n)}),y.appendChild(e),y.addEventListener("click",function(o){const n=o.target.closest(".option");if(n){let s=n.firstChild.innerText;j.innerText=s,y.classList.remove("active");const c=e.querySelector(".option.active");c&&c.classList.remove("active"),n.classList.add("active"),d.setSortBy(n.dataset.sortByKey,n.dataset.sortByValue),T()}})}d.getCategories().then(e=>{const t=document.createElement("ul");t.className="options";const o=d.getValueByKey("category");o&&(M.innerText=o.replace(/_/g," ")),e.push("Show All"),e.forEach(n=>{const s=document.createElement("li");s.className="option-category",n!=="Show All"&&(s.dataset.originalCategory=n);const c=document.createElement("span");c.className="option-text",c.textContent=n.replace(/_/g," "),M.innerText===c.textContent&&s.classList.add("active"),s.appendChild(c),t.appendChild(s)}),b.appendChild(t),t.addEventListener("click",function(n){const s=n.target.closest(".option-category");if(s){let c=s.dataset.originalCategory;M.innerText=s.textContent,b.classList.remove("active");const i=t.querySelector(".option-category.active");i&&i.classList.remove("active"),s.classList.add("active"),d.setCategory(c),T()}})});qt.addEventListener("submit",z);Ot.addEventListener("click",z);Y.addEventListener("focusout",z);function z(e){e.preventDefault();const t=Y.value.trim();t!==d.getValueByKey("keyword")&&(d.setKeyword(t),T())}var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mt="Expected a function",nt=0/0,Bt="[object Symbol]",At=/^\s+|\s+$/g,Dt=/^[-+]0x[0-9a-f]+$/i,Ut=/^0b[01]+$/i,jt=/^0o[0-7]+$/i,Mt=parseInt,Rt=typeof x=="object"&&x&&x.Object===Object&&x,Kt=typeof self=="object"&&self&&self.Object===Object&&self,Ht=Rt||Kt||Function("return this")(),Wt=Object.prototype,Vt=Wt.toString,Yt=Math.max,Ft=Math.min,R=function(){return Ht.Date.now()};function Gt(e,t,o){var n,s,c,i,r,m,g=0,$=!1,h=!1,C=!0;if(typeof e!="function")throw new TypeError(mt);t=st(t)||0,I(o)&&($=!!o.leading,h="maxWait"in o,c=h?Yt(st(o.maxWait)||0,t):c,C="trailing"in o?!!o.trailing:C);function _(u){var f=n,S=s;return n=s=void 0,g=u,i=e.apply(S,f),i}function ft(u){return g=u,r=setTimeout(P,t),$?_(u):i}function yt(u){var f=u-m,S=u-g,Q=t-f;return h?Ft(Q,c-S):Q}function Z(u){var f=u-m,S=u-g;return m===void 0||f>=t||f<0||h&&S>=c}function P(){var u=R();if(Z(u))return J(u);r=setTimeout(P,yt(u))}function J(u){return r=void 0,C&&n?_(u):(n=s=void 0,i)}function gt(){r!==void 0&&clearTimeout(r),g=0,n=m=s=r=void 0}function ht(){return r===void 0?i:J(R())}function D(){var u=R(),f=Z(u);if(n=arguments,s=this,m=u,f){if(r===void 0)return ft(m);if(h)return r=setTimeout(P,t),_(m)}return r===void 0&&(r=setTimeout(P,t)),i}return D.cancel=gt,D.flush=ht,D}function zt(e,t,o){var n=!0,s=!0;if(typeof e!="function")throw new TypeError(mt);return I(o)&&(n="leading"in o?!!o.leading:n,s="trailing"in o?!!o.trailing:s),Gt(e,t,{leading:n,maxWait:t,trailing:s})}function I(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Zt(e){return!!e&&typeof e=="object"}function Jt(e){return typeof e=="symbol"||Zt(e)&&Vt.call(e)==Bt}function st(e){if(typeof e=="number")return e;if(Jt(e))return nt;if(I(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=I(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(At,"");var o=Ut.test(e);return o||jt.test(e)?Mt(e.slice(2),o?2:8):Dt.test(e)?nt:+e}var Qt=zt;const ct=document.querySelector(".scroll-up");document.addEventListener("scroll",Qt(Xt,400));function Xt(){const e=window.scrollY,t=document.documentElement.clientHeight;e>t?ct.classList.add("scroll-up-is-hidden"):ct.classList.remove("scroll-up-is-hidden")}E();T();
