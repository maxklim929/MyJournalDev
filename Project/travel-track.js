function saveTravel(rest, cat, city, desc) {
    location.reload();
    let info = [];
    info.push(rest, cat, city, desc);
    if (data == null) {
        data = [info];
    } else {
        data.push(info);
    }
    console.log("Saved")
    localStorage.setItem('travelLog', JSON.stringify(data)); // update localStorage
    console.log(data);
}


document.getElementById('submitbutton').addEventListener("click", () => {
    let restname = document.getElementById('name').value;
    let cat = document.getElementById('select').value;
    console.log(cat)
    let city = document.getElementById('city').value;
    let desc = document.getElementById('text').value;
    document.getElementById("card-container").innerHTML +=
        `<div class="card" style="width: 50%; margin-top: 1rem;">
    <img src="${cat}.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${restname}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${cat}, ${city}</h6>
        <p class="card-text">${desc}</p>
    </div>
    </div>`;
    console.log("Clicked");
    saveTravel(restname, cat, city, desc);
});

let entries = localStorage.getItem('travelLog');
var data = JSON.parse(entries);
if (entries != '') {
    for (let entry of data) {
        document.getElementById("card-container").innerHTML +=
        `<div class="card" style="width: 50%; margin-top: 1rem;">
    <img src="${entry[1]}.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${entry[0]}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${entry[1]}, ${entry[2]}</h6>
    <p class="card-text">${entry[3]}</p>
    </div>
    </div>`;
    }
}