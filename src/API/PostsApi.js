import {collection, doc, getDocs, getFirestore, onSnapshot} from "firebase/firestore";

export const getPostsApi =  () => {
    const db = getFirestore();
    return  getDocs(collection(db, "users"));
}

export const getCommentPostsApi = (elem) => {
    const db = getFirestore();
    return onSnapshot(doc(db, "users", elem.id), (doc) => {
        return doc.data().newComment;
    });
}

export const addCommentPostsApi = (postId) => {

}
