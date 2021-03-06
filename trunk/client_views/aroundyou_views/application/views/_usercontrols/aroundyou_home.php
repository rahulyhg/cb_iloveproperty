<div ng-controller="aroundyou_home__ng__CONTROLLER" >
    <!-- This handle google map display -->
    <div class="aroundyou_google_map_div" ng-style="style_aroundyou_google_map()" resize>
        <ui-gmap-google-map center='map.center' zoom='map.zoom'>
            <ui-gmap-marker ng-model="aroundyou_google_map_center_marker"
                idKey='aroundyou_google_map_center_marker.idkey'
                coords='aroundyou_google_map_center_marker.coords'
                options="{clickable: false, icon:aroundyou_google_map_center_marker.icon}"
            ></ui-gmap-marker>
            
            <ui-gmap-markers models="aroundyou_search_result_markers" 
                             coords="'self'" 
                             icon="'icon'"
            ></ui-gmap-markers>
            
            <ui-gmap-rectangle bounds="aroundyou_google_search_rectangle" 
                               fill="{color: '#000000', opacity: 0.1}"
                               stroke="{color: '#000000', weight: 1, opacity: 0.5}"
                               clickable="false"
            ></ui-gmap-rectangle>
        </ui-gmap-google-map>
    </div>
    
    <!-- This handle side tab button -->
    <div class="aroundyou_toogle_sidebar_btn_div">
        <button type="button" class="btn btn-default btn-xs" id="aroundyou_sidebar_btn" ng-click="aroundyou_sidebar_toggle()">
        </button>
    </div>
    
    <!-- This handle side tab display-->
    <div class="aroundyou_sidetab_div ng-hide" ng-style="style_aroundyou_sidetab()" resize>
        
        <!-- This handle side tab top button -->
        <div class="btn-group aroundyou_sidetab_top_btn_div">
            <button type="button"  class="btn btn-primary aroundyou_sidetab_top_btn" id="aroundyou_sidetab_top_collapse_btn" ng-click="aroundyou_sidebar_toggle()"></button>
            <button type="button"  class="btn btn-primary aroundyou_sidetab_top_btn highlight" id="aroundyou_sidetab_top_search_btn" ng-click="aroundyou_sidebar_top_btn('search')"></button>
            <button type="button"  class="btn btn-primary aroundyou_sidetab_top_btn" id="aroundyou_sidetab_top_result_btn" ng-click="aroundyou_sidebar_top_btn('result')"></button>
            <button type="button"  class="btn btn-primary aroundyou_sidetab_top_btn" id="aroundyou_sidetab_top_event_btn" ng-click="aroundyou_sidebar_top_btn('event')"></button>   
        </div>
 
        
        <div class="aroundyou_sidetab_scrollable_div" ng-style="style_aroundyou_sidetab_scrollable()" resize>
            <!-- This handle side tab content -- search tab -->
            <div class="aroundyou_sidetab_scrollable aroundyou_sidetab_content_search_div" ng-style="style_aroundyou_sidetab_scrollable()" resize>
                <div class="aroundyou_sidetab_search_wrapper_div">

                        <!-- search tab -- Distance-->
                        <p class="text-left col-md-8 aroundyou_sidetab_text">Cover Distance M</p>
                        <p class="text-right col-md-4 aroundyou_sidetab_text">{{aroundyou_sidetab_distance_value}} M</P>

                        <input id="aroundyou_sidetab_slider" class="col-md-12" type="range" name="aroundyou_sidetab_distance" ng-mouseup="update_map_center_location('@Todo - create api to handle everything')" ng-model="aroundyou_sidetab_distance_value" min="{{aroundyou_sidetab_distance_min}}"  max="{{aroundyou_sidetab_distance_max}}"> 
                        
                        <!-- search tab -- state_area-->
                        <p class="text-left col-md-12 aroundyou_sidetab_text aroundyou_sidetab_space">Fast Travel State and Area</p>
                        
                        <select class="aroundyou_sidetab_search_dropbox aroundyou_sidetab_text" ng-model="aroundyou_sidetab_search_dropbox_map_value" >
                            <optgroup ng-repeat='state_area in aroundyou_sidetab_state_area' label="{{state_area.state}}">
                                <option ng-repeat='area_info in state_area.area_list' ng-click="aroundyou_sidetab_dropbox_map(aroundyou_sidetab_search_dropbox_map_value)" value='{{area_info.location}}'>{{area_info.name}}</option>
                            </optgroup>
                        </select>
                        
                        <!-- search tab -- Categories-->
                        <p class="text-left col-md-12 aroundyou_sidetab_text aroundyou_sidetab_space">category</p>
                        
                        <select class="aroundyou_sidetab_search_dropbox aroundyou_sidetab_text">
                            <optgroup ng-repeat='group_categories in aroundyou_sidetab_group_categories' label="{{group_categories.group}}">
                                <option ng-repeat='categories in group_categories.categories_list' value='{{categories}}'>{{categories}}</option>
                            </optgroup>
                        </select>
                        
                        <!-- search tab -- Search Button-->
                        <!-- Disable now as doesn't really seem useful now
                        <button type="button"  class="btn btn-primary" id="aroundyou_sidetab_search_btn" ng-click="aroundyou_sidetab_search_event_btn()"></button>   
                        -->
                </div>
            </div>
            
            <!-- This handle side tab content -- result tab -->
            <div class="ng-hide aroundyou_sidetab_scrollable aroundyou_sidetab_content_result_div" ng-style="style_aroundyou_sidetab_scrollable()" resize>
                <p>Scroll Me 2 !</p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
                <p>Hello World 2 </p>
            </div>
            
            <!-- This handle side tab content -- event tab -->
            <div class="ng-hide aroundyou_sidetab_scrollable aroundyou_sidetab_content_event_div" ng-style="style_aroundyou_sidetab_scrollable()" resize>
                <p>Scroll Me 3 !</p>
                <p>Hello World 3 </p>
                <p>Hello World 3 </p>
                <p>Hello World 3 </p>
                <p>Hello World 3 </p>
                <p>Hello World 3 </p>
                <p>Hello World 3 </p>
                <p>Hello World 3 </p>
                <p>Hello World 3 </p>
                <p>Hello World 3 </p>
            </div>
        </div>
    </div>
    
</div>
