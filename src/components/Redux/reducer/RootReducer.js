import { combineReducers } from "redux";
import subject from "./subjectsReducer";
import chapters from './ChaptersReducer'

export default combineReducers({
    subject: subject,
    chapters: chapters
})