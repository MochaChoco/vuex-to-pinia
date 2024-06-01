import { defineStore } from 'pinia'
import { fetchUserById, fetchUserDetailById } from '@/api/userFetching'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: null,
  }),
  actions: {
    async loadUserData(userId) {
      if (userId) {
        try {
          const response = await fetchUserById(userId)
          this.userData = response.data

          console.log('User data fetched:', response.data)

          // 유저 정보의 id가 짝수라면 추가적인 유저 정보를 가져옴
          if (userId % 2 === 0) {
            await this.loadUserDetail(userId)
          }

          return this.userData
        } catch (error) {
          console.error('Failed to fetch user data:', error)
        }
      } else {
        console.error('User ID is not provided.')
      }
    },
    async loadUserDetail(userId) {
      try {
        const response = await fetchUserDetailById(userId)
        this.userData = {
          ...this.userData,
          ...response.data,
        }

        console.log('Additional user data fetched:', response.data)
      } catch (error) {
        console.error('Failed to fetch additional user data:', error)
      }
    },
  },
})
