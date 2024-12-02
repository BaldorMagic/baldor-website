<script setup>
</script>
<template>
    <section class="pt-32 pb-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div class="max-w-6xl mx-auto text-center">
            <div class="mb-6 flex justify-center">
                <div class="bg-gradient-to-br from-orange-200 to-amber-100 p-3 rounded-2xl">
                    <LucideStar class="w-8 h-8 text-orange-500" />
                </div>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-gray-700 mb-6">
                Grow Your Business Online
            </h1>
            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                I help small businesses increase their revenue with professional websites,
                online stores, and local SEO. Get more customers and simplify your operations.
            </p>
            <div class="flex flex-col md:flex-row justify-center gap-4">
                <NuxtLink to="#contact"
                    class="bg-orange-400 text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors">
                    Get Free Consultation
                </NuxtLink>
                <NuxtLink to="#projects"
                    class="bg-gray-100 text-gray-600 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    See Results
                </NuxtLink>
            </div>
            <div class="mt-12 grid grid-cols-3 max-w-2xl mx-auto  gap-8">
                <div class="text-center">
                    <div class="text-2xl font-bold text-gray-700">50+</div>
                    <div class="text-gray-500">Happy Clients</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-gray-700">40%</div>
                    <div class="text-gray-500">Avg. Revenue Increase</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-gray-700">100%</div>
                    <div class="text-gray-500">Satisfaction Rate</div>
                </div>
            </div>
        </div>
    </section>
</template>