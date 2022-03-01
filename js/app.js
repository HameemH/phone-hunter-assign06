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
          } 
          
          else {
            //   bonus part showing 20 search results 
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
    //  if the date and others info both are not available
     if(data.others === undefined && data.releaseDate == ''){
        document.getElementById("phoneDetails").innerHTML = `
    <div class="card mx-auto shadow" style="width: 18rem;">
              <img src="${data.image}" class="card-img-top w-50 mx-auto mt-2" alt="...">
              <div class="card-body">
              <h5 class="card-title"><span class="fw-bold">Phone name:</span> ${data.name}</h5>
              <h5 class="card-title text-danger">Realease Info Not Found</h5>
              <h5 class="card-title "><span class="fw-bold">Storage:</span> ${data.mainFeatures.storage}</h5>
              <h5 class="card-title"><span class="fw-bold">Display:</span>  ${data.mainFeatures.displaySize}</h5>
              <h5 class="card-title"><span class="fw-bold">Processor:</span>  ${data.mainFeatures.chipSet}</h5>
              <h5 class="card-title"><span class="fw-bold">Memory:</span>  ${data.mainFeatures.memory}</h5>
             
                               <!--bonus part  -->
              <h5 class="card-title"><span class="fw-bold">Sensors</span> : ${data.mainFeatures.sensors}</h5>
              <h5 class="card-title text-danger">Others Info Not Found</h5>
                
                </div>
                </div>  
                `
    }
        //  if the date  are not available

    else if(data.releaseDate == ''){
        
        document.getElementById("phoneDetails").innerHTML = `
    <div class="card mx-auto shadow" style="width: 18rem;">
              <img src="${data.image}" class="card-img-top w-50 mx-auto mt-2" alt="...">
              <div class="card-body">
              <h5 class="card-title"><span class="fw-bold">Phone name:</span> ${data.name}</h5>
              <h5 class="card-title text-danger">Realease Info Not Found</h5>
              <h5 class="card-title "><span class="fw-bold">Storage:</span> ${data.mainFeatures.storage}</h5>
              <h5 class="card-title"><span class="fw-bold">Display:</span>  ${data.mainFeatures.displaySize}</h5>
              <h5 class="card-title"><span class="fw-bold">Processor:</span>  ${data.mainFeatures.chipSet}</h5>
              <h5 class="card-title"><span class="fw-bold">Memory:</span>  ${data.mainFeatures.memory}</h5>

              
                               <!--bonus part  -->
              <h5 class="card-title"><span class="fw-bold">Sensors</span> : ${data.mainFeatures.sensors}</h5>
              <h5 class="card-title"><span class="fw-bold">Connectivity:</span>  ${data.others.WLAN}</h5>
              <h5 class="card-title"><span class="fw-bold">Bluetooth</span> : ${data.others.Bluetooth}</h5>
              <h5 class="card-title"><span class="fw-bold">Gps:</span> Gps: ${data.others.GPS}</h5>
              <h5 class="card-title"><span class="fw-bold">NFC:</span>  ${data.others.NFC}</h5>
              <h5 class="card-title"><span class="fw-bold">Ports:</span>  ${data.others.USB}</h5>
              </div>
            </div> `
    }
        //  if others info are not available

    else if(data.others === undefined ){
        document.getElementById("phoneDetails").innerHTML = `
    <div class="card mx-auto shadow" style="width: 18rem;">
              <img src="${data.image}" class="card-img-top w-50 mx-auto mt-2" alt="...">
              <div class="card-body">
              <h5 class="card-title"><span class="fw-bold">Phone name:</span> ${data.name}</h5>
              <h5 class="card-title "> ${data.releaseDate}</h5>
              <h5 class="card-title "><span class="fw-bold">Storage:</span> ${data.mainFeatures.storage}</h5>
              <h5 class="card-title"><span class="fw-bold">Display:</span>  ${data.mainFeatures.displaySize}</h5>
              <h5 class="card-title"><span class="fw-bold">Processor:</span>  ${data.mainFeatures.chipSet}</h5>
              <h5 class="card-title"><span class="fw-bold">Memory:</span>  ${data.mainFeatures.memory}</h5>
                              
              
                                 <!--bonus part  -->
              <h5 class="card-title"><span class="fw-bold">Sensors</span> : ${data.mainFeatures.sensors}</h5>
              <h5 class="card-title text-danger">Others Info Not Found</h5>
                
                </div>
                </div>  
                `
    }
   else{   document.getElementById("phoneDetails").innerHTML = `
    <div class="card mx-auto shadow" style="width: 18rem;">
              <img src="${data.image}" class="card-img-top w-50 mx-auto mt-2" alt="...">
              <div class="card-body">
                <h5 class="card-title"><span class="fw-bold">Phone name:</span> ${data.name}</h5>
                <h5 class="card-title "> ${data.releaseDate}</h5>
                <h5 class="card-title "><span class="fw-bold">Storage:</span> ${data.mainFeatures.storage}</h5>
                <h5 class="card-title"><span class="fw-bold">Display:</span>  ${data.mainFeatures.displaySize}</h5>
                <h5 class="card-title"><span class="fw-bold">Processor:</span>  ${data.mainFeatures.chipSet}</h5>
                <h5 class="card-title"><span class="fw-bold">Memory:</span>  ${data.mainFeatures.memory}</h5>
                
                
                                <!--bonus part  -->
                <h5 class="card-title"><span class="fw-bold">Sensors</span> : ${data.mainFeatures.sensors}</h5>
                <h5 class="card-title"><span class="fw-bold">Connectivity:</span>  ${data.others.WLAN}</h5>
                <h5 class="card-title"><span class="fw-bold">Bluetooth</span> : ${data.others.Bluetooth}</h5>
                <h5 class="card-title"><span class="fw-bold">Gps:</span> Gps: ${data.others.GPS}</h5>
                <h5 class="card-title"><span class="fw-bold">NFC:</span>  ${data.others.NFC}</h5>
                <h5 class="card-title"><span class="fw-bold">Ports:</span>  ${data.others.USB}</h5>
              </div>
            </div>  
      `;   };
 
 };

