import axios from "axios";
import { ADDQUESTION, UPDATEQUESTION, FINDALLQUESTIONS, FINDQUESTION, DELETEQUESTION } from "./actions";

export function addQUESTION(obj) {

    return {
        type: ADDQUESTION,
        payload: obj
    }
}
export function findQuestion(id) {
    return {
        type: FINDQUESTION,
        payload: id
    }
}
export function findAllQuestions() {
    return {
        type: FINDALLQUESTIONS,

    }
}
export function updateQuestion(obj) {
    return {
        type: UPDATEQUESTION,
        payload: obj
    }
}
export function deleteQuestion(id) {
    return {
        type: DELETEQUESTION,
        payload: id
    }
}