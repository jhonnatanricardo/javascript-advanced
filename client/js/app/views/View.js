class View {
    constructor(elemento){
        this._elemento = elemento;
    }

    template(){
        throw new Error("You must implement _template method.");
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}