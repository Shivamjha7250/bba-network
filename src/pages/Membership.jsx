import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/common/PageBanner";

import MembershipPlans from "../components/membership/MembershipPlans";
import MembershipBenefits from "../components/membership/MembershipBenefits";
import MembershipCompare from "../components/membership/MembershipCompare";
// import MembershipProcess from "../components/membership/MembershipProcess";
import MembershipForm from "../components/membership/MembershipForm";
import MembershipFAQ from "../components/membership/MembershipFAQ";

import CTA from "../components/home/CTA";

function Membership() {
  return (
    <>
      <Navbar />

      <PageBanner
        title="Membership"
        subtitle="Choose the perfect membership plan and grow your business with Bharat Business Alliance."
      />

      <MembershipPlans />

      <MembershipBenefits />

      <MembershipCompare />

      {/* <MembershipProcess /> */}

      <MembershipForm />

      <MembershipFAQ />

      <CTA />

      <Footer />
    </>
  );
}

export default Membership;