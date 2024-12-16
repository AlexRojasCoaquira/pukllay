import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

const dataUser = {
  name: '',
  lastname: '',
  birthday: '',
  gender: '',
  id: '',
}
export const useProfile = defineStore('profile', () => {
  const user = reactive(dataUser)
  function setProfile(payload) {
    localStorage.setItem('setProfile', JSON.stringify(payload));
  }

  return { setProfile }
})
