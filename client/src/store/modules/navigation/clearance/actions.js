import EventService from "@/services/clearance/Clearance.js";
import * as types from "@/store/mutation-types";

export const fetchClearance = ({ commit }) => {
  EventService.getClearanceEvent()
    .then((response) => {
      commit(types.SET_CLEARANCE_BADGE, response.data);
      commit(types.SET_ALL_CLEARANCE, response.data.allClearance.rows);
      commit(
        types.SET_VERIFIED_CLEARANCE,
        response.data.verifiedClearance.rows
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addClearance = (_, payload) => {
  EventService.addClearanceEvent(payload)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
