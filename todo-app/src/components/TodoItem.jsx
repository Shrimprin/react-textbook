import { ListItem, Text, Flex, Button, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function TodoItem({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) {
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  const label = todo.done ? "Move Doing" : "Move Done";
  const setColorScheme = todo.done ? "pink" : "blue";

  return (
    <ListItem
      borderWidth="1px"
      p="4"
      mt="4"
      bg="white"
      borderRadius="md"
      borderColor="gray.300"
    >
      <Text mb="6">{todo.content}</Text>
      <Flex align="center" justify="flex-end">
        <Button
          colorScheme={setColorScheme}
          variant="outline"
          size="sm"
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>
        <IconButton
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
          onClick={handleDeleteTodoListItem}
        ></IconButton>
      </Flex>
    </ListItem>
  );
}
