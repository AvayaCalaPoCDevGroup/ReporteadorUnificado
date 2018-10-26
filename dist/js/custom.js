$(document).ready(function() {
  $.fn.dataTable.ext.errMode = 'none';
  $("#report1-frm").submit(function(event) {
    //stop submit the form, we will post it manually.
    event.preventDefault();
    // Get form
    var form = $('#report1-frm')[0];
    // Create an FormData object
    var data = new FormData(form);
    // disabled the submit button
    $("#report1-frm-btn").prop("disabled", true);

    $.ajax({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "php/reporteunificado.php",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function(data) {
        $("#report1-frm-btn").prop("disabled", false);
        console.log(data);
        var json = $.parseJSON(data)
        console.log(json);

        var tablagral = $('#transactions-table').DataTable({
          "dom": 'Bfrtip',
          "fixedHeader": true,
          "scrollX": true,
          "lengthMenu": [
            [5, 10, 15, -1],
            [10, 25, 50, "All"]
          ],
          "buttons": [{
              extend: 'copyHtml5',
              footer: true
            },
            {
              extend: 'excelHtml5',
              footer: true,
              exportOptions: {
                extension: '.xls'
              }
            },
            {
              extend: 'csvHtml5',
              footer: true
            },
            {
              extend: 'pdfHtml5',
              footer: true
            },
            {
              extend: 'print',
              footer: true
            }
          ],
          "destroy": true,
          "processing": true,
          "data": json,
          "columns": [{
              data: "ucid"
            },
            {
              data: "originatingnumber"
            },
            {
              data: "applicationname"
            },
            {
              data: "calltimestamp"
            },
            {
              data: "destinationnumber"
            },
            {
              data: "duration"
            },
            {
              data: "endtype"
            },
            {
              data: "redirectednumber"
            },
            {
              data: "anslogin"
            },
            {
              data: "dispsplit"
            },
            {
              data: "agentskilllevel"
            },
            {
              data: "agentsurplus"
            },
            {
              data: "queuetime"
            },
            {
              data: "held"
            },
            {
              data: "ansholdtime"
            },
            {
              data: "holdabn"
            },
            {
              data: "ansreason"
            },
            {
              data: "disppriority"
            },
            {
              data: "duration"
            },
            {
              data: "firstvdn"
            },
            {
              data: "talktime"
            },
            {
              data: "asai_uui"
            }
          ]

        });
      },
      error: function(e) {
        console.log("ERROR : ", e);
        $("#report1-frm-btn").prop("disabled", false);
      }
    });
  });

//IVR

  $("#ivrentrantes-frm").submit(function(event) {
    //stop submit the form, we will post it manually.
    event.preventDefault();
    // Get form
    var form = $('#ivrentrantes-frm')[0];
    // Create an FormData object
    var data = new FormData(form);
    // disabled the submit button
    $("#report1-frm-btn").prop("disabled", true);

    $.ajax({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "php/ivr_entrantes.php",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function(data) {
        $("#report1-frm-btn").prop("disabled", false);
        var json = $.parseJSON(data)
        var variable  = json["0"].count.toString();
        console.log(json);
        $("#variable").text(variable);
      },
      error: function(e) {
        console.log("ERROR : ", e);
        $("#report1-frm-btn").prop("disabled", false);
      }
    });
  });

  $("#ivrenrutadas-frm").submit(function(event) {
    //stop submit the form, we will post it manually.
    event.preventDefault();
    // Get form
    var form = $('#ivrenrutadas-frm')[0];
    // Create an FormData object
    var data = new FormData(form);
    // disabled the submit button
    $("#report1-frm-btn").prop("disabled", true);

    $.ajax({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "php/ivr_enrutadas.php",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function(data) {
        $("#report1-frm-btn").prop("disabled", false);
        var json = $.parseJSON(data)
        var tablagral = $('#transactions-table').DataTable({
          "dom": 'Bfrtip',
          "fixedHeader": false,
          "scrollX": false,
          "lengthMenu": [
            [5, 10, 15, -1],
            [10, 25, 50, "All"]
          ],
          "buttons": [{
              extend: 'copyHtml5',
              footer: true
            },
            {
              extend: 'excelHtml5',
              footer: true,
              exportOptions: {
                extension: '.xls'
              }
            },
            {
              extend: 'csvHtml5',
              footer: true
            },
            {
              extend: 'pdfHtml5',
              footer: true
            },
            {
              extend: 'print',
              footer: true
            }
          ],
          "destroy": true,
          "processing": true,
          "data": json,
          "columns": [{
              data: "replace"
            },
            {
              data: "count"
            }

          ]

        });
      },
      error: function(e) {
        console.log("ERROR : ", e);
        $("#report1-frm-btn").prop("disabled", false);
      }
    });
  });

  $("#ivrabandonadas-frm").submit(function(event) {
    //stop submit the form, we will post it manually.
    event.preventDefault();
    // Get form
    var form = $('#ivrabandonadas-frm')[0];
    // Create an FormData object
    var data = new FormData(form);
    // disabled the submit button
    $("#report1-frm-btn").prop("disabled", true);

    $.ajax({
      type: "POST",
      enctype: 'multipart/form-data',
      url: "php/ivr_abandonadas.php",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function(data) {
        $("#report1-frm-btn").prop("disabled", false);
        var json = $.parseJSON(data)
        var tablagral = $('#transactions-table').DataTable({
          "dom": 'Bfrtip',
          "fixedHeader": false,
          "scrollX": false,
          "lengthMenu": [
            [5, 10, 15, -1],
            [10, 25, 50, "All"]
          ],
          "buttons": [{
              extend: 'copyHtml5',
              footer: true
            },
            {
              extend: 'excelHtml5',
              footer: true,
              exportOptions: {
                extension: '.xls'
              }
            },
            {
              extend: 'csvHtml5',
              footer: true
            },
            {
              extend: 'pdfHtml5',
              footer: true
            },
            {
              extend: 'print',
              footer: true
            }
          ],
          "destroy": true,
          "processing": true,
          "data": json,
          "columns": [{
              data: "applicationname"
            },
            {
              data: "terminationpagenameshort"
            },
            {
              data: "count"
            }

          ]

        });
      },
      error: function(e) {
        console.log("ERROR : ", e);
        $("#report1-frm-btn").prop("disabled", false);
      }
    });
  });

///CMS


$("#cms_recibidas_agentes-frm").submit(function(event) {
  //stop submit the form, we will post it manually.
  event.preventDefault();
  // Get form
  var form = $('#cms_recibidas_agentes-frm')[0];
  // Create an FormData object
  var data = new FormData(form);
  // disabled the submit button
  $("#report1-frm-btn").prop("disabled", true);

  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: "php/cms_recibidas_agentes.php",
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(data) {
      $("#report1-frm-btn").prop("disabled", false);
      console.log(data);
       var json = $.parseJSON(data)
       console.log(json);
        var variable  = json["0"].callsoffered.toString();
        $("#variable").text(variable);
    },
    error: function(e) {
      console.log("ERROR : ", e);
      $("#report1-frm-btn").prop("disabled", false);
    }
  });
});


$("#cms_atendidas_agentes-frm").submit(function(event) {
  //stop submit the form, we will post it manually.
  event.preventDefault();
  // Get form
  var form = $('#cms_atendidas_agentes-frm')[0];
  // Create an FormData object
  var data = new FormData(form);
  // disabled the submit button
  $("#report1-frm-btn").prop("disabled", true);

  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: "php/cms_atendidas_agentes.php",
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(data) {
      $("#report1-frm-btn").prop("disabled", false);
      console.log(data);
       var json = $.parseJSON(data)
       console.log(json);
        var variable  = json["0"].acdcalls.toString();
        $("#variable").text(variable);
    },
    error: function(e) {
      console.log("ERROR : ", e);
      $("#report1-frm-btn").prop("disabled", false);
    }
  });
});


$("#cms_servicio_agentes-frm").submit(function(event) {
  //stop submit the form, we will post it manually.
  event.preventDefault();
  // Get form
  var form = $('#cms_servicio_agentes-frm')[0];
  // Create an FormData object
  var data = new FormData(form);
  // disabled the submit button
  $("#report1-frm-btn").prop("disabled", true);

  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: "php/cms_servicio_agentes.php",
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(data) {
      $("#report1-frm-btn").prop("disabled", false);
      console.log(data);
       var json = $.parseJSON(data)
       console.log(json);
       var variable  = json["0"].sl;
       var variable  = parseFloat(variable);
       console.log(variable);
       var total = 100 - variable;




      var pieChartCanvas = $('#pieChart').get(0).getContext('2d')

var pieChart       = new Chart(pieChartCanvas)
var PieData        = [
  {
    value    : variable,
    color    : '#256d0d',
    highlight: '#256d0d',
    label    : 'Contestadas'
  },
  {
    value    : total,
    color    : '#f56954',
    highlight: '#f56954',
    label    : 'No contestadas'
  }
]
var pieOptions     = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke    : true,
  //String - The colour of each segment stroke
  segmentStrokeColor   : '#fff',
  //Number - The width of each segment stroke
  segmentStrokeWidth   : 2,
  //Number - The percentage of the chart that we cut out of the middle
  percentageInnerCutout: 50, // This is 0 for Pie charts
  //Number - Amount of animation steps
  animationSteps       : 100,
  //String - Animation easing effect
  animationEasing      : 'easeOutBounce',
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate        : true,
  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale         : true,
  //Boolean - whether to make the chart responsive to window resizing
  responsive           : true,
  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  maintainAspectRatio  : true,
  //String - A legend template
  legendTemplate       : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
}
//Create pie or douhnut chart
// You can switch between pie and douhnut using the method below.
pieChart.Doughnut(PieData, pieOptions)


    },
    error: function(e) {
      console.log("ERROR : ", e);
      $("#report1-frm-btn").prop("disabled", false);
    }
  });
});



$("#cms_llamadas_prod-frm").submit(function(event) {
  //stop submit the form, we will post it manually.
  event.preventDefault();
  // Get form
  var form = $('#cms_llamadas_prod-frm')[0];
  // Create an FormData object
  var data = new FormData(form);
  // disabled the submit button
  $("#report1-frm-btn").prop("disabled", true);

  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: "php/cms_llamadas_prod.php",
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(data) {
      $("#report1-frm-btn").prop("disabled", false);
      var json = $.parseJSON(data)
      console.log(json);
      var tablagral = $('#transactions-table').DataTable({
        "dom": 'Bfrtip',
        "fixedHeader": false,
        "scrollX": false,
        "lengthMenu": [
          [5, 10, 15, -1],
          [10, 25, 50, "All"]
        ],
        "buttons": [{
            extend: 'copyHtml5',
            footer: true
          },
          {
            extend: 'excelHtml5',
            footer: true,
            exportOptions: {
              extension: '.xls'
            }
          },
          {
            extend: 'csvHtml5',
            footer: true
          },
          {
            extend: 'pdfHtml5',
            footer: true
          },
          {
            extend: 'print',
            footer: true
          }
        ],
        "destroy": true,
        "processing": true,
        "data": json,
        "columns": [{
            data: "logid"
          },
          {
            data: "split"
          },
          {
            data: "acdcalls"
          },
          {
            data: "row_date"
          }

        ]

      });
    },
    error: function(e) {
      console.log("ERROR : ", e);
      $("#report1-frm-btn").prop("disabled", false);
    }
  });
});

$("#cms_tiempolog_prod-frm").submit(function(event) {
  //stop submit the form, we will post it manually.
  event.preventDefault();
  // Get form
  var form = $('#cms_tiempolog_prod-frm')[0];
  // Create an FormData object
  var data = new FormData(form);
  // disabled the submit button
  $("#report1-frm-btn").prop("disabled", true);

  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: "php/cms_tiempolog_prod.php",
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(data) {
      $("#report1-frm-btn").prop("disabled", false);
      var json = $.parseJSON(data)
      console.log(json);
      var tablagral = $('#transactions-table').DataTable({
        "dom": 'Bfrtip',
        "fixedHeader": false,
        "scrollX": false,
        "lengthMenu": [
          [5, 10, 15, -1],
          [10, 25, 50, "All"]
        ],
        "buttons": [{
            extend: 'copyHtml5',
            footer: true
          },
          {
            extend: 'excelHtml5',
            footer: true,
            exportOptions: {
              extension: '.xls'
            }
          },
          {
            extend: 'csvHtml5',
            footer: true
          },
          {
            extend: 'pdfHtml5',
            footer: true
          },
          {
            extend: 'print',
            footer: true
          }
        ],
        "destroy": true,
        "processing": true,
        "data": json,
        "columns": [{
            data: "logid"
          },
          {
            data: "ti_stafftime"
          }

        ]

      });
    },
    error: function(e) {
      console.log("ERROR : ", e);
      $("#report1-frm-btn").prop("disabled", false);
    }
  });
});


$("#cms_disponible_prod-frm").submit(function(event) {
  //stop submit the form, we will post it manually.
  event.preventDefault();
  // Get form
  var form = $('#cms_disponible_prod-frm')[0];
  // Create an FormData object
  var data = new FormData(form);
  // disabled the submit button
  $("#report1-frm-btn").prop("disabled", true);

  $.ajax({
    type: "POST",
    enctype: 'multipart/form-data',
    url: "php/cms_disponible_prod.php",
    data: data,
    processData: false,
    contentType: false,
    cache: false,
    timeout: 600000,
    success: function(data) {
      $("#report1-frm-btn").prop("disabled", false);
      var json = $.parseJSON(data)
      console.log(json);
      var tablagral = $('#transactions-table').DataTable({
        "dom": 'Bfrtip',
        "fixedHeader": false,
        "scrollX": false,
        "lengthMenu": [
          [5, 10, 15, -1],
          [10, 25, 50, "All"]
        ],
        "buttons": [{
            extend: 'copyHtml5',
            footer: true
          },
          {
            extend: 'excelHtml5',
            footer: true,
            exportOptions: {
              extension: '.xls'
            }
          },
          {
            extend: 'csvHtml5',
            footer: true
          },
          {
            extend: 'pdfHtml5',
            footer: true
          },
          {
            extend: 'print',
            footer: true
          }
        ],
        "destroy": true,
        "processing": true,
        "data": json,
        "columns": [{
            data: "logid"
          },
          {
            data: "split"
          },
          {
            data: "i_availtime"
          },
          {
            data: "row_date"
          }

        ]

      });
    },
    error: function(e) {
      console.log("ERROR : ", e);
      $("#report1-frm-btn").prop("disabled", false);
    }
  });
});

});
