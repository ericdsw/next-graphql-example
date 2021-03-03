import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const DynamicPreviewMap = dynamic(() => import('../components/PreviewMap'), {
  ssr: false
});

const MapPage = (): JSX.Element => {
  return (
    <>
      <Head>Map Page</Head>
      <div>
        <DynamicPreviewMap
          startingLatitude={8.9999293}
          startingLongitude={-79.5134737}
          startingZoom={13}
          drawStatic
          markers={[
            { 
              title: 'This is the title',
              latitude: 8.9999293,
              longitude: -79.5134737,
            }
          ]}
        />
      </div>
    </>
  );
}

export default MapPage;