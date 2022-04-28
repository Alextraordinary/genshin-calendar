import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import SelectionContext from '../components/selection/Selection';

function MyApp({ Component, pageProps }: AppProps) {
  const [region, setRegion] = useState("Mondstadt");
  const [dayOfWeek, setDayOfWeek] = useState("Today");
  const selection = { region, setRegion, dayOfWeek, setDayOfWeek };

  return (
    <SelectionContext.Provider value={selection}>
      <Component {...pageProps} />
    </SelectionContext.Provider>
  );
}

export default MyApp
