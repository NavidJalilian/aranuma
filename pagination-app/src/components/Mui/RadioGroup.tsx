import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import { Box } from "@mui/system";
import { MuiRadioGroupType } from "../../types/types";

export default function MuiRadioGroup(props: MuiRadioGroupType) {
  const { label, value, changeHandler, children } = props;
  return (
    <FormControl>
      <Box>
        <Box sx={{ marginBottom: "0.5em" }}>
          <FormLabel id={label}>{label}</FormLabel>
        </Box>
        <RadioGroup
          row
          aria-labelledby={label}
          name={`${label}-radio-group`}
          value={value}
          onChange={changeHandler}
        >
          {children}
        </RadioGroup>
      </Box>
    </FormControl>
  );
}
