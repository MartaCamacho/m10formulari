export default {
    name: "Input",
   /*  props: {errors: []}, */
    data() {
        return {
            errors: [],
            name: null,
            email: null,
            mvl: null,
            cp: null,
            password: null,
            repeatPass: null,
        }
    },
    methods: {
        checkForm: function (e) {
          this.errors = [];
    
          if (!this.name) {
            this.errors.push("Nombre requerido.");
          } else if (this.name.length < 6 || this.name.length > 13) {
            this.errors.push('El nombre debe tener entre 6 y 13 caracteres.');
          }
          if (!this.email) {
            this.errors.push('Email requerido.');
          } else if (!this.validEmail(this.email)) {
            this.errors.push('El email no es válido.');
          }
          if (!this.mvl) {
            this.errors.push('Movil requerido.');
          } else if (isNaN(this.mvl) === true) {
            this.errors.push('El movil debe ser solo números.');
          }
          if (!this.cp) {
            this.errors.push('Código postal requerido.');
          } else if (isNaN(this.cp) === true) {
            this.errors.push('El cp debe ser solo números.');
          }
          if(!this.password){
            this.errors.push('Contraseña requerida.');
          } else if (!this.validPassword(this.password)) {
            this.errors.push('La contraseña debe tener entre 6 y 13 caracteres y contener mayúsculas y minúsculas.');
          }

          if(!this.repeatPass || this.repeatPass != this.password){
            this.errors.push('Las contraseñas no coinciden.');
          }
          

    
          if (!this.errors.length) {
            return true;
          }
    
          e.preventDefault();
        },
        validEmail: function (email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        },
        validPassword: function (password) {
          var re = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,13}$/;
          return re.test(password);
        }
      }
}