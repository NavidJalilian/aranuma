import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Radio,
  FormControlLabel,
  SvgIcon,
  SelectChangeEvent,
  Stack,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import {
  UserDataType,
  UserStatusType,
  PerferedLayoutType,
} from "../types/types";

import RegularList from "../components/Lists/Regular";
import SkeletonList from "../components/Lists/Skeleton";
import VerticalListItem from "../components/ListItem/Vertical";
import HorizontalListItem from "../components/ListItem/Horizontal";
import MuiRadioGroup from "../components/Mui/RadioGroup";
import { useUserStatusContext } from "../contexts/UserStatusContext";

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersData, setUsersData] = useState<UserDataType[]>([]);
  const [perPageCount, setPerPageCount] = useState(3);
  const [totalPages, setTotalPages] = useState(2);
  const [perferedLayout, setPerferedLayout] = useState<PerferedLayoutType>(
    PerferedLayoutType.HORIZONTAL
  );
  const { status, setStatus } = useUserStatusContext();
  const [errorMessage, setErrorMessage] = useState("");

  const currentPageHandler = (e: React.ChangeEvent<unknown>, value: number) =>
    setCurrentPage(value);

  const pageStepHandler = (e: SelectChangeEvent) => {
    setPerPageCount(+e.target.value);
    setCurrentPage(1);
  };

  const perferedLayoutHandler = (e: SelectChangeEvent) => {
    const value = e.target.value as PerferedLayoutType;

    setPerferedLayout(value);
  };

  const url = `https://reqres.in/api/users?page=${currentPage}&per_page=${perPageCount}`;

  const getUsersData = async (controller: AbortController) => {
    try {
      setStatus(UserStatusType.LOADING);
      const response = await fetch(url, { signal: controller.signal });
      const data = await response.json();
      setTotalPages(data.total_pages);
      setUsersData(data.data);
      if (response.ok) setStatus(UserStatusType.SUCCESS);
    } catch (e) {
      if (!(e instanceof Error)) return;
      if (e.name === "AbortError") return;
      else {
        setStatus(UserStatusType.ERROR);
        setErrorMessage(e.message);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getUsersData(controller);
    return () => {
      controller.abort();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, perPageCount]);

  return (
    <>
      {status === UserStatusType.ERROR && (
        <>
          <Typography variant="h6" color="red" sx={{ textAlign: "center" }}>
            Something went worng sorry!
          </Typography>
          <Typography variant="h6" color="red" sx={{ textAlign: "center" }}>
            {errorMessage}
          </Typography>
        </>
      )}

      {perferedLayout === PerferedLayoutType.VERRTICAL &&
      status === UserStatusType.SUCCESS ? (
        <RegularList data={usersData} listItem={VerticalListItem} />
      ) : (
        status === UserStatusType.LOADING &&
        perferedLayout === PerferedLayoutType.VERRTICAL && (
          <SkeletonList listSize={perPageCount} listItem={VerticalListItem} />
        )
      )}

      {perferedLayout === PerferedLayoutType.HORIZONTAL &&
      status === UserStatusType.SUCCESS ? (
        <RegularList data={usersData} listItem={HorizontalListItem} />
      ) : (
        status === UserStatusType.LOADING &&
        perferedLayout === PerferedLayoutType.HORIZONTAL && (
          <SkeletonList listSize={perPageCount} listItem={HorizontalListItem} />
        )
      )}

      <Stack
        mt={3}
        direction="row"
        justifyContent="space-around"
        alignContent="center"
      >
        <Pagination
          shape="rounded"
          onChange={currentPageHandler}
          count={totalPages}
          page={currentPage}
        />
      </Stack>

      <Stack
        mt={3}
        direction="row"
        justifyContent="space-around"
        alignContent="center"
      >
        <Box sx={{ padding: "0.5em" }}>
          <FormControl>
            <InputLabel id="pageStep">Count</InputLabel>
            <Select
              labelId="pageStep"
              id="pageStep-select"
              value={perPageCount.toString()}
              label="Count"
              sx={{ width: { sx: "100px", sm: "200px" } }}
              onChange={pageStepHandler}
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
              <MenuItem value={12}>Twelve</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <MuiRadioGroup
          label="Layout"
          value={perferedLayout}
          changeHandler={perferedLayoutHandler}
        >
          <FormControlLabel
            value={PerferedLayoutType.VERRTICAL}
            control={<Radio />}
            label={
              <SvgIcon
                sx={{
                  scale: "1.5",
                }}
              >
                <svg
                  width="450"
                  height="450"
                  viewBox="0 0 9000 9000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="450" height="450" rx="22" fill="#d4d3d3" />
                  <path
                    d="M301 117C301 158.974 266.974 193 225 193C183.026 193 149 158.974 149 117C149 75.0264 183.026 41 225 41C266.974 41 301 75.0264 301 117Z"
                    fill="#f0ecec"
                  />
                  <rect
                    x="70"
                    y="244"
                    width="300"
                    height="39"
                    rx="5"
                    fill="#f0ecec"
                  />
                  <rect
                    x="39"
                    y="315"
                    width="373"
                    height="39"
                    rx="5"
                    fill="#f0ecec"
                  />
                </svg>
              </SvgIcon>
            }
          />

          <FormControlLabel
            value={PerferedLayoutType.HORIZONTAL}
            control={<Radio />}
            label={
              <SvgIcon
                sx={{
                  scale: "3 3",
                  width: 50,
                  height: 20,
                  translate: "1% 105% ",
                }}
              >
                {/* horizontal svg */}
                <svg
                  width="450"
                  height="450"
                  viewBox="0 0 15000 15000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="736" height="336" rx="22" fill="#d4d3d3" />
                  <path
                    d="M693 168.5C693 212.407 652.258 248 602 248C551.742 248 511 212.407 511 168.5C511 124.593 551.742 89 602 89C652.258 89 693 124.593 693 168.5Z"
                    fill="#f0ecec"
                  />
                  <rect
                    x="57"
                    y="110"
                    width="198"
                    height="45"
                    rx="5"
                    fill="#f0ecec"
                  />
                  <rect
                    x="57"
                    y="181"
                    width="398"
                    height="50"
                    rx="5"
                    fill="#f0ecec"
                  />
                </svg>
              </SvgIcon>
            }
          />
        </MuiRadioGroup>
      </Stack>
    </>
  );
}
// h |v => suc|err|load || 2list
