// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
import styles from "./Desktop.module.css"

const Mynavbar = () => {
  return (
    <div className={styles.desktop2}>
      <header className={styles.fRAMEA}>
        <div className={styles.fRAMEB}>
          <div className={styles.eQUIPMENTSFrame}>
            <div className={styles.hOMEText}>
              <div className={styles.eLLIPSE} />
            </div>
            <div className={styles.home}>HOME</div>
            <div className={styles.cONTACTUSText}>
              <div className={styles.sports}>SPORTS</div>
            </div>
            <div className={styles.aBOUTUSFrame}>
              <div className={styles.equipments}>EQUIPMENTS</div>
            </div>
            <div className={styles.aBOUTUSFrame1}>
              <div className={styles.aboutUs}>ABOUT US</div>
            </div>
            <div className={styles.contactUs}>CONTACT US</div>
          </div>
          <div className={styles.div} />
          <div className={styles.fRAMEBChild} />
        </div>
      </header>
      {/* <div className={styles.fORSTUDENTSFrame}>
        <div className={styles.rectangleA} />
        <div className={styles.fRAMEE}>
          <div className={styles.fORFACULTYText}>
            <div className={styles.aDMINLOGINFrame}>
              <h2 className={styles.forFaculty}>FOR FACULTY</h2>
              <div className={styles.userLoginText}>
                <div className={styles.fRAMEF}>
                  <div className={styles.adminLoginFrame} />
                  <div className={styles.adminLogin}>ADMIN LOGIN</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.forFacultyFrame}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
          </div>
          {/* <div className={styles.forStudentsFrame}>
            <h2 className={styles.forStudents}>FOR STUDENTS</h2>
            <div className={styles.forStudentsFrameChild} />
            <div className={styles.toKnowEquipments}>
              <i className={styles.toKnowAbout}>
                To know about available equipments
              </i>
              <div className={styles.userFrame}>
                <button className={styles.userLoginWrapper}>
                  <div className={styles.userLogin}>USER LOGIN</div>
                </button>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* // </div>  */}
    </div>
  );
};

export default Mynavbar;

