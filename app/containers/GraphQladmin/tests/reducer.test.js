
import { fromJS } from 'immutable';
import graphQladminReducer from '../reducer';

describe('graphQladminReducer', () => {
  it('returns the initial state', () => {
    expect(graphQladminReducer(undefined, {})).toEqual(fromJS({}));
  });
});
