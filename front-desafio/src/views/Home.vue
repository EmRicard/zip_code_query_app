<template>
    <TelaLoguin />
</template>



<script>

import TelaLoguin from '../components/TelaLoguin.vue';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    name: 'Home',
    components: {
        TelaLoguin
    }
});
</script>




