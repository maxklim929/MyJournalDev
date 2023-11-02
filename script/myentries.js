document.getElementById("prevEntries").innerHTML = ""
function filterEntries(mood) {
  let modalText = document.querySelector("#modalText");
  modalText.innerHTML = "";
  let moods = document.querySelectorAll("#" + mood + "Entry");
  let moodParents = [];
  for (let elem of moods) {
    moodParents.push(elem.parentElement);
  }
  let fullEntries = [];
  for (let parent of moodParents) {
    fullEntries.push(parent.parentElement);
  }
  console.log(fullEntries);
  document.querySelector("#dayFelt").innerText = "Days You Felt " + mood;
  for (let card of fullEntries) {
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    let cardHeader = document.createElement('h5');
    cardHeader.classList.add('card-header');
    cardHeader.innerText = card.childNodes[0].innerText;
    newCard.append(cardHeader);
    let cardBody = document.createElement('div');
    cardBody.innerHTML = card.childNodes[1].innerHTML;
    newCard.append(cardBody);
    modalText.append(newCard);
  }
  $('#modalFilter').modal('show');
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