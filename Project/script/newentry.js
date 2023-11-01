function createEntry(moods) {
  // location.reload();
  console.log("Heard");
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
happy.addEventListener('click', () => moods.push("Happy"));
sad.addEventListener('click', () => moods.push("Sad"));
mad.addEventListener('click', () => moods.push("Mad"));
thankful.addEventListener('click', () => moods.push("Thankful"));
moody.addEventListener('click', () => moods.push("Nervous"));

btn.addEventListener('click', () => createEntry(moods));