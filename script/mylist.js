fetch(`https://uselessfacts.jsph.pl/api/v2/facts/today`).then(response => response.json()).then(data => {
    document.getElementById("define").innerText = data["text"];
});
fetch(`https://www.boredapi.com/api/activity/`).then(response => response.json()).then(data => {
    document.getElementById("bored").innerText = data["activity"];
});
fetch(`https://api.quotable.io/random`).then(response => response.json()).then(data => {
    document.getElementById("ins_quote").innerText = data["content"];
    document.getElementById("author").innerHTML = `<i>-${data["author"]}</i>`;
});
fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=H92OvzsBcMz4TWXcTURLiKBbvlCGFvGa`).then(response => response.json()).then(data => {
    var c1_ind = Math.floor(Math.random() * data["results"].length);
    while (c1_ind == 0) {
        c1_ind = Math.floor(Math.random() * data["results"].length);
    }
    var c2_ind = Math.floor(Math.random() * data["results"].length);
    while (c2_ind == 0 || c2_ind == c1_ind) {
        c2_ind = Math.floor(Math.random() * data["results"].length);
    }
    var news_arr = [data["results"][c1_ind], data["results"][c2_ind]];
    document.getElementById("c1_img").src = news_arr[0]["multimedia"][0]["url"];
    document.getElementById("c1_title").innerHTML = `<strong>${news_arr[0]["title"]}</strong>`;
    document.getElementById("news1").innerHTML = `<i>${news_arr[0]["byline"]}</i> - ${news_arr[0]["created_date"].substring(0, 10)}
                                                <br> ${news_arr[0]["abstract"]}
                                                <br> <a href="${news_arr[0]["url"]}">Link to Article</a>`;
    document.getElementById("c2_img").src = news_arr[1]["multimedia"][0]["url"];
    document.getElementById("c2_title").innerHTML = `<strong>${news_arr[1]["title"]}</strong>`;
    document.getElementById("news2").innerHTML = `<i>${news_arr[1]["byline"]}</i> - ${news_arr[1]["created_date"].substring(0, 10)}
                                                    <br> ${news_arr[1]["abstract"]}
                                                    <br> <a href="${news_arr[1]["url"]}">Link to Article</a>`;
    document.getElementById("save_c1").addEventListener('click', () => {
        if (localStorage.getItem('News') == null) {
            var new_data = [data["results"][c1_ind]];
            console.log(new_data);
            localStorage.setItem('News', JSON.stringify(new_data));
        } else {
            var curr_hist = JSON.parse(localStorage.getItem('News'));
            curr_hist.push(data["results"][c1_ind])
            localStorage.setItem('News', JSON.stringify(curr_hist));
            curr_hist = JSON.parse(localStorage.getItem('News'));
            console.log(curr_hist);
        }
    });
    document.getElementById("save_c2").addEventListener('click', () => {
        if (localStorage.getItem('News') == null) {
            var new_data = [data["results"][c1_ind]];
            console.log(new_data);
            localStorage.setItem('News', JSON.stringify(new_data));
        } else {
            var curr_hist = JSON.parse(localStorage.getItem('News'));
            curr_hist.push(data["results"][c1_ind])
            localStorage.setItem('News', JSON.stringify(curr_hist));
            curr_hist = JSON.parse(localStorage.getItem('News'));
            console.log(curr_hist);
        }
    });

});


