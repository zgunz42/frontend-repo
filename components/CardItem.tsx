import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Chip, Grid } from "@mui/material";

export type CardItemProps = {
  name: string;
  avatarUrl: string;
  status: string;
  detail: string;
  self: boolean;
};

export default function CardItem(props: CardItemProps) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={props.avatarUrl} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Grid container spacing={2}>
             <Grid item xs={8}>
              <Typography>
              {props.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {props.self ? 
                <Chip label="You" color="primary" />
                : ""}
              </Typography>
              </Grid>
          </Grid>
        }
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {props.status}
            </Typography>
            {` — ${props.detail}`}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
