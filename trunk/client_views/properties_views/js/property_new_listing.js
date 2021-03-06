// <editor-fold desc="set google nearby place radius and type(special for property)"  defaultstate="collapsed">
ng_map_profile.config(function(ngGPlacesAPIProvider){
                ngGPlacesAPIProvider.setDefaults({
                radius:1000,
                types:['bank','school','shopping_mall', 'hospital','airport', 'subway_station', 'bus_station','train_station',
                'university', 'taxi_stand', 'gas_station'],
                nearbySearchKeys: ['name', 'reference', 'vicinity', 'types', 'icon']
        });
});
// </editor-fold>

ng_map_profile.controller('uploadProfile', function($injector, $scope, $controller, ngGPlacesAPI, flowFactory, $http) {
        if(typeof ngGPlacesAPI !== 'undefined')
        {
                $controller('google_maps', {$scope: $scope, ngGPlacesAPI:ngGPlacesAPI, flowFactory: flowFactory});
        }
        else
        {
                $controller('google_maps', {$scope: $scope, flowFactory: flowFactory});
        }
        $scope.uploadImageError = "";
        $controller('facilities', {$scope: $scope});
        // <editor-fold desc="configure photo uploader"  defaultstate="collapsed">
        $scope.message = 'uploader';
        $scope.uploader = flowFactory;
        $scope.uploader.opts = {
           target:'/cb_iloveproperty/trunk/client_views/properties_views/index.php/_utils/properties_upload/images',
           testChunks:false,
           simultaneousUploads: 3};
        $scope.person = {
            'email': '',
            'name': '',
            'phone': '',
            'user_id':''
        };
        $scope.back_count = -1;
        $scope.temp_ref = "";
        // </editor-fold>
        // <editor-fold desc="property information column 4"  defaultstate="collapsed">
        $scope.property_category_4 =
                [
                    {
                        id:'street',
                        name:'Street',
                        control:'input-word',
                        category:'sell rent room',
                        placeholder:'Enter your street name',
                        values:
                        [
                            ''
                        ]
                    },
                    {
                        id:'area',
                        name:'Area',
                        control:'input-text',
                        category:'sell rent room',
                        placeholder:'Enter Your Area',
                        values:
                        [
                           ''
                        ]
                    },
                  
                    {
                        id:'postcode',
                        name:'Postcode',
                        control:'input-text',
                        category:'sell rent room',
                        placeholder:'Enter your poscode number',
                        values:
                        [
                            ''
                        ]
                    }
                ];
        // </editor-fold>
        // <editor-fold desc="property information column 3"  defaultstate="collapsed">
        $scope.property_category_3 =
                [
                    {
                        id:'unit_name',
                        name:'Unit Name',
                        control:'input-text',
                        category:'sell rent room',
                        placeholder:'Your Property Name',
                        values:
                        [
                            ''
                        ]
                    },
                    {
                        id:'country',
                        name:'Country',
                        control:'select',
                        category:'sell rent room',
                        values:
                        [
                            'Malaysia'
                        ]
                    },
                    {
                        id:'state',
                        name:'State',
                        control:'select',
                        category:'sell rent room',
                        values:
                        [
                        ]
                    }
                ];
        // </editor-fold>
        // <editor-fold desc="property information column 2"  defaultstate="collapsed">
        $scope.property_category_2 =
                [
                    {
                        id:'bedroom',
                        name:'Bedroom',
                        control:'input-number',
                        category:'sell rent',
                        values:
                        [
                            1,
                            10,
                            3
                        ]
                    },
                    {
                        id:'bathroom',
                        name:'Bathroom',
                        control:'input-number',
                        category:'sell rent room',
                        values:
                        [
                            1,
                            10,
                            2
                        ]   
                    },
                    {
                        id:'car_park',
                        name:'Car Park',
                        control:'input-number',
                        category:'sell rent room',
                        values:
                        [
                            0,
                            10,
                            2
                        ]   
                    },
                    {
                        id:'tenure',
                        name:'Tenure',
                        control:'select',
                        category:'sell',
                        values:
                         [
                            'Freehold',
                            'Leasehold'

                         ]
                    },
                    {
                    id:'land_title_type',
                    name:'Land Title Type',
                    control:'select',
                    category:'sell',
                    values:
                     [
                        'Residential',
                        'Commercial',
                        'Industrial'

                     ]
                    },
                    {
                        id:'furnishing',
                        name:'Furnishing',
                        control:'select',
                        category:'sell rent room',
                        values:
                        [
                            'Full Furnished',
                            'Partially Furnished',
                            'No Furnished'
                        ]             
                    },
                    {
                        id:'occupied',
                        name:'Occupied',
                        control:'select',
                        category:'sell rent room',
                        values:
                        [
                            'No',
                            'Yes'
                        ]
                    },  
                    {
                        id:'monthly_maintanance',
                        name:'Monthly Maintanance',
                        control:'input-currency',
                        category:'sell ',
                        values:
                        [
                            0.00
                        ]
                    }
                ];
        // </editor-fold>
        // <editor-fold desc="property information column 1"  defaultstate="collapsed">
        $scope.property_category_1=
            [

                {
                    id:'type',
                    name:'Type',
                    control:'select',
                    category:'sell rent room',
                    values:
                    [
                        'Property For Sale',
                        'Property For Lease'
                    ]
                },
                {
                    id:'auction',
                    name:'Auction',
                    control:'input-date',
                    category:'sell',
                    values:
                    [
                        ''
                    ]
                },
                {
                    id:'property_type_sell',
                    name: 'Property Type',
                    control:'select-title',
                    category:'sell',
                    values:
                    {
                         'Apartment/Flat':[
                            'Apartment',
                            'Apartment Duplex',
                            'Flat',
                            'Service Apartment',
                            'Other'
                        ],
                        'Condo/Residence':[
                            'Condo',
                            'Duplex',
                            'Penthouse',
                            'Residence',
                            'Serviced Condo',
                            'Serviced Residence',
                            'Soho',
                            'Studio',
                            'Townhouse Condo',
                            'Triplex',
                            'Other'
                        ],
                        'Semi-D/Banglo':[
                            'Bungalow House',
                            'Country House',
                            'Semi-Detached',
                            'Other'
                        ],
                        'Terrace/Link/Townhouse':[
                             'Single Storey',
                             '1.5 Storey',
                             'Double Storey',
                             '2.5 Storey',
                             'Triple Storey',
                             '3.5 Storey',
                             'quadruple Storey',
                             '4.5 Storey',
                             'Other'
                         ],
                        'Land':[
                            'Aqricultural Land',
                            'Bungalow Land',
                            'Commercial Land',
                            'Residential Land',
                            'Other'
                        ],
                        'Shop':[
                            'Retail Shop',
                            'Shop House',
                            'Shop Lot',
                            'Shopping Mall',
                            'Other'
                        ],
                        'Office':[
                            'Office Lot',
                            'Office Suite',
                            'Soho Office',
                            'Shopping mall',
                            'Other'
                        ],
                        'Industrial':[
                            'Factories',
                            'Light Industrial',
                            'Warehouse',
                            'Other'
                        ],
                        'Hotel':[
                            'Hotel'
                        ]
                    }
                },
                {
                    id:'property_type_rent',
                    name: 'Property Type',
                    control:'select-title',
                    category:'rent',
                    values:
                    {
                         'Apartment/Flat':[
                            'Apartment',
                            'Apartment Duplex',
                            'Flat',
                            'Service Apartment',
                            'Other'
                        ],
                        'Condo/Residence':[
                            'Condo',
                            'Duplex',
                            'Penthouse',
                            'Residence',
                            'Serviced Condo',
                            'Serviced Residence',
                            'Soho',
                            'Studio',
                            'Townhouse Condo',
                            'Triplex',
                            'Other'
                        ],
                        'Semi-D/Banglo':[
                            'Bungalow House',
                            'Country House',
                            'Semi-Detached',
                            'Other'
                        ],
                        'Terrace/Link/Townhouse':[
                             'Single Storey',
                             '1.5 Storey',
                             'Double Storey',
                             '2.5 Storey',
                             'Triple Storey',
                             '3.5 Storey',
                             'quadruple Storey',
                             '4.5 Storey',
                             'Other'
                         ],
                        'Land':[
                            'Aqricultural Land',
                            'Bungalow Land',
                            'Commercial Land',
                            'Residential Land',
                            'Other'
                        ],
                        'Shop':[
                            'Retail Shop',
                            'Shop House',
                            'Shop Lot',
                            'Shopping Mall',
                            'Other'
                        ],
                        'Office':[
                            'Office Lot',
                            'Office Suite',
                            'Soho Office',
                            'Shopping mall',
                            'Other'
                        ],
                        'Industrial':[
                            'Factories',
                            'Light Industrial',
                            'Warehouse',
                            'Other'
                        ],
                        'Hotel':[
                            'Hotel'
                        ],
                        'Room':[
                            'Master',
                            'Junior Master',
                            'Big Room',
                            'Middle Room',
                            'Small Room'
                        ]
                    }
                },
                {
                    id:'size_measurement_code',
                    name:'Size Measure Code',
                    control:'select',
                    category:'sell rent',
                    values:['sqft','m2']
                },
                {
                    id:'built_up',
                    name:'Built Up',
                    control:'input-number',
                    category:'sell rent',
                    values:
                    [
                        1,
                        1000000,
                        1500
                    ]
                },
                {
                    id:'land_area',
                    name:'Land Area',
                    control:'input-number',
                    category:'sell rent',
                    values:
                    [
                        1000,
                        1000000,
                        2000
                    ]
                },
                //Need to load from DB
                {
                    id:'currency',
                    name:'Currency',
                    control:'select',
                    category:'sell rent room',
                    values:
                    [
                        'MYR',
                        'SGD',
                        'USD'
                        
                    ] 
                },
                {
                    id: 'asking_price',
                    name:'Asking Price',
                    control:'input-currency',
                    category:'sell',
                    values:[
                        1000000
                    ]
                },
                {
                    id: 'asking_price_per',
                    name:'Asking Price Per',
                    control:'input-currency',
                    category:'sell',
                    values:[
                       500 
                    ]
                },
                {
                        id:'reserve_type',
                        name:'Reserve Type',
                        control:'select',
                        category:'sell',
                        values:
                        [
                            '--',
                            'BUMI LOT'
                        ]
                        
               },
               {
                    id: 'monthly_rental',
                    name:'Monthly Rental',
                    control:'input-currency',
                    category:'rent room',
                    values:[
                        600
                    ]
                }
            ];
       // </editor-fold>
       
       
       // <editor-fold desc="On google map and marker loaded completely"  defaultstate="collapsed">
        angular.element('ui-gmap-google-map').ready(function () {
        //var homeControlDiv = document.createElement('div');
       
       if(Object.keys($scope.googleMap).length > 0)
       {
            var homeControlDiv = document.createElement('div');
            var map = $scope.googleMap.getGMap();

            HomeControl(homeControlDiv, $scope, ngGPlacesAPI);

            homeControlDiv.index = 1;
            map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
            //hoke to country change
            $scope.$watchCollection("country_state", function(newVal, oldVal)
            {
                //use jquery to get the ISO 3166-1 Alpha-2 compatible country code and capital location
                
               if(newVal === oldVal)
                   return;
               var objProperty = $.makeclass(get_base());
               objProperty.setWSDL();
               var url = objProperty.getWsdlBaseUrl() + "index.php/base/get_country_short_name";
               senddata = "country=" + newVal.country;
               $http({
                 method: 'POST',
                 url: url,
                 data: senddata,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                   if(newVal.short.toLowerCase() !== response.data.toLowerCase())
                       {
                           newVal.short =  response.data.toLowerCase();
                           $scope.google_maps.form.country = newVal.short;
                           $scope.google_maps.options.country = $scope.google_maps.form.country;
                           get_country_location_param = "country_short_name=" + newVal.short.toUpperCase();
                           var url = objProperty.getWsdlBaseUrl() + "index.php/base/get_country_location";
                           $scope.google_maps.autocomplete = '';
                           
                           $http({
                             method: 'POST',
                             url: url,
                             cache: true,
                             data: get_country_location_param,
                             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                           }).then(function(response) {			   
                               $scope.map.center.latitude = response.data[0];
                               $scope.marker.coords.latitude = response.data[0];
                               $scope.map.center.longitude = response.data[1];
                               $scope.marker.coords.longitude = response.data[1];
                               
                               $scope.googleMarker.getGMarkers()[0].setPosition({lat: $scope.map.center.latitude, lng: $scope.map.center.longitude});
                           });
                           
                       }
  
                }, 
                function(response) { // optional
                    console.log(response);
                }
              );
            });
            
            $scope.$watchCollection("google_maps.details", function(newVal, oldVal)
            {
                //use jquery to get the ISO 3166-1 Alpha-2 compatible country code and capital location
              if(newVal === oldVal)
                   return;
             
               var found = false;
               for(var i = 0; i < newVal.address_components.length; i++)
               {
                  var component_name = newVal.address_components[i].long_name;
                  
                  $("#state > option").each(function()
                  {
                     
                     if($(this).text() === component_name)
                     {
                         $("#state").val(component_name);
                         found = true;
                      }
                  });
                  if(found) break;
               }
               
            });

            var add_details = function(data, details)
            {
                for(var j=0; j<data.length; j++)
                {
                   if(data[j].has_detail === false)
                   {
                      data[j].detail = details;
                      data[j].has_detail = true;
                      if(data[j].detail.photos)
                      {
                         var temp_photos = [];
                         for(var k = 0; k<data[j].detail.photos.length;k++)
                         {
                             var photo_url = data[j].detail.photos[k].getUrl({
                                 'maxWidth': data[j].detail.photos[k].width, 
                                 'maxHeight': data[j].detail.photos[k].height});
                             temp_photos.push(photo_url);
                         }
                         data[j].detail.photos = temp_photos;
                      }
                      //return data;
                      break;
                   }
                }
            };
            //marker.coords
            $scope.$watchCollection("marker.coords", function(newVal, oldVal)
            {
                if(newVal === oldVal)
                   return;
                else
                {
                    //var callbacks = $.Callbacks();
                    //callbacks.add(add_details);
                    ngGPlacesAPI.nearbySearch(
                    {
                         latitude:newVal.latitude, 
                         longitude:newVal.longitude
                    }
                    ).then(
                        function(data){
                            
                            for (var i = 0; i < data.length; i++) {
                                data[i]['has_detail'] = false;
                                ngGPlacesAPI.placeDetails(
                                {reference:data[i].reference}).then(
                                    function (details) {
                                        add_details(data, details);
                                        
                                    },
                                    function (details) {
                                        
                                        }
                                    );
                            }
                            $scope.NearbyPlaces = data;
                    });
                }
            });
           
       }
    });
    // </editor-fold>
     
      angular.element(document).ready(
        function() 
        {
            var uploaded_images = "NULL";
            var property_new_listing= {
                Extends: get_base(),
                Initialize: function( private ){       
                    this.parent.Initialize();


                },
                Private:{
                },
                Public:{

                }
            };
            var objProperty = $.makeclass(property_new_listing);
            var waitForFinalEvent = (function () {
                 var timers = {};
                  return function (callback, ms, uniqueId) {
                    if (!uniqueId) {
                      uniqueId = "Don't call this twice without a uniqueId";
                    }
                    if (timers[uniqueId]) {
                      clearTimeout (timers[uniqueId]);
                    }
                    timers[uniqueId] = setTimeout(callback, ms);
                  };
            })();
            $(window).resize(function()
                {
                    var objBase = $.makeclass(get_base());
                    waitForFinalEvent(function() {
                        objBase.set_footer_position();
						delete objBase;
                        }, 100, objBase.generateUUID());
                }

            );
            var error_ids = [];
            // <editor-fold desc="User triggered event"  defaultstate="collapsed">
            $scope.preview_click = function()
            {
                if( preview_check() === true) 
                {
                    $scope.back_count -= 1;
                    set_preview();
                }
            };
            
            $scope.term_click = function()
            {
                $scope.err_msg = "";
            };
            
            var get_property_type_info = function(category_name)
            {
                var search_category = "property_type_sell";
                var property_type = $('#property_type_sell').val();

                if(category_name === "rent")
                {
                    search_category = "property_type_rent";
                    property_type = $('#property_type_rent').val();
                }
                
                for (i = 0; i < ($scope.property_category_1.length); i++) { 
                    if($scope.property_category_1[i]['id']===search_category)
                    {
                        for (var category in ($scope.property_category_1[i]['values'])){
                            if (($scope.property_category_1[i]['values']).hasOwnProperty(category))
                            {
                                for(j = 0; j < ($scope.property_category_1[i]['values'][category].length); j++){
                                    if(($scope.property_category_1[i]['values'][category][j]) === property_type)
                                    {
                                        var property_category = category;
                                    }
                                }
                            }
                         }
                    }      
                }
                
                var property_type_info = new Array();
                property_type_info['property_category']= property_category;
                property_type_info['property_type']=property_type;
                
                return property_type_info;
            };
            
            /**
             * @description This function preparing message data
             */
            var prepare_message_data = function($scope)
            {
                var category_name = $scope.mapping[$.trim($('#type').val())];
                var prop_info = get_property_type_info(category_name);
                var property_category = prop_info['property_category'];
                var property_type = prop_info['property_type'];
                
                var listing;
                $scope.country_state.location["k"] = $scope.googleMarker.getGMarkers()[0].position.lat();
                $scope.country_state.location["B"] = $scope.googleMarker.getGMarkers()[0].position.lng();
                
                var remark = CKEDITOR.instances.remark.getData();
                var objHome = StaticHomeObject.getInstance();
                remark = objHome.remove_special_character_from_data(remark);
                
                
                switch(category_name)
                {
                    case "sell":
                        listing = {
                            'service_type' : category_name.toUpperCase(),
                            'price': parseFloat($('#asking_price input').val()).toFixed(2),
                            'car_park':$('#car_park').val(),
                            'auction': $('#auction').val(),
                            'size_measurement_code': $.trim($('#size_measurement_code').val()),
                            'buildup': $('#built_up').val(),
                            'landarea': $('#land_area').val(),
                            'bedrooms': $('#bedroom').val(),
                            'bathrooms': $('#bathroom').val(),
                            'ref':'',
                            'furnished_type':$.trim($('#furnishing').val()),
                            'occupied':$.trim($('#occupied').val()),
                            'monthly_maintanance': parseFloat($('#monthly_maintanance').val()).toFixed(2),
                            'remark': remark, //$('textarea#remark').val(),
                            'property_category':property_category,
                            'property_type':property_type,
                            'tenure':$.trim($('#tenure').val()),
                            'land_title_type': $.trim($('#land_title_type').val()),
                            'active':1,
                            'user_id':'',
                            'property_photo': '',
                            'facilities': get_facilities(),
                            'unit_name' : get_unit_name(),
                            'state': $.trim($('#state').val()),
                            'area': $('#area').val(),
                            'postcode':$('#postcode').val(),
                            'street':$('#street').val(),
                            'country':$.trim($('#country').val()),
                            'location':$scope.country_state.location,
                            'reserve_type': $.trim($('#reserve_type').val()),
                            'currency': $.trim($('#currency').val())
                        };
                        break;
                    case "rent":
                        listing = {
                            'service_type' : category_name.toUpperCase(),
                            'price': parseFloat($('#monthly_rental input').val()).toFixed(2),
                            'car_park':$('#car_park').val(),
                            'buildup': $('#built_up').val(),
                            'landarea': $('#land_area').val(),
                            'bedrooms': $('#bedroom').val(),
                            'bathrooms': $('#bathroom').val(),
                            'ref':'',
                            'furnished_type':$.trim($('#furnishing').val()),
                            'occupied':$.trim($('#occupied').val()),
                            'remark': remark,//$('textarea#remark').val(),
                            'land_title_type': $.trim($('#land_title_type').val()),
                            'active':1,
                            'user_id':'',
                            'property_photo': '',
                            'size_measurement_code': $.trim($('#size_measurement_code').val()),
                            'property_category':property_category,
                            'property_type':property_type,
                            'facilities': get_facilities(),
                            'unit_name' : get_unit_name(),
                            'state': $.trim($('#state').val()),
                            'area': $('#area').val(),
                            'postcode':$('#postcode').val(),
                            'street':$('#street').val(),
                            'country':$.trim($('#country').val()),
                            'location':$scope.country_state.location,
                            'currency': $.trim($('#currency').val())
                        };
                        break;
                        /*
                    case "room":
                           listing = {
                            'service_type' : category_name.toUpperCase(),
                            'price': parseFloat($('#monthly_rental input').val()).toFixed(2),
                            'car_park':$('#car_park').val(),
                            'bathrooms': $('#bathroom').val(),
                            'ref':'',
                            'furnished_type':$.trim($('#furnishing').val()),
                            'occupied':$.trim($('#occupied').val()),
                            'remark': CKEDITOR.instances.remark.document.getData().getHtml(),//$('textarea#remark').val(),
                            'property_category':$.trim($('#property_category').val()),
                            'property_type':$.trim($('#property_type').val()),
                            'active':1,
                            'user_id':'',
                            'property_photo': '',
                            'facilities': get_facilities(),
                            'unit_name' : get_unit_name(),
                            'state': $.trim($('#state').val()),
                            'area': $('#area').val(),
                            'postcode':$('#postcode').val(),
                            'street':$('#street').val(),
                            'country':$.trim($('#country').val()),
                            'location':$scope.country_state.location,
                            'currency': $.trim($('#currency').val())
                        };
                        break;
                            */
                }
                return listing;
            };
            /**
             * @description This function will invoke when user submitting their listing
             */
            $scope.submit_click = function()
            {
              if( submit_check() === true) 
              {              
                clear_errors();
                var listing = prepare_message_data($scope);
                var photo_list = get_uploaded_image();
                var listing_str = JSON.stringify(listing);
                listing_str = listing_str.replace('&nbsp;','%26nbsp;').replace('&', '%26');
                var senddata = "image_list=" + JSON.stringify(photo_list) + "&listing_information=" + listing_str;
                var url = objProperty.getBaseUrl() + "index.php/_utils/properties_upload/commit_images_and_validation";
                $scope.disable_button = 1;
                $scope.photo_upload_status = "Uploading Listing..."; 
                $http({
                   method: 'POST',
                   url: url,
                   data: senddata,
                   cache: true,
                   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                 }).then(function(response) {

                     var parsed_result = response.data;
                     if(parsed_result["status"] === "success")
                     {
                         listing['property_photo'] = parsed_result["data"];
                         set_listing(listing, $scope);
                     }
                     else
                     {
                         if( Object.prototype.toString.call( parsed_result["data"] ) === '[object Array]' ) {
                             set_error(parsed_result["data"]);
                         }
                         else
                         {
                             // Will drop into here if is a generic issue (mean no object structure)
                             console.log(parsed_result);
                             alert("Fail to submit listing, please contact admin");
                             $scope.disable_button = 0;
                         }
                     }


                 });
                }
            };
            //</editor-fold>
            var set_error = function(ids)
            {
                error_ids = ids;
                
                for(var i = 0; i < ids.length; i++ )
                {
                    var id = ids[i]+"-feedback";
                    $('.'+error_ids[i]+'-feedback').removeClass('glyphicon-ok');
                    $('.'+error_ids[i]+'-feedback').addClass('glyphicon-remove');
                    $('.'+error_ids[i]+'-feedback').css('color', 'red');
                    //$(id).css('border-color','red');
                    if(i===0)
                    {
                        document.getElementById("lbl_"+ids[i]).scrollIntoView(true);
                        // Offset according to top label
                        var cur_top = document.body.scrollTop;
                        cur_top = cur_top - 80;
                        document.body.scrollTop=cur_top;
                       
                    }
                }
            };
            var clear_errors = function()
            {
                
                for(var i = 0; i < error_ids.length; i++ )
                {
                    $('.'+error_ids[i]+'-feedback').removeClass('glyphicon-ok');
                    $('.'+error_ids[i]+'-feedback').removeClass('glyphicon-remove');
                    $('.'+error_ids[i]+'-feedback').addClass('glyphicon-asterisk');
                    /*if(i===0)
                    {
                        $('html, body').animate({
                            scrollTop: $(id).offset().top
                        }, 1000);
                    }*/
                }
                error_ids = [];
            };
            // <editor-fold desc="get_uploaded_image"  defaultstate="collapsed">
            /*
            * get_uploaded_image will return the temporary image name and the origin name
            */
            var initialize_events = function()
            {
              $('#popup_property_preview').on('hidden.bs.modal', function () {
                  $('#property_preview_content_iframe').attr('src', null);
              });
            };
            var get_uploaded_image = function()
            {
               var photo_list = new Array();
               var index = 0;
               var php_vals = uploaded_images;
               if($.isArray(php_vals) === true)
               {
                    $('.photo-desc').each(
                     function()
                     {
                         var tmp_files = new Array();
                         var filename = $scope.uploader.flow.files[index].name;
                         index = index +1;
                         for (var i = 0; i < php_vals.length; i++) { 
                             if(php_vals[i].post.flowFilename === filename)
                             {
                                 tmp_files.push(objProperty.get_filebaseName(php_vals[i].files.file.tmp_name));      
                             }
                        }
                        photo_list.push({
                            'name': filename,
                            'desc': $(this).val(),
                            'tmp_files': tmp_files,
                            'exists':false
                        });

                    });
                }
                return photo_list;
           };
            // </editor-fold>
            // <editor-fold desc="set_listing preview"  defaultstate="collapsed">
            var get_unit_name = function()
            {
                var name = $.trim($('#unit_name').val()).toLowerCase();
                if(typeof $scope.google_maps.details.name !== 'undefined' &&
                        name.indexOf($scope.google_maps.details.name.toLowerCase()) > -1)
                {
                     return   $scope.google_maps.details.name; 
                }
                else
                {
                    return name;    
                }
            };
            var prepare_image_list_for_preview = function()
            {
               var photo_list = [];
               var index = 0;
               var php_vals = uploaded_images;
               
               if($.isArray(php_vals) === true)
               {
                    $('.photo-desc').each(
                     function()
                     {
                         var tmp_files = new Array();
                         var filename = $scope.uploader.flow.files[index].name;
                         index = index +1;
                         for (var i = 0; i < php_vals.length; i++) { 
                             if(php_vals[i].post.flowFilename === filename)
                             {
                                 tmp_files.push(objProperty.get_filebaseName(php_vals[i].files.file.tmp_name));
                             }
                        }
                        photo_list.push([
                            String.format("../../temp/images/{0}/{1}/{2}",
                                $scope.person.user_id, $scope.temp_ref, tmp_files[0]),
                            $(this).val()
                        ]);

                    });
                }
                
                return photo_list;  
            };
            var set_preview = function()
            {  
                $scope.country_state.location["k"] = $scope.googleMarker.getGMarkers()[0].position.lat();
                $scope.country_state.location["B"] = $scope.googleMarker.getGMarkers()[0].position.lng();
                var service_type = new String($('#type').val()).indexOf('For Sale') >= 0? "SELL" : "RENT";
                
                if ($('#type').val().indexOf('Room To Let') > 0)
                {
                    service_type = "ROOM";
                }
                
                var category_name = $scope.mapping[$.trim($('#type').val())];
                
                var prop_info = get_property_type_info(category_name);
                var property_category = prop_info['property_category'];
                var property_type = prop_info['property_type'];
                
                var remark = CKEDITOR.instances.remark.getData();
                var objHome = StaticHomeObject.getInstance();
                remark = objHome.remove_special_character_from_data(remark);
                
                var listing = {
                    'service_type' : service_type,
                    'price': (service_type === "SELL")?parseFloat($('#asking_price input').val()).toFixed(2) : parseFloat($('#monthly_rental input').val()).toFixed(2),
                    'auction': ($('#auction').val() === "")?"--":$('#auction').val(),
                    'buildup': $('#built_up').val(),
                    'landarea': $('#land_area').val(),
                    'bedrooms': $('#bedroom').val(),
                    'bathrooms': $('#bathroom').val(),
                    'car_park':$('#car_park').val(),
                    'ref':'',
                    'furnished_type':$.trim($('#furnishing').val()),
                    'occupied':$.trim($('#occupied').val()),
                    'monthly_maintanance': parseFloat($('#monthly_maintanance').val()).toFixed(2),
                    'remark': remark,//$('textarea#remark').val(),
                    'property_category':property_category,
                    'property_type':property_type,
                    'tenure':$.trim($('#tenure').val()),
                    'land_title_type': $.trim($('#land_title_type').val()),
                    'active':1,
                    'user_id':'',
                    'property_photo': prepare_image_list_for_preview(),
                    'facilities': get_facilities(),
                    'unit_name' : get_unit_name(),
                    'state': $('#state').val(),
                    'area': $('#area').val(),
                    'postcode':$('#postcode').val(),
                    'street':$('#street').val(),
                    'country':$.trim($('#country').val()),
                    'location':$scope.country_state.location,
                    'reserve_type': $.trim($('#reserve_type').val()),
                    //'nearest_spot':get_nearest_spots(),
                    'nearest_spot' :$scope.NearbyPlaces,
                    'currency': $scope.currency_value["currency"],
                    'size_measurement_code': $.trim($('#size_measurement_code').val())
                };
                
                
                var senddata = "listing_information=" + JSON.stringify(listing);
                
		var url = (service_type === "SELL")?objProperty.getBaseUrl() + "index.php/properties_preview":
				objProperty.getBaseUrl() + "index.php/properties_preview_rent";
				
                //window.openDialog(url, "preview", "preview", JSON.stringify(listing));
                $.jStorage.set("preview_data", JSON.stringify(listing));
                $('#property_preview_content_iframe').attr('src', url);
                $("#popup_property_preview").modal('show');
                

            };
            
            // Push state to allow back button close the modal, if any.
            $("#popup_property_preview").on("shown.bs.modal", function()  { // any time a modal is shown
                var urlReplace = "#preview"; // make the hash the id of the modal shown
                history.pushState(null, null, urlReplace); // push state that hash into the url
            });

            // If a pushstate has previously happened and the back button is clicked, hide any modals.
            $(window).on('popstate', function() { 
                $("#popup_property_preview").modal('hide');
            });
            
            var preview_check = function()
            {
                // Confirm remark lenght should not over 800 width
                var remark = CKEDITOR.instances.remark.getData();
                if (remark.length > 1000)
                {
                    alert("Remark is too long, please reduce the lenght to 800");
                    return false;
                }
                
                // To check all unit related inputs must be entered
                var ids = [];
                $(".validation_input_group_small input, .validation_input_group_default input").each(
                        function()
                        {
                            if($(this).val() === "")
                            {
                              ids.push($(this).attr('id'));       
                            }
                        }
                );
                
                if(ids.length > 0) // Error when there is empty input 
                {
                    set_error(ids);
                    return false;
                }
                
                // No issue
                return true;
                
            };
            
            var submit_check = function()
            {
                // Confirm remark lenght should not over 800 width
                var remark = CKEDITOR.instances.remark.getData();
                if (remark.length > 1000)
                {
                    alert("Remark is too long, please reduce the lenght to 800");
                    return false;
                }
                
                // User must agree with the term and condition
                if($('#upload_term_condition:checkbox:checked').length === 0)
                {
                    $scope.err_msg = "Please understand and agree to the terms and conditions";
                    return false;       
                }
                
                // No issue
                return true;                
            };
            
            // </editor-fold>
            // <editor-fold desc="set_listing"  defaultstate="collapsed">
            var set_listing = function(listing, $scope)
            {
                var senddata = "listing_information=" + JSON.stringify(listing).replace('&nbsp;','%26nbsp;').replace('&', '%26');
                var url = objProperty.getBaseUrl() + "index.php/_utils/properties_upload/upload_listing";
                $http({
                 method: 'POST',
                 url: url,
                 data: senddata,
                 cache: false,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                    //console.log(response);
                    //nav to main page
                    var objBase = $.makeclass(get_base());
                    var parsed_result = response.data;
                    if(parsed_result["status"] === "success")
                    {
                         $.jStorage.set("listing_uploaded", parsed_result["info"]);
                         window.location.replace(objBase.getBaseUrl());
                    }
                    else
                    {
                       if( Object.prototype.toString.call( parsed_result["data"] ) === '[object Array]' ) {
                          set_error(parsed_result["data"]);
                       }
                       else
                       {
                           console.log(parsed_result);
                       }
                       $scope.disable_button = 0;
                       $scope.photo_upload_status = "Error found!!!"; 
                       
                    }
                    
               });
                
            };
            // </editor-fold>
            // <editor-fold desc="set_auction"  defaultstate="collapsed">
            var set_auction = function()
            {
                if($('#chk_auction').prop('checked'))
                {
                   $("#auction").removeAttr('disabled');   
                }
                else
                {
                    $("#auction").attr('disabled','disabled');
                    $("#auction").val('');
                }
            };
            // </editor-fold>
            
            // <editor-fold desc="get_photo_list_description"  defaultstate="collapsed">
            var get_photo_list_description = function()
            {
              var spots = [];
              $('.place_name').each(
                   function()
                   {
                       spots.push($(this).text());
                   }
                );
              return spots;
            };
            // </editor-fold>
            // <editor-fold desc="get_nearest_spots"  defaultstate="collapsed">
            var get_nearest_spots = function()
            {
              var spots = [];
              $('.place_name').each(
                   function()
                   {
                       spots.push($(this).text());
                   }
                );
              return spots;
            };
            //</editor-fold>
            // <editor-fold desc="get_transportation_list"  defaultstate="collapsed">
            var get_transportation_list = function()
            {
              var transportations = [];
              $('#transportations .place_name').each(
                   function()
                   {
                       transportations.push($(this).text());
                   }
                );
              return transportations;
            };
            // </editor-fold>
            
            // <editor-fold desc="get_facilities"  defaultstate="collapsed">
            var get_facilities = function()
            {
                var facilities = [];
                $('.property_facility input').each(
                   function()
                   {
                       if($(this).is(':checked'))
                       {
                            facilities.push($(this).val());   
                       }
                   }
                );
                return facilities;
            };
            // </editor-fold>
            // <editor-fold desc="load_initial_data"  defaultstate="collapsed">
            var get_initial_data = function()
            {
                var url = objProperty.getWsdlBaseUrl() + "index.php/base/obtain_user_information";
                $http({
                 method: 'GET',
                 url: url,
                 data: null,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                    $scope.person.email= response.data.username;
                    $scope.person.phone= response.data.phone;
                    $scope.person.name= response.data.displayname;
                    $scope.person.user_id= response.data.user_id;
               });
               
               url = objProperty.getBaseUrl() + "index.php/properties_base/get_property_reference";
               $http({
                 method: 'GET',
                 url: url,
                 data: null,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                    $scope.temp_ref = JSON.parse(response.data); 
               });
               
               var url = objProperty.getBaseUrl() + "index.php/properties_base/get_current_action";
                $http({
                 method: 'GET',
                 url: url,
                 data: null,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                    for(var key in $scope.mapping)
                    {
                        if($.trim($scope.mapping[key]) === response.data)
                        {
                             $('#type option').prop('selected', false)
                                  .filter(function()
                                  {
                                      if($.trim($(this).val()) === key)
                                      {
                                          return true;
                                      }
                                      else
                                      {
                                          return false;        
                                      }
                                  }).prop('selected', true);
                        }
                    }
                    $('#type').change();
                   
               });
               
               $scope.set_state_list_by_country();
                
            };
            // </editor-fold>
            $scope.$watch('country_state.states', function(val, prev){
                if(val !== prev){
                    // do whatever you need here
                    $("#state").empty();
                    if(val.length > 0)
                    { 
                        $(".div_state").css('display', '');
                        val.forEach(
                         function(value, index, arr)
                         {
                             var option = $('<option></option>').attr("value", value).text(value);
                             $("#state").append(option);
                         }
                        );
                    }
                    else
                    {
                       $(".div_state").css('display', 'none');
                    }
                    
                }
            });
            $scope.change_country = function()
            {
                    $scope.country_state["country"] = $("#country").val();
                    $scope.set_state_list_by_country();
            };
            $scope.set_state_list_by_country = function()
            {
                var url = objProperty.getBaseUrl() + "index.php/properties_base/get_states";
                var senddata = "country_name=" + JSON.stringify($.trim($scope.country_state["country"]));
                $http({
                 method: 'POST',
                 url: url,
                 data: senddata,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                   $scope.country_state["states"] = response.data;
               });
            };
            
            var display_by_category = function(category_mapping)
            {
               $('#type').change(
               function(){
                  var category_name = category_mapping[$.trim($(this).val())];
                  $('.sell, .rent, .room').css('display', 'none');
                  $("."+category_name).css('display', '');
               });
              
            };
            var set_scope_value = function($scope)
            {
                
                for(var i =0; i< $scope.property_category_1.length; i++)
                {
                    switch($scope.property_category_1[i].id)
                    {
                        case "property_type_sell":
                            $scope.property_category_sell_value = 'Condo/Residence';
                            $scope.property_type_sell_value = {value: $scope.property_category_1[i]['values'][$scope.property_category_sell_value][0]};
                            $scope.property_category_sell_value_sel = $scope.property_category_sell_value;
                            $scope.property_type_sell_value_sel = $scope.property_category_1[i]['values'][$scope.property_category_sell_value][0];
                            
                            //console.log($scope.property_category_sell_value);
                            //console.log($scope.property_type_sell_value );
                            break;
                        case "property_type_rent":
                            $scope.property_category_rent_value = 'Condo/Residence';
                            $scope.property_type_rent_value = {value: $scope.property_category_1[i]['values'][$scope.property_category_rent_value][0]};
                            $scope.property_category_rent_value_sel = $scope.property_category_rent_value;
                            $scope.property_type_rent_value_sel = $scope.property_category_1[i]['values'][$scope.property_category_rent_value][0];
                            break;
                        case "currency":
                            $scope.currency_value = {currency:$scope.property_category_1[i]['values'][0]};
                            break;
                        case "built_up":
                            $scope.build_up = {value:$scope.property_category_1[i]['values'][2]};
                            break;
                        case "monthly_rental":
                            $scope.monthly_rental = {value:$scope.property_category_1[i]['values'][0]};
                            break;
                        case "asking_price":
                            $scope.asking_price = {value:$scope.property_category_1[i]['values'][0]};
                            break;
                    }
                };
                
                $scope.mapping = {
                  'Property For Sale':'sell',
                  'Property For Lease':'rent',
                  'Room To Let':'room'
              };    
            };

            
            // <editor-fold desc="data initialization"  defaultstate="collapsed">
			waitForFinalEvent(function() {
					objProperty.set_footer_position();
			}, 100, objProperty.generateUUID());
            
            $scope.country_state = {
                country:'Malaysia',
                short:'my',
                location:{
                    "k":3.140307520038235, 
                    "B":101.6866455078125
                },
                states:['Penang', 'Johor']
            };
            $scope.photo_upload_status = "";
            $scope.disable_button = 0;
            
            // To capture the user selection
            $scope.change_category_type = function(category, type)
            {
                var category_name = $scope.mapping[$.trim($('#type').val())];
                switch(category_name)
                {
                    case "sell":
                        $scope.property_category_sell_value_sel = category;
                        $scope.property_type_sell_value_sel = type;
                        break;
                    case "rent":
                        $scope.property_category_rent_value_sel = category;
                        $scope.property_type_rent_value_sel = type;
                        break;
                }
                
            };
            
            set_scope_value($scope);
            // </editor-fold>
            display_by_category($scope.mapping);
            set_auction();
            get_initial_data();
            initialize_events();
            $('#type').change();
            // <editor-fold desc="controls event update"  defaultstate="collapsed">
             $('.validation_input_group_small > input, .validation_input_group_default > input').bind('keypress change paste focusin focusout', function()
              {
                  //Dirty way of implementation
                  setTimeout(function(){ 
                    $('.validation_input_group_small > input, .validation_input_group_default > input').each(
                        function()
                        {
                          var id = '.'+$(this).context.id+'-feedback';
                          if($(this).val() === "")
                          {
                            $(id).removeClass('glyphicon-ok');
                            $(id).addClass('glyphicon-remove');
                            $(id).css('color', 'red');
                          }
                          else if($(this).context.id === "postcode" && !$.isNumeric($(this).val()))
                          {
                            $(id).removeClass('glyphicon-ok');
                            $(id).addClass('glyphicon-remove');
                            $(id).css('color', 'red');
                          }
                          else
                          {
                            $(id).removeClass('glyphicon-remove');
                            $(id).addClass('glyphicon-ok');
                            $(id).css('color', '#3c763d');           
                          }
                        } 
                   
                  );}, 100);
              }
            );
            $('#chk_auction').on('click', function(){set_auction();});
            // </editor-fold>
            
            flowFactory.flow.on('catchAll', function (event) {
                if(event === "fileSuccess")
                {
                    console.log(arguments);
                    var php_val = jQuery.parseJSON(arguments[2]);
                    if (uploaded_images !== "NULL")
                    {   
                        uploaded_images.push(php_val);
                        
                    }
                    else
                    {
                        uploaded_images = new Array();
                        uploaded_images.push(php_val);
                    }
                }
            });
            flowFactory.flow.on('uploadStart', function () {
                    $scope.disable_button = 1;
                    $scope.photo_upload_status = "Processing...";					
                });
            flowFactory.flow.on('fileAdded', function (file, event) {
                if(file.size > 5000000)
                {
                    file.error = true;
                    file.error_msg = 
                         "This file exceeds the maximum upload size for this server.";
                }
                else if (!{png:1,gif:1,jpg:1,jpeg:1}[file.getExtension()])
                {
                    file.error = true;
                    file.error_msg = 
                            "This file type is not supported.";
                }
                
                if (file.error === true)
                {
                    console.log(file.error_msg);
                    $scope.uploadImageError = file.error_msg;
                    file.done = true;
                    file.flowObj.preventEvent(event);
                    return false;
                }
                 else
                {
                    $scope.uploadImageError = "";
                }
                
            });
  
            flowFactory.flow.on('complete', function () {
                $scope.disable_button = 0;
                $scope.photo_upload_status = "";
                $(".progress").hide();
            });
            
            CKEDITOR.replace( 'remark_editor',{removeButtons:'Link,Unlink,Anchor'});
            
            $scope.$apply();
            
            $scope.get_ngPlace_info_by_name = function(info, key)
            {
                var start_key = '<span class="' + key +'">';
                var end_key = '</span>';
                var display_str = "";
                
                if(typeof info !== 'undefined')
                {
                    var start_index = info.indexOf(start_key);

                    
                    if(start_index >= 0 )
                    {
                        start_index = info.indexOf(start_key) + start_key.length;
                        var end_index = info.indexOf(end_key, start_index) + 1;
                        
                        if(end_index > 0)
                        {
                            display_str =  info.substring(start_index, end_index - 1);
                        }
                        else
                        {
                            display_str =  info.substring(start_index);
                        }
                    }
                }
                
                // Ugly hack, to ensure it manage update even after manually edit
                //console.log("hit: "+key+" - "+info.substring(start_index, end_index - 1));
                switch(key)
                {
                    case "postal-code":
                        $('#postcode').val(display_str);
                        $('#postcode').change();
                        break;
                    case "street-address":
                        $('#street').val(display_str);
                        $('#street').change();
                        break;
                    case "locality":
                        $('#area').val(display_str);
                        $('#area').change();
                        break;
                }
                        
                return display_str;
                        
            };
     });
});

$(function () {
     $('.date').datetimepicker();
     
 });
 
