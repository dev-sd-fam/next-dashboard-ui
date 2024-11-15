"use client";

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  return (
    <form>
      <input type="text" defaultValue={data} />
    </form>
  );
};
export default TeacherForm;
