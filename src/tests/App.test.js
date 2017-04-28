import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import reducers from '../js/reducers/reducerIndex'
import * as actions from '../js/actions/actionIndex'
import * as types from '../js/actions/actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const employee = [{ "firstName": "Eric"}]

describe('fetches employees', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  test('creates LOAD_EMPLOYEES when fetching employees has been done', () => {
    nock('http://localhost:8080')
      .get('/employee/all')
      .reply(200, employee)

    const expectedActions = [
      { type: types.loadEmployees.start },
      { type: types.loadEmployees.success, employees: employee }      
    ]

    const store = mockStore({ employees: [] })

    return store.dispatch(actions.boundLoadContacts())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  })

  it('creates SAVE_EMPLOYEE when saving employees has been done', () => {
    nock('http://localhost:8080')
      .get('/employee/all')
      .reply(200, employee)
    
    nock('http://localhost:8080')
      .post('/employee/add', employee)
      .reply(200)

    const expectedActions = [
      { type: types.TOGGLE_SAVE_SNACKBAR, isOpen: true },
      { type: types.loadEmployees.start },
      { type: types.loadEmployees.success, employees: employee }
    ]

    const store = mockStore({ isOpen: true, employees: [] })

    return store.dispatch(actions.boundSaveEmployee(employee))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
  })
})