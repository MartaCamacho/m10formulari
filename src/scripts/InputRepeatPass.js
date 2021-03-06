export default {
    name: "InputRepeatPass",
    props: ['repeatPass',  'placeholder', 'type'],
    data() {
        return {
            errors: [],
        }
    },
    methods: {
        checkRepeat: function (e) {
          this.errors = []
          if(!this.repeatPass || this.repeatPass != this.password){
            this.errors.push('Las contraseñas no coinciden.');
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