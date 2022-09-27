import {
  Avatar,
  Card,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import { UserDataType, UserStatusType } from "../../types/types";
import { Stack } from "@mui/system";
import { useUserStatusContext } from "../../contexts/UserStatusContext";
import "./ListItem.css";

export default function HorizontalListItem({
  email = "",
  avatar = "",
  first_name = "",
  last_name = "",
}: UserDataType) {

  const { status } = useUserStatusContext();

  return (
    <Card
      className="fixed-flex-baises"
      sx={{ padding: "1em 0.5em" }}
      component="li"
    >
      <Stack
        direction="row-reverse"
        justifyContent="space-around"
        alignItems="center"
      >

        {status === UserStatusType.LOADING ? (
          <Skeleton variant="circular" animation="wave">
            <Avatar />
          </Skeleton>
        ) : (
          <Avatar src={avatar} alt={first_name + last_name + ""} />
        )}

        <CardContent>

          {status === UserStatusType.LOADING ? (
            <>
              <Skeleton animation="wave" height={28} width={80} />
              <Skeleton animation="wave" height={28} width={180} />
            </>
          ) : (
            <>
              <Typography gutterBottom variant="subtitle1" fontWeight={"bold"}>
                {first_name + " " + last_name}
              </Typography>
              <Typography color="text.secondary" variant="subtitle2">
                {email}
              </Typography>
            </>
          )}
          
        </CardContent>
      </Stack>
    </Card>
  );
}
