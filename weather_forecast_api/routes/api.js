const express = require('express');
const router = express.Router();
const { DateTime } = require('luxon');


// Fetch city weather data from external API
router.get('/forecast/:city', (req, res) => {

    let city = req.params.city;

    // fetch weather data from external API
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `${process.env.WEATHER_API_URL}?key=${apiKey}&q=${city}&aqi=no`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            res.status(200).json({
                location: data.location.name,
                region: data.location.region,
                country: data.location.country,
                temperature: data.current.temp_c,
                condition: data.current.condition.text,
                icon: data.current.condition.icon
            });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        });

});

router.get('/hello', (req, res) => {

    console.log("/hello - API Requesting")

    // fetch weather data from external API
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `${process.env.WEATHER_API_URL}?key=${apiKey}&q=Dhaka&aqi=no`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            // const dhakaTime = DateTime.fromFormat(data.location.localtime, 'yyMMddHHmm')
            const dt = DateTime.fromFormat(data.location.localtime, 'yyyy-MM-dd HH:mm', { zone: 'Asia/Dhaka' });

            res.status(200).json({
                "hostname": "k8s_weather_server",
                "datetime": dt.toFormat('yyMMddHHmm'), // "YYMMDDHHmm",
                "version": "1.2.3",
                "weather": {
                    "dhaka": {
                        "temperature": data.current.temp_c,
                        "temp_unit": "c"
                    }
                }

            });

            console.log("/hello - API Response Sent")
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            res.status(500).json({ error: 'Failed to fetch weather data' });
        });

});

router.get('/health', async (req, res) => {

    console.log("/health - API Requesting")

    try {
        const apiKey = process.env.WEATHER_API_KEY;    
        const apiUrl = `${process.env.WEATHER_API_URL}?key=${apiKey}&q=Dhaka&aqi=no`;

        let response = await fetch(apiUrl);
        response = await response.json();

        if (response && response.location) {
            console.log("/health - API Response Sent")
            res.json({ status: 'ok', message: 'WeatherAPI is healthy' });
        } else {
            console.log("/health - API Response with Error")
            res.status(500).json({ status: 'fail', message: 'Unexpected API response' });
        }
    } catch (error) {
        console.log("/health - API Response with Error")
        res.status(500).json({ status: 'fail', message: 'WeatherAPI is down or unreachable', error: error.message });
    }
});


module.exports = router;