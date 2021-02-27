<template>
   <form
  @submit="checkForm"
  method="post"
  novalidate="true"
>

  <p v-if="errors.length">
    <b>Por favor, corrige los siguientes errores:</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="name">Nom</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>

  <p>
    <label for="name">Mòbil</label>
    <input
      id="mvl"
      v-model="mvl"
      type="text"
      name="mvl"
    >
  </p>

  <p>
    <label for="name">Codi Postal</label>
    <input
      id="cp"
      v-model="cp"
      type="text"
      name="cp"
    >
  </p>

  <p>
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      type="email"
      name="email"
    >
  </p>

  

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>
<script src="../scripts/Input.js"></script> 