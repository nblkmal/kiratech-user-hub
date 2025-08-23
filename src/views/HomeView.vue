<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { RandomUser } from '@/types'
import { columns } from '@/components/user/column'
import DataTable from '@/components/user/DataTable.vue'

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

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0z"/>
            </svg>
          </div>
          <span class="text-xl font-bold text-black">KIRATECH</span>
        </div>
        
        <!-- Header Icons -->
        <div class="flex items-center space-x-4">
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"/>
            </svg>
          </button>
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </button>
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Profile Banner -->
    <div class="bg-blue-500 px-6 py-8">
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
          <button class="bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-300 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            <span>Send Message</span>
          </button>
          <button class="bg-white text-blue-500 px-4 py-2 rounded-lg flex items-center space-x-2 border border-blue-400 hover:bg-blue-50 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            <span>Add Friend</span>
          </button>
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
        <DataTable v-else :columns="columns" :data="users" />
      </div>
    </div>
  </div>
</template>
