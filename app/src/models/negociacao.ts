import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {}

    public static converteDadosEntrada(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const er = /-/g;
        const date = new Date(dataString.replace(er, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
}