const searchPhone = () =>{
    const searchValue = document.getElementById("searchBox").value;
    
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then(response => response.json())
    .then(data => searchResult(data.data))
}

const searchResult = (phones) => {
    for(const phone of phones) {
        console.log(phone)
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