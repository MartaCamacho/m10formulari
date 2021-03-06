<template>
<span>
    <p class="d-flex justify-content-between w-50">
      <label for="name">Nom</label>
      <input
        :name="name"
        :type="type"
        :placeholder="placeholder"
        @focus="cleanErrors"
        @blur="checkName"
        @input="$emit('input', $event.target.value)"
      >
    </p>
    <div v-if="errors.length">
      <span v-for="error in errors" :key="error">{{ error }}</span>
    </div>
  </span>
</template>
<script src="../scripts/InputNom.js"></script> 
<style scoped>
@import url(../styles/css/Input.css);
</style>