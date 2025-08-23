<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { RandomUser } from '@/types';
import { columns } from '@/components/user/column';
import DataTable from '@/components/user/DataTable.vue';
import UserHighlight from '@/components/user/UserHighlight.vue';

const users = ref<RandomUser[]>([]);
const loading = ref(true);

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=20');
    users.value = response.data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loading.value = false;
  }
};

const refetchUsers = () => {
  loading.value = true;
  fetchUsers();
};

onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <div>
    <!-- User Highlight Component -->
    <UserHighlight :users="users" />

    <!-- Loading State -->
    <div v-if="loading" class="p-8 text-center text-gray-500">
      <div
        class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"
      ></div>
      Loading users...
    </div>
    <!-- Data Table -->
    <DataTable
      v-else
      :columns="columns"
      :data="users"
      @refreshData="refetchUsers"
    />
  </div>
</template>
