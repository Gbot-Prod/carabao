"use client";

import styles from './page.module.css';
import Header from '../../components/header/header';

import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

function Track() {

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2JvdHByb2QiLCJhIjoiY21sOHJudmhjMGFudTNmb2szYWQ3ODNyayJ9.hwR4ut6YT82X4JHtzIVnAQ';
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Track Page</h1>
      <div className={styles.mapContainer} ref={mapContainerRef}></div>
    </div>
  );
}

export default Track;