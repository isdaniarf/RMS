export const isObjectEmpty = (obj) => (
    Object.keys(obj).length === 0 && obj.constructor === Object
)

export const createAsyncAction = (type) => ({
    start: type + '_START',
    success: type + '_SUCCESS',
    fail: type + '_FAIL'
})