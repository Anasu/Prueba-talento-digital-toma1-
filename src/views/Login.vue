<template>
  <div class="formulario">
    <div class="formulario__recuadro border">
      <h2 class="formulario__titulo">Login Usuarios</h2>
      <b-form @submit="onSubmit" class="formulario__entradas">
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="email"
            required
            placeholder="Ingrese email"
            class="formulario__entradas--margin"
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          id="input-group-2" 
          label="Contraseña:" 
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Ingrese contraseña"
            class="formulario__entradas--margin"
          ></b-form-input>
        </b-form-group>
        <p class="formulario__entradas--margin">
          Ingrese sus credenciales de usuario.</p>
        <b-button 
          type="submit" 
          variant="primary" 
          class="formulario__boton"
        >Ingresar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      ...mapActions([
      'postLogin',
      ]),
      onSubmit(evt) 
      {
        evt.preventDefault();
        this.postLogin(this.form.username, this.form.password).then(()=>{
          this.$router.push('/'); 
        }
        );

        console.log(JSON.stringify(this.form))
      },
      reset(evt) 
      {
        evt.preventDefault()
        // Resetea los valores de form
        this.form.username = ''
        this.form.password = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.formulario {
  display: flex;
  justify-content: center;

  &__recuadro {
    padding: 2rem 5rem;
  }

  &__titulo {
    margin-bottom: 3rem;
  }

  &__entradas {
    text-align: left;

    &--margin {
      margin-bottom: 2rem;
    }
  }

  &__boton {
    min-width: 100%;
  }
}
</style>