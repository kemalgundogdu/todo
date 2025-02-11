import { getTasks, deleteTask, completeTask } from "../api";
import {
  Button,
  IconButton,
  Fieldset,
  Flex,
  List,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// icons
import { FaCheck } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function TakeTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((data) => setTasks(data.tasks));
  }, [tasks]);

  const handleDeleteTask = (id) => async () => {
    await deleteTask(id);
  };

  const handleCompleteTask = (id) => async () => {
    await completeTask(id);
  }

  return (
    <>
      <Fieldset.Content mt={7}>
        {/* örnek tasklar */}
        <Fieldset.HelperText mt={-2}>
          <List.Root spacing={3}>
            <List.Item>
              {tasks.map((task) => (
                <Flex
                  key={task._id}
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={"1px solid #27272a"}
                  pb={2}
                  mb={2}
                >
                  <Text
                    px={2}
                    {...(task.completed && { textDecoration: "line-through", color: "gray", opacity: 0.7 })}
                  >
                    {task.title}
                  </Text>
                  <Flex gap={2}>
                    <Button
                      {...(task.completed
                        ? { colorPalette: "green" }
                        : { colorPalette: "gray" })}
                      variant="outline"
                      border={"none"}
                      p={1}
                      onClick={handleCompleteTask(task._id)}
                    >
                      {task.completed ? (
                        <FaCheck />
                      ) : (
                        <MdCheckBoxOutlineBlank />
                      )}
                    </Button>
                    <IconButton
                      onClick={handleDeleteTask(task._id)}
                      colorPalette="gray"
                      variant="outline"
                      p={1}
                    >
                      <IoMdClose />
                    </IconButton>
                  </Flex>
                </Flex>
              ))}
            </List.Item>
          </List.Root>
        </Fieldset.HelperText>
      </Fieldset.Content>
    </>
  );
}

export default TakeTask;
