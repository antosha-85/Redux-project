const {bugAdded, bugResolved} = require('./actions')
console.log("bugResolved", bugResolved)


const store = require ("./store");

const unsubscribe = store.subscribe(()=> {
    console.log('Store changed', store.getState())
})
store.dispatch(bugAdded('Bug 1'))
store.dispatch(bugResolved(1))
unsubscribe();

// store.dispatch({
//     type: BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })
console.log("store", store.getState())
