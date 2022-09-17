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

interface ReligiousInfoProps {
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  activeStep: number;
}

const ReligiousInfo: React.FC<ReligiousInfoProps> = ({
  nextStep,
  prevStep,
  //   reset,
  activeStep,
}) => {
  return (
    <Center className="flex flex-col">
      <Box p="8" bg="white" className="rounded-10 w-500">
        <FormControl variant="floating" id="first-name" isRequired isInvalid>
          <Input placeholder=" " />
          <FormLabel>Last name</FormLabel>
          <FormHelperText>Keep it very short and sweet!</FormHelperText>
          <FormErrorMessage>Your First name is invalid</FormErrorMessage>
        </FormControl>
      </Box>
      <Flex w="500px" justify="flex-end">
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
          {"Next"}
        </Button>
      </Flex>
    </Center>
  );
};

export default ReligiousInfo;
