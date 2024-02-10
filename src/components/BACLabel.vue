<template>
    <v-label :class="bacClass()">{{ BAC.toFixed(2) }}</v-label>
</template>

<script>

export default {
  name: 'BACLabel',
  props: {
     BAC: Number,
  },
  methods: {
      bacClass() {
          if (this.BAC < 0.08) {
              return "green-bac";
          } else if (this.BAC >= 0.08 && this.BAC < 0.2) {
              return "yellow-bac";
          } else if (this.BAC >= 0.2 && this.BAC < 0.3) {
              return "orange-bac";
          } else if (this.BAC >= 0.3) {
              return "red-bac";
          }
      }
  },
  data: () => ({
    ecosystem: [ ],
  }),
}
</script>

<style scoped>
.green-bac {
    font-weight: bold;
    font-size: 24pt;
    color: lime;
}

.yellow-bac {
    font-weight: bold;
    font-size: 24pt;
    color: #ffee00;
}

.orange-bac {
    font-weight: bold;
    font-size: 24pt;
    color: orange;
}

.red-bac {
    font-weight: bold;
    font-size: 24pt;
    color: red;
}

</style>
