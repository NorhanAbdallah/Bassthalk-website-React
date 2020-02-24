import {fetchChaptersBegin, fetchChaptersSuccess, fetchChaptersFailure } from '../Action/ChaptersAction'
import Axios from "axios";   
import {API_ENDPOINT} from '../../../appConfig'

export function fetchChapters () {
    return dispatch => {
        dispatch(fetchChaptersBegin());
        let url = `${API_ENDPOINT}/chapters`;
        Axios.get(url, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlzcyI6IkFwcCIsImlhdCI6MTU3ODk5ODA2MTU0OSwiZXhwIjoxNTc4OTk4NjY2MzQ5fQ.dn75h_-8EpOPUzAVmigR3rTAIxb0EFP9IV6w7YDpU_k"
          }
        })
          .then(response => {
              dispatch(fetchChaptersSuccess(response.data.data))
              console.log("redux respons" , response)
              return response.data.data;
          })
          .catch(error => dispatch(fetchChaptersFailure()) && console.log("chaptersError:", error));
    }
}