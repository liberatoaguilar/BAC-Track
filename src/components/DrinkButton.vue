<template>
    <v-btn block @click="clickEvent" class="button">
        <v-container style="padding: 0; margin: 0">
            <v-row class="text-center" dense>
                <v-col cols=12>
                    <img width="60px" :src="image" />
                </v-col>
                <v-col cols=12>
                    <v-label>{{ text }}</v-label>
                </v-col>
                <v-col cols=12 style="font-size: 10pt; color: grey">
                    {{ std }} Drink{{ (std > 1) ? 's' : '' }}
                    <br/>
                    +{{ added.toFixed(2) }} BAC
                </v-col>
            </v-row>
        </v-container>
    </v-btn>
</template>

<script>

export default {
  name: 'DrinkButton',
  props: {
     text: String,
     image: String,
     std: Number,
     added: Number
  },
  methods: {
      clickEvent() {
          this.$emit('drinkClick', this.std);
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
