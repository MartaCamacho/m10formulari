export default {
    name: "InputCp",
    props: ['cp', 'placeholder', 'type'],
    data() {
        return {
            errors: [],
        }
    },
    methods: {
        checkCp: function (e) {
          this.errors = []
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
        cleanErrors: function () {
            this.errors = []
        },
    },
}