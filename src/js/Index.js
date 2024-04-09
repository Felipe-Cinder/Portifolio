const botaoMostraProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

 botaoMostraProjetos.addEventListener('click', () => {
   projetosInativos.forEach(projetosInativos => {
      projetosInativos.classList.add('ativo');
   });
   
   botaoMostraProjetos.classList.add("remover");
 })