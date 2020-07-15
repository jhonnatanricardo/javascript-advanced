class ListaNegociacoes {
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    /**
     * Defensive programmation to avoid unauthorized modification of original array (skip "add" method to manipulate the attribute)
     */
    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
    }
}