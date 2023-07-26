<template>
  <v-app>
    <Navbar></Navbar>
    <v-container fluid>
      <v-card color="#F7F7F7" height="180px" tile flat class="d-flex align-center justify-center mt-12" dark>
        <v-row>
          <v-col cols="12" sm="12">
            <v-item-group mandatory class="mt-n1">
              <v-container>
                <v-row justify="center" class="space">
                     <v-col cols="12" xs="12" sm="4"  md="2" v-for="(cetegory, i) in categories" :key="i">
                    
                      <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? '#D5F0DB' : 'white'"
                        :class="active ? 'borderme' : 'borderout'"
                        class="d-flex align-center rounded-lg mx-2"
                        dark
                        height="170"
                        @click="toggle"
                        flat
                      >
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-list-item three-line class="text-center">
                              <v-list-item-content>
                                <div align="center" justify="center">
                                  <v-img
                                    :src="cetegory.img"
                                    max-height="80"
                                    max-width="80"
                                    contain
                                  ></v-img>
                                </div>
                                <v-list-item-subtitle
                                  :class="
                                    active ? 'green--text' : 'black--text'
                                  "
                                  class="caption mt-4"
                                  >{{ cetegory.title }}</v-list-item-subtitle
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-item>

                      
                     </v-col>

                </v-row>
              </v-container>
            </v-item-group>

          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';  

// Components
import Navbar from '../components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',
  setup(){
    return{
      chair:true,
      other:false,
      slider2:50,
      categories:[
        {img:"0.png",title:"SLEEPING BEDS"},
        {img:"1.png",title:"LOUNGE CHAIRS"},
        {img:"2.png",title:"CHAIRS"},
        {img:"4.png",title:"OFFICE CHAIRS"},
        {img:"6.png",title:"TABLES NIGHTSTANDS"},
        {img:"8.png",title:"KITCHEN FURNITURE"},
      ],
      chairs:[
         {
          class: "pa-0",
          image: "c1.jpg",
          title: "Lounge Chair",
          price: "$ 145.00",
        },
      ]

    }
  },

  components: {
    Navbar 
  },
});
</script>
<style scoped>
  .v-container{
    width: 100%;
    padding: 16px 0px !important;
    margin-right: auto;
    margin-left: auto;
  }
  .v-card.borderme {
    border: 2px solid black !important;
  }
  .v-card.borderout {
    border: 1px solid #d5f0db !important;
  }
</style>
