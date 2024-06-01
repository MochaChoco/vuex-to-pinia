import axios from 'axios'

export const state = () => ({
  userData: null, // 사용자 정보
  userId: 0, // 사용자 ID
})

export const mutations = {
  setUserData(state, userData) {
    state.userData = userData
  },
  setUserId(state, userId) {
    state.userId = userId
  },
}

export const actions = {
  async fetchUserDataById({ commit, state }) {
    if (state.userId) {
      try {
        const response = await axios.get(
          `https://test.com/api/users/${state.userId}`
        )
        // 유저 정보 저장 및 상세 유저 정보 가져오기 로직 실행
        commit('setUserData', response.data)
        await this.dispatch('user/fetchUserDetail')
        return response.data
      } catch (error) {
        console.error(`Error fetching user data for ID ${state.userId}:`, error)
      }
    } else {
      console.error('No user ID set.')
    }
  },
  async fetchUserDetail({ state }) {
    // 유저 정보의 id가 짝수라면 추가적인 유저 정보를 가져옴
    if (state.userData && state.userData.id % 2 === 0) {
      console.log('User data fetched:', state.userData)
      try {
        const response = await axios.get(
          `https://test.com/api/users/detail?userId=${state.userData.id}`
        )
        console.log('Additional user data fetched:', response.data)
      } catch (error) {
        console.error(
          `Error fetching additional data for user ID ${state.userData.id}:`,
          error
        )
      }
    }
  },
}
