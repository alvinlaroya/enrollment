import { SET_VERIFIED_CLEARANCE, SET_ALL_CLEARANCE, SET_CLEARANCE_BADGE } from '../../../mutation-types'

export default {
  [SET_ALL_CLEARANCE](state, data) {
    state.allClearance = data
  },
  [SET_VERIFIED_CLEARANCE](state, data) {
    state.verifiedClearance = data
  },
  [SET_CLEARANCE_BADGE](state, data) {
    state.badges.all = data.allClearance.count
    state.badges.verified = data.verifiedClearance.count
  },
}