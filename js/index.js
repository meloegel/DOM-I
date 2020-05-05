const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

var firstLink = document.querySelector('nav a:nth-child(1)');
firstLink.textContent = siteContent.nav['nav-item-1']
var secondLink = document.querySelector('nav a:nth-child(2)');
secondLink.textContent = siteContent.nav['nav-item-2']
var thirdLink = document.querySelector('nav a:nth-child(3)');
thirdLink.textContent = siteContent.nav['nav-item-3']
var fourthLink = document.querySelector('nav a:nth-child(4)');
fourthLink.textContent = siteContent.nav['nav-item-4']
var fifthLink = document.querySelector('nav a:nth-child(5)');
fifthLink.textContent = siteContent.nav['nav-item-5']
var sixthLink = document.querySelector('nav a:nth-child(6)');
sixthLink.textContent = siteContent.nav['nav-item-6']

var ctaTitle = document.querySelector('.container .cta .cta-text h1');
ctaTitle.textContent = siteContent.cta['h1']
var ctaButton = document.querySelector('.container .cta .cta-text button');
ctaButton.textContent = siteContent.cta['button']
var ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


var titlesH4 = document.querySelectorAll('.main-content .text-content h4');
titlesH4[0].textContent = siteContent['main-content']['features-h4']
titlesH4[1].textContent = siteContent['main-content']['about-h4']
titlesH4[2].textContent = siteContent['main-content']['services-h4']
titlesH4[3].textContent = siteContent['main-content']['product-h4']
titlesH4[4].textContent = siteContent['main-content']['vision-h4']


var contentP = document.querySelectorAll('.main-content .text-content p');
contentP[0].textContent = siteContent['main-content']['features-content']
contentP[1].textContent = siteContent['main-content']['about-content']
contentP[2].textContent = siteContent['main-content']['services-content']
contentP[3].textContent = siteContent['main-content']['product-content']
contentP[4].textContent = siteContent['main-content']['vision-content']

//middle img 
var middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// //contanct
var contactH4 = document.querySelector('.container .contact h4');
contactH4.textContent = siteContent['contact']['contact-h4']

var contentContact = document.querySelectorAll('.container .contact p');
contentContact[0].textContent = siteContent['contact']['address']
contentContact[1].textContent = siteContent['contact']['phone']
contentContact[2].textContent = siteContent['contact']['email']


//footer
var footerContent = document.querySelector('.container footer p');
footerContent.textContent = siteContent.footer.copyright;


const navLinks = document.querySelectorAll('nav a')

navLinks.forEach((a) => {a.style.color = 'green';})




var nav = document.querySelector('nav');

var newLink = document.createElement('a');
newLink.textContent = "Hello";
var otherLink = document.createElement('a');
otherLink.textContent = "World";


nav.appendChild(otherLink);
nav.prepend(newLink);