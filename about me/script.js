// Carrega o som de tecla
var sound = new Howl({
    src: ['key_sound.mp3']
  });
  
  // Obtém a hora atual
  var currentHour = new Date().getHours();
  
  // Define a saudação de acordo com a hora atual
  var greeting;
  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Olá, bom dia";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Olá, boa tarde";
  } else {
    greeting = "Olá, boa noite";
  }
  
  // Cria o efeito de digitação
  var typed = new Typed('#welcome-message', {
    strings: [greeting + " :)"],
    typeSpeed: 70, // Ajuste a velocidade de digitação aqui (quanto maior o número, mais lento)
    backSpeed: 0,
    loop: false,
    showCursor: false,
    preStringTyped: function(pos, self) { sound.play(); },
    onStringTyped: function(pos, self) { 
      sound.stop();
      // Adiciona um atraso antes de remover a tela escura
      setTimeout(function() {
        // Remove a tela escura e mostra a tela principal
        document.getElementById("welcome-message").style.display = "none";
        document.body.style.backgroundColor = "#FFA500";
      }, 2000); // Ajuste o tempo de espera em milissegundos aqui (2000 = 2 segundos)
    }
  });
  