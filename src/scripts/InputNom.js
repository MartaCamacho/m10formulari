export default {
    name: "InputNom",
    props: ['name', 'placeholder', 'type'],
    data() {
        return {
            errors: [],
        }
    },
    methods: {
        checkName: function (e) {
          this.errors = []
          if (!this.name || this.name == "") {
            this.errors.push("Nombre requerido.");
          } else if (this.name.length < 6 || this.name.length > 13) {
            this.errors.push('El nombre debe tener entre 6 y 13 caracteres.');
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