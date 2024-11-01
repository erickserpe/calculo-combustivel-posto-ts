const GASOLINA: string = "GASOLINA";
const ETANOL: string = "ETANOL";

class Combustivel {
  tipo: string;
  preco: number;

  constructor(tipo: string, preco: number) {
    this.tipo = tipo;
    this.preco = preco;
  }
}

class Posto {
  nome: string;
  gasolina: Combustivel;
  etanol: Combustivel;

  constructor(nome: string, precoGasolina: number, precoEtanol: number) {
    this.nome = nome;
    this.gasolina = new Combustivel(GASOLINA, precoGasolina);
    this.etanol = new Combustivel(ETANOL, precoEtanol);
  }

  sugereCombustivel(): string {
    const proporcao = this.etanol.preco / this.gasolina.preco;
    const vantagem = proporcao < 0.7 ? "ETANOL" : "GASOLINA";
    
    return `No posto ${this.nome}, a proporção Etanol/Gasolina é de ${(proporcao * 100).toFixed(2)}%. É mais vantajoso abastecer com ${vantagem}.`;
  }
}

function exibirResultados(): void {
    const posto1 = new Posto("Posto Shell", 5.50, 3.70);
    const posto2 = new Posto("Posto Box", 5.30, 3.90);
    const posto3 = new Posto("Posto Ipiranga", 5.80, 4.00);
    
    const resultadosDiv = document.getElementById("resultados");
    
    if (resultadosDiv) {
        resultadosDiv.innerHTML = `
            <div class="posto">${posto1.sugereCombustivel()}</div>
            <div class="posto">${posto2.sugereCombustivel()}</div>
            <div class="posto">${posto3.sugereCombustivel()}</div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", exibirResultados);
