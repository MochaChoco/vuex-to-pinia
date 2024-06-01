<template>
  <div>
    <input
      :value="userId"
      @input="setUserId($event.target.value)"
      placeholder="Enter user ID"
      type="number"
    />
    <button @click="fetchUserDataById">Fetch User Data</button>
    <div v-if="userData">
      <p>userName : {{ userData.name }}</p>
      <p>userId: {{ userData.id }}</p>
      <template v-if="userData.id % 2 === 0">
        <p>email : {{ userData.email }}</p>
        <p>gender {{ userData.gender }}</p>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['userId', 'userData']), // store/user.js에 있는 store의 userId
  },
  methods: {
    // store/user.js에 있는 store의 setUserId Mutation을 등록
    ...mapMutations('user', ['setUserId']),
    // store/user.js에 있는 store의 fetchUserDataById Action을 등록
    ...mapActions('user', ['fetchUserDataById']),
  },
}
</script>
