import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import Manager from "../models/Manager";
import BaseController from "./BaseController";

export default class ManagerController extends BaseController {
  async create(payload, apprentices) {
    const manager = auth.currentUser
    await createUserWithEmailAndPassword(auth, payload.email, payload.password)

    await updateProfile(auth.currentUser, {
      displayName: payload.name
    })

    const apprentice = {
      uid: auth.currentUser.uid,
      isManager: false,
      name: payload.name,
      department: payload.department,
      evaluation: {
        communication: [],
        performance: [],
        punctuality: [],
      },
    }

    await super.setDocument('Users', auth.currentUser.uid, apprentice)

    apprentices.push(auth.currentUser.uid)
    await super.updateDocument('Users', manager.uid, { apprentices })

    auth.currentUser = manager
    return this.set(apprentice)
  }

  set(apprentice) {
    const { communication, performance, punctuality } = apprentice.evaluation
    let sum = 0

    for (let i = 0; i < communication.length; i++)
      sum += communication[i] + performance[i] + punctuality[i]

    apprentice.rating = sum === 0 ? '-' : (sum / (communication.length * 3)).toFixed(1)
    return apprentice
  }

  async get(uid) {
    const res = await super.getDocument('Users', uid)

    const apprenticesObj = []
    for (const apprentice of res.apprentices) {
      const res = await super.getDocument('Users', apprentice)
      apprenticesObj.push(this.set(res))
    }

    return new Manager({ ...res, apprenticesObj })
  }

  async update(payload, uid) {
    await super.updateDocument('Users', payload.uid, payload)
    return this.set(payload)
  }
}