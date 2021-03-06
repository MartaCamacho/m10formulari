<template>
   <span>
  <p class="d-flex justify-content-between w-50">
    <label for="name">Codi Postal</label>
    <input
      :name="cp"
      :type="type"
      :placeholder="placeholder"
      @focus="cleanErrors"
      @blur="checkCp"
      @input="$emit('input', $event.target.value)"
    >
  </p>
  <div v-if="errors.length">
    <span v-for="error in errors" :key="error">{{ error }}</span>
  </div>
</span>

</template>
<script src="../scripts/InputCp.js"></script> 