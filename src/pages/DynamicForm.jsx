import React from "react";
import {
  Stack,
  Card,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  FormLabel,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import UserInformation from "../components/UserInformation";
const DynamicForm = () => {
  const { register, handleSubmit, control } = useForm();
  const basicForm = (
    <Card sx={{ width: "80%" }}>
      <Stack alignItems={"center"} width={"100%"}>
        <Stack spacing={2} padding={"1em"} width={"70vw"}>
          <Stack direction={"column"} alignItems="flex-start" spacing={1}>
            <Typography>Full Name</Typography>
            <TextField
              type={"text"}
              id="fullname"
              fullWidth
              name="userData.full_name"
              {...register("userData.full_name")}
            />
          </Stack>
          <Stack direction={"column"} alignItems="flex-start" spacing={1}>
            <Typography>Email Address</Typography>
            <TextField
              type={"email"}
              id="email"
              fullWidth
              {...register("userData.email")}
              name="userData.email"
            />
          </Stack>
          <Stack direction={"column"} alignItems="flex-start" spacing={1}>
            <Typography>Phone Number</Typography>
            <TextField
              type={"number"}
              id="phonenumber"
              fullWidth
              name="userData.phone"
              {...register("userData.phone")}
            />
          </Stack>
          <Stack direction={"column"} alignItems="flex-start" spacing={1}>
            <Typography>Password</Typography>
            <TextField
              type={"password"}
              id="password"
              fullWidth
              {...register("userData.password")}
              name="userData.password"
            />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
  const onSubmit = (data) => {
    console.log("basicForm", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {basicForm}
        <UserInformation register={register} control={control} />
        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DynamicForm;
