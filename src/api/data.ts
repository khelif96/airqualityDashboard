export	const fetchData = async (url: string) => {
		const response = await fetch(
			url
		);
		const jsonData = await response.json();
		const co2 = parseInt(jsonData[0]['CO2'], 10);
		const tvoc = parseInt(jsonData[0]['TVOC'], 10);
		const jsonDate = new Date(jsonData[0]['time']);
		const time = jsonDate.toLocaleTimeString();
		const date = jsonDate.toLocaleDateString();

        return {
            co2,
            tvoc,
            time,
            date
        }
	};

