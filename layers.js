var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sismos_1 = new ol.format.GeoJSON();
var features_sismos_1 = format_sismos_1.readFeatures(json_sismos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sismos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sismos_1.addFeatures(features_sismos_1);
var lyr_sismos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sismos_1, 
                style: style_sismos_1,
                popuplayertitle: 'sismos',
                interactive: true,
    title: 'sismos<br />\
    <img src="styles/legend/sismos_1_0.png" /> 5 - 5,64<br />\
    <img src="styles/legend/sismos_1_1.png" /> 5,64 - 6,28<br />\
    <img src="styles/legend/sismos_1_2.png" /> 6,28 - 6,92<br />\
    <img src="styles/legend/sismos_1_3.png" /> 6,92 - 7,56<br />\
    <img src="styles/legend/sismos_1_4.png" /> 7,56 - 8,2<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_sismos_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sismos_1];
lyr_sismos_1.set('fieldAliases', {'Fecha': 'Fecha', 'Hora': 'Hora', 'Magnitud': 'Magnitud', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Profundida': 'Profundida', 'Referencia': 'Referencia', 'Fecha UTC': 'Fecha UTC', 'Hora UTC': 'Hora UTC', 'Estatus': 'Estatus', });
lyr_sismos_1.set('fieldImages', {'Fecha': 'TextEdit', 'Hora': 'TextEdit', 'Magnitud': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Profundida': 'TextEdit', 'Referencia': 'TextEdit', 'Fecha UTC': 'TextEdit', 'Hora UTC': 'TextEdit', 'Estatus': 'TextEdit', });
lyr_sismos_1.set('fieldLabels', {'Fecha': 'no label', 'Hora': 'no label', 'Magnitud': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Profundida': 'no label', 'Referencia': 'no label', 'Fecha UTC': 'no label', 'Hora UTC': 'no label', 'Estatus': 'no label', });
lyr_sismos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});