import { Component, ViewChild  } from '@angular/core';
import * as $ from 'jquery';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { } from '@types/googlemaps';
@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export default class MapComponent {
  markers: [any];
  styles: any;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  ngOnInit(): void {
    this.markers = [{}];
      this.styles = [
        {
            "elementType": "geometry",
            "stylers": [{
                "color": "#f7f7f7",
            }],
        },
        {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off",
            }],
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9a9a9a",
            }],
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f5f5",
            }],
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd",
            }],
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee",
            }],
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575",
            }],
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5",
            }],
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e",
            }],
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff",
            }],
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575",
            }],
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dadada",
            }],
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9a9a9a",
            }],
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e",
            }],
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5",
            }],
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee",
            }],
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ededed",
            }],
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e",
            }],
        },
    ];
    var mapProp = {
      center: new google.maps.LatLng(20.99891330597205, 105.81825256347658),
      zoom: 15,
      style: this.styles,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    let linhDam = new google.maps.LatLng(20.954800199999998, 105.82895409999999);
    let cauGiay = new google.maps.LatLng(21.023090704899356, 105.78870105717218);

    const marker1 = new google.maps.Marker({
        position: linhDam,
        map: this.map,
        title: 'Linh Dam'
    });
    const marker2 = new google.maps.Marker({
        position: cauGiay,
        map: this.map,
        title: 'Cau giay',
    });
    this.markers.push({
        name: 'linhDam',
        mrk: marker1,
    }, {
        name: 'cauGiay',
        mrk: marker2,
    });
    
    marker1.addListener('click', (event)=> {
      this.map.setOptions({
        center: new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()),
        zoom: 18
      });
      var infowindow = new google.maps.InfoWindow({
        content: "CS1: so 78/2 - To 4 - Bang B - Hoang Liet - Hoang Mai - HN"
      });
      infowindow.open(this.map, marker1);
    });
    marker2.addListener('click', (event)=> {
      this.map.setOptions({
        center: new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()),
        zoom: 18
      });
      var infowindow = new google.maps.InfoWindow({
        content: "CS3: Toa nha CT3 - Yen Hoa - Cau Giay - Ha Noi"
      });
      infowindow.open(this.map, marker2);
    });
    this.setBounds();
  }

  setBounds() {
    const bounds = new google.maps.LatLngBounds();
  
    for (let i = 1; i < this.markers.length; i++) {
        bounds.extend(this.markers[i].mrk.getPosition());
    }
    this.map.fitBounds(bounds);
  }

  resetMap() {
    var mapProp = {
      center: new google.maps.LatLng(20.99891330597205, 105.81825256347658),
      zoom: 15,
      style: this.styles,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map.setOptions(mapProp);
    this.setBounds();
  }
}


