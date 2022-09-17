import {
  Center,
  Box,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { UserPageContext } from "../UserContext";

interface UserInfoProps {
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  activeStep: number;
}

const UserInfo: React.FC<UserInfoProps> = ({
  nextStep,
  prevStep,
  reset,
  activeStep,
}) => {
  const { userDetails, onInputChange } = useContext(UserPageContext);
  const { name, email, age } = userDetails?.data;

  return (
    <Center className="flex flex-col">
      <Flex
        flexDir="column"
        p="8"
        bg="white"
        className="rounded-10 md:w-500"
        gap="30px"
      >
        <FormControl variant="floating" id="name" isRequired>
          <Input
            name="name"
            value={name}
            onChange={(e: any) => onInputChange(e.target.name, e.target.value)}
          />
          <FormLabel>Name</FormLabel>
        </FormControl>
        <FormControl variant="floating" id="email" isRequired>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={(e: any) => onInputChange(e.target.name, e.target.value)}
          />
          <FormLabel>Email</FormLabel>
        </FormControl>
        <FormControl variant="floating" id="email" isRequired>
          <Input
            name="age"
            type=""
            value={age}
            onChange={(e: any) => onInputChange(e.target.name, e.target.value)}
          />
          <FormLabel>Age</FormLabel>
        </FormControl>
      </Flex>
      <Flex className="md:w-500 mt-20" justify="flex-end">
        <Button
          isDisabled={activeStep === 0}
          mr={4}
          onClick={prevStep}
          size="sm"
          variant="ghost"
        >
          Prev
        </Button>
        <Button size="sm" onClick={nextStep}>
          Next
        </Button>
      </Flex>
    </Center>
  );
};

export default UserInfo;
