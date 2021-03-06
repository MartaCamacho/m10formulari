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
            this.errors.push('Movil requerido.');
          } else if (isNaN(this.mvl) === true) {
            this.errors.push('El movil debe ser solo números.');
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