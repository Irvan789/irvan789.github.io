<script setup lang="ts">
import myProfile from "~~/shared/data/my-profile"
import techStack from "~~/shared/data/tech-stack"

definePageMeta({
  layout: "home"
})

useSeoMeta({
  title: "IRVAN ⋅ A Junior Full-Stack Web Developer",
  ogTitle: "IRVAN ⋅ A Junior Full-Stack Web Developer"
})

function redirectUrl(url: string | null) {
  const urlParams = new URLSearchParams()

  if (!url) {
    return alert("We are currently leveling up this project!")
  }

  window.open(url)
}
</script>

<template>
  <div class="contents">
    <section
      id="home"
      class="scroll-mt-16 md:scroll-mt-14"
    >
      <div class="mx-auto mt-6 w-full max-w-3xl md:mt-8">
        <img
          :src="myProfile.avatar"
          class="size-24 rounded-full"
          :alt="myProfile.name"
        />

        <h1 class="mt-4 text-xl/7 font-bold md:mt-6 md:text-3xl/9">
          {{ myProfile.name }}
        </h1>

        <p class="mt-2 text-smd/5.25 text-zinc-700 md:text-base/6">
          {{ myProfile.about }}
        </p>

        <NuxtLink
          :to="myProfile.cv"
          class="mt-6 inline-flex w-max items-center gap-1.5 rounded bg-zinc-600 px-2.5 py-2 text-sm/5 text-neutral-50 transition-colors duration-200 hover:bg-zinc-800"
          target="_blank"
          external
        >
          <span class="icon-[tabler--file-cv-filled] size-5"></span>
          Curriculum Vitae
        </NuxtLink>
      </div>
    </section>

    <section
      id="projects"
      class="scroll-mt-8 md:scroll-mt-6"
    >
      <Separator class="mt-6 md:mt-8" />

      <div class="mt-6 md:mt-8">
        <h2 class="text-center text-xl/6 font-bold md:text-2xl/7">
          {{ myProfile.section.projects.header }}
        </h2>

        <div class="mx-auto mt-4 w-full max-w-3xl text-neutral-700">
          <p class="text-smd/5.75 md:text-base/6">
            {{ myProfile.section.projects.description }}
          </p>
        </div>
      </div>

      <div
        class="mt-10 mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3"
      >
        <template
          v-for="project in myProfile.section.projects.data"
          :key="project.title"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :tags="project.tags"
            @click="() => redirectUrl(project.url)"
          />
        </template>
      </div>
    </section>

    <section
      id="skills"
      class="scroll-mt-8 md:scroll-mt-6"
    >
      <Separator class="mt-6 md:mt-8" />

      <div class="mt-6 md:mt-8">
        <h2 class="text-center text-xl/6 font-bold md:text-2xl/7">
          {{ myProfile.section.skills.header }}
        </h2>

        <div class="mx-auto mt-4 w-full max-w-3xl text-neutral-700">
          <p class="text-center text-smd/5.75 md:text-base/6">
            {{ myProfile.section.skills.description }}
          </p>
        </div>
      </div>

      <div
        class="mx-auto mt-6 grid w-full max-w-3xl grid-cols-2 gap-4 xs:grid-cols-3 sm:grid-cols-4 md:mt-8 md:grid-cols-5"
      >
        <template
          v-for="value in myProfile.section.skills.data"
          :key="value"
        >
          <div
            class="flex flex-col gap-4 rounded border border-zinc-200/20 px-4 py-8 text-center font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-200/50 hover:text-zinc-800"
          >
            <img
              :src="`/assets/icons/${techStack[value]?.icon.dark}`"
              class="mx-auto size-10 sm:size-12 md:size-14"
            />

            <span class="text-sm/5">
              {{ techStack[value]?.name }}
            </span>
          </div>
        </template>
      </div>
    </section>

    <section
      id="contact"
      class="scroll-mt-8 md:scroll-mt-6"
    >
      <Separator class="mt-6 md:mt-8" />

      <div class="mt-6 md:mt-8">
        <h2 class="text-center text-xl/6 font-bold md:text-2xl/7">
          {{ myProfile.section.contact.header }}
        </h2>

        <div class="mx-auto mt-4 w-full max-w-3xl text-neutral-700">
          <p class="text-center text-smd/5.75 md:text-base/6">
            {{ myProfile.section.contact.description }}
          </p>
        </div>
      </div>

      <div class="mx-auto mt-6 grid w-full max-w-md grid-cols-1 gap-4 md:mt-8">
        <template
          v-for="(value, key, index) in myProfile.section.contact.data"
          :key="key"
        >
          <NuxtLink
            :to="value.url"
            class="inline-flex min-w-max items-center gap-2 rounded border border-zinc-200/70 p-4 text-sm/5 font-medium text-zinc-700 transition-colors duration-200 hover:bg-zinc-200/70 hover:text-zinc-800"
            external
          >
            <span
              class="size-5"
              :class="value.icon"
            ></span>

            {{ value.name }}
          </NuxtLink>
        </template>
      </div>
    </section>
  </div>
</template>
