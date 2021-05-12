  //Products
 const products = [
  {
    id:1,
    title: 'ძველი ქარხნული საათი',
    prob: 583,
    weight: 19.74,
    price: 2100,
    img1: 'img/watchWm1.jpg',
    img2: 'img/watchWm.jpg',
    category: 'watch',
    gender: 'woman'
  },
  {
   id:2,
   title: 'ძველი ქარხნული საათის ბრასლეტი',
   prob: 583,
   weight: 13.5,
   price: 2000,
   img1: 'img/watchBracletWm.jpg',
   img2: '',
   category: 'cross',
   gender: 'woman'
 },
   {
     id:3,
    title: 'ძველი ქარხნული საათის ბრასლეტი',
    prob: 583,
    weight: 22.15,
    price: 3300,
    img1: 'img/watchBracletWm2.jpg',
    img2: '',
    category: 'cross',
    gender: 'woman'
   },
   {
     id:4,
     title: 'გრაციელას ბრენდის ბრასლეტი',
     prob: 750,
     weight: 27.3,
     price: 5400,
     img1: 'img/4.jpg',
     img2: '',
     category: 'cross',
     gender: 'woman'
   },
   {
    id:5,
    title: 'იტალიური ქარხნული ბრასლეტი(კაცის)',
    prob: 585,
    weight: 42.91,
    price: 6000,
    img1: 'img/5.jpg',
    img2: '',
    category: 'bracelet',
    gender: 'man'
  }
];

  //Display All Products on Main Page
  var productsOuterDiv = document.getElementById('productsOuterDiv');
  const productsBox = products.map(product => `<div class='productDiv'>
  <div class='imgDiv'>
  <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>`);
  productsOuterDiv.innerHTML = productsBox.join('');
  
  //Display Searched Products
  let filterInput = document.getElementById('filterInput');
  //Add event listener
  filterInput.addEventListener('keyup', filterProducts);

  function filterProducts(e){
    var productsOuterDiv = document.getElementById('productsOuterDiv');
    //Get Value of Input
    var filteredValue = e.target.value.toLowerCase();

    //Filter through products array
    let searchedProducts = products.filter(product =>{
      if (product.title.toLowerCase().indexOf(filteredValue) > -1) {
        return `<div class='productDiv'>
          <div class='imgDiv'>
            <img src='${product.img1}' alt='${product.title}'>
          </div>
          <h6><strong>${product.title}</strong></h6>
          <p><strong>წონა:</strong> ${product.weight} გრამი</p>
          <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
          <p><strong>ფასი:</strong> ${product.price} ლარი</p>
          <button class='btn btn-details'>დეტალურად</button>
        </div>`;
      }
      
    });
    //Map throug searched results
    let searchedResult = searchedProducts.map(product => `<div class='productDiv'>
    <div class='imgDiv'>
      <img src='${product.img1}' alt='${product.title}'>
    </div>
    <h6><strong>${product.title}</strong></h6>
    <p><strong>წონა:</strong> ${product.weight} გრამი</p>
    <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
    <p><strong>ფასი:</strong> ${product.price} ლარი</p>
    <button class='btn btn-details'>დეტალურად</button>
  </div>`);

    productsOuterDiv.innerHTML = searchedResult.join('');
  }

  //Btn search click
 let btnSearch = document.querySelector('.btn-search');
 btnSearch.addEventListener('click', onSearchClick);

 function onSearchClick(e){
   e.preventDefault();
   //Hide categories menu
   hiddenMenu.style.setProperty("display", "none", "important");
   //Change burger style 
   let burger = document.querySelector('.burger');
   burger.classList.remove('change');
 }


 //Filter Prices on main page
 let select = document.querySelector('.selectMain');
 select.addEventListener('click', onPriceClick);

function onPriceClick(){

  var productsOuterDiv = document.getElementById('productsOuterDiv');

  if(select.value === '1₾ - 300₾'){

    let underThreeHundred = products.filter(product => product.price <= 300)

    let result1 = underThreeHundred.map(product => `<div class='productDiv'>
    <div class='imgDiv'>
      <img src='${product.img1}' alt='${product.title}'>
    </div>
    <h6><strong>${product.title}</strong></h6>
    <p><strong>წონა:</strong> ${product.weight} გრამი</p>
    <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
    <p><strong>ფასი:</strong> ${product.price} ლარი</p>
    <button class='btn btn-details'>დეტალურად</button>
  </div>` );
  
  productsOuterDiv.innerHTML = result1.join('');
  }else if(select.value === '301₾ - 500₾'){

    let result2 = products.filter(product => product.price > 300 & product.price <= 500)
    .map(product => `<div class='productDiv'>
    <div class='imgDiv'>
      <img src='${product.img1}' alt='${product.title}'>
    </div>
    <h6><strong>${product.title}</strong></h6>
    <p><strong>წონა:</strong> ${product.weight} გრამი</p>
    <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
    <p><strong>ფასი:</strong> ${product.price} ლარი</p>
    <button class='btn btn-details'>დეტალურად</button>
  </div>` );
  productsOuterDiv.innerHTML = result2.join('');
  }else if(select.value === '501₾ - 800₾'){

    let result3 = products.filter(product => product.price > 500 & product.price <= 800)
    .map(product => `<div class='productDiv'>
    <div class='imgDiv'>
      <img src='${product.img1}' alt='${product.title}'>
    </div>
    <h6><strong>${product.title}</strong></h6>
    <p><strong>წონა:</strong> ${product.weight} გრამი</p>
    <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
    <p><strong>ფასი:</strong> ${product.price} ლარი</p>
    <button class='btn btn-details'>დეტალურად</button>
  </div>` );
  productsOuterDiv.innerHTML = result3.join('');
}else if(select.value === '801₾ - 1000₾'){

  let result4 = products.filter(product => product.price > 800 & product.price <= 1000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result4.join('');
}else if(select.value === '1001₾ - 1500₾'){

  let result5 = products.filter(product => product.price > 1000 & product.price <= 1500)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result5.join('');
}else if(select.value === '1501₾ - 2000₾'){

  let result6 = products.filter(product => product.price > 1501 & product.price <= 2000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result6.join('');
}else if(select.value === '2000₾+'){

  let result7 = products.filter(product => product.price > 2000)
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result7.join('');
}else if(select.value === 'ყველა'){

  let result8 = products
  .map(product => `<div class='productDiv'>
  <div class='imgDiv'>
    <img src='${product.img1}' alt='${product.title}'>
  </div>
  <h6><strong>${product.title}</strong></h6>
  <p><strong>წონა:</strong> ${product.weight} გრამი</p>
  <p><strong>სინჯი(პრობი):</strong> ${product.prob}</p>
  <p><strong>ფასი:</strong> ${product.price} ლარი</p>
  <button class='btn btn-details'>დეტალურად</button>
</div>` );
productsOuterDiv.innerHTML = result8.join('');
}


}



let btnDetails = document.querySelectorAll('.btn-details');

btnDetails.forEach(btn=>btn.addEventListener('click', onDetailsClick));

function onDetailsClick(id){
  document.querySelector('.body').classList.add('innerBody');
  document.querySelector('.productsSection').style.display="none";
  document.querySelector('.productInner').style.setProperty("display", "block", "important");
  window.scrollTo(0, 0);
  this.id = products.id
  console.log(products[id].id);
}