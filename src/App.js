//module
import {useCallback, useEffect, useState} from "react";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import styled from "styled-components";

//components
import InfoBox from "./components/Info";

function App() {
  //사용자 위치
  const [location, setLocation] = useState({ lat: 37.5665, lng: 126.9780 });
  //사용자 주소
  const [address, setAddress] = useState(null);
  //인포 윈도우 여부
  const [isOpen, setIsOpen] = useState(false);
  const defaultUserInfo = {
    name: "",
    age: null,
    sex: "",
    introduce: "",
    authentication: false,
  }

  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const {kakao} = window;

  const getUserLocation = useCallback(() => {
    try {
      navigator.geolocation.getCurrentPosition(successGetUserLocation, faillGetUserLocation, {enableHighAccuracy: true});
    }
    catch (err) {
      console.log(err)
    }
  }, [])
  const successGetUserLocation = (res) => {
    const lat = res.coords.latitude;
    const lng = res.coords.longitude;
    setLocation({lat,lng})
  }
  const faillGetUserLocation = (error) => {
    console.log(error);
  }

  const getAddress = useCallback(() => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(location.lat, location.lng);
    const callback = (result, status) => {
      console.log(result, status)
			if (status === kakao.maps.services.Status.OK) {
				setAddress(result[0].address);
        console.log(result[0].address)
			}
		};
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    console.log(coord.getLat(), coord.getLng())
    
  },[kakao.maps.LatLng, kakao.maps.services.Geocoder, kakao.maps.services.Status.OK, location.lat, location.lng]);


  useEffect(() => {
    getUserLocation();
    getAddress();
    console.log("mount")
  }, [getUserLocation, getAddress,]);

  
  return (
    <>
      <StyledContainer>
        {userInfo.authentication ? (
          <>
            <StyledMapContainer>
              <Map
                center={{lat:location.lat ,lng:location.lng}}   // 지도의 중심 좌표
                style={{ width: '1000px', height: '700px'}} // 지도 크기
                level={3}
              >
                <MapMarker
                  position={{lat: location.lat, lng: location.lng}}
                  // clickable={true}
                  onClick={() => setIsOpen(!isOpen)}>
                    {isOpen &&
                      <StyledMarkerInfo>
                        <div style={{width:"500px",height:"100px",position:"absolute",top :"-150%"}}>asdf</div>
                      </StyledMarkerInfo>
                    }
                </MapMarker>
              </Map>
            </StyledMapContainer>
            <p>{location.lat} {location.lng}</p>
            <p>{address &&  address.address_name}</p>
          </>
        ) : (
          <InfoBox userInfo={userInfo} setUserInfo={setUserInfo} />
        )}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  position : relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledMapContainer = styled.div`
  position: relative;
`;
const StyledMarkerInfo = styled.div`
  position: absolute;
  // background: black;
  width: 50px;
  height: 50px;
  // top: 5px;
`;

export default App;
