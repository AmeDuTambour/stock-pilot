/**
 * @format
 */

import React from 'react';
import "../global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
