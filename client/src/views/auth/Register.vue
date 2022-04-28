<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center" style="height: 90vh">
      <v-col cols="6">
        <v-card class="pa-6" style="text-align: center">
          <img
            src="@/images/defemnhslogo.jpeg"
            style="width: 80px"
            alt=""
          /><br />
          <v-card-subtitle
            >Web-Based Enrolment System of Don Eufemio F. Eriguel Memorial
            National High School</v-card-subtitle
          >
          <v-card-text class="mt-5">
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col md="4">
                    <v-text-field
                      v-model="user.fname"
                      :rules="fnameRules"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col md="4">
                    <v-text-field
                      v-model="user.mname"
                      :rules="mnameRules"
                      label="Middle name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col md="4">
                    <v-text-field
                      v-model="user.lname"
                      :rules="lnameRules"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col md="6">
                    <v-text-field
                      v-model="user.email"
                      :rules="emailRules"
                      label="Username"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      v-model="user.password"
                      :rules="passwordRules"
                      label="Password"
                      required
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col md="6">
                    <v-menu
                      v-model="birthDateMenu"
                      :close-on-content-click="true"
                      :nudge-left="20"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="user.birthDate"
                          label="Date of Birth"
                          readonly
                          flat
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="user.birthDate"></v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      v-model="user.position"
                      label="Position"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col cols="12">
                    <!-- <v-select
                      v-model="user.address"
                      :items="addresses"
                      hint="Barangay of Agoo, La Union"
                      persistent-hint
                      :rules="[(v) => !!v || 'Address is required']"
                      label="Address"
                      required
                    ></v-select> -->
                    <v-text-field
                      v-model="user.address"
                      :rules="[(v) => !!v || 'Address is required']"
                      label="Address"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-btn tile color="success" block large @click="validate">
                  <v-icon left> mdi-account-plus-outline </v-icon>
                  Create Account
                </v-btn>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="success"
      :right="true"
      :top="true"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  data: () => ({
    show: false,
    valid: true,
    birthDateMenu: null,
    user: {
      fname: "",
      mname: "",
      lname: "",
      email: "",
      password: "",
      address: "",
      birthDate: "",
      position: "",
    },
    fnameRules: [(v) => !!v || "First name is required"],
    mnameRules: [(v) => !!v || "Middle name is required"],
    lnameRules: [(v) => !!v || "Last name is required"],
    email: "",
    emailRules: [(v) => !!v || "Username is required"],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
    snackbar: false,
    text: "My timeout is set to 2000.",
    timeout: 2000,
  }),

  methods: {
    ...mapActions(["getAddresses", "register"]),
    validate() {
      const valid = this.$refs.form.validate();
      if (valid) this.register(this.user);
      this.$refs.form.reset();
      this.snackbar = true;
      this.text = "Account Successfully Created";
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },

  computed: {
    ...mapGetters(["addresses"]),
  },

  mounted() {
    this.getAddresses();
  },
};
</script>
<style></style>
