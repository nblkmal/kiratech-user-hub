<script setup lang="ts">
import type { RandomUser } from '@/types';
import { MailOpen, UserPlus } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';

interface Props {
  user: RandomUser;
}

defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between bg-cyan-500 p-4 md:p-8 rounded-xl"
  >
    <div class="flex items-center space-x-6">
      <!-- Profile Picture -->
      <div class="w-full md:w-20 h-20 rounded-full overflow-hidden bg-gray-200">
        <img
          v-if="user"
          :src="user.picture.large"
          :alt="`${user.name.first} ${user.name.last}`"
          class="w-full h-full object-cover"
        />
        <div
          v-else
          class="w-full h-full bg-gray-300 flex items-center justify-center"
        >
          <svg
            class="w-8 h-8 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <!-- User Info -->
      <div class="text-white">
        <h1 class="text-2xl font-bold">
          {{ user ? `${user.name.first} ${user.name.last}` : 'John Doe' }}
        </h1>
        <p class="text-blue-100">Last online: 2 days ago</p>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex space-x-3">
      <Button variant="outline">
        <MailOpen class="w-4 h-4 mr-2" />
        Send Message
      </Button>
      <Button variant="outline">
        <UserPlus class="w-4 h-4 mr-2" />
        Add Friend
      </Button>
    </div>
  </div>
</template>
