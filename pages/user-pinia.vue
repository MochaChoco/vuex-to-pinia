<template>
  <div>
    <input v-model="userId" placeholder="Enter user ID" type="number" />
    <button @click="loadUserData">Fetch User Data</button>
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
import { useUserStore } from '@/store/userStore'

export default {
  data() {
    return {
      userData: null,
      userId: 0,
    }
  },
  methods: {
    async loadUserData() {
      const userStore = useUserStore()
      this.userData = await userStore.loadUserData(this.userId)
    },
  },
}
</script>
