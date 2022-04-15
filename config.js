var config = {
    style: 'mapbox://styles/sarahgrevy/cl1pkynwy000o14qfi2r1g2yq',
    accessToken: 'pk.eyJ1Ijoic2FyYWhncmV2eSIsImEiOiJjbDFwZTNodzcwYmRiM2psbTRsYmFodzBkIn0.FubKIKWb5e_f4P1evi0g9w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Air Quality Around the World, 2021',
    subtitle: 'East Asia, Southeast Asia, and South Asia suffered from the poorest air quality. Australia and Northern Europe had the cleanest. ',
    byline: 'By Sarah Grevy Gotfredsen',
    image: 'images/legend2.png',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Ranking Countries by Air Quality',
            

            description: 'Air pollution is now considered to be the greatest health threat to humanity, causing over seven million deaths around the world every year. The 2021 World Air Quality Report ranks the world’s countries and cities according to their pollution levels. Countries in East Asia, Southeast Asia, and South Asia suffered from the poorest air quality while Australia and Northern Europe had the cleanest. Green circles represent air quality that are closest to meeting WHO’s guidelines. Red circles represent air quality that exceeds it. ',
            
            location: {
                center: [-41.581207, 35.282324],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            image: 'images/legend2.png',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'center',
            hidden: false,
            title: 'Particulate Size Matters: Comparing sizes',
            image: 'images/hair.png',
            description: 'Air quality is determined by measuring the PM2.5 concentration in a given area. PM2.5 consists of fine aerosol particles measuring 2.5 microns or smaller in diameter which is commonly accepted as the most harmful to human health.  While the nose can filter most coarse particles, fine and ultrafine particles are inhaled deeper into the lungs where they can be deposited or even pass into the bloodstream. ' ,
            location: {
                center: [-41.581207, 35.282324],
                zoom: 1.0,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'center',
            hidden: false,
            title: 'Let’s see what major cities have the highest concentration of PM2.5 particles. ',
           
            
            location: {
                center: [-41.581207, 35.282324],
                zoom: 1,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Most Polluted: 1. New Delhi, India',
            image: 'images/newdelhi.jpeg',
            description: 'New Delhi ranked number 1 as the capital with the worst air quality in 2021. This is due to a mix of factors, particularly vehicular and industrial emissions as well as dust weather patterns. Air quality worsens during the winter months when farmers in neighboring cities burn crops. In addition, impressive amounts of fireworks are shoot during the same months during the festival of Diwali. In November of 2021, the authorities in Delhi had to shut all schools and colleges as the air pollution got so bad that it was dangerous to step outside. ',
            location: {
                center: [77.2090, 28.6139],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fourth-identifier',

            alignment: 'left',
            image: 'images/dhaka.jpeg',
            hidden: false,
            title: 'Most Polluted: 2. Dhaka, Bangladesh',
            description: 'Dhaka, not too far from New Delhi, has the second worse air pollution. Here, making bricks is a serious business that caused dust and smoke to mingle with clouds of pollution rising from trash fires and vehicles engines. The result is a fog handing over the city causing serious health threats to its population. ',

           
            
            location: {
                center: [90.4125, 23.8103],
                zoom: 6.0,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fifth-identifier',

            alignment: 'left',
            image: 'images/chad.jpeg',
            hidden: false,
            title: 'Most Polluted: 3. N’Djamena, Chad',
            description: 'Air pollution has been slightly decreasing in the past couple of years, yet Chad remains the third worst city when it comes to air quality. As of last year, it was the 3rd leading risk factor, after malnutrition and sanitation. Main contributors to poor air quality in Chad include the oil, tactile, and meatpacking industry. ',

           
            
            location: {
                center: [15.0557, 12.1348],
                zoom: 6.0,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 

        {
            id: 'sixth-identifier',

            alignment: 'center',
            hidden: false,
            title: 'Of the 6,475 cities analysed in the report, only 222 cities had an air quality that met WHO’s standards. India, Bangladesh, and Chad exceeded these guidelines by at least 10 times. Australia, Canada and the Scandinavian countries ranked among the best countries for air quality, with average levels exceeding the guidelines by 1 or 2 times. Not a single country meet WHOs standards for 2021. ',
            description: '',

           
            
            location: {
                center: [-41.581207, 35.282324],
                zoom: 1.0,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 

        {
            id: 'seventh-identifier',

            alignment: 'center',
            hidden: false,
            title: 'However, it’s not all dark news. The report also found that air quality in China has continued to improve in 2021. The majority of cities in China saw lower levels of air pollution comapred to the previous year. The CEO of IQAir North America, Glory Dolphin Hammes, told Forbes “we actually have all of the tools we need in order to turn this around” and that countries like China have “done a tremendous amount to lead the way”.',
            description: '',

           
            
            location: {
                center: [-41.581207, 35.282324],
                zoom: 1.0,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 

        {
            id: 'eight-identifier',

            alignment: 'center',
            hidden: false,
            title: 'The report doesn’t specify any detailed solutions to the air polltuion crisis. However, it calls on “policymakers around the world” to craft “air quality legislation and emissions standards to levels that meaningfully reduce the public health risks posed by air pollution.”',
            description: '',

           
            
            location: {
                center: [-41.581207, 35.282324],
                zoom: 1.0,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
    ]
};
