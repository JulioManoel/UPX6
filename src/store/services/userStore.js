import { Alert } from "react-native"
import AuthController from "../../controllers/AuthController"

const authController = new AuthController()

export const userStore = {
  state: {
    currentUser: null
  },

  async create(payload) {
    try {
      this.state.currentUser = await authController.create(payload)
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') return Alert.alert('Erro', 'Este email já está em uso', [{type: 'OK'}])
      if(error.code === 'auth/weak-password') return Alert.alert('Erro', 'A senha deve conter no minimo 6 digitos', [{type: 'OK'}])
      return console.log(error)
    }
  },

  async login(payload) {
    try {
      this.state.currentUser = await authController.login(payload)
    } catch (error) {
      if(error.code === 'auth/invalid-login-credentials') return Alert.alert('Erro', 'Login Invalido', [{type: 'OK'}])
      console.log(error.code)
    }
  }
}