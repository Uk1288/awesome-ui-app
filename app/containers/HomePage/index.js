import React from 'react';
import SoundCard from '../../components/SoundCard';
import ConcertCard from '../../components/ConcertCard';
import SeatsCard from '../../components/SeatsCard';
import PerksCard from '../../components/PerksCard';
import ReviewsCard from '../../components/ReviewsCard';
import DownloadCard from '../../components/DownloadCard';
import ContactCard from '../../components/ContactCard';

export default function HomePage() {
  return (
    <>
      <ConcertCard />
      <SoundCard />
      <SeatsCard />
      <PerksCard />
      <ReviewsCard />
      <DownloadCard />
      <ContactCard />
    </>
  );
}
