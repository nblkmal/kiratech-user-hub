<script setup lang="ts">
import {
  SettingsIcon,
  BellIcon,
  LogOutIcon,
  CodeIcon,
  GithubIcon,
} from 'lucide-vue-next';
</script>

<template>
  <!-- Body -->
  <div class="flex mt-16 md:mt-20 flex-col items-center lg:justify-center">
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b mb-6 w-full px-4 md:px-8 lg:px-16 xl:px-24 text-sm not-has-[nav]:hidden"
    >
      <div class="container-wrapper">
        <div class="container flex h-14 items-center">
          <div class="mr-4 md:mr-1 hidden md:flex">
            <a
              href="/"
              class="mr-4 md:mr-2 lg:mr-4 xl:mr-6 flex items-center lg:space-x1 xl:space-x-2"
            >
              <div
                class="flex items-center justify-center h-8 w-28 bg-gray-700 rounded-lg"
              >
                <img
                  src="https://www.kiratech.com.au/img/logo.svg"
                  class="h-full w-auto object-contain px-2"
                />
              </div>
              <span class="font-bold">| User Hub</span>
            </a>
          </div>
          <div
            class="flex flex-1 items-center justify-between space-x-4 md:justify-end"
          >
            <SettingsIcon class="w-4 h-4" />
            <BellIcon class="w-4 h-4" />
            <LogOutIcon class="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>

    <div class="flex flex-col space-y-4 w-full">
      <slot />
    </div>
  </div>
  <!-- Body -->

  <!-- Footer -->
  <footer class="border-grid border-t mt-4">
    <div class="container-wrapper">
      <div class="container py-4">
        <p
          class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left flex items-center justify-center space-x-2"
        >
          <CodeIcon class="w-4 h-4" />
          <span class="font-mono text-xs font-bold">
            Code by Nabil Akmal | Inspired by Kiratech |
          </span>
          <a
            href="https://github.com/nblkmal/kiratech-user-hub"
            class="text-blue-500 font-mono text-xs font-bold space-x-2 flex items-center justify-center"
          >
            <GithubIcon class="w-4 h-4" />
            Github Repository
          </a>
        </p>
      </div>
    </div>
  </footer>
  <!-- Footer -->
</template>
