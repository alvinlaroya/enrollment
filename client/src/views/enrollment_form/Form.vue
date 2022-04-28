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
                <v-card-title
                  >A. ANTAS AT IMPORMASYON NG PAARALAN
                </v-card-title>
                <v-card-text>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <v-container fluid>
                      <v-row>
                        <v-col md="12" xs="12">
                          <span class="font-weight-bold"
                            >A1: Taong Panunuan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="3">
                              <v-text-field
                                v-model="user.a1"
                                :rules="reguiredField"
                                label="Year Start (Ex .: 2020-2021)"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col md="7" xs="12">
                          <span class="font-weight-bold"
                            >A2: I-check lang ang naaangkop</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="3">
                              <v-switch
                                v-model="user.a2"
                                :label="user.a2 ? 'May LRN' : 'Walang LRN'"
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col md="5" xs="12">
                          <span class="font-weight-bold">A3:</span>
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-switch
                                v-model="user.a3"
                                :label="
                                  user.a3 ? 'Balik Aral' : 'Hindi Balik Aral'
                                "
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col md="4" sm="12">
                          <span class="font-weight-bold"
                            >A4: Baitang na nais ipatala</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.a4"
                                :rules="reguiredField"
                                label="Grade"
                                type="number"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col md="4" xs="12" sm="12">
                          <span class="font-weight-bold"
                            >A5: Huling baitang na natapos</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.a5"
                                :rules="reguiredField"
                                label="Grade"
                                type="number"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col md="4" xs="12" sm="12">
                          <span class="font-weight-bold"
                            >A6: Huling taon na natapos sa paaralan</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.a6"
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
                                v-model="user.a7"
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
                                v-model="user.a8"
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
                                v-model="user.a9"
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
                              <v-switch
                                v-model="user.a10"
                                :label="user.a10 ? 'Privado' : 'Pampubliko'"
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="5">
                          <span class="font-weight-bold"
                            >A11: Paaralan kung saan nais I-enrol ang
                            mag-aaral</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.a11"
                                :rules="reguiredField"
                                label="Recent School"
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
                                v-model="user.a12"
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
                                v-model="user.a13"
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
                <v-card-title>B. IMPORMASYON NG ESTUDYANTE </v-card-title>
                <v-card-text>
                  <v-form ref="form2">
                    <v-container fluid>
                      <v-row>
                        <v-col :cols="user.a2 ? 6 : 12">
                          <span class="font-weight-bold"
                            >B1: Numero na nakalagay sa Sertipiko ng
                            Kapanganakan (Birth Certificate) mula sa PSA (kung
                            may dala nang kopya)</span
                          >
                          <v-row>
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.b1"
                                :rules="reguiredField"
                                label="Birth Cert #"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col v-if="user.a2" cols="6">
                          <span class="font-weight-bold"
                            >Learner Reference Number</span
                          >
                          <v-row class="mt-2">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.b2"
                                :rules="reguiredField"
                                label="LRN"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="3">
                          <v-text-field
                            v-model="user.b3"
                            :rules="reguiredField"
                            label="Apilyedo"
                            required
                          ></v-text-field
                        ></v-col>

                        <v-col cols="3">
                          <v-text-field
                            v-model="user.b4"
                            :rules="reguiredField"
                            label="Pangalan"
                            required
                          ></v-text-field
                        ></v-col>

                        <v-col cols="3">
                          <v-text-field
                            v-model="user.b5"
                            :rules="reguiredField"
                            label="Gitnang Pangalan"
                            required
                          ></v-text-field
                        ></v-col>

                        <v-col cols="3">
                          <v-text-field
                            v-model="user.b6"
                            :rules="reguiredField"
                            label="Extension Name (Ex: Jr)"
                            required
                          ></v-text-field
                        ></v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="3">
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="user.b7"
                                label="Birthday date"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="user.b7"
                              :active-picker.sync="activePicker"
                              :max="
                                new Date(
                                  Date.now() -
                                    new Date().getTimezoneOffset() * 60000
                                )
                                  .toISOString()
                                  .substr(0, 10)
                              "
                              min="1950-01-01"
                            ></v-date-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="3">
                          <v-text-field
                            v-model="user.b8"
                            :rules="reguiredField"
                            label="Edad"
                            type="number"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                          <span class="font-weight-bold">B9: Kasarian</span>
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="3">
                              <v-switch
                                style="margin-top: 35px"
                                v-model="user.b9"
                                :label="user.b9 ? 'Lalaki' : 'Babae'"
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="3">
                          <span class="font-weight-bold"
                            >B10: Nabibilang sa katutubong grupo/Komunidad ng
                            Katutubong Kultural</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="3">
                              <v-switch
                                style="margin-top: -10px"
                                v-model="user.b10"
                                :label="user.b10 ? 'Oo' : 'Hindi'"
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0" v-if="user.b10">
                        <v-col cols="12">
                          <span class="font-weight-bold"
                            >B11: Kung oo, saang grupo nabibilang</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.b11"
                                :rules="reguiredField"
                                label="Pangalan ng grupo"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b12"
                            :rules="reguiredField"
                            label="Kinagisnang Wika"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b13"
                            :rules="reguiredField"
                            label="Relihiyon"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b18"
                            :rules="reguiredField"
                            label="Email Address"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row
                        style="
                          height: 30px;
                          width: 100%;
                          background-color: gray;
                          color: white;
                          padding: 5px;
                          padding-left: 10px;
                        "
                      >
                        <span class="font-weight-bold"
                          >Para sa mga mag-aaral na may kapansanan</span
                        >
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                          <span class="font-weight-bold"
                            >Ang mag-aaral ba ay nangangailangan ng espesyal na
                            tulong sa pag-aaral? (hal.: sa pisikal, mental,
                            kondisyong medical, bukod sa iba pa</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="3">
                              <v-switch
                                style="margin-top: -10px"
                                v-model="user.b14"
                                :label="user.b14 ? 'Mayroon' : 'Wala'"
                              ></v-switch>
                            </v-col> </v-row
                        ></v-col>
                        <v-col cols="6">
                          <span class="font-weight-bold"
                            >May nagagamit bang "assistive technology devices"
                            sa intong bahay tulad ng screen reader, braille or
                            DAISY?</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="3">
                              <v-switch
                                style="margin-top: -10px"
                                v-model="user.b16"
                                :label="user.b16 ? 'Mayroon' : 'Wala'"
                              ></v-switch>
                            </v-col> </v-row
                        ></v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6"
                          ><span class="font-weight-bold" v-if="user.b14"
                            >Kung MAYROON, isulat kung ano ang natatanging
                            kalagayan ng bata</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-if="user.b14"
                                v-model="user.b15"
                                :rules="reguiredField"
                                label="Ilagay ang sagot dito"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="6"
                          ><span class="font-weight-bold" v-if="user.b16"
                            >Kung MAYROON, isulat kung ano ito</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-if="user.b16"
                                v-model="user.b17"
                                :rules="reguiredField"
                                label="Ilagay ang sagot dito"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row
                        style="
                          height: 30px;
                          width: 100%;
                          background-color: gray;
                          color: white;
                          padding: 5px;
                          padding-left: 10px;
                        "
                      >
                        <span class="font-weight-bold">TIRAHAN</span>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b19"
                            :rules="reguiredField"
                            label="Numero ng Bahay at kalye"
                            required
                            type="number"
                          ></v-text-field
                        ></v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b20"
                            :rules="reguiredField"
                            label="Subdivision/Baryo"
                            required
                          ></v-text-field
                        ></v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b21"
                            :rules="reguiredField"
                            label="Barangay"
                            required
                          ></v-text-field
                        ></v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b22"
                            :rules="reguiredField"
                            label="Lungsod/Munisipalidad"
                            required
                          ></v-text-field
                        ></v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b23"
                            :rules="reguiredField"
                            label="Probinsiya/Lalawigan"
                            required
                          ></v-text-field
                        ></v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="user.b24"
                            :rules="reguiredField"
                            label="Rehiyon"
                            required
                          ></v-text-field
                        ></v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12">
                <v-card-title>
                  C. IMPORMASYON NG MAGULANG/TAGAPAG-ALAGA
                </v-card-title>
                <v-card-text>
                  <v-form ref="form3">
                    <v-container fluid>
                      <v-row>
                        <v-col cols="4">
                          <span class="font-weight-bold"
                            >C1: Ama | Buong pangalan</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.c1"
                                :rules="reguiredField"
                                label="Lastname, FirstName, MiddleName"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <span class="font-weight-bold"
                            >C4: INA | Buong pagkadalagang pangalan</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.c4"
                                :rules="reguiredField"
                                label="Lastname, FirstName, MiddleName"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <span class="font-weight-bold"
                            >C7: TAGAPAG-ALAGA | Buong pangalan</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                v-model="user.c7"
                                :rules="reguiredField"
                                label="Lastname, FirstName, MiddleName"
                                required
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="9">
                          <span class="font-weight-bold"
                            >C2: AMA | Pinakamataas na antas na natapos sa
                            pag-aaral</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                v-model="user.c2"
                                :items="higherEducationItems"
                                attach
                                chips
                                label="Pumili para sa Ama"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="3">
                          <span class="font-weight-bold"
                            >C3: AMA | Numero sa telepono (cellphone/telephone)
                            & email add</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                style="margin-top: -8px"
                                v-model="user.c3"
                                :rules="reguiredField"
                                label="Numero ng  Ama"
                                required
                                type="number"
                                prefix="+639"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="9">
                          <span class="font-weight-bold"
                            >C5: INA | Pinakamataas na antas na pag-aaral
                            natapos</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                v-model="user.c5"
                                :items="higherEducationItems"
                                attach
                                chips
                                label="Pumili para sa Ina"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="3">
                          <span class="font-weight-bold"
                            >C6: INA | Numero sa telepono (cellphone/telephone)
                            & email add</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                style="margin-top: -8px"
                                v-model="user.c6"
                                :rules="reguiredField"
                                label="Numero ng Ina"
                                required
                                type="number"
                                prefix="+639"
                              ></v-text-field>
                            </v-col> </v-row
                        ></v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="9">
                          <span class="font-weight-bold"
                            >C8: TAGAPAG-ALAGA | Pinakamataas na antas na
                            natapos</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                style="margin-top: 25px"
                                v-model="user.c8"
                                :items="higherEducationItems"
                                attach
                                chips
                                label="Pumili para sa Tagapag-alaga"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="3">
                          <span class="font-weight-bold"
                            >C9: TAGAPAG-ALAGA | Numero sa telepono
                            (cellphone/telephone) & email add</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-text-field
                                style="margin-top: -8px"
                                v-model="user.c9"
                                :rules="reguiredField"
                                label="Numero Tagapag-alaga"
                                required
                                type="number"
                                prefix="+639"
                              ></v-text-field>
                            </v-col> </v-row
                        ></v-col>
                      </v-row>
                      <v-row class="mt-0">
                        <v-col cols="6">
                          <span class="font-weight-bold"
                            >C10: Kabilang ba ang inyong pamilya sa 4Ps ng
                            DSWD?</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="3">
                              <v-switch
                                style="margin-top: -10px"
                                v-model="user.c10"
                                :label="user.c10 ? 'Oo' : 'Hindi'"
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 4"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
            <v-stepper-content step="4">
              <v-card class="mb-12">
                <v-card-title>
                  D. KAPASIDAD AT KAPARAANAN NG TAHANAN PARA SA DISTANCE
                  LEARNING
                </v-card-title>
                <v-card-text>
                  <v-form ref="form4">
                    <v-container>
                      <v-row>
                        <v-col cols="6">
                          <span class="font-weight-bold"
                            >D1: Ilang miyembro sa inyong tahanan (kabilang na
                            ang i-eenrol) ang mag-aaral ngayong taong panunuan
                            {{
                              `${new Date().getFullYear()}-${
                                new Date().getFullYear() + 1
                              }`
                            }}
                            ? Ilagay kung ilan sa bawat baitang</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                style="margin-top: 25px"
                                v-model="user.d1"
                                :items="d1Select"
                                attach
                                chips
                                label="Pumili"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="6">
                          <span class="font-weight-bold"
                            >D2: Sino-sino sa miyembro ng inyong tahanan ang
                            maaring tumulong sa distance learning ng pag-aaral
                            ng bata? Piliin ang lahat ng naaangkop</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                style="margin-top: 25px"
                                v-model="user.d2"
                                :items="d2Select"
                                attach
                                chips
                                label="Pumili"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="4.5">
                          <span class="font-weight-bold"
                            >D3: Anong mga kagamitan sa tahanan ang magagamit ng
                            bata para sa pag-aaral?</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                style="margin-top: 25px"
                                v-model="user.d3"
                                :items="d3Select"
                                attach
                                chips
                                label="Pumili"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="3">
                          <span class="font-weight-bold"
                            >D4: Anong mga kagamitan sa tahanan ang magagamit ng
                            bata para sa pag-aaral?</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-switch
                                style="margin-top: 10px"
                                v-model="user.d4"
                                :label="user.d4 ? 'Mayroon' : 'Wala'"
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="4.5" v-if="user.d4">
                          <span class="font-weight-bold"
                            >D5: Paano ka nakaka-connect sa internet? Piliin ang
                            lahat ng naaangkop</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                style="margin-top: 25px"
                                v-model="user.d5"
                                :items="d5Select"
                                attach
                                chips
                                label="Pumili"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="5">
                          <span class="font-weight-bold"
                            >D6: Ano-anong pamamaraan ng "distang learning" ang
                            nais mo para saiyong anak? Piliin ang lahat ng
                            naaangkop</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                style="margin-top: 25px"
                                v-model="user.d6"
                                :items="d6Select"
                                attach
                                chips
                                label="Pumili"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="7">
                          <span class="font-weight-bold"
                            >D7: Anonng mga hadlang ang maaaring makaapekto sa
                            proseso ng pagkatuto ng iyong anak gamit ang
                            distance education? Piliin ang lahat ng
                            naaangkop</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-select
                                style="margin-top: 25px"
                                v-model="user.d7"
                                :items="d7Select"
                                attach
                                chips
                                label="Pumili"
                                multiple
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="e1 = 5"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
            <v-stepper-content step="5">
              <v-card class="mb-12">
                <v-card-title>
                  E. LIMITADONG MAGKAHARAP NG PAG-AARAL
                </v-card-title>
                <v-card-text>
                  <v-form ref="form5">
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <span class="font-weight-bold"
                            >E1: Kung sakaling pahintulutan ang Limitadong
                            Magkaharap na Pag-aaral, pumapayag ka ba na
                            dumalo/pumunta sa ganitong klase o paraan ng
                            pagututuro ang iyong (mga) anak?</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="3">
                              <v-switch
                                style="margin-top: -10px"
                                v-model="user.e1"
                                :label="
                                  user.e1
                                    ? 'Oo pumapayag ako'
                                    : 'Hindi ako pumapayag'
                                "
                              ></v-switch>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" v-if="!user.e1">
                          <span class="font-weight-bold"
                            >E2: Kung ang iyong sagot ay Hindi Ako Pumapayag,
                            pakisuyong pumili ng isa lamang pangunahing dahilan
                            na nasa ibaba or isulat ang iyong dahilan ng hindi
                            pagpapahintulot.</span
                          >
                          <v-row class="mt-0">
                            <v-col xs="12" sm="12" md="12">
                              <v-radio-group v-model="user.e2">
                                <v-radio
                                  v-for="(item, i) in e2RadioSelect"
                                  :key="i"
                                  :label="item"
                                  :value="item"
                                ></v-radio>
                              </v-radio-group>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>

              <v-btn color="primary" @click="dialog = true"> Continue </v-btn>

              <v-btn text> Cancel </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title> Upload Following Requirements </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <span class="font-weight-bold"
                  >Mag upload ng iyong Card o SF9.</span
                >
                <v-row class="mt-0">
                  <v-col xs="12" sm="12" md="12">
                    <v-file-input
                      accept="image/*"
                      label="Card/SF9"
                      v-model="user.f1"
                      outlined
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" style="margin-top: -25px">
                <span class="font-weight-bold"
                  >Mag upload ng Birth Certificate.</span
                >
                <v-row class="mt-0">
                  <v-col xs="12" sm="12" md="12">
                    <v-file-input
                      accept="image/*"
                      label="Birth Certificate"
                      v-model="user.f3"
                      outlined
                    ></v-file-input>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Cancel </v-btn>
          <v-btn color="primary" text @click="validate"> Enroll </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" color="error">
      {{ snackbartext }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,
    e1: 1,
    valid: true,
    name: "",
    reguiredField: [(v) => !!v || "This field is required"],
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
    activePicker: null,
    date: null,
    menu: false,
    user: {
      a1: "",
      a2: false,
      a3: false,
      a4: 1,
      a5: 1,
      a6: "",
      a7: "",
      a8: "",
      a9: "",
      a10: false,
      a11: "",
      a12: "",
      a13: "",
      a14: "",
      a15: "",
      a16: "",
      b1: "",
      b2: "",
      b3: "",
      b4: "",
      b5: "",
      b6: "",
      b7: "",
      b8: "",
      b9: false,
      b10: false,
      b11: "",
      b12: "",
      b13: "",
      b14: "",
      b15: "",
      b16: "",
      b17: "",
      b18: "",
      b20: "",
      b21: "",
      b22: "",
      b23: "",
      b24: "",
      c1: "",
      c2: [],
      c3: "",
      c4: "",
      c5: [],
      c6: "",
      c7: "",
      c8: [],
      c9: "",
      c10: false,
      d1: [],
      d2: [],
      d3: [],
      d4: false,
      d5: [],
      d6: [],
      d7: [],
      e1: false,
      e2: "Takot o pangambang mahawaan ng virus na Covic-19",
      f1: null,
      f2: null,
      f3: null,
      f4: null,
    },
    higherEducationItems: [
      "Hindi Nakapag-aral",
      "Hindi Nakapag-aral pero marunong magbasa at magsulat",
      "Nakatuntong ng Elementarya",
      "Nakapagtapos ng Elementarya",
      "Nakatuntong sa Sekundarya",
      "Nakapagtapos ng Sekundarya",
      "Nakapag-aral Pagkatapos ng Sekundarya",
      "(Kolehiyo, Masteral) o Nakapag aral ng Teknikal/Bokasyonal",
    ],
    d1Select: [
      "Kinder",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "Iba pa (Hal: Kolehiyo, bokasyonal at iba pa)",
    ],
    d2Select: [
      "magulang o tagapag-alaga",
      "nakatatandang kapatid",
      "lolo o lola",
      "iba pang kamag-anak",
      "iba pa (tutor, katulong)",
      "Wala",
      "nay kakayahang mag-aral ang bata nang mag-isa",
    ],
    d3Select: [
      "cable TV",
      "non-cable TV",
      "basic cellphone",
      "smart phone",
      "talet",
      "radio",
      "desktop computer",
      "laptop",
      "wala",
      "iba pa",
    ],
    d5Select: [
      "sariling mobile data",
      "sariling DSL, WIFI o satelite",
      "computer shop",
      "Sa iba pang lugar sa labas ng bahay na may connection ng internet tulad ng silid-aklatan, barangay/munisipyo, kapit-bahay o kamag-anak",
      "Wala",
    ],
    d6Select: [
      "online-learning",
      "telebisyon",
      "radyo",
      "pagkatutong modyular",
      "magkahalong patuturo sa silid-aralan at ang apat na nabanggit sa taas",
      "iba pa",
    ],
    d7Select: [
      "kawalan ng gadgets/kagamitan",
      "kakulangan sa badyet para sa load/data",
      "hindi maayos na koneksyon sa cellphone/internet",
      "may suliraning pangkalusugan",
      "nahihirapang mag-aral nang mag-isa",
      "may mga kasabay na ibang gawaing bahay",
      "kawlan ng lugar para sa pag-aaral",
      "mga sagabal sa pag-aaral (hal: social media, ingay mula sa komunidad/kapitbahay)",
      "nawalan o lumipat ng tirahan dahil sa community quarantine",
      "iba pa",
    ],
    e2RadioSelect: [
      "Takot o pangambang mahawaan ng virus na Covic-19",
      "Limitado o walang masasakyan",
      "Kasalukuyang may karamdaman or mahinang sa kalusugan",
      "Tumutulong sa mga gawain sa tahanan",
      "Delikado dahil sa armadong tungalian o posibleng engkwentro sa pagitan ng militar at nasa kabilang panig ng gobyerno",
      "Iba pang kadahilanan",
    ],
    snackbar: false,
    snackbartext: "",
  }),
  methods: {
    ...mapActions(["addEnroll"]),
    validate() {
      /* this.$refs.form.validate(); */
      if (this.user.f1 != null && this.user.f3 != nul) {
        const self = this;
        var formData = this.toFormData(this.user);
        this.addEnroll(formData).then(() => {
          self.dialog = false;
          this.$swal.fire(
            "Successfully Submitted!",
            "Your application submitted succesfully!",
            "success"
          );
        });
      } else {
        this.snackbar = true;
        this.snackbartext = "Please upload all the attachment requirements";
      }
    },
    toFormData(obj) {
      var fd = new FormData();
      for (var i in obj) {
        fd.append(i, obj[i]);
      }
      return fd;
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
