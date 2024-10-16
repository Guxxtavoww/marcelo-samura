import { Banner } from './_containers/banner';
import { Hakusho } from './_containers/hakusho';
import { Humanize } from './_containers/humanize';
import { KickingTheBucket } from './_containers/kicking-the-bucket';

export default function WorkshopsPage() {
  return (
    <>
      <Banner />
      <Humanize />
      <KickingTheBucket />
      <Hakusho />
    </>
  );
}
