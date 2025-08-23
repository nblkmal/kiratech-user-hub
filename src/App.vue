<script setup lang="ts">
import { RouterView } from 'vue-router';
import GuestLayout from './components/GuestLayout.vue';
import { Analytics } from '@vercel/analytics/next';
</script>

<template>
    <GuestLayout headTitle="Kiratech">
        <RouterView />
        <Analytics />
    </GuestLayout>
</template>
