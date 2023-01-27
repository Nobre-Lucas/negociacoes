import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adicionaNegociacao(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public listaNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }
}