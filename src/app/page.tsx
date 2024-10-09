import { Banner } from './_containers/banner';
import { HowDoesItWork } from './_containers/how-does-it-work';
import { MentoringProgram } from './_containers/mentoring-program';
import { WillItWorkForMe } from './_containers/will-it-work-for-me';
import { PersonalMentoryMp } from './_containers/personal-mentory-mp';
import { ParticipationWidget } from './_components/participation-widget';
import { WhatIsSamuraMentorship } from './_containers/what-is-samura-mentorship';

export default function Home() {
  return (
    <main className="absolute top-20 left-0 w-full min-h-[calc(100svh-80px)]" id="#">
      <div className="mx-auto w-full max-w-[1428px]">
        <Banner />
        <MentoringProgram />
        <WhatIsSamuraMentorship />
        <WillItWorkForMe />
        <ParticipationWidget />
        <HowDoesItWork />
        <PersonalMentoryMp />
      </div>
    </main>
  );
}
