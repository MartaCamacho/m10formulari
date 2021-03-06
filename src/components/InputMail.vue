<template>
<span>
  <p class="d-flex justify-content-between w-50">
    <label for="email">Email</label>
    <input
      :name="email"
      :type="type"
      :placeholder="placeholder"
      @focus="cleanErrors"
      @blur="checkMail"
      @input="$emit('input', $event.target.value)"
    >
  </p>
  <div v-if="errors.length">
    <span v-for="error in errors" :key="error">{{ error }}</span>
  </div>
  </span>
</template>
<script src="../scripts/InputMail.js"></script> 