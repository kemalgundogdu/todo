import { useState } from "react";
import { Button, Fieldset, Input, Flex, Stack } from "@chakra-ui/react";
import { Field } from "./ui/field";
// icons
import { FiPlus } from "react-icons/fi";
// api
import { addTask } from "../api";

function AddTask() {
  const [title, setTitle] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title) alert("Please enter a task.");
    addTask({ title });
    setTitle("");
  };

  const onChangeInput = (e) => {
    setTitle(e.target.value);
  }
  return (
    <>
      <Stack>
        <Fieldset.Legend>CatDo - To do</Fieldset.Legend>
        <Fieldset.HelperText mt={-1}>
          Add your tasks and get them done.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content mt={4}>
        <form action="" onSubmit={handleAddTask}>
          <Flex gap={2}>
            <Field>
              <Input value={title} onChange={onChangeInput} name="title" px={3} placeholder="Task" />
            </Field>
            <Button type="submit" colorPalette="green" variant="surface" p={2}>
              <FiPlus />
            </Button>
          </Flex>
        </form>
      </Fieldset.Content>
    </>
  );
}

export default AddTask;
