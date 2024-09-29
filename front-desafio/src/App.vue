<script setup lang="ts">

</script>


<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">Nome</label>
        <input type="text" class="form-control" id="exampleInputName">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Senha</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  
</template>



<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

</style>
