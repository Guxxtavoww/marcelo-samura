import { Banner } from './_containers/banner';
import { HowDoesItWork } from './_containers/how-does-it-work';
import { MentoringProgram } from './_containers/mentoring-program';
import { WillItWorkForMe } from './_containers/will-it-work-for-me';
import { PersonalMentoryMp } from './_containers/personal-mentory-mp';
import { ParticipationWidget } from './_components/participation-widget';
import { WhatIsSamuraMentorship } from './_containers/what-is-samura-mentorship';
import { WhoIsPersonalMentorshipFor } from './_containers/who-is-personal-mentorship-for';

export default function Home() {
  return (
    <main
      id="#"
      className="absolute top-[140px] left-1/2 -translate-x-1/2 w-full max-w-[1428px] px-3 max-md:px-1.5"
    >
      <Banner />
      <MentoringProgram />
      <WhatIsSamuraMentorship />
      <WillItWorkForMe />
      <ParticipationWidget />
      <HowDoesItWork />
      <PersonalMentoryMp />
      <WhoIsPersonalMentorshipFor />
    </main>
  );
}
