const app = Vue.createApp({
    data() {
        return {
            userscopia: [],
            tarjetas: [],
            userInput: '',
            passwordInput: ''
        }
    },
    methods: {
        async getTarjetas() {
            const rest = await fetch('https://rickandmortyapi.com/api/character');
            const data = await rest.json();
            console.log(data);
            this.tarjetas = data.results;
        }
    },
    async mounted() {

    },
    created() {
        this.getTarjetas()
    },
});
app.mount('#myApp');