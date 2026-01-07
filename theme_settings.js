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

theme.icon.filter = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.8125 6.18752H5.13281C5.25673 6.6715 5.53821 7.10048 5.93286 7.40681C6.32752 7.71315 6.8129 7.87943 7.3125 7.87943C7.8121 7.87943 8.29748 7.71315 8.69214 7.40681C9.08679 7.10048 9.36827 6.6715 9.49219 6.18752H15.1875C15.3367 6.18752 15.4798 6.12825 15.5852 6.02276C15.6907 5.91728 15.75 5.7742 15.75 5.62502C15.75 5.47583 15.6907 5.33276 15.5852 5.22727C15.4798 5.12178 15.3367 5.06252 15.1875 5.06252H9.49219C9.36827 4.57853 9.08679 4.14956 8.69214 3.84322C8.29748 3.53688 7.8121 3.37061 7.3125 3.37061C6.8129 3.37061 6.32752 3.53688 5.93286 3.84322C5.53821 4.14956 5.25673 4.57853 5.13281 5.06252H2.8125C2.66332 5.06252 2.52024 5.12178 2.41475 5.22727C2.30926 5.33276 2.25 5.47583 2.25 5.62502C2.25 5.7742 2.30926 5.91728 2.41475 6.02276C2.52024 6.12825 2.66332 6.18752 2.8125 6.18752ZM7.3125 4.50002C7.535 4.50002 7.75251 4.566 7.93752 4.68961C8.12252 4.81323 8.26672 4.98893 8.35186 5.1945C8.43701 5.40007 8.45929 5.62627 8.41588 5.84449C8.37248 6.06272 8.26533 6.26318 8.108 6.42051C7.95066 6.57785 7.75021 6.68499 7.53198 6.7284C7.31375 6.77181 7.08755 6.74953 6.88198 6.66438C6.67641 6.57923 6.50071 6.43504 6.3771 6.25003C6.25348 6.06503 6.1875 5.84752 6.1875 5.62502C6.1875 5.32665 6.30603 5.0405 6.517 4.82952C6.72798 4.61854 7.01413 4.50002 7.3125 4.50002ZM15.1875 11.8125H13.9922C13.8683 11.3285 13.5868 10.8996 13.1921 10.5932C12.7975 10.2869 12.3121 10.1206 11.8125 10.1206C11.3129 10.1206 10.8275 10.2869 10.4329 10.5932C10.0382 10.8996 9.75673 11.3285 9.63281 11.8125H2.8125C2.66332 11.8125 2.52024 11.8718 2.41475 11.9773C2.30926 12.0828 2.25 12.2258 2.25 12.375C2.25 12.5242 2.30926 12.6673 2.41475 12.7728C2.52024 12.8783 2.66332 12.9375 2.8125 12.9375H9.63281C9.75673 13.4215 10.0382 13.8505 10.4329 14.1568C10.8275 14.4632 11.3129 14.6294 11.8125 14.6294C12.3121 14.6294 12.7975 14.4632 13.1921 14.1568C13.5868 13.8505 13.8683 13.4215 13.9922 12.9375H15.1875C15.3367 12.9375 15.4798 12.8783 15.5852 12.7728C15.6907 12.6673 15.75 12.5242 15.75 12.375C15.75 12.2258 15.6907 12.0828 15.5852 11.9773C15.4798 11.8718 15.3367 11.8125 15.1875 11.8125ZM11.8125 13.5C11.59 13.5 11.3725 13.434 11.1875 13.3104C11.0025 13.1868 10.8583 13.0111 10.7731 12.8055C10.688 12.6 10.6657 12.3738 10.7091 12.1555C10.7525 11.9373 10.8597 11.7369 11.017 11.5795C11.1743 11.4222 11.3748 11.315 11.593 11.2716C11.8113 11.2282 12.0375 11.2505 12.243 11.3357C12.4486 11.4208 12.6243 11.565 12.7479 11.75C12.8715 11.935 12.9375 12.1525 12.9375 12.375C12.9375 12.6734 12.819 12.9595 12.608 13.1705C12.397 13.3815 12.1109 13.5 11.8125 13.5Z" fill="black"/>
</svg>
`

theme.templates.header = '<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="col-auto" id="theme_header-logo"><button type="button" id="theme_header-menu-trigger"></button></div><div class="col justify-content-center" id="theme_header-menu"></div><div class="col" id="theme_header-functions-block"><ul id="theme_header-functions"></ul></div></div></div></div>';

theme.worker.topbarSlider.config.backgroundColor = "#3F3C3C";
theme.worker.topbarSlider.config.textColor = "#fff";

theme.benefitsStripe.showOn = ".pagina-inicial, .pagina-categoria, .pagina-produto";
theme.benefitsStripe.active = true;
theme.benefitsStripe.config = {
    textColor: '#000',
    backgroundColor: '#fff',
    borderColor: `#f2f2f2`,
    imageAbove: true
}
theme.worker.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2867/2867811/arquivos/frame-100-.svg', title:'Primeira troca grátis', subtitle:'em até 30 dias', link:''});
theme.worker.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2867/2867811/arquivos/frame-2025-12-26t162050-048.svg', title:'Frete grátis', subtitle:'em pedidos acima de R$ 900', link:''});
theme.worker.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2867/2867811/arquivos/frame-2025-12-26t162053-999.svg', title:'Até 6x sem juros', subtitle:'via cartão de crédito', link:''});
theme.worker.benefitsStripe.list.push({img:'https://cdn.awsli.com.br/2867/2867811/arquivos/frame-2025-12-26t162056-916.svg', title:'Primeira compra', subtitle:'use o cupom BEMVINDA', link:''});

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

     // Inicializa preço externo na página de produto
    theme.functions.externalPrice();

    if($(`.pagina-produto`).length){
        theme.worker.benefitsStripe.match = true;
        theme.worker.benefitsStripe.config.insertAt = "#buy-together-position2";

        theme.functions.getProductData(window.PRODUTO_ID).then(data => {
            if(data?.products?.[0]){
                let category_ids = data.products[0].category_ids;                
                fetch(`/_search?an=${category_ids}&filter=is_active:true;is_searchable:true`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro na resposta da API: ' + response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(`retorno cat`,data)
                    if(data.products.length > 0){
                        $(`.cep`).after(`<div id="tay_levetambem"><strong class="titulo">Leve Também</strong><div class="tay_levetambem-products"></div></div>`)
                        $.each(data.products.slice(0,4), function(index, product){
                            // Pega a imagem principal
                            let mainImage = product.images && product.images.length > 0 
                                ? `https://cdn.awsli.com.br/400x400${product.images[0].path}` 
                                : '';
                            
                            // Calcula preço com desconto
                            let basePrice = product.price.base;
                            let sellingPrice = product.price.selling;
                            let hasPromo = basePrice > sellingPrice;
                            
                            // Calcula parcelamento (12x)
                            let installmentValue = (sellingPrice / 12).toFixed(2);
                            
                            // Extrai tamanhos únicos das variações
                            let sizes = [];
                            if(product.skus && product.skus.length > 0){
                                product.skus.forEach(sku => {
                                    if(sku.variations){
                                        sku.variations.forEach(variation => {
                                            if(variation.option.display_name === 'Tamanho'){
                                                if(!sizes.includes(variation.value.name)){
                                                    sizes.push(variation.value.name);
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                            
                            // Cria os LIs de tamanhos
                            let sizesHtml = sizes.map(size => `<li>${size}</li>`).join('');
                            
                            // Cria o HTML do produto
                            let productHtml = `
                                <div class="tay_levetambem-item">
                                    <div class="row-flex">
                                        <div class="col-auto tay_levetambem-image">
                                            <a href="${product.url}">
                                                <img src="${mainImage}" alt="${product.name}" />
                                            </a>
                                        </div>
                                        <div class="col tay_levetambem-info">
                                            <a href="${product.url}" class="tay_levetambem-title">${product.name}</a>
                                            ${sizes.length > 0 ? `
                                                <div class="tay_levetambem-sizes">
                                                    <span>Tamanhos:</span>
                                                    <ul>${sizesHtml}</ul>
                                                </div>
                                            ` : ''}
                                            <div class="tay_levetambem-price">
                                                ${hasPromo ? `<s>R$ ${basePrice.toFixed(2).replace('.', ',')}</s>` : ''}
                                                <strong>R$ ${sellingPrice.toFixed(2).replace('.', ',')}</strong>
                                            </div>
                                            <div class="tay_levetambem-installment">
                                                até <strong>12x</strong> de <strong>R$ ${installmentValue.replace('.', ',')}</strong> sem juros
                                            </div>
                                            <a href="${product.url}" class="tay_levetambem-button">Ver Produto</a>
                                        </div>
                                    </div>
                                </div>
                            `;
                            
                            $('.tay_levetambem-products').append(productHtml);
                        });

                        $(`.tay_levetambem-products`).slick({
                            infinite: true,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            arrows:true,
                            dots:true,
                            prevArrow: theme.settings.sliders.config.prevArrow,
                            nextArrow: theme.settings.sliders.config.nextArrow
                            
                        })
                    }
                    
                })
                .catch(error => {
                    console.error('Erro ao buscar produtos da categoria:', error);
                });
            }
        });
    }
});


theme.functions.externalPrice = function(){
    if(!$('.pagina-produto .acoes-produto').length) return;
    $(`.botao-comprar.grande`).text(`Adicionar ao Carrinho`);

    $(`.produto .acoes-produto`).each(function(){
        if($(this).find(`.disponibilidade-produto`).text().toLowerCase().trim().includes(`disponível`)){
            $(this).find(`.disponibilidade-produto`).after(`<div class="tay_disponibilidade"><span>
<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.91675 4.9585H11.5723C11.7456 4.9585 11.8322 4.9585 11.9137 4.97807C11.986 4.99542 12.0551 5.02404 12.1184 5.06288C12.1899 5.10668 12.2512 5.16793 12.3737 5.29044L15.2515 8.16822C15.374 8.29073 15.4352 8.35198 15.479 8.42346C15.5179 8.48684 15.5465 8.55593 15.5638 8.62821C15.5834 8.70973 15.5834 8.79635 15.5834 8.96961V10.9793C15.5834 11.3094 15.5834 11.4744 15.5295 11.6046C15.4576 11.7781 15.3197 11.916 15.1461 11.9879C15.016 12.0418 14.851 12.0418 14.5209 12.0418M10.9792 12.0418H9.91675M9.91675 12.0418V5.10016C9.91675 4.30676 9.91675 3.91005 9.76234 3.60701C9.62652 3.34045 9.4098 3.12372 9.14323 2.9879C8.84019 2.8335 8.44349 2.8335 7.65008 2.8335H3.68341C2.89001 2.8335 2.4933 2.8335 2.19026 2.9879C1.9237 3.12372 1.70698 3.34045 1.57116 3.60701C1.41675 3.91005 1.41675 4.30676 1.41675 5.10016V10.6252C1.41675 11.4076 2.05101 12.0418 2.83341 12.0418M9.91675 12.0418H7.08341M7.08341 12.0418C7.08341 13.2154 6.13202 14.1668 4.95841 14.1668C3.78481 14.1668 2.83341 13.2154 2.83341 12.0418M7.08341 12.0418C7.08341 10.8682 6.13202 9.91683 4.95841 9.91683C3.78481 9.91683 2.83341 10.8682 2.83341 12.0418M14.5209 12.396C14.5209 13.374 13.7281 14.1668 12.7501 14.1668C11.7721 14.1668 10.9792 13.374 10.9792 12.396C10.9792 11.418 11.7721 10.6252 12.7501 10.6252C13.7281 10.6252 14.5209 11.418 14.5209 12.396Z" stroke="#FC3D9D" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>Peça em estoque com <strong>envio imediato</strong></div>`)
        }
    });

    $('#formCalcularCep .btn').text('Calcular')
    // Cria container para preço externo se não existir
    if(!$('#theme_external-price').length){
        $('.pagina-produto .info-principal-produto').after('<div id="theme_external-price"></div>');
    }
    
    // Função para atualizar o preço externo
    const updateExternalPrice = function(){
        // Encontra o .acoes-produto visível
        // Prioriza style inline (ex: style="display: flex;" sobrescreve class="hide")
        let visibleAcoes = $('.pagina-produto .acoes-produto').filter(function(){
            let inlineStyle = $(this).attr('style') || '';
            let displayValue = $(this).css('display');
            
            // Se tem display inline e não é none, está visível
            if(inlineStyle.includes('display') && displayValue !== 'none'){
                return true;
            }
            
            // Se não tem display inline, verifica apenas a classe hide
            if(!inlineStyle.includes('display')){
                return !$(this).hasClass('hide');
            }
            
            return false;
        }).first();
        
        if(visibleAcoes.length){
            let precoHtml = visibleAcoes.find('.preco-produto').first().prop('outerHTML');
            $('#theme_external-price').html(precoHtml);
        }
    };
    
    
    updateExternalPrice();
    
    const observer = new MutationObserver(function(mutations){
        updateExternalPrice();
    });
    $('.pagina-produto .acoes-produto').each(function(){
        observer.observe(this, {
            attributes: true,
            attributeFilter: ['class', 'style']
        });
    });
    $('.pagina-produto .atributo-item').on('click', function(){
        setTimeout(updateExternalPrice, 100);
    });
};