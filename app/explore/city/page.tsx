'use client';

import Book from '@/components/book';
import Button from '@/components/button';
import ImageCard from '@/components/card/image-card';
import CityInfo from '@/components/city-info';
import Heading from '@/components/heading';
import Minimap from '@/components/minimap';
import Slider from '@/components/slider';
import CardSlider from '@/components/slider/card-slider';
import Titlebar from '@/components/titlebar';
import { Container, Section } from '@/lib/styles';
import { getUnsplashUrl } from '@/lib/utils';
import styled from '@emotion/styled';
import {
  Clock,
  CurrencyDollar,
  Drop,
  FaceMask,
  Globe,
  Money,
  Plug,
  ThermometerSimple,
  Umbrella,
  WifiHigh,
} from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: -8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
`;

export default function Explore() {
  const router = useRouter();

  return (
    <>
      <ImageWrapper>
        <Image src={getUnsplashUrl('uDDGsbYdk3k')} fill alt="방콕" />
      </ImageWrapper>
      <Container>
        <Section>
          <Heading
            title="방콕"
            count={123}
            countryCode="th"
            description="태국"
          />
          <Grid>
            <CityInfo Icon={ThermometerSimple} title="기온" value="24°/32°" />
            <CityInfo Icon={Drop} title="습도" value="70%" />
            <CityInfo Icon={Umbrella} title="비 오는 날" value="5일" />
            <CityInfo Icon={FaceMask} title="대기질" value="70 AQI" />
            <CityInfo Icon={WifiHigh} title="인터넷" value="28 Mbps" />
            <CityInfo Icon={CurrencyDollar} title="생활비" value="1,338" />
            <CityInfo Icon={Globe} title="언어" value="태국어" />
            <CityInfo Icon={Clock} title="시차" value="-2시간" />
            <CityInfo Icon={Plug} title="플러그" value="호환(A,B,C,F)" />
            <CityInfo Icon={Money} title="환율" value="37.24" />
          </Grid>
          <Button
            title="도시 추가하기"
            primary
            onClick={() => router.push('/city')}
          />
        </Section>

        <Section>
          <Titlebar title="미니맵" more />
          <Slider>
            <Minimap src="/images/minimaps/1.png" />
            <Minimap src="/images/minimaps/2.png" />
            <Minimap src="/images/minimaps/3.png" />
          </Slider>
        </Section>

        <Section>
          <Titlebar title="매거진" more />
          <ImageCard
            title="태국에서 살기"
            src={getUnsplashUrl('uDDGsbYdk3k')}
          />
          <ImageCard
            title="11월에 가기 좋은 도시"
            src={getUnsplashUrl('jqkGK3ofxi8')}
          />
          <Button title="더보기" />
        </Section>

        <Section>
          <Titlebar title="가이드" more />
          <CardSlider>
            <Book title="태국 A to Z" color="#08c" />
            <Book title="태국 여행 준비하기" color="#c80" />
          </CardSlider>
        </Section>
      </Container>
    </>
  );
}
