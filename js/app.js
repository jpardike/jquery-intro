// -------------------------------- jQuery

// $ = jQuery


// -------------- Selection

// Vanilla JS
const h1El = document.querySelector('h1');

const $h1El = $('h1');

const $productsList = $('#products');

const $blogItems = $('.blog');

//  Do not mix Vanilla JS with jQuery
// $blogItems[0]

// Use jQuery Methods instead
// $firstBlogItem = $blogItems.eq(0);

console.log($blogItems.eq(0));


// ------------------------- MODIFY

// Vanilla JS
// h1El.textContent

// jQuery text selection
console.log($h1El.text());

// jQuery text modification
console.log($h1El.text('Sweet'));

// Vanilla JS
// h1El.innerHTML = '<a href="#">My Page</a>';

// jQuery HTML Modification
$h1El.html('<a href="#">My Page</a>');



// -------------------- create
// vanilla JS
// const newLi = document.createElement('li');

const $newLi = $('<li />');
$newLi.text('Some Text');

// Prepend
// $productsList.prepend($newLi);

// Append
$productsList.append($newLi);
$('ul').append($newLi);

// $productsList.before('<h4>Our Products</h4>');
// $productsList.after('<h4>Blog Articles</h4>');
// console.log($newLi);

// ------------------ REMOVE

const $removeBlog = $('p.last').remove();

console.log($removeBlog);

// --------------------- JS & jQuery

const $allLiItems = $('li');

// $allLiItems.each((item) => {
//     item.remove();
// });

// for (let $item of $allLiItems) {
//     // console.log($item);
//     // $item.remove();
//     // $('li:first-child').css('background', '#fff');
//     // $item.css('color', '#fff');
// }


// console.log($allLiItems);


// ------------------------ ATTRIBUTES

const $firstImg = $('img');

// $firstImg.attr('src', 'https://picsum.photos/id/22/200');

// $firstImg
//     .attr('alt', 'Walking down the street')
//     .toggleClass('outline')
//     // .addClass('outline')
//     // .removeClass('outline')
//     // .attr('class', 'outline')
//     // .removeAttr('alt');
//     ;

// console.log($firstImg.attr('alt'));

//  ----------------------- EVENTS

// Vanilla JS
// document.body.addEventListener('click', () => {

// })
// let imageId = 1;
// const $nextBtn = $('#nextImg');

// $nextBtn.on('click', (e) => {
//     // console.log('click');
    
//     $firstImg.attr('src', `https://picsum.photos/id/${imageId}/200`);
//     imageId++;
// });

// ---------------- ANIMATIONS

const $nextBtn = $('#nextImg');
const $showBtn = $('showImg');
const $hideBtn = $('#hideImg');

$nextBtn.on('click', (e) => {
    // console.log('click');
    $('img').fadeOut(4000);
});

$hideBtn.on('click', (e) => {
    // console.log('click');
    $('img').fadeOut(4000);
});

$showBtn.on('click', (e) => {
    // console.log('click');
    $('img').fadeIn(4000);
});