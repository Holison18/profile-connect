import { useParams, Navigate } from "react-router-dom";
import { getEmployeeBySlug } from "@/data/employees";
import ProfileCard from "@/components/ProfileCard";

const ProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const employee = getEmployeeBySlug(slug);

  if (!employee) {
    return <Navigate to="/404" replace />;
  }

  return <ProfileCard employee={employee} />;
};

export default ProfilePage;
