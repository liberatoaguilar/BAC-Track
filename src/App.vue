<template>
  <v-app>
    <v-main>
        <v-dialog v-model="showRefresh" max-width="500px" style="padding: 20px">
          <v-card>
            <v-card-title>
              Refresh?
            </v-card-title>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="error" @click="showRefresh = false">Cancel</v-btn>
              <v-spacer/>
              <v-btn color="green" @click="clearData">Confirm</v-btn>
              <v-spacer/>
            </v-card-actions>
          </v-card>
        </v-dialog>        
        <v-toolbar density="normal" style="padding: 5px" color="red-darken-3">
            <b><v-label color="white" style="padding: 0; padding-left: 10px; font-size: 22px">BAC-Track</v-label></b>
            <v-spacer/>
            <img :src="images.logo" width="35px"/>
            <v-spacer/>
            <v-btn icon color="grey-lighten-2" @click="showRefresh = true">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn icon color="grey-lighten-2" @click="showDialog = true">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
        </v-toolbar>
        <v-container>
            <v-row class="text-center" style="height: 20vh" dense>
              <v-col cols="12">
                <v-container style="margin: 0; padding: 0">
                  <v-row style="height: 80%;" dense>
                    <v-col>
                      <BACLabel :BAC="total_BAC"></BACLabel>
                    </v-col>
                  </v-row>
                  <v-row style="height: 20%; padding-top: 10px" dense>
                      <v-col cols="6"><v-label><b>Last Drink</b></v-label>
                      <v-spacer/>
                      <v-label>{{ lastDrink() }}</v-label></v-col>
                      <v-col cols="6"><v-label><b>Total Drink{{ (totalDrinks() == 1) ? '' : 's'}}</b></v-label>
                      <v-spacer/>
                      <v-label>{{ totalDrinks() }}</v-label></v-col>
                      <v-col cols="6"><v-label><b>Sober</b></v-label>
                      <v-spacer/>
                      <v-label> {{ formatTime(sober_time) }}</v-label></v-col>
                      <v-col cols="6"><v-label><b>Drive</b></v-label>
                      <v-spacer/>
                      <v-label>{{ formatTime(drive_time) }}</v-label></v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>

            <v-row class="text-center" style="height: 60vh; padding-top: 0px" align="stretch">
              <v-col cols="12">
                <v-container style="height: 100%">
                  <v-row style="height: 100%">
                    <v-col cols="6"><DrinkButton @drinkClick="addDrink" text="Beer"
                    :std='1.0' :added='calcAddedBAC(1.0)'
                    :image="require('./assets/beer.png')"></DrinkButton></v-col>
                    <v-col cols="6"><DrinkButton @drinkClick="addDrink" text="Shot"
                    :std='1.5' :added='calcAddedBAC(1.5)'
                    :image="require('./assets/tequila.png')"></DrinkButton></v-col>
                    <v-col cols="6"> <ClearDrink @removeDrink="removeDrink"
                    :image="require('./assets/water.png')"></ClearDrink></v-col>
                    <v-col cols="6"><CustomDrink @drinkClick="addDrink"
                    :image="require('./assets/custom.png')"></CustomDrink></v-col>
                  </v-row>
                </v-container>
              </v-col>

            </v-row>
            <v-dialog v-model="showDialog" max-width="500px" style="padding: 20px">
                  <v-card>
                    <v-card-title>
                      Settings
                    </v-card-title>
                    <v-form ref="settings">
                        <v-card-text>
                        <v-radio-group v-model="gender" row>
                          <v-radio :value="0" label="Male"></v-radio>
                          <v-radio :value="1" label="Female"></v-radio>
                        </v-radio-group>
                          <v-text-field v-model="weight" label="lbs" :rules="[...numberRule]"></v-text-field>
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
          </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DrinkButton from './components/DrinkButton.vue'
import CustomDrink from './components/CustomDrink.vue'
import ClearDrink from './components/ClearDrink.vue'
import BACLabel from './components/BACLabel.vue'

export default {
  name: 'App',

  components: {
      DrinkButton,
      CustomDrink,
      ClearDrink,
      BACLabel
  },
  methods: {
      clearData() {
          localStorage.clear();
          location.reload();
      },
      saveData() {
        localStorage.setItem('gender', this.gender);
        localStorage.setItem('weight', this.weight);
        localStorage.setItem('drinks', JSON.stringify(this.drinks));
        localStorage.setItem('total_BAC', JSON.stringify(this.total_BAC));
      },
      loadData() {
        const stored_gender = localStorage.getItem('gender');
        if (stored_gender !== null) {
          this.gender = parseInt(stored_gender);
        }

        const stored_weight = localStorage.getItem('weight');
        if (stored_weight !== null) {
          this.weight = parseInt(stored_weight);
        }

        const stored_drinks = localStorage.getItem('drinks');
        if (stored_drinks !== null) {
          this.drinks = JSON.parse(stored_drinks);
          this.drinks.map(drink => {
            return {
                ...drink,
                time: new Date(drink.time)
            }
          });

          const stored_total_BAC = localStorage.getItem('total_BAC');
          if (stored_total_BAC !== null) {
            this.total_BAC = parseFloat(stored_total_BAC);
          }

          this.sober_time = this.calculateSoberTime();
          this.drive_time = this.calculateDriveTime();
        }

      },
      drinksThisHour() {
        if (this.drinks.length == 0) {
          return 0.0;
        }

        const now = new Date();
        const one_hour_ago = new Date();
        one_hour_ago.setHours(one_hour_ago.getHours() - 1);

        let count = 0;
        for (const drink of this.drinks) {
          if (drink.time > one_hour_ago && drink.time <= now) {
            count++;
          }
        }

        return count;
      },
      calculateSoberTime() {
        const now = new Date();
        if (this.total_BAC == 0.00) {
            return this.formatTime(now);
        }

        let bac = this.total_BAC;
        while (bac >= 0.00) {
            now.setMinutes(now.getMinutes() + 1);
            bac -= 0.00025;
        }
        return now;

      },
      calculateDriveTime() {
        const now = new Date();
        if (this.total_BAC == 0.00) {
            return this.formatTime(now);
        }

        let bac = this.total_BAC;
        while (bac >= 0.08) {
            now.setMinutes(now.getMinutes() + 1);
            bac -= 0.00025;
        }
        return now;

      },
      totalDrinks() {
        return this.drinks.reduce((total, drink) => total + drink.std, 0).toFixed(1);
      },
      formatTime(time) {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${(hours%12) == 0 ? 12 : hours%12}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`;
        return formattedTime;
      },
      lastDrink() {
        if (this.drinks.length > 0) {
            return this.formatTime(new Date(Math.max(...this.drinks.map(drink =>
            new Date(drink.time)))));
        }

        return '--:--'
      },
      calcAddedBAC(std) {
        const w_factor = (this.gender == 0) ? 0.68 : 0.55;
        const weight_grams = this.weight*453.6;
        const alc_grams = std*14;
        return alc_grams/(weight_grams*w_factor)*100;
      },
      addDrink(std) {
          if (std) {
              this.drinks.push({
                std: std,
                time: (new Date()).toISOString(),
                added_BAC: this.calcAddedBAC(std)
              });
              this.total_BAC += this.calcAddedBAC(std);
              this.sober_time = this.calculateSoberTime();
              this.drive_time = this.calculateDriveTime();
              this.saveData();
          }
      },
      updateBAC() {
          if (this.total_BAC - 0.00025 <= 0.00) {
              this.total_BAC = 0.00;
              return;
          }
        
          this.total_BAC -= 0.00025;
          this.saveData();
      },
      removeDrink() {
          let lastDrink = this.drinks.pop();
          if (this.drinks.length == 0) {
              this.total_BAC = 0.00;
              this.sober_time = new Date();
              this.drive_time = new Date();
              return;
          }

          this.total_BAC -= lastDrink.added_BAC;
          this.sober_time = this.calculateSoberTime();
          this.drive_time = this.calculateDriveTime();
          this.saveData();
      },
      submitForm() {
        if (this.$refs.settings.validate()) {
            this.showDialog = false;
            this.total_BAC = 0.00;
            for (const drink of this.drinks) {
                this.total_BAC += this.calcAddedBAC(drink.std);
            }
            this.sober_time = this.calculateSoberTime();
            this.drive_time = this.calculateDriveTime();
            this.saveData();
        }

      }
  },
  created() {
    this.loadData();

    // interpolate bac with time passed
    if (this.drinks.length > 0) {
        const last_drink = new Date(Math.max(...this.drinks.map(drink =>
        new Date(drink.time))));
        const now = new Date();
        let mins = Math.floor((now.getTime() - last_drink.getTime())/(60000));
        for (let i = 0; i < mins; i++) {
            this.updateBAC();
        }
    }
    this.intervalId = setInterval(this.updateBAC, 60000);

  },
  beforeUnmount() {
    this.saveData();
    clearInterval(this.intervalId);
  },
  data: () => ({
      gender: 0,
      weight: 175,
      showDialog: false,
      showRefresh: false,
      numberRule: [v => /^\d+(\.\d+)?$/.test(v) || 'Must be a number'],
      total_BAC: 0.00,
      drinks: [
        /*
        {
            std: 0.0,
            time: new Date(),
            added_BAC: 0.0
        }
        */
      ],
      intervalId: -1,
      sober_time: new Date(),
      drive_time: new Date(),
      images: {
        logo: require('./assets/logo.png'),
        beer: require('./assets/logo.png'),
        tequila: require('./assets/logo.png'),
        water: require('./assets/logo.png'),
        custom: require('./assets/logo.png')
      }
  }),
}
</script>
