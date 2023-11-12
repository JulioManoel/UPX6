import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import User from "../models/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BaseController from "./BaseController";

export default class AuthController extends BaseController {
    async create(payload) {
      await createUserWithEmailAndPassword(auth, payload.email, payload.password)
      
      await AsyncStorage.setItem('auth', JSON.stringify(payload))

      await updateProfile(auth.currentUser, {
        displayName: payload.name
      })

      const user = new User(auth.currentUser)

      await super.setDocument('Gestor', user.uid, {})

      return user
    }

    async login(payload) {
      await signInWithEmailAndPassword(auth, payload.email, payload.password)
      await AsyncStorage.setItem('auth', JSON.stringify(payload))
      return new User(auth.currentUser)
    }
}