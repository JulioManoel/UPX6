import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BaseController from "./BaseController";
import Manager from "../models/Manager";
import User from "../models/User";

export default class AuthController extends BaseController {
  async create(payload) {
    await createUserWithEmailAndPassword(auth, payload.email, payload.password)
    await AsyncStorage.setItem('auth', JSON.stringify(payload))

    await updateProfile(auth.currentUser, {
      displayName: payload.name
    })

    await super.setDocument('Users', auth.currentUser.uid, {
      uid: auth.currentUser.uid,
      isManager: payload.isManager,
      apprentices: []
    })

    // return new Manager({ ...auth.currentUser, isManager: true })
    return new User(auth.currentUser)
  }

  async login(payload) {
    await signInWithEmailAndPassword(auth, payload.email, payload.password)
    await AsyncStorage.setItem('auth', JSON.stringify(payload))

    // const res = await super.getDocument('Users', auth.currentUser.uid)
    // const isManager = res.isManager
    // const manager = new Manager({ ...auth.currentUser, isManager, apprentices: [] })

    // await res.apprentices.forEach(async apprentice => {
    //   manager.apprentices.push(await super.getDocRef(apprentice))
    // })

    // manager.apprentices.map(async apprentice => {
    //   await super.getDocRef(apprentice)
    //   console.log(manager)
    // })
    
    // const test = await super.get(res.test)
    // console.log(test.data())
    // await super.getDocuments('Users')
    // console.log(res.aprendiz[0].firestore.get())

    return new User(auth.currentUser)
    // return manager
  }
}