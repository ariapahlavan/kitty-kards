import {
  CHANGE_SEARCH_FIELD,
  REQ_ROBOTS_PEND,
  REQ_ROBOTS_SUCC,
  REQ_ROBOTS_FAIL
} from './constants.js';

const initialStateSearch = {
  searchField: ''
};

export const searchContacts = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

const initialStateContacts = {
  users: [],
  isPending: false,
  error: ''
};

export const requestContacts = (state=initialStateContacts, action={}) => {
  switch (action.type) {
    case REQ_ROBOTS_PEND:
      return Object.assign({}, state, {isPending: true});
    case REQ_ROBOTS_SUCC:
      return Object.assign({}, state, {users: action.payload,
                                       isPending: false});
    case REQ_ROBOTS_FAIL:
      return Object.assign({}, state, {users: [],
                                       isPending: true,
                                       error: action.payload});
    default:
      return state;
  }
}
