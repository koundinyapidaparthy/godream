import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ServiceHeaderImage from "../images/ServiceHeader.jpg";
import SchoolIcon from "@material-ui/icons/School";
import DependentVisaLogo from "../images/DependentVisaLogo.png";
import WorldWideLogo from "../images/WorldWideLogo.png";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import clsx from "clsx";
import USA from "../images/USA.jpg";
import Canada from "../images/Canada.jpg";
import UnitedKingdom from "../images/UnitedKindom.jpg";
import Australia from "../images/Australia.jpg";
import France from "../images/France.jpg";
import Dubai from "../images/Dubai.jpg";
import AbuDhabi from "../images/AbuDhabi.jpg";
import Malaysia from "../images/Malaysia.jpg";
import Singapore from "../images/Singapore.jpg";
import Footer from "./Footer";

const CountryImages = [
  { src: USA, alt: "USA", university: "73 Universities" },
  { src: Canada, alt: "Canada", university: "27 Universities" },
  { src: UnitedKingdom, alt: "UK", university: "52 Universities" },
  { src: Australia, alt: "Australia", university: "32 Universities" },
  { src: France, alt: "France", university: "18 Universities" },
  { src: Dubai, alt: "Dubai", university: "3 Universities" },
  { src: AbuDhabi, alt: "AbuDhabi", university: "2 Universities" },
  { src: Malaysia, alt: "Malaysia", university: "4 Universities" },
  { src: Singapore, alt: "Singapore", university: "5 Universities" },
];
const useStyles = makeStyles((theme) => ({
  servicesViewWrapper: {
    margin: "20px 0px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceViewScroll: {
    overflowX: "hidden",
    overflowY: "scroll",
    height: "95vh",
    ...(theme.scrollbar || {}),
  },
  serviceHeader: {
    fontSize: "90px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "75px", // Adjust font size for small screens and up
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "40px", // Adjust font size for small screens and up
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px", // Adjust font size for small screens and up
    },
  },
  serviceHeaderImage: {
    width: "100%",
    height: "auto",
    boxShadow: `0px 0px 10px ${theme.palette.primary.light}`,
  },
  serviceScholarIcon: {
    display: "flex",
    alignItems: "center",
  },
  serviceScholarText: {
    marginLeft: "10px",
  },
  serviceScholarContent: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px", // Adjust font size for small screens and up
    },
  },
  dependentVisaImage: {
    width: "1em",
    height: "1em",
  },
  popularCountryText: {
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  eachCountryServiceImage: {
    objectFit: "cover",
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      height: "100px",
    },
  },
  eachCountryServiceImageWrapper: {
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  eachCounrtyServiceText: {
    position: "absolute",
    bottom: 25,
    padding: "5px 10px",
    borderRadius: "6px",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    background: "white",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      padding: "2.5px 5px",
      fontSize: "8px",
      bottom: 12,
    },
  },
}));

const CountryService = ({ alt, index, src, university }) => {
  const [isItemHovered, setIsHovered] = React.useState(false);

  const normalAnimation = {
    transform: isItemHovered ? "scale(1.2)" : "scale(1)",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  };

  const reverseAnimation = {
    transform: isItemHovered ? "scale(0.8)" : "scale(1)",
    transition: "transform 0.3s ease, opacity 0.3s ease",
  };
  const handleHover = (alt) => {
    setIsHovered(alt);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
  const classes = useStyles();
  return (
    <Grid
      item
      xs={4}
      key={alt + index}
      className={classes.eachCountryServiceImageWrapper}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={classes.eachCountryServiceImage}
        onMouseEnter={() => handleHover(alt)}
        onMouseLeave={handleHoverOut}
      />
      <div
        className={classes.eachCounrtyServiceText}
        style={
          isItemHovered && alt === isItemHovered
            ? reverseAnimation
            : normalAnimation
        }
      >
        {alt === isItemHovered ? university : alt}
      </div>
    </Grid>
  );
};

const Services = ({ hideScrollBars }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={clsx(classes.servicesViewWrapper, {
        [classes.serviceViewScroll]: !hideScrollBars,
      })}
      spacing={3}
    >
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <Grid item xs={2}>
            <Typography className={classes.serviceHeader}>Services</Typography>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column" alignItems="center" spacing={3}>
              <Grid item xs={12}>
                <img
                  loading="lazy"
                  src={ServiceHeaderImage}
                  alt="Service Header"
                  className={classes.serviceHeaderImage}
                />
              </Grid>
              <Grid item xs={12}>
                <div className={classes.serviceScholarIcon}>
                  <SchoolIcon />
                  <span className={classes.serviceScholarText}>
                    Student Visa
                  </span>
                </div>
                <Typography
                  variant="subtitle2"
                  className={classes.serviceScholarContent}
                >
                  Starting a journey to study abroad is an exciting experience,
                  but grasping the complexities of the student visa application
                  process may be difficult. At Go Dream Overseas, your best
                  destination for international education, understands the value
                  of competent advice. Go Dream, being the Best Overseas
                  Education Consultancy in Hyderabad, is ready to assist you in
                  navigating the complexity of the application process. Our
                  knowledgeable staff is committed to giving thorough
                  assistance, ensuring that your goal of studying abroad becomes
                  a smooth reality. Trust Go Dream Overseas with your
                  educational goals, and let Go Dream lead you down the path to
                  academic achievement.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.serviceScholarIcon}>
                  <img
                    loading="lazy"
                    src={DependentVisaLogo}
                    alt="Dependent Visa"
                    className={classes.dependentVisaImage}
                  />
                  <span className={classes.serviceScholarText}>
                    Dependent Visa
                  </span>
                </div>
                <Typography
                  variant="subtitle2"
                  className={classes.serviceScholarContent}
                >
                  Our purpose at Go Dream Overseas is to stimulate worldwide
                  academic endeavors and to help individuals all around the
                  world realize their ambitions. Our specialty services include
                  the Dependent Visa category, which allows residents and
                  citizens of the United States to sponsor their family members
                  and children for immigration. This one-of-a-kind opportunity
                  allows loved ones to join and live a satisfying life alongside
                  the principal visa holder, supporting educational and cultural
                  progress together.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.serviceScholarIcon}>
                  <WorkRoundedIcon />
                  <span className={classes.serviceScholarText}>
                    Job/Work Visa
                  </span>
                </div>
                <Typography
                  variant="subtitle2"
                  className={classes.serviceScholarContent}
                >
                  At Go Dream Overseas, we recognize that obtaining a job or a
                  work visa in a foreign nation is a significant milestone in
                  your professional development. As the leading Visa Consultancy
                  in Hyderabad, our devoted staff is committed to giving
                  professional assistance and support during this transforming
                  process. With our breadth of knowledge, we are well-equipped
                  to assist you in negotiating the complexity of work visa
                  applications, guaranteeing a smooth and successful pursuit of
                  your worldwide career goals. Trust Go Dream Overseas to be
                  your partner in expanding your horizons and discovering new
                  overseas prospects.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.serviceScholarIcon}>
                  <img
                    loading="lazy"
                    src={WorldWideLogo}
                    alt="Dependent Visa"
                    className={classes.dependentVisaImage}
                  />
                  <span className={classes.serviceScholarText}>
                    Visiting Visa
                  </span>
                </div>
                <Typography
                  variant="subtitle2"
                  className={classes.serviceScholarContent}
                >
                  At Go Dream Overseas, we think that traveling to new places
                  and immersing oneself in different cultures is a transforming
                  and life-enriching experience. As your devoted Visit Visa
                  Consultants, we are dedicated to providing unflinching
                  assistance in order to make your trip aspirations a reality.
                  Our purpose is to give you the tools you need to make
                  treasured memories as you begin on a journey of discovery and
                  adventure, opening doors to new opportunities and vistas. Join
                  us in making your international travels memorable and
                  satisfying.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={3}
        >
          <Grid item xs={12} xl={6}>
            <Typography variant="h6" className={classes.popularCountryText}>
              POPULAR COUNTRIES WE SERVICE
            </Typography>
          </Grid>
          <Grid item xs={12} xl={5}>
            <Grid container spacing={1}>
              {CountryImages.map(({ src, alt, university }, index) => {
                return (
                  <CountryService
                    src={src}
                    alt={alt}
                    university={university}
                    index={index}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {!hideScrollBars ? (
        <Grid item xs={12}>
          <Footer />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Services;
