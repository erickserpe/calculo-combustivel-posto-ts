// Declaração das constantes para os tipos de combustível
var GASOLINA = "GASOLINA";
var ETANOL = "ETANOL";
// Classe Combustivel
var Combustivel = /** @class */ (function () {
    function Combustivel(tipo, preco) {
        this.tipo = tipo;
        this.preco = preco;
    }
    return Combustivel;
}());
// Classe Posto
var Posto = /** @class */ (function () {
    function Posto(nome, precoGasolina, precoEtanol) {
        this.nome = nome;
        this.gasolina = new Combustivel(GASOLINA, precoGasolina);
        this.etanol = new Combustivel(ETANOL, precoEtanol);
    }
    // Método para sugerir qual combustível é mais vantajoso
    Posto.prototype.sugereCombustivel = function () {
        var proporcao = this.etanol.preco / this.gasolina.preco;
        var vantagem = proporcao < 0.7 ? "ETANOL" : "GASOLINA";
        return "No posto ".concat(this.nome, ", a propor\u00E7\u00E3o Etanol/Gasolina \u00E9 de ").concat((proporcao * 100).toFixed(2), "%. \u00C9 mais vantajoso abastecer com ").concat(vantagem, ".");
    };
    return Posto;
}());
// Função para exibir os resultados na página
function exibirResultados() {
    // Instanciando três postos com valores para gasolina e etanol
    var posto1 = new Posto("Posto Shell", 5.50, 3.70);
    var posto2 = new Posto("Posto Box", 5.30, 3.90);
    var posto3 = new Posto("Posto Ipiranga", 5.80, 4.00);
    // Selecionando o elemento HTML para mostrar os resultados
    var resultadosDiv = document.getElementById("resultados");
    if (resultadosDiv) {
        resultadosDiv.innerHTML = "\n            <div class=\"posto\">".concat(posto1.sugereCombustivel(), "</div>\n            <div class=\"posto\">").concat(posto2.sugereCombustivel(), "</div>\n            <div class=\"posto\">").concat(posto3.sugereCombustivel(), "</div>\n        ");
    }
}
// Garante que o código execute após o carregamento da página
document.addEventListener("DOMContentLoaded", exibirResultados);
