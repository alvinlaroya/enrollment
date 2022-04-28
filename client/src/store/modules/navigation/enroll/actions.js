import EventService from "@/services/enroll/Enroll.js";
import * as types from "@/store/mutation-types";

/* export const fetchClearance = ({ commit }) => {
  EventService.getClearanceEvent()
    .then((response) => {
      commit(types.SET_CLEARANCE_BADGE, response.data);
      commit(types.SET_ALL_CLEARANCE, response.data.allClearance.rows);
      commit(types.SET_VERIFIED_CLEARANCE, response.data.verifiedClearance.rows);
    })
    .catch((error) => {
      console.log(error);
    });
}; */

export const addEnroll = (_, payload) => {
  EventService.addEnrollEvent(payload)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchEnrolls = ({ commit }) => {
  EventService.getEnrollEvent()
    .then((response) => {
      commit("SET_ALL_ENROLL", response.data.allEnroll.rows);
      commit("SET_ALL_ENROLL_COUNT", response.data.allEnroll.count);
      commit("SET_ENROLLED", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSelectedGradeEnrolled = ({ commit }, payload) => {
  EventService.getSelectedGradeEnrolledEvent(payload)
    .then((response) => {
      commit("SET_ALL_GRADE_ENROLL", response.data.allEnroll.rows);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchEnrollsByBarangay = ({ commit }, payload) => {
  EventService.getEnrollByBarangayEvent(payload)
    .then((response) => {
      commit(
        "SET_ALL_ENROLL_BY_BARANGAY",
        response.data.allEnrollByBarangay.rows
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export const exportToCsvEnrollByBarangay = (_, payload) => {
  EventService.exportToCsvByBarangayEvent(payload)
    .then((response) => {
      //
    })
    .catch((error) => {
      console.log(error);
    });
};

export const udpateEnrollStatus = ({ commit }, payload) => {
  EventService.updateEnrollStatusEvent(payload)
    .then((response) => {
      commit("SET_ENROLL_STATUS", payload.id);
    })
    .catch((error) => {
      console.log(error);
    });
};
