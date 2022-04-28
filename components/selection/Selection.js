import { createContext } from 'react';

const SelectionContext = createContext({
  region: "",
  setRegion: (region) => {region = region},
  dayOfWeek: "",
  setDayOfWeek: (dayOfWeek) => {dayOfWeek = dayOfWeek}
});
export default SelectionContext;