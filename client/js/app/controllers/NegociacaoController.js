class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($("#negociacoesView"));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event){
        event.preventDefault();
        let negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
    }

    _criaNegociacao(){
        return new Negociacao(DateHelper.textToDate(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }

    _limpaFormulario () {
        document.querySelector("form").reset();
        this._inputData.focus();
    }
}