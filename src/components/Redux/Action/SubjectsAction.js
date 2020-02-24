import {FETCH_SUBJECTS_BEGIN,
        FETCH_SUBJECTS_SUCCESS, 
        FETCH_SUBJECTS_FAILURE
       } from './types'

       

export const fetchSubjectsBegin = () => ({
    type: FETCH_SUBJECTS_BEGIN
});

export const fetchSubjectsSuccess = (subjects) => ({
    type: FETCH_SUBJECTS_SUCCESS,
    payload: {subjects}
}) ;

export const fetchSubjectsFailed = (error) => ({
type: FETCH_SUBJECTS_FAILURE,
payload: {error}
});
