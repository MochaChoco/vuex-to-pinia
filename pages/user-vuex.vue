<template>
  <div>
    <input v-model="userId" placeholder="Enter user ID" type="number" />
    <button @click="fetchUserDataById">Fetch User Data</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['userId']), // store/user.js에 있는 store의 userId
  },
  methods: {
    // store/user.js에 있는 store의 setUserId Mutation을 등록
    ...mapMutations('user', ['setUserId']),
    // store/user.js에 있는 store의 fetchUserDataById Action을 등록
    ...mapActions('user', ['fetchUserDataById']),
  },
}
</script>
