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
        }
    },
    methods: {
        checkForm: function (e) {
          this.errors = [];
          
          console.log(isNaN(this.mvl))
    
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
          

    
          if (!this.errors.length) {
            return true;
          }
    
          e.preventDefault();
        },
        validEmail: function (email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }
      }
}