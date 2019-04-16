<template>
  <section class="container">
    <div>user--id</div>
  </section>
</template>

<script>
export default {
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
};
</script>
