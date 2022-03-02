<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <span>Mga dapat sundin:</span>
        <ol style="font-size: 13px">
          <li>
            Ang enrollment survey na ito ay sasagutan ng magulang/tagapag-alaga
            ng magaaral.
          </li>
          <li>
            Basahing mabuti ang mga tanong at sagutan ang mga angkop na espasyo.
          </li>
          <li>
            Para sa mga katanungan at paglilinaw, humingi ng tulong sa
            guro/taong nakatalaga.
          </li>
        </ol>
        <br />
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
              Step A
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">
              Step B
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 3" step="3">
              Step C
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 4" step="4">
              Step D
            </v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 5" step="5">
              Step E
            </v-stepper-step>
            <v-divider></v-divider>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12" flat>
                <v-card-title> ANTAS AT IMPORMASYON NG PAARALAN </v-card-title>
                <v-card-text>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-container fluid>
                      <v-row>
                        <v-col cols="12">
                          <span class="font-weight-bold"
                            >A1: Taong Panunuan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="3">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Year Start"
                                type="number"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col xs="12" sm="12" md="3">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Year End"
                                type="number"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="7">
                          <span class="font-weight-bold"
                            >A2: I-check lang ang naaangkop</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="3">
                              <v-checkbox
                                v-model="checkbox"
                                label="Walang LRN"
                                required
                              ></v-checkbox>
                            </v-col>
                            <v-col xs="12" sm="12" md="3">
                              <v-checkbox
                                v-model="checkbox"
                                label="May LRN"
                                required
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="5">
                          <span class="font-weight-bold">A3:</span>
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-checkbox
                                v-model="checkbox"
                                label="Returning (Balik-Aral)"
                                required
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="4">
                          <span class="font-weight-bold"
                            >A4: Baitang na nais ipatala</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Grade"
                                type="number"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <span class="font-weight-bold"
                            >A5: Huling baitang na natapos</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Grade"
                                type="number"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <span class="font-weight-bold"
                            >A6: Huling taon na natapos sa paaralan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Year"
                                type="number"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="5">
                          <span class="font-weight-bold"
                            >A7: Huling paaralang pinasukan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Previous School"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="2">
                          <span class="font-weight-bold"
                            >A8: ID ng Paaralan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="School ID"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="5">
                          <span class="font-weight-bold"
                            >A9: Address ng Paaralan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Current School"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="7">
                          <span class="font-weight-bold"
                            >A10: Uri ng Paaralan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="3">
                              <v-checkbox
                                v-model="checkbox"
                                label="Pampubliko"
                                required
                              ></v-checkbox>
                            </v-col>
                            <v-col xs="12" sm="12" md="3">
                              <v-checkbox
                                v-model="checkbox"
                                label="Pribado"
                                required
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="5">
                          <span class="font-weight-bold"
                            >A11: Paaralan kung saan nais I-enrol ang mag-aaral</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Previous School"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="2">
                          <span class="font-weight-bold"
                            >A8: ID ng Paaralan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="School ID"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="5">
                          <span class="font-weight-bold"
                            >A9: Address ng Paaralan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="name"
                                :rules="reguiredField"
                                label="Current School"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                    <!-- <v-text-field
                      v-model="name"
                      :counter="10"
                      :rules="nameRules"
                      label="Name"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>

                    <v-select
                      v-model="select"
                      :items="items"
                      :rules="[(v) => !!v || 'Item is required']"
                      label="Item"
                      required
                    ></v-select>

                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="Do you agree?"
                      required
                    ></v-checkbox> -->

                    <!-- <v-btn
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="validate"
                    >
                      Validate
                    </v-btn>

                    <v-btn color="error" class="mr-4" @click="reset">
                      Reset Form
                    </v-btn>

                    <v-btn color="warning" @click="resetValidation">
                      Reset Validation
                    </v-btn> -->
                  </v-form>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12">
                <v-card-title> IMPORMASYON NG ESTUDYANTE </v-card-title>
              </v-card>

              <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12">
                <v-card-title>
                  IMPORMASYON NG MAGULANG/TAGAPAG-ALAGA
                </v-card-title>
              </v-card>

              <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-card class="mb-12">
                <v-card-title>
                  KAPASIDAD AT KAPARAANAN NG TAHANAN PARA SA DISTANCE LEARNING
                </v-card-title>
              </v-card>

              <v-btn color="primary" @click="e1 = 5"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
            <v-stepper-content step="5">
              <v-card class="mb-12">
                <v-card-title>
                  LIMITADONG MAGKAHARAP NG PAG-AARAL
                </v-card-title>
              </v-card>

              <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    e1: 1,
    valid: true,
    name: "",
    reguiredField: [
      (v) => !!v || "This field is required",
    ],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style></style>
