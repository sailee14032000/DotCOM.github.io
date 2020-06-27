
//linechart
		$(document).ready(function(){


	    
		$.get("csvjsonworld10yrs.json",

			function (data){
				var info = {fb : [], insta : [], pin :[] , date : [],you : [], tw : []};
				for(var i=0;i<data.length;i++){
					info.fb.push(data[i].Facebook);
					info.date.push(data[i].Date);
					info.insta.push(data[i].Instagram);
					info.pin.push(data[i].Pinterest);
					info.you.push(data[i].YouTube);
					info.tw.push(data[i].Twitter);
					
					
				}
				
					var ctx = document.getElementById('myLine').getContext('2d');
				
	var datas= {
		labels: info.date,
        datasets: [
        {
            label: 'Facebook',
            data: info.fb,
            backgroundColor: '#3b5998',
            borderColor: 'lightblue',
            fill: false,
            lineTension: 0,
            pointRadius: 3,
        },
        
        {
            label: 'Instagram',
            data: info.insta,
            backgroundColor: '#E1306C',
            borderColor: '#8f0b7f',
            fill: false,
            lineTension: 0,
            pointRadius: 3,
        },
        {
            label: 'Pinterest',
            data: info.pin,
            backgroundColor: '#c8232c',
            borderColor: 'pink',
            fill: false,
            lineTension: 0,
            pointRadius: 3,
        },
        {
            label: 'YouTube',
            data: info.you,
            backgroundColor: '#FF0000',
            borderColor: 'rbga(255,0,0,0.4)',
            fill: false,
            lineTension: 0,
            pointRadius: 3,
        },
        {
            label: 'Twitter',
            data: info.tw,
            backgroundColor: '#00acee',
            borderColor: 'grey',
            fill: false,
            lineTension: 0,
            pointRadius: 3,
        },
        
        ]
	}
var myChart = new Chart(ctx, {
    type: 'line',
    data: datas,
    options: {
    	responsive: true,
    	maintainAspectRatio: false,
    	title: {
    		display: true,
    		text: 'Social Media Statistics form May2009-May2020 (World)',
    		position: 'top',
    		fontSize: 18,
    		fontFamily:'Poppins',
    		
    		fontColor: 'black'
    	},
    	legend: {
    		display: true,
    		position: 'bottom'
    	},
    	drawOnChartArea: true
    }
});
}
		)
	});
		//linechart over

		//selection
	$(document).ready(function(){
		$.get("csvjsonworld10yrs.json",

			function (data){
				
				for(var i=1;i<(data.length);i++){
					var opt = document.createElement('OPTION');
					opt.innerHTML  = data[i-1]['Date'];
					document.getElementById('ym').appendChild(opt);
				}
			}
		)
	});
	//selection over

	//data in table and pie chart
function fun(){
	$('.chart-container').addClass('active');
	$.get("csvjsonworld10yrs.json",
			function (data){
				var ddl = document.getElementById("ym");
				var selectedValue = ddl.options[ddl.selectedIndex].value;
				for(var i=1;i<(data.length);i++){
				  if(selectedValue == data[i-1]['Date'])
					{
					var t = document.getElementById('tv');
					t.innerHTML = "<td>"+data[i-1]['Facebook']+"%</td><td>"+data[i-1]['Instagram']+"%</td><td>"+data[i-1]['Pinterest']+"%</td><td>"+data[i-1]['YouTube']+"%</td><td>"+data[i-1]['Twitter']+"%</td>";
					var ctx = document.getElementById('myChart').getContext('2d');
					var myChart = new Chart(ctx, {
				    type: 'doughnut',
				    data: {
				        labels: ['Facebook','Others'],
				        datasets: [{
				            label: '# of Votes',
				            data: [data[i-1]['Facebook'],(100-data[i-1]['Facebook'])],
				            backgroundColor: [
				                '#5796ff',
				                '#000000c4'
				                
				            ],
				            borderWidth: 0,

				            
				        }]

				    },
				    options: {
				    	responsive:true,
				    	maintainAspectRatio:false,
				        
				    	title: {
				    		display: true,
				    		text:"Facebook",
				    		position: 'top',
				    		fontSize: 18,
				    		fontColor: 'black'
				    	},
				    	legend: {
				    		display: true,
				    		position: 'bottom'
				    	},
				    	drawOnChartArea: true
				    }
				});
				var ctx1 = document.getElementById('myChart1').getContext('2d');
				var myChart1 = new Chart(ctx1, {
				    type: 'doughnut',
				    data: {
				        labels: ['Instagram','Others'],
				        datasets: [{
				            label: '# of Votes',
				            data: [data[i-1]['Instagram'],(100-data[i-1]['Instagram'])],
				            backgroundColor: [
				                '#E1306C',
				                '#000000c4'
				                
				            ],
				            borderWidth: 0,
				            
				        }]

				    },
				    options: {
				    	responsive:true,
				    	maintainAspectRatio:false,
				    	title: {
				    		display: true,
				    		text:"Instagram",
				    		position: 'top',
				    		fontSize: 18,
				    		fontColor: 'black'
				    	},
				    	legend: {
				    		display: true,
				    		position: 'bottom'
				    	},
				    	drawOnChartArea: true
				    }
				});
				var ctx2 = document.getElementById('myChart2').getContext('2d');
				var myChart2 = new Chart(ctx2, {
				    type: 'doughnut',
				    data: {
				        labels: ['Pinterest','Others'],
				        datasets: [{
				            label: '# of Votes',
				            data: [data[i-1]['Pinterest'],(100-data[i-1]['Pinterest'])],
				            backgroundColor: [
				                '#fb3b45',
				                '#000000c4'
				                
				            ],
				            borderWidth: 0,
				            
				        }]

				    },
				    options: {
				    	responsive:true,
				    	maintainAspectRatio:false,
				    	title: {
				    		display: true,
				    		text:"Pinterest",
				    		position: 'top',
				    		fontSize: 18,
				    		fontColor: 'black'
				    	},
				    	legend: {
				    		display: true,
				    		position: 'bottom'
				    	},
				    	drawOnChartArea: true
				    }
				});
				var ctx3 = document.getElementById('myChart3').getContext('2d');
				var myChart3 = new Chart(ctx3, {
				    type: 'doughnut',
				    data: {
				        labels: ['YouTube','Others'],
				        datasets: [{
				            label: '# of Votes',
				            data: [data[i-1]['YouTube'],(100-data[i-1]['YouTube'])],
				            backgroundColor: [
				                '#de0000',
				                '#000000c4'
				                
				            ],
				            borderWidth: 0,
				            
				        }]

				    },
				    options: {
				    	responsive:true,
				    	maintainAspectRatio:false,
				    	title: {
				    		display: true,
				    		text:"YouTube",
				    		position: 'top',
				    		fontSize: 18,
				    		fontColor: 'black'
				    	},
				    	legend: {
				    		display: true,
				    		position: 'bottom'
				    	},
				    	drawOnChartArea: true
				    }
				});
				var ctx4 = document.getElementById('myChart4').getContext('2d');
				var myChart4 = new Chart(ctx4, {
				    type: 'doughnut',
				    data: {
				        labels: ['Twitter','Others'],
				        datasets: [{
				            label: '# of Votes',
				            data: [data[i-1]['Twitter'],(100-data[i-1]['Twitter'])],
				            backgroundColor: [
				                '#00acee',
				                '#000000c4'
				                
				            ],
				            borderWidth: 0,
				            
				        }]

				    },
				    options: {
				    	responsive:true,
				    	maintainAspectRatio:false,
				    	title: {
				    		display: true,
				    		text:"Twitter",
				    		position: 'top',
				    		fontSize: 18,
				    		fontColor: 'black'
				    	},
				    	legend: {
				    		display: true,
				    		position: 'bottom'
				    	},
				    	drawOnChartArea: true
				    }
				});
			}	
		}
			
	}
)}
//piechart over

//heremaps
function InfoBubble(heremap)
	{

		heremap.addEventListener('tap',function(event){
			var geoservices = pf.getGeocodingService();
			var position = heremap.screenToGeo(
               event.currentPointer.viewportX,
               event.currentPointer.viewportY,	
			);
			
			/*adding event listener 'tap' and getting corresponding x,y coordinates ..yaha console.log(position) kar u will get array and coordinates distance n all tp.. but this is done only to get lat long */
			var a = [position];
			/*converted set into array.. so a is now your array*/
			var marker = new H.map.Marker(position);
			geoservices.reverseGeocode(
			{
				mode:"retrieveAddress",
            	maxresults:1,
            	prox:a[0].lat+","+a[0].lng+","+100,
            },
            /*prox h na..usme u need to specify lat =itude longitude and radius toh tu array a  dekhegi toh uske a[0].lat me latitude n vaise longitude milega..n maine radius kam rakha h for better accuracy*/
            success=>{
            	var country = success.Response.View[0].Result[0].Location.Address.AdditionalData[0].value;
            	/*ye success.Response.View[0]...Data[0].value givesz country name..yaha pe console.log(country) karna..samjhega*/
      
            	$.get('csvjsonworldmap.json',function(data)
            	{

            		for(var i=0;i<data.length;i++)
            		{
            			if(data[i]['Continent']==country)
            			{	
            				var others = (100 - (data[i]["Facebook"] + data[i]['Instagram'] + data[i]['Twitter'] + data[i]['YouTube'] )).toFixed(2);

		            		var bub = new H.ui.InfoBubble(position,{
		            			content:'<div style="border-bottom:1px solid white; color:white;font-width:900; text-align:center;">'+country+'</div>'+'<div style="color:white;"><img src="png/fb.png" style="margin-right:10px;">'+data[i]["Facebook"]+'</div>'+'<div style="color:white;"><img src="png/ig.png" style="margin-right:10px;">'+data[i]['Instagram']+'</div>'+'<div style="color:white;"><img src="png/tw.png" style="margin-right:10px;">'+data[i]['Twitter']+'</div>'+'<div style="color:white;"><img src="png/yt.png" style="margin-right:10px;">'+data[i]['YouTube']+'</div>'+'<div style="color:white;">'+others+'% </div>'
		            		})
		            		/*creating a bubble..but bubble bus create hua h and not added in our map*/

                            ui.getBubbles().forEach(bub=>ui.removeBubble(bub));
                            /*this line will delete all previous buubles created*/

		            		ui.addBubble(bub);
		            		/*this line adds bubble to map*/

		            		
	            	    }
            	    }              
            	})
            }
            )
		})
	}

   
	var pf = new H.service.Platform({
		apikey:'3kidK1c9b9yWsY9vw1P8_JvnXYcdzte29p8DP8cgCMM'
	});
	 /*to create default layer for map ..bohot saree layers h like satellite view n all */
	var default_layers = pf.createDefaultLayers(); 
	var heremap = new H.Map(document.getElementById('heremap'),
		default_layers.vector.normal.map,
		{
			center:{lat:38.96,lng:30.17},
			zoom:1,
            pixelRatio: window.devicePixelRatio || 1
             /*specifing center coordinates zoom level and pixelratio(just to get how clear you want your map...i have set to window ka pixelratio or 1 ....(if pixelRatio set to 2 gives more clearity)*/       
		});
	var behaviour = new H.mapevents.Behavior(new H.mapevents.MapEvents(heremap));
	/*mapevents are used to get those tap,click functins..and behavior is a class of map events responsible for zoom and panning..toh if u dont write this behaviour u wont be able to move to different location of scroll over map.*/
	var ui = H.ui.UI.createDefault(heremap,default_layers);
	/*UI / user interface to create a default user interface and it is helpful to get default user interface for objects like info bubble,marker*/
	InfoBubble(heremap);

//heremaps over