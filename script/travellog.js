function saveTravel(rest, cat, city, desc) {
    let info = [];
    info.push(rest, cat, city, desc);
    if (data == null) {
        data = [info];
    } else {
        data.push(info);
    }
    localStorage.setItem('travelLog', JSON.stringify(data)); // update localStorage
}


document.getElementById('submitbutton').addEventListener("click", () => {
    let restname = document.getElementById('name').value;
    let cat = document.getElementById('select').value;
    let city = document.getElementById('city').value;
    let desc = document.getElementById('text').value;
    if (restname.length != 0) {
        document.getElementById("card-container").innerHTML +=
            `<div class="card">
    <img src="./images/${cat}.jpeg" class="card-img-top" alt="Image of a given ${cat}">
    <div class="card-body">
        <h2 class="card-title">${restname}</h2>
        <h3 class="card-subtitle mb-2 text-muted">${cat}, ${city}</h3>
        <p class="card-text">${desc}</p>
    </div>
    </div>`;
        saveTravel(restname, cat, city, desc);
    }
});

let entries = localStorage.getItem('travelLog');
var data = JSON.parse(entries);
if (data != null && entries != '') {
    for (let entry of data) {
        document.getElementById("card-container").innerHTML +=
            `<div class="card">
    <img src="./images/${entry[1]}.jpeg" class="card-img-top" alt="Image on a card of the provided category, i.e. ${entry[1]}">
    <div class="card-body">
    <h2 class="card-title">${entry[0]}</h2>
    <h3 class="card-subtitle mb-2 text-muted">${entry[1]}, ${entry[2]}</h3>
    <p class="card-text">${entry[3]}</p>
    </div>
    </div>`;
    }
}
