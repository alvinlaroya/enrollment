<template>
  <div>
    <v-navigation-drawer
      app
      dark
      v-model="drawer"
      :mini-variant="mini"
      mini-variant-width="60"
      id="sidebar"
      append
      :hide-overlay="true"
    >
      <v-list>
        <v-list-item dense>
          <v-list-item-avatar>
            <v-img
              src="https://cdn-icons-png.flaticon.com/512/194/194935.png"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-small">
              {{ currentUser.fname }} {{ currentUser.lname }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-small">{{
              currentUser.position
            }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-menu
            transition="slide-y-transition"
            bottom
            left
            absolute
            nudge-bottom="30"
            :offset-y="true"
            min-width="230"
            style="z-index: 999999"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-action v-bind="attrs" v-on="on">
                <v-btn icon>
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>

            <v-list dense>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in otherOptions"
                  :key="i"
                  @click="navMenuMethods(item.method)"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      >{{ item.text }}
                      {{ currentUser.fname }}</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense subheader v-for="(list, i) in navigationList" :key="i">
        <v-subheader class="text-truncate">{{ list.subheader }}</v-subheader>
        <v-list-item-group>
          <div v-for="(item, i) in list.subheaderList" :key="i">
            <v-tooltip right :disabled="!mini">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item
                  active-class="active-class"
                  v-bind="attrs"
                  v-on="on"
                  link
                  :to="item.path"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-toolbar dense class="elevation-1">
            <v-toolbar-title
              >{{ enrolled.all }} Enrolled Students</v-toolbar-title
            >

            <v-spacer></v-spacer>

            <v-select
              dense
              v-model="selectedBarangay"
              :items="addresses"
              label="Select Barangay"
              outlined
              class="mt-6"
              @change="selectedBarangayHandler"
            ></v-select>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              outlined
              dense
              class="ml-3"
            ></v-text-field>
            <v-btn
              v-if="selectedBarangay"
              depressed
              color="success"
              class="mb-1 ml-5"
              @click="exportToCsvByBarangayHandler"
            >
              <v-icon>mdi-microsoft-excel</v-icon> Export
            </v-btn>
            <v-btn
              depressed
              color="warning"
              class="mb-1 ml-2"
              @click="resetBarangayFilterHandler"
            >
              <v-icon>mdi-restart</v-icon>reset
            </v-btn>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="enrolledStudents"
            sort-by="calories"
            class="elevation-1"
            :search="search"
          >
            <template v-slot:[`item.f1`]="{ item }">
              <v-chip class="ma-2" @click="viewImage(item.f1)"> Image </v-chip>
            </template>
            <template v-slot:[`item.f2`]="{ item }">
              <v-chip class="ma-2" @click="viewImage(item.f2)"> Image </v-chip>
            </template>
            <template v-slot:[`item.f3`]="{ item }">
              <v-chip class="ma-2" @click="viewImage(item.f3)"> Image </v-chip>
            </template>
            <template v-slot:[`item.f4`]="{ item }">
              <v-chip class="ma-2" @click="viewImage(item.f4)"> Image </v-chip>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip :color="item.enrolled ? 'success' : 'warning'">{{
                item.enrolled ? "Enrolled" : "Pending"
              }}</v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    medium
                    @click="convertRowToCsv(item)"
                    color="success"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-microsoft-excel
                  </v-icon>
                </template>
                <span>Export to CSV</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    medium
                    @click="setEnrollStatus(item)"
                    color="success"
                    class="ml-6"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{
                      item.enrolled
                        ? "mdi-account-remove-outline"
                        : "mdi-account-check-outline"
                    }}
                  </v-icon>
                </template>
                <span>Set Enrolled Status</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="500">
      <v-img
        :src="displayImage(dialogDisplayImage)"
        style="width: 100%"
      ></v-img>
    </v-dialog>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapNavigationGetters, mapActions: mapNavigationActions } =
  createNamespacedHelpers("navigation");
const { mapGetters: mapAuthGetters, mapActions: mapAuthActions } =
  createNamespacedHelpers("auth");

export default {
  data: () => ({
    drawer: !null,
    mini: false,
    search: "",
    navigationList: [
      {
        subheader: "Navigation",
        subheaderList: [
          {
            text: "Enrollment Application",
            icon: "mdi-newspaper-variant-multiple-outline",
            path: "/dashboard",
          },
          {
            text: "Student Record",
            icon: "mdi-account-school-outline",
            path: "/student",
          },
          {
            text: "Enrolled Students",
            icon: "mdi-account-group-outline",
            path: "/enrolled",
          },
          {
            text: "User Management",
            icon: "mdi-account-cog-outline",
            path: "/management",
          },
          {
            text: "Profile",
            icon: "mdi-account-outline",
            path: "/profile",
          },
        ],
      },
    ],
    otherOptions: [
      {
        text: "Sign out",
        icon: "mdi-logout-variant",
        iconColor: "red",
        method: "logout",
      },
    ],
    headers: [
      {
        text: "LRN",
        align: "start",
        sortable: false,
        value: "b2",
      },
      { text: "First Name", value: "b4" },
      { text: "Middle Name", value: "b5" },
      { text: "Last Name", value: "b3" },
      { text: "Barangay", value: "b21" },
      { text: "Municipal", value: "b22" },
      { text: "Province", value: "b23" },
      { text: "Track", value: "a15" },
      { text: "Strand", value: "a16" },
      { text: "Card/SF9", value: "f1" },
      { text: "Form 137", value: "f2" },
      { text: "Birth Certificate", value: "f3" },
      { text: "Good Moral", value: "f4" },
      { text: "Enroll Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false, width: 120 },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    selectedBarangay: "",
    dialog: false,
    dialogDisplayImage: "",
  }),
  methods: {
    ...mapAuthActions(["logOutUser", "getAddresses"]),
    ...mapNavigationActions([
      "fetchEnrolls",
      "fetchEnrollsByBarangay",
      "exportToCsvEnrollByBarangay",
      "udpateEnrollStatus",
    ]),
    displayImage(src) {
      return `http://localhost:7000/${src}`;
    },
    viewImage(src) {
      this.dialog = true;
      this.dialogDisplayImage = src;
    },
    navMenuMethods(method) {
      switch (method) {
        case "logout":
          this.logOutUser();
          break;
        default:
          return null;
      }
    },
    selectedBarangayHandler(value) {
      this.fetchEnrollsByBarangay({ barangay: value });
    },
    resetBarangayFilterHandler() {
      this.selectedBarangay = "";
      this.fetchEnrolls();
      this.search = "";
    },
    setEnrollStatus(item) {
      this.udpateEnrollStatus(item);
      this.$swal.fire(
        item.enrolled ? "Remove Enrolled Status" : "Enrolled!",
        `Student set enroll status to ${
          item.enrolled ? "Not Enrolled" : "Enrolled!"
        }`,
        "success"
      );
    },
    convertRowToCsv(row) {
      var headers = {
        id: "ID",
        b2: "B2",
        a1: "A1", // remove commas to avoid errors
        a2: "A2",
        a3: "A3",
        a4: "A4",
        a5: "A5",
        a6: "A6",
        a7: "A7",
        a8: "A8",
        a9: "A9",
        a10: "A10",
        a11: "A11",
        a12: "A12",
        a13: "A13",
        a14: "A14",
        a15: "A15",
        a16: "A16",
        b1: "B1",
        b3: "B3",
        b4: "B4",
        b5: "B5",
        b6: "B6",
        b7: "B7",
        b8: "B8",
        b9: "B9",
        b10: "B10",
        b11: "B11",
        b12: "B12",
        b13: "B13",
        b14: "B14",
        b15: "B15",
        b16: "B16",
        b17: "B17",
        b18: "B18",
        b19: "B19",
        b20: "B20",
        b21: "B21",
        b22: "B22",
        b23: "B23",
        b24: "B24",
        c1: "C1",
        c2: "C2",
        c3: "C3",
        c4: "C4",
        c5: "C5",
        c6: "C6",
        c7: "C7",
        c8: "C8",
        c9: "C9",
        c10: "C10",
        d1: "D1",
        d2: "D2",
        d3: "D3",
        d4: "D4",
        d5: "D5",
        d6: "D6",
        d7: "D7",
        e1: "E1",
        e2: "E2",
      };

      var fileTitle = `${row.b2}-${row.b3}_${row.b4}_${row.b5}`; // or 'my-unique-title'

      var itemsFormatted = [];
      let temp = [];
      temp.push(row);

      temp.forEach((item) => {
        itemsFormatted.push({
          id: item.id,
          b2: item.b2,
          a1: item.a1, // remove commas to avoid errors
          a2: item.a2 ? "May LRN" : "Walang LRN",
          a3: item.a3 ? "Balik-aral" : "Hindi Balik-aral",
          a4: item.a4,
          a5: item.a5,
          a6: item.a6,
          a7: item.a7,
          a8: item.a8,
          a9: item.a9,
          a10: item.a10 ? "Pribado" : "Pampubliko",
          a11: item.a11,
          a12: item.a12,
          a13: item.a13,
          a14: item.a14,
          a15: item.a15,
          a16: item.a16,
          b1: item.b1,
          b3: item.b3,
          b4: item.b4,
          b5: item.b5,
          b6: item.b6,
          b7: item.b7,
          b8: item.b8,
          b9: item.b9 ? "Lalaki" : "Babae",
          b10: item.b10 ? "Oo" : "Hindi",
          b11: item.b11,
          b12: item.b12,
          b13: item.b13,
          b14: item.b14,
          b15: item.b15,
          b16: item.b16,
          b17: item.b17,
          b18: item.b18,
          b19: item.b19,
          b20: item.b20,
          b21: item.b21,
          b22: item.b22,
          b23: item.b23,
          b24: item.b24,
          c1: item.c1,
          c2: item.c2,
          c3: item.c3,
          c4: item.c4,
          c5: item.c5,
          c6: item.c6,
          c7: item.c7,
          c8: item.c8,
          c9: item.c9,
          c10: item.c10 ? "Oo" : "Hindi",
          d1: item.d1,
          d2: item.d2,
          d3: item.d3,
          d4: item.d4 ? "Mayroon" : "Wala",
          d5: "D5",
          d6: "D6",
          d7: "D7",
          e1: item.e1 ? "Oo, Pumapayag ako" : "Hindi ako pumapayag",
          e2: "E2",
        });
      });

      this.exportCSVFile(headers, itemsFormatted, fileTitle);
    },
    exportToCsvByBarangayHandler() {
      /* this.exportToCsvEnrollByBarangay({
        results: this.allEnrolls,
        barangay: this.selectedBarangay,
      }); */
      var headers = {
        id: "ID",
        b2: "B2",
        a1: "A1", // remove commas to avoid errors
        a2: "A2",
        a3: "A3",
        a4: "A4",
        a5: "A5",
        a6: "A6",
        a7: "A7",
        a8: "A8",
        a9: "A9",
        a10: "A10",
        a11: "A11",
        a12: "A12",
        a13: "A13",
        a14: "A14",
        a15: "A15",
        a16: "A16",
        b1: "B1",
        b3: "B3",
        b4: "B4",
        b5: "B5",
        b6: "B6",
        b7: "B7",
        b8: "B8",
        b9: "B9",
        b10: "B10",
        b11: "B11",
        b12: "B12",
        b13: "B13",
        b14: "B14",
        b15: "B15",
        b16: "B16",
        b17: "B17",
        b18: "B18",
        b19: "B19",
        b20: "B20",
        b21: "B21",
        b22: "B22",
        b23: "B23",
        b24: "B24",
        c1: "C1",
        c2: "C2",
        c3: "C3",
        c4: "C4",
        c5: "C5",
        c6: "C6",
        c7: "C7",
        c8: "C8",
        c9: "C9",
        c10: "C10",
        d1: "D1",
        d2: "D2",
        d3: "D3",
        d4: "D4",
        d5: "D5",
        d6: "D6",
        d7: "D7",
        e1: "E1",
        e2: "E2",
      };

      var fileTitle = this.selectedBarangay; // or 'my-unique-title'

      var itemsFormatted = [];

      this.allEnrolls.forEach((item) => {
        itemsFormatted.push({
          id: item.id,
          b2: item.b2,
          a1: item.a1, // remove commas to avoid errors
          a2: item.a2 ? "May LRN" : "Walang LRN",
          a3: item.a3 ? "Balik-aral" : "Hindi Balik-aral",
          a4: item.a4,
          a5: item.a5,
          a6: item.a6,
          a7: item.a7,
          a8: item.a8,
          a9: item.a9,
          a10: item.a10 ? "Pribado" : "Pampubliko",
          a11: item.a11,
          a12: item.a12,
          a13: item.a13,
          a14: item.a14,
          a15: item.a15,
          a16: item.a16,
          b1: item.b1,
          b3: item.b3,
          b4: item.b4,
          b5: item.b5,
          b6: item.b6,
          b7: item.b7,
          b8: item.b8,
          b9: item.b9 ? "Lalaki" : "Babae",
          b10: item.b10 ? "Oo" : "Hindi",
          b11: item.b11,
          b12: item.b12,
          b13: item.b13,
          b14: item.b14,
          b15: item.b15,
          b16: item.b16,
          b17: item.b17,
          b18: item.b18,
          b19: item.b19,
          b20: item.b20,
          b21: item.b21,
          b22: item.b22,
          b23: item.b23,
          b24: item.b24,
          c1: item.c1,
          c2: item.c2,
          c3: item.c3,
          c4: item.c4,
          c5: item.c5,
          c6: item.c6,
          c7: item.c7,
          c8: item.c8,
          c9: item.c9,
          c10: item.c10 ? "Oo" : "Hindi",
          d1: item.d1,
          d2: item.d2,
          d3: item.d3,
          d4: item.d4 ? "Mayroon" : "Wala",
          d5: "D5",
          d6: "D6",
          d7: "D7",
          e1: item.e1 ? "Oo, Pumapayag ako" : "Hindi ako pumapayag",
          e2: "E2",
        });
      });

      this.exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
    },
    exportCSVFile(headers, items, fileTitle) {
      if (headers) {
        items.unshift(headers);
      }

      // Convert Object to JSON
      var jsonObject = JSON.stringify(items);

      var csv = this.convertToCSV(jsonObject);

      var exportedFilenmae = fileTitle + ".csv" || "export.csv";

      var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
      } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
          // feature detection
          // Browsers that support HTML5 download attribute
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", exportedFilenmae);
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    },
    convertToCSV(objArray) {
      var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
      var str = "";

      for (var i = 0; i < array.length; i++) {
        var line = "";
        for (var index in array[i]) {
          if (line != "") line += ",";

          line += array[i][index];
        }

        str += line + "\r\n";
      }

      return str;
    },
  },
  computed: {
    ...mapAuthGetters(["currentUser", "addresses"]),
    ...mapNavigationGetters(["enrolledStudents", "count", "enrolled"]),
  },
  created() {
    EventBus.$on("switch-mini", () => {
      var element = document.querySelector("#sidebar");
      element.style.transitionDuration = "0.1s";
      this.mini = !this.mini;
      element.style.left = !this.mini ? "0px" : "-55px";
    });
  },
  mounted() {
    this.getAddresses();
    this.fetchEnrolls();
  },
};
</script>
