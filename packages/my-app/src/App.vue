
<template>
  <my-input v-model="text"></my-input>
  <p>{{ text }}</p>
</template>
<script>
 import { MyInput } from '../../vue-library/lib/index';
 import { defineComponent } from 'vue';
  export default defineComponent({
    components: { MyInput },
    data() {
    return {
      text: "مقدار پیش فرض"
    }
    }
  });
</script>