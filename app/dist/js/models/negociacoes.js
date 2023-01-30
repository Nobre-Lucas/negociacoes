export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listaNegociacoes() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
