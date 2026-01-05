
const theme = [];

theme.info = {};
theme.info.icon = '<svg style="height:22px;width:47px;box-sizing: content-box;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320.23 150.05"><defs><style>.cls-1{fill:#fc5656;}.cls-2{fill:#b32fd3;}.cls-3{fill:url(#Gradiente_sem_nome_49);}</style><linearGradient id="Gradiente_sem_nome_49" x1="-1021.91" y1="912.64" x2="-898.84" y2="912.64" gradientTransform="translate(1114.16 -837.62)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fc5656"/><stop offset="1" stop-color="#b32fd3"/></linearGradient></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><rect x="215.32" y="40.9" width="19.21" height="70.65"/><rect x="92.25" width="19.11" height="111.55"/><path d="M167.15,39.84a36.48,36.48,0,0,0-17.37,4.38V41.07H130.59V150h19.19V108.58a36.56,36.56,0,1,0,17.37-68.74Zm0,53.87A17.32,17.32,0,1,1,184.47,76.4,17.31,17.31,0,0,1,167.15,93.71Z"/><path d="M53.83,111.37H73l0-70.48H53.87v3.3a36.76,36.76,0,0,0-17.31-4.36,36,36,0,0,0-11.7,1.93,36.55,36.55,0,0,0,0,69.26,36.43,36.43,0,0,0,23.4,0,34.82,34.82,0,0,0,5.61-2.43M36.56,94.13A17.32,17.32,0,1,1,53.87,76.81,17.31,17.31,0,0,1,36.56,94.13Z"/><polygon points="318.51 41.07 305.89 58.94 282.36 58.94 294.97 41.07 318.51 41.07"/><polygon points="320.23 111.55 296.55 111.55 282.36 92.17 268.77 111.55 245.22 111.55 270.5 75.69 270.6 75.55 258.79 58.94 246.09 41.07 269.77 41.07 282.36 58.94 282.38 58.94 294.19 75.69 294.24 75.69 320.23 111.55"/><rect class="cls-1" x="92.25" y="130.94" width="19.11" height="19.11"/><rect class="cls-2" x="196.11" width="19.21" height="19.21"/><rect class="cls-3" x="92.25" y="130.94" width="19.11" height="19.11"/><rect class="cls-3" x="196.11" width="19.21" height="19.21"/></g></g></svg>';
theme.info.external = "https://www.alpix.dev?utm_source=" + window.location.host;
theme.info.ref = "https://www.alpix.dev/criar-sua-loja-integrada";
theme.isMobile = window.innerWidth < 990;

theme.lang = {};
theme.lang.productListDetail = "Ver Mais";
theme.lang.productListAdd = "Comprar Agora";
theme.lang.sideCartTitle = "Meu Carrinho";
theme.lang.footerTitle1 = "Institucional";
theme.lang.footerTitle2 = "Categorias";
theme.lang.footerTitle3 = "Pagamento e Segurança";
theme.lang.footerTitle4 = "Newsletter";
theme.lang.searchTitle = "Pesquisar";
theme.lang.searchPlaceholder = "Digite o que procura...";
theme.lang.searchButtonText = "Buscar";
theme.lang.accountTitle = "Minha Conta";
theme.lang.filtersTitle = "Filtrar por";
theme.lang.menuTitle = "Menu";
theme.lang.avisoEstoque = "Aproveite! Apenas [qtde] itens em estoque!";
theme.lang.brandTitle = "Compre por Marca";

theme.settings = {};
theme.settings.sideCheckout = true;
theme.settings.whatsappButton = false;
theme.settings.extraPagination = true;
theme.settings.instagramFeed = false;
theme.settings.productListImageFill = true;
theme.settings.imageSize = 1.4;
theme.settings.productExcerpt = false;
theme.settings.avisoEstoque = 999;
theme.settings.sliders = [];
theme.settings.sliders.config = [];
theme.settings.sliders.config.prevArrow = '<span class="arrow-l"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M0 15c0 0.128 0.049 0.256 0.146 0.354 0.195 0.195 0.512 0.195 0.707 0l8.646-8.646 8.646 8.646c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-9-9c-0.195-0.195-0.512-0.195-0.707 0l-9 9c-0.098 0.098-0.146 0.226-0.146 0.354z"></path></svg></span>';            
theme.settings.sliders.config.nextArrow   = '<span class="arrow-r"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path fill="#000000" d="M0 15c0 0.128 0.049 0.256 0.146 0.354 0.195 0.195 0.512 0.195 0.707 0l8.646-8.646 8.646 8.646c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-9-9c-0.195-0.195-0.512-0.195-0.707 0l-9 9c-0.098 0.098-0.146 0.226-0.146 0.354z"></path></svg></span>';
theme.settings.productGallery = false;
theme.settings.galeriaZoom = false;

theme.settings.invertHeader = false;

theme.settings.sliders.benefitsStripe = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 9999,
        settings: "unslick"
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
}

theme.settings.sliders.brands = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows : false,
                centerMode: true
            }
        }
    ]
}

theme.settings.sliders.categorySlider = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows : false,
                centerMode: true
            }
        }
    ]
}

theme.settings.sliders.testimonials = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,            
            centerMode:true
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true
        }
        }
    ]  
}

theme.settings.sliders.products = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,            
            centerMode:true
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true
        }
        }
    ]  
}

theme.settings.sliders.topbarSlider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow
    
}

theme.settings.sliders.verticalProductGallery = {
    vertical:true,
    infinite: true,
    centerMode:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,    
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            
            centerMode:false
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode:false
        }
        }
    ]    
}
theme.settings.sliders.horizontalProductGallery = {
    infinite: true,
    centerMode:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,    
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            centerMode:false
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode:false
        }
        }
    ]
}
theme.settings.sliders.premiumProductGallery = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
}
theme.settings.sliders.premiumProductGalleryNav = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: theme.settings.sliders.config.prevArrow,
    nextArrow: theme.settings.sliders.config.nextArrow,
}

theme.settings.footer = [];
theme.settings.footer.social = false;
theme.settings.footer.payments = true;
theme.settings.footer.categories = true;
theme.settings.footer.pages = true;
theme.settings.footer.institutional = false;
theme.settings.footer.logo = false;
theme.settings.footer.newsletter = true;

theme.stripe = [];
theme.stripe.color = '#fff';
theme.stripe.background = '#000';
theme.stripe.content = "";
theme.stripe.position = 2;
theme.stripe.fixed = false;

theme.benefitsStripe = [];
theme.benefitsStripe.active = false;
theme.benefitsStripe.list = [];
theme.benefitsStripe.config = {
    textColor: '#000',
    backgroundColor: '#fff',
    borderColor: `#f2f2f2`,
    imageAbove: false
}
//theme.benefitsStripe.list.push({img:'',title:'',subtitle:'',link:''})




theme.build = [];
theme.build.header = function(template){
    $('#cabecalho').html(theme.templates.header);
    $('#theme_header-logo').append(theme.logo);
    $('#theme_header-menu').html(theme.headerMenu);
    $('#theme_header-functions').append('<li>' + theme.headerCart + '</li>');

    $('#theme_header-functions').prepend('<li><button type="button" class="account-trigger">'+ theme.icon.account +'</button></li>');
    //$('#theme_header-functions').prepend('<li><a href="/conta/favorito/listar">'+ theme.icon.wishlist +'</a></li>');
    $('#theme_header-functions').prepend('<li><button type="button" class="search-trigger">'+ theme.icon.search +'</button></li>');
    
    $('.carrinho .icon-shopping-cart').before(theme.icon.cart);
    $('.carrinho .icon-shopping-cart').remove();
    $('.barra-inicial').remove();

    if(theme.stripe.content){
        let stripe = $('<div id="theme_header-stripe" style="background:'+ theme.stripe.background +'; color:'+ theme.stripe.color +'">'+ theme.stripe.content+'</div>');
        if(theme.stripe.fixed){
            theme.stripe.position == 1 ? stripe.prependTo('#cabecalho') : stripe.appendTo('#cabecalho');
        }else{
            theme.stripe.position == 1 ? stripe.insertBefore('#cabecalho') : stripe.insertAfter('#cabecalho');
        }
        
    } 

    //theme.settings.invertHeader
    if(theme.settings.invertHeader == true){
        $('#cabecalho').addClass('theme_invert');
    }

    
};
theme.build.footer = function(template){
    $('#barraNewsletter, .pagamento-selos').remove();
    $('#rodape .institucional').html(theme.templates.footer);
    $('#theme_footer-content1').append(theme.footerPages);
    $('#theme_footer-content2').append(theme.footerCategories);
    $('#theme_footer-content3').append(theme.footerPayments);
    $('#theme_footer-content3').append(theme.footerGateways);
    $('#theme_footer-content3').append(theme.footerSeals);

    if(theme.settings.footer.logo) $('#theme_footer-content-institutional').append($(theme.logo).find('a').html());
    if(theme.settings.footer.institutional) $('#theme_footer-content-institutional').append('<p>' + theme.storeDescription + '</p>');
    if(theme.settings.footer.institutional && theme.settings.footer.social) $('#theme_footer-content-institutional').append('<div id="theme_footer-content-institutional-social">' + theme.socialIcons + '</div>');
    
    theme.newsletter == "" ? $('#theme_footer-content4').parent('.col-auto').remove() : $('#theme_footer-content4').append(theme.newsletter);
    
    $('#rodape .selos').find('.titulo').remove();
    $('#rodape .selos').attr('class','selos');
};
theme.build.asideMenu = function(template){
    $('body').append(theme.templates.asideMenu);
    $('#theme_menu-aside').append(theme.headerMenu);
    $('#theme_menu-aside .com-filho > a').each(function(){
        let url = $(this).attr('href');
        let submenu = $(this).closest('.com-filho').find('.nivel-dois');
        $('<li><a href="'+ url +'">Ver Todos</a></li>').appendTo(submenu);
        $('<li class="theme_menu-closeSub"><button type="button">Voltar</button></li>').prependTo(submenu);
    });
    $('#theme_menu-aside .com-filho > a').click(function(e){
        e.preventDefault();
        $(this).closest('.com-filho').addClass('open');
    });
    $('.theme_menu-closeSub').click(function(){
        $(this).closest('.com-filho').removeClass('open');
    });
    $('#theme_header-menu-trigger, .theme_menu-trigger').click(function(){   
        $('body').toggleClass('asideMenu-visible');         
    });
};

theme.build.productFilter = function(template){
    if($('.coluna .filtro-coluna').length > 0){
        $('body').append(theme.templates.filters);
        $('body').on('click','.filter-trigger', function(){   
            $('body').toggleClass('asideFilter-visible');         
        });
        if($('.coluna .atributo-cor').length > 0 ){
            $('.coluna .atributo-cor a > span').wrap("<i class='color-bg'></i>")
            // $('.filtro-coluna .atributo-cor span').each(function(){
            //     let css = $(this).attr('style').replace('border-color','background-color');
            //     $(this).attr('style', css);
            // })
        }
        $('.coluna .filtro-coluna').each(function(){
            let filterName = $(this).find('h4.titulo').text().replace('Filtrar por','').replace('Limpar','').trim();
            $('#theme_filter').append('<h4>' + filterName + '</h4>');
            $('#theme_filter').append($(this).find('h4.titulo').next());
        });        
    }
};

theme.build.search = function(template){
    $('body').append(theme.templates.search);
    $('#theme_search').append(theme.searchForm);

    $('#theme_search #auto-complete').attr('placeholder',theme.lang.searchPlaceholder);
    $('#theme_search .botao.icon-search').text(theme.lang.searchButtonText);
    $('#theme_search .botao.icon-search').removeClass('icon-search');

    $('.search-trigger').click(function(){   
        $('body').toggleClass('asideSearch-visible');         
        $('#theme_search input').val('');
        //$('#theme_search input').autocomplete('destroy');
    });

    $("#theme_search input").autocomplete({
        delay: 300,
        minLength: 5,
        source: function(o, n) {
            $.ajax({
                url: "/autocomplete",
                dataType: "json",
                data: {
                    q: o.term,
                    size: 3,
                    ttl: 300
                },
                success: function(p) {
                    n($.map(p.hits, function(q) {
                        console.log(q);
                        if (q.imagens) {
                            return {
                                label: '<span class="img"><img src="' + MEDIA_URL + "80x80/" + q.imagens[0].caminho + '?type=trim" /></span><span>' + q.nome + '</span>',
                                value: q.nome,
                                url: q.canonical_path
                            }
                        } else {
                            return {
                                label: '<span class="img"></span><span>' + q.nome + '</span>',
                                value: q.nome,
                                url: q.canonical_path
                            }
                        }
                    }))
                }
            })
        },
        open: function(n, o) {
            $(this).autocomplete("widget").css("z-index", 100000);
            $(this).autocomplete("widget").width($(this).parent().width())
        },
        select: function(n, o) {
            console.log(o);
            window.location = o.item.url
        }
    });
    $("#theme_search input").each(function() {
        $(this).data("ui-autocomplete")._renderItem = function(n, o) {
            return $("<li></li>").data("item.autocomplete", o).append("<a>" + o.label + "</a>").appendTo(n)
        }
    });
};

theme.build.account = function(template){
    $('body').append(theme.templates.account);
    let menu = $('<ul></ul>');
    if(theme.isLogged){
        menu.append('<li><a href="/conta/index">Meus dados</a></li>');
        menu.append('<li><a href="/conta/pedido/listar">Meus pedidos</a></li>');
        menu.append('<li><a href="/conta/logout">Sair</a></li>');
    }else{
        //menu.append('<li><a href="">Login</a></li>');
        menu.append('<li><form id="apx_sideLogin" action="/conta/login" method="post"><label>E-mail<input id="id_email" maxlength="128" name="email" type="text"></label><label>Senha<input id="id_senha" maxlength="32" name="senha" type="password"></label><div><button type="submit" class="botao principal">Entrar</button><button id="recoverPassword" data-toggle="modal"> <i class="icon-lock cor-secundaria"></i> Esqueceu a senha? </button></div></form></li>');
        menu.append('<li><a href="/conta/criar?next=conta_index&email=_">Cliente novo? Cadastre-se</a></li>');
    }
    menu.append('<li class="divider"></li>');
    //menu.append('<li><a href="">Preciso de ajuda</a></li>');
    //menu.append('<li><a href="">Fale com a gente</a></li>');
    $('#theme_account').append(menu);
    $('.account-trigger').click(function(){   
        $('body').toggleClass('asideAccount-visible');         
    });

    $('#recoverPassword').click(function(){
        let mail = $('#apx_sideLogin #id_email');
        $.get('/conta/recuperar_senha?email=' + mail.val(), function(data){
            let res = JSON.parse(data);
            console.log(res.mensagem);
            if(res.status == "erro"){
                mail.focus()
            }
            alert(res.mensagem);
        })
    });



}


theme.functions = [];
theme.functions.triggerCDN = function(){
    theme.isLogged = $.cookie('LI-UserData') && !JSON.parse($.cookie('LI-UserData')).logged ? false : true;
    sessionStorage.setItem('cdnTriggered',true)
};
theme.functions.galeriaZoom = function(){
    $(window).load(function(){
        $.getScript( "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js", function( data, textStatus, jqxhr ) {
            if(jqxhr.status == 200){
                $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css') );
                $("#abreZoom").unbind();        
                $("#abreZoom, .conteiner-imagem").click(function() {
                    var g, c, f = [];
                    g = $("#abreZoom").attr("href");
                    imagens_li = $(".produto .miniaturas li");
                    for (i = 0; i < imagens_li.length; i++) {
                        if ($(imagens_li[i]).is(":visible")) {
                            var d = $("a", imagens_li[i]).attr("data-imagem-grande");
                            f.push(d)
                        }
                    }
                    c = [];
                    for (i = 0; i < f.length; i++) {
                        var e = f[i];
                        if (e != g) {
                            c.push({
                                src: e,
                                type:'image'
                            })
                        }
                    }
                    Fancybox.show(c,{startIndex : $("#imagemProduto").attr('data-index') });
                    return false
                });
                $(".produto-thumbs .miniaturas li a").unbind();
                $(".produto-thumbs").on("click", ".miniaturas li a", function(d) {
                    let index = $(this).closest('li').index();
                    d.preventDefault();
                    $(this).parent().siblings().removeClass("active");
                    $(this).parent().addClass("active");
                    var c = $("#imagemProduto").data("imagezoom");
                    if (c) {
                        c.changeImage($(this).find("img").attr("data-mediumimg"), $(this).find("img").attr("data-largeimg"))
                        $("#imagemProduto").attr('data-index',index);
                    }
                })
            }        
        });        
    });
};
theme.functions.customBanners = function(ref){
    let movie = false;
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');        
        if(alt.includes('[movie]')){
            movie = true;
            let iframeLink = $(this).closest('a').attr('href');
            let iframe = $('<iframe id="theme_fullMovie"  src="https://www.youtube-nocookie.com/embed/'+ iframeLink +'?'+ (alt.includes('[autoplay]') ? 'autoplay=1&mute=1&' : '') +'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>');
            let li = $(this).closest('li');
            li.find('img').remove();
            li.find('a').remove();
            li.append(iframe);     
            
            let regExp = /\[proporcao:(.*?)\]/;
            let match = regExp.exec(alt);
            console.log(match);
            if(match[1]){
                $('#theme_fullMovie').css('height',(window.innerWidth * parseFloat(match[1])) + 'px');
            }
            
            
        }        
    });

    //slider categorias    
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');                
        if(alt.includes('[slider-categorias]')){
            if($('#theme_categorySlider').length == 0){
                $('<div id="theme_categorySlider"><div class="slides"></div></div>').prependTo('#corpo > .conteiner');
            }
            $(this).closest('li').appendTo('#theme_categorySlider > .slides');               
        }
    });
    $('#theme_categorySlider li').wrap('<div class="item"/>').contents().unwrap();
    $('#theme_categorySlider > .slides').slick(theme.settings.sliders.categorySlider);

     //ícones do menu
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');
        if(alt.includes('[icone-')){
            let regExp = /\[icone-(.*?)\]/;
            let target = regExp.exec(alt);
            let regExp2 = /\[posicao-(.*?)\]/;
            let position = regExp2.exec(alt);
            if($('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').length == 1){
                let removeAfter = $(this).closest('li');
                $('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').closest('li').addClass('theme_icon theme_icon-' + (theme.isMobile ? 'Esquerda' : position[1]));
                $('.menu.superior .nivel-um > li > a[title="' + target[1] +'"]').prepend('<div class="theme_icon-item"></div>');
                $(this).appendTo('.menu.superior .nivel-um > li > a[title="' + target[1] +'"] .theme_icon-item');
                removeAfter.remove();    
            }
        }
    });

    //daqui para baixo somente os que tem mobile
    
    //banners mobile
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');        
        if(!alt.includes('[mobile]') && theme.isMobile){
            $(this).closest('li').remove();                        
        }
        if(alt.includes('[mobile]') && !theme.isMobile){
            $(this).closest('li').remove();                        
        }
    });

    //banners vitrine
    $('.secao-banners .banner.cheio img').each(function(){
        let alt = $(this).attr('alt');
        if(alt.includes('[vitrine-')){
            let regExp = /\[vitrine-(.*?)\]/;
            let match = regExp.exec(alt);
            if($('.vitrine-' + match[1]).length == 1){
                if($('#theme_customBanners-' + match[1]).length == 0){
                    $('.vitrine-' + match[1] + ' + ul').after('<div class="theme_customBanners" id="theme_customBanners-' + match[1] + '"></div>');
                }
                $(this).closest('li').appendTo('#theme_customBanners-' + match[1]);               
            }
        }else{
            if(movie && !alt.includes('[movie]')){
                $(this).closest('li').remove();
            }
        }
    });    
    $('.theme_customBanners li').wrap('<div class="item"/>').contents().unwrap();
};

theme.functions.createField = function (oObj){
    let field = $('<div class="theme-customInputElement"></div>');    
    field.append('<label>'+oObj.label+'</label>');
    
    if("text,number,password,tel,email,date,color".split(',').includes(oObj.type)){
        field.append('<input type="'+ oObj.type +'" name="theme_field-'+ oObj.id +'"/>');
    }
    if(oObj.type == "textarea"){
        field.append('<textarea rows="4" name="theme_field-'+ oObj.id +'"></textarea>');
    }
    if(oObj.type == "select"){
        let select = $('<select name="theme_field-'+ oObj.id +'"></select>');
        $.each(oObj.list, function(list_, list_value){
            select.append('<option value="'+list_value+'">'+list_value+'</option>');
        });
        field.append(select);
    }
    if(oObj.type == "boolean"){
        let select = $('<select name="theme_field-'+ oObj.id +'"></select>');
        select.append('<option value="true">Sim</option>');
        select.append('<option value="false">Não</option>');
        field.append(select);
    }
    return field;

};

theme.functions.beforeInit = function(){
//custom content
};

theme.templates = [];

theme.icon = {};
    theme.icon.sideCartClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-back"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/></g></g></svg>';
    theme.icon.cart = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10H21M3 10L5 20H19L21 10M3 10L9 4M21 10L15 4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    theme.icon.wishlist = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    theme.icon.search = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z" fill="black"/></svg>';
    theme.icon.account = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    theme.icon.newsletter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="email"><rect width="24" height="24" opacity="0"/><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"/></g></g></svg>';
    theme.icon.filter = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="funnel"><rect width="24" height="24" opacity="0"/><path d="M13.9 22a1 1 0 0 1-.6-.2l-4-3.05a1 1 0 0 1-.39-.8v-3.27l-4.8-9.22A1 1 0 0 1 5 4h14a1 1 0 0 1 .86.49 1 1 0 0 1 0 1l-5 9.21V21a1 1 0 0 1-.55.9 1 1 0 0 1-.41.1zm-3-4.54l2 1.53v-4.55A1 1 0 0 1 13 14l4.3-8H6.64l4.13 8a1 1 0 0 1 .11.46z"/></g></g></svg>';
    theme.icon.seeMore = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g></svg>';
    theme.icon.close = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>';

    
    
    if (!theme.templates.header) theme.templates.header = '<div id="theme_header_1"><div class="conteiner-fluid"><div class="row-flex align-items-center"><div class="col" id="theme_header-logo"><button type="button" id="theme_header-menu-trigger"></button></div><div class="col-auto justify-content-center" id="theme_header-menu"></div><div class="col" id="theme_header-functions"><ul id="theme_header-functions"></ul></div></div></div></div>';
    if (!theme.templates.search) theme.templates.search = '<div class="theme_aside theme_search right"><div class="theme_aside-header"><button type="button" class="search-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.searchTitle +'</span></div><div class="theme_aside-content" id="theme_search"></div></div>';
    if (!theme.templates.account) theme.templates.account = '<div class="theme_aside theme_account right"><div class="theme_aside-header"><button type="button" class="account-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.accountTitle +'</span></div><div class="theme_aside-content" id="theme_account"></div></div>';
    if (!theme.templates.filters) theme.templates.filters = '<div class="theme_aside theme_filter right"><div class="theme_aside-header"><button type="button" class="filter-trigger" >'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.filtersTitle +'</span></div><div class="theme_aside-content" id="theme_filter"></div></div>';
    if (!theme.templates.footer){
        theme.templates.footer = '<div class="row-flex justify-content-between">' + 
        (theme.settings.footer.institutional == true ? '<div class="col-auto"><div id="theme_footer-content-institutional"></div></div>' : '') +
        (theme.settings.footer.pages == true ? '<div class="col-auto"><h4>'+ theme.lang.footerTitle1 +'</h4><div id="theme_footer-content1"></div></div>' : '') +
        (theme.settings.footer.categories == true ?  '<div class="col-auto"><h4>'+ theme.lang.footerTitle2 +'</h4><div id="theme_footer-content2"></div></div>' : '') +
        (theme.settings.footer.payments == true ? '<div class="col-auto"><h4>'+ theme.lang.footerTitle3 +'</h4><div id="theme_footer-content3"></div></div>' : '' ) +
        (theme.settings.footer.newsletter == true ? '<div class="col-auto"><h4>'+ theme.lang.footerTitle4 +'</h4><div id="theme_footer-content4"></div></div>' : '') +
        '</div>';  
    } 
    if (!theme.templates.asideMenu) theme.templates.asideMenu = '<div class="theme_aside theme_menu left"><div class="theme_aside-header"><span>'+ theme.lang.menuTitle +'</span><button type="button" class="theme_menu-trigger" >'+ theme.icon.sideCartClose +'</button></div><div class="theme_aside-content" id="theme_menu-aside"></div></div>';

theme.functions.init = function(){
    theme.isLogged = $('.bem-vindo > span').text() != "identifique-se" ? true : false;
    theme.logo = $('<div></div>').append($('#cabecalho .logo').clone()).html();
    theme.storePhone = $('.barra-inicial .canais-contato .icon-phone').parent().text().replace('Telefone: ','').trim();
    theme.storeSkype = $('.barra-inicial .canais-contato .fa-skype').parent().text().replace('Skype: ','').trim();
    theme.storeWhatsapp = $('.barra-inicial .canais-contato .fa-whatsapp').parent().text().replace('Whatsapp: ','').trim();
    theme.storeMail = "";
    theme.storeSkype = $('.barra-inicial .canais-contato .fa-skype').parent().text().replace('Skype: ','').trim();
    theme.storeDescription = $('.sobre-loja-rodape > p').text();

    theme.primaryColor = $('[name="theme-color"]').attr('content');
    if(theme.primaryColor){document.documentElement.style.setProperty('--primaryColor', theme.primaryColor);}
    try{theme.buttonColor = getComputedStyle(document.querySelector('.botao.principal.botao-comprar')).backgroundColor;}catch(e){console.log(e)}

    theme.currentPage = $('body').attr('class').split(' ')[0].trim();
    theme.searchForm = $('<div></div>').append($('#cabecalho .busca #form-buscar').first().clone()).html();
    theme.socialIcons = $('<div></div>').append($('.barra-inicial .lista-redes a').clone()).html();

    theme.headerMenu = $('<div></div>').append($('.menu.superior').clone()).html();
    theme.footerCategories = $('<div></div>').append($('.links-rodape-categorias > ul').clone()).html();
    theme.footerPages = $('<div></div>').append($('.links-rodape-paginas > ul').clone()).html();

    theme.footerSeals = $('<div></div>').append($('#rodape .selos').clone()).html();
    theme.footerPayments = $('<div></div>').append($('#rodape .bandeiras-pagamento').clone()).html();
    theme.footerGateways = $('<div></div>').append($('#rodape .gateways-rodape').clone()).html();
    theme.headerCart = $('<div></div>').append($('#cabecalho .carrinho').clone()).html();
    theme.newsletter = $('<div></div>').append($('#barraNewsletter').clone()).html();

    
    // console.log(theme.templates.header);
    // console.log(theme.templates.search);
    // console.log(theme.templates.account);
    // console.log(theme.templates.filters);
    try{
        $('html').attr('alpix-theme',window.LOJA_ID);
        try{
            $(document).ready(function(){
                theme.functions[theme.currentPage]();
            });
        }catch(e){}

        $('body').append('<div class="theme_aside-shadow"></div>');
        
        if($('.carrinho-checkout').length == 0){theme.build.header(2);theme.build.asideMenu();}
        theme.build.footer(1);
        theme.build.search(1);    
        theme.build.account(1);    
        theme.functions.sideCartSet();
        theme.functions.sideCartActions();
        theme.functions.resizeBanners();
        theme.functions.unwrapProductList();
        theme.functions.flags();    
        theme.functions.productListActions();    
        theme.functions.productListImageSize(theme.settings.imageSize);
        theme.watch();
        
        const el = document.querySelector("#cabecalho")
        const observerMenu = new IntersectionObserver( 
        ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
        { threshold: [1] }
        );    
        observerMenu.observe(el);    
        $('body').css('opacity','1');
        $('.theme_aside-shadow').click(function(){
            $('body').removeClass('sideCart-visible').removeClass('asideSearch-visible').removeClass('asideMenu-visible').removeClass('asideAccount-visible');
        })
    }catch(e){
        $('body').css('opacity','1')
    }
};
theme.functions.unwrapProductList = function(){
    $('.listagem > ul > li > ul > li').attr('class','');
    $('.listagem-item').unwrap().unwrap().unwrap().wrap('<li/>');
    if($('.listagem-linha.flexslider').length){
        $('.listagem-linha.flexslider').each(function(){
            let listagemUL = $(this).parent('ul');
            let listagemQtdLinhas = $(this).parent('ul').attr('data-produtos-linha');
            theme.settings.sliders.products.slidesToShow = parseInt(listagemQtdLinhas);
            theme.functions.flexDestroy($(this));
            listagemUL.find('.listagem-linha').slick(theme.settings.sliders.products);
            $(this).removeClass('flexslider');

            listagemUL.find('[data-imagem-caminho]').each(function(){
                $(this).after('<img src="'+ $(this).attr('data-imagem-caminho')+'" class="imagem-zoom"/>');
            })
        })   
    }
};
theme.functions.resizeBanners = function(){
    $('.secao-banners img').each(function(){
        let url = $(this).attr('src').replace('400x400/','700x700/').replace('1140x1140/','1920x1920/');
        $(this).attr('src',url);

    })
};

theme.functions.blockPage = function (status){
    if(status){
        $('body').append('<div id="apx_loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
    }else{
        $('#apx_loader').remove();
    }   
};

theme.watch = function(){
    $(window).resize(function(){
        theme.functions.sideCartScroll();
        theme.functions.productListImageSize(theme.settings.imageSize);
    });
    $(window).scroll(function(){
        theme.functions.sideCartScroll();
    })
    $('#rodape > div:last-child a').attr('href',theme.info.ref);
    $('#rodape > div:last-child a').before('<a href="'+ theme.info.external +'" target="_blank">'+ theme.info.icon +'</a>');        
}

theme.functions.productListImageSize = function(param){
    if(theme.settings.productListImageFill){
        $('.listagem-item').addClass('theme-imageFill');
    }
    
    let h = $('.listagem-item').first().find('.imagem-produto').innerWidth() * param;
    $('.listagem-item .imagem-produto').css('height',h + 'px');
    


    $('.listagem-item .imagem-produto').each(function(){
        $(this).find('img').each(function(){
            let url = $(this).attr('src').replace('300x300/','500x500/').replace('400x400/','600x600/');
            $(this).attr('src',url);
        })
    })

    //$('.listagem-item .imagem-produto').css('max-height','unset');
}

theme.functions.flags = function(){
    $('.bandeira-promocao').each(function(){
        let i = $(this).text().replace('Desconto','').trim();
        $(this).text(i);
    });
}
theme.settings.sizesOrder = ['PP', 'P', 'M', 'G', 'GG', 'XG'];
theme.settings.sizesDisplayName = "Tamanho",
theme.settings.showSizesAtList = true;

theme.functions.placeSizeAtList = function(oObj, info){        
        let url = oObj.find(`.nome-produto`).attr(`href`);
        oObj.find('.info-produto > div:last-child').before('<div class="theme-productSizesAtList"></div>');
        const order = theme.settings.sizesOrder;
        let sizes = []; 
        if(info && info.length > 0){
            info.forEach(variation => {
                console.log('variation',variation)
                if(variation.variations && variation.variations[0].option.display_name.toLowerCase().trim() == theme.settings.sizesDisplayName.toLowerCase().trim() && !sizes.find(el => el == variation.variations[0].option.name)){
                    sizes.push({option:variation.variations[0].value.name, id:variation.variations[0].value.id, available:variation.available})
                }
            });
        }
        
        sizes.sort();
        sizes.sort((a, b) => order.indexOf(a.option) - order.indexOf(b.option));
        $.each(sizes, function(k,item){
            oObj.find('.theme-productSizesAtList').append(`<a href="${url}?attribute=${item.id}" class="available_${item.available}">${item.option}</a>`);
        })

    }

theme.functions.createProductShelf = function(categoria, elementosPais) {    
    fetch(`/_search?an=${categoria}&filter=is_active:true;is_searchable:true`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da API: ' + response.status);
        }
        return response.json();
    })
    .then(data => {

        if (!data.products || !Array.isArray(data.products)) {
            throw new Error('Produtos não encontrados ou formato inválido na resposta da API');
        }
        
        const dataResponse = data.products;

        dataResponse.forEach(produto => {
            const productList = document.createElement('li');
            const imagePath = produto.preview_images[0];
            productList.classList.add('swiper-slide');

        
            productList.innerHTML = `
            <div class="listagem-item prod-id-${produto.id}" data-id="${produto.id}">
                
                <div class="imagem-produto">
                    <a href="${produto.url}">
                        <img loading="lazy" src="https://cdn.awsli.com.br/600x600${imagePath}" alt="${produto.name}" class="imagem-principal" draggable="false">
                    </a>
                </div>

                <div class="info-produto">
                    <a href="${produto.url}" class="nome-produto cor-secundaria">${produto.name}</a>
                    <div class="produto-sku hide">${produto.sku}</div>
                    <div data-trustvox-product-code="${produto.id}" class="hide trustvox-stars"></div>
                    <div>
                        <div class="preco-produto destaque-preco">
                            <div>
                                <s class="preco-venda titulo">R$ ${produto.price}</s>
                                <strong class="preco-promocional cor-principal titulo" data-sell-price="${produto.promotional_price}">R$ ${produto.promotional_price}</strong>
                            </div>
                            <div>
                                <span class="preco-parcela">
                                    até <strong class="cor-secundaria">${produto.installments}x</strong> de <strong class="cor-secundaria">R$ ${produto.installment_value}</strong> sem juros
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="acoes-produto hidden-phone">
                    <a href="${produto.url}" title="Ver detalhes do produto" class="botao botao-comprar principal">
                        Comprar
                    </a>
                </div>
                <div class="acoes-produto-responsiva visible-phone">
                    <a href="${produto.url}" title="Ver detalhes do produto" class="tag-comprar fundo-principal">
                        <span class="titulo">Comprar</span>
                    </a>
                </div>
                <div class="bandeiras-produto">
                    <span class="fundo-principal bandeira-promocao">${ (((produto.price.base - produto.price.selling) / produto.price.base) * 100 > 1 ) ? Math.floor(((produto.price.base - produto.price.selling) / produto.price.base) * 100 ) + '%' : '' }</span>
                </div>
            </div>`;

            elementosPais.forEach(function(elementoPai){
                elementoPai.appendChild(productList.cloneNode(true));
            });

            if (produto.skus && produto.skus.length > 1) {
                const variaçõesDiv = document.createElement('div');
                variaçõesDiv.classList.add('variacoes');
               
                variaçõesDiv.innerHTML = `
                    <strong>Opções disponíveis:</strong> 
                    <div class="variacoesContent">
                        ${produto.skus.map(variacao => `
                            <span class="${variacao.variations[0].value.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ /g,"_")}-variation-option">
                                ${variacao.variations[0].value.name}
                            </span>`).join('')}
                    </div>
                    <div class="variacoesImages">
                        ${produto.skus.map(variacao => {
                            const relatedImageId = 
                                variacao.variations[0]?.value?.related_images?.length > 0 
                                    ? variacao.variations[0].value.related_images[0] 
                                    : null;
                            const imagePath = 
                                produto.images?.find(img => img.id === relatedImageId)?.path || '';
                            return `<img src="https://cdn.awsli.com.br/400x400${imagePath}" class="${variacao.variations[0].value.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/ /g,"_")}-variation" />`;
                        }).join('')}
                    </div>
                `;

                document.querySelectorAll(`body .listagem-item[data-id="${produto.id}"]`).forEach(function(prod){
                    if (!prod.querySelector('.acoes-produto').querySelector('.variacoes')){
                        prod.querySelector('.acoes-produto').insertAdjacentElement('afterbegin', variaçõesDiv.cloneNode(true));
                        associarEventosVariacoes(prod);
                    }
                })
            }
        });
    })
    .catch(error => {
        console.error('Erro ao consultar a API:', error);
    });
}
theme.functions.productListActions = function(){
    if(theme.settings.showSizesAtList == true){
        const observerListItem = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let $item = $(entry.target);
                    let id_ = $item.attr('data-id');
                    
                    let info = sessionStorage.getItem('dt_'+id_);
                    let me = $item;
                    let me_too = entry.target;
                    
                    if(!info){
                        $.ajax({
                            url: "/_search?filters=product_ids:" + id_
                        }).always(function(response){
                            let product = response.products[0];
                            if(product){
                                sessionStorage.setItem('dt_' + id_, JSON.stringify(product))
                                theme.functions.placeSizeAtList(me, product.skus)
                            }
                        });
                    }else{
                        theme.functions.placeSizeAtList(me, JSON.parse(info).skus)
                    }
                    
                    observerListItem.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });   

        $('.listagem-item').each(function() {
            observerListItem.observe(this);
        });
    }
    $('.listagem-item').each(function(){

        let hasVariants = $(this).find('.botao-comprar-ajax').length > 0 ? true : false;
        let id = $(this).attr('class').split(' ')[1].replace('prod-id-','').trim();
        let url = $(this).find('.info-produto > a:first-child').attr('href');        
        let block = $('<div id="theme_list-functions"></div>');
        if(hasVariants){
            block.append($('<a href="/carrinho/produto/'+ id +'/adicionar" class="theme_buttonBuy-ajax">'+ theme.icon.cart +'<span>'+ theme.lang.productListAdd +'</span></a>'));
        }        
        block.append($('<a href="'+ url +'">'+ theme.icon.seeMore +'<span>'+ theme.lang.productListDetail +'</span></a>'));
        $(this).find('.imagem-produto').prepend(block);        
    });
    $('.listagem-item .acoes-produto, .listagem-item .acoes-produto-responsiva').remove();    
}
theme.functions.sideCartScroll = function(){
    if($("#theme_sideCart-content .scroll").length){
        let h = $('#theme_sideCart-header').innerHeight() + $('#theme_sideCart-content .table-footer').innerHeight() + $('#theme_sideCart-footer').innerHeight();
        let maxheight = $('#theme_sideCart').innerHeight();
        $('#theme_sideCart-content .scroll').css('height','calc('+ maxheight +'px - ' + h + 'px');
    }
}
theme.functions.sideCartActions = function(html){
    $(document).on("click", "#theme_sideCart .table-body .excluir a, #theme_sideCart .table-body .quantidade a:not(.atualizar-quantidade), #theme_sideCart .cupom-sucesso a", function(p) {
        p.preventDefault();
        theme.functions.blockPage(true);
        var n = $(this);
        var o = $(this).attr("href");
        let hasZero = false;
        if(o.includes('atualizar')){
            hasZero = parseInt(o.split('atualizar/')[1]) == 0 ? true : false;
        }
        if(hasZero == true){
            theme.functions.blockPage(false);
            return false;
        }else{
            $.ajax({
                url: $(this).attr("href").replace("https:", ""),
                dataType: "json"
            }).done(function(q) {
                if (q.status !== "sucesso") {
                    alert(q.mensagem);
                } else {
                    if ("quantidade" === q.tipo) {
                        D = {
                            cart_id: q.carrinho_id,
                            item_id: q.produto_id,
                            quantity: q.quantidade
                        };
                        var x = sendMetrics({
                            type: "event",
                            name: "change_quantity",
                            data: D
                        });
                        $(document).trigger("li_change_quantity", [x, D])
                    } else "remover" === q.tipo && (D = {
                        cart_id: q.carrinho_id,
                        item_id: q.produto_id
                    }, x = sendMetrics({
                        type: "event",
                        name: "remove_from_cart",
                        data: D
                    }), $(document).trigger("li_remove_from_cart", [x, D]));
                    $("#theme_sideCart-content").load("/carrinho/mini", function() {
                        theme.functions.sideCart()
                    })
                }
            }).fail(function(q) {
                window.location = o
            }).always(function() { theme.functions.blockPage(false); })
        }
        
    });

    $('#theme_header-functions > li > .carrinho > a').click(function(e){
        e.preventDefault();
        if($('#theme_sideCart #theme_sideCart-content').is(':empty')){
            $("#theme_sideCart-content").load("/carrinho/mini", function() {
                theme.functions.sideCart()
            })
        }else{
            theme.functions.sideCartToggle();
        }

        let carrinho_id = sessionStorage.getItem('carrinho_id');
        let carrinho_minicart = sessionStorage.getItem(`carrinho_minicart`);
        
        if(carrinho_id && carrinho_minicart){
            let cart = {
                currency: 'BRL',
                id: carrinho_id,
                value: JSON.parse(carrinho_minicart).totals.items,
                coupon: '',
                items: JSON.parse(carrinho_minicart).items.map(function(item) {
                    return {
                      item_id: item.id.toString(),
                      item_sku: item.sku,
                      item_name: item.name,
                      price: item.price.sellingPrice,
                      quantity: item.quantity
                    }
                  })
            };
            var eventID = sendMetrics({
                type: 'pageview',
                name: 'view_cart',
                data: cart
            });
            $(document).trigger('li_view_cart', [eventID, cart]);            
        } 
    })

    $('body').on('click','#theme_sideCart [for="usarCupom"]',function(){
        $(this).next('.controls').toggle();
        theme.functions.sideCartScroll();
    });
}
theme.functions.sideCartSet = function(){
    $(document).on("click", ".theme_buttonBuy-ajax", function(o) {
        o.preventDefault();
        var n = $(this);
        let previousText = n.attr('text');
        n.addClass("loading");
        $.ajax({
            url: $(this).attr("href").replace("https:", ""),
            dataType: "json"
        }).done(function(p) {
            if (p.status !== "sucesso") {
                alert(p.mensagem);
            } else {
                let D = { 
                    id: p.carrinho_id ,
                    items: [{
                        item_id : p.produto.id,
                        item_sku: p.produto.sku,
                        item_name: p.produto.nome,
                        price: p.produto.preco,
                        quantity: p.produto.quantidade
                    }]
                };
                var x = sendMetrics({
                    type: "event",
                    name: "add_to_cart",
                    data: D
                });
                sessionStorage.setItem('carrinho_id',p.carrinho_id);
                $(document).trigger("li_add_to_cart", [x, D]);
                $("#theme_sideCart-content").load("/carrinho/mini", function() {
                    theme.functions.sideCart()
                })
            }
        }).fail(function(p) {
            window.location = n.attr("href")
        }).always(function() {            
            n.text(previousText).removeClass("loading");
        })
    });
    
    $('body').append('<div id="theme_sideCart" class="theme_aside right"><div class="theme_aside-header" id="theme_sideCart-header"><button type="button" onclick="theme.functions.sideCartToggle()">'+ theme.icon.sideCartClose +'</button><span>'+ theme.lang.sideCartTitle +'</span></div><div id="theme_sideCart-content"></div><div id="theme_sideCart-footer"><a href="/carrinho/index" class="botao principal botao-comprar">Finalizar Compra</div></div></div>');    
}
theme.functions.sideCart = function(){
    $('body').addClass('sideCart-visible');  
    theme.functions.sideCartScroll();  
}

theme.functions.sideCartToggle = function(){
    if($('#theme_sideCart-content:empty').length){
        $("#theme_sideCart-content").load("/carrinho/mini", function() {
            theme.functions.sideCart()
        })
    }
    $('body').toggleClass('sideCart-visible');
}

theme.functions['pagina-cadastro'] = function(){
    $('#id_email').val() == "_" ? $('#id_email').val('') : false;
};

theme.functions['pagina-inicial'] = function(){
    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .conteudo').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }
    if($('.marcas').length){
        theme.functions.flexDestroy($('.marcas .flexslider'));
        $('.marcas .slides').slick(theme.settings.sliders.brands);
        $('<div class="titulo-categoria cor-principal"><strong>'+ theme.lang.brandTitle +'</strong></div>').prependTo('.marcas');
    }
    
};

theme.functions['pagina-categoria'] = function(){
    theme.build.productFilter(1);

    if(theme.settings.extraPagination){
        let pagination = $('.pagination').first().clone();
        pagination.insertAfter('#listagemProdutos');
    }

    let category_description = ""
    if($('h4.titulo .icon-file-text').length > 0){
        category_description = $('h4.titulo .icon-file-text').closest('div').find('p').html()
    }

    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .conteudo').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }
    
    

    $('<div id="theme_listing"></div>').insertAfter('h1.titulo');
    $('<div id="theme_listing-info"></div>').appendTo('#theme_listing');
    $('<div id="theme_listing-filters"></div>').appendTo('#theme_listing');
    $('#botaoOrdenar + ul').find('a').find('i').remove();
    $('#botaoOrdenar + ul').find('a').appendTo('#theme_listing-filters');
    let currentPage = parseInt($('.pagination').first().find('.active > a').text().replaceAll('.',''));    
    let lastPage = parseInt($('.pagination').first().find('li').eq(-2).text().replaceAll('.',''));
    $('.ordenar-listagem').remove();
    
    if($('.listagem-item').length > 1 ||  $('#theme_filter li.active').length > 0){
        $('<button type="button" class="filter-trigger btn-icon">'+ theme.icon.filter +'<span>Filtrar Resultados</span></button>').appendTo('#theme_listing-filters');        
    }else{
        $('#theme_listing-filters > a:last-child').css('margin-right','0');
    }
    let selector = $('<select name="changePage"></select>');
    for(i = 1; i <= lastPage; i ++){
        let cleanUrl = '';
        if(window.location.search == ''){
            cleanUrl = window.location.pathname + '?pagina=' + i;    
        }
        if(window.location.search != '' && !window.location.search.includes('pagina')){
            cleanUrl = window.location.pathname + window.location.search + '&pagina=' + i;        
        }
        if(window.location.search.includes('pagina')){
            cleanUrl = window.location.pathname + window.location.search.split('&pagina')[0] + '&pagina=' + i;
        }
       
        selector.append('<option value="'+ cleanUrl +'" '+ (i == currentPage ? 'selected' : '') +'>'+ i +'</option>');
    }

    let listing = $('<span>Página <span class="selectorContainer"></span> de '+ lastPage + '. Exibindo ' + $('.listagem-item').length  + ' produtos.</span>');
    
    if(isNaN(currentPage)){
        listing = $('<span>Exibindo ' + $('.listagem-item').length  + ' produtos.</span>');
    }
    
    listing.find('.selectorContainer').append(selector);
    $('#theme_listing-info').append(listing);        

    if($('#theme_filter li.active').length > 0){
        $('.filter-trigger > span').append('<i>'+ $('#theme_filter li.active').length +'</i>');
        if(window.location.search.includes('&q=')){
            $('<a id="theme_filter-clean" href="'+ window.location.pathname + '?q='+window.location.search.split('&q=')[1]+'"><i class="icon-undo"></i>&nbsp;&nbsp;<span>Limpar Filtros</span></a>').prependTo('#theme_filter.theme_aside-content');
        }else if(window.location.search.includes('?q=')){
            $('<a id="theme_filter-clean" href="'+ window.location.pathname + '?q='+window.location.search.split('?q=')[1]+'"><i class="icon-undo"></i>&nbsp;&nbsp;<span>Limpar Filtros</span></a>').prependTo('#theme_filter.theme_aside-content');
        }
        else{
            $('<a id="theme_filter-clean" href="'+ window.location.pathname +'"><i class="icon-undo"></i>&nbsp;&nbsp;<span>Limpar Filtros</span></a>').prependTo('#theme_filter.theme_aside-content');
        }
    }


    if(!theme.isMobile){        
        document.addEventListener("DOMContentLoaded", function() {
            let h = $('#cabecalho').innerHeight() - 1;
            $('#theme_listing').addClass('sticky_this');
            $('#theme_listing').css('top', h + 'px');
        });
        window.addEventListener('resize', function(event) {
            let h = $('#cabecalho').innerHeight() - 1;
            $('#theme_listing').addClass('sticky_this');
            $('#theme_listing').css('top', h + 'px');
        });
        window.addEventListener('load', function(event) {
            let h = $('#cabecalho').innerHeight() - 1;
            $('#theme_listing').addClass('sticky_this');
            $('#theme_listing').css('top', h + 'px');
        });
    }
    $('#theme_listing-filters a').each(function(){
        if(window.location.href.indexOf($(this).attr('href')) >= 0){
            $(this).css('font-weight','bold');
        }
    });

    $('#theme_listing [name="changePage"]').change(function(){
        window.location.href = $(this).val();
    });

    if(category_description != ""){
        $('<p>'+ category_description +'</p>').insertAfter('h1.titulo')
    }

    $('#corpo').css('overflow-x','unset');
    // if($('.listagem-item').length <= 1){
    //     $('#theme_listing-filters').hide();
    // }
};
theme.functions['pagina-busca'] = theme.functions['pagina-categoria'];
theme.functions['pagina-marca'] = theme.functions['pagina-categoria'];
theme.functions['pagina-produto'] = function(){
    $('<div class="conteiner theme-bc"></div>').prependTo('#corpo');
    $('.breadcrumbs').appendTo('.theme-bc');
    $('.breadcrumbs > ul > li:first-child > a').html('Página Inicial');
    $('.breadcrumbs > ul').append('<li><strong class="cor-secundaria">'+ $('.info-principal-produto h1.nome-produto.titulo').text() +'</strong></li>');
    $('.parcelas-produto').remove();

    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .produto').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }

    // if($('.atributo-cor').length > 0 ){
    //     $('.atributo-cor a span').each(function(){
    //         let css = $(this).attr('style').replace('border-color','background-color');
    //         $(this).attr('style', css);
    //     });
    // }    

    if($('meta[name="description"]').attr('content').length > 0 && theme.settings.productExcerpt){
        $('<p class="theme_excerpt">'+ $('meta[name="description"]').attr('content') +'</p>').insertAfter('.codigo-produto');
    }
    

    $('.produto-thumbs img').each(function(){
        let crop = $(this).attr('src').split('/')[3];
        let removeCrop = $(this).attr('src').replace(crop,'150x150');
        $(this).attr('src',removeCrop);
    });

    let h = $('.thumbs-vertical .produto-thumbs .miniaturas a').first().innerWidth() * theme.settings.imageSize;
    $('.thumbs-vertical .produto-thumbs .miniaturas a').css('height', h + 'px!important');
    
    $('.comprar .icon-shopping-cart').remove();

    $('.lista-favoritos').appendTo('.codigo-produto').attr('class','lista-favoritos adicionar-favorito')
    $('.lista-favoritos .icon-plus').before(theme.icon.wishlist);
    $('.lista-favoritos .icon-plus').remove();

    if($('.thumbs-vertical').length > 0){
        theme.functions.flexDestroy($('.thumbs-vertical #carouselImagem'));
        if($('.thumbs-vertical #carouselImagem .miniaturas a').length > theme.settings.sliders.verticalProductGallery.slidesToShow){
            $('.thumbs-vertical #carouselImagem .miniaturas').slick(theme.settings.sliders.verticalProductGallery);
        }
    }
    if($('.thumbs-horizontal').length > 0){
        theme.functions.flexDestroy($('.thumbs-horizontal'));
        $('.thumbs-horizontal #carouselImagem .miniaturas').slick(theme.settings.sliders.horizontalProductGallery);
        $(".produto-thumbs").on("click", ".miniaturas li a", function(d) {
            d.preventDefault();
            $(this).parent().siblings().removeClass("active");
            $(this).parent().addClass("active");
            var c = $("#imagemProduto").data("imagezoom");
            if (c) {
                c.changeImage($(this).find("img").attr("data-mediumimg"), $(this).find("img").attr("data-largeimg"))
            }
        })
    }
    $('.produto-compartilhar').remove();

    if(theme.settings.avisoEstoque != undefined){
        $('.qtde_estoque').each(function(){
            let estoque = parseInt($(this).text());
            if(theme.settings.avisoEstoque >= estoque){
                let aviso = theme.lang.avisoEstoque.replace('[qtde]',estoque);
                $('<p class="theme-avisoEstoque">'+ aviso +'</p>').insertBefore($(this).closest('.comprar'))
            }
        })
        theme.settings.avisoEstoque != undefined
    }

    $('.qtde-adicionar-carrinho').append('<button type="button"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Add</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/></svg></button>');
    $('.qtde-adicionar-carrinho').prepend('<button class="minus" type="button"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Remove</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"/></svg></button>');

    $('.qtde-adicionar-carrinho button').click(function(){
        let me = $(this).closest('.qtde-adicionar-carrinho');
        let input = me.find('input');
        let qtd = parseInt(input.val());

        if($(this).hasClass('minus')){
            qtd = qtd - 1
        }else{
            qtd = qtd + 1
        }

        if(qtd < 1){qtd = 1}

        input.val(qtd);
        input.trigger('change');
    });


    $('.produto-thumbs img').each(function(){
        let crop = $(this).attr('data-mediumimg').replace('600x700','1000x1000');
        $(this).attr('data-mediumimg', crop);
    });
    
    $('[data-imagem-grande]').each(function(){
        let url = $(this).attr('data-imagem-grande').replace('1000x1000','1500x1500')
        $(this).attr('data-imagem-grande', url);
    });
    $('[data-mediumimg]').each(function(){
        let url = $(this).attr('data-mediumimg').replace('600x1000','1500x1500')
        $(this).attr('data-mediumimg', url);
    })
    
    $('.produto .conteiner-imagem img').each(function(){
        let url = $(this).attr('src').replace('600x1000','1500x1500')
        $(this).attr('src', url);
    })
        
    $('.thumbs-vertical #carouselImagem .miniaturas li.slick-slide.slick-center a').click();
    
    $(window).load(function(){
        $('.thumbs-vertical #carouselImagem .miniaturas li.slick-slide.slick-center a').click();
    })

    $('.botao-comprar-ajax').unbind();
    $('.botao-comprar-ajax').removeAttr('data-loading-text');
    $('.botao-comprar-ajax').addClass('theme_buttonBuy-ajax').removeClass('botao-comprar-ajax');

    if(theme.settings.galeriaZoom == true){
        theme.functions.galeriaZoom();
    }
    
};

theme.functions['pagina-carrinho'] = function(){
    if($('.carrinho-checkout').length > 0){
        //$('.tabela-carrinho').insertBefore('#formas-pagamento-wrapper');
        $('.tabela-carrinho').wrap('<div class="caixa-sombreada theme_order-resume"></div>');
        $('<legend class="titulo cor-secundaria"><i class="icon-archive"></i>Itens do pedido</legend>').insertBefore('.tabela-carrinho');
    }
};

theme.functions['pagina-pagina'] = function(){
    if($('.secao-principal > .coluna').length){
        $('.secao-principal > .produto').toggleClass('span9 span12');
        $('.secao-principal > .coluna').remove();
    }
};

theme.functions.flexDestroy = function(oObj){
    var $els = $(oObj);
    $els.each(function() {
        var $el = $(this);
        var $elClean = $el.clone();
    
        $elClean.find('.flex-viewport').children().unwrap();
        $elClean
        .removeClass('flexslider')
        .find('.clone, .flex-direction-nav, .flex-control-nav')
            .remove()
            .end()
        .find('*').removeAttr('style').removeClass(function (index, css) {
            // If element is SVG css has an Object inside (?)
            if (typeof css === 'string') {
            return (css.match(/\bflex\S+/g) || []).join(' ');
            }
        });
    
        $elClean.insertBefore($el);
        $el.remove();
    });
}

theme.worker = {};
theme.worker.run = function(){
    $(window).load(function(){
        $.each(theme.worker, function(k, item){
            if(k != "run"){
                if(theme.worker[k].style !== undefined){
                    $('head').append(theme.worker[k].style);
                }
                if(theme.worker[k].list.length > 0 && theme.worker[k].match){
                    theme.worker[k].run();
                }            
            }        
        })
    });
};
theme.worker.mobileFullbanner = {};
theme.worker.mobileFullbanner.list = [];
theme.worker.mobileFullbanner.run = function(el){    
    if(theme.isMobile){
        $('.banner.cheio').hide();
        $('.banner.cheio').after('<div id="apx_fullbannerMobile"></div>');
        let pagingLast = parseInt($('.banner.cheio .flex-control-paging > li:last-child').text());
        $.each(theme.worker.mobileFullbanner.list, function(k,v){
            let bn = $('<div></div>');
            bn.append('<a href="'+ v.href +'" title="'+ v.title +'"><img  alt="'+ v.alt +'" src="'+ v.src +'"/></a>')
            bn.appendTo('#apx_fullbannerMobile');
        })
        $('#apx_fullbannerMobile').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
            dots:true
        });
    }
    console.log('theme.worker.mobileFullbanner OK');
};

theme.worker.sizeTable = {};
theme.worker.sizeTable.list = [];
theme.worker.sizeTable.config = {text:"Guia de Medidas", icon:"",backgroundColor: "#000",textColor:"#fff", target:".atributo-comum .cor-secundaria:contains(Tamanho)"};
theme.worker.sizeTable.run = function(el){    
    //const sizeTableProduct = parseInt($('.pagina-produto').attr('class').replace('pagina-produto produto-','').trim());
    const sizeTableProduct = $('.pagina-produto [itemprop="sku"]').text().trim();
    const sizeTableBrand = $('.pagina-produto [itemprop="brand"] [itemprop="name"]').length > 0 ? $('.pagina-produto [itemprop="brand"] [itemprop="name"]').attr('content').toLowerCase() : '';
    
    
    var themeSizeTable = theme.worker.sizeTable.list.filter( el => el.identifier == sizeTableProduct);
    if(themeSizeTable.length == 0){
        themeSizeTable = theme.worker.sizeTable.list.filter( el => el.identifier == sizeTableBrand);
    }
    if(themeSizeTable.length == 0){
        themeSizeTable = theme.worker.sizeTable.list.filter( el => el.identifier == "x");
    }

    if(themeSizeTable.length > 0){
        $(theme.worker.sizeTable.config.target).before("<div id='tabela-medidas'><a href='"+ themeSizeTable[0].src +"' class='theme_worker-sizeTable' style='"+ (theme.worker.sizeTable.config.textColor != undefined ? "color:" +  theme.worker.sizeTable.config.textColor + ";" : "") + " " + (theme.worker.sizeTable.config.backgroundColor != undefined ? "background-color:" +  theme.worker.sizeTable.config.backgroundColor + ";" : "") + "'>"+ theme.worker.sizeTable.config.icon + "" + theme.worker.sizeTable.config.text +"</a></div>");
        $(".theme_worker-sizeTable").fancybox();
    }   
    console.log('theme.worker.sizeTable OK');
};

theme.worker.testimonials = {};
theme.worker.testimonials.list = [];
theme.worker.testimonials.config = {title:"O que dizem por ai", ratingColor: "#f9d141", nameColor: "#000", descriptionColor:"#666", slidesDesktop: 3, slidesMobile: 1, target: "#blank-home-position3"};
theme.worker.testimonials.run = function(el){
    var themeTestimonials = $('<div class="theme_worker-testimonials"></div>');    
    themeTestimonials.append('<div class="titulo-categoria cor-principal"><strong>'+ theme.worker.testimonials.config.title +'</strong></div>');    
    var themeTestimonialsList = $('<ul class="slider"></ul>');
    $.each(theme.worker.testimonials.list, function(k,item){
        let li_ = $('<li></li>');
        let li = $('<div></div>');
        var content = $('<div class="content"></div>');
        if(item.img != ""){li.append('<img src="'+item.img+'"/>');}
        if(item.name != ""){content.append('<div><strong style="'+ (theme.worker.testimonials.config.nameColor != "" ? "color:" + theme.worker.testimonials.config.nameColor + ";": "") +'" >'+ item.name +'</strong></div>');}
        if(item.description != ""){content.append('<div><p style="'+ (theme.worker.testimonials.config.descriptionColor != "" ? "color:" + theme.worker.testimonials.config.descriptionColor + ";": "") +'">'+ item.description +'</p></div>');}
        let rating = $('<div class="rating"></div>')
        if(item.rating != ""){
            for(let i = 1; i<=5; i++ ){
                rating.append('<i style="'+ (theme.worker.testimonials.config.ratingColor != "" ? "color:" + theme.worker.testimonials.config.ratingColor + ";": "") +'" class="fa fa-star'+ (i<= item.rating ? '' : '-o') +'"></i>');
            }            
        }
        content.append(rating);
        li.append(content);
        li_.append(li);        
        themeTestimonialsList.append(li_);
    });
    themeTestimonials.append(themeTestimonialsList);
    themeTestimonials.appendTo(theme.worker.testimonials.config.target);
    
    $('.theme_worker-testimonials > .slider').slick(theme.settings.sliders.testimonials);
    
    console.log('theme.worker.testimonials OK');
};

theme.worker.topbarSlider = {};
theme.worker.topbarSlider.list = [];
theme.worker.topbarSlider.config = {backgroundColor: "#000", textColor: "#fff", target: "#cabecalho"};
theme.worker.topbarSlider.run = function(el){
    if(theme.worker.topbarSlider.list.length > 0){
        var themeTopbarSlider = $('<div class="theme_worker-topbarSlider"></div>');
        themeTopbarSlider.css({
            'background-color': theme.worker.topbarSlider.config.backgroundColor,
            'color': theme.worker.topbarSlider.config.textColor
        });
        
        var sliderContent = $('<div class="slider-content"></div>');
        
        $.each(theme.worker.topbarSlider.list, function(k, item){
            var slide = $('<div class="slide-item"></div>');
            if(item.link && item.link !== ""){
                slide.append('<a href="'+ item.link +'" style="color:' + theme.worker.topbarSlider.config.textColor + ';">'+ item.text +'</a>');
            } else {
                slide.append('<span>'+ item.text +'</span>');
            }
            sliderContent.append(slide);
        });
        
        themeTopbarSlider.append(sliderContent);
        $(theme.worker.topbarSlider.config.target).prepend(themeTopbarSlider);
        
        if(theme.worker.topbarSlider.list.length > 1){
            sliderContent.slick(theme.settings.sliders.topbarSlider);
        }
    }
    console.log('theme.worker.topbarSlider OK');
};

theme.worker.floatingWhatsapp = {};
theme.worker.floatingWhatsapp.list = [{}];
theme.worker.floatingWhatsapp.config = {icon:'<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"/></svg>', text:"Precisa de ajuda?<br><strong>Fale Conosco</strong>", textColor: "#666", textBackground: "#f8f8f8", target: "body"};
theme.worker.floatingWhatsapp.run = function(el){
    var themeFloatingWhatsapp = $('<div class="theme_worker-floatingWhatsapp"></div>');    
    themeFloatingWhatsapp.append('<a target="_blank" href="http://wa.me/'+ theme.worker.floatingWhatsapp.config.number+'"><span style="color:'+ theme.worker.floatingWhatsapp.config.textColor +';background-color:'+ theme.worker.floatingWhatsapp.config.textBackground +';">'+ theme.worker.floatingWhatsapp.config.text +'</span>'+ theme.worker.floatingWhatsapp.config.icon +'</a>');    
    themeFloatingWhatsapp.appendTo(theme.worker.floatingWhatsapp.config.target);
    console.log('theme.worker.floatingWhatsapp OK');
};

theme.worker.insertBanners = {};
theme.worker.insertBanners.list = [];
theme.worker.insertBanners.functions = {};
theme.worker.insertBanners.style = "";
theme.worker.insertBanners.config = {};
theme.worker.insertBanners.run = function(){
    $.each(theme.worker.insertBanners.list, function(k, item){
        let targetSelector = null;
        switch (item.target){
            case 'Lançamento':
                targetSelector = $('.vitrine-lancamento + ul');
                break;
            case 'Mais Vendidos':
                targetSelector = $('.vitrine-mas-vendidos + ul');
            break;
            case 'Posição':
                targetSelector = $('.pagina-inicial #listagemProdutos > ul').eq(item.position - 1);
            break; 
        }
         
        if(targetSelector.length == 1 && item.images.length > 0){
            let columns = 12/item.images.length;
            let row = $('<div class="row-fluid"></div>');
            $.each(item.images,function(k2, image){
                row.append('<div class="span'+ columns+'"><a href="'+ image.link +'"><img src="'+ image.url +'"/></a></div>');
            });
            targetSelector.after(row);
        }
    })  
}

theme.worker.insertVideos = {};
theme.worker.insertVideos.list = [];
theme.worker.insertVideos.functions = {};
theme.worker.insertVideos.style = "";
theme.worker.insertVideos.config = {};
theme.worker.insertVideos.run = function(){
    $.each(theme.worker.insertVideos.list, function(k, item){
        let targetSelector = null;
        switch (item.target){
            case 'Lançamento':
                targetSelector = $('.vitrine-lancamento + ul');
                break;
            case 'Mais Vendidos':
                targetSelector = $('.vitrine-mas-vendidos + ul');
            break;
            case 'Posição':
                targetSelector = $('.pagina-inicial #listagemProdutos > ul').eq(item.position - 1);
            case 'Rodapé':
                targetSelector = $('#blank-home-position4');
            break; 
        }
        //console.log(targetSelector.length)
        if(targetSelector.length == 1 && item.videoShare){            
            if(item.description != null){
                let container = $('<div class="container withDescription theme_worker-insertVideos"></div>');
                let row = $('<div class="row-flex align-items-center text-center"></div>');
                row.append('<div class="col"><div class="titulo-categoria cor-principal"><strong>'+ item.title +'</strong></div><div class="description">'+ item.description +'</div></div>');
                row.append('<div class="col text-center">'+ item.videoShare +'</div>');
                container.append(row);
                targetSelector.after(container);
            }else{
                let container = $('<div class="conteiner theme_worker-insertVideos"></div>');
                let row = $('<div class="row-flex align-items-center text-center"></div>');
                container.append('<div class="row"><div class="col"><div class="titulo-categoria cor-principal"><strong>'+ item.title +'</strong></div></div></div>')
                container.append('<div class="row"><div class="col text-center">'+ item.videoShare +'</div></div>');
                targetSelector.after(container);
            }            
        }
    })  
}

$(document).ready(function(){
    theme.worker.topbarSlider.match = theme.worker.topbarSlider.list.length > 0;
    theme.worker.insertBanners.match = $('.pagina-inicial').length == 1;
    theme.worker.insertVideos.match = $('.pagina-inicial').length == 1;
    theme.worker.floatingWhatsapp.match = theme.settings.whatsappButton;
    theme.worker.mobileFullbanner.match = $('.pagina-inicial').length == 1;
    theme.worker.testimonials.match = $('.pagina-inicial').length > 0;
    theme.worker.sizeTable.match = $('.pagina-produto').length > 0;
    theme.worker.floatingWhatsapp.config.number =  "55" + $('.barra-inicial .canais-contato .fa-whatsapp').parent().text().replace('Whatsapp: ','').replace('(','').replace(')','').replace('-','').replaceAll(' ','').trim();

    
    theme.functions.beforeInit();
    theme.functions.init();
    theme.worker.run();

    theme.functions.productListImageSize(theme.settings.imageSize);

    /* 2.6 */
    //funcao ocultar categorias no menu
    $('.menu.superior > .nivel-um > li > a > strong:contains(Ocultar)').closest('li').prev('li').nextAll().remove();

    //funcao ocultar paginas no menu
    $('#theme_footer-content1 > ul > li > a:contains(Ocultar)').closest('li').prev('li').nextAll().remove();
    

    //theme.benefitsStripe
    if(theme.benefitsStripe.active == true && theme.benefitsStripe.list.length > 0 && $('.pagina-inicial').length > 0){
        $('.secao-banners .banner.cheio').after('<div class="theme_benefitsStripe"></div>');
        $.each(theme.benefitsStripe.list, function(key, item){
            let block = $('<div class="item"></div>');
            if(item.img){ block.append('<img src="'+ item.img +'"/>') }
            block.append('<div class="text"></div>');
            if(item.title){ block.find('.text').append('<strong>'+ item.title +'</strong>') }
            if(item.subtitle){ block.find('.text').append('<p>'+ item.subtitle +'</p>') }            
            if(item.link){ block.wrapInner('<a href="'+ item.link +'"></a>') }
            block.appendTo('.theme_benefitsStripe');
        });
        if(theme.benefitsStripe.config.imageAbove){
            $('.theme_benefitsStripe').addClass('imageAbove');
        }
        $('.theme_benefitsStripe').slick(theme.settings.sliders.benefitsStripe);
    }

    

    //cep no carrinho nativo
    $('.pagina-carrinho #formCalcularFrete').closest('tr').attr('id','cep-wrapper');
    $('.pagina-carrinho .bg-dark').each(function(){
        if($(this).html().trim().length == 0){
            $(this).remove();
        }
    });

    
});
$(window).load(function(){
    theme.functions.productListImageSize(theme.settings.imageSize);
});

theme.functions.triggerCDN();


