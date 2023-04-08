<script>
	export let current = 0;
	export let warning = 50;
	export let danger = 75;
	export let unit = '';

	let textColor = 'green';

	$: if (current < warning) {
		textColor = '--color-safe';
	} else if (current >= warning && current < danger) {
		textColor = '--color-warning';
	} else {
		textColor = '--color-danger';
	}
</script>

<h3 style="color: var({textColor})">{current} {unit}</h3>

<style>
	h3 {
		margin: 0;
	}
</style>
