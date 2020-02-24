import {FETCH_SUBJECTS_BEGIN,
    FETCH_SUBJECTS_SUCCESS, 
    FETCH_SUBJECTS_FAILURE
   } from '../Action/types';

const initalState = {
    subject: [],
    loadintg: false,
    error: null
};  


export default function subjectsReducer (state = initalState , action) {
    switch(action.type) {
        case FETCH_SUBJECTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        
        case FETCH_SUBJECTS_SUCCESS: 
        return {
            ...state, 
            loading: false,
            subject: action.payload.subjects
        };    
        
        case FETCH_SUBJECTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                subject: []
            };

        default:
            return state    
    }
}