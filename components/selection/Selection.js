import { createContext } from 'react';

const SelectionContext = createContext({
  region: "Mondstadt",
  setRegion: () => {},
  dayOfWeek: "Today",
  setDayOfWeek: () => {}
});
export default SelectionContext;