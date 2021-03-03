var apikey = {
    key: '6ed7af8f-ba35-46b4-9ee4-6680636dd3f8'
};

// const fetch = require("node-fetch");

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+ apikey.key)
    .then((response) => {
        // console.log(response);
        if (!response.ok) 
            throw new Error('Erro ao executar requisição! Status: ' +response.status+' '+response.statusText);            
            return response.json();       
    })
    .then((api) => {
        console.log(api);
        let html = '';
        let total = parseInt(Math.random()*100);
        html = '<div class="lista">';
        for (i=0;i<= total;i++) {
            let dt = new Date(api.data[i].first_historical_data);            
            let dia = dt.getDate().toString();
            let diaF = (dia.length == 1) ? '0'+dia : dia;
            let mes  = (dt.getMonth()+1).toString();
            let mesF = (mes.length == 1) ? '0'+mes : mes;
            let ano = dt.getFullYear();
            html = html + 
            '<div class="card">' +                
                '<div class="card-body">' +
                    '<h4 class="card-title"><i class="fas fa-coins"></i> '+api.data[i].name+'</h4>' +
                    '<p class="card-text">'+api.data[i].symbol+'</p>' +
                    '<p class="card-text small">Primeira data histórica: '+diaF+'/'+mesF+'/'+ano+'</p>' +
                    '<a href="#" class="btn btn-info btn-sm">Info</a>' +
                '</div>' +     
            '</div>'
            ;
            
        }
        html = html + '</ul></div>';
        document.getElementById("conteudo").innerHTML = html;
    })
    .catch((error) => {
        console.log(error);
    })
