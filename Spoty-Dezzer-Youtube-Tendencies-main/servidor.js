const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const fs = require ('fs');
const { isGeneratorFunction } = require('util/types');




app.all('/*', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(process.cwd()+"/client/dist/heroes-equipo1/"))
app.use(bodyparser.urlencoded({extended:true}))

app.get('/user/:id', (req, res) => {
    let gID = req.params.id;
    
    console.log(gID);
        
        
    res.status(200).send({status: "ok", message: "1 User data", data: gID});
      
}) 


app.get('/saveinfoYoutube/', (req,res)=>{
    //1
    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=PLDzVECoc2lpQf5yGP_8gvzI2BINQxSowz&key=AIzaSyDu5uKMqQ-iLw68Rvjes7KBw0hi_a4KPyc')
    .then(response => response.json())
		.then(response =>{
		
		console.log(response)
          
        const cadena=JSON.stringify(response)
        fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsMexico_Youtube.txt',cadena, 
        (error) =>{
            if(error)
                throw error;
            console.log("archivo creado");
        })
    })
    //2
    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=PL6k9a6aYB2zk0qSbXR-ZEiwqgdHymsRtQ&key=AIzaSyDu5uKMqQ-iLw68Rvjes7KBw0hi_a4KPyc')
    .then(response => response.json())
    .then(response =>{
    
    console.log(response)
      
    const cadena=JSON.stringify(response)
    fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsWorld_Youtube.txt',cadena, 
    (error) =>{
        if(error)
            throw error;
        console.log("archivo creado");
    })
    })

    //3
    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=PLm_3vnTS-pvkJTrWd87KRrLLlwo9IAgrJ&key=AIzaSyDu5uKMqQ-iLw68Rvjes7KBw0hi_a4KPyc')
       .then(response => response.json())
       .then(response =>{
       
       console.log(response)
         
       const cadena=JSON.stringify(response)
       fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsArgentina_Youtube.txt',cadena, 
       (error) =>{
           if(error)
               throw error;
           console.log("archivo creado");
       })
       })

    //4

    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=PLDIoUOhQQPlU2NpvlGKTsQRoCMHTUCLMf&key=AIzaSyDu5uKMqQ-iLw68Rvjes7KBw0hi_a4KPyc')
    .then(response => response.json())
    .then(response =>{
    
    console.log(response)
      
    const cadena=JSON.stringify(response)
    fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsUsa_Youtube.txt',cadena, 
    (error) =>{
        if(error)
            throw error;
        console.log("archivo creado");
    })
    })

})


app.get('/saveinfospotify/', (req,res)=>{
    const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b48505d592mshb8d6e73edf72b35p1e213djsnbcadfd7dfc51',
			'X-RapidAPI-Host': 'spotify-data.p.rapidapi.com'
		}
	};

    //1
    fetch('https://spotify-data.p.rapidapi.com/playlist_tracks/?id=37i9dQZEVXbO3qyFxbkOE1&offset=0&limit=30', options)
    .then(response => response.json())
		.then(response =>{
		
		console.log(response)
          
        const cadena=JSON.stringify(response)
        fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsMexico_Spotify.txt',cadena, 
        (error) =>{
            if(error)
                throw error;
            console.log("archivo creado");
        })
    })


   //2
    fetch('https://spotify-data.p.rapidapi.com/playlist_tracks/?id=37i9dQZEVXbMDoHDwVN2tF&offset=0&limit=30', options)
    .then(response => response.json())
		.then(response =>{
		
		console.log(response)
          
        const cadena=JSON.stringify(response)
        fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsWorld_Spotify.txt',cadena, 
        (error) =>{
            if(error)
                throw error;
            console.log("archivo creado");
        })
    })


    //3

   
	fetch('https://spotify-data.p.rapidapi.com/playlist_tracks/?id=37i9dQZEVXbMMy2roB9myp&offset=0&limit=30', options)
    .then(response => response.json())
		.then(response =>{
		
		console.log(response)
          
        const cadena=JSON.stringify(response)
        fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsArgentina_Spotify.txt',cadena, 
        (error) =>{
            if(error)
                throw error;
            console.log("archivo creado");
        })
    })

    //4
    fetch('https://spotify-data.p.rapidapi.com/playlist_tracks/?id=37i9dQZEVXbLRQDuF5jeBp&offset=0&limit=30', options)
    .then(response => response.json())
		.then(response =>{
		
		console.log(response)
          
        const cadena=JSON.stringify(response)
        fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsUsa_Spotify.txt',cadena, 
        (error) =>{
            if(error)
                throw error;
            console.log("archivo creado");
        })
    })



})


app.get('/saveinfo/', (req,res) => {
   
    const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f9e59b9f8cmsh9122b4d22a32b42p16b324jsn7b378baa0ce9',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
		}
	};
	//////1
	fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/6651515744', options)
    .then(response => response.json())
		.then(response =>{
		
		console.log(response)
          
        const cadena=JSON.stringify(response)
        fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsMexico_Dezeer.txt',cadena, 
        (error) =>{
            if(error)
                throw error;
            console.log("archivo creado");
        })
    })


/////2
    fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/10896810924', options)
    .then(response => response.json())
		.then(response =>{
		
		console.log(response)
          
        const cadena=JSON.stringify(response)
        fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsWorld_Dezeer.txt',cadena, 
        (error) =>{
            if(error)
                throw error;
            console.log("archivo creado ");
        })
    })
////3
fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/1868167046', options)
.then(response => response.json())
    .then(response =>{
    
    console.log(response)
      
    const cadena=JSON.stringify(response)
    fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsArgentina_Dezeer.txt',cadena, 
    (error) =>{
        if(error)
            throw error;
        console.log("archivo creado", );
    })
})


////4
fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/1313621735', options)
.then(response => response.json())
    .then(response =>{
    
    console.log(response)
      
    const cadena=JSON.stringify(response)
    fs.appendFile('//192.168.10.102/Spoty-Dezzer-Youtube-Tendencies-main/TopHitsUsa_Dezeer.txt',cadena, 
    (error) =>{
        if(error)
            throw error;
        console.log("archivo creado", );
    })
})

   
})


app.listen(3000, (req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:3000');
});