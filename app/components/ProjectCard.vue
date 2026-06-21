<script setup lang="ts">
import techStack from "~~/shared/data/tech-stack"

type ComponentProps = {
  title: string
  description: string
  image: string
  tags: Array<string>
}

type ComponentEmits = {
  click: []
}

const props = defineProps<ComponentProps>()
const emits = defineEmits<ComponentEmits>()
</script>

<template>
  <button
    type="button"
    class="group relative flex cursor-pointer flex-col gap-4 text-start font-medium"
    @click="() => emits('click')"
  >
    <img
      :src="props.image"
      class="z-1 size-7 rounded object-contain"
    />

    <div class="-mb-1 flex h-full flex-col">
      <div
        class="absolute -inset-4 scale-95 rounded-lg transition group-hover:scale-100 group-hover:bg-zinc-200/50"
      ></div>

      <span class="z-1 text-base/5 font-bold">
        {{ props.title }}
      </span>

      <div class="z-1 mt-1 inline-flex gap-2">
        <template
          v-for="tag in props.tags"
          :key="tag"
        >
          <span class="text-xs/3 text-neutral-700">
            {{ techStack[tag]?.name }}
          </span>
        </template>
      </div>

      <p class="z-1 mt-2 text-sm/5.5 text-neutral-700">
        {{ props.description }}
      </p>
    </div>

    <div
      class="z-1 inline-flex w-fit items-center gap-1 text-sm/5 font-semibold text-neutral-600 group-hover:text-neutral-800"
    >
      <span class="icon-[mingcute--link-line] size-4 rotate-90"></span>

      Visit Page
    </div>
  </button>
</template>
