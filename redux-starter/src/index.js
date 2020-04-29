// const {bugAdded, bugResolved} = require('./actions')
import {bugAdded, bugResolved} from './actions'
console.log("bugResolved", bugResolved)

const test = () => console.log('Hello World')
test()
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
