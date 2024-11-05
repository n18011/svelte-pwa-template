<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { registerServiceWorker, subscribeToPushNotifications } from '$lib/pwa';

	onMount(async () => {
		const registration = await registerServiceWorker();
		if (registration) {
			await subscribeToPushNotifications(registration);
		}
	});
</script>

<!-- {@render children()} -->
<slot />
