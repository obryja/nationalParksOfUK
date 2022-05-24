var parkName = document.getElementsByClassName('park__name')[0];
var year = document.getElementsByClassName('park__year')[0];
var area = document.getElementsByClassName('park__area')[0];
var website= document.getElementsByClassName('park__website')[0];
var galery = document.getElementsByClassName('park__galery')[0];
var description = document.getElementsByClassName('park__description')[0];
var modal = document.getElementsByClassName('modal')[0];

dataFetch("/get_park", { "id": parkId })
    .then(data => {
        parkName.innerHTML = data.name;
        year.innerHTML = "Rok powstania: " + data.year;
        area.innerHTML = "Powierzchnia: " + data.area + " km²";
        description.innerHTML = data.description;
        website.href =  data.website;

        for(i = 0; i < data.galery.length; i++){
            galery.innerHTML += "<img  src=" + data.galery[i] + " onclick='displayModal(this.src)'>"
        }
    })


function displayModal(imgSrc){
    modal.style.display = 'block';
    document.getElementsByClassName('modal__img')[0].src = imgSrc
}

function hideModal(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}