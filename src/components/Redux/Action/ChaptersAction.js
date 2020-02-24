import {FETCH_CHAPTERS_BEGIN, FETCH_CHAPTERS_SUCCESS, FETCH_CHAPTERS_FAILURE} from './types';

export const fetchChaptersBegin = () => ({
    type: FETCH_CHAPTERS_BEGIN
})

export const fetchChaptersSuccess = (chapters) => ({
    type: FETCH_CHAPTERS_SUCCESS,
    payload: {chapters}
})

export const fetchChaptersFailure = () => ({
    type: FETCH_CHAPTERS_FAILURE
}) 