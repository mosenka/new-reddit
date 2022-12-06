import {Action, action } from "easy-peasy";



export interface ICommentModel {
    comment: string,
    addComment: Action<ICommentModel, string>,
}
const model = {
    comment: "test comment",
    addComment: action((state , payload) => {
        // return {...state, comment: payload }
        state.comment = payload;

    })

} as ICommentModel;

export default model;