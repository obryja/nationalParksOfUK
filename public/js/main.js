var park = document.getElementsByClassName('parks__list')[0];

dataFetch("/get_all_parks")
    .then(data => {
        for(i = 0; i < data.length; i++){
            park.innerHTML += "<a href='/park/" + data[i]._id + "'><div class='parks__list__item'><img src='" + data[i].galery[0] + "' alt='zdjęcie parku'><h3>" + data[i].name + "</h3></div></a>";
        }
    })