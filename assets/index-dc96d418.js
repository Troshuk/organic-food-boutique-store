var Lt=Object.defineProperty;var Tt=(t,e,n)=>e in t?Lt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var F=(t,e,n)=>(Tt(t,typeof e!="symbol"?e+"":e,n),n);import{S as p,F as I,C as l,u as O,i as y}from"./icons-aa9d61e8.js";Et();function Et(){document.querySelectorAll(".food-letter").forEach((e,n)=>{setTimeout(()=>{e.style.animation="none",e.offsetHeight,e.style.animation=null},n*100)})}const L=p.FILTER_KEY,X=[{name:"A to Z",key:"byABC",value:!0},{name:"Z to A",key:"byABC",value:!1},{name:"Least Expensive",key:"byPrice",value:!0},{name:"Most Expensive",key:"byPrice",value:!1},{name:"Least Popular",key:"byPopularity",value:!0},{name:"Most Popular",key:"byPopularity",value:!1},{name:"Show All",key:void 0,value:void 0}],xt=X[0],it={keyword:void 0,category:void 0,sortBy:xt,page:1,limit:9},wt=5;class u{static get(){return p.get(L)??it}static getValueByKey(e){return u.get()[e]}static async getCategories(){let e=p.get(p.CATEGORIES_KEY);if(!e)try{e=await I.getCategories(),e=e.filter(n=>!n.includes(" ")),p.set(p.CATEGORIES_KEY,e)}catch(n){console.error("FoodBotiqueApi.getCategories error",n)}return e??[]}static getSortList(){return X}static async getDiscountedProducts(e=2){let n=p.getWithExpiry(p.DISCOUNTED_PRODUCTS_KEY);if(!n)try{n=await I.getDiscountedProducts(),p.setWithExpiry(p.DISCOUNTED_PRODUCTS_KEY,n)}catch(s){console.error("FoodBotiqueApi.getDiscountedProducts error",s)}return n.sort(()=>Math.random()-.5).slice(0,e)??[]}static async getPopularProducts(e=5){let n=p.getWithExpiry(p.POPULAR_PRODUCTS_KEY);if(!n)try{n=await I.getPopularProducts(wt),p.setWithExpiry(p.POPULAR_PRODUCTS_KEY,n)}catch(s){console.error("FoodBotiqueApi.getPopularProducts error",s)}return n.slice(0,e)??[]}static setKeyword(e){const n=u.get();p.set(L,{...n,keyword:e,page:1})}static setCategory(e){const n=u.get();p.set(L,{...n,category:e,page:1})}static setPage(e){const n=u.get();p.set(L,{...n,page:e})}static setLimit(e){const n=u.get();p.set(L,{...n,limit:e,page:1})}static setSortBy(e,n){const s=u.get();console.log(e,n),p.set(L,{...s,page:1,sortBy:X.find(o=>o.key===e&&o.value===JSON.parse(n))})}static reset(){p.set(L,it)}}class j{constructor(e=null){F(this,"loader");F(this,"container");this.createLoader(),this.container=e}createLoader(){const e=document.createElement("div");e.classList.add("loader"),this.loader=document.createElement("div"),this.loader.classList.add("loader-container"),this.loader.appendChild(e)}show(){this.container.style.position="relative",this.container.appendChild(this.loader)}remove(){this.loader.remove()}}const ht=document.querySelector(".discount-container"),ct=new j(ht);function Pt(){ct.show(),u.getDiscountedProducts().then(t=>{const e=document.querySelector(".discount-list");e&&e.remove();const n=t.map(It),s=document.createElement("ul");s.className="discount-list",n.map(o=>{const c=o.dataset.productId,r=!!l.getProduct(c);o.querySelector(".discount-button-icon-cart").style.display=r?"none":"block",o.querySelector(".discount-button-icon-check").style.display=r?"block":"none",s.appendChild(o)}),ht.appendChild(s),s.addEventListener("click",({target:o})=>{const c=o.closest("LI"),r=o.closest("BUTTON");if((c==null?void 0:c.nodeName)!=="LI")return;const i=c.dataset.productId;if((r==null?void 0:r.nodeName)!=="BUTTON"){Q(i);return}(r==null?void 0:r.nodeName)==="BUTTON"&&(!!l.getProduct(i)?l.delete(i):l.add(t.find(m=>m._id===i)),O(),A(i),M(i),D(i))})}).finally(()=>ct.remove())}function A(t){const e=document.querySelector(`.discount-item[data-product-id="${t}"]`);if(!e)return;const n=!!l.getProduct(t);e.querySelector(".discount-button-icon-cart").style.display=n?"none":"block",e.querySelector(".discount-button-icon-check").style.display=n?"block":"none"}function It({_id:t,img:e,name:n,price:s}){const o=document.createElement("li");return o.className="discount-item",o.dataset.productId=t,o.innerHTML=`
    <div class="discount-photo-container">
        <img
           class="discount-img"
           src="${e}"
           alt="${n}"
           width="114"
           height="114"
        />
        <svg class="discount-icon" width="32" height="32">
            <use href="${y}#icon-discount"></use>
        </svg>
   </div>
   <div class="discount-info-container">
        <h3 class="discount-product-name">${n}</h3>
        <p class="discount-product-price">$${s.toFixed(2)}</p>
        <button type="button" class="discount-btn" aria-label="discount product">
            <svg class="discount-button-icon-cart" width="18" height="18">
                <use href="${y}#icon-shopping-cart"></use>
            </svg>
            <svg class="discount-button-icon-check" width="18" height="18">
                 <use href="${y}#icon-check"></use>
            </svg>
        </button>
    </div>
 `,o}const vt=document.querySelector(".popular-products-container"),rt=new j(vt);function bt(){rt.show();let t=5;window.innerWidth<1440&&(t=2),window.innerWidth<768&&(t=5),u.getPopularProducts(t).then(e=>{const n=document.querySelector(".popular-products-list");n&&n.remove();const s=e.map(qt),o=document.createElement("ul");o.className="popular-products-list",s.map(c=>{const r=c.dataset.productId,i=!!l.getProduct(r);c.querySelector(".basket-button").style.display=i?"none":"block",c.querySelector(".basket-button-icon-check").style.display=i?"block":"none",o.appendChild(c)}),vt.appendChild(o),o.addEventListener("click",({target:c})=>{const r=c.closest("LI"),i=c.closest("BUTTON");if((r==null?void 0:r.nodeName)!=="LI")return;const d=r.dataset.productId;if((i==null?void 0:i.nodeName)!=="BUTTON"){Q(d);return}(i==null?void 0:i.nodeName)==="BUTTON"&&(!!l.getProduct(d)?l.delete(d):l.add(e.find(b=>b._id===d)),O(),A(d),M(d),D(d))})}).finally(()=>rt.remove())}function D(t){const e=document.querySelector(`.popular-products-item[data-product-id="${t}"]`);if(!e)return;const n=!!l.getProduct(t);e.querySelector(".basket-button").style.display=n?"none":"block",e.querySelector(".basket-button-icon-check").style.display=n?"block":"none"}function qt({_id:t,img:e,name:n,is10PercentOff:s,category:o,size:c,popularity:r}){const i=document.createElement("li");return i.className="popular-products-item",i.dataset.productId=t,i.innerHTML=`
    <div class="popular-products-img-container">
      <img class="popular-products-img" src="${e}" alt="${n}" width="56" height="56"/>
      <svg class="popular-products-discount-icon" width="20" height="20"
      style="${s?"":"display:none"}">
        <use href="${y}#icon-discount"></use>
      </svg>
    </div>

    <div class="popular-products-description-thumb">
      <h3 class="popular-products-name">${n}</h3>
      <button class="basket-button" type="button" aria-label="basket shopping">
        <svg class="popular-products-cart-icon" width="12" height="12">
          <use href="${y}#icon-shopping-cart"></use>
        </svg>
      </button>
      <button class="basket-button-icon-check" aria-label="basket check">
        <svg class="popular-products-icon-check" width="12" height="12">
          <use href="${y}#icon-check"></use>
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
          <span class="popular-description">${r}</span>
        </p>
      </div>
    </div>
  `,i}const q=document.querySelector(".modal-background"),Z=document.querySelector(".modal"),at=new j(Z);async function Q(t){try{q.classList.remove("is-hidden"),document.body.classList.add("is-modal-open"),Z.innerHTML=`
      <button type="button" class="modal-close-btn" aria-label="modal close">
        <svg class="modal-icon-close" width="22" height="22">
          <use href="${y}#icon-x-close"></use>
        </svg>
      </button>
    `,at.show();const e=await I.getProduct(t);Z.insertAdjacentHTML("beforeend",Ot(e));const n=l.getProduct(t);_t(!!n),document.querySelector(".modal-btn").addEventListener("click",()=>N(e)),document.querySelector(".modal-close-btn").addEventListener("click",U),q.addEventListener("click",St),document.addEventListener("keydown",kt);const s=document.querySelector(".quantity");s.textContent=(n==null?void 0:n.amount)??1,document.querySelector('button[data-action="decrement"]').addEventListener("click",()=>{const o=s.textContent-1;s.textContent=o,o<1?(s.textContent=1,l.getProduct(t)&&N(e)):l.update(e,o)}),document.querySelector('button[data-action="increment"]').addEventListener("click",()=>{const o=Number(s.textContent)+1;s.textContent=o,l.getProduct(t)?l.update(e,o):N(e)})}catch(e){console.error("Error fetching product data:",e.message)}finally{at.remove()}}function Ot({img:t,name:e,category:n,size:s,popularity:o,desc:c,price:r}){return`
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
        <span>$</span><span class="modal-price">${r}</span>
      </p>
      <div class="quantity-and-add">
        <div class="quantity-in-modal">
          <button type="button" class="minus-btn" data-action="decrement" aria-label="minus quantity product">
            <svg class="minus-btn-icon">
              <use href="${y}#icon-minus"></use>
            </svg>
          </button>

          <span class="quantity">1</span>

          <button type="button" class="plus-btn" data-action="increment" aria-label="plus quantity product">
            <svg class="plus-btn-icon">
              <use href="${y}#icon-plus"></use>
            </svg>
          </button>
        </div>

        <button class="modal-btn" aria-label="add to card">
          <span class="modal-btn-text">Add to</span>
          <svg class="modal-icon-shop" width="18" height="18">
            <use href="${y}#icon-shopping-cart"></use>
          </svg>
        </button>
      </div>
    </div>`}function N(t){let e=!!l.getProduct(t._id);e?(l.delete(t._id),document.querySelector(".quantity").textContent=1):l.add(t),_t(!e),O(),M(t._id),D(t._id),A(t._id)}function _t(t){const e=document.querySelector(".modal-btn-text");t?e.textContent="Remove from":e.textContent="Add to"}function St({target:t}){t===q&&U()}function U(){q.classList.add("is-hidden"),document.body.classList.remove("is-modal-open"),document.querySelector(".modal-close-btn").removeEventListener("click",U),q.removeEventListener("click",St),document.removeEventListener("keydown",kt),document.querySelector(".modal-btn").removeEventListener("click",N)}function kt({key:t}){t==="Escape"&&U()}const tt=document.querySelector(".all-products"),dt=new j(tt),Nt=`<div class="product-list__text__box">
    <p class="product-list__text__one">
      Nothing was found for the selected
      <span class="text__one__span">filters...</span>
    </p>
    <p class="product-list__text__two">
      Try adjusting your search parameters or browse our range by other criteria
      to find the perfect product for you.
    </p>
  </div>`;function Bt(t){document.querySelector(".product-list-product__list").addEventListener("click",({target:e})=>{const n=e.closest("LI"),s=e.closest("BUTTON");if((n==null?void 0:n.nodeName)!=="LI")return;const o=n.dataset.productId;if((s==null?void 0:s.nodeName)!=="BUTTON"){Q(o);return}(s==null?void 0:s.nodeName)==="BUTTON"&&(!!l.getProduct(o)?l.delete(o):l.add(t.find(r=>r._id===o)),O(),M(o),D(o),A(o))})}function M(t){const e=document.querySelector(`.product-list-product__card[data-product-id="${t}"]`);if(!e)return;const n=!!l.getProduct(t);e.querySelector(".product-list-icon__btn").style.display=n?"none":"block",e.querySelector(".product-list-icon__btn-added").style.display=n?"block":"none"}function jt({page:t,totalPages:e,results:n}){const s=n.map(({_id:c,name:r,img:i,category:d,price:m,size:b,popularity:g,is10PercentOff:_})=>{const v=!!l.getProduct(c);return`<li class="product-list-product__card" data-product-id=${c}>
      <svg
        class="product-list-icon-discount"
        width="60"
        height="60"
        style="${_?"":"display:none"}"
      >
        <use href="${y}#icon-discount"></use>
      </svg>
      <div class="product-list-box__img">
        <img
          class="product-list-card__image"
          src="${i}"
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
            <span>${d.replaceAll("_"," ")}</span>
          </p>

          <p class="product-list-info__item">
            <span class="product-list-span__text">Size:</span>
            <span>${b}</span>
          </p>
          <p class="product-list-info__item">
            <span class="product-list-span__text">Popularity:</span>
            <span>${g}</span>
          </p>
        </div>
      </div>
      <div class="product-list-price__btn">
        <p class="product-list-price__product">$${m.toFixed(2)}</p>
        <button type="button" class="product-list-button__card" aria-label="product button">
          <svg
            class="product-list-icon__btn"
            width="18"
            height="18"
            style="${v?"display:none":""}"
          >
            <use href="${y}#icon-shopping-cart"></use>
          </svg>
          <svg
            class="product-list-icon__btn-added"
            width="18"
            height="18"
            style="${v?"display:block":"display:none"}"
          >
            <use href="${y}#icon-check"></use>
          </svg>
         </button>
      </div>
    </li>`}).join("");let o="";if(e>1){const c=[];for(let i=1;i<=e;i++)c.push(i);e>5&&(t<=2||e-t<2?c.splice(2,e-4,"..."):(c.length-t!==2&&c.splice(t,c.length-t-1,"..."),t!==3&&c.splice(1,t-2,"...")));const r=c.map(i=>`<li class="product-list-page__item ${i===t?"active":i==="..."?"not-number":""}" data-page-number="${i}">${i}</li>`).join("");o=`
      <div class="product-list-pagination">
          <div class="product-list-pagination__list">
            <div
              class="product-list-page__item nav__btn"
              data-page-number="left"
              ${t===1?"disabled":""}
            >
              <svg class="icon__arrow" width="24" height="24">
                <use href="${y}#icon-arrow-left"></use>
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
                <use href="${y}#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
      </div>
    `}tt.innerHTML=`
      <h2 class="visually-hidden">Filtered Products</h2>
      <ul class="product-list-product__list">
        ${s}
      </ul>
      ${o}
  `,o&&document.querySelector(".product-list-pagination__list").addEventListener("click",({target:c})=>{const r=c.closest(".product-list-page__item");if(!r)return;let i=r.dataset.pageNumber;i!=="..."&&(i==="left"&&(i=t>1?t-1:t,t===1)||i==="right"&&(i=e-t>0?t+1:t,t===e)||(u.setPage(i),E(),At("#filters")))})}async function E(){try{let t=9;window.innerWidth<1440&&(t=8),window.innerWidth<768&&(t=6),u.getValueByKey("limit")!==t&&u.setLimit(t),dt.show();const e=await I.getProducts(u.get());e.results.length?(jt(e),Bt(e.results)):tt.innerHTML=Nt}catch(t){console.error(t)}finally{dt.remove()}}function At(t){const e=document.querySelector(t),n=document.querySelector(".header");e&&window.scrollTo({top:e.offsetTop-n.offsetHeight,behavior:"smooth"})}const $=document.querySelector(".select-menu"),Dt=$.querySelector(".select-btn"),V=$.querySelector(".sBtn-text"),T=document.querySelector(".select-menu-category"),Ut=T.querySelector(".select-btn-custom"),Y=T.querySelector(".sBtn-text-select"),Mt=document.querySelector(".search-form"),Rt=document.getElementById("search-icon"),et=document.getElementById("search-item"),lt=u.getValueByKey("keyword");lt&&(et.value=lt);function nt(){ot(null)}function ot(t){document.querySelectorAll(".select-menu, .select-menu-category").forEach(n=>{n!==t&&n.classList.contains("active")&&n.classList.remove("active")}),document.removeEventListener("click",nt)}Wt();Dt.addEventListener("click",t=>{ot($),$.classList.toggle("active"),t.stopPropagation(),$.classList.contains("active")&&document.addEventListener("click",nt)});Ut.addEventListener("click",t=>{ot(T),T.classList.toggle("active"),t.stopPropagation(),T.classList.contains("active")&&document.addEventListener("click",nt)});function Wt(){const t=document.createElement("ul");t.className="options";const e=u.getValueByKey("sortBy");e!=null&&e.name&&(V.innerText=e.name),u.getSortList().forEach(n=>{const s=document.createElement("li");s.className="option",s.dataset.sortByKey=n.key,s.dataset.sortByValue=n.value;const o=document.createElement("span");o.className="option-text",o.textContent=n.name,V.innerText===o.textContent&&s.classList.add("active"),s.appendChild(o),t.appendChild(s)}),$.appendChild(t),$.addEventListener("click",function(n){const s=n.target.closest(".option");if(s){let o=s.firstChild.innerText;V.innerText=o,$.classList.remove("active");const c=t.querySelector(".option.active");c&&c.classList.remove("active"),s.classList.add("active"),u.setSortBy(s.dataset.sortByKey,s.dataset.sortByValue),E()}})}u.getCategories().then(t=>{const e=document.createElement("ul");e.className="options";const n=u.getValueByKey("category");n&&(Y.innerText=n.replace(/_/g," ")),t.push("Show All"),t.forEach(s=>{const o=document.createElement("li");o.className="option-category",s!=="Show All"&&(o.dataset.originalCategory=s);const c=document.createElement("span");c.className="option-text",c.textContent=s.replace(/_/g," "),Y.innerText===c.textContent&&o.classList.add("active"),o.appendChild(c),e.appendChild(o)}),T.appendChild(e),e.addEventListener("click",function(s){const o=s.target.closest(".option-category");if(o){let c=o.dataset.originalCategory;Y.innerText=o.textContent,T.classList.remove("active");const r=e.querySelector(".option-category.active");r&&r.classList.remove("active"),o.classList.add("active"),u.setCategory(c),E()}})});Mt.addEventListener("submit",st);Rt.addEventListener("click",st);et.addEventListener("focusout",st);function st(t){t.preventDefault();const e=et.value.trim();e!==u.getValueByKey("keyword")&&(u.setKeyword(e),E())}var k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$t="Expected a function",ut=0/0,Kt="[object Symbol]",Ht=/^\s+|\s+$/g,Ft=/^[-+]0x[0-9a-f]+$/i,Vt=/^0b[01]+$/i,Yt=/^0o[0-7]+$/i,Gt=parseInt,zt=typeof k=="object"&&k&&k.Object===Object&&k,Xt=typeof self=="object"&&self&&self.Object===Object&&self,Zt=zt||Xt||Function("return this")(),Jt=Object.prototype,Qt=Jt.toString,te=Math.max,ee=Math.min,G=function(){return Zt.Date.now()};function ne(t,e,n){var s,o,c,r,i,d,m=0,b=!1,g=!1,_=!0;if(typeof t!="function")throw new TypeError($t);e=pt(e)||0,B(n)&&(b=!!n.leading,g="maxWait"in n,c=g?te(pt(n.maxWait)||0,e):c,_="trailing"in n?!!n.trailing:_);function v(a){var f=s,h=o;return s=o=void 0,m=a,r=t.apply(h,f),r}function R(a){return m=a,i=setTimeout(S,e),b?v(a):r}function W(a){var f=a-d,h=a-m,P=e-f;return g?ee(P,c-h):P}function x(a){var f=a-d,h=a-m;return d===void 0||f>=e||f<0||g&&h>=c}function S(){var a=G();if(x(a))return w(a);i=setTimeout(S,W(a))}function w(a){return i=void 0,_&&s?v(a):(s=o=void 0,r)}function K(){i!==void 0&&clearTimeout(i),m=0,s=d=o=i=void 0}function H(){return i===void 0?r:w(G())}function C(){var a=G(),f=x(a);if(s=arguments,o=this,d=a,f){if(i===void 0)return R(d);if(g)return i=setTimeout(S,e),v(d)}return i===void 0&&(i=setTimeout(S,e)),r}return C.cancel=K,C.flush=H,C}function oe(t,e,n){var s=!0,o=!0;if(typeof t!="function")throw new TypeError($t);return B(n)&&(s="leading"in n?!!n.leading:s,o="trailing"in n?!!n.trailing:o),ne(t,e,{leading:s,maxWait:e,trailing:o})}function B(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function se(t){return!!t&&typeof t=="object"}function ie(t){return typeof t=="symbol"||se(t)&&Qt.call(t)==Kt}function pt(t){if(typeof t=="number")return t;if(ie(t))return ut;if(B(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=B(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Ht,"");var n=Vt.test(t);return n||Yt.test(t)?Gt(t.slice(2),n?2:8):Ft.test(t)?ut:+t}var ce=oe;const ft=document.querySelector(".scroll-up");document.addEventListener("scroll",ce(re,400));function re(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?ft.classList.add("scroll-up-is-hidden"):ft.classList.remove("scroll-up-is-hidden")}var ae="Expected a function",mt=0/0,de="[object Symbol]",le=/^\s+|\s+$/g,ue=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,me=parseInt,ye=typeof k=="object"&&k&&k.Object===Object&&k,ge=typeof self=="object"&&self&&self.Object===Object&&self,he=ye||ge||Function("return this")(),ve=Object.prototype,be=ve.toString,_e=Math.max,Se=Math.min,z=function(){return he.Date.now()};function ke(t,e,n){var s,o,c,r,i,d,m=0,b=!1,g=!1,_=!0;if(typeof t!="function")throw new TypeError(ae);e=yt(e)||0,J(n)&&(b=!!n.leading,g="maxWait"in n,c=g?_e(yt(n.maxWait)||0,e):c,_="trailing"in n?!!n.trailing:_);function v(a){var f=s,h=o;return s=o=void 0,m=a,r=t.apply(h,f),r}function R(a){return m=a,i=setTimeout(S,e),b?v(a):r}function W(a){var f=a-d,h=a-m,P=e-f;return g?Se(P,c-h):P}function x(a){var f=a-d,h=a-m;return d===void 0||f>=e||f<0||g&&h>=c}function S(){var a=z();if(x(a))return w(a);i=setTimeout(S,W(a))}function w(a){return i=void 0,_&&s?v(a):(s=o=void 0,r)}function K(){i!==void 0&&clearTimeout(i),m=0,s=d=o=i=void 0}function H(){return i===void 0?r:w(z())}function C(){var a=z(),f=x(a);if(s=arguments,o=this,d=a,f){if(i===void 0)return R(d);if(g)return i=setTimeout(S,e),v(d)}return i===void 0&&(i=setTimeout(S,e)),r}return C.cancel=K,C.flush=H,C}function J(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function $e(t){return!!t&&typeof t=="object"}function Ce(t){return typeof t=="symbol"||$e(t)&&be.call(t)==de}function yt(t){if(typeof t=="number")return t;if(Ce(t))return mt;if(J(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=J(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(le,"");var n=pe.test(t);return n||fe.test(t)?me(t.slice(2),n?2:8):ue.test(t)?mt:+t}var Le=ke;const Te=768,Ee=1440;O();E();bt();Pt();let gt=Ct(window.innerWidth);window.addEventListener("resize",Le(()=>{const t=Ct(window.innerWidth);gt!==t&&(gt=t,E(),bt())},300));function Ct(t){switch(!0){case t<Te:return"mobile";case t>=Ee:return"desktop";default:return"tablet"}}
