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
        <v-col cols="4">
          <v-container>
            <v-row class="mt-10">
              <v-col cols="12" class="text-center">
                <v-avatar size="200">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                    alt="John"
                  />
                </v-avatar>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="8">
          <v-container>
            <v-row style="margin-top: 100px">
              <v-col cols="12">
                <h1>
                  {{ `${currentUser.fname} ${currentUser.lname}` }}
                </h1>
                <p style="color: #309bf2">{{ currentUser.email }}</p>
                <p style="margin-top: -10px">
                  {{
                    currentUser.verified
                      ? "Not Verified Yet"
                      : "Verified Account"
                  }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row style="margin-top: -50px">
        <v-col cols="4">
          <v-container>
            <v-row class="mt-10">
              <v-col cols="12" class="ml-10">
                <h2>Account</h2>
              </v-col>
              <v-col cols="12" class="ml-10">
                <h4>First Name:</h4>
              </v-col>
              <v-col cols="12" class="ml-10">
                <h4>Middle Name:</h4>
              </v-col>
              <v-col cols="12" class="ml-10">
                <h4>Last Name:</h4>
              </v-col>
              <v-col cols="12" class="ml-10">
                <h4>Email:</h4>
              </v-col>
              <v-col cols="12" class="ml-10">
                <h4>Address:</h4>
              </v-col>
              <v-col cols="12" class="ml-10">
                <h4>Birth Date:</h4>
              </v-col>
              <v-col cols="12" class="ml-10">
                <h4>Status:</h4>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="7">
          <v-container>
            <v-row class="mt-0">
              <v-col cols="12" style="margin-top: 90px">
                <v-text-field
                  dense
                  outlined
                  readonly
                  :value="currentUser.fname"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-0">
                <v-text-field
                  style="margin-top: -42px"
                  dense
                  outlined
                  readonly
                  :value="currentUser.mname"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-0">
                <v-text-field
                  style="margin-top: -42px"
                  dense
                  outlined
                  readonly
                  :value="currentUser.lname"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-0">
                <v-text-field
                  style="margin-top: -42px"
                  dense
                  outlined
                  readonly
                  :value="currentUser.email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-0">
                <v-text-field
                  style="margin-top: -42px"
                  dense
                  outlined
                  readonly
                  :value="currentUser.address"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-0">
                <v-text-field
                  style="margin-top: -42px"
                  dense
                  outlined
                  readonly
                  :value="dateFormat(currentUser.birthDate)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="ml-0">
                <v-text-field
                  style="margin-top: -42px"
                  dense
                  outlined
                  readonly
                  :value="renderStatus(currentUser.status)"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
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
    updateDialog: false,
    snackbar: false,
    snackbarText: "",
    search: "",
    totalArticles: 0,
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
        text: "Verify",
        value: "verified",
      },
      { text: "First name", value: "fname" },
      { text: "Middle name", value: "mname" },
      { text: "Last name", value: "lname" },
      { text: "Address", value: "address" },
      { text: "Email", value: "email" },
      { text: "Position", value: "position" },
      { text: "Role", value: "status" },
    ],
    user: {},
    roles: [
      { label: "No Role", value: 0 },
      { label: "Super Admin", value: 1 },
      { label: "Admin", value: 2 },
    ],
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
  }),
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
    caseBadges: {
      handler() {
        this.setBadge();
      },
      deep: true,
    },
  },
  methods: {
    ...mapNavigationActions(["fetchUsers", "updateUser"]),
    ...mapAuthActions(["logOutUser", "currentUser"]),
    renderStatus(item) {
      switch (item) {
        case 1:
          return "Super Admin";
          break;
        case 2:
          return "Admin";
          break;
        default:
          return "No Role";
          break;
      }
    },
    dateFormat(date) {
      return new Date(date).toLocaleString("default", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
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
    editItem(item) {
      this.user = item;
      this.updateDialog = true;
    },
    downloadItem(item) {
      console.log(item);
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
      this.items[0].count = this.count;
    },
    role(status) {
      if (status == 0) return "No Role";
      if (status == 1) return "Super Admin";
      if (status == 2) return "Admin";
    },
    updatePersonnel() {
      this.updateUser(this.user);
      this.snackbar = true;
      this.snackbarText = `Personnel ${this.user.fname} Updated!`;
      this.updateDialog = false;
      this.user = {};
    },
  },
  computed: {
    ...mapNavigationGetters(["personnels"]),
    ...mapAuthGetters(["currentUser"]),
  },
  created() {
    this.setBadge();
    EventBus.$on("switch-mini", () => {
      var element = document.querySelector("#sidebar");
      element.style.transitionDuration = "0.1s";
      this.mini = !this.mini;
      element.style.left = !this.mini ? "0px" : "-55px";
    });
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style></style>
