//===============Start Request Location Form=========================//
$(document).ready(function() {
    //load location data
    load_json_data('location');
  
    function load_json_data(id, parent_id) {
        let item = ''; //defined a variable
        //fetch data from json file
        $.getJSON('ie.json', function(data) {
  
            item += '<option value="">Select ' + id + '</option>';
            //fetch array of data one by one
            $.each(data, function(key, value) {
                if (id == 'location') {
                    if (value.parent_id == '0') {
                        item += '<option value="' + value.id + '">' + value.city + '</option>';
                    }
                } else {
                    if (value.parent_id == parent_id) {
                        item += '<option value="' + value.id + '">' + value.city + '</option>';
                    }
                }
            });
            $('#' + id).html(item);
        });
  
    }
  
    $(document).on('change', '#location', function() {
        let location_id = $(this).val();
        if (location_id != '') {
            load_json_data('area', location_id);
        } else {
            $('#area').html('<option value="">Select Area</option>');
        }
    });
    
  });
  //===============End Request Location Form=========================//