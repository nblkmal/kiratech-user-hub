<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GuestLayout from './components/GuestLayout.vue'
</script>

<template>
    <GuestLayout headTitle="My Appointments">
        <div class="w-full px-4 md:px-24">
            <section class="">
                <div class="container-wrapper">
                <div class="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
                    <h1 class="mb-1 font-medium text-2xl lg:text-3xl">Sell or Find Your Dream Property</h1>
                    <p class="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                    Malaysia's trusted property marketplace. List your property, discover new homes, and connect with trusted agents.
                    </p>
                </div>
                </div>
            </section>
        </div>
        <RouterView />
    </GuestLayout>
</template>
