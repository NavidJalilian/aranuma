import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";

import { UserDataType } from "../types/types";

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersData, setUsersData] = useState<UserDataType[]>([]);
  const [perPageCount, setPerPageCount] = useState(3);
  const [totalPages, setTotalPages] = useState(2);

  const [errorMessage, setErrorMessage] = useState("");

  const currentPageHandler = (e: React.ChangeEvent<unknown>, value: number) =>
    setCurrentPage(value);

  const pageStepHandler = (e: SelectChangeEvent) => {
    setPerPageCount(+e.target.value);
    setCurrentPage(1);
  };

  const url = `https://reqres.in/api/users?page=${currentPage}&per_page=${perPageCount}`;

  const getUsersData = async (controller: AbortController) => {
    try {
      const response = await fetch(url, { signal: controller.signal });
      const data = await response.json();
      setTotalPages(data.total_pages);
      setUsersData(data.data);
    } catch (e) {
      if (!(e instanceof Error)) return;
      if (e.name === "AbortError") return;
      else {
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
      <Box sx={{ padding: "0.5em" }}>
        <FormControl>
          <InputLabel id="pageStep">Count</InputLabel>
          <Select
            labelId="pageStep"
            id="pageStep-select"
            value={perPageCount.toString()}
            label="Count"
            sx={{ width: "200px" }}
            onChange={pageStepHandler}
          >
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
            <MenuItem value={12}>Twelve</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
