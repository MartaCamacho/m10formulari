export default {
    name: "InputMail",
    props: ['email',  'placeholder', 'type'],
    data() {
        return {
            errors: [],
        }
    },
    methods: {
        checkMail: function (e) {
          this.errors = []
          if (!this.email) {
            this.errors.push('Email requerido.');
          } else if (!this.validEmail(this.email)) {
            this.errors.push('El email no es válido.');
          }
          if (!this.errors.length) {
            return true;
          }
          e.preventDefault();
        },
        cleanErrors: function () {
            this.errors = []
        },
        validEmail: function (email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }
    },
}