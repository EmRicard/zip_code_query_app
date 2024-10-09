<script lang="ts">

import CriacaoCadastro from "./components/CriacaoCadastro.vue";
import TelaLogin from "./components/TelaLogin.vue";

export default {
  components: {
    CriacaoCadastro: CriacaoCadastro,
    TelaLogin: TelaLogin
  }
}
</script>

<template>

  <router-view />

</template>