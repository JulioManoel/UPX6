import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import User from "../models/User";

export default class AuthController {
    async create(payload) {
      await createUserWithEmailAndPassword(auth, payload.email, payload.password)

      await updateProfile(auth.currentUser, {
        displayName: payload.name
      })

      return new User(auth.currentUser)
    }

    async login(payload) {
      await signInWithEmailAndPassword(auth, payload.email, payload.password)
      return new User(auth.currentUser)
    }
}