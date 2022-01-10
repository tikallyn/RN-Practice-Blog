import React, { useReducer } from 'react'

export default (reducer, actions, initialState) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        //actions === { addBlogPost: (dispatch) => {return () => {}}}
        //in order for our actions that we define in Context to be bound to THIS instance of context
        //we are using this function, which calls each action we import with the dispatch in this file attached
        const boundActions = {}
        for (let key in actions) {
            //taking each action and sending it back with dispatch as a prop
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }
    return { Context, Provider }
}