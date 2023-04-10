import React from "react";
import styles from "./Select.module.scss";
import Button from "../Button";
import { ButtonType } from "../../utils/@globalTypes";

const Select = () => {
  return (
    <>
      <div className={styles.selectWrapper}>
        <Button onClick={() => {}} type={ButtonType.Secondary} />
      </div>
    </>
  );
};

export default Select;

// import React, { useState } from "react";
// import styles from "./Select.module.scss";
//
// const Select = () => {
//   const [value, setValue] = useState(``);
//   const handleChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setValue(event.target.value);
//   };
//
//   const handleSubmit = (event: { preventDefault: () => void }) => {
//     alert("Your favorite flavor is: " + value);
//     event.preventDefault();
//   };
//   return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className={styles.select}>
//             <select value={value} onChange={handleChange}>
//               <option value="item1">item1</option>
//               <option value="item2">item2</option>
//               <option value="item3">item3</option>
//               <option value="item4">item4</option>
//             </select>
//           </div>
//         </form>
//       </div>
//   );
// };
//
// export default Select;
