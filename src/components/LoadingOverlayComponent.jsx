// LoadingOverlayComponent.jsx
import React from 'react';
import { LoadingOverlay } from '@mantine/core';

const LoadingOverlayComponent = ({ visible }) => {
  return (
    <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
  );
};

export default LoadingOverlayComponent;
