<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { RandomUser } from '@/types';
import { columns } from '@/components/user/column';
import DataTable from '@/components/user/DataTable.vue';
import UserHighlight from '@/components/user/UserHighlight.vue';
import { Skeleton } from '@/components/ui/skeleton';

const users = ref<RandomUser[]>([]);
const loading = ref(true);
const usersAmount = ref(20);

const fetchUsers = async () => {
  try {
    const response = await axios.get(
      `https://randomuser.me/api/?results=${usersAmount.value}`,
    );
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

const refreshAmount = (amount: number) => {
  usersAmount.value = amount;
  refetchUsers();
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
    <div v-if="loading" class="flex flex-col items-center py-4 space-y-4">
      <div class="flex justify-between items-center w-full">
        <Skeleton class="h-9 w-[450px]" />
        <Skeleton class="h-9 w-[150px]" />
      </div>
      <div class="flex border rounded-lg p-4 w-full space-x-4">
        <Skeleton class="h-9 w-full" />
        <Skeleton class="h-9 w-full" />
        <Skeleton class="h-9 w-full" />
        <Skeleton class="h-9 w-full" />
        <Skeleton class="h-9 w-full" />
      </div>
    </div>
    <!-- Data Table -->
    <DataTable
      v-else
      :columns="columns"
      :data="users"
      @refreshData="refetchUsers"
      @refreshAmount="refreshAmount"
      :usersAmount="usersAmount"
    />
  </div>
</template>
