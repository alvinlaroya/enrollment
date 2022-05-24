<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h6"
            >PNP Clearance | Police Clearance Application</v-card-title
          >
          <v-card-subtitle>List of police clearances</v-card-subtitle>
          <v-spacer></v-spacer>
          <v-toolbar flat>
            <v-container fluid>
              <v-row>
                <v-col md="4" xs="4" sm="4" lg="6">
                  <v-btn color="primary" dark @click="addClearance()"
                    >Add Application</v-btn
                  >
                </v-col>
                <v-col md="8" xs="8" sm="8" lg="6">
                  <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search Clearance"
                    single-line
                    style="margin-top: 10px"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <template v-slot:extension>
              <v-tabs v-model="tab" slider-color="blue">
                <v-tabs-slider color="blue"></v-tabs-slider>

                <v-tab v-for="(item, i) in items" :key="i">
                  <v-badge
                    color="error"
                    :value="item.count"
                    :content="item.count"
                  >
                    {{ item.label }}
                  </v-badge>
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-data-table
                :search="search"
                :headers="headers"
                :items="allClearance"
                show-expand
                single-expand
                loading-text="Loading... Please wait"
                no-results-text="No Available Article"
                class="elevation-1"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon class="mr-2" color="green" @click="editItem(item)">
                    mdi-file-document-edit
                  </v-icon>
                  <v-icon class="mr-2" color="blue" @click="editItem(item)">
                    mdi-printer-outline
                  </v-icon>
                  <v-icon class="mr-2" color="blue" @click="editItem(item)">
                    mdi-export-variant
                  </v-icon>
                </template>
                <template v-slot:item.dateOfBirth="{ item }">
                  {{ dateFormat(item.dateOfBirth) }}
                </template>
                <template v-slot:item.amount="{ item }">
                  ₱{{ item.amount }}
                </template>
                <template v-slot:item.issuedAt="{ item }">
                  {{ dateTimeFormat(item.issuedAt) }}
                </template>
                <template v-slot:item.issuedOn="{ item }">
                  {{ dateTimeFormat(item.issuedOn) }}
                </template>
                <template v-slot:expanded-item="{ headers, item }">
                  <td>
                    <v-chip
                      @click="viewImage(item.idPicture)"
                      class="ma-2"
                      color="primary"
                      text-color="white"
                    >
                      <v-icon left> mdi-image-area </v-icon>
                      IdPicture.jpg
                    </v-chip>
                  </td>
                  <td>
                    <v-chip
                      @click="viewImage(item.cedula)"
                      class="ma-2"
                      color="primary"
                      text-color="white"
                    >
                      <v-icon left> mdi-image-area </v-icon>
                      Cedula.jpg
                    </v-chip>
                  </td>
                  <td>
                    <v-chip
                      @click="viewImage(item.ort)"
                      class="ma-2"
                      color="primary"
                      text-color="white"
                    >
                      <v-icon left> mdi-image-area </v-icon>
                      ORT.jpg
                    </v-chip>
                  </td>
                  <td>
                    <v-chip
                      @click="viewImage(item.barangayClearance)"
                      class="ma-2"
                      color="primary"
                      text-color="white"
                    >
                      <v-icon left> mdi-image-area </v-icon>
                      BarangayClearance.jpg
                    </v-chip>
                  </td>
                </template>
              </v-data-table>
            </v-tab-item>
            <v-tab-item>
              <v-data-table
                :search="search"
                :headers="headers"
                :items="verifiedClearance"
                show-expand
                single-expand
                loading-text="Loading... Please wait"
                no-results-text="No Available Article"
                class="elevation-1"
              >
                <template v-slot:item.actions="{ item }">
                  <v-icon class="mr-2" color="green" @click="editItem(item)">
                    mdi-file-document-edit
                  </v-icon>
                  <v-icon class="mr-2" color="blue" @click="editItem(item)">
                    mdi-printer-outline
                  </v-icon>
                </template>
                <template v-slot:item.dateOfBirth="{ item }">
                  {{ dateFormat(item.dateOfBirth) }}
                </template>
                <template v-slot:item.amount="{ item }">
                  ₱{{ item.amount }}
                </template>
                <template v-slot:item.issuedAt="{ item }">
                  {{ dateTimeFormat(item.issuedAt) }}
                </template>
                <template v-slot:item.issuedOn="{ item }">
                  {{ dateTimeFormat(item.issuedOn) }}
                </template>
                <template v-slot:[`item.f1`]="{ item }">
                  <v-avatar>
                    <img :src="`http://localhost:8000/${item}`" alt="John" />
                  </v-avatar>
                </template>
                <template v-slot:item.f2="{ item }">
                  {{ dateTimeFormat(item.issuedOn) }}
                </template>
                <template v-slot:item.f3="{ item }">
                  {{ dateTimeFormat(item.issuedOn) }}
                </template>
                <template v-slot:item.f4="{ item }">
                  {{ dateTimeFormat(item.issuedOn) }}
                </template>
              </v-data-table>
            </v-tab-item>
          </v-tabs-items>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="500">
      <v-img
        :src="displayImage(dialogDisplayImage)"
        style="width: 100%"
      ></v-img>
    </v-dialog>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,
    dialogDisplayImage: "",
    search: "",
    tab: null,
    items: [
      { label: "All", count: 0 },
      { label: "Verified", count: 0 },
    ],
    headers: [
      {
        text: "Actions",
        value: "actions",
        align: "start",
        sortable: false,
        width: 100,
      },
      {
        text: "First name",
        value: "fname",
      },
      { text: "Middle name", value: "mname" },
      { text: "Last name", value: "lname" },
      { text: "Address", value: "address" },
      { text: "Phone", value: "phone" },
      { text: "Age", value: "age" },
      { text: "Date of Birth", value: "dateOfBirth", width: 154 },
      { text: "Citizenship", value: "citizenship" },
      { text: "Civil Status", value: "civilStatus" },
      { text: "OR#", value: "orNumber" },
      { text: "Ammout", value: "amount" },
      { text: "Issued At", value: "issuedAt", width: 150 },
      { text: "Issued On", value: "issuedOn", width: 150 },
      { text: "Purpose", value: "purpose" },
      { text: "Purpose", value: "f1" },
      { text: "Purpose", value: "f2" },
      { text: "Purpose", value: "f3" },
      { text: "Purpose", value: "f4" },
      { text: "", value: "data-table-expand", fixed: true },
    ],
  }),
  watch: {
    badges: {
      handler() {
        this.setBadge();
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(["fetchClearance"]),
    editItem(item) {
      console.log(item);
    },
    downloadItem(item) {
      console.log(item);
    },
    categoryFormat(item) {
      if (item === 1) return "Customers";
      if (item === 2) return "Competitors";
      if (item === 3) return "Produtcts";
      if (item === 4) return "Social Media";
    },
    dateFormat(date) {
      return new Date(date).toLocaleString("default", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },
    dateTimeFormat(date) {
      return new Date(date).toLocaleString("default", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
    setBadge() {
      this.items[0].count = this.badges.all;
      this.items[1].count = this.badges.verified;
    },
    addClearance() {
      this.$router.push({ name: "clearance.create" });
    },
    displayImage(src) {
      return `http://localhost:8000/${src}`;
    },
    viewImage(src) {
      this.dialog = true;
      this.dialogDisplayImage = src;
    },
  },
  computed: {
    ...mapGetters(["allClearance", "verifiedClearance", "badges"]),
  },
  created() {
    this.setBadge();
  },
  mounted() {
    this.fetchClearance();
  },
};
</script>

<style></style>
