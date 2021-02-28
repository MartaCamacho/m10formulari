<template>
   <form
  @submit="checkForm"
  method="post"
  novalidate="true"
  class="d-flex flex-column align-items-center form w-100 h-100"
>

  <p class="d-flex justify-content-between w-50">
    <label for="name">Nom</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>

  <p class="d-flex justify-content-between w-50">
    <label for="name">Mòbil</label>
    <input
      id="mvl"
      v-model="mvl"
      type="text"
      name="mvl"
    >
  </p>

  <p class="d-flex justify-content-between w-50">
    <label for="name">Codi Postal</label>
    <input
      id="cp"
      v-model="cp"
      type="text"
      name="cp"
    >
  </p>

  <p class="d-flex justify-content-between w-50">
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      type="email"
      name="email"
    >
  </p>

  <p class="d-flex justify-content-between w-50">
    <label for="name">Password</label>
    <input
      id="password"
      v-model="password"
      type="password"
      name="password"
    >
  </p>

  <p class="d-flex justify-content-between w-50">
    <label for="name">Confirm password</label>
    <input
      id="repeatPass"
      v-model="repeatPass"
      type="password"
      name="repeatPass"
    >
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
      class="text-white submit-button"
    >
  </p>
    <p v-if="errors.length">
    <b>Por favor, corrige los siguientes errores:</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>

</form>

</template>
<script src="../scripts/Input.js"></script> 
<style scoped>
@import url(../styles/css/Input.css);
</style>