import { Banner } from './_containers/banner';
import { GroupMentoryMG } from './_containers/group-mentory-mg';
import { HowDoesItWork } from './_containers/how-does-it-work';
import { MentoringProgram } from './_containers/mentoring-program';
import { WillItWorkForMe } from './_containers/will-it-work-for-me';
import { CouplesMentoryMC } from './_containers/couples-mentory-mc';
import { PersonalMentoryMp } from './_containers/personal-mentory-mp';
import { ParticipationWidget } from './_components/participation-widget';
import { BusinessMentoringME } from './_containers/business-mentoring-me';
import { WhatIsSamuraMentorship } from './_containers/what-is-samura-mentorship';
import { WhoIsPersonalMentorshipFor } from './_containers/who-is-personal-mentorship-for';
import { PremiumPersonalMentoryMPP } from './_containers/premium-personal-mentory-mpp';
import { Testemonials } from './_containers/testemonials';
import { About } from './_containers/about';
import { Faq } from './_containers/faq';
import { Contact } from './_containers/contact';

export default function Home() {
  return (
    <>
      <Banner />
      <MentoringProgram />
      <WhatIsSamuraMentorship />
      <WillItWorkForMe />
      <ParticipationWidget />
      <HowDoesItWork />
      <PersonalMentoryMp />
      <WhoIsPersonalMentorshipFor />
      <CouplesMentoryMC />
      <GroupMentoryMG />
      <BusinessMentoringME />
      <PremiumPersonalMentoryMPP />
      <Testemonials />
      <Faq />
      <About />
      <Contact />
    </>
  );
}
