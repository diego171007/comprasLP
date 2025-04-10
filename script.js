// Array para armazenar os itens do carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function addToCart(nomeProduto, precoProduto) {
  // Adiciona o produto ao carrinho
  carrinho.push({
    nome: nomeProduto,
    preco: precoProduto
  });
  
  // Salva no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
  // Atualiza o contador
  atualizarCarrinho();
  
  // Feedback
  alert(`✔ ${nomeProduto} adicionado!\nTotal: R$ ${calcularTotal().toFixed(2)}`);
}

function atualizarCarrinho() {
  const contador = document.getElementById('contador-carrinho');
  if (contador) {
    contador.textContent = carrinho.length;
    // Adiciona animação
    contador.style.transform = 'scale(1.5)';
    setTimeout(() => {
      contador.style.transform = 'scale(1)';
    }, 300);
  }
}

function calcularTotal() {
  return carrinho.reduce((total, item) => total + item.preco, 0);
}

function verCarrinho() {
  if (carrinho.length === 0) {
    alert("🛒 Seu carrinho está vazio!");
    return;
  }
  
  let lista = "🛒 SEU CARRINHO:\n\n";
  carrinho.forEach((item, index) => {
    lista += `${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
  });
  
  lista += `\n💵 TOTAL: R$ ${calcularTotal().toFixed(2)}`;
  
  const finalizar = confirm(`${lista}\n\nDeseja finalizar compra?`);
  
  if (finalizar) {
    alert("Compra finalizada! Obrigado por comprar na Linkin Park Store!");
    carrinho = [];
    localStorage.removeItem('carrinho');
    atualizarCarrinho();
  }
}

// Atualiza o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinho);