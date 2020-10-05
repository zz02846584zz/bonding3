<template>
<<<<<<< HEAD
  <div class="material">
    <MaterialItem class="item" v-for="n in 10" :key="n" />
  </div>
</template>

<script>
import MaterialItem from 'components/Material/Item'

export default {
  components: {
    MaterialItem
  }
}
</script>

<style lang="scss" scoped>
.material {
  padding: 20px;
}
.item {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid $lighter2;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
}
</style>
=======
  <div>

  </div>
</template>
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
