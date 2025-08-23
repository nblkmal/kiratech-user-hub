<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GuestLayout from './components/GuestLayout.vue'
</script>

<template>
    <GuestLayout headTitle="My Appointments">
        <RouterView />
    </GuestLayout>
</template>
