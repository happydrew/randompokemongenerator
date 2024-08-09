import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { GeneratorToolFeatureCards, GeneratorTool } from './generator-tool';

const HomePage = () => {
  return (
    <>
      <GeneratorTool />
      <GeneratorToolFeatureCards />
    </>
  )
}

export default HomePage;