import{S as s,F as m,C as d,u as f}from"./footer-d4ec1a4b.js";k();function k(){document.querySelectorAll(".food-letter").forEach((e,t)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},t*100)})}const l=document.querySelector(".select-menu"),q=l.querySelector(".select-btn");l.querySelectorAll(".options");const T=l.querySelector(".sBtn-text"),p=document.querySelector(".select-menu-category"),O=p.querySelector(".select-btn-custom"),D=p.querySelector(".options"),I=p.querySelector(".sBtn-text-select");function A(){h(null)}function h(o){document.querySelectorAll(".select-menu, .select-menu-category").forEach(t=>{t!==o&&t.classList.contains("active")&&t.classList.remove("active")})}q.addEventListener("click",function(o){h(l),l.classList.toggle("active"),document.addEventListener("click",A),o.stopPropagation()});l.addEventListener("click",function(o){const e=o.target.closest(".option");if(e){let t=e.querySelector(".option-text").innerText;T.innerText=t,l.classList.remove("active")}});O.addEventListener("click",function(o){h(p),p.classList.toggle("active"),o.stopPropagation()});D.addEventListener("click",function(o){const e=o.target.closest(".option-category");if(e){let t=e.querySelector(".option-text").innerText;I.innerText=t,p.classList.remove("active")}});const a=s.FILTER_KEY,b={keyword:void 0,category:void 0,byABC:!0,byPrice:void 0,byPopularity:void 0,page:1,limit:9},B=5;class r{static get(){return s.get(a)??b}static getValueByKey(e){return r.get()[e]}static async getCategories(){let e=s.get(s.CATEGORIES_KEY);if(!e)try{e=await m.getCategories(),s.set(s.CATEGORIES_KEY,e)}catch(t){console.error("FoodBotiqueApi.getCategories error",t)}return e??[]}static async getDiscountedProducts(e=2){let t=s.get(s.DISCOUNTED_PRODUCTS_KEY);if(!t)try{t=await m.getDiscountedProducts(),s.set(s.DISCOUNTED_PRODUCTS_KEY,t)}catch(c){console.error("FoodBotiqueApi.getDiscountedProducts error",c)}return t.slice(0,e)??[]}static async getPopularProducts(e=5){let t=s.get(s.POPULAR_PRODUCTS_KEY);if(!t)try{t=await m.getPopularProducts(B),s.set(s.POPULAR_PRODUCTS_KEY,t)}catch(c){console.error("FoodBotiqueApi.getPopularProducts error",c)}return t.slice(0,e)??[]}static set(e){const t=r.get();s.set(a,{...t,...e})}static setKeyword(e){const t=r.get();s.set(a,{...t,keyword:e})}static setCategory(e){const t=r.get();s.set(a,{...t,category:e})}static setPage(e){const t=r.get();s.set(a,{...t,page:e})}static setLimit(e){const t=r.get();s.set(a,{...t,limit:e})}static setSortBy(e){const t=r.get();s.set(a,{...t,byABC:void 0,byPrice:void 0,byPopularity:void 0,[e]:!0})}static reset(){s.set(a,{...b})}}const g=document.querySelector(".modal-background"),w=document.querySelector(".modal");async function x(o,e=()=>{}){try{g.classList.remove("is-hidden");const t=await m.getProduct(o);w.innerHTML=$(t),C(!!d.getProduct(o)),document.querySelector(".modal-btn").addEventListener("click",()=>P(t,e)),document.querySelector(".modal-close-btn").addEventListener("click",y),g.addEventListener("click",S),document.addEventListener("keydown",L)}catch(t){console.error("Error fetching product data:",t.message)}}function $({img:o,name:e,category:t,size:c,popularity:n,desc:i,price:u}){return`
    <button type="button" class="modal-close-btn">
      <svg class="modal-icon-close" width="22" height="22">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-container">
      <div>
        <div class="modal-img">
          <img
            src="${o}"
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
              ${t.replaceAll("_"," ")}
            </span>
          </div>
          <div>
            <span class="modal-subtitle">Size:</span>
            <span class="modal-subtitle-info">${c}</span>
          </div>
          <div>
            <span class="modal-subtitle">Popularity:</span>
            <span class="modal-subtitle-info">${n}</span>
          </div>
        </div>
        <p class="modal-about-product">${i}</p>
      </div>
    </div>
    <div class="modal-price-container">
      <p class="modal-price-product">
        <span>$</span><span class="modal-price">${u}</span>
      </p>
      <button class="modal-btn">
        <span class="modal-btn-text">Add to</span>
        <svg class="modal-icon-shop" width="18" height="18">
          <use href="./img/icons.svg#icon-shopping-cart"></use>
        </svg>
      </button>
    </div>`}function P(o,e){let t=!!d.getProduct(o._id);t?d.delete(o._id):d.add(o),f(),e(!t),C(!t)}function C(o){const e=document.querySelector(".modal-btn-text");o?e.textContent="Remove from":e.textContent="Add to"}function S({target:o}){o===g&&y()}function y(){g.classList.add("is-hidden"),document.querySelector(".modal-close-btn").removeEventListener("click",y),g.removeEventListener("click",S),document.removeEventListener("keydown",L),document.querySelector(".modal-btn").removeEventListener("click",P)}function L({key:o}){o==="Escape"&&y()}const R=document.querySelector(".discount-container");r.getDiscountedProducts().then(o=>{const e=o.map(_),t=document.createElement("ul");t.className="discount-list",e.map(c=>{const n=c.dataset.productId,i=!!d.getProduct(n);c.querySelector(".discount-button-icon-cart").style.display=i?"none":"block",c.querySelector(".discount-button-icon-check").style.display=i?"block":"none",t.appendChild(c)}),R.appendChild(t),t.addEventListener("click",({target:c})=>{const n=c.closest("LI"),i=c.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const u=n.dataset.productId;if((i==null?void 0:i.nodeName)!=="BUTTON"){x(u,U);return}if((i==null?void 0:i.nodeName)==="BUTTON"){const v=!!d.getProduct(u);v?d.delete(u):d.add(o.find(E=>E._id===u)),f(),i.querySelector(".discount-button-icon-cart").style.display=v?"block":"none",i.querySelector(".discount-button-icon-check").style.display=v?"none":"block"}})});function U(o){}function _({_id:o,img:e,name:t,price:c}){const n=document.createElement("li");return n.className="discount-item",n.dataset.productId=o,n.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${t}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="./img/icons.svg#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${t}</h3>
        <p class="discount-product-price">$${c}</p>
        <button type="button" class="discount-btn">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="./img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="./img/icons.svg#icon-check"></use>
            </svg>
        </button>
    </div>
 `,n}f();
