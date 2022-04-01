const api_url =
    "https://cataas.com/api/cats";
async function getCats(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
getCats(api_url);
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
function show(data) {
    let tab =
        `<div>
          <span></span>
         
         </div>`;

    // Loop to access all rows 
    for (let r of data) {
        tab += `<span> 
    <img src="https://cataas.com/cat/${r.id}" height="180px" width="200px"/>
           
</span>`;
    }


    document.getElementById("cats").innerHTML = tab;
}
async function getCatsByTag(tag) {
    console.log(tag)
    // Storing response
    const response = await fetch("https://cataas.com/api/cats?tags=" + tag);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        //   hideloader();
    }
    let tab =
        `<div>
          <strong>Results</strong>
         
         </div>`;

    // Loop to access all rows 
    for (let r of data) {
        tab += `<span> 
    <img src="https://cataas.com/cat/${r.id}" height="180px" width="200px"/>
           
</span>`;
        document.getElementById("cats").innerHTML = tab;
    }
}
getCats(api_url);

   // getCatsByTag("cute") 
