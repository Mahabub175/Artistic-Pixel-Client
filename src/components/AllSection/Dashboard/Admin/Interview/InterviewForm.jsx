import CustomDatePicker from "@/components/Reusable/Form/CustomDatePicker";
import CustomInput from "@/components/Reusable/Form/CustomInput";
import FileUploader from "@/components/Reusable/Form/FileUploader";

const InterviewForm = ({ attachment }) => {
  return (
    <>
      <FileUploader
        defaultValue={attachment}
        required={true}
        label={"Thumbnail Image"}
        name={"thumbnail_image"}
      />
      <CustomInput label={"Title"} name={"title"} required={true} />
      <CustomDatePicker
        label={"Published At"}
        name={"published_at"}
        required={true}
      />
      <div className="two-grid">
        <CustomInput
          label={"Interviewer Name"}
          name={"interviewer_name"}
          required={true}
        />
        <CustomInput
          label={"Interviewee Profession"}
          name={"interviewee_profession"}
          required={true}
        />
      </div>
    </>
  );
};

export default InterviewForm;
