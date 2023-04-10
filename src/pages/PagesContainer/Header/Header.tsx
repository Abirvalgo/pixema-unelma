import React, { useState } from "react";
import styles from "./Header.module.scss";
import { PixemaIcon, UserIcon } from "../../../assets/icons";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (search: string) => {
    setSearch(search);
  };
  const navigate = useNavigate();
  const onSignInClick = () => {
    navigate(`/sign-in`);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.siteLogo}>
          <PixemaIcon />
        </div>
        <Input
          type={`text`}
          value={search}
          placeholder={"Search"}
          onChange={onChangeSearch}
        />
        <div className={styles.userIcon} onClick={onSignInClick}>
          <UserIcon />
          Sign In
        </div>
      </div>
    </>
  );
};

export default Header;

// return (
//     <>
//       <div className={styles.leftContainer}>
//         <div className={styles.siteLogo}>
//           <PixemaIcon />
//         </div>
//         <div className={styles.iconsWrapper}>
//           <div className={styles.svgFill}>
//             <HomeIcon />
//             <p>Trends</p>
//           </div>
//           <div className={styles.svgFill}>
//             <TrendsIcon />
//             <p>Trends</p>
//           </div>
//           <div className={styles.svgFill}>
//             <FavoritesIcon />
//             <p>Favorites</p>
//           </div>
//           <div className={styles.svgFill}>
//             <SettingsIcon />
//             <p>Settings</p>
//           </div>
//         </div>
//       </div>
//       <div className={styles.header}>
//         <Input
//             type={`text`}
//             value={search}
//             placeholder={"Search"}
//             onChange={onChangeSearch}
//         />
//         <div className={styles.userIcon}>
//           <UserIcon />
//         </div>
//       </div>
//     </>
// );
// };
