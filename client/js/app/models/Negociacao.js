class Negociacao{
    constructor(data, quantidade, valor){
        // Break reference with the original instance of the attribute to avoid modification undesirable
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        /**
         * Freeze attributes of this class, that attributes must be "read-only" after instantiation.
         * [Warning] This Freeze function does not apply to avoid modifications on attributes fired by his own methods (eg.: this.data.setDate(X))
         */
        Object.freeze(this);
    }

    get data(){

        //return this._data;

        // Avoid attibute modification by using attribute methods (eg.: this.data.setDate(X))
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}