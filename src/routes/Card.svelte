<script>
	import Status from './Status.svelte';
	export let hasData = false;
	export let title = '';
	export let current = 0;
	export let warning = 50;
	export let danger = 75;
	export let unit = '';
</script>

<div class="card">
	{#if hasData}
		<h2>{title}</h2>
		<Status {current} {warning} {danger} {unit} />
	{/if}
	{#if !hasData}
		<h2>Loading...</h2>
	{/if}
</div>

<style>
	.card {
		padding-left: 16px;
		text-align: left;
		font-size: 37px;
		transition: background-color 1s cubic-bezier(0.4, 0, 0.2, 1);
		user-select: none;
	}
	.card:hover {
		/* cursor: pointer; */
		background-color: hsla(0, 0%, 9%, 0.8);
		transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	h2 {
		color: #fff;
		margin: 0;
	}
</style>
