var vt=Object.defineProperty;var bt=(t,e,o)=>e in t?vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var U=(t,e,o)=>(bt(t,typeof e!="symbol"?e+"":e,o),o);import{S as d,F as k,C as a,u as E,i as p}from"./icons-263a26ae.js";_t();function _t(){document.querySelectorAll(".food-letter").forEach((e,o)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},o*100)})}const v=d.FILTER_KEY,K=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:void 0,value:void 0}],Ct=K[0],X={keyword:void 0,category:void 0,sortBy:Ct,page:1,limit:9},St=5;class l{static get(){return d.get(v)??X}static getValueByKey(e){return l.get()[e]}static async getCategories(){let e=d.get(d.CATEGORIES_KEY);if(!e)try{e=await k.getCategories(),e=e.filter(o=>!o.includes(" ")),d.set(d.CATEGORIES_KEY,e)}catch(o){console.error("FoodBotiqueApi.getCategories error",o)}return e??[]}static getSortList(){return K}static async getDiscountedProducts(e=2){let o=d.getWithExpiry(d.DISCOUNTED_PRODUCTS_KEY);if(!o)try{o=await k.getDiscountedProducts(),d.setWithExpiry(d.DISCOUNTED_PRODUCTS_KEY,o)}catch(n){console.error("FoodBotiqueApi.getDiscountedProducts error",n)}return o.slice(0,e)??[]}static async getPopularProducts(e=5){let o=d.getWithExpiry(d.POPULAR_PRODUCTS_KEY);if(!o)try{o=await k.getPopularProducts(St),d.setWithExpiry(d.POPULAR_PRODUCTS_KEY,o)}catch(n){console.error("FoodBotiqueApi.getPopularProducts error",n)}return o.slice(0,e)??[]}static setKeyword(e){const o=l.get();d.set(v,{...o,keyword:e,page:1})}static setCategory(e){const o=l.get();d.set(v,{...o,category:e,page:1})}static setPage(e){const o=l.get();d.set(v,{...o,page:e})}static setLimit(e){const o=l.get();d.set(v,{...o,limit:e,page:1})}static setSortBy(e,o){const n=l.get();console.log(e,o),d.set(v,{...n,page:1,sortBy:K.find(s=>s.key===e&&s.value===JSON.parse(o))})}static reset(){d.set(v,X)}}class I{constructor(e=null){U(this,"loader");U(this,"container");this.createLoader(),this.container=e}createLoader(){const e=document.createElement("div");e.classList.add("loader"),this.loader=document.createElement("div"),this.loader.classList.add("loader-container"),this.loader.appendChild(e)}show(){this.container.style.position="relative",this.container.appendChild(this.loader)}remove(){this.loader.remove()}}const it=document.querySelector(".discount-container"),rt=new I(it);rt.show();l.getDiscountedProducts().then(t=>{const e=t.map(kt),o=document.createElement("ul");o.className="discount-list",e.map(n=>{const s=n.dataset.productId,c=!!a.getProduct(s);n.querySelector(".discount-button-icon-cart").style.display=c?"none":"block",n.querySelector(".discount-button-icon-check").style.display=c?"block":"none",o.appendChild(n)}),it.appendChild(o),o.addEventListener("click",({target:n})=>{const s=n.closest("LI"),c=n.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const i=s.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){W(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!a.getProduct(i)?a.delete(i):a.add(t.find(m=>m._id===i)),E(),O(i),A(i),N(i))})}).finally(()=>rt.remove());function O(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const o=!!a.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=o?"none":"block",e.querySelector(".discount-button-icon-check").style.display=o?"block":"none"}function kt({_id:t,img:e,name:o,price:n}){const s=document.createElement("li");return s.className="discount-item",s.dataset.productId=t,s.innerHTML=`
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
        <p class="discount-product-price">$${n.toFixed(2)}</p>
        <button type="button" class="discount-btn" aria-label="discount product">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${p}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${p}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,s}const at=document.querySelector(".popular-products-container"),dt=new I(at);dt.show();l.getPopularProducts().then(t=>{const e=t.map(Lt),o=document.createElement("ul");o.className="popular-products-list",e.map(n=>{const s=n.dataset.productId,c=!!a.getProduct(s);n.querySelector(".basket-button").style.display=c?"none":"block",n.querySelector(".basket-button-icon-check").style.display=c?"block":"none",o.appendChild(n)}),at.appendChild(o),o.addEventListener("click",({target:n})=>{const s=n.closest("LI"),c=n.closest("BUTTON");if((s==null?void 0:s.nodeName)!=="LI")return;const i=s.dataset.productId;if((c==null?void 0:c.nodeName)!=="BUTTON"){W(i);return}(c==null?void 0:c.nodeName)==="BUTTON"&&(!!a.getProduct(i)?a.delete(i):a.add(t.find(m=>m._id===i)),E(),O(i),A(i),N(i))})}).finally(()=>dt.remove());function N(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const o=!!a.getProduct(t);e.querySelector(".basket-button").style.display=o?"none":"block",e.querySelector(".basket-button-icon-check").style.display=o?"block":"none"}function Lt({_id:t,img:e,name:o,is10PercentOff:n,category:s,size:c,popularity:i}){const r=document.createElement("li");return r.className="popular-products-item",r.dataset.productId=t,r.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${o}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${n?"":"display:none"}">
        <use href="${p}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${o}</h3>
      <button class="basket-button" type="button" aria-label="basket shopping">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="${p}#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check" aria-label="basket check">
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
  `,r}const L=document.querySelector(".modal-background"),H=document.querySelector(".modal"),tt=new I(H);async function W(t){try{L.classList.remove("is-hidden"),document.body.classList.add("is-modal-open"),H.innerHTML=`
      <button type="button" class="modal-close-btn" aria-label="modal close">
        <svg class="modal-icon-close" width="22" height="22">
          <use href="${p}#icon-x-close"></use>
        </svg>
      </button>
    `,tt.show();const e=await k.getProduct(t);H.insertAdjacentHTML("beforeend",Et(e));const o=a.getProduct(t);lt(!!o),document.querySelector(".modal-btn").addEventListener("click",()=>w(e)),document.querySelector(".modal-close-btn").addEventListener("click",B),L.addEventListener("click",ut),document.addEventListener("keydown",pt);const n=document.querySelector(".quantity");n.textContent=(o==null?void 0:o.amount)??1,document.querySelector('button[data-action="decrement"]').addEventListener("click",()=>{const s=n.textContent-1;n.textContent=s,s<1?(n.textContent=1,a.getProduct(t)&&w(e)):a.update(e,s)}),document.querySelector('button[data-action="increment"]').addEventListener("click",()=>{const s=Number(n.textContent)+1;n.textContent=s,a.getProduct(t)?a.update(e,s):w(e)})}catch(e){console.error("Error fetching product data:",e.message)}finally{tt.remove()}}function Et({img:t,name:e,category:o,size:n,popularity:s,desc:c,price:i}){return`
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
    </div>`}function w(t){let e=!!a.getProduct(t._id);e?(a.delete(t._id),document.querySelector(".quantity").textContent=1):a.add(t),lt(!e),E(),A(t._id),N(t._id),O(t._id)}function lt(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function ut({target:t}){t===L&&B()}function B(){L.classList.add("is-hidden"),document.body.classList.remove("is-modal-open"),document.querySelector(".modal-close-btn").removeEventListener("click",B),L.removeEventListener("click",ut),document.removeEventListener("keydown",pt),document.querySelector(".modal-btn").removeEventListener("click",w)}function pt({key:t}){t==="Escape"&&B()}const F=document.querySelector(".all-products"),et=new I(F),Tt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function $t(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const o=e.closest("LI"),n=e.closest("BUTTON");if((o==null?void 0:o.nodeName)!=="LI")return;const s=o.dataset.productId;if((n==null?void 0:n.nodeName)!=="BUTTON"){W(s);return}(n==null?void 0:n.nodeName)==="BUTTON"&&(!!a.getProduct(s)?a.delete(s):a.add(t.find(i=>i._id===s)),E(),A(s),N(s),O(s))})}function A(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const o=!!a.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=o?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=o?"block":"none"}function Pt({page:t,totalPages:e,results:o}){const n=o.map(({_id:c,name:i,img:r,category:m,price:g,size:$,popularity:h,is10PercentOff:C})=>{const _=!!a.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
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
        <button type="button" class="product-list-button__card" aria-label="product button">
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
    </li>`}).join("");let s="";if(e>1){const c=[];for(let r=1;r<=e;r++)c.push(r);e!==5&&(t<=2||e-t<2?c.splice(2,e-4,"..."):(c.length-t!==2&&c.splice(t,c.length-t-1,"..."),t!==3&&c.splice(1,t-2,"...")));const i=c.map(r=>`<li class="product-list-page__item ${r===t?"active":r==="..."?"not-number":""}" data-page-number="${r}">${r}</li>`).join("");s=`
      <div class="product-list-pagination">
          <div class="product-list-pagination__list">
            <div
              class="product-list-page__item nav__btn"
              data-page-number="left"
              ${t===1?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${p}#icon-arrow-left"></use>
              </svg>
            </div>
            <ul class="product-list-page__numbers">
              ${i}
            </ul>
            <div
              class="product-list-page__item nav__btn"
              data-page-number="right"
              ${t===e?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${p}#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
      </div>
    `}F.innerHTML=`
      <h2 class="visually-hidden">Filtered Products</h2>
      <ul class="product-list-product__list">
        ${n}
      </ul>
      ${s}
  `,s&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const i=c.closest(".product-list-page__item");if(!i)return;let r=i.dataset.pageNumber;r!=="..."&&(r==="left"&&(r=t>1?t-1:t,t===1)||r==="right"&&(r=e-t>0?t+1:t,t===e)||(l.setPage(r),T(),xt("#filters")))})}async function T(){try{et.show();const t=await k.getProducts(l.get());t.results.length?(Pt(t),$t(t.results)):F.innerHTML=Tt}catch(t){console.error(t)}finally{et.remove()}}function xt(t){const e=document.querySelector(t),o=document.querySelector(".header");e&&window.scrollTo({top:e.offsetTop-o.offsetHeight,behavior:"smooth"})}const y=document.querySelector(".select-menu"),wt=y.querySelector(".select-btn"),j=y.querySelector(".sBtn-text"),b=document.querySelector(".select-menu-category"),qt=b.querySelector(".select-btn-custom"),M=b.querySelector(".sBtn-text-select"),It=document.querySelector(".search-form"),Ot=document.getElementById("search-icon"),V=document.getElementById("search-item"),ot=l.getValueByKey("keyword");ot&&(V.value=ot);function Y(){G(null)}function G(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(o=>{o!==t&&o.classList.contains("active")&&o.classList.remove("active")}),document.removeEventListener("click",Y)}Nt();wt.addEventListener("click",t=>{G(y),y.classList.toggle("active"),t.stopPropagation(),y.classList.contains("active")&&document.addEventListener("click",Y)});qt.addEventListener("click",t=>{G(b),b.classList.toggle("active"),t.stopPropagation(),b.classList.contains("active")&&document.addEventListener("click",Y)});function Nt(){const t=document.createElement("ul");t.className="options";const e=l.getValueByKey("sortBy");e!=null&&e.name&&(j.innerText=e.name),l.getSortList().forEach(o=>{const n=document.createElement("li");n.className="option",n.dataset.sortByKey=o.key,n.dataset.sortByValue=o.value;const s=document.createElement("span");s.className="option-text",s.textContent=o.name,j.innerText===s.textContent&&n.classList.add("active"),n.appendChild(s),t.appendChild(n)}),y.appendChild(t),y.addEventListener("click",function(o){const n=o.target.closest(".option");if(n){let s=n.firstChild.innerText;j.innerText=s,y.classList.remove("active");const c=t.querySelector(".option.active");c&&c.classList.remove("active"),n.classList.add("active"),l.setSortBy(n.dataset.sortByKey,n.dataset.sortByValue),T()}})}l.getCategories().then(t=>{const e=document.createElement("ul");e.className="options";const o=l.getValueByKey("category");o&&(M.innerText=o.replace(/_/g," ")),t.push("Show All"),t.forEach(n=>{const s=document.createElement("li");s.className="option-category",n!=="Show All"&&(s.dataset.originalCategory=n);const c=document.createElement("span");c.className="option-text",c.textContent=n.replace(/_/g," "),M.innerText===c.textContent&&s.classList.add("active"),s.appendChild(c),e.appendChild(s)}),b.appendChild(e),e.addEventListener("click",function(n){const s=n.target.closest(".option-category");if(s){let c=s.dataset.originalCategory;M.innerText=s.textContent,b.classList.remove("active");const i=e.querySelector(".option-category.active");i&&i.classList.remove("active"),s.classList.add("active"),l.setCategory(c),T()}})});It.addEventListener("submit",z);Ot.addEventListener("click",z);V.addEventListener("focusout",z);function z(t){t.preventDefault();const e=V.value.trim();e!==l.getValueByKey("keyword")&&(l.setKeyword(e),T())}var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mt="Expected a function",nt=0/0,Bt="[object Symbol]",At=/^\s+|\s+$/g,Dt=/^[-+]0x[0-9a-f]+$/i,Ut=/^0b[01]+$/i,jt=/^0o[0-7]+$/i,Mt=parseInt,Rt=typeof x=="object"&&x&&x.Object===Object&&x,Kt=typeof self=="object"&&self&&self.Object===Object&&self,Ht=Rt||Kt||Function("return this")(),Wt=Object.prototype,Ft=Wt.toString,Vt=Math.max,Yt=Math.min,R=function(){return Ht.Date.now()};function Gt(t,e,o){var n,s,c,i,r,m,g=0,$=!1,h=!1,C=!0;if(typeof t!="function")throw new TypeError(mt);e=st(e)||0,q(o)&&($=!!o.leading,h="maxWait"in o,c=h?Vt(st(o.maxWait)||0,e):c,C="trailing"in o?!!o.trailing:C);function _(u){var f=n,S=s;return n=s=void 0,g=u,i=t.apply(S,f),i}function ft(u){return g=u,r=setTimeout(P,e),$?_(u):i}function yt(u){var f=u-m,S=u-g,Q=e-f;return h?Yt(Q,c-S):Q}function Z(u){var f=u-m,S=u-g;return m===void 0||f>=e||f<0||h&&S>=c}function P(){var u=R();if(Z(u))return J(u);r=setTimeout(P,yt(u))}function J(u){return r=void 0,C&&n?_(u):(n=s=void 0,i)}function gt(){r!==void 0&&clearTimeout(r),g=0,n=m=s=r=void 0}function ht(){return r===void 0?i:J(R())}function D(){var u=R(),f=Z(u);if(n=arguments,s=this,m=u,f){if(r===void 0)return ft(m);if(h)return r=setTimeout(P,e),_(m)}return r===void 0&&(r=setTimeout(P,e)),i}return D.cancel=gt,D.flush=ht,D}function zt(t,e,o){var n=!0,s=!0;if(typeof t!="function")throw new TypeError(mt);return q(o)&&(n="leading"in o?!!o.leading:n,s="trailing"in o?!!o.trailing:s),Gt(t,e,{leading:n,maxWait:e,trailing:s})}function q(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Zt(t){return!!t&&typeof t=="object"}function Jt(t){return typeof t=="symbol"||Zt(t)&&Ft.call(t)==Bt}function st(t){if(typeof t=="number")return t;if(Jt(t))return nt;if(q(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=q(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(At,"");var o=Ut.test(t);return o||jt.test(t)?Mt(t.slice(2),o?2:8):Dt.test(t)?nt:+t}var Qt=zt;const ct=document.querySelector(".scroll-up");document.addEventListener("scroll",Qt(Xt,400));function Xt(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?ct.classList.add("scroll-up-is-hidden"):ct.classList.remove("scroll-up-is-hidden")}E();T();
