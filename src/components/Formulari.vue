<template>
  <div >
    <form
      @submit="checkForm()"
      method="post"
      novalidate="true"
      class="d-flex flex-column align-items-center form w-100 h-100"
    >
      <InputNom :name="name" type="text" v-model="name" placeholder="Nom"/>
      <InputNum :mvl="mvl" type="text" v-model="mvl" placeholder="Nº de teléfono"/>
      <InputCp :cp="cp" type="text" v-model="cp" placeholder="C.P." />
      <InputMail :email="email" type="email" v-model="email" placeholder="E-mail" />
      <InputPass :password="password" type="password" v-model="password" placeholder="Contraseña"/>
      <InputRepeatPass :repeatPass="repeatPass" type="password" v-model="repeatPass" placeholder="Repite tu contraseña"/>
      <p>
        <input
        type="submit"
        value="Submit"
        class="text-white submit-button"
        :disabled="checkInputs()"
        @click.prevent="checkForm"
        >
      </p> 
    </form>
  </div>
</template>

<script src="../scripts/Formulari.js"></script>

<style>
@import url(../styles/css/Formulari.css);
</style>
