<script>
	export let time = '';
	export let date = '';
	export let handleClick = () => {};
</script>

<div>
	<p>Last Update: {time} on {date}</p>
	<p class="refresh" on:keydown={handleClick} on:click={handleClick}>⟳</p>
</div>

<style>
	p {
		color: #666;
	}
	div {
		display: flex;
		align-items: center;
		gap: 8px;
	}
	p {
		cursor: pointer;
	}
	.refresh {
		line-height: 0;
		font-size: 24px;
	}
</style>
