import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Card, CardContent, CardMedia, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import personimg1 from "../images/person1.jpg";
import personimg2 from "../images/person2.jpg";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

function BakerProfileSection() {
  const headerStyle = {
    backgroundColor: "#cca2a2",
  };

  return (
    <>
      <Box
        id="textSection"
        sx={{ padding: "20px" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {/* ÕIGE KAART */}

        <Card
          sx={{
            width: "97vw",
            height: "30vw",
            borderRadius: 10,
            border: "3px solid #C27F85",
            boxShadow: "0px 20px 20px 0px rgba(0,0,0,0.25)",
          }}
        >
          {/* <CardHeader
          textAlign="left"
          avatar={
            <Avatar
              alt="Remy Sharp"
              src={personimg1}
              sx={{ width: 150, height: 150 }}
            />
          }
          title={
            <>
              Maria's Bakery&nbsp;
              <Rating name="example-rating" value={3} readOnly />
            </>
          }
          subheader="Mustamäe, Tallinn"
          >
            <Divider sx={{ marginBottom: "10px", marginTop: "10px" }}>
              <Chip
                style={{
                  backgroundColor: "#cca2a2",
                  color: "white",
                  width: "20vw",
                  height: "25px",
                  margin: "10px",
                }}
                size="large"
                label="CAKE SIZE (KG)"
              />
            </Divider>
          </CardHeader> */}

          <CardContent>
            <Grid container spacing={1} justifyContent="center">
              <Grid
                style={{
                  width: "30vw",
                  height: "25px",
                  margin: "10px",
                }}
              >
                <Card
                  sx={{
                    width: "30vw",
                    height: "27vw",
                    borderRadius: 10,
                    border: "3px solid #C27F85",
                    boxShadow: "0px 20px 20px 0px rgba(0,0,0,0.25)",
                  }}
                >
                  <CardHeader
                    style={headerStyle}
                    avatar={
                      <Avatar
                        alt="Remy Sharp"
                        src={personimg1}
                        sx={{ width: 150, height: 150 }}
                      />
                    }
                    title={
                      <>
                        Maria's Bakery&nbsp;
                        <Rating name="example-rating" value={3} readOnly />
                      </>
                    }
                    subheader="Aia 7, Tallinn"
                  ></CardHeader>

                  <CardContent></CardContent>
                  <CardActions>
                    <p>
                      With 15+ years of experience, I'm a passionate baker
                      dedicated to creating delicious and beautiful baked goods.
                      For the best quality, please place your order at least 24
                      hours in advance.
                    </p>
                  </CardActions>
                  {/* <CardActions>
                    <p></p>
                  </CardActions> */}
                </Card>
              </Grid>

              {/* <Divider orientation="vertical" flexItem /> */}

              <Grid
                style={{
                  width: "30vw",
                  height: "25px",
                  margin: "10px",
                }}
              >
                <Card
                  sx={{
                    width: "30vw",
                    height: "27vw",
                    borderRadius: 10,
                    border: "3px solid #C27F85",
                    boxShadow: "0px 20px 20px 0px rgba(0,0,0,0.25)",
                  }}
                >
                  <CardHeader
                    sx={{
                      textSize: "5px",
                    }}
                    style={headerStyle}
                    // avatar={
                    //   <Avatar
                    //     alt="Remy Sharp"
                    //     src={personimg1}
                    //     sx={{ width: 150, height: 150 }}
                    //   />
                    // }
                    title={
                      <>
                        Aia 7, Tallinn &nbsp;
                        {/* <Rating name="example-rating" value={3} readOnly /> */}
                      </>
                    }
                    // subheader="Aia 7, Tallinn"
                  ></CardHeader>

                  <CardContent>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8114.724513243031!2d24.7508183!3d59.4383926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929361741d52e1%3A0xfbe21956f9672088!2sBCS%20Koolitus!5e0!3m2!1set!2see!4v1681391315300!5m2!1set!2see"
                      width="370"
                      height="300"
                      style={{ border: "0", borderRadius: "15px" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </CardContent>
                  {/* <CardActions>
                    <p>
                      20 years of experience in baking. <br /> Make sure to
                      place your order at least 24h before!
                    </p>
                  </CardActions> */}
                  {/* <CardActions>
                    <p></p>
                  </CardActions> */}
                </Card>
              </Grid>

              <Divider orientation="vertical" flexItem />

              <Grid
                style={{
                  width: "30vw",
                  height: "25px",
                  margin: "10px",
                }}
              >
                <Card
                  sx={{
                    width: "30vw",
                    height: "27vw",
                    borderRadius: 10,
                    border: "3px solid #C27F85",
                    boxShadow: "0px 20px 20px 0px rgba(0,0,0,0.25)",
                  }}
                >
                  <CardHeader
                    style={headerStyle}
                    avatar={
                      <Avatar
                        alt="Remy Sharp"
                        src={personimg2}
                        sx={{ width: 60, height: 60 }}
                      />
                    }
                    // title={
                    //   <>
                    //     Review: Anni Marie T.&nbsp;
                    //     <Rating name="example-rating" value={5} readOnly />

                    //   </>
                    // }
                    title={
                      <>
                        Review rating &nbsp;
                        <Rating name="example-rating" value={5} readOnly />
                      </>
                    }
                    subheader="Anni Marie T."
                  ></CardHeader>

                  <CardContent></CardContent>
                  <CardActions>
                    <p>
                      I had the pleasure of working with Maria for my wedding
                      cake, and I couldn't have been happier with the final
                      product. The cake was not only beautiful, but also
                      absolutely delicious - our guests raved about it all
                      night! Maria was a pleasure to work with, and I would
                      highly recommend their services to anyone in need of a
                      talented and professional baker. I definately reccommend
                      her work!
                    </p>
                  </CardActions>
                  {/* <CardActions>
                    <p></p>
                  </CardActions> */}
                </Card>
              </Grid>
            </Grid>
          </CardContent>
          {/* <CardActions>
            <p>
              20 years of experience in baking. <br /> Make sure to place your
              order at least 24h before!
            </p>
          </CardActions> */}
          {/* <CardActions>
            <p></p>
          </CardActions> */}
        </Card>
      </Box>
    </>
  );
}

export default BakerProfileSection;
