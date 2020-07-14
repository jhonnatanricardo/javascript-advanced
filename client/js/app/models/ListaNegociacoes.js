class ListaNegociacoes {
    constructor(armadilha){
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    /**
     * Defensive programmation to avoid unauthorized modification of original array (skip "add" method to manipulate the attribute)
     */
    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
    }
}