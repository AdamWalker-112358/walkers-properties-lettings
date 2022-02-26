import * as React from "react"
import SectionLettings from "../components/section-letting";
import SectionManagement from "../components/section-management";
import SectionCouncil from "../components/section-council";

// markup
const IndexPage = () => {
  return (
    <>
      <SectionLettings></SectionLettings>
      <SectionManagement></SectionManagement>
      <SectionCouncil></SectionCouncil>
    </>
  )
}

export default IndexPage
