<template>
   <span class="d-flex justify-content-between align-items-center flex-column w-100">
    <p class="d-flex justify-content-between">
    <label for="name">Confirm password</label>
    <input
      :name="repeatPass"
      :type="type"
      :placeholder="placeholder"
      @focus="cleanErrors"
      @blur="checkRepeat"
      @input="$emit('input', $event.target.value)"
    >
  </p>
  <div class="theDiv">
    <span v-if="errors.length">
      <span v-for="error in errors" :key="error">{{ error }}</span>
    </span>
  </div>
</span>
</template>
<script src="../scripts/InputRepeatPass.js"></script> 
<style>
@import url(../styles/css/Formulari.css);
</style>