import { userStore } from "./services/userStore";
import { managerStore } from "./services/managerStore"

export const store = {
  user: userStore,
  manager: managerStore,
}