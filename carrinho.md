<div class="campos-pedido">
    <div class="cabecalho-interno row-fluid hide">
      <div class="span12">
        <h1 class="titulo cor-secundaria">
          Finalizar compra <small> Preencha os dados necessários para finalizar o pedido.</small>
        </h1>
      </div>
    </div>
    <div class="campos-pedido">


      <div id="login-content" class="">
        <div class="row-fluid identificacao" style="display: none;">
          <div class="span12">
            <hr class="sem-margem">
            <div class="identificacao-inner">
              <h3 class="identificacao-title">Para continuar, informe seu e-mail</h3>
              <form action="https://taymah.lojaintegrada.com.br/conta/login" method="post" id="formularioLogin">
                <div class="form-horizontal">
                  <div class="control-group">
                    <div class="email-box">
                      <label for="id_email" class="control-label hide">E-mail</label>
                      <input type="text" name="email" id="id_email_login" autocomplete="email" placeholder="meu@email.com.br" value="">
                    </div>
                    <a href="javascript:;" class="submit-email botao principal grande" data-loading-text="&lt;i class='icon-refresh icon-animate'&gt;&lt;/i&gt;" autocomplete="off">Continuar</a>
                  </div>
                  <div class="login-data hide">
                    <div class="control-group">
                      <button type="submit" id="id_botao_login" class="botao principal" data-loading-text="&lt;i class='icon-refresh icon-animate'&gt;&lt;/i&gt;" autocomplete="off">OK</button>
                      <div class="senha-box">
                        <label for="id_senha" class="control-label hide">Senha</label>
                        <input type="password" name="senha" id="id_senha_login" placeholder="Senha" autocomplete="current-password">
                      </div>
                      <a href="https://taymah.lojaintegrada.com.br/conta/login?next=/checkout/#recuperar_senha" class="esqueci-senha">
                        <i class="icon-lock"></i> Esqueci minha senha
                      </a>

                        <a href="javascript:;" class="fazer-cadastro">
                          <i class="icon-list"></i> Novo cadastro
                        </a>

                    </div>
                    <input type="hidden" name="next" value="/checkout/">
                  </div>
                </div>
              </form>


  <div class="control-group">

    <div class="button-auth-google to-checkout" data-action="continue_with"></div>

  </div>

            </div>
          </div>
        </div>
      </div>




  <div class="checkout-alerta-seguro" style="display: none;">
    <h3 class="checkout-alerta-seguro-tit">Usamos seu e-mail de forma 100% segura para:</h3>
    <ul class="checkout-alerta-seguro-list">
      <li class="checkout-alerta-seguro-item"><i class="icon-ok"></i> <span class="checkout-alerta-seguro-text">Identificar seu perfil</span></li>
      <li class="checkout-alerta-seguro-item"><i class="icon-ok"></i> <span class="checkout-alerta-seguro-text">Notificar sobre o andamento do seu pedido</span></li>
      <li class="checkout-alerta-seguro-item"><i class="icon-ok"></i> <span class="checkout-alerta-seguro-text">Gerenciar seu histórico de compras</span></li>
      <li class="checkout-alerta-seguro-item"><i class="icon-ok"></i> <span class="checkout-alerta-seguro-text">Acelerar o preenchimento de suas informações</span></li>
    </ul>
    <i class="icon-lock checkout-alerta-seguro-icon"></i>
  </div>

      <div class="row-fluid">
        <div class="span12">
          <div class="resumo-compra caixa-sombreada">
            <table class="table tabela-carrinho borda-alpha">
              <thead class="cor-secundaria">
                <tr><th><h6>Produtos</h6></th>
                <th width="80"><h6>Qtd.</h6></th>
                <th width="140" class="padding-preco"><div><h6 style="margin-left: 10px;">Preço</h6></div></th>
              </tr></thead>

                <tbody><tr>
                  <td class="phone-pullleft" data-produto-id="384705784" data-produto-quantidade="1">
                    <div class="produto-info">
                      PRODUTO TESTE VARIAÇÃO
                      <ul>
                        <li>
                          <span>
                            SKU:
                            <strong>
                              548J3CE5M-bazaar-34
                            </strong>
                          </span>
                        </li>


                            <li>
                              <span>
                                Tamanho de calça:

                                  <strong>34</strong>

                              </span>
                            </li>

                            <li>
                              <span>
                                Produto com uma cor:

                                  <span class="atributo-cor-carrinho">
                                    <span style="background-color: #98777B;"></span>

                                  </span>

                              </span>
                            </li>


                      </ul>
                    </div>
                  </td>
                  <td class="conteiner-qtd">
                    <div>1</div>
                  </td>
                  <td class="conteiner-preco padding-preco" data-item-unit-valor="90.99">
                    <div class="preco-produto">
                      <strong class="preco-promocional cor-principal titulo">
                        R$ 90,99
                      </strong>
                    </div>
                  </td>
                </tr>


              <tr class="bg-dark esconder-mobile">
                <td>&nbsp;</td>
                <td class="text-right">
                  <span>Subtotal:</span>
                </td>
                <td class="padding-preco">
                  <div class="subtotal" data-subtotal="90,99" data-float="90.99">
                    <strong class="titulo cor-principal">
                      R$ 90,99
                    </strong>
                  </div>
                </td>
              </tr>


              <tr class="bg-dark tr-checkout-frete hide" style="display: table-row;">
                <td>&nbsp;</td>
                <td class="text-right">
                  <span>Frete:</span>
                </td>
                <td class="padding-preco">
                  <div class="frete-preco">
                    <small class="muted">(defina abaixo)</small>
                    <strong class="titulo cor-principal hide">
                      R$ 0,00
                    </strong>
                  </div>
                </td>
              </tr>


                <tr class="bg-dark esconder-mobile desconto-tr hide">
                  <td>&nbsp;</td>
                  <td class="text-right">
                    <span>Desconto à vista:</span>
                    <small class="hide texto-aplicar-total muted">(frete não incluso)</small>
                  </td>
                  <td class="padding-preco">
                    <div class="desconto-preco">
                      <strong class="titulo cor-principal">
                        R$
                      </strong>
                    </div>
                  </td>
                </tr>

              <tr class="bg-dark tr-checkout-total hide" style="display: table-row;">
                <td colspan="2" class="text-right hidden-phone">
                  <span>Total:</span>
                </td>
                <td class="padding-preco">
                  <span class="visible-phone">Total:</span>
                  <div class="total" data-total="90.99">
                    <strong class="titulo cor-principal preco-carrinho-total">
                      R$ 90,99
                    </strong>
                  </div>
                </td>
              </tr>
            </tbody></table>
            <div class="alert alert-error hide" id="alertError">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <form action="https://taymah.lojaintegrada.com.br/checkout/finalizar" method="POST" id="formularioCheckout">

        <div class="row-fluid hide" style="display: block;">
          <div class="span4">
            <div class="caixa-sombreada borda-principal dados-cadastro">
              <fieldset data-recording-ignore="events">

                <legend class="titulo cor-secundaria"><i class="icon-list"></i>Novo cadastro ou <a href="javascript:;" class="titulo cor-secundaria fazer-login-btn" style="text-decoration: underline;">identifique-se</a></legend>


                  <input id="id_tipo" name="tipo" type="hidden" value="PF">
                  <input id="id_tipo_usuario" name="tipo_usuario" type="hidden" value="PF">
                  <div class="control-group  required">
                    <label class="control-label font-bold" for="id_email">E-mail</label>
                    <div class="controls">
                      <input autocomplete="email" class="input-xlarge span12" id="id_email" maxlength="128" name="email" type="text">
                        <p class="help-block email-verificacao hide">

                        </p>
                    </div>
                  </div>
                  <div class="row-fluid">

                      <div class="control-group span6  required erro error">
                        <label class="control-label font-bold" for="id_senha">Criar senha</label>
                        <div class="controls">
                          <input class="input-small span12" id="id_senha" maxlength="32" name="senha" type="password">
                            <p class="help-block hide" style="display: block;">Mínimo 5 caracteres</p>
                        </div>
                      </div>
                      <div class="control-group span6  required">
                        <label class="control-label font-bold" for="id_confirmacao_senha">Confirmar senha</label>
                        <div class="controls">
                          <input class="input-small span12" id="id_confirmacao_senha" maxlength="32" name="confirmacao_senha" type="password">
                          <p class="help-block hide">

                          </p>
                        </div>
                      </div>

                  </div>
                  <div id="userExtraInfo">
                    <ul id="tipoCadastro" class="row-fluid tipo-cadastro divisor borda-alpha">
                      <li class="span6 active">
                        <a href="#tipoFisica" id="tabCadastroPessoaFisica" class="cor-secundaria" data-toggle="tab" data-value="PF">
                          <b>
                            <i class="icon-check icon-fixed-width"></i>
                            <i class="icon-check-empty icon-fixed-width"></i>&nbsp; Pessoa Física
                          </b>
                        </a>
                      </li>
                      <li class="span6">
                        <a href="#tipoJuridica" id="tabCadastroPessoaJuridica" class="cor-secundaria" data-toggle="tab" data-value="PJ">
                          <b>
                            <i class="icon-check icon-fixed-width"></i>
                            <i class="icon-check-empty icon-fixed-width"></i>&nbsp; Pessoa Jurídica
                          </b>
                        </a>
                      </li>
                    </ul>
                    <div class="row-fluid campos-top">
                      <div class="control-group  required">
                        <label class="control-label font-bold" for="id_nome">Nome completo</label>
                        <div class="controls">
                          <input autocomplete="name" class="input-xlarge span12" id="id_nome" maxlength="255" name="nome" type="text">
                          <p class="help-block hide">

                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content">
                      <div class="row-fluid tab-pane fade in active" id="tipoFisica">
                        <div class="control-group span6  required">
                          <label class="control-label font-bold" for="id_cpf">CPF</label>
                          <div class="controls">
                            <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-small span12" id="id_cpf" maxlength="14" name="cpf" spellcheck="false" type="tel">
                            <p class="help-block hide">

                            </p>
                          </div>
                        </div>
                        <div class="campo-checkout-sexo control-group span6  hide" style="margin-left: 0; clear: both;">
                          <label class="control-label " for="id_sexo">Sexo</label>
                          <div class="controls">
                            <select class="input-medium span12" id="id_sexo" name="sexo">

<option value="" selected="selected"> - Selecione - </option>
<option value="m">Masculino</option>
<option value="f">Feminino</option>
</select>
                            <p class="help-block hide">
                              
                            </p>
                          </div>
                        </div>
                        <div class="campo-checkout-nascimento control-group span6  hide">
                          <label class="control-label " for="id_data_nascimento">Data de nascimento</label>
                          <div class="controls">
                            <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-small span12" id="id_data_nascimento" name="data_nascimento" spellcheck="false" type="text" maxlength="10">
                            <p class="help-block hide">
                              
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade in" id="tipoJuridica">
                        <div class="row-fluid">
                          <div class="control-group span6  required">
                            <label class="control-label font-bold" for="id_cnpj">CNPJ</label>
                            <div class="controls">
                              <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-medium span12" id="id_cnpj" maxlength="18" name="cnpj" spellcheck="false" type="text">
                              <p class="help-block hide">
                                
                              </p>
                            </div>
                          </div>
                          <div class="control-group span6 ">
                            <label class="control-label" for="id_%s">Inscrição Estadual</label>
                            <div class="controls">
                              <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-medium span12" id="id_ie" maxlength="128" name="ie" spellcheck="false" type="text">
                              <p class="help-block hide">
                                
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="control-group  required">
                          <label class="control-label font-bold" for="id_razao_social">Razão Social</label>
                          <div class="controls">
                            <input class="input-big span12" id="id_razao_social" maxlength="128" name="razao_social" type="text">
                            <p class="help-block hide">
                              
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row-fluid campos-bot">
                      <div class="control-group span6  required" style="margin-left: 0;">
                        <label class="control-label font-bold" for="id_telefone_celular">Celular</label>
                        <div class="controls">
                          <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-small span12" id="id_telefone_celular" name="telefone_celular" spellcheck="false" tel="" type="tel" maxlength="15">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                      <div class="control-group span6  parent_div_id_telefone_principal">
                        <label class="control-label" for="id_telefone_principal">Telefone fixo</label>
                        <div class="controls">
                          <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-small span12" id="id_telefone_principal" name="telefone_principal" spellcheck="false" type="tel" maxlength="15">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                      <div class="control-group span6  hide" style="margin-left: 0;">
                        <label class="control-label" for="id_telefone_comercial">Telefone comercial</label>
                        <div class="controls">
                          <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-small span12" id="id_telefone_comercial" name="telefone_comercial" spellcheck="false" type="tel" maxlength="15">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                    </div>
                  </div><!-- /userExtraInfo -->
                
              </fieldset>
              
            </div>
          </div>
          <div class="span4">
            <div class="caixa-sombreada borda-principal">
              <fieldset data-recording-ignore="events">
                <legend class="titulo cor-secundaria"><i class="icon-map-marker"></i>Entrega</legend>
                <div id="formularioEndereco">
                  <div id="exibirFormasEnvio" class="hide pull-right" style="margin-bottom: 15px; margin-top: 25px;">
                    <a href="javascript:;" class="btn btn-small"><i class="icon-pencil"></i> Alterar entrega</a>
                  </div>
                  <div class="formEndereco-conteiner">
                    
                    <div class="control-group  required" style="margin-bottom: 20px; ">
                      <label class="control-label font-bold" for="id_cep">CEP</label>
                      <div class="controls">
                        <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-small" id="id_cep" name="cep" spellcheck="false" type="tel" maxlength="9">
                        <p class="help-block hide">
                          
                        </p>
                      </div>
                      <ul class="hide borda-alpha"></ul>
                    </div>
                  </div>
                  <div class="envio-erro alert alert-errors alert-error hide" style="margin: 10px 0;">
                    CEP não informado
                  </div>
                  <div id="formasEnvio" class="hide">
                    <ul class="hide borda-alpha"></ul>
                    
                    <div class="formas envio accordion borda-alpha" id="formas-envio-wrapper"></div>
                    <p class="warning-text">
                      Dias úteis, após confirmação do pagamento.
                    </p>
                    <input type="hidden" name="forma_envio_code" value="" id="forma_envio_code">
                  </div>
                  <div class="formEndereco-conteiner" id="userNewAddressInfo">
                    <hr class="hide">
                    
                    <div class="row-fluid">
                      <div class="control-group span9  hide required">
                        <label class="control-label font-bold" for="id_endereco">Endereço</label>
                        <div class="controls">
                          <input class="input-xlarge span12" id="id_endereco" maxlength="255" name="endereco" type="text">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                      <div class="control-group span3  hide required">
                        <label class="control-label font-bold" for="id_numero">Número</label>
                        <div class="controls">
                          <input autocapitalize="off" autocomplete="address-line2" autocorrect="off" class="input-mini span12" id="id_numero" maxlength="20" name="numero" spellcheck="false" type="text">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row-fluid">
                      <div class="control-group span6  hide">
                        <label class="control-label" for="id_complemento">Complemento</label>
                        <div class="controls">
                          <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-small span12" id="id_complemento" maxlength="30" name="complemento" spellcheck="false" type="text">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                      <div class="control-group span6  hide">
                        <label class="control-label" for="id_referencia">Referência</label>
                        <div class="controls">
                          <input class="span12" id="id_referencia" maxlength="80" name="referencia" type="text">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row-fluid">
                      <div class="control-group span6  hide required">
                        <label class="control-label font-bold" for="id_bairro">Bairro</label>
                        <div class="controls">
                          <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-medium span12" id="id_bairro" maxlength="128" name="bairro" spellcheck="false" type="text">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                      <div class="control-group span6  hide required">
                        <label class="control-label font-bold" for="id_cidade">Cidade</label>
                        <div class="controls">
                          <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-medium span12" id="id_cidade" maxlength="128" name="cidade" spellcheck="false" type="text">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row-fluid">
                      <div class="control-group span6  hide required error erro">
                        <label class="control-label font-bold" for="id_estado">Estado</label>
                        <div class="controls">
                          <select class="span12" id="id_estado" maxlength="2" name="estado">
<option value="" selected="selected">Selecione</option>
<option value="AC">Acre</option>
<option value="AL">Alagoas</option>
<option value="AP">Amapá</option>
<option value="AM">Amazonas</option>
<option value="BA">Bahia</option>
<option value="CE">Ceará</option>
<option value="DF">Distrito Federal</option>
<option value="ES">Espírito Santo</option>
<option value="GO">Goiás</option>
<option value="MA">Maranhão</option>
<option value="MT">Mato Grosso</option>
<option value="MS">Mato Grosso do Sul</option>
<option value="MG">Minas Gerais</option>
<option value="PA">Pará</option>
<option value="PB">Paraíba</option>
<option value="PR">Paraná</option>
<option value="PE">Pernambuco</option>
<option value="PI">Piauí</option>
<option value="RJ">Rio de Janeiro</option>
<option value="RN">Rio Grande do Norte</option>
<option value="RS">Rio Grande do Sul</option>
<option value="RO">Rondônia</option>
<option value="RR">Roraima</option>
<option value="SC">Santa Catarina</option>
<option value="SP">São Paulo</option>
<option value="SE">Sergipe</option>
<option value="TO">Tocantins</option>
</select>
                          <p class="help-block hide" style="display: block;">Este campo é obrigatório.</p>
                        </div>
                      </div>
                      <div class="control-group span6  hide required">
                        <label class="control-label font-bold" for="id_pais_id">País</label>
                        <div class="controls">
                          <input class="span12" id="id_pais_id" maxlength="30" name="pais_id" type="text" value="BRA" readonly="readonly">
                          <p class="help-block hide">
                            
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            
          </div>
          <div class="span4">
            <div class="caixa-sombreada borda-principal" id="formas-pagamento-wrapper">
              <fieldset data-recording-ignore="events">
                <legend class="titulo cor-secundaria"><i class="icon-money"></i>Pagamento</legend>
                <div class="formas pagamento accordion borda-alpha" id="formasPagamento" data-recording-disable="">
                  <input type="hidden" id="cart_selected_shipping" name="cart_selected_shipping">
                  <input type="hidden" id="cart_selected_shipping_value" name="cart_selected_shipping_value">
                  <input type="hidden" id="cart_selected_payment" name="cart_selected_payment">
                  <input type="hidden" id="payment_bank_id" name="payment_bank_id">
                  <input type="hidden" id="payment_session_id" name="payment_session_id">
                  <input type="hidden" id="payment_session_name" name="payment_session_name">
                  <input type="hidden" id="payment_token" name="payment_token">
                  <input type="hidden" id="payment_bin" name="payment_bin">
                  <input type="hidden" id="payment_last_digits" name="payment_last_digits">
                  <input type="hidden" id="payment_cvv" name="payment_cvv">
                  <input type="hidden" id="payment_system_id" name="payment_system_id">
                  <input type="hidden" id="payment_system_name" name="payment_system_name">
                  <input type="hidden" id="payment_fingerprint" name="payment_fingerprint" value="">
                  <input type="hidden" id="payment_installments" name="payment_installments">
                  <input type="hidden" id="payment_installments_value" name="payment_installments_value">
                  <input type="hidden" id="payment_address_active" name="payment_address_active">
                  <input type="hidden" id="payment_address_postalCode" name="payment_address_postalCode">
                  <input type="hidden" id="payment_address_street" name="payment_address_street">
                  <input type="hidden" id="payment_address_number" name="payment_address_number">
                  <input type="hidden" id="payment_address_complement" name="payment_address_complement">
                  <input type="hidden" id="payment_address_neighborhood" name="payment_address_neighborhood">
                  <input type="hidden" id="payment_address_city" name="payment_address_city">
                  <input type="hidden" id="payment_address_state" name="payment_address_state">
                  <input type="hidden" id="payment_address_country" name="payment_address_country" value="BR">
                  <input type="hidden" id="payment_client_active" name="payment_client_active">
                  <input type="hidden" id="payment_client_name" name="payment_client_name">
                  <input type="hidden" id="payment_client_document" name="payment_client_document">
                  <input type="hidden" id="payment_client_birthday" name="payment_client_birthday">
                  <input type="hidden" id="payment_client_phone" name="payment_client_phone">


    <div id="li-box-payment-minimum-value" data-value="2" class="alert" style="display: none;font-size: 14px; padding: 10px; text-align: center;">
        <i class="icon-info-sign"></i>
        <strong style="color: #ae8640;">
            Adicione mais
            <span class="li-box-payment-minimum-value-left">
                R$-88,99
            </span>
            ao carrinho
        </strong>
        para poder finalizar a compra.
    </div>




                      <div class="li-box-payment li-box-payment-cc" data-minimum-value="5">


<div class="accordion-group cartao pagamento_selecao_conteiner">
  <div class="accordion-heading" id="pagamentoCartao">
    <span class="radio-conteiner">
      <input type="radio" name="forma_pagamento" id="radio-cartao" data-code="cartao" value="">
    </span>
    <span class="forma-conteiner">
      <span class="helper"></span>
      <ul class="bandeiras-pagamento">
        <li><i class="icone-pagamento mastercard" title="Mastercard"></i></li>
        <li><i class="icone-pagamento visa" title="Visa"></i></li>
        <li><i class="icone-pagamento elo" title="Elo"></i></li>
        <li><i class="icone-pagamento misc" title="Outros"></i></li>
      </ul>
    </span>
  </div>
  <div id="escolha-cartao" class="mycollapse pagamento_selecao_info" style="display: none;">
    <div class="accordion-inner">
      <div class="cartao-salvo-usuario" style="display: none;">
        
<div class="cartao-salvo-itens"></div>
<label class="cartao-salvo-box cartao-salvo-box-novo">
  <span class="cartao-salvo-radio">
    <input type="radio" value="novo" name="cartao_salvo_opcao" checked="checked" class="">
  </span>
  <span class="cartao-salvo-detalhes">
    <span class="cartao-salvo-novo">Cadastrar novo cartão</span>
  </span>
</label>

      </div>
      <div class="cartao-cadastrar-novo">
        <div class="cartao-placeholder-card placeholder-card" data-code="cartao" data-jp-card-initialized="true" style="height: 148px; width: 0px;"><div class="jp-card-container" style="transform: scale(0.866667);"><div class="jp-card"><div class="jp-card-front"><div class="jp-card-logo jp-card-elo"><div class="e">e</div><div class="l">l</div><div class="o">o</div></div><div class="jp-card-logo jp-card-visa">Visa</div><div class="jp-card-logo jp-card-visaelectron">Visa<div class="elec">Electron</div></div><div class="jp-card-logo jp-card-mastercard">Mastercard</div><div class="jp-card-logo jp-card-maestro">Maestro</div><div class="jp-card-logo jp-card-amex"></div><div class="jp-card-logo jp-card-discover">discover</div><div class="jp-card-logo jp-card-dinersclub"></div><div class="jp-card-logo jp-card-dankort"><div class="dk"><div class="d"></div><div class="k"></div></div></div><div class="jp-card-logo jp-card-jcb"><div class="j">J</div><div class="c">C</div><div class="b">B</div></div><div class="jp-card-lower"><div class="jp-card-shiny"></div><div class="jp-card-cvc jp-card-display">•••</div><div class="jp-card-number jp-card-display">•••• •••• •••• ••••</div><div class="jp-card-name jp-card-display">Nome Completo</div><div class="jp-card-expiry jp-card-display" data-before="mm/aa" data-after="valid

thru">••/••</div></div></div><div class="jp-card-back"><div class="jp-card-bar"></div><div class="jp-card-cvc jp-card-display">•••</div><div class="jp-card-shiny"></div></div></div></div></div>
</div>
<div class="control-group hide" id="bandeiras-manual">
<div class="controls">
<label class="control-label">Selecione uma Bandeira</label>
<ul class="bandeiras-pagamento">
<li data-name="Mastercard" data-class="jp-card-mastercard" class="hide"><i class="icone-pagamento mastercard" title="Mastercard"></i></li>
<li data-name="Visa" data-class="jp-card-visa" class="hide"><i class="icone-pagamento visa" title="Visa"></i></li>
<li data-name="Elo" data-class="jp-card-elo" class="hide"><i class="icone-pagamento elo" title="Elo"></i></li>
<li data-name="Diners" data-class="jp-card-dinersclub" class="hide"><i class="icone-pagamento diners" title="Diners"></i></li>
<li data-name="American Express" data-class="jp-card-amex" class="hide"><i class="icone-pagamento amex" title="American Express"></i></li>
</ul>
</div>
</div>
<div class="cartao-cadastrar-novo">
<div class="clearfix">
<div class="span8">
<div class="control-group">
<div class="controls">
<label class="control-label" for="cartao_cartao_numero">Número do Cartão</label>
<input type="tel" class="cartao_cartao_numero cartao_dados_numero span12" placeholder="•••• •••• •••• ••••" id="cartao_cartao_numero" name="cartao_cartao_numero" autocomplete="cc-number">
<span class="help-block erro">Este campo é obrigatório</span>
</div>
</div>
</div>
<div class="span4">
<div class="control-group">
<div class="controls">
<label class="control-label" for="cartao_cartao_data_expiracao">Validade</label>
<input type="tel" maxlength="5" placeholder="mm/aa" class="cartao_cartao_data_expiracao cartao_dados_expiracao span12" id="cartao_cartao_data_expiracao" name="cartao_cartao_data_expiracao" autocomplete="cc-exp">
<span class="help-block erro">Este campo é obrigatório</span>
</div>
</div>
</div>
</div>
<div class="control-group">
<div class="controls">
<label class="control-label" for="cartao_cartao_nome">Nome do Titular
<small style="margin-left: 5px;">(Como escrito no cartão)</small>
</label>
<input type="text" class="cartao_cartao_nome cartao_dados_nome span12" placeholder="" id="cartao_cartao_nome" name="cartao_cartao_nome" autocomplete="cc-name">
<span class="help-block erro">Este campo é obrigatório</span>
</div>
</div>
</div>
<div class="cartao-dados-adicionais">
<div class="clearfix">
<div class="span5">
<div class="control-group">
<div class="controls">
<label class="control-label nowrap" for="cartao_cartao_cvv">Cód. de Segurança</label>
<div class="input-append" style="margin-bottom: 0;">
<input type="tel" placeholder="CVV" class="cartao_cartao_cvv cartao_dados_cvv span7" id="cartao_cartao_cvv" autocomplete="cc-csc">
<span class="add-on" data-toggle="tooltip" data-placement="right" title="" data-original-title="Últimos 3 digitos no verso do cartão"><i class="icon-question-sign"></i></span>
</div>
<span class="help-block erro">Este campo é obrigatório</span>
</div>
</div>
</div>
<div class="span7">
<div class="control-group">
<div class="controls aguardar-valor">
<label class="control-label" for="cartao_cartao_parcelas">Parcelas</label>
<select id="cartao_cartao_parcelas" class="cartao_dados_parcelas span12">
<option value="">Digite o número do cartão</option>
</select>
<span class="help-block erro">Escolha uma opção de parcela</span>
</div>
</div>
</div>
</div>
<div class="clearfix">
<div class="control-group group_cartao_salvar" style="">
<div class="controls">
<label class="checkbox">
<input type="checkbox" class="cartao_salvar_check" id="cartao_check_salvar" name="payment_save_card">
Salvar cartão para compras futuras
</label>
</div>
</div>
</div>

        <div class="clearfix">
          <div class="control-group group_cartao_dados_titular">
            <div class="controls">
              <label class="checkbox">
                <input type="checkbox" class="cartao_dados_titular_check" id="cartao_check_dados_titular">
                <span class="cartao_check_dados_titular_pf cartao_dados_titular_pf ">Titular do cartão é diferente do cadastro</span>
                <span class="cartao_check_dados_titular_pj cartao_dados_titular_pj hide">Dados pessoais do titular do cartão</span>
              </label>
            </div>
          </div>
        </div>
        <div class="cartao_dados_titular hide">
          <div class="clearfix">
            <div class="span6">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_cpf">CPF do titular</label>
                  <input id="cartao_dono_cartao_cpf" type="text" class="cartao_dados_cpf input-cpf span12" value="" maxlength="14">
                </div>
              </div>
            </div>
            <div class="span6">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_data_nascimento">Data de Nascimento</label>
                  <input id="cartao_dono_cartao_data_nascimento" class="cartao_dados_nascimento input-data-nascimento span12" type="text" value="" maxlength="10">
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <div class="span6">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_telefone">Telefone</label>
                  <input id="cartao_dono_cartao_telefone" class="cartao_dados_telefone input-telefone span12" type="text" value="" maxlength="15">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix">
          <div class="control-group group_cartao_endereco">
            <div class="controls">
              <label class="checkbox">
                <input type="checkbox" class="cartao_endereco_check" id="cartao_check_dados_fatura">
                Endereço do titular diferente do de entrega
              </label>
            </div>
          </div>
        </div>
        <div class="cartao_dados_fatura hide">
          <div class="clearfix">
            <div class="span6">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_cep">CEP</label>
                  <input id="cartao_dono_cartao_cep" class="span12 input-cep cartao_endereco_cep" type="text" value="" maxlength="9">
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <div class="span9">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_rua">Endereço</label>
                  <input id="cartao_dono_cartao_rua" class="span12 cartao_endereco_rua" type="text" value="">
                </div>
              </div>
            </div>
            <div class="span3">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_numero">Número</label>
                  <input id="cartao_dono_cartao_numero" class="span12 cartao_endereco_numero" type="text" value="">
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <div class="span6">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_complemento">Complemento</label>
                  <input id="cartao_dono_cartao_complemento" class="span12 cartao_endereco_compl" type="text" value="">
                </div>
              </div>
            </div>
            <div class="span6">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_bairro">Bairro</label>
                  <input id="cartao_dono_cartao_bairro" class="span12 cartao_endereco_bairro" type="text" value="">
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <div class="span6">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_cidade">Cidade</label>
                  <input id="cartao_dono_cartao_cidade" class="span12 cartao_endereco_cidade" type="text" value="">
                </div>
              </div>
            </div>
            <div class="span6">
              <div class="control-group">
                <div class="controls">
                  <label class="control-label" for="cartao_dono_cartao_estado">Estado</label>
                  <select class="span12 cartao_endereco_estado" id="cartao_dono_cartao_estado">
                    <option value="">Selecione</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-right">
        <span>Valor</span>
        <h5 class="titulo cor-principal text-right pagamento-valor preco-carrinho-total">
          R$ 0,00
        </h5>
      </div>


<div class="payment-country-origin pull-right">
  <small class="muted">
    Esta compra está sendo feita no <strong>Brasil</strong>.
    <img src="https://cdn.awsli.com.br/production/static/loja/estrutura/v1/img/flags/24/BR.png" alt="BR">
  </small>
</div>
<div class="clearfix"></div>

    </div>

  </div>
</div>

                      </div>







                        <div class="li-box-payment li-box-payment-pagali-pix-32" data-minimum-value="2">



<div class="accordion-group pagali-pix pagamento_selecao_conteiner">
  <div class="accordion-heading" id="pagamento32">
    <span class="radio-conteiner">
      <input type="radio" name="forma_pagamento" id="radio-pagali-pix-32" data-code="pagali-pix" value="32">
    </span>
    <span class="forma-conteiner">
      <span class="helper"></span>
      
        <img src="https://cdn.awsli.com.br/production/static/loja/estrutura/v1/img/bandeiras/pagali-pix.png" alt="Pague com Pix">
        
      
      
    </span>
  </div>
  <div id="escolha-pagali-pix-32" class="mycollapse pagamento_selecao_info" style="display: none;">
    <div class="accordion-inner">
      
      <div class="text-right">
        <span>Valor</span>
        <h5 class="titulo cor-principal text-right pagamento-valor preco-carrinho-total">
          R$ 90,99
        </h5>
        
          
        
      </div>
    </div>
  </div>
</div>

                        </div>







                        <div class="li-box-payment li-box-payment-pagali-boleto-33" data-minimum-value="5">



<div class="accordion-group pagali-boleto pagamento_selecao_conteiner">
  <div class="accordion-heading" id="pagamento33">
    <span class="radio-conteiner">
      <input type="radio" name="forma_pagamento" id="radio-pagali-boleto-33" data-code="pagali-boleto" value="33">
    </span>
    <span class="forma-conteiner">
      <span class="helper"></span>
      
        <img src="https://cdn.awsli.com.br/production/static/loja/estrutura/v1/img/bandeiras/boleto.png" alt="Pague com Boleto Bancário">
      
      
    </span>
  </div>
  <div id="escolha-pagali-boleto-33" class="mycollapse pagamento_selecao_info" style="display: none;">
    <div class="accordion-inner">
      
      <div class="text-right">
        <span>Valor</span>
        <h5 class="titulo cor-principal text-right pagamento-valor preco-carrinho-total">
          R$ 90,99
        </h5>
        
          
        
      </div>
    </div>
  </div>
</div>

                        </div>












    <div class="li-box-payment li-box-payment-PAGAMENTOEXTERNO-19" data-minimum-value="0.0" style="display: none;">
      <div class="accordion-group PAGAMENTOEXTERNO pagamento_selecao_conteiner">
        <div class="accordion-heading" id="pagamento19">
          <span class="radio-conteiner">
            <input type="radio" name="forma_pagamento" id="radio-PAGAMENTOEXTERNO-19" data-code="PAGAMENTOEXTERNO" value="19">
          </span>
          <span class="forma-conteiner">
            <span class="helper"></span>
            <img src="https://cdn.awsli.com.br/production/static/loja/estrutura/v1/img/bandeiras/dinheiro.png" alt="">
          </span>
        </div>
        <div id="escolha-PAGAMENTOEXTERNO-19" class="mycollapse pagamento_selecao_info" style="display: none;">
          <div class="accordion-inner">
            <div class="text-right">
              <span>Valor</span>
              <h5 class="titulo cor-principal text-right pagamento-valor preco-carrinho-total">
                R$ 90,99
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>



                </div>
                <div id="exibirFormasPagamento" class="hide text-center" style="margin: -10px 0 25px;">
                  <a href="javascript:;" class="btn btn-small"><i class="icon-pencil"></i> Alterar forma de pagamento</a>
                </div>


                  <fieldset>
                    <div class="control-group checkbox  required">
                      <label for="id_politica_privacidade" class="control-label">
                        <div class="controls">
                          <input id="id_politica_privacidade" name="politica_privacidade" type="checkbox">
                        </div>
                        Li e concordo com os termos da <a class="politica-privacidade" href="//taymah.lojaintegrada.com.br/pagina/politica-de-privacidade.html" target="_blank">Política de Privacidade</a>
                        <p class="help-block hide">
                          <strong>Você não aceitou as políticas de privacidade</strong>
                        </p>
                      </label>
                    </div>
                  </fieldset>

                <div class="acao-editar" style="text-align: center;">
                  <button type="button" id="finalizarCompra" class="botao principal grande disabled" data-loading-text="&lt;i class='icon-refresh icon-animate'&gt;&lt;/i&gt; Finalizando..." autocomplete="off">
                    <i class="icon-ok"></i>Finalizar compra
                  </button>
                  <a href="/" id="continueShopping" class="botao grande mb-20" style="display: none;font-size: 19px;"><i class="icon-shopping-cart"></i>Continuar comprando</a>

                    <div class="selo-ssl hidden-phone">
                      <img src="https://cdn.awsli.com.br/production/static/img/struct/stamp_encryptssl_cart.png" alt="Compra 100% Segura">
                    </div>

                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <input type="hidden" name="cupom" id="inputCupom" value="">
        <input type="hidden" name="timestamp_token" value="2026-01-09T10:46:29.511247">
      </form>
    </div>

  </div>
