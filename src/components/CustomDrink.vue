<template>
    <v-btn block @click="showDialog = true" class="button">
        <v-container>
            <v-row class="text-center">
                <v-col cols=12>
                    <img width="60px" :src="image" />
                </v-col>
                <v-col cols=12>
                    <v-label>Custom</v-label> </v-col> </v-row>
        </v-container>
    </v-btn>

    <v-dialog v-model="showDialog" max-width="500px">
      <v-card style="padding: 20px">
        <v-card-title>
          Custom Drink
        </v-card-title>
        <v-form ref="form">
            <v-card-text>
              <v-text-field v-model="percentage" label="ABV"
              append-inner-icon="mdi-percent" :rules="[...numberRule]"></v-text-field>
              <v-text-field v-model="ounces" label="Oz" :rules="[...numberRule]"></v-text-field>
              <v-time-picker format="24hr"></v-time-picker> 
              <TimePicker></TimePicker>
            </v-card-text>
            <v-card-actions>
            <v-spacer/>
              <v-btn color="error" @click="showDialog = false">Cancel</v-btn>
              <v-spacer/>
              <v-btn color="green" @click="submitForm">Save</v-btn>
              <v-spacer/>
            </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
</template>

<script>
import TimePicker  from '../components/TimePicker.vue'

export default {
  name: 'CustomDrink',
  compponents: {
      TimePicker,
  },
  props: {
    image: String
  },
  data() {
    return {
      showDialog: false,
      percentage: '',
      ounces: '',
      numberRule: [v => /^\d+(\.\d+)?$/.test(v) || 'Must be a number'],
      selectedTime: null,
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
          this.$emit('drinkClick', ((this.percentage/100)*this.ounces*28.35)/14);

          this.percentage = '';
          this.ounces = '';
          this.selectedTime = new Date();
          this.showDialog = false;
      }
    }
  }
};
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
