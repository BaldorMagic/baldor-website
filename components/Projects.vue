<template>
    <section id="projects" class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-700">
                Real Results for Businesses
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="(project, index) in projects" :key="index"
                    class="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                    @mouseenter="setActiveProject(index)" @mouseleave="setActiveProject(null)">
                    <div :class="[`mb-4 bg-gradient-to-br ${project.color} rounded-xl p-4 w-fit`]">
                        <component :is="project.icon" />
                    </div>
                    <h3 class="text-xl font-bold mb-3 text-gray-700">{{ project.title }}</h3>
                    <p class="text-gray-600 mb-4 text-sm">{{ project.description }}</p>
                    <div class="space-y-2 mb-4">
                        <div
                            v-for="(metric, i) in project.metrics"
                            :key="i"
                            class="flex items-center text-sm text-gray-600"
                        >
                            <LucideStar class="w-4 h-4 text-orange-400 mr-2" />
                            {{ metric }}
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span
                            v-for="(tag, tagIndex) in project.tags"
                            :key="tagIndex"
                            class="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-600"
                        >
                            {{ tag }}
                        </span>
                    </div>
                    <NuxtLink to="project.demoUrl" class="text-gray-600 hover:text-orange-400 flex items-center text-sm">
                        <LucideExternalLink :size="16" class="mr-1"/> View Case Study
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const { $directus, $readItems } = useNuxtApp();

const { data: projects } = await useAsyncData('projects', () => {
    return $directus.request(
        $readItems('projects', {
            fields: ['title', 'description', 'metrics', 'tags', 'demoUrl', 'icon']
        })
    )
})
</script>