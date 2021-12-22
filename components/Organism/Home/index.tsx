import React from 'react';
import Feedback from '../General/Feedback';
import BlogSection from './Blog';
import HeaderSection from './Header';
import HopeSection from './Hope';
import PortofolioSection from './Portofolio';
import SkillSetSection from './SkillSet';
import SummarySection from './Summary';

export default function HomeComponent(props: any) {
  const { posts } = props;

  return (
    <>
      <HeaderSection />
      <SummarySection />
      <HopeSection />
      <SkillSetSection />
      <PortofolioSection />
      <BlogSection posts={posts} />
      <Feedback />
    </>
  );
}
