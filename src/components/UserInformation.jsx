import { Button, Card, Stack, TextField } from "@mui/material";
import React from "react";
import { useFieldArray } from "react-hook-form";

const UserInformation = (props) => {
  const { register, control } = props;
  const { append, fields, remove } = useFieldArray({
    control,

    name: "users",
  });
  return (
    <Stack padding={"1em"}>
      <Card padding="1em">
        {fields &&
          fields.map((item, index) => (
            <Stack direction={"row"} spacing={2}>
              <TextField
                type={"text"}
                id="fullname"
                placeholder="Full Name"
                fullWidth
                name={`users[${index}].full_name`}
                {...register(`users[${index}].full_name`)}
                defaultValue={item.full_name}
              />
              <TextField
                type={"email"}
                id="email"
                fullWidth
                placeholder="Email"
                {...register(`users[${index}].email`)}
                name={`users[${index}].email`}
                defaultValue={item.email}
              />
              <TextField
                type={"number"}
                id="phonenumber"
                placeholder="Phone Number"
                fullWidth
                name={`users[${index}].phone`}
                {...register(`users[${index}].phone`)}
                defaultValue={item.phone}
              />
              <Button
                onClick={() => append({ full_name: "", email: "", phone: "" })}
                variant="contained"
              >
                Add
              </Button>

              <Button
                onClick={() => remove(index)}
                variant="outlined"
                padding={"1em"}
                color="error"
              >
                Delete
              </Button>
            </Stack>
          ))}
      </Card>
      {!fields.length ? (
        <Button
          onClick={() => append({ full_name: "", email: "", phone: "" })}
          variant="contained"
        >
          Add
        </Button>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default UserInformation;
