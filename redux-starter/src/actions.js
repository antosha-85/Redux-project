const {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} = require('./actionTypes')

module.exports = {

    bugAdded : description=> ({
            type: BUG_ADDED,
            payload: {
                description
            }
    }),
    
    bugResolved : id => ({
        type: BUG_RESOLVED,
        payload: {
            id
        }
    })
}
