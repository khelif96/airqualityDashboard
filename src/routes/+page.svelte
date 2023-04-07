<script>
	import Card from './Card.svelte';
	import Metadata from './Metadata.svelte';
	import Status from './Status.svelte';
	let hasData = false;
	let time = '';
	let date = '';
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
		const jsonDate = new Date(jsonData[0]['time']);
		time = jsonDate.toLocaleTimeString();
		date = jsonDate.toLocaleDateString();
	};

	fetchData();
</script>

<main>
	<div>
		<Card {hasData} title="TVOC" current={tvoc} warning={5000} danger={10000} unit="PPB" />
		<Card {hasData} title="CO2" current={co2} warning={2000} danger={3000} unit="PPM" />
	</div>

	<Metadata {time} {date} handleClick={fetchData} />
</main>

<style>
	main {
		font-family: 'Anuphan', sans-serif;
		font-weight: 300;
		text-align: center;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
	}
</style>
