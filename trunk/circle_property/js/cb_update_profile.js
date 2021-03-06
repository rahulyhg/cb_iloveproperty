'use strict';
$(document).ready(
   function()
   {
       $('#my_profile').hide();
       $('#change_pwd_req').click(function(event) {
                event.preventDefault();
                $('#change_password').modal({
                    'keyboard': false,
                    'backdrop':'static',
                    'show': true
                });
                $('#popup_login').modal('hide');
       });
       $('.sidebar-nav > li > a').click(
          function()
          {
              $('.sidebar-nav > li > a').css('color','#999999');
              $(this).css('color','black');
          }
       );
       if(sessionStorage.profileAction)
       {
            $("body").animate({
                    scrollTop: $("#"+sessionStorage.profileAction).offset().top
            }, 2000);
            sessionStorage.removeItem("profileAction");
       }
   }
);


       
var profileApp = angular.module('ProfileApps',[]);

profileApp.controller('ProfileController', function($scope, $http) {
   
   var checked_boxes = [];
    $scope.delete_btn = false;
    $scope.services = [
        {
          name: "General",
          id: "General",
          username: '',
          email: '',
          country: '',
          phone: '',
          password: ''
        },
        {
         name:'Property Profile',
         id:'Property_Profile',
		 link_id: 'Properties',
         information:{
 /*           home:
                    {
                        active:'false',
                        url:'ng-templates/user_profiles/property_agent_info.php',
                        agent_name:'Katy Tang',
                        // images/profile-agent-pic.png (default image)
                        agent_photo: "",
                        company_name:'Sim Housing Sdn. Bhd.',
                        company_logo:'', 
                        description:"Hi, I am Katy Tang, I specialize in Malaysian properties.\n\
If you’re looking to buy, sell or rent properties in this area or are looking for a responsive and responsible real estate negotiator to help you,\n\n\
 you've come to the right place as I am the person you are looking for.\n\n\
Please browse my website for more of my listings.\nThis user-friendly website has been specially designed to help you property hunt."
                    }
            ,
            inbox:{
                url:'ng-templates/user_profiles/property_inbox.php', 
                email:'',
                active:'false'
            },*/
            listings:{
                url:'ng-templates/user_profiles/property_list.php',
                listing:'',
                active:'true'
            }
            /*
            ,
            buy_credit:{
                url:'', 
                active:'false'
            },
            history:{
                url:'', 
                active:'false'
            },
            request:{
                url:'', 
                active:'false'
            } 
            */           
          }
        }
    ];
    angular.element(document).ready(
        function()
        {  
            // Decalre base object to access generic API
            var ObjBase = $.makeclass(get_base());
            $scope.service_map_with_url = {};
            $scope.hide_view = false;
            
            $scope.listing_used = -1;
            $scope.listing_limit = -1;
            $scope.activate = function(ref_tag)
            {
                var activation_url = ObjBase.getWsdlBaseUrl() + "index.php/cb_user_profile_update/set_activation";
                var isChecked = $('#chk_'+ref_tag+':checked').length > 0;
                var senddata = "ref_tag=" + ref_tag +
                "&activation="+isChecked;
                console.log(senddata);
                $http(
                        {
                            method:'POST',
                            url:activation_url,
                            data:senddata,
                            cache: true,
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        }
                    ).then(
                        function(response)
                        {
                            if(response.data.result === true)
                            {
                                //disable view listing
                                if(!isChecked)
                                {
                                    $(".view_"+ref_tag).hide();
                                    $scope.listing_used--;
                                }
                                else
                                {
                                    $(".view_"+ref_tag).show();
                                    $scope.listing_used++;
                                }        
                            }
                            else
                            {
                                
                                alert("You are not allow to activate the listing");
                            }
                        }
                    );
            };
            $scope.key_available_for_service_map_with_url = function($key)
            {
                return $key in $scope.service_map_with_url;
            };
            var get_services = function()
            {
                var url = ObjBase.getWsdlBaseUrl() + "index.php/cb_user_profile_update/get_available_services";
                $http({
                 method: 'GET',
                 url: url,
                 data: null,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                        for (var i = 0; i < response.data.length; i++)
                        {
                            var service_name = response.data[i][0];
                            var url = response.data[i][2];
                            $scope.service_map_with_url[service_name] = url;
                        }
                    }
               );
            };
            // <editor-fold desc="load_initial_data"  defaultstate="collapsed">
            var get_initial_data = function()
            {
                var url = ObjBase.getWsdlBaseUrl() + "index.php/base/obtain_user_information";
                $http({
                 method: 'GET',
                 url: url,
                 data: null,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                    $scope.services[0].email= response.data.username;
                    $scope.services[0].phone= response.data.phone;
                    $scope.services[0].username = response.data.displayname;
                    $scope.services[0].country = response.data.country;
                    $scope.services[0].password = '******';
                    //$scope.person.name= response.data.displayname;
               });
                
                
            };
            // </editor-fold>
            
            // <editor-fold desc="load_user_listing_data"  defaultstate="collapsed">
            var get_user_listing_data = function()
            {
                var url = ObjBase.getWsdlBaseUrl() + "index.php/base/obtain_user_listing_information";
                $scope.ref_tag_details = "http://localhost/cb_iloveproperty/trunk/client_views/properties_views/index.php/properties_details?reference=";
                $scope.edit_details = "http://localhost/cb_iloveproperty/trunk/client_views/properties_views/index.php/properties_edit?reference=";
                $http({
                 method: 'GET',
                 url: url,
                 data: null,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                   
                    $scope.services[1].information.listings.listing= response.data;
               });
                
                
            };
            // </editor-fold>
            
             // </editor-fold>
            
             // <editor-fold desc="load_user_inbox_data"  defaultstate="collapsed">
            var get_user_inbox_data = function()
            {
                //not working yet. :(
                var url = ObjBase.getWsdlBaseUrl() + "index.php/base/obtain_user_inbox_information";
                $http({
                 method: 'GET',
                 url: url,
                 data: null,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                   
                   var test_data = [
                                    {ref_tag: "mail-tsl-001", title: "mail1", sender:"abc", date:"12-04-2015"},
                                    {ref_tag: "mail-tsl-002", title: "mail2", sender:"def", date:"13-05-2015"},
                                    {ref_tag: "mail-tsl-003", title: "mail3", sender:"ghi", date:"14-06-2015"}   
                   ];
                    $scope.services[1].information.inbox.email= test_data;
               });
                
                
            };
            // </editor-fold>
            
            // <editor-fold desc="sidebar toggle event"  defaultstate="collapsed">
            var sidebar_toggle = function()
            {
                $('#menu-toggled').click(
                    function()
                    {
                        $('#sidebar-wrapper').toggleClass('toggled');
                        $('.sidebar_toggle').toggleClass('toggled');
                        $('#page-content-wrapper').toggleClass('toggled');
                    }
                );
            };
            // </editor-fold>
            
            // <editor-fold desc="load_total_remain_listings"  defaultstate="collapsed">
            var url = ObjBase.getWsdlBaseUrl() + "index.php/base/get_user_number_of_available_listing";
                $http({
                 method: 'GET',
                 url: url,
                 data: null,
                 cache: true,
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
               }).then(function(response) {
                   var listing_info = response.data;
                   $scope.listing_used = parseInt(listing_info.listing_used);
                   $scope.listing_limit = parseInt(listing_info.listing_limit);
               });
            // </editor-fold>
            
            $scope.view_listing = function(url)
            {
                $('#property_preview_content_iframe').attr('src', url);
                $("#popup_property_preview").modal("show");
            };
            
            $scope.edit_listing = function(url)
            {
                $('#property_preview_content_iframe').attr('src', url);
                $("#popup_property_preview").modal("show");
            };
            
            // ------ Variable declare and initialize section --- Start ----------------
            // Initialize information that require base generic API
            $scope.base_url = ObjBase.getBaseUrl();
            get_services();
            get_initial_data();
            get_user_listing_data();
            //get_user_inbox_data();
            sidebar_toggle();
            //$scope.default_agent_image = $scope.base_url + 'images/profile-agent-pic.png';            
        }
    );
       
    function reset_ui(category)
    {
            var curr_check_box = document.getElementsByName("del_option");
            var i = 0;
            for(i =0; i<curr_check_box.length; i++)
            {
                if(curr_check_box[i].checked === true)
                {
                    if( (category === "listing" && curr_check_box[i].value.substring(0,3) === "RSP") || 
                        (category === "mail" && curr_check_box[i].value.substring(0,4) === "mail") )
                    {
                        var checkedstuff = $(curr_check_box[i]).closest('#record_list').find('[name="del_option"]:checked').parent().parent();
                        checkedstuff.remove();
                    }
                }
            }
			$scope.delete_btn = false;
    }
    
    function cal_checked_box(category)
    {
        checked_boxes.length = 0;
        
        var curr_check_box = document.getElementsByName("del_option");
        var i = 0;
        var count = 0;
        for(i =0; i<curr_check_box.length; i++)
        {
            if(curr_check_box[i].checked === true)
            {
                if( (category === "listing" && curr_check_box[i].value.substring(0,3) === "RSP") || 
                    (category === "mail" && curr_check_box[i].value.substring(0,4) === "mail") )
                {
                   checked_boxes[count] = curr_check_box[i].value;
                   count++;
                }
            }
        }
    } 
    
    function show_listing_pane()
    {
        //hardcoded... :(
        $scope.services[1].information.home.active= 'false';
        $scope.services[1].information.inbox.active= 'false';
        $scope.services[1].information.listings.active= 'true';
    }
   
    $scope.rm_record = function(category)
    {
	$scope.delete_btn = true;
        cal_checked_box(category);
        
        if(checked_boxes.length !== 0)
        {
            var ObjBase = $.makeclass(get_base());
            var url = ObjBase.getWsdlBaseUrl();
            var senddata = "reftag="+checked_boxes;
            if(category === "listing")
            {
                url = ObjBase.getWsdlBaseUrl() + "index.php/base/remove_user_listing_information";
            }
            
            $http({
                method: 'POST',
                url: url,
                data: senddata,
                cache: true,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              }).then(function(response) {

                    //display the delete listing message
					var msg = response.data.status_information; 
					if(msg.indexOf("Info:") > -1)
					{
						$('#general_info_content').html(msg.replace("Info: ", ""));$("#popup_general_info").modal("show");    							
					}
					reset_ui(category);
				   
              });
        }
        else
        {
			$("#general_info_content").html("no checkbox has been selected!");
			$("#popup_general_info").modal('show');
            $scope.delete_btn = false;
        }
       };
    
    $scope.show_select_listing = function(url)
    {
        
    };
    $scope.enable_disable_listing = function(activate)
    {
        var disable = true;
        if(activate === $scope.listing_limit)
        {
            disable = true;
        }
        else
        {
            disable =false;
        }
        $('.listing_activation').each(function(index, element)
            {
                if(!element.checked)
                {
                    element.disabled = disable;
                }
            }
        );
    };
     $scope.$watch("listing_used", function(newVal, oldVal){
                if (newVal === oldVal)
                        return;
                $scope.enable_disable_listing(newVal);
        });
    
    $(".property-activation").bootstrapSwitch();
    
});



