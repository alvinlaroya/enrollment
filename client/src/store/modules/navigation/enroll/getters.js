/* export const allClearance = (state) => state.allClearance;
export const verifiedClearance = (state) => state.verifiedClearance;
export const badges = state => ({
    all: state.badges.all,
    verified: state.badges.verified,
}) */

export const allEnrolls = (state) => state.allEnrolls;
export const allGradeEnrolled = (state) => state.selectedGradeEnrolled;
export const count = (state) => state.count;
export const enrolledStudents = (state) => state.enrolledStudents;
export const enrolled = (state) => ({
  all: state.enrolled,
  grade7: state.enrolledG7,
  grade8: state.enrolledG8,
  grade9: state.enrolledG9,
  grade10: state.enrolledG10,
  grade11: state.enrolledG11,
  grade12: state.enrolledG12,
});
