import React from 'react';
import { shallow } from 'enzyme';

// Mocks
import { MockComponent } from '@mocks/ui';
import { mockMapMarker } from '@mocks/data';

// System under test
import PreviewMap from '../PreviewMap';

jest.mock('../components', () => ({
  PreviewMapMarker: jest.fn(MockComponent)
}));
jest.mock('react-map-gl', () => jest.fn(MockComponent));

it('correctly renders without parameters', () => {
  const container = shallow(<PreviewMap />);
  expect(container.props().width).toBe(600);
  expect(container.props().height).toBe(300);
  expect(container.props().dragPan).toBe(true);
  expect(container.props().dragRotate).toBe(true);
  expect(container.props().scrollZoom).toBe(true);
  expect(container.props().doubleClickZoom).toBe(true);
  expect(container.props().latitude).toBe(0);
  expect(container.props().longitude).toBe(0);
  expect(container.props().zoom).toBe(0);
});

it('correctly renders with custom width and height', () => {
  const container = shallow(<PreviewMap width={1} height={2}/>);
  expect(container.props().width).toBe(1);
  expect(container.props().height).toBe(2);
});

it('correctly renders with custom starting position and zoom', () => {
  const container = shallow(
    <PreviewMap
      startingLatitude={100}
      startingLongitude={101}
      startingZoom={10}
    />
  );
  expect(container.props().latitude).toBe(100);
  expect(container.props().longitude).toBe(101);
  expect(container.props().zoom).toBe(10);
});

it('correctly draws a map that cannot be modified', () => {
  const container = shallow(<PreviewMap drawStatic />);
  expect(container.props().dragPan).toBe(false);
  expect(container.props().dragRotate).toBe(false);
  expect(container.props().scrollZoom).toBe(false);
  expect(container.props().doubleClickZoom).toBe(false);
});

it('correctly renders with all required markers', () => {
  const mockMarker1 = { ...mockMapMarker, title: 'marker-1-title' };
  const mockMarker2 = { ...mockMapMarker, title: 'marker-2-title' };
  const container = shallow(<PreviewMap markers={[mockMarker1, mockMarker2]} />);
  expect(container.children().length).toBe(2);
  expect(container.childAt(0).props().data).toBe(mockMarker1);
  expect(container.childAt(1).props().data).toBe(mockMarker2);
});

it('correctly updates coordinates on map viewport change', () => {
  const newViewport = {
    latitude: 123,
    longitude: 1232,
    zoom: 10
  };
  const container = shallow(<PreviewMap />);
  container.simulate('viewportChange', newViewport);
  expect(container.props()).toMatchObject(newViewport);
});