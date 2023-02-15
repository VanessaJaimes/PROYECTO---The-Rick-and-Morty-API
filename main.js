const usuarios= [
  

];


  const main = Vue.createApp({
      data() {
        return {
         user: "",
         clave: "",
         gmail: "",
         loginExitoso:false,
         registroExitoso: false,

  
         
          
        }
      },
      methods: {
        login() {
         alert("logn")
        },
        
  
        registro(){
          alert("registro")
        },
  
  
      }
 
    });
  
    main.mount(".main");