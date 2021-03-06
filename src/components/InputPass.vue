<template>
   <span>
  <p class="d-flex justify-content-between w-50">
    <label for="name">Password</label>
    <input
      :name="password"
      :type="type"
      :placeholder="placeholder"
      @focus="cleanErrors"
      @blur="checkPass"
      @input="$emit('input', $event.target.value)"
    >
  </p>
  <div v-if="errors.length">
    <span v-for="error in errors" :key="error">{{ error }}</span>
  </div>
</span>
</template>
<script src="../scripts/InputPass.js"></script> 