<template>
    <div v-for="(project, index) in projects" class="text-gray-900">
        <h1>
            {{ project.title }}
        </h1>
        <p>{{ project.description }}</p>
        <div v-for="(metric,i) in project.metrics">
            <p>{{ metric }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    const { getItems } = useDirectusItems();

    interface Projects {
        id: number;
        title: string;
        description: string;
        metrics: JSON;
        tags: JSON;
        url: string;
        gradient_from: string;
        gradient_to: string;
        icon: string;
        icon_color: string;
    }

    const projects = await getItems<Projects>({
        collection: "projects"
    });
</script>