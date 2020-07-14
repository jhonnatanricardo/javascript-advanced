class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes(model => 
            this._negociacoesView.update(model)
        );
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event){
        event.preventDefault();
        let negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);

        this._mensagem.texto = "Negociacao adicionada com sucesso";
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    remove(){
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = "Negociações apagadas com sucesso";
        this._mensagemView.update(this._mensagem);
    }

    _criaNegociacao(){
        return new Negociacao(DateHelper.textToDate(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }

    _limpaFormulario () {
        document.querySelector("form").reset();
        this._inputData.focus();
    }
}