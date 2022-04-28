<template>
  <div>
    <v-container fluid>
      <a @click="$router.back()">Go back</a>
      <v-row class="mt-1">
        <v-col cols="12">
          <v-card>
            <v-toolbar dense class="elevation-1">
              <v-toolbar-title
                >{{ allGradeEnrolled.length }} Enrolled Student(s) in Grade
                {{ $route.params.level }}</v-toolbar-title
              >

              <v-spacer></v-spacer>
              <v-btn
                depressed
                color="primary"
                class="mb-1 ml-2"
                @click="printDialog = true"
              >
                <v-icon>mdi-printer-outline</v-icon>Print Preview
              </v-btn>
            </v-toolbar>
            <v-data-table
              :headers="headers"
              :items="allGradeEnrolled"
              sort-by="calories"
              class="elevation-1"
              :search="search"
            >
              <template v-slot:[`item.f1`]="{ item }">
                <v-chip class="ma-2" @click="viewImage(item.f1)">
                  Image
                </v-chip>
              </template>
              <template v-slot:[`item.f3`]="{ item }">
                <v-chip class="ma-2" @click="viewImage(item.f3)">
                  Image
                </v-chip>
              </template>
              <template v-slot:item.status="{ item }">
                <v-chip :color="item.enrolled ? 'success' : 'warning'">{{
                  item.enrolled ? "Enrolled" : "Pending"
                }}</v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="printDialog" width="816">
      <v-card>
        <v-card-text id="printMe">
          <br />
          <span style="margin-left: 5px; color: black; margin-top: 5px"
            >Enrolled Student(s) in Grade {{ $route.params.level }}</span
          >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th style="text-align: left">LRN</th>
                  <th style="text-align: left">Name</th>
                  <th style="text-align: left">Address</th>
                  <th style="text-align: left">Track</th>
                  <th style="text-align: left">Strand</th>
                  <th style="text-align: left">Email</th>
                  <th style="text-align: left">Grade Level</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in allGradeEnrolled" :key="i">
                  <th style="text-align: left; font-weight: 400">
                    {{ item.b2 }}
                  </th>
                  <th style="text-align: left; font-weight: 400">
                    {{ `${item.b4} ${item.b5} ${item.b3}` }}
                  </th>
                  <th style="text-align: left; font-weight: 400">
                    {{ `${item.b21} ${item.b22} ${item.b23}` }}
                  </th>
                  <th style="text-align: left; font-weight: 400">
                    {{ item.a15 }}
                  </th>
                  <th style="text-align: left; font-weight: 400">
                    {{ item.a16 }}
                  </th>
                  <th style="text-align: left; font-weight: 400">
                    {{ item.b18 }}
                  </th>
                  <th style="text-align: left; font-weight: 400">
                    Grade {{ $route.params.level }}
                  </th>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text v-print="printObj"
            ><v-icon>mdi-printer-outline</v-icon> Print
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapNavigationGetters, mapActions: mapNavigationActions } =
  createNamespacedHelpers("navigation");
export default {
  data: () => ({
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
      { text: "Birth Certificate", value: "f3" },
      { text: "Enroll Status", value: "status" },
    ],
    printDialog: false,
    printObj: {
      id: "printMe",
      popTitle: "Enrolled Students",
      extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
      beforeOpenCallback(vue) {
        vue.printLoading = true;
        console.log("打开之前");
      },
      openCallback(vue) {
        vue.printLoading = false;
        console.log("执行了打印");
      },
      closeCallback(vue) {
        console.log("关闭了打印工具");
      },
    },
  }),
  computed: {
    ...mapNavigationGetters(["allGradeEnrolled"]),
  },
  methods: {
    ...mapNavigationActions(["getSelectedGradeEnrolled"]),
  },
  mounted() {
    this.getSelectedGradeEnrolled(this.$route.params.level);
  },
};
</script>
