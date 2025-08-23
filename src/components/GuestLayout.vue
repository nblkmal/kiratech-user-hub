<script setup lang="ts">
// import { Toaster } from '@/components/ui/sonner'
// import 'vue-sonner/style.css' 
// import { toast } from 'vue-sonner'
// import Breadcrumbs from '@/components/Breadcrumbs.vue';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger
// } from '@/components/ui/tooltip'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { UserIcon } from 'lucide-vue-next';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog'
// import {
//   Command,
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
// } from '@/components/ui/command'
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SettingsIcon, BellIcon, LogOutIcon } from 'lucide-vue-next';

interface Props {
    headTitle: string;
    showEmail?: boolean;
    breadcrumbs?: BreadcrumbItemType[];
}

const props = withDefaults(defineProps<Props>(), {
    headTitle: () => 'Kiratech',
});
</script>

<template>
  <!-- Body -->
  <div class="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
    <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b mb-6 w-full px-4 md:px-8 lg:px-16 xl:px-24 text-sm not-has-[nav]:hidden ">
      <div class="container-wrapper">
        <div class="container flex h-14 items-center">
          <div class="mr-4 md:mr-1 hidden md:flex">
            <a href="/" class="mr-4 md:mr-2 lg:mr-4 xl:mr-6 flex items-center lg:space-x1 xl:space-x-2">
              <div class="flex items-center justify-center h-8 w-28 bg-gray-700 rounded-lg">
                <img
                  src="https://www.kiratech.com.au/img/logo.svg"
                  class="h-full w-auto object-contain px-2"/>
              </div>
              <span class="font-bold">| User Hub</span>
            </a>
          </div>
          <div
            class="flex flex-1 items-center justify-between space-x-4 md:justify-end">
            <SettingsIcon class="w-4 h-4" />
            <BellIcon class="w-4 h-4" />
            <LogOutIcon class="w-4 h-4" />
          </div>
        </div>
      </div>
    </header>

      <div class="flex flex-col space-y-4 w-full px-4 md:px-8 lg:px-16 xl:px-10">
        <slot />
      </div>
  </div>
  <!-- Body -->

  <!-- Footer -->
  <footer class="border-grid border-t py-6 px-4 md:px-8 lg:px-16 xl:px-24 md:py-0 mt-6">
      <div class="container-wrapper">
      <div class="container py-4">
          <p class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          <span>
              Built by Nabil Akmal
          </span>
          </p>
      </div>
      </div>
  </footer>
  <!-- Footer -->
</template>
