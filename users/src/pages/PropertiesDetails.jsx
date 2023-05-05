import { Email, Padding } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Tab,
  Tabs,
  Typography,
  Container
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import HourglassBottomRoundedIcon from "@mui/icons-material/HourglassBottomRounded";
import NotInterestedRoundedIcon from "@mui/icons-material/NotInterestedRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";

import ShresDetailsTable from "../components/SharesDetailsTable";

import { propertiesImageData } from "../data";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const PropertiesDetails = () => {
  function TabPanel(props) {
    const { children, value, index } = props;
    return <>{value === index && <>{children}</>}</>;
  }
  // Shares Table Data
  const sharesTableColumns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "sahres", label: "Shares", minWidth: 100 },
    { id: "contact", label: "Contact", minWidth: 100 },
  ];

  function createData(name, sahres, contact) {
    return { name, sahres, contact };
  }

  const sharesTableRows = [
    createData("Rana Ahsan Ansar", "70", "03091045145"),
    createData("Talal", "20", "03091045145"),
    createData("Sufyan Asghar", "10", "03091045145"),
  ];

  // Property Purchasing logs
  const historyTableColumns = [
    { id: "seller", label: "Seller", minWidth: 170 },
    { id: "buyer", label: "Buyer", minWidth: 100 },
    { id: "shares", label: "Shares", minWidth: 100 },
    { id: "time", label: "Time", minWidth: 100 },
  ];

  function createHistoryData(seller, buyer, shares, time) {
    return { seller, buyer, shares, time };
  }

  const historyTableRows = [
    createHistoryData("Rana Ahsan Ansar", "Talal", "70", "5246"),
    createHistoryData("Talal", "Talal", "70", "5246"),
    createHistoryData("Sufyan Asghar", "Talal", "70", "5246"),
  ];
  const gradiantText = {
    backgroundcolor: "primary",
    backgroundImage: `linear-gradient(to left, #5514B4, #9d149d)`,
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    display: "table",
    WebkitTextFillColor: "transparent",
  };
  const glassMorphismStyle = {
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  };

  // tabs Settings
  const [value, setValue] = React.useState(0);

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container>
        <Box marginY={4}>
          <Typography sx={gradiantText} variant="h5" fontWeight="bold">
            Apartment Complex
          </Typography>
          <Typography variant="body2" color="gray">
            4th floor Gulberg Plaza
          </Typography>
        </Box>

        <Box mb={4}>
          <Box position="relative">
            <Box
              sx={glassMorphismStyle}
              borderRadius={2}
              position="absolute"
              zIndex={1}
              bottom={7}
              right={7}
            >
              <Typography
                fontWeight="bold"
                color="whitesmoke"
                padding={1}
                variant="subtitle1"
              >
                Show all Images
              </Typography>
            </Box>
            <Box border='2px solid gray' >
              <ImageList
              // sx={{ height: 450 }}
              variant='standard'
              cols={4}
              rowHeight={200}
            >
              {propertiesImageData.map((item) => (
                <ImageListItem
                  key={item.img}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            </Box>
            
          </Box>
        </Box>

        <Box mb={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <Stack>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Typography
                      sx={gradiantText}
                      variant="h6"
                      fontWeight="bold"
                    >
                      Verified
                    </Typography>
                    <VerifiedRoundedIcon color="success" />
                  </Box>
                </Box>
                <Divider />

                <Box>
                  <Typography sx={gradiantText} variant="h6" fontWeight="bold">
                    Description
                  </Typography>
                  <Typography>
                    1 Kanal double story house, Ideal location new garden town, 5 bed rooms, 4 bath rooms, 3 kitchens.
                  </Typography>
                </Box>

              
              </Stack>
            </Grid>

            <Grid justifyContent="center" item xs={12} sm={4} md={4} lg={4}>
              <Box
                borderRadius={3}
                padding={1}
                sx={{
                  backgroundImage: "linear-gradient(to left, #5514B4, #9d149d)",
                }}
              >
                <Box borderRadius={3} padding={2} sx={glassMorphismStyle}>
                  <Stack spacing={2}>
                    <Box display="flex" alignItems="center">
                      <MonetizationOnRoundedIcon />
                      <Typography fontWeight="bold" mr={1} variant="h6">
                        20,000
                      </Typography>
                      <span
                        style={{
                          fontSize: 14,
                          textDecoration: "underline",
                          color: "black",
                        }}
                      >
                      per share
                      </span>
                    </Box>
                    <Typography variant="body2" color="white">
                      Property is already approved and listed on blockchain. Per sheare price is 20,000. Price is negotiable. 
                    </Typography>

                    <Box display="flex">
                      <Typography mr={1}>Shares: </Typography>
                      <Typography fontWeight="bold">40</Typography>
                    </Box>
                    <Box display="flex">
                      <Typography mr={1}>Total: </Typography>
                      <Typography fontWeight="bold">800,000</Typography>
                    </Box>

                    {/* <Button
                      variant="contained"
                      sx={{
                        backgroundImage:
                          "linear-gradient(to right , #AE69B3 , #4868DB)",
                      }}
                    >
                      Buy Property
                    </Button> */}
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          mb={4}
          sx={{
            background: "rgba(190, 186, 186, 0.256)",
            // boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
            // backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
          padding={2}
          borderRadius={3}
        >
          <Typography sx={gradiantText} variant="h6" fontWeight="bold">
            Location
          </Typography>
          <Stack spacing={2}>
            <Typography fontWeight="bold">
              293 4th Floor, Gulberg Plaza,Lahore Pakistan
            </Typography>
            <Typography>
              House no.2, Street no. 12, New garden town near Himayat-e-Islam Collage, band road, Lahore.
            </Typography>
          </Stack>
        </Box>

        <Box mb={4}>
          <Typography sx={gradiantText} variant="h6" fontWeight="bold">
            Seller Information
          </Typography>
          <Stack>
            <span>Name: </span>
            <Typography fontWeight="bold">Rana Ahsan Ansar</Typography>
            <span>Contact Inforamtion: </span>
            <Box display="flex">
              <EmailIcon   />

              <Typography ml={1} fontWeight="bold">asn.cs21@gmail.com</Typography>
            </Box>
            <Box display="flex">
              <LocalPhoneIcon />

              <Typography ml={1}  fontWeight="bold">+92 3091045145</Typography>
            </Box>
          </Stack>
        </Box>

        <Box
          mb={4}
          sx={{
            background: "rgba(190, 186, 186, 0.256)",
          }}
          padding={1}
          borderRadius={2}
        >
          <Tabs
            value={value}
            onChange={handleTabs}
            variant="scrollable"
            scrollButtons={false}
            textColor="white"
            TabIndicatorProps={{
              style: {
                backgroundImage: "linear-gradient(to left, #5514B4, #9d149d)",
              },
            }}
          >
            <Tab
              label="Share Holders"
              style={{ textTransform: "none", fontWeight: "bold" }}
            />
            <Tab
              label="Transaction History"
              style={{ textTransform: "none", fontWeight: "bold" }}
            />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Box mt={2}>
              <ShresDetailsTable
                columsArray={sharesTableColumns}
                rowsArray={sharesTableRows}
              />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box mt={2}>
              <ShresDetailsTable
                columsArray={historyTableColumns}
                rowsArray={historyTableRows}
              />
            </Box>
          </TabPanel>
        </Box>
        {/* Share Holders Table  */}
        {/* <Box
          mb={4}
          sx={{
            background: "rgba(190, 186, 186, 0.256)",
          }}
          padding={1}
          borderRadius={2}
        >
          <Typography sx={gradiantText} variant="h6" fontWeight="bold">
            Share Holders
          </Typography>

          <Box mt={2}>
            <ShresDetailsTable
              columsArray={sharesTableColumns}
              rowsArray={sharesTableRows} 
            />
          </Box>
        </Box> */}
        {/* Buying History Table  */}
        {/* <Box
          mb={4}
          sx={{
            background: "rgba(190, 186, 186, 0.256)",
          }}
          padding={1}
          borderRadius={2}
        >
          <Typography sx={gradiantText} variant="h6" fontWeight="bold">
            Buying History
          </Typography>

          <Box mt={2}>
            <ShresDetailsTable
              columsArray={historyTableColumns}
              rowsArray={historyTableRows}
            />
          </Box>
        </Box> */}
      </Container>
    </>
  );
};

export default PropertiesDetails;
