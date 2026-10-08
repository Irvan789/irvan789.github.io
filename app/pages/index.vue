<script setup lang="ts">
definePageMeta({
  layout: "home"
})

useSeoMeta({
  title: "IRVAN ⋅ A Junior Full-Stack Web Developer",
  ogTitle: "IRVAN ⋅ A Junior Full-Stack Web Developer"
})
</script>

<template>
  <SectionGroup
    id="home"
    class="scroll-mt-16 md:scroll-mt-14"
  >
    <div class="mx-auto mt-6 w-full max-w-3xl md:mt-8">
      <img
        :src="myProfile.avatar"
        :alt="myProfile.name"
        class="mb-4 size-24 rounded-full md:mb-6"
      />

      <h1 class="mb-2 text-xl/7 font-bold md:text-3xl/9">
        {{ myProfile.name }}
      </h1>

      <p class="mb-6 text-sm/5.5 text-zinc-700 md:text-base/6">
        {{ myProfile.about }}
      </p>

      <NuxtLink
        :to="myProfile.cv"
        class="inline-flex w-max items-center gap-1.5 rounded bg-zinc-600 px-2.5 py-2 text-xs/4 text-neutral-50 transition-colors duration-200 hover:bg-zinc-800 md:text-sm/5"
        target="_blank"
        external
      >
        <span class="icon-[tabler--file-cv-filled] size-4 md:size-5"></span>
        Curriculum Vitae
      </NuxtLink>
    </div>
  </SectionGroup>

  <SectionGroup id="projects">
    <Separator class="mt-6 md:mt-8" />

    <SectionHeading
      :title="myProfile.section.projects.header"
      :description="myProfile.section.projects.description"
    />

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
        />
      </template>
    </div>
  </SectionGroup>

  <SectionGroup id="skills">
    <Separator class="mt-6 md:mt-8" />

    <SectionHeading
      :title="myProfile.section.skills.header"
      :description="myProfile.section.skills.description"
    />

    <div
      class="mx-auto mt-6 grid w-full max-w-3xl grid-cols-2 gap-4 xs:grid-cols-3 sm:grid-cols-4 md:mt-8 md:grid-cols-5"
    >
      <template
        v-for="value in myProfile.section.skills.data"
        :key="value"
      >
        <div
          class="flex flex-col gap-4 rounded border border-zinc-200/20 px-4 py-8 text-center font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-200/35 hover:text-zinc-800"
        >
          <img
            :src="`/assets/icons/${myTechStack[value]?.icon.dark}`"
            class="mx-auto size-10 sm:size-12 md:size-14"
          />

          <span class="text-sm/5">
            {{ myTechStack[value]?.name }}
          </span>
        </div>
      </template>
    </div>
  </SectionGroup>

  <SectionGroup id="contact">
    <Separator class="mt-6 md:mt-8" />

    <SectionHeading
      :title="myProfile.section.contacts.header"
      :description="myProfile.section.contacts.description"
    />

    <div class="mx-auto mt-6 grid w-full max-w-md grid-cols-1 gap-4 md:mt-8">
      <template
        v-for="(value, key) in myProfile.section.contacts.data"
        :key="key"
      >
        <NuxtLink
          :to="value.url"
          class="inline-flex min-w-max items-center gap-2 rounded border border-zinc-200/70 p-4 text-sm/5 font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-200/35 hover:text-zinc-800"
          external
        >
          <span :class="className(value.icon, 'size-5')"></span>

          {{ value.name }}
        </NuxtLink>
      </template>
    </div>
  </SectionGroup>
</template>
