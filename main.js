let bannerList=[
    {
        imgUrl:"baby_diaper_web31jan24.webp",
    },
    {
        imgUrl:"baby_festival_cta_web.webp",
    },
    {
        imgUrl:"powerup_web.webp",
    },
    {
        imgUrl:"824x400summer_skin_new.webp",
    }
];


let bannerContainer=document.querySelector(".banner");
createOfferList(bannerList,bannerContainer)

let newLaunchesContainer=document.querySelector(".new-launches > .product-cards");
createProductList(newLaunchesList,newLaunchesContainer)

function createProductList(list, container) {
    list.forEach(function(el) {
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        let mrp = document.createElement("p");
        let price = document.createElement("h4");

        img.setAttribute("src", el.imgUrl);
        name.innerText = el.name;
        name.setAttribute("calss","name");
        mrp.innerHTML = "MRP <span>$"  + el.mrp + "</span>"
        let p = (el.mrp / 100) * (100 - el.discount);
        p = (Math.round(p * 100) / 100).toFixed(2);
        price.innerHTML = "$" + p + "<span>" + el.discount + "% OFF";
        div2.append(name, mrp, price);
        div.append(img, div2)
        container.append(div);
    })
}

function createOfferList(list,container){
    list.forEach(function(el){
        let img=document.createElement("img");
        img.setAttribute("src",el.imgUrl);
        container.append(img);

    })
}
document.getElementById('scrollRightButton').addEventListener('click', function() {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.scrollLeft += 100; // Adjust the scroll amount as needed
});


const addressDropdownToggle = document.getElementById('address-dropdown-toggle');
const addressDropdown = document.getElementById('address-dropdown');

addressDropdownToggle.addEventListener('click', () => {
  addressDropdown.style.display = addressDropdown.style.display === 'none'? 'block' : 'none';
});

// Add event listeners to the buttons
document.getElementById('use-current-location').addEventListener('click', () => {
  // Handle "Use Current Location" button click
  console.log('Use Current Location button clicked');
  addressDropdown.style.display = 'none';
});

document.getElementById('change-address').addEventListener('click', () => {
  // Handle "Change Address" button click
  console.log('Change Address button clicked');
  addressDropdown.style.display = 'none';
});