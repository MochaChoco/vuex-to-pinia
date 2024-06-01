<template>
  <div>
    <input v-model="userId" placeholder="Enter user ID" type="number" />
    <button @click="loadUserData">Fetch User Data</button>
  </div>
</template>

<script>
import { useUserStore } from '@/store/userStore'

export default {
  data() {
    return {
      userId: 0,
    }
  },
  methods: {
    loadUserData() {
      const userStore = useUserStore()
      userStore.loadUserData(this.userId)
    },
  },
}
</script>
