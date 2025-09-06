function toggleMenu() {
    document.getElementById('nav').classList.toggle('open');
}

// Substitua pelo número oficial da paróquia (apenas dígitos, com DDI/DD)
const numeroWhats = '5500000000000';
const linkWhats = `https://wa.me/${numeroWhats}`;
const whatsLinkEl = document.getElementById('whatsLink');
if (whatsLinkEl) whatsLinkEl.href = linkWhats;

function enviarWhats(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value.trim();
    const texto = encodeURIComponent(`Paz e bem!\n\nMeu nome é ${nome}.\nAssunto: ${assunto}.\nMensagem: ${mensagem}`);
    window.open(`${linkWhats}?text=${texto}`, '_blank');
    return false;
}

const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();