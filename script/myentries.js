document.getElementById("prevEntries").innerHTML = ""
function defaultColors() {
  happy.style.backgroundColor = 'green';
  happy.style.color = 'white';

  sad.style.backgroundColor = 'blue';
  sad.style.color = 'white';

  mad.style.backgroundColor = 'rgb(126, 0, 0)';
  mad.style.color = 'white';

  thankful.style.backgroundColor = 'rgb(130, 109, 25)';
  thankful.style.color = 'white';

  nervous.style.backgroundColor = 'black';
  nervous.style.color = 'white';

  all.style.backgroundColor = 'rgb(70, 50, 30)';
  all.style.color = 'white';
}

function filterEntries(filter_mood) {
  document.getElementById("prevEntries").innerHTML = '';
  let entries = localStorage.getItem('journalEntries');
  let data = JSON.parse(entries); // make sure entries is not the empty string of undefined
  for (let entry of data) {
    var preEntry = document.createElement('section');
    preEntry.classList.add('card', 'mx-auto');
    preEntry.style.width = '80%';
    var header = document.createElement('h2');
    header.classList.add('card-header');
    header.style.backgroundColor = 'rgb(192,192,192)';
    header.innerText = entry[1];
    var innerDiv = document.createElement('div');
    innerDiv.classList.add("card-body");
    innerDiv.innerText = entry[0];
    let br = document.createElement('br');
    if (entry.length > 2) {
      innerDiv.append(br);
      innerDiv.append(br);
      var used = [];
      if (filter_mood != "All") {
        if (!entry[2].includes(filter_mood)) {
          continue;
        }
      }
      for (let mood of entry[2]) {
        let badge = document.createElement('button');
        let color;
        if (mood == 'Nervous') {
          color = 'btn-dark';
        } else if (mood == 'Sad') {
          color = 'btn-primary';
        } else if (mood == 'Mad') {
          color = 'btn-danger';
        } else if (mood == 'Thankful') {
          color = 'btn-warning';
        } else {
          badge.style.backgroundColor = 'green';
          badge.style.color = 'white';
        }

        if (!used.includes(mood)) {
          let badgeColor = color;
          badge.classList.add('btn', badgeColor, "btn-sm", "px-2", "mx-2");
          badge.innerText = mood;
          badge.id = mood + "Entry";
          badge.addEventListener('click', () => filterEntries(mood));
          innerDiv.append(badge);
          used.push(mood);
        }
      }
    }
    preEntry.append(header);
    preEntry.append(innerDiv);

    document.querySelector("#prevEntries").prepend(preEntry);
  }
}

(function () {
  let entries = localStorage.getItem('journalEntries');
  let data = JSON.parse(entries); // make sure entries is not the empty string of undefined
  for (let entry of data) {
    var preEntry = document.createElement('section');
    preEntry.classList.add('card', 'mx-auto');
    preEntry.style.width = '80%';
    var header = document.createElement('h2');
    header.classList.add('card-header');
    header.style.backgroundColor = 'rgb(192,192,192)';
    header.innerText = entry[1];
    var innerDiv = document.createElement('div');
    innerDiv.classList.add("card-body");
    innerDiv.innerText = entry[0];
    let br = document.createElement('br');
    if (entry.length > 2) {
      innerDiv.append(br);
      innerDiv.append(br);
      var used = [];
      for (let mood of entry[2]) {
        let badge = document.createElement('button');
        let color;
        if (mood == 'Nervous') {
          color = 'btn-dark';
        } else if (mood == 'Sad') {
          color = 'btn-primary';
        } else if (mood == 'Mad') {
          color = 'btn-danger';
        } else if (mood == 'Thankful') {
          color = 'btn-warning';
        } else {
          badge.style.backgroundColor = 'green';
          badge.style.color = 'white';
        }

        if (!used.includes(mood)) {
          let badgeColor = color;
          badge.classList.add('btn', badgeColor, "btn-sm", "px-2", "mx-2");
          badge.innerText = mood;
          badge.id = mood + "Entry";
          badge.addEventListener('click', () => filterEntries(mood));
          innerDiv.append(badge);
          used.push(mood);
        }
      }
    }
    preEntry.append(header);
    preEntry.append(innerDiv);

    document.querySelector("#prevEntries").prepend(preEntry);
  }
})();

let happy = document.querySelector("#happy");
let sad = document.querySelector("#sad");
let mad = document.querySelector("#mad");
let thankful = document.querySelector("#thankful");
let moody = document.querySelector("#nervous");
let all = document.querySelector("#all");
happy.addEventListener('click', function () {
  defaultColors();
  happy.style.backgroundColor = 'white';
  happy.style.color = 'green';
  filterEntries("Happy");
});
sad.addEventListener('click', function () {
  defaultColors();
  sad.style.backgroundColor = 'white';
  sad.style.color = 'blue';
  filterEntries("Sad");
});
mad.addEventListener('click', function () {
  defaultColors();
  mad.style.backgroundColor = 'white';
  mad.style.color = 'red';
  filterEntries("Mad");
});
thankful.addEventListener('click', function () {
  defaultColors();
  thankful.style.backgroundColor = 'white';
  thankful.style.color = 'orange';
  filterEntries("Thankful");
});
moody.addEventListener('click', function () {
  defaultColors();
  nervous.style.backgroundColor = 'white';
  nervous.style.color = 'black';
  filterEntries("Nervous");
});
all.addEventListener('click', function () {
  defaultColors();
  all.style.backgroundColor = 'white';
  all.style.color = 'black';
  filterEntries("All");
});