import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {
    private negociacoes: Negociacao[] = [];

    public adicionaNegociacao(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public listaNegociacoes(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}