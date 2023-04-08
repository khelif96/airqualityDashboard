<!-- Create an svg component -->

<script>
	export let current = 0;
	export let past = 0;
	export let unit = '';
	let size = '24';

	$: isUnitIncreasing = current > past;
	$: difference = Math.abs(current - past);
	$: color = isUnitIncreasing ? '--color-danger' : '--color-safe';
</script>

<div class="ArrowContainer">
	<svg
		width={size}
		height={size}
		xmlns="http://www.w3.org/2000/svg"
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill={`var(${color})`}
		class={isUnitIncreasing ? 'up' : 'down'}
		><path
			d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
		/></svg
	>
	<h4 style="color: var({color})">
		{isUnitIncreasing ? '+' : '-'}
		{difference}
		{unit}
	</h4>
	<div class="metadata-container">
		<p>Last Measurement: {past} {unit}</p>
		<p>Since 5 minutes ago</p>
	</div>
</div>

<style>
	svg {
		transition: fill 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.down {
		transform: rotate(45deg);
	}
	.up {
		transform: rotate(-45deg);
	}
	h4 {
		margin: 0;
	}
	.ArrowContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}
	.metadata-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
	}
	p {
		color: #666;
		margin: 0;
		padding: 0;
		font-size: 8px;
	}
</style>
