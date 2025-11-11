// Thumbs up, down and delete


var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");


Array.from(thumbUp).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const species = this.parentNode.parentNode.childNodes[3].innerText
    const lat = this.parentNode.parentNode.childNodes[5].innerText
    const long = this.parentNode.parentNode.childNodes[7].innerText
    const notes = this.parentNode.parentNode.childNodes[9].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[11].innerText)
    fetch('messages/thumbup', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'species': species,
        'lat': lat,
        'long': long,
        'notes': notes,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

/******Thumbs Down******/
Array.from(thumbDown).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const species = this.parentNode.parentNode.childNodes[3].innerText
    const lat = this.parentNode.parentNode.childNodes[5].innerText
    const long = this.parentNode.parentNode.childNodes[7].innerText
    const notes = this.parentNode.parentNode.childNodes[9].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[11].innerText)
    fetch('messages/thumbdown', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'species': species,
        'lat': lat,
        'long': long,
        'notes': notes,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});
/******End Thumbs Down ******/

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const species = this.parentNode.parentNode.childNodes[3].innerText
    const lat = this.parentNode.parentNode.childNodes[5].innerText
    const long = this.parentNode.parentNode.childNodes[7].innerText
    const notes = this.parentNode.parentNode.childNodes[9].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[11].innerText)
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'species': species,
        'lat': lat,
        'long': long,
        'notes': notes,
        'thumbUp': thumbUp
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
