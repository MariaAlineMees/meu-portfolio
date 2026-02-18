
function copiarEmail() {
    
    const emailTexto = document.getElementById('meu-email').innerText;
    const botao = document.getElementById('btn-copiar');

    
    navigator.clipboard.writeText(emailTexto).then(() => {
        
        const textoOriginal = botao.innerText;
        botao.innerText = 'Copiado!';
        botao.style.backgroundColor = '#ed47c6b7'; 
        botao.style.color = '#ffffff';

        
        setTimeout(() => {
            botao.innerText = textoOriginal;
            botao.style.backgroundColor = 'transparent';
            botao.style.color = '#ed47c6b7';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar e-mail: ', err);
    });
}


console.log("Portfólio de Aline: JavaScript carregado com sucesso.");