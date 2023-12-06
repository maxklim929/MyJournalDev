function createEntry(moods) {
  location.reload();
  let txt = document.querySelector('#text').value;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  let info = [];
  info.push(txt, today, moods);
  if (moods.length > 0) {
    info.push(moods);
  }
  if (data == null) {
    data = [info];
  } else {
    data.push(info);
  }
  localStorage.setItem('journalEntries', JSON.stringify(data)); // update localStorage
}

function savedQuotes() {
  let modalText = document.querySelector("#modalText");
  modalText.innerHTML = "";
  let quoteStorage = [];
  let quotes = localStorage.getItem('savedQuotes');
  if (quotes != '') {
    quoteStorage = JSON.parse(quotes);
  }
  for (let quote of quoteStorage) {
    let alert = document.createElement('div');
    alert.classList.add("alert", "alert-primary", "mx-auto");
    alert.innerText = quote + "";
    document.querySelector("#modalText").append(alert);
  }
  $('#savedQuotesModal').modal('show');
}

let btn = document.querySelector("#subButton");
let entries = localStorage.getItem('journalEntries');
var data = [];
if (entries != '') {
  data = JSON.parse(entries);
}
let happy = document.querySelector("#happy");
let sad = document.querySelector("#sad");
let mad = document.querySelector("#mad");
let thankful = document.querySelector("#thankful");
let moody = document.querySelector("#nervous");
let moods = [];
happy.addEventListener('click', function () {
  moods.push("Happy");
  happy.style.backgroundColor = 'white';
  happy.style.color = 'green';
});
sad.addEventListener('click', function () {
  moods.push("Sad");
  sad.style.backgroundColor = 'white';
  sad.style.color = 'blue';
});
mad.addEventListener('click', function () {
  moods.push("Mad");
  mad.classList.remove('btn-danger');
  mad.classList.add('btn-outline-danger')
  mad.style.backgroundColor = 'white';
});
thankful.addEventListener('click', function () {
  moods.push("Thankful");
  thankful.classList.remove('btn-warning');
  thankful.classList.add('btn-outline-warning')
  thankful.style.backgroundColor = 'white';
});
moody.addEventListener('click', function () {
  moods.push("Nervous");
  nervous.classList.remove('btn-dark');
  nervous.classList.add('btn-outline-dark')
  nervous.style.backgroundColor = 'white';
});

btn.addEventListener('click', () => createEntry(moods));