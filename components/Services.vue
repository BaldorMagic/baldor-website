<template>
    <section id="services" class="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-700">Services & Pricing</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div 
                    v-for="(service, index) in services"
                    :key="index"
                    class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div :class="['mb-4 bg-[${service.background_color}] w-12 h-12 rounded-xl flex items-center justify-center']">
                        {{ service.icon }}
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-700">{{ service.title }}</h3>
                    <p class="text-gray-600 mb-4">{{ service.description }}</p>
                    <div class="text-2xl font-bold text-orange-400">{{ service.price }}</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
    const { getItems } = useDirectusItems();

interface Services {
    id: number;
    title: string;
    description: string;
    price: string;
    icon: string;
    icon_color: string;
    bg_color: string;
}

const services = await getItems<Services>({
    collection: "services"
});
</script>