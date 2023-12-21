var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'landuse': 'landuse', 'man_made': 'man_made', 'toilet:facilities': 'toilet:facilities', 'shelter_type': 'shelter_type', 'kitchen:facilities': 'kitchen:facilities', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'school:type_idn': 'school:type_idn', 'office': 'office', 'admin_level': 'admin_level', 'ground_floor:height': 'ground_floor:height', 'shop': 'shop', 'unisex': 'unisex', 'male': 'male', 'female': 'female', 'access': 'access', 'operator:type': 'operator:type', 'building:part': 'building:part', 'religion': 'religion', 'evacuation_center': 'evacuation_center', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'amenity': 'amenity', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'name': 'name', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'landuse': '', 'man_made': '', 'toilet:facilities': '', 'shelter_type': '', 'kitchen:facilities': '', 'addr:street': '', 'addr:postcode': '', 'school:type_idn': '', 'office': '', 'admin_level': '', 'ground_floor:height': '', 'shop': '', 'unisex': '', 'male': '', 'female': '', 'access': '', 'operator:type': '', 'building:part': '', 'religion': '', 'evacuation_center': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'amenity': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'name': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'landuse': 'no label', 'man_made': 'no label', 'toilet:facilities': 'no label', 'shelter_type': 'no label', 'kitchen:facilities': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'school:type_idn': 'no label', 'office': 'no label', 'admin_level': 'no label', 'ground_floor:height': 'no label', 'shop': 'no label', 'unisex': 'no label', 'male': 'no label', 'female': 'no label', 'access': 'no label', 'operator:type': 'no label', 'building:part': 'no label', 'religion': 'no label', 'evacuation_center': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'amenity': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'name': 'no label', });
lyr_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});