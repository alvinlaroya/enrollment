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
            <v-toolbar-title>{{ allStudents.length }} Students</v-toolbar-title>

            <v-spacer></v-spacer>
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
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="allStudents"
            sort-by="calories"
            class="elevation-1"
            :search="search"
          >
            <template v-slot:item.actions="{ item }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    medium
                    @click="updateHandler(item)"
                    color="success"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-pencil
                  </v-icon>
                </template>
                <span>Update</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="700">
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title class="text-h5 grey lighten-2">
            Update
            {{
              `${currentStudent.fname} ${currentStudent.mname} ${currentStudent.lname}`
            }}
          </v-card-title>

          <v-card-text class="mt-4">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="currentStudent.lrn"
                    :rules="requiredRules"
                    label="LRN"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="currentStudent.fname"
                    :rules="requiredRules"
                    label="First Name"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="currentStudent.mname"
                    :rules="requiredRules"
                    label="Middle Name"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="currentStudent.lname"
                    :rules="requiredRules"
                    label="Last Name"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="currentStudent.address"
                    :rules="requiredRules"
                    label="Address"
                    outlined
                    required
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col cols="8">
                  <v-text-field
                    v-model="currentStudent.email"
                    :rules="requiredRules"
                    label="Email"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="currentStudent.religion"
                    :rules="requiredRules"
                    label="Religion"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="currentStudent.gradeLevel"
                    :rules="requiredRules"
                    label="Grade Level"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="currentStudent.previousGradeLevel"
                    :rules="requiredRules"
                    label="Previous Grade Level"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" text @click="dialog = false"> Cancel </v-btn>
            <v-btn color="primary" text :disabled="!valid" @click="validate">
              Save Changes
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
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
        value: "lrn",
      },
      { text: "First Name", value: "fname" },
      { text: "Middle Name", value: "mname" },
      { text: "Last Name", value: "lname" },
      { text: "Address", value: "address" },
      { text: "Email", value: "email" },
      { text: "Religion", value: "religion" },
      { text: "Grade Level", value: "gradeLevel" },
      { text: "Previous Grade Level", value: "previousGradeLevel" },
      { text: "Actions", value: "actions", sortable: false, width: 120 },
    ],
    dialog: false,
    currentStudent: {},
    valid: true,
    requiredRules: [(v) => !!v || "Required"],
  }),
  methods: {
    ...mapAuthActions(["logOutUser", "getAddresses"]),
    ...mapNavigationActions(["fetchStudent", "updateStudent"]),
    navMenuMethods(method) {
      switch (method) {
        case "logout":
          this.logOutUser();
          break;
        default:
          return null;
      }
    },
    updateHandler(item) {
      this.dialog = true;
      this.currentStudent = item;
    },
    validate() {
      const valid = this.$refs.form.validate();
      if (valid) {
        this.updateStudent(this.currentStudent).then(
          () => (this.dialog = false)
        );
      }
    },
  },
  computed: {
    ...mapAuthGetters(["currentUser", "addresses"]),
    ...mapNavigationGetters(["allStudents"]),
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
    this.fetchStudent();
  },
};
</script>
