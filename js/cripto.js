const app = new Vue({
    el: '#myApp',
    data() {
        return {
            ahorro: false,
            credito: false
        }
    },
    methods: {
        compraRickPotins(){
            if (this.ahorro && this.credito) {
                alert("Solo puede seleccionar una cuenta para la compra")
            } else if (this.ahorro) {
                alert("Confirmacion de compra con cuenta de ahorro")
            } else if (this.credito) {
                alert("Confirmacion de compra con cuenta de credito")
            }
        }
    }

});

app.mount('#myApp')