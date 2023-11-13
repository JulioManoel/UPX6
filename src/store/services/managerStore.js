import { Alert } from "react-native"
import ManagerController from "../../controllers/ManagerController"

const managerController = new ManagerController()

export const managerStore = {
  state: {
    manager: null
  },

  async get(uid) {
    this.state.manager = await managerController.get(uid)
  }
}