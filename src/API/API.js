import { auth } from '../data/firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import {
    arrayUnion,
    collection,
    doc,
    getDocs,
    getFirestore,
    onSnapshot,
    setDoc,
    updateDoc,
} from 'firebase/firestore'

export const authApi = {
    createUserDb(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    },
    signInDb(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    },
    signOut() {
        return signOut(auth)
    },
}

export const postApi = {
    getPostsDb() {
        const db = getFirestore()
        return getDocs(collection(db, 'users'))
    },
    getCommentPostsDb(elem) {
        const db = getFirestore()
        return onSnapshot(doc(db, 'users', elem.id), (doc) => {
            return doc.data().newComment
        })
    },
    addCommentPostsDb(elem, createdComment) {
        const db = getFirestore()
        const commentRef = doc(db, 'users', elem.id)

        return updateDoc(commentRef, {
            newComment: arrayUnion(createdComment),
        })
    },
}

export const userApi = {
    async setUser(name, tag, userId) {
        const db = getFirestore()
        await setDoc(doc(db, 'users', userId), {
            name: name,
            tag: tag,
            id: userId,
        })
    },
}
