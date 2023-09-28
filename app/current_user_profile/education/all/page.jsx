import ProfileExpeprienceAll from "@/app/components/profile/profileAbout/profileExpeprienceEducationAll";
import { currentUserDetails } from "@/app/_mock/current_user_details";

const AllJobs = () => {
  return <ProfileExpeprienceAll data={currentUserDetails.education} />;
};

export default AllJobs;
