import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

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
          `${BASE_URL}/api/users/${state.userId}`
        )
        // 유저 정보 저장 및 상세 유저 정보 가져오기 로직 실행
        commit('setUserData', response.data)

        if (state.userData && state.userData.id % 2 === 0) {
          await this.dispatch('user/fetchUserDetail')
        }

        return state.data
      } catch (error) {
        console.error('Failed to fetch user data:', error)
      }
    } else {
      console.error('User ID is not provided.')
    }
  },
  async fetchUserDetail({ commit, state }) {
    // 유저 정보의 id가 짝수라면 추가적인 유저 정보를 가져옴
    console.log('User data fetched:', state.userData)
    try {
      const response = await axios.get(
        `${BASE_URL}/api/users/detail?userId=${state.userData.id}`
      )
      commit('setUserData', {
        ...state.userData,
        ...response.data,
      })

      console.log('Additional user data fetched:', response.data)
    } catch (error) {
      console.error('Failed to fetch additional user data:', error)
    }
  },
}
