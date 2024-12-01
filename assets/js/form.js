document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('status').innerText = 'Mensagem enviada com sucesso!';
      this.reset(); // Limpa os campos do formulário
    } else {
      document.getElementById('status').innerText = 'Por favor, preencha todos os campos.';
      document.getElementById('status').style.color = 'red';
    }
  });