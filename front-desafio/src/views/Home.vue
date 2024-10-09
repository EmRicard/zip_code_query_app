<template>
    <TelaLogin />
</template>



<script>

import TelaLogin from '../components/TelaLogin.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: 'Home',
    components: {
        TelaLogin
    }
});
</script>
