document.addEventListener("DOMContentLoaded", () => {

    const reglas = { "e":"enter", "i":"imes", "a":"ai", "o":"ober", "u":"ufat" };
    
    function validarTexto(texto) {
      const caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
      const mayusculas = /[A-Z]/g;  
      const vacio = "";  
        
      if(texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return true; 
      } else if (texto === vacio) {
        alert("Ingrese un mensaje para encriptar");
        return true;
      } else {
        return false;
      }
    }
    
    function encriptar(texto) {
      let encriptado = texto;
      for (const key in reglas) {
        encriptado = encriptado.replaceAll(key, reglas[key]);
      }
      return encriptado;
    }
  
    function desencriptar(texto) {
      let desencriptado = texto;
      for (const key in reglas) {
        desencriptado = desencriptado.replaceAll(reglas[key], key);
      }
      return desencriptado;
    }
  
    document.querySelector("#btn-encriptar").addEventListener("click", () => {
      const textoIngresado = document.querySelector("#input-texto").value;
      if (!validarTexto(textoIngresado)) {
        document.querySelector("#msg").value = encriptar(textoIngresado);
      }
    });
  
    document.querySelector("#btn-desencriptar").addEventListener("click", () => {
      const textoIngresado = document.querySelector("#input-texto").value;
      document.querySelector("#msg").value = desencriptar(textoIngresado);
    });
  
    document.querySelector("#btn-copy").addEventListener("click", () => {
      const copiado = document.querySelector("#msg").value;
      navigator.clipboard.writeText(copiado).then(() => {
        document.querySelector("#input-texto").value = "";
        alert("Texto copiado al portapapeles");
      });
    });
  });
  