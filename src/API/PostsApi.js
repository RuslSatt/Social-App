import {arrayUnion, collection, doc, getDocs, getFirestore, onSnapshot, updateDoc} from "firebase/firestore";

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

export const addCommentPostsApi = (elem, createdComment) => {
    const db = getFirestore();
    const commentRef = doc(db, "users", elem.id);

    return updateDoc(commentRef, {
        newComment: arrayUnion(createdComment)
    })
}
