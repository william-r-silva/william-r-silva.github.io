const totalDays = 1461; 
const future = new Date('2021-01-01');
const now = new Date();

const diff = Math.abs(future.getTime() - now.getTime()); // Subtrai uma data pela outra
const leftDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

const days = totalDays - leftDays;

function concluido(progress){
    if(progress < 100){
        return "<b class='not-finished'>(EM PROGRESSO)</b>";
    }
    return '';
}

let progress = Math.round((days * 100) / totalDays);
if(progress > 100){
    progress = 100;
}

const formacao_academica = document.getElementById('formacao_academica');

formacao_academica.innerHTML = '<strong>'+
                '   <h2>FORMAÇÃO ACADÊMICA</h2>'+
                '</strong>'+
                '<section class="container-formation">'+
                '<div class="IFSUL formation">'+
                '    <a href="http://www.sapucaia.ifsul.edu.br/">'+
                '        <img src="./images/ifsul.png" alt="IFSUL logo">'+                
                '    </a>'+
                '    <div class="progress">'+
                '            <p style="width:'+progress+'" data-value='+progress+'>Ensino Médio Integrado Técnico Em Informática '+concluido(progress)+'</p>'+
                '            <progress max="100" value="'+progress+'" class="progress-green"/>'+
                '        </div>'+
                '    </div>'+
                '</section>';