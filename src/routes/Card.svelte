<script>
	import Arrow from '../Components/Arrow.svelte';
	import Status from './Status.svelte';
	export let hasData = false;
	export let title = '';
	export let current = 0;
	export let past = 0;
	export let warning = 50;
	export let danger = 75;
	export let unit = '';

	$: expanded = false;
	function handleClick() {
		expanded = !expanded;
	}
</script>

<div
	class={expanded ? 'card expanded' : 'card'}
	on:click={handleClick}
	on:keydown={handleClick}
	role="button"
	tabindex="0"
	title="Click to expand"
>
	{#if hasData}
		<div>
			<h2>{title}</h2>
			<Status {current} {warning} {danger} {unit} />
		</div>
		<Arrow {current} {past} {unit} />
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
	.card:hover {
		/* cursor: pointer; */
		background-color: hsla(0, 0%, 9%, 0.8);
		transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.expanded {
		transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
		height: 50vh;
	}
	h2 {
		color: #fff;
		margin: 0;
	}
</style>
