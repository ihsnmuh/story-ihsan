import React from 'react';
import Feedback from '../General/Feedback';
import HeaderSection from './Header';
import HopeSection from './Hope';
import PortofolioSection from './Portofolio';
import SkillSetSection from './SkillSet';
import SummarySection from './Summary';

export default function HomeComponent() {
  return (
    <>
      <HeaderSection />
      <SummarySection />
      <HopeSection />
      <SkillSetSection />
      <PortofolioSection />
      <Feedback />
    </>
  );
}
