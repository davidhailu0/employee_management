import {collection,addDoc,doc,getDoc,getDocs,updateDoc,deleteDoc} from "firebase/firestore"
import { db } from "../utils/firebase";

const collectionRef = collection(db,"employees")

export const allEmployees = async()=>{
    return await getDocs(collectionRef)
}

export const getEmployee = async(id)=>{
    return await getDoc(doc(db,"employees",id))
}

export const addEmployee = async(newEmployee)=>{
    return await addDoc(collectionRef,newEmployee)
}

export const updateEmployee = async(id,updatedEmployee)=>{
    const docRef = doc(db,"employees",id)
    return await updateDoc(docRef,updatedEmployee)
}

export const deleteEmployee = async(id)=>{
    const docRef  = doc(db,"employees",id)
    await deleteDoc(docRef)
}
