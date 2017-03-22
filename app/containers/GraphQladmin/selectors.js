import { createSelector } from 'reselect';

/**
 * Direct selector to the graphQladmin state domain
 */
const selectGraphQladminDomain = () => (state) => state.get('graphQladmin');//'graphQladmin');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GraphQladmin
 */

const makeSelectGraphQladmin = () => createSelector(
  selectGraphQladminDomain(),
  (substate) => {
    console.log(" substate at QL reducer: ", substate.toJS())
    substate.toJS()
  }
);

export default makeSelectGraphQladmin;
export {
  selectGraphQladminDomain,
};
