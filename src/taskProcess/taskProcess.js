import { db, auth } from '../../firebaseConfig';
import { collection, addDoc, getDocs,doc,deleteDoc } from "firebase/firestore";


export const addTask = async (state) => {
    try {
        
const user=auth.currentUser;
        await addDoc(collection(db, `users/${user.uid}/tasks`), { ...state });
    } catch (e) {
        console.error("Error adding document:", e);
    }
}

export const getTasks = async () => {
    try {
        
const user=auth.currentUser;
        const tasks = await getDocs(collection(db, `users/${user.uid}/tasks`));
        return tasks;
    } catch (e) {
        console.error("Error reading document:", e);
    }
}


export const deleteTask=async(taskId)=>{
    try{
        
const user=auth.currentUser;
        await deleteDoc(doc(db,`users/${user.uid}/tasks`,id));


    }catch(error){
        console.error("error delete document:",e);
    }
}