export interface mapRule {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class customMap {
  private googleMap: google.maps.Map;
  constructor(renderId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(renderId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  mapLocation(info: mapRule): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: info.location.lat,
        lng: info.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: info.markerContent(),
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
