<script>
	export let time = '';
	export let date = '';
	export let handleClick = () => {};
</script>

<div>
	<p>Last Update: {time} on {date}</p>
	<p title="Refresh" class="refresh" on:keydown={handleClick} on:click={handleClick}>⟳</p>
</div>

<style>
	p {
		color: #666;
	}
	div {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 100;
	}
	p {
		user-select: none;
	}
	.refresh {
		cursor: pointer;
		line-height: 0;
		font-size: 24px;
	}
</style>
