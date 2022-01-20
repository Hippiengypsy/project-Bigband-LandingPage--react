/*global kakao */
import React, { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.398126757693106, 126.96312627605086),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      37.398126757693106, 126.96312627605086
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);

    let iwContent = '<div style="padding:5px;">빅밴드<br>엔터테인먼트></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.398126757693106, 126.96312627605086); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    let infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker); 
  };

  return <div id="map" style={{ width: "940px", height: "370px" }}></div>;
}