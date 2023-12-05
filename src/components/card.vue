<!-- SEARCH.VUE  -->
<script>

export default{

  name: "card", // assegnamo un nome al componente
  props: {
      info: Object
  }
}

</script>

<template>
  <div>
    <p>{{ info.title }}</p>

  </div>
  
</template>

<style scoped>
h1{
  color: white;
}
</style>