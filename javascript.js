searchForm = document.querySelector('.search-form');
const forms = document.querySelector(".forms");

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
 
  
});

var swiper = new Swiper(".newspaper-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let checkoutCart = document.querySelector('.checkout');
let products = [];
let cart = [];


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
            addToCart(id_product);
          }
      })
  const addToCart = (product_id) => {
      let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
      if(cart.length <= 0){
          cart = [{
              product_id: product_id,
              quantity: 1
          }];
      }else if(positionThisProductInCart < 0){
          cart.push({
              product_id: product_id,
              quantity: 1
          });
      }else{
          cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
      }
      addCartToHTML();
      addCartToMemory();
  }
  const addCartToMemory = () => {
      localStorage.setItem('cart', JSON.stringify(cart));
  }
  const addCartToHTML = () => {
      listCartHTML.innerHTML = '';
      let totalQuantity = 0;
      if(cart.length > 0){
          cart.forEach(item => {
              totalQuantity = totalQuantity +  item.quantity;
              let newItem = document.createElement('div');
              newItem.classList.add('item');
              newItem.dataset.id = item.product_id;
  
              let positionProduct = products.findIndex((value) => value.id == item.product_id);
              let info = products[positionProduct];
              listCartHTML.appendChild(newItem);
              newItem.innerHTML = `
              <div class="image">
                      <img src="${info.image}">
                  </div>
                  <div class="name">
                  ${info.name}
                  </div>
                  <div class="totalPrice">$${info.price * item.quantity}</div>
                  <div class="quantity">
                      <span class="minus"><</span>
                      <span>${item.quantity}</span>
                      <span class="plus">></span>
                  </div>
              `;
          })
      }
      iconCartSpan.innerText = totalQuantity;
  }
  
  listCartHTML.addEventListener('click', (event) => {
      let positionClick = event.target;
      if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
          let product_id = positionClick.parentElement.parentElement.dataset.id;
          let type = 'minus';
          if(positionClick.classList.contains('plus')){
              type = 'plus';
          }
          changeQuantityCart(product_id, type);
      }
  })
  const changeQuantityCart = (product_id, type) => {
      let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
      if(positionItemInCart >= 0){
          let info = cart[positionItemInCart];
          switch (type) {
            case 'plus':
              cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
              break;
      
          default:
              let changeQuantity = cart[positionItemInCart].quantity - 1;
              if (changeQuantity > 0) {
                  cart[positionItemInCart].quantity = changeQuantity;
              }else{
                  cart.splice(positionItemInCart, 1);
              }
              break;
      }
  }
  addCartToHTML();
  addCartToMemory();
}

const initApp = () => {
  // get data product
  fetch('product.json')
  .then(response => response.json())
  .then(data => {
      products = data;
      addDataToHTML();

      // get data cart from memory
      if(localStorage.getItem('cart')){
          cart = HTML.parse(localStorage.getItem('cart'));
          addCartToHTML();
      }
  })
}
initApp();  
forms.classList.toggle("show-checkout");

document.querySelector('#checkout-btn').onclick = () =>{
  checkoutCartForm.classList.toggle('active');
}
