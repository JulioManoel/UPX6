import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BaseController from "./BaseController";
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
      isManager: true,
      apprentices: []
    })

    return new User(auth.currentUser)
  }

  async login(payload) {
    await signInWithEmailAndPassword(auth, payload.email, payload.password)
    await AsyncStorage.setItem('auth', JSON.stringify(payload))

    return new User(auth.currentUser)
  }

  async logout() {
    await auth.signOut()
    await AsyncStorage.clear()
  }
}