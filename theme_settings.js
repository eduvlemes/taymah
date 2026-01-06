let repo_url = 'https://cdn.jsdelivr.net/gh/eduvlemes/taymah/';

theme.icon.cart = '<img src="https://cdn.awsli.com.br/2867/2867811/arquivos/frame-97-.svg" alt="Carrinho" />';
theme.icon.search = '<img src="https://cdn.awsli.com.br/2867/2867811/arquivos/frame-99-.svg" alt="Buscar" />';
theme.icon.account = '<img src="https://cdn.awsli.com.br/2867/2867811/arquivos/frame-98-.svg" alt="Minha Conta" />';
theme.worker.topbarSlider.list = [
    {
        text: "Primeira compra? Use o código BEMVINDA para 10% de desconto!",
        link: "/collections/all"
    },
    {
        text: "Frete grátis para pedidos acima de R$500",
        link: "/collections/all"
    }
];

theme.templates.header = '<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="col-auto" id="theme_header-logo"><button type="button" id="theme_header-menu-trigger"></button></div><div class="col justify-content-center" id="theme_header-menu"></div><div class="col" id="theme_header-functions-block"><ul id="theme_header-functions"></ul></div></div></div></div>';

theme.worker.topbarSlider.config.backgroundColor = "#3F3C3C";
theme.worker.topbarSlider.config.textColor = "#fff";

theme.benefitsStripe.active = true;
theme.benefitsStripe.config = {
    textColor: '#000',
    backgroundColor: '#fff',
    borderColor: `#f2f2f2`,
    imageAbove: true
}
theme.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2867/2867811/arquivos/frame-100-.svg', title:'Primeira troca grátis', subtitle:'em até 30 dias', link:''});
theme.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2867/2867811/arquivos/frame-2025-12-26t162050-048.svg', title:'Frete grátis', subtitle:'em pedidos acima de R$ 900', link:''});
theme.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2867/2867811/arquivos/frame-2025-12-26t162053-999.svg', title:'Até 6x sem juros', subtitle:'via cartão de crédito', link:''});
theme.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2867/2867811/arquivos/frame-2025-12-26t162056-916.svg', title:'Primeira compra', subtitle:'use o cupom BEMVINDA', link:''});

theme.settings.sizesOrder = [`34`,`36`,`38`,`40`,`42`,`44`,`46`,`48`,`50`,`PP`,`P`,`M`,`G`,`GG`,`XG`];

theme.footerContacts = `<p><strong>(99) 98757-6100</strong></p>
                <p>contato@taymah.com.br</p>
                <p>Segunda à Sexta: 10h às 19h<br>Sábado e Feriados: 10h às 15h</p>`;

theme.templates.footer = `
<div class="theme_footer-newsletter">
    <div><img src="${repo_url}/assets/tay_ico_footer.svg"/></div>
    <div id="theme_footer-content4"></div>
    <div id="theme_footer-content-social"></div>
</div>
<div class="theme_footer-main">
    <div class="row-flex justify-content-between">
        <div class="col-auto">
            <h4>CENTRAL DE ATENDIMENTO</h4>
            <div id="theme_footer-content-contact">
            </div>
        </div>
        <div class="col-auto">
            <h4>COMPRE</h4>
            <div id="theme_footer-content2"></div>
        </div>
        <div class="col-auto">
            <h4>SOBRE</h4>
            <div id="theme_footer-content1"></div>
        </div>
        <div class="col-auto">
            <h4>PAGAMENTO E SEGURANÇA</h4>
            <div id="theme_footer-content3"></div>
        </div>
    </div>
</div>
`

theme.settings.footer.social = true
theme.socialIcons = `
    <a href="https://instagram.com/taymah" target="_blank" rel="noopener" aria-label="Instagram">
        <img src="${repo_url}/assets/tay_instagram.svg" alt="Instagram" />
    </a>
    <a href="https://facebook.com/taymah" target="_blank" rel="noopener" aria-label="Facebook">
        <img src="${repo_url}/assets/tay_facebook.svg" alt="Facebook" />
    </a>
    <a href="https://youtube.com/@taymah" target="_blank" rel="noopener" aria-label="YouTube">
        <img src="${repo_url}/assets/tay_youtube.svg" alt="YouTube" />
    </a>
    <a href="https://tiktok.com/@taymah" target="_blank" rel="noopener" aria-label="TikTok">
        <img src="${repo_url}/assets/tay_tiktok.svg" alt="TikTok" />
    </a>
`

$(document).ready(function(){
    $(`.logo img`).attr('src', `${repo_url}/assets/tay_logo.svg`);
});