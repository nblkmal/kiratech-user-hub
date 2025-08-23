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

interface Props {
    headTitle: string;
    showEmail?: boolean;
    breadcrumbs?: BreadcrumbItemType[];
}

const props = withDefaults(defineProps<Props>(), {
    showEmail: false,
    headTitle: () => 'Kiratech',
});
</script>

<template>
    <!-- Head -->
    <Head :title="headTitle">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <!-- Head -->
    <Toaster />

    <!-- Body -->
    <div class="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center dark:bg-[#0a0a0a]">
        <header class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b mb-6 w-full px-4 md:px-8 lg:px-16 xl:px-24 text-sm not-has-[nav]:hidden ">
          <div class="container-wrapper">
          <div class="container flex h-14 items-center">
            <div class="mr-4 md:mr-1 hidden md:flex">
              <a href="/" class="mr-4 md:mr-2 lg:mr-4 xl:mr-6 flex items-center lg:space-x1 xl:space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-6 w-6 text-[#41B883]">
                  <rect width="256" height="256" fill="none"></rect>
                  <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line>
                  <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line>
                </svg>
                <span class="font-bold"> Kiratech </span>
              </a>
              <nav class="flex items-center gap-4 text-sm xl:gap-6">
                <!-- <a href="/" class="transition-colors hover:text-foreground/80 text-foreground/80">Home</a> -->
                <!-- <a href="/properties" class="transition-colors hover:text-foreground/80 text-foreground/80">Browse Properties</a> -->
                <!-- <a href="/agents" class="transition-colors hover:text-foreground/80 text-foreground/80">Find Agents</a> -->
                <!-- <a href="/about" class="transition-colors hover:text-foreground/80 text-foreground/80">About</a> -->
              </nav>
            </div>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground py-2 -ml-2 mr-2 h-8 w-8 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" type="button" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokewidth="1.5" stroke="currentColor" class="!size-6">
                <path strokelinecap="round" strokelinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
              </svg>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
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
