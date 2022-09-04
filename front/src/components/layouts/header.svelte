<script>
	import Logo from '../ui/logo.svelte';
	import Navbar from './navbar.svelte';
</script>

<header class="text-white">
	<div
		class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"
	>
		<Navbar />
		<Logo />

		<a href="#_" class="primary-btn">
			<span class="primary-btn-hover" />
			<span class="relative">Button Text</span>
		</a>
	</div>
</header>
