import {
  SET_VERIFIED_CLEARANCE,
  SET_ALL_CLEARANCE,
  SET_CLEARANCE_BADGE,
} from "../../../mutation-types";

export default {
  SET_ALL_ENROLL(state, data) {
    state.allEnrolls = [];
    state.allEnrolls = data;
  },
  SET_ALL_ENROLL_COUNT(state, data) {
    state.count = data;
  },
  SET_ALL_ENROLL_BY_BARANGAY(state, data) {
    state.allEnrolls = [];
    state.allEnrolls = data;
  },
  SET_ENROLL_STATUS(state, data) {
    state.allEnrolls = state.allEnrolls.map((obj) => {
      if (obj.id === data) {
        return { ...obj, enrolled: !obj.enrolled };
      }

      return obj;
    });
  },
};
