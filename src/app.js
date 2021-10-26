const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {

        console.log(data)
        data.forEach(article => {
            const articleItem = 
          `<div class="example-2 card">
            <div class="wrapper" style="background: top / contain no-repeat url(`+article.img+`)" >
              <div class="header">
                
              
              </div>
              <div class="data">
                <div class="content">
                  
                  <h1 class="title"><a href="#">`
                  +article.title+
                  `</a>
                  
                  
                  
                  </h1>
                  <p class="text">`+article.subtitle+`</p>
             
                </div>
              </div>
            </div>
          </div>`
  
          
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        })
    })
    .catch(err => console.log(err))













// `<div class="cards"><h3>` + article.title + `</h3>
// <p>` + article.url + `</p>                      
// <p>`+ article.img +`</p>
// <img src=`+ article.img +` id="image" />
// </div>`



 
// `<section class="cards">
// <article class="card card--1">
//   <div class="card__img"></div>
//   <a href="#" class="card_link">
//      <div class="card__img--hover"
//      style="background-image: url(`+ article.img +`)"></div>
//    </a>
//   <div class="card__info">

//     <h3 class="card__title">`+ article.title + `</h3>
//   </div>
// </article>
// </section>`