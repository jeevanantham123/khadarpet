import { Flex, Button } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FiClipboard, FiHeart, FiUser } from "react-icons/fi";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import FormSteps from "./FormSteps";
import { UserPageContext } from "./UserContext";
import { useContext } from "react";

interface RegComponentProps {}

const steps = [
  { label: "Basic Details", icon: FiUser },
  { label: "Religious Information", icon: FiClipboard },
  { label: "Professional Information", icon: FaGraduationCap },
  { label: "Family Details", icon: FaUsers },
  { label: "Hobbies and Interests", icon: FiHeart },
];

const RegComponent: React.FC<RegComponentProps> = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const {
    userDetails: { data, status },
    fetchUserDetails,
  } = useContext(UserPageContext);
  if (status === "idle") {
    console.log("API call");
    fetchUserDetails();
  } else if (status === "loading") {
    return <h2>Loading...</h2>;
  } else if (status === "succeeded") {
    return (
      <Flex flexDir="column" width="100%" className="p-20 md:p-80">
        <Steps activeStep={activeStep} orientation="vertical">
          {steps.map(({ label, icon }, index) => (
            <Step label={label} key={label} icon={icon}>
              <FormSteps
                index={index}
                label={label}
                prevStep={prevStep}
                nextStep={nextStep}
                reset={reset}
                activeStep={activeStep}
              />
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Flex px={4} py={4} width="100%" flexDirection="column">
            <Button mx="auto" mt={6} size="sm" onClick={reset}>
              Reset
            </Button>
          </Flex>
        ) : null}
      </Flex>
    );
  }
  return null;
};

export default RegComponent;
