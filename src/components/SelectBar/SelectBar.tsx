import React, { FC } from "react";
import Select from "react-select";

type SelectProps = {
  isMulti?: boolean;
  value: any;
  onChange: (data: any) => void;
  options: any;
};

const SelectBar: FC<SelectProps> = ({ isMulti, value, onChange, options }) => {
  return (
    <>
      <Select
        isMulti={isMulti}
        // onChange={([selected]) => selected}
        // onChange={(e) => setSelectedOption(e)}
        value={value}
        onChange={onChange}
        options={options}
      />
    </>
  );
};

export default SelectBar;
