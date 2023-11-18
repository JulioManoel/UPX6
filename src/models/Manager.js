export default class Manager {
  constructor({ isManager, apprentices, apprenticesObj } = {}) {
    this.isManager = isManager
    this.apprentices = apprentices
    this.apprenticesObj = apprenticesObj
  }
}