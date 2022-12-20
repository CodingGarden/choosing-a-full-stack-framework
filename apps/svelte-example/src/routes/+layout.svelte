<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { signIn } from '@auth/sveltekit/client';
</script>


<AppShell>
	<AppBar svelte:fragment slot="header">
		<svelte:fragment slot="lead">EXAMPLE APP</svelte:fragment>
		hello world
		<svelte:fragment slot="trail">
			<button on:click={() => signIn('google')} class="btn btn-filled-primary btn-base">LOGIN</button>
		</svelte:fragment>
	</AppBar>
	<section class="mx-auto container">
		<slot />
	</section>
</AppShell>
