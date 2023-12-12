'use client';

import CityCard from '@/components/card/city-card';
import Filter from '@/components/filter';
import Slider from '@/components/slider';
import Titlebar from '@/components/titlebar';
import { Container, Section } from '@/lib/styles';
import { getUnsplashUrl } from '@/lib/utils';
import {
  CalendarBlank,
  CurrencyDollar,
  Globe,
  Heart,
  MapTrifold,
  PoliceCar,
  ThermometerSimple,
  WifiHigh,
} from '@phosphor-icons/react';

export default function Explore() {
  return (
    <Container>
      <Section>
        <Titlebar title="도시" Icon1={Heart} Icon2={MapTrifold} />
        <Slider gap={12}>
          <Filter Icon={CalendarBlank} title="날짜" />
          <Filter Icon={ThermometerSimple} title="기온" />
          <Filter Icon={WifiHigh} title="인터넷" />
          <Filter Icon={CurrencyDollar} title="생활비" />
          <Filter Icon={PoliceCar} title="치안" />
          <Filter Icon={Globe} title="대륙" />
        </Slider>
        <CityCard
          src={getUnsplashUrl('uDDGsbYdk3k')}
          countryCode="th"
          title="방콕"
          description="태국"
          temperatureLow={24}
          temperatureHigh={32}
          internetSpeed={28}
          costOfLiving={1338}
        />
        <CityCard
          src={getUnsplashUrl('gwPMyVo7-0E')}
          countryCode="th"
          title="치앙마이"
          description="태국"
          temperatureLow={28}
          temperatureHigh={32}
          internetSpeed={28}
          costOfLiving={988}
        />
        <CityCard
          src={getUnsplashUrl('MdKJ0JNiy-k')}
          countryCode="id"
          title="발리"
          description="인도네시아"
          temperatureLow={24}
          temperatureHigh={32}
          internetSpeed={28}
          costOfLiving={988}
        />
      </Section>
    </Container>
  );
}
