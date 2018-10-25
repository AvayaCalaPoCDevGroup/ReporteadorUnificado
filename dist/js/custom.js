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


});
