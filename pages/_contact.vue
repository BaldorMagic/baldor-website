<template>
    <h1>Contact Us!</h1>
    <form @submit.prevent="handleSubmit">
        <input v-model="form.name" type="text" name="name" placeholder="Entername" required />
        <input v-model="form.email" type="email" name="email" placeholder="Enter email" required />
        <textarea v-model="form.message" placeholder="Enter message" name="message" required/>
        <button type="submit">Send</button>
    </form>
</template>
<script setup>
import axios from 'axios';
</script>