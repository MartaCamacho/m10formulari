export default {
    name: "InputNum",
    props: ['mvl', 'placeholder', 'type'],
    data() {
        return {
            errors: [],
        }
    },
    methods: {
        checkNum: function (e) {
          this.errors = []
          if (!this.mvl) {
            this.errors.push('Móvil requerido.');
          } else if (isNaN(this.mvl) === true) {
            this.errors.push('El móvil debe ser solo números.');
          } else if (this.mvl.length !== 9 ) {
            this.errors.push('El móvil debe tener 9 caracteres.');
          }
          if (!this.errors.length) {
            return true;
          }
          e.preventDefault();
        },
        cleanErrors: function () {
            this.errors = []
        },
    },
}