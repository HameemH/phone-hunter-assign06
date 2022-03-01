//  taking search value 
const searchPhone = () =>{
    
    const searchValue = document.getElementById("searchBox");
    const searchText = searchValue.value;
      //   clearing search field and innerhtml
     searchValue.value = '';
     document.getElementById('searchResult').innerHTML = "";
     document.getElementById('phoneDetails').innerHTML = "";

      // fetching api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.data == "" ==true) {
            document.getElementById("noResult").style.display = "block";
          } else {
            searchResult(data.data.slice(0,20));
            document.getElementById("noResult").style.display = "none";
          }
        
    });
       
};



  //  function defining what to show in seach result 
const searchResult = (phones) => {
    for(const phone of phones) {
      const parent = document.getElementById("searchResult");
      const div = document.createElement("div");
      div.classList.add("col-md-4", "my-2")
      div.innerHTML = ` 
    
        <div class="card mx-auto" style="width: 18rem;">
          <img src="${phone.image}" class="card-img-top w-50 mt-1 mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title">Phone name: ${phone.phone_name}</h5>
            <h5 class="card-title">Phone Brand: ${phone.brand}</h5>
            <!--   button to show details  -->
            <a href="#" onclick="phoneDetails('${phone.slug}')" class="btn btn-primary w-75">Details</a>
          </div>
        </div>
      `;
      parent.appendChild(div);
      console.log(phone)

    }
  };

   // function for Details button 
 const phoneDetails = (id) => {
     const url = `https://openapi.programming-hero.com/api/phone/${id}`
     fetch(url)
     .then(res => res.json())
     .then(data => Details(data.data));

     
 };


   //function for showing info of details 
 const Details = data =>{
    
    if(data.releaseDate == ''){
        document.getElementById("phoneDetails").innerHTML = `
    <div class="card mx-auto shadow" style="width: 18rem;">
              <img src="${data.image}" class="card-img-top w-50 mx-auto" alt="...">
              <div class="card-body">
                <h5 class="card-title">Phone name: ${data.name}</h5>
                <h5 class="card-title text-danger"> release date not found</h5>
                <h5 class="card-title "> Storage: ${data.mainFeatures.storage}</h5>
                <h5 class="card-title"> Display: ${data.mainFeatures.displaySize}</h5>
                <h5 class="card-title"> Processor: ${data.mainFeatures.chipSet}</h5>
                <h5 class="card-title"> Memory: ${data.mainFeatures.memory}</h5>
                <h5 class="card-title"> Sensors: ${data.mainFeatures.sensors}</h5>
                <h5 class="card-title"> Connectivity: ${data.others.WLAN}</h5>
                <h5 class="card-title"> Bluetooth: ${data.others.Bluetooth}</h5>
                <h5 class="card-title"> Gps: ${data.others.GPS}</h5>
                <h5 class="card-title"> NFC: ${data.others.NFC}</h5>
                <h5 class="card-title"> Radio: ${data.others.Radio}</h5>
                <h5 class="card-title"> Ports: ${data.others.USB}</h5>
              </div>
            </div> `
    }
   else{   document.getElementById("phoneDetails").innerHTML = `
    <div class="card mx-auto shadow" style="width: 18rem;">
              <img src="${data.image}" class="card-img-top w-50 mx-auto" alt="...">
              <div class="card-body">
                <h5 class="card-title">Phone name: ${data.name}</h5>
                <h5 class="card-title "> ${data.releaseDate}</h5>
                <h5 class="card-title "> Storage: ${data.mainFeatures.storage}</h5>
                <h5 class="card-title"> Display: ${data.mainFeatures.displaySize}</h5>
                <h5 class="card-title"> Processor: ${data.mainFeatures.chipSet}</h5>
                <h5 class="card-title"> Memory: ${data.mainFeatures.memory}</h5>
                <h5 class="card-title"> Sensors: ${data.mainFeatures.sensors}</h5>
                <h5 class="card-title"> Connectivity: ${data.others.WLAN}</h5>
                <h5 class="card-title"> Bluetooth: ${data.others.Bluetooth}</h5>
                <h5 class="card-title"> Gps: ${data.others.GPS}</h5>
                <h5 class="card-title"> NFC: ${data.others.NFC}</h5>
                <h5 class="card-title"> Ports: ${data.others.USB}</h5>
              </div>
            </div>  
      `;   };
 
 };


//   bonus part others info
  const othersDetails =other =>{
      console.log(other.WLAN);
      document.getElementById('othersDetail').innerHTML= `
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    
    <h6 class="card-subtitle mb-2 text-muted">Connectivity: ${other.WLAN}</h6>
    <h6 class="card-subtitle mb-2 text-muted">Bluetooth: ${other.Bluetooth}</h6>
    
    
    
  </div>
</div>
      `
  }