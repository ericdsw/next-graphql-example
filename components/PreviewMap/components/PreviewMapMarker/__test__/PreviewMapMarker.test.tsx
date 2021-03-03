import React from 'react';
import { shallow } from 'enzyme';

import MapMarker from '../../../MapMarker';

import PreviewMapMarker from '../PreviewMapMarker';

const markerSearch = { 'data-testid': 'marker' };
const popupSearch = { 'data-testid': 'popup' };

const mockMarkerData: MapMarker = {
    latitude: 123,
    longitude: 345,
    title: 'foo-title'
  }

type MakeViewProps = {
  data: MapMarker
}
function makeView({ data }: MakeViewProps): JSX.Element {
  return (<PreviewMapMarker data={data} />);
}

it('correctly renders with provided marker data', () => {
  const container = shallow(makeView({
    data: mockMarkerData
  }));
  
  /** Marker position verification */
  expect(container.find(markerSearch).props().latitude).toBe(mockMarkerData.latitude);
  expect(container.find(markerSearch).props().longitude).toBe(mockMarkerData.longitude);

  /** Popup verification */
  expect(container.find(popupSearch).props().latitude).toBe(mockMarkerData.latitude);
  expect(container.find(popupSearch).props().longitude).toBe(mockMarkerData.longitude);
  expect(container.text()).toEqual(mockMarkerData.title);
});
