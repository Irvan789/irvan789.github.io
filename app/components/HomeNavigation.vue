<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components"

const state = reactive({
  navbarMenu: false,
  userDropdown: false
})

function scrollToSection(section: string) {
  const element = document.getElementById(section)
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })

  state.navbarMenu = false
}
</script>

<template>
  <nav
    class="fixed top-0 z-10 w-full bg-zinc-800 px-4 py-4 text-white md:py-3.25"
  >
    <div
      class="mx-auto flex w-full max-w-6xl items-center justify-between gap-4"
    >
      <NuxtLink
        to="/"
        class="text-xl/6 font-bold"
        @click="scrollToSection('home')"
      >
        IRVAN
      </NuxtLink>

      <button
        class="inline-flex cursor-pointer items-center md:hidden"
        @click="state.navbarMenu = !state.navbarMenu"
      >
        <span
          class="size-6"
          :class="[
            state.navbarMenu
              ? '-mr-1.25 icon-[tabler--x]'
              : '-mr-1 icon-[tabler--menu-2]'
          ]"
        >
        </span>
      </button>

      <div
        class="fixed top-14 right-0 left-0 z-1 grid h-[calc(100%-3.5rem)] grid-flow-row content-start items-start border-t border-zinc-700 bg-zinc-800 px-4 transition-normal duration-300 md:relative md:top-0 md:translate-x-0 md:grid-flow-col md:items-center md:justify-between md:gap-4 md:border-0 md:p-0"
        :class="[state.navbarMenu ? 'translate-x-0' : 'translate-x-200']"
      >
        <div
          class="flex w-full flex-col justify-between font-['DM_Mono'] text-sm/5 uppercase md:flex-row md:items-center md:gap-4 md:text-xs/4"
        >
          <a
            class="cursor-pointer border-b border-b-zinc-700 py-4 text-neutral-400 duration-300 hover:text-neutral-200 md:border-0 md:p-0"
            @click="scrollToSection('projects')"
          >
            Projects
          </a>
          <a
            class="cursor-pointer border-b border-b-zinc-700 py-4 text-neutral-400 duration-300 hover:text-neutral-200 md:border-0 md:p-0"
            @click="scrollToSection('skills')"
          >
            Skills
          </a>
          <a
            class="cursor-pointer border-b border-b-zinc-700 py-4 text-neutral-400 duration-300 hover:text-neutral-200 md:border-0 md:p-0"
            @click="scrollToSection('contact')"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
