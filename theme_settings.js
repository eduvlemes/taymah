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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    </a>
    <a href="https://facebook.com/taymah" target="_blank" rel="noopener" aria-label="Facebook">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
    </a>
    <a href="https://youtube.com/@taymah" target="_blank" rel="noopener" aria-label="YouTube">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
    </a>
    <a href="https://tiktok.com/@taymah" target="_blank" rel="noopener" aria-label="TikTok">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
    </a>

`