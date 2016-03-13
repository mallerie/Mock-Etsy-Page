// Javascript Entry Point

import etsyData from './items';
import $ from 'jquery';

// $('main').append(`hello`);


var items = etsyData.results;


// //This line makes the other variable definitions a little shorter...
// var etsyInfo = items.results[0];

// //The info variables


items.forEach(function(item) {

  console.log(item);

  var firstImage  = item.Images[0].url_570xN;
  var firstTitle  = item.title;
  var firstSeller = item.Shop.shop_name;
  var firstPrice  = item.price;
  var currency    = item.currency_code;


  var itemTemplate = `<div class="product">
                        <img src="${firstImage}"">
                        <div class="title">${firstTitle}</div>
                        <div class="seller-price"><p>${firstSeller}</p><p>${firstPrice} ${currency}</p></div>
                      </div>`

    $('main').append(itemTemplate);
});

// iterate items : items.forEach item
// get the template for the item itemTemplate = getItemTemplate(?)
// once you have the itemTemplate, append it to the page ie: $('main').append(itemTemplate);


// function showPhotos(photo){
//   return image.forEach();

// }

// $('main').append(itemTemplate);