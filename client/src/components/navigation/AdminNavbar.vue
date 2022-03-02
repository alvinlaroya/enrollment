<template>
  <div>
    <v-app-bar app dense id="navbar">
      <v-avatar :size="30">
          <img
            src="@/images/defemnhslogo.jpeg"
            alt="John"
          >
        </v-avatar>
      <v-toolbar-title style="font-size: 17px; margin-left: 10px; font-weight: bold">DEFEMNHS</v-toolbar-title>
      <!-- End of Navbar left actions -->
      <v-spacer></v-spacer>

      <!-- Navbar right actions -->
      <template v-if="loggedIn">
        
      </template>
      <template v-else>
        <v-btn depressed @click="$router.push({ name: 'landing.home' })"> Home </v-btn>
        <v-btn depressed @click="$router.push({ name: 'auth.login' })"> Login </v-btn>
        <v-btn depressed @click="$router.push({ name: 'auth.register' })"> Register </v-btn>
        <!-- <v-btn
          depressed
          style="margin-left: 10px"
          @click="$router.push({ name: 'auth.register' })"
        >
          Portal
        </v-btn> -->
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  data: () => ({
    selected: null,
    notification: true,
    version: "4.4.0",
    switch: false,
  }),
  computed: {
    ...mapGetters(["loggedIn"]),
    currentRoute() {
        return this.$router.currentRoute.path
    }
  },
  methods: {
    ...mapActions(["logOutUser"]),
    logout() {
      this.logOutUser();
    },
  },
};
</script>
<style lang="postcss" scoped>
/deep/ .v-text-field {
  max-width: 450px;
}
</style>
