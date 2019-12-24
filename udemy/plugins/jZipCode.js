; (function ($) {
    $.fn.jZipCode = function (properties) { $(this).bind('click', function () { if ($(properties.target).val()) { $(properties.target).searchDestroy(properties); } }) }
    var geocoder = new google.maps.Geocoder(); $.fn.searchDestroy = function (properties) {
        var address = $(properties.target).val(); geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var location
                if (results.length > 1) { var str = ''; str += '<ul>'; $.each(results, function (i, objResult) { str += '<li><a href="javascript:void(0);">' + objResult.formatted_address + '</a></li>'; }); str += '</ul>'; $(properties.multipleReturns).html(str).find('li').click(function () { $(properties.target).showMeTheMap(properties, results[$(this).index()].geometry.location); $(properties.multipleReturns).empty(); }) }
                else { $(properties.target).showMeTheMap(properties, results[0].geometry.location); } 
            } else { alert(status); } 
        });
    }
    $.fn.showMeTheMap = function (properties, location) {
        geocoder.geocode({ 'latLng': location }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                $(properties.streetTarget).val(results[0].address_components[1].long_name); $(properties.districtTarget).val(results[0].address_components[2].long_name); $(properties.cityTarget).val(results[0].address_components[3].long_name); $(properties.stateTarget).val('').filter(function () {
                    if (results[0].address_components[4])
                        return $(this).val(results[0].address_components[4].long_name);
                })
                if (properties.showMap) {
                    var map; var myOptions = { zoom: 15, center: location, mapTypeId: google.maps.MapTypeId.ROADMAP }
                    map = new google.maps.Map(document.getElementById(properties.showMap), myOptions); var marker = new google.maps.Marker({ map: map, position: location });
                } 
            }
            else { alert(status); } 
        });
    } 
})(jQuery);