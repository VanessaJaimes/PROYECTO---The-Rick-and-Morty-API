const main = Vue.createApp({
  data() {
    return {
     user: "",
     clave: "",
     gmail: "",
     loginExitoso:false,
     registroExitoso: false,
     usuarios: [],


  };
},

methods: {
  login() {
   let usuario = this.usuarios.find(u => u.user === this.user && u.clave === this.clave);
    if(usuario){
      this.loginExitoso = true;
      alert("Login Exitoso");
    }else{
      this.loginExitoso = false;
      alert("Usuario o Clave Incorrectos")
      this.user = "";
      this.clave = "";
    }
  },
  

  registro(){
    if(this.user && this.clave && this.gmail){
      this.usuarios.push({
         user: this.user,
         clave: this.clave,
         gmail: this.gmail
      });
      alert("Usuario Registrado Exitosamente");
      this.registroExitoso = true;
      this.user = "";
      this.clave = "";
      this.gmail = "";
   
    }else{
      alert("Debe completar todos los campos");
      this.registroExitoso = false;
    }
  },


}
});

main.mount(".main");