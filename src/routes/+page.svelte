<script>
	import Status from './Status.svelte';
	let hasData = false;
	let time = '';
	let co2 = 0;
	let tvoc = 0;
	const fetchData = async () => {
		hasData = false;
		const response = await fetch(
			'https://data.mongodb-api.com/app/roomstats-aptyc/endpoint/getLatest'
		);
		const jsonData = await response.json();
		hasData = true;
		co2 = parseInt(jsonData[0]['CO2'], 10);
		tvoc = parseInt(jsonData[0]['TVOC'], 10);
		time = new Date(jsonData[0]['time']).toTimeString();
	};

	fetchData();
</script>

<main>
	{#if hasData}
		<h1>TVOC: <Status current={tvoc} warning={5000} danger={10000} unit="PPB" /></h1>
		<h1>CO2: <Status current={co2} warning={2000} danger={3000} unit="PPM" /></h1>

		<p>Last Update: {time}</p>
	{/if}
	{#if !hasData}
		<h1>Loading...</h1>
	{/if}

	<button on:click={fetchData}>Refresh</button>
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
		margin: auto;
	}
</style>
