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
import { display } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

const Home = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Stack alignItems={"center"} justifyContent="center" height={"100vh"}>
        <Card sx={{ width: "80%" }}>
          <Stack alignItems={"center"} width={"100%"}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <RadioGroup row>
                  <FormControlLabel
                    value={"female"}
                    control={<Radio />}
                    label="Female"
                    {...register("userData.gender")}
                    name="gender"
                  />
                  <FormControlLabel
                    value={"male"}
                    control={<Radio />}
                    label="Male"
                    name="gender"
                    {...register("userData.gender")}
                  />
                  <FormControlLabel
                    value={"others"}
                    control={<Radio />}
                    label="Others"
                    name="gender"
                    {...register("userData.gender")}
                  />
                </RadioGroup>
                <RadioGroup row>
                  <FormControlLabel
                    value={"others"}
                    control={<Checkbox />}
                    label="Others"
                    name="profession"
                    {...register("userData.profession")}
                  />
                  <FormControlLabel
                    value={"working"}
                    control={<Checkbox />}
                    label="Working"
                    name="profession"
                    {...register("userData.profession")}
                  />
                </RadioGroup>
              </Stack>
              <Stack></Stack>
              <Stack padding={"1em"}>
                <Button fullWidth type="Submit" variant="contained">
                  Submit
                </Button>
              </Stack>
            </form>
          </Stack>
        </Card>
      </Stack>
    </>
  );
};

export default Home;
