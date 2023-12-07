fetch(`https://uselessfacts.jsph.pl/api/v2/facts/today`).then(response => response.json()).then(data => {
    document.getElementById("define").innerText = data["text"];
    document.getElementById("save_fact").addEventListener('click', () => {
        document.getElementById("save_fact").style.backgroundColor = 'white';
        document.getElementById("save_fact").style.color = 'blue';
        if (localStorage.getItem('Facts') == null) {
            var new_data = [document.getElementById("define").innerText];
            console.log(new_data);
            localStorage.setItem('Facts', JSON.stringify(new_data));
        } else {
            var curr_hist = JSON.parse(localStorage.getItem('Facts'));
            curr_hist.push(document.getElementById("define").innerText)
            localStorage.setItem('Facts', JSON.stringify(curr_hist));
            curr_hist = JSON.parse(localStorage.getItem('Facts'));
            console.log(curr_hist);
        }
    });
});
fetch(`https://www.boredapi.com/api/activity/`).then(response => response.json()).then(data => {
    document.getElementById("bored").innerText = data["activity"];
    document.getElementById("save_bored").addEventListener('click', () => {
        document.getElementById("save_bored").style.backgroundColor = 'white';
        document.getElementById("save_bored").style.color = 'blue';
        if (localStorage.getItem('Bored') == null) {
            var new_data = [document.getElementById("bored").innerText];
            console.log(new_data);
            localStorage.setItem('Bored', JSON.stringify(new_data));
        } else {
            var curr_hist = JSON.parse(localStorage.getItem('Bored'));
            curr_hist.push(document.getElementById("bored").innerText)
            localStorage.setItem('Bored', JSON.stringify(curr_hist));
            curr_hist = JSON.parse(localStorage.getItem('Bored'));
            console.log(curr_hist);
        }
    });
});
fetch(`https://api.quotable.io/random`).then(response => response.json()).then(data => {
    document.getElementById("ins_quote").innerHTML = `${data["content"]} <br> <i>-${data["author"]}</i>`;
    document.getElementById("save_quote").addEventListener('click', () => {
        document.getElementById("save_quote").style.backgroundColor = 'white';
        document.getElementById("save_quote").style.color = 'blue';
        if (localStorage.getItem('Quote') == null) {
            var new_data = [document.getElementById("ins_quote").innerHTML];
            console.log(new_data);
            localStorage.setItem('Quote', JSON.stringify(new_data));
        } else {
            var curr_hist = JSON.parse(localStorage.getItem('Quote'));
            curr_hist.push(document.getElementById("ins_quote").innerHTML)
            localStorage.setItem('Quote', JSON.stringify(curr_hist));
            curr_hist = JSON.parse(localStorage.getItem('Quote'));
            console.log(curr_hist);
        }
    });
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
        document.getElementById("save_c1").style.backgroundColor = 'white';
        document.getElementById("save_c1").style.color = 'blue';
        if (localStorage.getItem('News') == null) {
            var new_data = [data["results"][c1_ind]];
            localStorage.setItem('News', JSON.stringify(new_data));
        } else {
            var curr_hist = JSON.parse(localStorage.getItem('News'));
            curr_hist.push(data["results"][c1_ind])
            localStorage.setItem('News', JSON.stringify(curr_hist));
            curr_hist = JSON.parse(localStorage.getItem('News'));
        }
    });
    document.getElementById("save_c2").addEventListener('click', () => {
        document.getElementById("save_c2").style.backgroundColor = 'white';
        document.getElementById("save_c2").style.color = 'blue';
        if (localStorage.getItem('News') == null) {
            var new_data = [data["results"][c2_ind]];
            localStorage.setItem('News', JSON.stringify(new_data));
        } else {
            var curr_hist = JSON.parse(localStorage.getItem('News'));
            curr_hist.push(data["results"][c2_ind])
            localStorage.setItem('News', JSON.stringify(curr_hist));
            curr_hist = JSON.parse(localStorage.getItem('News'));
            console.log(curr_hist);
        }
    });
});


