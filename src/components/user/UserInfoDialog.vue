<script setup lang="ts">
import type { RandomUser } from '@/types'
import { Mail, Phone, MapPin, Calendar, User } from 'lucide-vue-next'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Props {
  user: RandomUser | null
  isOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const closeDialog = () => {
  emit('close')
}
</script>

<template>
  <Dialog :open="isOpen" @update:open="closeDialog">
    <DialogContent class="max-w-md">
      <DialogHeader>
        <DialogTitle>User Information</DialogTitle>
        <DialogDescription>
          Detailed information about the selected user.
        </DialogDescription>
      </DialogHeader>
      
      <div v-if="user" class="space-y-6">
        <!-- Profile Section -->
        <div class="flex items-center space-x-4">
          <img
            :src="user.picture.large"
            :alt="`${user.name.first} ${user.name.last}`"
            class="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 class="text-lg font-semibold text-gray-900">
              {{ user.name.first }} {{ user.name.last }}
            </h3>
            <p class="text-gray-600 capitalize">{{ user.gender }}</p>
          </div>
        </div>
        
        <!-- Contact Information -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <Mail class="w-4 h-4 text-gray-400" />
            <span class="text-gray-700">{{ user.email }}</span>
          </div>
          
          <div class="flex items-center space-x-3">
            <Phone class="w-4 h-4 text-gray-400" />
            <span class="text-gray-700">{{ user.phone }}</span>
          </div>
          
          <div class="flex items-center space-x-3">
            <MapPin class="w-4 h-4 text-gray-400" />
            <span class="text-gray-700">
              {{ user.location.street.number }} {{ user.location.street.name }}, 
              {{ user.location.city }}, {{ user.location.state }}, {{ user.location.country }}
            </span>
          </div>
          
          <div class="flex items-center space-x-3">
            <Calendar class="w-4 h-4 text-gray-400" />
            <span class="text-gray-700">
              Born: {{ new Date(user.dob.date).toLocaleDateString() }} ({{ user.dob.age }} years old)
            </span>
          </div>
          
          <div class="flex items-center space-x-3">
            <User class="w-4 h-4 text-gray-400" />
            <span class="text-gray-700">
              Member since: {{ new Date(user.registered.date).toLocaleDateString() }}
            </span>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
