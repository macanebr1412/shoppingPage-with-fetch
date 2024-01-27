// HEADER

// change banner content
const bannerContent = document.querySelector("[data-banner-content]");
let changeBannerValue = 1;
const changeBannerContent = function () {
  if (changeBannerValue == 1)
    bannerContent.innerHTML = ` <p>FREE SHIPING ON ORDERS OVER $60</p> <a href="#">LEARN MORE</a>`;
  else
    bannerContent.innerHTML = `<p>FREE AND EASY RETURNS</p> <a href="#">SEE DETAILS</a>`;
  changeBannerValue *= -1;
};

setInterval(changeBannerContent, 5000);

// show navbar in mobile screen and change style of nav
const navElement = document.querySelector("[data-nav]");
const navbarElement = document.querySelector("[data-navbar]");
const logoElement = document.querySelector("[data-logo]");
const navbarToggler = document.querySelector("[data-navbar-toggler]");
navbarToggler.onclick = function () {
  this.children[0].classList.toggle("fa-close");
  navElement.classList.toggle("active");
  navbarElement.classList.toggle("active");
  logoElement.classList.toggle("active");
};

const searchDiv = document.querySelector(".search-bar");
const searchElement = document.querySelector(".icon-list li#search-list");
const backElement = document.querySelector(".back");
const searchResultBox = document.querySelector(".search-result");
searchElement.onclick = function () {
  searchDiv.classList.add("active");
  searchResultBox.classList.add("active");
};
backElement.onclick = function () {
  searchDiv.classList.remove("active");
  searchResultBox.classList.remove("active");
};
const navbarLinks = document.querySelectorAll(".navbar-link");
for (const navbarLink of navbarLinks) {
  navbarLink.onclick = function () {
    for (const navbarLink of navbarLinks) {
      navbarLink.classList.remove("active");
    }

    this.classList.add("active");
  };
}

window.onscroll = function () {
  if (scrollY > 300) {
    navElement.classList.add("fixed");
  } else {
    navElement.classList.remove("fixed");
  }
  scrollReveal();
};

// FINISH HEADER

// SLIDE-SHOW

let slideCounter = 1;
const leftSlide = document.querySelector(
  ".slide-button .slid-button .fa-less-than"
);
const rightSlide = document.querySelector(
  ".slide-button .slid-button .fa-greater-than"
);

const imageWrappers = document.querySelectorAll(".image-wrapper");
const btnSlides = document.querySelectorAll(".btn-slide");

const sliding = function () {
  slideCounter++;
  if (slideCounter > 4) {
    slideCounter = 1;
  }
  if (slideCounter < 1) {
    slideCounter = 4;
  }
  for (const imageWrapper of imageWrappers) {
    imageWrapper.classList.replace("d-block", "d-none");
  }
  for (const btnSlide of btnSlides) {
    btnSlide.classList.remove("active");
    document.getElementById("btn" + slideCounter).classList.add("active");
  }
  document.querySelector(".slide" + slideCounter).classList.add("d-block");
};
let handleInterval = setInterval(sliding, 8000);
document.getElementById("btn1").onclick = function () {
  clearInterval(handleInterval);
  slideCounter = 1;
  for (const btnSlide of btnSlides) {
    btnSlide.classList.remove("active");
    this.classList.add("active");
  }
  for (const imageWrapper of imageWrappers) {
    imageWrapper.classList.replace("d-block", "d-none");
  }
  document.querySelector(".slide" + slideCounter).classList.add("d-block");
  handleInterval = setInterval(sliding, 8000);
};
document.getElementById("btn2").onclick = function () {
  clearInterval(handleInterval);
  slideCounter = 2;
  for (const btnSlide of btnSlides) {
    btnSlide.classList.remove("active");
    this.classList.add("active");
  }
  for (const imageWrapper of imageWrappers) {
    imageWrapper.classList.replace("d-block", "d-none");
  }
  document.querySelector(".slide" + slideCounter).classList.add("d-block");
  handleInterval = setInterval(sliding, 8000);
};
document.getElementById("btn3").onclick = function () {
  clearInterval(handleInterval);
  slideCounter = 3;
  for (const btnSlide of btnSlides) {
    btnSlide.classList.remove("active");
    this.classList.add("active");
  }
  for (const imageWrapper of imageWrappers) {
    imageWrapper.classList.replace("d-block", "d-none");
  }
  document.querySelector(".slide" + slideCounter).classList.add("d-block");
  handleInterval = setInterval(sliding, 8000);
};
document.getElementById("btn4").onclick = function () {
  clearInterval(handleInterval);
  slideCounter = 4;
  for (const btnSlide of btnSlides) {
    btnSlide.classList.remove("active");
    this.classList.add("active");
  }
  for (const imageWrapper of imageWrappers) {
    imageWrapper.classList.replace("d-block", "d-none");
  }
  document.querySelector(".slide" + slideCounter).classList.add("d-block");
  handleInterval = setInterval(sliding, 8000);
};

// FINISH SLIDE-SHOW

// TRENDING

const SlideButtonright = document.querySelector(
  ".trending .trending-button-box .right"
);
const SlideButtonleft = document.querySelector(
  ".trending .trending-button-box .left"
);

const trendingSlide = document.querySelector(".trending-slide");
SlideButtonright.onclick = function () {
  trendingSlide.scrollLeft += 100;
  SlideButtonleft.classList.add("active");
  if (trendingSlide.scrollLeft > 0) {
    SlideButtonleft.classList.add("active");
  }
};
SlideButtonleft.onclick = function () {
  trendingSlide.scrollLeft -= 100;
  if (trendingSlide.scrollLeft > 0) {
    SlideButtonleft.classList.add("active");
  } else {
    SlideButtonleft.classList.remove("active");
  }
};

trendingSlide.onscroll = function () {
  SlideButtonleft.classList.add("active");
  if (trendingSlide.scrollLeft < 5) {
    SlideButtonleft.classList.remove("active");
  }
  if (trendingSlide.scrollWidth - trendingSlide.scrollLeft < 400) {
    SlideButtonright.classList.remove("active");
  } else {
    SlideButtonright.classList.add("active");
  }
};

// FINISH TRENDING

// BRANDS

const showBrandBox = document.querySelector(".show-brands");
const backwardButton = document.getElementById("backward");
const forwardButton = document.getElementById("forward");

let brandsList = [];
let brandInsert = "";
// fetch("assets/json/brand.json")
fetch(
  "https://macanebr1412.github.io/shoppingPage-with-fetch/assets/json/brand.json"
)
  .then(function (res) {
    return res.json();
  })
  .then(function (brands) {
    brandsList = brands;
    for (const brand of brandsList) {
      brandInsert += `<div class="brand-box">
      <a href='#'>
    <div class="image-box">
      <img
        src="${brand.imgURL}"
        width="70"
        height="70"
        alt=""
      />
      </a>
    </div>
    <h4>${brand.name}</h4>
  </div>`;
    }
    showBrandBox.innerHTML = brandInsert;
  });

forwardButton.onclick = function () {
  this.previousElementSibling.scrollLeft += 150;
};
backwardButton.onclick = function () {
  this.nextElementSibling.scrollLeft -= 150;
};

// PRODUCT
const allProduct = document.querySelector(".all-product");
let productInsert = "";
let productList = [];
let searchList = [];
const showProduct = function (list, length) {
  for (const product of list.slice(0, length)) {
    productInsert += ` <div class="product-item">
                       <a class="product-link" href="#">
                         <div class="product-card">
                           <div class="card-image">
                             <i class="favorite fa fa-heart-circle-plus"></i>
                             <img
                               src="${product.imageURL}"
                               width="120"
                               height="120"
                               alt="addias hoodie"
                             />
                           </div>
                           <div class="card-content">
                             <div class="card-header">
                               <h3>${product.name}</h3>
                             </div>
                             <div class="card-categories">
                               <p>${product.categorie}</p>
                             </div>
                             <div class="card-price">
                               <p>${product.price}</p>
                             </div>
                           </div>
                         </div>
                       </a>
                       </div>`;

    allProduct.innerHTML = productInsert;
  }
};
const xhttp = new XMLHttpRequest();
// xhttp.open("GET", "/assets/json/product.json");
xhttp.open(
  "GET",
  "https://macanebr1412.github.io/shoppingPage-with-fetch/assets/json/product.json"
);
xhttp.send();
xhttp.onload = function () {
  productList = JSON.parse(this.responseText);
  if (this.status == 200) {
    document.querySelector(".loading").classList.add("d-none");
    showProduct(productList, 4);
  }
};

//sorting product

const hightPrice = document.getElementById("high-price");
const lowPrice = document.getElementById("low-price");
let isSortingHigh = false;
let isSortingLow = false;
let isSearch = false;
hightPrice.onclick = function () {
  this.previousElementSibling.classList.add("active");
  lowPrice.previousElementSibling.classList.remove("active");
  allProduct.innerHTML = "";
  productInsert = "";
  isSortingHigh = true;
  if (!isSearch) {
    if (isSortingLow && !isSortingHigh) {
      productList.reverse();
      showProduct(productList, 4);
    } else {
      productList.sort(function (a, b) {
        return b.priceValue - a.priceValue;
      });
      showProduct(productList, 4);
    }
    isSortingLow = false;
  } else {
    if (isSortingLow && !isSortingHigh) {
      searchList.reverse();
      showProduct(searchList, 4);
    } else {
      searchList.sort(function (a, b) {
        return b.priceValue - a.priceValue;
      });
      showProduct(searchList, 4);
    }
    isSortingLow = false;
  }
};
lowPrice.onclick = function () {
  this.previousElementSibling.classList.add("active");
  hightPrice.previousElementSibling.classList.remove("active");
  allProduct.innerHTML = "";
  productInsert = "";
  isSortingLow = true;
  if (!isSearch) {
    if (isSortingHigh && !isSortingLow) {
      productList.reverse();
      showProduct(productList, 4);
    } else {
      productList.sort(function (a, b) {
        return a.priceValue - b.priceValue;
      });
      showProduct(productList, 4);
      isSortingHigh = false;
    }
  } else {
    console.log(searchList);
    if (isSortingHigh && !isSortingLow) {
      searchList.reverse();
      showProduct(searchList, 4);
    } else {
      searchList.sort(function (a, b) {
        return a.priceValue - b.priceValue;
      });
      showProduct(searchList, 4);
      isSortingHigh = false;
    }
  }
};

// searching product

const searchBar = document.getElementById("search2");
searchBar.onkeyup = function () {
  if (this.value.length > 0) {
    isSearch = true;
  } else {
    isSearch = false;
  }
  document.querySelector(".loading").classList.remove("d-none");
  searchList = [];
  allProduct.innerHTML = "";
  productInsert = "";
  for (const product of productList) {
    if (
      product.name.toUpperCase().indexOf(this.value.toUpperCase().trim()) != -1
    ) {
      searchList.push(product);
    }
  }
  document.querySelector(".loading").classList.add("d-none");
  if (!searchList.length) {
    productInsert += `<p class="error-message"><i class="fa fa-warning"></i> sorry nothing found</p>`;
    allProduct.innerHTML = productInsert;
  } else {
    showProduct(searchList, 4);
  }
};

const moreProductBtn = document.querySelector(".more #all-product");
const fourProductBtn = document.querySelector(".more #four-product");
moreProductBtn.onclick = function (e) {
  allProduct.innerHTML = "";
  productInsert = "";
  e.preventDefault();
  if (!isSearch) {
    showProduct(productList, productList.length - 1);
  } else {
    showProduct(searchList, searchList.length - 1);
  }
};
fourProductBtn.onclick = function (e) {
  allProduct.innerHTML = "";
  productInsert = "";
  e.preventDefault();
  if (!isSearch) {
    showProduct(productList, 4);
  } else {
    showProduct(searchList, 4);
  }
};
// FOOTER

const footerAccordionHeader = document.querySelectorAll(
  ".footer-accordion-header"
);

for (const header of footerAccordionHeader) {
  header.onclick = function () {
    if (this.classList.contains("active")) {
      for (const header of footerAccordionHeader) {
        header.classList.remove("active");
        header.nextElementSibling.style.maxHeight = null;
      }
    } else {
      for (const header of footerAccordionHeader) {
        header.classList.remove("active");
        header.nextElementSibling.style.maxHeight = null;
      }
      this.classList.add("active");
      this.nextElementSibling.style.maxHeight =
        this.nextElementSibling.scrollHeight + "px";
    }
  };
}

// ALL SECTION
// scroll efect on sections

const sections = document.querySelectorAll(".section");

const scrollReveal = function () {
  for (const section of sections) {
    if (section.getBoundingClientRect().top < window.innerHeight / 1.2) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  }
};

scrollReveal();

// window.onscroll = scrollReveal;
