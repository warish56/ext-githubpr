
import React from 'react';
import { aboutUsMetaData } from '@/constants/MetaData/aboutUs';
import { Metadata } from 'next';
import AboutUsPage from './_components/page';

export const metadata: Metadata = aboutUsMetaData;


const Page = () => {
    return <AboutUsPage/>
};

export default Page;