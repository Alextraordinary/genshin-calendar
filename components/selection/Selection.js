import { createContext } from 'react';

const SelectionContext = createContext({
  region: "",
  setRegion: () => {},
  dayOfWeek: "",
  setDayOfWeek: () => {}
});
export default SelectionContext;