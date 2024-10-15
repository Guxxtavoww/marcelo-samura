'use server';

import type { AboutForm } from '@/app/_containers/about';

export async function aboutFormAction(formData: AboutForm) {
  console.log(formData);
}
