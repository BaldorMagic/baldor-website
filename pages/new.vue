<template>
    <button class="p-4 text-gray-700" @click="handleCreateItems">Create items</button>
</template>
<script setup lang="ts">
const { createItems } = useDirectusItems();

interface Project {
    id?: number;
    title: string;
    description: string;
    metrics: string[];
    tags: string[];
    url: string;
    gradient_from: string;
    gradient_to: string;
    icon: string;
    icon_color: string;
}

const newProjects: Project[] = [
    { title: "Weather App", description: "To see the weather", metrics: ["45% Sales Increase", "$2,000 Monthly Revenue"], tags: ["60%", "80% More Visibility"], url: "#", gradient_from: "from-orange-300", gradient_to: "to-sky-500", icon: "Star", icon_color: "text-orange-400" },
    { title: "App", description: "To see", metrics: ["95% Sales Increase", "$5,000 Monthly Revenue"], tags: ["20%", "90% More Visibility"], url: "#", gradient_from: "from-teal-300", gradient_to: "to-orange-500", icon: "Globe", icon_color: "text-teal-400" }
];

console.log(newProjects);

const handleCreateItems = async () => {
    await createItems<Project>({
        collection: "projects",
        items: newProjects
    });
}

</script>