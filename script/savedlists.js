function defaultColors() {
    newsbtn.style.backgroundColor = 'blue';
    newsbtn.style.color = 'white';

    factbtn.style.backgroundColor = 'blue';
    factbtn.style.color = 'white';

    actbtn.style.backgroundColor = 'blue';
    actbtn.style.color = 'white';

    quotebtn.style.backgroundColor = 'blue';
    quotebtn.style.color = 'white';
}

var newsbtn = document.getElementById("news_filter");
var factbtn = document.getElementById("fact_filter");
var actbtn = document.getElementById("act_filter");
var quotebtn = document.getElementById("quote_filter");

newsbtn.addEventListener('click', () => {
    defaultColors();
    newsbtn.style.backgroundColor = 'white';
    newsbtn.style.color = 'blue';
    document.getElementById("container").innerHTML = '';
    var card = `        
    <div class="card">
        <div class="card-body">

        
    `
    if (localStorage.getItem('News') != null) {
        var data = JSON.parse(localStorage.getItem('News'));
        for (let entry of data) {
            card += `
            <div class="card" style="width: 100%; background-color: white;">
                <img class="card-img-top" alt="Card image cap" src=${entry["multimedia"][0]["url"]}>
                <div class="card-body">
                    <h1 class="card-title"><strong>${entry["title"]}</strong></h1>
                    <h2 class="card-text" id="news1"><i>${entry["byline"]}</i> - ${entry["created_date"].substring(0, 10)}
                    <br> ${entry["abstract"]}
                    <br> <a href="${entry["url"]}">Link to Article</a></h2>
                </div>
            </div>`;
        }
        card += `</div> </div>`;
        document.getElementById("container").innerHTML = card;
    }
});

factbtn.addEventListener('click', () => {
    defaultColors();
    factbtn.style.backgroundColor = 'white';
    factbtn.style.color = 'blue';
    document.getElementById("container").innerHTML = '';
    if (localStorage.getItem('Facts') != null) {
        var card = `        
        <div class="card">
            <div class="card-body">
    
            
        `
        var data = JSON.parse(localStorage.getItem('Facts'));
        for (let entry of data) {
            card += `
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <div class="card-title" style="background-color: white;"><strong>${entry}</strong></div>
                </div>
            </div>`;
        }
        card += `</div> </div>`;
        document.getElementById("container").innerHTML = card;
    }
});

actbtn.addEventListener('click', () => {
    defaultColors();
    actbtn.style.backgroundColor = 'white';
    actbtn.style.color = 'blue';
    document.getElementById("container").innerHTML = '';

    if (localStorage.getItem('Bored') != null) {
        var card = `        
        <div class="card">
            <div class="card-body">
    
            
        `
        var data = JSON.parse(localStorage.getItem('Bored'));
        for (let entry of data) {
            card += `
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <div class="card-title" style="background-color: white;"><strong>${entry}</strong></div>
                </div>
            </div>`;
        }
        card += `</div> </div>`;
        document.getElementById("container").innerHTML = card;
    }

});

quotebtn.addEventListener('click', () => {
    defaultColors();
    quotebtn.style.backgroundColor = 'white';
    quotebtn.style.color = 'blue';
    document.getElementById("container").innerHTML = '';

    if (localStorage.getItem('Quote') != null) {
        var card = `        
        <div class="card">
            <div class="card-body">
    
            
        `
        var data = JSON.parse(localStorage.getItem('Quote'));
        for (let entry of data) {
            card += `
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <div class="card-title" style="background-color: white;"><strong>${entry}</strong></div>
                </div>
            </div>`;
        }
        card += `</div> </div>`;
        document.getElementById("container").innerHTML = card;
    }

});

defaultColors();