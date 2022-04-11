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
          <v-card>
            <v-card-title class="text-h6"
              >DEFEMNHS Enrollment System | User Management</v-card-title
            >
            <v-card-subtitle>List of users</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-toolbar flat>
              <v-container fluid>
                <v-row>
                  <v-col md="4" xs="4" sm="4" lg="6"> </v-col>
                  <v-col md="8" xs="8" sm="8" lg="6">
                    <v-text-field
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search User"
                      single-line
                      style="margin-top: 10px"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="personnels"
              loading-text="Loading... Please wait"
              no-results-text="No Available Article"
              class="elevation-1"
              :search="search"
            >
              <template v-slot:item.actions="{ item }">
                <v-icon class="mr-2" color="green" @click="editItem(item)">
                  mdi-file-document-edit
                </v-icon>
              </template>
              <template v-slot:item.verified="{ item }">
                <v-chip class="ma-2" v-if="!item.verified">
                  Not Verified
                </v-chip>
                <v-chip class="ma-2" color="success" v-else> Verified </v-chip>
              </template>
              <template v-slot:item.status="{ item }">
                <v-chip class="ma-2" color="primary">
                  {{
                    role(
                      typeof item.status == "object"
                        ? item.status.value
                        : item.status
                    )
                  }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="updateDialog" width="650">
        <template v-slot:activator="{ on, attrs }"> </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Update {{ user.fname }}
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-switch
                    v-model="user.verified"
                    :label="
                      user.verified
                        ? `Accept ${user.fname} ${user.lname}`
                        : `Decline ${user.fname} ${user.lname}`
                    "
                  ></v-switch>
                </v-col>
              </v-row>
              <v-row v-if="user.verified" class="mt-0">
                <v-col cols="6">
                  <v-switch
                    v-model="user.hasUpdate"
                    :label="
                      user.hasUpdate
                        ? `${user.fname} can update a teacher`
                        : `${user.fname} can't update a teacher`
                    "
                  ></v-switch>
                </v-col>
                <v-col cols="6">
                  <v-select
                    v-model="user.status"
                    :items="roles"
                    item-text="label"
                    item-value="value"
                    label="Select Role"
                    return-object
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="default" text @click="updateDialog = false">
              Close
            </v-btn>
            <v-btn color="success" text @click="updatePersonnel">
              Save Changes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        color="success"
        :right="true"
        :top="true"
      >
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
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
    ...mapAuthActions(["logOutUser"]),
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
