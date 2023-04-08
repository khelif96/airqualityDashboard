<!-- Create an svg component -->

<script>
	export let current = 0;
	export let past = 0;
	export let unit = '';
	let size = '24';
	let trend = 'up';

	$: if (current < past) {
		trend = 'down';
	} else {
		trend = 'up';
	}
	let color = trend === 'down' ? '--color-safe' : '--color-danger';
	let difference = Math.abs(current - past);
</script>

<div class="ArrowContainer">
	<svg
		width={size}
		height={size}
		xmlns="http://www.w3.org/2000/svg"
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill={`var(${color})`}
		class={trend === 'down' ? 'down' : 'up'}
		><path
			d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
		/></svg
	>
	<h4 style="color: var({color})">
		{trend === 'up' ? '-' : '+'}
		{difference}
		{unit}
	</h4>
	<p>Since 5 minutes ago</p>
</div>

<style>
	svg {
		transition: fill 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}
	.down {
		transform: rotate(-45deg);
	}
	.up {
		transform: rotate(45deg);
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
	p {
		color: #666;
		margin: 0;
		font-size: 8px;
	}
</style>
