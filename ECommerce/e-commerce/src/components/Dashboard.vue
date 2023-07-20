<template>
    <v-container fluid>
        <v-card   color="#3853D8"
      height="150px"
      tile
      flat
      class="d-flex align-center justify-center"
      dark>
       <v-row>
        <v-col cols="12" sm="12">
          <h4 class="text-center">MEN'S LIFESTYLE SHOES</h4>
        </v-col>
        <v-col cols="12" sm="12">
          <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
            <template v-slot:divider>
              <v-icon color="#7C92FE">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
      </v-row>

     </v-card>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
.container {
  padding: 0px !important;
}

</style>