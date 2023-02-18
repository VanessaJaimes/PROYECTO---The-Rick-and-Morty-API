new Vue({
    el: ".divlogin",
    data: {
        form: {
            type: 0, // 0 = Login , 1 = Registro 2- Recuperar contraseña
            email: "",
            password: "",
            passwordos: ""
        },
        usuarios: []
    },
    methods: {
        sendForm() {
            if (this.validaType()) {
                console.log(this.form);
            }
        },
        validaType() {
            if (this.form.type == 0 && !this.validaEmail && !this.validaPassword) {
                return true;
            }
            else if (this.form.type == 1 && !this.validaEmail && !this.validaRepetirPassword) {
                return true;
            }
            else if (this.form.type == 2 && !this.validaEmail) {
                return true;
            }
            return false;
        },
        guardarUser() {
            if (this.form.type == 1) {
                console.log(this.form.email)
                console.log(this.form.password)
                this.usuarios.push({ email: this.form.email, password: this.form.password });
                console.log(this.usuarios);
            }
            if (this.form.type == 0) {
                this.usuarios.forEach(usuario => {
                    if (usuario.email==this.form.email && usuario.password==this.form.password) {
                        console.log('Credenciales Correctas');
                        location.href="../cards.html"
                    }
                });
            }

        }
    },
    computed: {
        validaEmail() {
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (exp.test(this.form.email)) {
                return false;
            } else {
                return true;
            }
        },
        validaPassword() {
            var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            if (exp.test(this.form.password)) {
                return false;
            } else {
                return true;
            }
        },
        validaRepetirPassword() {
            if (this.form.password == this.form.passwordos) {
                return false;
            } else {
                return true;
            }
        },
        title() {
            return (this.form.type == 0) ? 'Login' : (this.form.type == 1) ? 'Registro' : 'Recuperar contraseña';
        }
    }
});