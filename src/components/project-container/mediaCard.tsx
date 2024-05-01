import { Box, Tab, Tabs } from "@mui/material";
import { FC, useState } from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const CustomTabPanel = (props: TabPanelProps) => {
  //TODO make separate components
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  //TODO make separate components
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

type ProjectModel = {
  name?: string;
  description?: string;
  stack: string[];
  sourceCode?: string;
  livePreview?: string;
  path: string;
  backGround: string;
};

type ProjectContainerProps = {
  project: ProjectModel;
};

export const MediaCard: FC<ProjectContainerProps> = ({ project }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <Box sx={{ padding: 2, margin: 2 }}>
      <Card sx={{ minWidth: 345 }}>
        <CardMedia
          sx={{ height: 250, position: "relative", overflow: "hidden" }}
          title="job posting"
        >
          <img
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
            }}
            src={project.path}
          />
        </CardMedia>
        <CardContent sx={{ p: 0 }}>
          <Typography
            sx={{ padding: "10px 16px 0px 16px" }}
            gutterBottom
            variant="h5"
            color="info.main"
            component="div"
          >
            {project.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: 18, p: "10px 16px" }}
            color="text.secondary"
          >
            {project.description}
          </Typography>
          <Box sx={{ width: "100%", bgcolor: "text.disabled" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Demo" {...a11yProps(0)} />
                <Tab label="Repo" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              {project.livePreview}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {project.sourceCode}
            </CustomTabPanel>
          </Box>
        </CardContent>
        <CardActions>
          {project.stack.map((item, index) => (
            // TODO make them tags
            <Button key={index} size="small">
              {item}
            </Button>
          ))}
        </CardActions>
      </Card>
    </Box>
  );
};
