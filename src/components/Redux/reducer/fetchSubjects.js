import {fetchSubjectsBegin,
    fetchSubjectsSuccess, 
    fetchSubjectsFailed
   } from '../Action/SubjectsAction';
   import Axios from "axios";   
   import {API_ENDPOINT} from '../../../appConfig'



   export function fetchSubjects() {
       return dispatch => {
           dispatch(fetchSubjectsBegin());
           let url = `${API_ENDPOINT}/subject`
           // console.log('url is:' , url);
   
           Axios.get(url, {
               headers: {
                   Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlzcyI6IkFwcCIsImlhdCI6MTU3ODk5ODA2MTU0OSwiZXhwIjoxNTc4OTk4NjY2MzQ5fQ.dn75h_-8EpOPUzAVmigR3rTAIxb0EFP9IV6w7YDpU_k"
               }
           }).then(response => {
               dispatch(fetchSubjectsSuccess(response.data.data));
            //    console.log("redux respons" , response)
               return response.data.data;
           }).catch(error => dispatch(fetchSubjectsFailed(error) && console.log("redux error" , error)));
       };
   }