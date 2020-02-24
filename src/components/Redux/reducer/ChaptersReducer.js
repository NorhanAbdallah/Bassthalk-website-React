import {FETCH_CHAPTERS_BEGIN, FETCH_CHAPTERS_SUCCESS, FETCH_CHAPTERS_FAILURE} from '../Action/types';

const initialState = {
    chapters: []
}

export default function chaptersReducer  (state = initialState , action) {
    switch (action.type) {
        case FETCH_CHAPTERS_BEGIN: 
          return {
               ...state,

           }
        case FETCH_CHAPTERS_SUCCESS: 
           return {
            ...state,
            chapters: action.payload.chapters
          }   
       case FETCH_CHAPTERS_FAILURE: 
          return {
              ...state,
              chapters: []

          }    

       default:
           return state   
    }

}