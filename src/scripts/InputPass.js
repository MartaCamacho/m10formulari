export default {
    name: "InputPass",
    props: ['password', 'placeholder', 'type'],
    data() {
        return {
            errors: [],
        }
    },
    methods: {
        checkPass: function (e) {
          this.errors = []
          if(!this.password){
            this.errors.push('Contraseña requerida.');
          } else if (!this.validPassword(this.password)) {
            this.errors.push('La contraseña debe tener entre 6 y 13 caracteres y contener mayúsculas y minúsculas.');
          }
          if (!this.errors.length) {
            return true;
          }
          e.preventDefault();
        },
        validPassword: function (password) {
          var re = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,13}$/;
          return re.test(password);
        },
        cleanErrors: function () {
            this.errors = []
        },
    },
}