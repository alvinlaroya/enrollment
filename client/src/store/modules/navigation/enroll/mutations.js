import {
  SET_VERIFIED_CLEARANCE,
  SET_ALL_CLEARANCE,
  SET_CLEARANCE_BADGE,
} from "../../../mutation-types";

export default {
  SET_ALL_STUDENT(state, data) {
    state.allStudents = [];
    state.allStudents = data;
  },
  SET_ALL_ENROLL(state, data) {
    state.allEnrolls = [];
    state.allEnrolls = data;
  },
  SET_ENROLLED(state, data) {
    state.enrolled = data.enrolled.count;
    state.enrolledG7 = data.enrolledGrade7.count;
    state.enrolledG8 = data.enrolledGrade8.count;
    state.enrolledG9 = data.enrolledGrade9.count;
    state.enrolledG10 = data.enrolledGrade10.count;
    state.enrolledG11 = data.enrolledGrade11.count;
    state.enrolledG12 = data.enrolledGrade12.count;
    state.enrolledStudents = data.enrolled.rows;
  },
  SET_ALL_GRADE_ENROLL(state, data) {
    state.selectedGradeEnrolled = data;
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
