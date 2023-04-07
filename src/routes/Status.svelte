<script>
	export let current = 0;
	export let warning = 50;
	export let danger = 75;
	export let unit = '';

	let textColor = 'green';

	$: if (current < warning) {
		textColor = '#c8f56e';
	} else if (current >= warning && current < danger) {
		textColor = '#f5c86e';
	} else {
		textColor = '#ff4259';
	}
</script>

<h3 style="color: {textColor}">{current} {unit}</h3>

<style>
	h3 {
		margin: 0;
	}
</style>
