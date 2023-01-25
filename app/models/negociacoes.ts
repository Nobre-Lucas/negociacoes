import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adicionaNegociacao(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    listaNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }
}