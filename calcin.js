$(document).ready(function(){
		$.get("csvjsonin10yrs.json",

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
    		text: 'Social Media Statistics form May2009-May2020 (India)',
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
		)
	});
		//linechart over

		//selection
	$(document).ready(function(){
		$.get("csvjsonin10yrs.json",

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
	$.get("csvjsonin10yrs.json",
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
				    		text: 'Facebook',
				    		position: 'top',
				    		fontSize: 20,
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
				    		text: 'Instagram',
				    		position: 'top',
				    		fontSize: 20,
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
				                '#c8232c',
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
				    		text: 'Pinterest',
				    		position: 'top',
				    		fontSize: 20,
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
				                'rgb(255,0,0)',
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
				    		text: 'YouTube',
				    		position: 'top',
				    		fontSize: 20,
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
				    		text: 'Twitter',
				    		position: 'top',
				    		fontSize: 20,
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