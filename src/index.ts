// Declaração das constantes para os tipos de combustível
const GASOLINA: string = "GASOLINA";
const ETANOL: string = "ETANOL";

// Classe Combustivel
class Combustivel {
  tipo: string;
  preco: number;

  constructor(tipo: string, preco: number) {
    this.tipo = tipo;
    this.preco = preco;
  }
}

// Classe Posto
class Posto {
  nome: string;
  gasolina: Combustivel;
  etanol: Combustivel;

  constructor(nome: string, precoGasolina: number, precoEtanol: number) {
    this.nome = nome;
    this.gasolina = new Combustivel(GASOLINA, precoGasolina);
    this.etanol = new Combustivel(ETANOL, precoEtanol);
  }

  // Método para sugerir qual combustível é mais vantajoso
  sugereCombustivel(): string {
    const proporcao = this.etanol.preco / this.gasolina.preco;
    const vantagem = proporcao < 0.7 ? "ETANOL" : "GASOLINA";
    
    return `No posto ${this.nome}, a proporção Etanol/Gasolina é de ${(proporcao * 100).toFixed(2)}%. É mais vantajoso abastecer com ${vantagem}.`;
  }
}

// Função para exibir os resultados na página
function exibirResultados(): void {
    // Instanciando três postos com valores para gasolina e etanol
    const posto1 = new Posto("Posto Shell", 5.50, 3.70);
    const posto2 = new Posto("Posto Box", 5.30, 3.90);
    const posto3 = new Posto("Posto Ipiranga", 5.80, 4.00);
    
    // Selecionando o elemento HTML para mostrar os resultados
    const resultadosDiv = document.getElementById("resultados");
    
    if (resultadosDiv) {
        resultadosDiv.innerHTML = `
            <div class="posto">${posto1.sugereCombustivel()}</div>
            <div class="posto">${posto2.sugereCombustivel()}</div>
            <div class="posto">${posto3.sugereCombustivel()}</div>
        `;
    }
}

// Garante que o código execute após o carregamento da página
document.addEventListener("DOMContentLoaded", exibirResultados);
