const {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} = require('./actionTypes')

// [] our state will be an array
let lastId = 0;
// it is a pure function when the outcome is always the same if we pass the same arguments
function reducer (state = [], action) {
    switch(action.type) {
        case BUG_ADDED:
            return [...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case BUG_REMOVED: 
        return state.filter(bug => bug.id !== action.payload.id);
        case BUG_RESOLVED: 
        return state.map(bug => bug.id !== action.payload.id ? bug : {
            ...bug, resolved: true
        });
        default: 
            return state;
    }

    // if (action.type === 'bugAdded') {
        //     return [...state,
        //         {
            //             id: ++lastId,
            //             description: action.payload.description,
            //             resolved: false
            //         }
            //     ]
            // } else if (action.type === 'bugRemoved') {
                //     return state.filter(bug => bug.id !== action.payload.id)
                // } else {
                    //     return state
                    // }
                }
    module.exports =  reducer