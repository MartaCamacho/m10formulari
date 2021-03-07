import InputNom from '../components/InputNom.vue';
import InputNum from '../components/InputNum.vue';
import InputCp from '../components/InputCp.vue';
import InputMail from '../components/InputMail.vue';
import InputPass from '../components/InputPass.vue';
import InputRepeatPass from '../components/InputRepeatPass.vue';

export default {
    name: 'Formulari',
    components: {
        InputNom,
        InputNum,
        InputCp,
        InputMail,
        InputPass,
        InputRepeatPass
      },
      data() {
        return {
            name: null,
            email: null,
            mvl: null,
            cp: null,
            password: null,
            repeatPass: null,
        }
    },
    methods: {
      checkInputs: function() {
        if(!this.name || !this.email || !this.mvl || !this.cp || !this.password || !this.repeatPass) {
          return true 
        } else {
          return false
        }
      }
    }
  }