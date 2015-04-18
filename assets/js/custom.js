$(document).ready(function() {
  var percentage = $(this).data("percentage");

  $('.loader').ClassyLoader({
      percentage: 'percentage',
      speed: 20,
      fontSize: '20px',
      roundedLine: true,
      diameter: 60,
      lineColor: 'rgba(243,88,57,1)',
      remainingLineColor: 'rgba(200,200,200,0.4)',
      lineWidth: 20,
      width:150,
      height:150
  });

  $('.loader2').ClassyLoader({
      percentage: 20,
      speed: 20,
      fontSize: '30px',
      roundedLine: true,
      diameter: 60,
      lineColor: 'rgba(21,101,192,1)',
      remainingLineColor: 'rgba(200,200,200,0.4)',
      lineWidth: 20,
      width:150,
      height:150
  });

  $('.loader3').ClassyLoader({
      percentage: 90,
      speed: 20,
      fontSize: '30px',
      roundedLine: true,
      diameter: 60,
      lineColor: 'rgba(0,230,118,1)',
      remainingLineColor: 'rgba(200,200,200,0.4)',
      lineWidth: 20,
      width:150,
      height:150
  });

  $('.loader4').ClassyLoader({
      percentage: 40,
      speed: 20,
      fontSize: '30px',
      roundedLine: true,
      diameter: 60,
      lineColor: 'rgba(253,216,53,1)',
      remainingLineColor: 'rgba(200,200,200,0.4)',
      lineWidth: 20,
      width:150,
      height:150
  });

  $("#element").click(function() {
    
    alert("Vous avez cliqué l'élément ID"+id);
  });

});