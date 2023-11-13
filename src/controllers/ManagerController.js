import Manager from "../models/Manager";
import BaseController from "./BaseController";

export default class ManagerController extends BaseController {
  async get(uid) {
    const res = await super.getDocument('Users', uid)

    const apprentices = []

    for (const apprentice of res.apprentices) {
      const res = await super.getDocRef(apprentice)
      
      const {communication, performance, punctuality} = res.evaluation
      res.rating = ((communication + performance + punctuality) / 3).toFixed(1)
      apprentices.push(res) 
    }

    return new Manager({ ...res, apprentices })
  }
}