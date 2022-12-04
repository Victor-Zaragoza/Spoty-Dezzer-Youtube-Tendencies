import {HttpClient} from '@angular/common/http';

API_URI = 'http://localhost:3000/saveinfo';

http = new HttpClient();



document.addEventListener("DOMContentLoaded", async function (event) {

	await DezeerRequest();
	await SpotifyRequest();
	await YoutubeRequest();
	getProperty(id)
	imprimir();

})

function getProperty(id){
	console.log("fjdk")
	return this.http.get(`${this.API_URI}/${id}`);
	
}


async function DezeerRequest(){
	
	var select = document.getElementById('DezeerSelect');
	var selectedOption = select.selectedIndex;
	const DivDezeer=document.getElementById('DezeerTabla');
	const EncabezadoDezeer=document.getElementById('Encabezado');
	DivDezeer.innerHTML=''
	var playlist='';
	var nombre='';
	var contenido='';
	var TablaRespaldo=document.createElement('tr');
	if(selectedOption==0){
		 playlist='6651515744';
		 EncabezadoDezeer.innerHTML="TOP HITS MEXICO"
		 nombre='TopHitsMexico';
	}
	if(selectedOption==1){
		playlist='10896810924';
		EncabezadoDezeer.innerHTML="TOP WORLDWIDE"
		nombre='TopHitsWorld';
	}
	if(selectedOption==2){
		playlist='1868167046';
		EncabezadoDezeer.innerHTML="TOP HITS ARGENTINA"
		nombre='TopHitsArgentina';
	}
	if(selectedOption==3){
		playlist='1313621735';
		EncabezadoDezeer.innerHTML="TOP HITS USA"
		nombre='TopHitsUsa';}
	// }else{
	// 	playlist='6651515744';
	// 	EncabezadoDezeer.innerHTML="TOP HITS MEXICO"
	// 	nombre='TopHitsMexico';
	// }
	


	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f9e59b9f8cmsh9122b4d22a32b42p16b324jsn7b378baa0ce9',
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
		}
	};
	
	fetch('https://deezerdevs-deezer.p.rapidapi.com/playlist/'+playlist, options)
		.then(response => response.json())
		.then(response =>{
			let sign;
			let min;
			let sec;
			let total;
			console.log(response.tracks.data)
			for(i=0;i<response.tracks.data.length;i++){
				sign = (response.tracks.data[i].duration/60) < 0 ? "-" : "";
				 min = Math.floor(Math.abs((response.tracks.data[i].duration/60)));
				 sec = Math.floor((Math.abs((response.tracks.data[i].duration/60)) * 60) % 60);
				 total = sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
				var tr=document.createElement('tr');
				
				tr.innerHTML=`
					<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${i+1}</td>
					<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.tracks.data[i].title_short }</td>
					<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.tracks.data[i].artist.name }</td>
					<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${total} Segundos</td>
				`
				//TablaRespaldo+=JSON.stringify(response.tracks.data[i]);
	
				DivDezeer.appendChild(tr);
			}

			
		})
		
		.catch(err => console.error(err));


		//contenido=TablaRespaldo;
		
			/*const a = document.createElement("a");
			const archivo = new Blob([contenido], { type: 'text/plain' });
			const url = URL.createObjectURL(archivo);
			a.href = url;
			a.download = nombre;
			a.click();
			URL.revokeObjectURL(url);*/
		
}

async function SpotifyRequest(){
	
	var select = document.getElementById('SpotifySelect');
	var selectedOption = select.selectedIndex;
	const DivSpotify=document.getElementById('SpotifyTabla');
	const EncabezadoSpotify=document.getElementById('Encabezado');
	DivSpotify.innerHTML='';
	var playlist='';
	console.log(selectedOption)
	if(selectedOption==0){
	playlist='37i9dQZEVXbO3qyFxbkOE1';
		EncabezadoSpotify.innerHTML= '';
		EncabezadoSpotify.innerHTML="TOP HITS MEXICO"
		nombre='TopHitsMexico';
   }
   if(selectedOption==1){
	playlist='37i9dQZEVXbMDoHDwVN2tF';
	   EncabezadoSpotify.innerHTML="TOP 30 Global"
	   nombre='TopHitsWorld';
   }
   if(selectedOption==2){
	playlist='37i9dQZEVXbMMy2roB9myp';
	   EncabezadoSpotify.innerHTML="TOP HITS ARGENTINA"
	   nombre='TopHitsArgentina';
   }
   if(selectedOption==3){
	playlist='37i9dQZEVXbLRQDuF5jeBp';
	   EncabezadoSpotify.innerHTML="TOP HITS USA"
	   nombre='TopHitsUsa'; }
//    }else{
// 	   playlist='37i9dQZEVXbO3qyFxbkOE1';
// 	   EncabezadoSpotify.innerHTML="TOP HITS MEXICO"
// 	   nombre='TopHitsMexico';
//    }

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'b48505d592mshb8d6e73edf72b35p1e213djsnbcadfd7dfc51',
			'X-RapidAPI-Host': 'spotify-data.p.rapidapi.com'
		}
	};
	
	fetch(`https://spotify-data.p.rapidapi.com/playlist_tracks/?id=${playlist}&offset=0&limit=30`, options)
		.then(response => response.json())
		.then(response => {
			console.log("------->",response.items[0].track.album.name)
			 let sign;
			 let min;
			 let sec;
			 let total;
			
			 for(i=0;i<response.items.length;i++){

				 sign = (response.items[i].track.duration_ms/60000) < 0 ? "-" : "";
				 min = Math.floor(Math.abs((response.items[i].track.duration_ms/60000)));
				 sec = Math.floor((Math.abs((response.items[i].track.duration_ms/60000)) * 60) % 60);
				 total = sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
				
				// minutos = Math.floor((response.items[i].track.duration_ms/60000))
				// segundos = ((response.items[i].track.duration_ms/60000) % 1 * 100).toFixed(2);
			 	var tr=document.createElement('tr');	
			 	tr.innerHTML=`
			 		<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${i+1}</td>
			 		<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].track.name }</td>
			 		<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].track.artists[0].name }</td>
			 		<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${total} Minutos</td>
			 	`
			// 	//TablaRespaldo+=JSON.stringify(response.tracks.data[i]);
	
			 	DivSpotify.appendChild(tr);
			}
		})
		.catch(err => console.error(err));
}

async function YoutubeRequest(){
	
	var select = document.getElementById('YoutubeSelect');
	var selectedOption = select.selectedIndex;
	const DivYT=document.getElementById('YoutubeTabla');
	const EncabezadoYT=document.getElementById('YoutubeEncabezado');
	DivYT.innerHTML=''
	var playlist='';
	var nombre3='';
	var contenido='';
	var TablaRespaldo=document.createElement('tr');
	if(selectedOption==0){
        fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=PLDzVECoc2lpQf5yGP_8gvzI2BINQxSowz&key=AIzaSyDu5uKMqQ-iLw68Rvjes7KBw0hi_a4KPyc')
		.then(response => response.json())
		.then(response =>{
			// console.log(response.tracks.data)
			console.log(response.items)
			for(i=0;i<response.items.length;i++){
			
				var tr=document.createElement('tr');
				
				tr.innerHTML=`
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${i+1}</td>
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].snippet.title }</td>
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].snippet.videoOwnerChannelTitle}</td>
				`				
				DivYT.appendChild(tr);
			}	
		})		
		.catch(err => console.error(err));
		 EncabezadoYT.innerHTML="TOP HITS MEXICO"
		 nombre3='TopHitsMexico';
	}
	if(selectedOption==1){
		fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=PL6k9a6aYB2zk0qSbXR-ZEiwqgdHymsRtQ&key=AIzaSyDu5uKMqQ-iLw68Rvjes7KBw0hi_a4KPyc')
		.then(response => response.json())
		.then(response =>{
			console.log(response.items)
			for(i=0;i<response.items.length;i++){
			
				var tr=document.createElement('tr');
				
				tr.innerHTML=`
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${i+1}</td>
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].snippet.title }</td>
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].snippet.videoOwnerChannelTitle}</td>
				`				
				DivYT.appendChild(tr);
			}	
		})		
		.catch(err => console.error(err));
		EncabezadoYT.innerHTML="TOP WORLDWIDE"
		nombre3='TopHitsWorld';
	}
	if(selectedOption==2){
		fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=PLm_3vnTS-pvkJTrWd87KRrLLlwo9IAgrJ&key=AIzaSyDu5uKMqQ-iLw68Rvjes7KBw0hi_a4KPyc')
		.then(response => response.json())
		.then(response =>{
			console.log(response.items)
			for(i=0;i<response.items.length;i++){
			
				var tr=document.createElement('tr');
				
				tr.innerHTML=`
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${i+1}</td>
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].snippet.title }</td>
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].snippet.videoOwnerChannelTitle}</td>
				`				
				DivYT.appendChild(tr);
			}	
		})		
		.catch(err => console.error(err));
		EncabezadoYT.innerHTML="TOP HITS ARGENTINA"
		nombre3='TopHitsArgentina';
	}
	if(selectedOption==3){
		fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=PLDIoUOhQQPlU2NpvlGKTsQRoCMHTUCLMf&key=AIzaSyDu5uKMqQ-iLw68Rvjes7KBw0hi_a4KPyc')
		.then(response => response.json())
		.then(response =>{
			console.log(response.items)
			for(i=0;i<response.items.length;i++){
			
				var tr=document.createElement('tr');
				
				tr.innerHTML=`
				<td class="col-3" style="background-color:whitesmoke;border:1px solid black">${i+1}</td>
                <td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].snippet.title }</td>
                <td class="col-3" style="background-color:whitesmoke;border:1px solid black">${response.items[i].snippet.videoOwnerChannelTitle}</td>
				`				
				DivYT.appendChild(tr);
			}	
		})		
		.catch(err => console.error(err));
		EncabezadoYT.innerHTML="TOP HITS USA"
		nombre3='TopHitsUsa';
	}
}

