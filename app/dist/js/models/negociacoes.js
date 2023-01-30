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
    ehIgual(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.listaNegociacoes());
    }
}
//# sourceMappingURL=negociacoes.js.map