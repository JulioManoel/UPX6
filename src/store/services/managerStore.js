import { Alert } from "react-native"
import ManagerController from "../../controllers/ManagerController"

const managerController = new ManagerController()

export const managerStore = {
  state: {
    manager: null
  },

  async create(payload, apprentices) {
    try {
      const apprentice = await managerController.create(payload, apprentices)
      this.state.manager.apprenticesObj.push(apprentice)
      return true
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') return Alert.alert('Erro', 'Este email já está em uso', [{type: 'OK'}])
      if(error.code === 'auth/weak-password') return Alert.alert('Erro', 'A senha deve conter no minimo 8 digitos', [{type: 'OK'}])
      if(error.code === 'auth/missing-email') return Alert.alert('Erro', 'Digite um email valido', [{type: 'OK'}])
      return console.log(error)
    }
  },

  async get(uid) {
    this.state.manager = await managerController.get(uid)
  },
}