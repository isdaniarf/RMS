import reducer from '../js/reducers/reduceEmployees'
import * as types from '../js/actions/actionTypes'

const employee = [{ "firstName": "Eric"}]
const filtered = [{ "firstName": "Chelsea"}]

describe('employee reducers', () => {
    it('should return the initial state', () => {
        console.log(reducer);
        expect(
            reducer(undefined, {})
        ).toEqual({
            selected: null,
            initial: [],
            filtered: []
        });
    })

    it('should handle LOAD_EMPLOYEES', () => {
        console.log(reducer);
        expect(
            reducer(undefined, {
                type: types.LOAD_EMPLOYEES,
                employees: employee
            })
        ).toEqual({
            selected: null,
            initial: employee,
            filtered: employee
        });
    })

    it('should handle SEARCH_EMPLOYEE', () => {
        // console.log(reducer);
        expect(
            reducer(undefined, {
                type: types.SEARCH_EMPLOYEES,
                filteredEmployees: filtered
            })
        ).toEqual({
            selected: null,
            initial: [],
            filtered: filtered
        });
    })
})