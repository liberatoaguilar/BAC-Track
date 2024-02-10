<template>
    <v-btn block @click="clickEvent" class="button">
        <v-container>
            <v-row class="text-center">
                <v-col cols=12>
                    <img width="60px" :src="image" />
                </v-col>
                <v-col cols=12>
                    <v-label>Remove</v-label>
                </v-col>
            </v-row>
        </v-container>
    </v-btn>
</template>

<script>

export default {
  name: 'ClearDrink',
  props: {
     image: String,
  },
  methods: {
      clickEvent() {
          this.$emit('removeDrink');
      }
  },
}
</script>

<style scoped>
.icon {
    height: 20px;
    width: 20px;
    margin-right: 5px;
}

.button {
    height: 100%;
}

</style>
