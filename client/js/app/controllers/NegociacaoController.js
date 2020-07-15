class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($("#negociacoesView")), 
            'adiciona', 'esvazia');
        
        this._mensagem = new Bind(
            new Mensagem(), 
            new MensagemView($("#mensagemView")), 
            'texto');
        
    }

    adiciona(event){
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = `Negociacao criada com sucesso [${new Date()}]`;

        this._limpaFormulario();
    }

    importaNegociacoes(){
        
        let service = new NegociacaoService();

        service.obterNegociacoesDaSemana((erro, negociacoes) => {
            
            if(erro){
                this._mensagem.texto = erro;
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociações importadas com sucesso";

        });

    }

    apaga(){
        this._mensagem.texto = "Negociações apagadas com sucesso";
        this._listaNegociacoes.esvazia();
    }

    _criaNegociacao(){
        return new Negociacao(DateHelper.textToDate(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }

    _limpaFormulario () {
        document.querySelector("form").reset();
        this._inputData.focus();
    }
}