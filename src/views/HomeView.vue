<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { RandomUser } from '@/types'
import { columns } from '@/components/user/column'
import DataTable from '@/components/user/DataTable.vue'
import { MailOpen, UserPlus } from 'lucide-vue-next'
import { Button } from '@/components/ui/button';

const users = ref<RandomUser[]>([])
const loading = ref(true)

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=20')
    users.value = response.data.results
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    loading.value = false
  }
}

const refetchUsers = () => {
  loading.value = true;
  fetchUsers();
}

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div>
    <!-- Profile Banner -->
    <div class="bg-cyan-500 px-6 py-8 rounded-xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <!-- Profile Picture -->
          <div class="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
            <img
              v-if="users.length > 0" 
              :src="users[0].picture.large" 
              :alt="`${users[0].name.first} ${users[0].name.last}`"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full bg-gray-300 flex items-center justify-center">
              <svg class="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>
          
          <!-- User Info -->
          <div class="text-white">
            <h1 class="text-2xl font-bold">
              {{ users.length > 0 ? `${users[0].name.first} ${users[0].name.last}` : 'John Doe' }}
            </h1>
            <p class="text-blue-100">Last online: 2 days ago</p>
          </div>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex space-x-3">
          <Button variant="outline">
            <MailOpen class="w-4 h-4 mr-2" /> Send Message
          </Button>
          <Button variant="outline">
            <UserPlus class="w-4 h-4 mr-2" /> Add Friend
          </Button>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="px-6 py-6">
      <div class="bg-white rounded-lg shadow-sm">
        <!-- Loading State -->
        <div v-if="loading" class="p-8 text-center text-gray-500">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          Loading users...
        </div>
        <!-- Data Table -->
        <DataTable
          v-else
          :columns="columns"
          :data="users"
          @refreshData="refetchUsers" />
      </div>
    </div>
  </div>
</template>
