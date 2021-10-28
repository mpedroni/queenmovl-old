<template>
  <span id="logo">
    <img src="../../assets/logo.svg" alt="Queenmovl Logo">
    queenmovl
  </span>
</template>

<style scoped>
@import url('../../styles/colors.css');

#logo {
  display: inline-flex;
  align-items: center;
  font-family: monospace;
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary);
}

#logo img {
  width: 56px;
  height: auto;
  margin-right: 5px;
}
</style>
