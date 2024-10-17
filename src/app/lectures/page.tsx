import { BeMoreHuman } from './_containers/be-more-human';
import { CompanyDrugs } from './_containers/company-drugs';
import { Entrepreneurship } from './_containers/entrepreneurship';
import { FamilyDrugs } from './_containers/family-drugs';
import { HumanBehavior } from './_containers/human-behavior';

export default function LecturesPage() {
  return (
    <>
      <BeMoreHuman />
      <HumanBehavior />
      <FamilyDrugs />
      <CompanyDrugs />
      <Entrepreneurship />
    </>
  );
}
