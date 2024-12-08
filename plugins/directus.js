import { createDirectus, rest, readItem, readItems } from '@directus/sdk';
require('dotenv').config()

const directus = createDirectus(process.env.DIRECTUS_URL).with(rest());

export default defineNuxtPlugin(() => {
	return {
		provide: { directus, readItem, readItems },
	};
});