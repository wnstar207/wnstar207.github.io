$("#dt1").datepicker({
            dateFormat: "mm/dd/yy",
            onSelect: function (date) {
                var dt1 = $('#dt1').datepicker('getDate');
                var dt2 = $('#dt2').datepicker('getDate');
                if (dt1 > dt2) {
                    $('#dt2').datepicker('setDate', dt1);
                }
                $('#dt2').datepicker('option', 'minDate', dt1);
            }
        });
        $('#dt2').datepicker({
            dateFormat: "mm/dd/yy",
            minDate: $('#dt1').datepicker('getDate'),
            onClose: function () {
                var dt1 = $('#dt1').datepicker('getDate');
                var dt2 = $('#dt2').datepicker('getDate');
                //check to prevent a user from entering a date below date of dt1
                if (dt2 <= dt1) {
                    var minDate = $('#dt2').datepicker('option', 'minDate');
                    $('#dt2').datepicker('setDate', minDate);
                }
            }
        });