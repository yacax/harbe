import React from 'react';
import LayoutMain from '../../layouts/LayoutMain';
import HomePageFilesForm from './HomePageFilesForm';

export default function HomePage() {
  return (
    <LayoutMain>
      <h1>Home Page</h1>
      <HomePageFilesForm />
    </LayoutMain>
  );
}
