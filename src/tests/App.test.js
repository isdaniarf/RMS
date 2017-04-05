import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import * as actions from '../js/actions/actionIndex'
import * as types from '../js/actions/actionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    nock('http://localhost:8080')
      .get('/employee/all/')
      .reply(200)

    const expectedActions = [
      { type: types.LOAD_CONTACTS }
    ]
    const store = mockStore({ employees: [] })

    return store.dispatch(actions.boundLoadContacts())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})