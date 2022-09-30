fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
        .then( (resposta) => resposta.json() )
        .then( (regioes) => {
            regioes.map((cadaRegiao) => {
                document.getElementById('regiao').innerHTML += `
                    <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
            `;
        } );
    } );



//essa parte abaixo serve para mostrar as cidades após a região ser escolhida, se e somente se ela for selecionada.



function showestado (){
    document.getElementById('estado').innerHTML = `<option id="opcaoEstado" value="0">--Selecione--</option>`
    let regiaoSelecionado = regiao.value;
    fetch (`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiaoSelecionado}/estados`)
    .then ((resposta) => resposta.json())
    .then ((estados) => {
        estados.map((cadaEstado) =>{
            document.getElementById('estado').innerHTML += 
            `<option value="${cadaEstado.id}">${cadaEstado.nome}</option>`;
 
        });
    });
    
}

//Funciona da mesma maneira da parte de cima.

   function showcidade() {
    document.getElementById ('cidade').innerHTML = `<option id=opcaoCidade" value="0">--Selecione--</option>`;
    let cidadeSelecionado = estado.value;
    fetch (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${cidadeSelecionado}/municipios`)
    .then ( (resposta) => resposta.json())
    .then ( (cidade) => {
        cidade.map ((cadaCidade) => {
            document.getElementById('cidade').innerHTML += 
            `<option value="${cadaCidade.id}"> ${cadaCidade.nome}</option>`;
        } );
  });

}