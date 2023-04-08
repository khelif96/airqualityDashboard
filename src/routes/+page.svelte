<script>
	import { onMount } from 'svelte';
	import Card from './Card.svelte';
	import Metadata from './Metadata.svelte';
	import { fetchData } from '../api/data';
	import { currentDataURL, pastDataURL } from '../constants';
	let hasData = false;
	let time = '';
	let date = '';
	let co2 = 0;
	let tvoc = 0;
	let pastCo2 = 0;
	let pastTvoc = 0;
	export const ssr = false;

	const fetchAllData = async () => {
		let currentData = await fetchData(currentDataURL);
		if (currentData) {
			hasData = true;
			time = currentData.time;
			date = currentData.date;
			co2 = currentData.co2;
			tvoc = currentData.tvoc;
		}
		let pastData = await fetchData(pastDataURL);
		if (pastData) {
			hasData = true;
			pastCo2 = pastData.co2;
			pastTvoc = pastData.tvoc;
		}
	};

	setInterval(fetchAllData, 1000 * 60 * 1);

	onMount(fetchAllData);
</script>

<main>
	<div>
		<Card
			{hasData}
			title="TVOC"
			past={pastTvoc}
			current={tvoc}
			warning={5000}
			danger={10000}
			unit="PPB"
		/>
		<Card
			{hasData}
			title="CO2"
			past={pastCo2}
			current={co2}
			warning={2000}
			danger={3000}
			unit="PPM"
		/>
	</div>

	<Metadata {time} {date} handleClick={fetchAllData} />
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
