const app = Vue.createApp({
    data() {
      return {
        users: [],
        userInput: '',
        passwordInput: ''
      }
    },
    methods: {
      signIn(e) {
        e.preventDefault();
        //console.log(this.users);
        this.users.forEach(element => {
          console.log(element);
          console.log(this.userInput);
          if (element.login.username == this.userInput && element.login.password == this.passwordInput) {
            window.location.href = '../tabla.html'
          }
        });
  
      }
    },
    async mounted() {
  
    },
    created() {
      this.getUsers()
    },
  });
  app.mount('#myApp');