const searchPhone = () =>{
    const searchValue = document.getElementById("searchBox").value;
    
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then(response => response.json())
    .then(data => searchResult(data.data))
}

const searchResult = (phones) => {
    for(const phone of phones) {
        // console.log(phone)
      const parent = document.getElementById("searchResult");
  
      const div = document.createElement("div");
      div.classList.add("col-md-4", "my-2")
      div.innerHTML = ` 
    
        <div class="card mx-auto" style="width: 18rem;">
          <img src="${phone.image}" class="card-img-top w-50 mt-1 mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            
            <a href="#" onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Details</a>
          </div>
        </div>
    
      `;
      parent.appendChild(div);
      
    }
  };

 const phoneDetails = (id) => {
     const url = `https://openapi.programming-hero.com/api/phone/${id}`
     fetch(url)
     .then(res => res.json())
     .then(data => Details(data.data));

     
 };
 const Details = data =>{
     document.getElementById("phoneDetails").innerHTML = `
      <div class="card mx-auto" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div> 
        `; 
 }