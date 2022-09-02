import { Data } from "./store";

export const Provider = (props) => {
  return (
    <Data.Provider value={Data._currentValue}>
      {props.children}
    </Data.Provider>
  );
};
