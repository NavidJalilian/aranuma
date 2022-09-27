import { Avatar, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { UserDataType } from "../../types/types";
import { Stack } from "@mui/system";
import "./ListItem.css";

export default function VerticalListItem({
  email = "",
  avatar = "",
  first_name = "",
  last_name = "",
}: UserDataType) {
  return (
    <Card
      className="fixed-flex-baises"
      sx={{ maxWidth: "100%", padding: "1em 0", textAlign: "center" }}
      component="li"
    >
      <Stack
        direction="row-reverse"
        justifyContent="space-around"
        alignItems="center"
      >
        <Avatar src={avatar} alt={first_name + " " + last_name} />
      </Stack>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" fontWeight={"bold"}>
          {first_name + " " + last_name}
        </Typography>
        <Typography color="text.secondary" variant="subtitle2">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
}
