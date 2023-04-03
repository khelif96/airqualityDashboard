<script>
	export let current = 0;
	export let warning = 50;
	export let danger = 75;
	export let unit = '';

	let textColor = 'green';

	$: if (current < warning) {
		textColor = 'green';
	} else if (current >= warning && current < danger) {
		textColor = 'orange';
	} else {
		textColor = 'red';
	}
</script>

<span style="color: {textColor}">{current}</span>
{unit}
