<template>
  <section class="container">
    <div>user--id {{ id }}</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id:this.$route.params.id
    }
  },
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },
  created() {
  },
};
</script>
