import FamilyInfo from "./Stepper/FamilyInfo";
import InterestInfo from "./Stepper/InterestInfo";
import ProfessionalInfo from "./Stepper/ProfessionalInfo";
import ReligiousInfo from "./Stepper/ReligiousInfo";
import UserInfo from "./Stepper/UserInfoForm";

interface FormStepsProps {
  index: number;
  label: string;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  activeStep: number;
}

const FormSteps: React.FC<FormStepsProps> = ({
  // index,
  label,
  nextStep,
  prevStep,
  reset,
  activeStep,
}) => {
  // const [userData, setuserData] = useState<any>({
  //   basicInfo: {
  //     name: "",
  //     email:"",
  //   },
  //   religiousInfo: {
  //     caste: "",
  //     religion:"",
  //   },
  //   professionalInfo: {
  //     education: "",
  //     college:"",
  //   },
  //   familyInfo: {
  //     familyType: "",
  //     familyStatus: "",
  //   },
  //   interests: {
  //     food: "",
  //     music:"",
  //   }
  // });

  // const handleChange = (section:string,key: string) => {
  //   const sec = userData[section];
  //   sec[key] =
  // }

  switch (label) {
    case "Basic Details":
      return (
        <UserInfo
          prevStep={prevStep}
          nextStep={nextStep}
          reset={reset}
          activeStep={activeStep}
        />
      );
    case "Religious Information":
      return (
        <ReligiousInfo
          prevStep={prevStep}
          nextStep={nextStep}
          reset={reset}
          activeStep={activeStep}
        />
      );
    case "Professional Information":
      return (
        <ProfessionalInfo
          prevStep={prevStep}
          nextStep={nextStep}
          reset={reset}
          activeStep={activeStep}
        />
      );
    case "Family Details":
      return (
        <FamilyInfo
          prevStep={prevStep}
          nextStep={nextStep}
          reset={reset}
          activeStep={activeStep}
        />
      );
    case "Hobbies and Interests":
      return (
        <InterestInfo
          prevStep={prevStep}
          nextStep={nextStep}
          reset={reset}
          activeStep={activeStep}
        />
      );
    default:
      return <></>;
  }
};

export default FormSteps;
