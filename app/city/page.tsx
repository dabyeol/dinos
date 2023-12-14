import Book from '@/components/book';
import Button from '@/components/button';
import ImageCard from '@/components/card/image-card';
import ImageCardRect from '@/components/card/image-card-rect';
import Minimap from '@/components/minimap';
import Slider from '@/components/slider';
import CardSlider from '@/components/slider/card-slider';
import Titlebar from '@/components/titlebar';
import { Container, Section } from '@/lib/styles';
import { getUnsplashUrl } from '@/lib/utils';

export default function City() {
  return (
    <Container>
      <Section>
        <Titlebar title="장소" />
        <CardSlider title="지금 뜨는 장소">
          <ImageCardRect
            description="여행지"
            title="로하 프라삿"
            src={getUnsplashUrl('B64B6-kAWlw')}
          />
          <ImageCardRect
            description="여행지"
            title="차이나타운"
            src={getUnsplashUrl('-y3sidWvDxg')}
          />
          <ImageCardRect
            description="공유오피스"
            title="Bat Haus"
            src={getUnsplashUrl('dZxQn4VEv2M')}
          />
        </CardSlider>
        <CardSlider title="일할 곳 찾기">
          <ImageCardRect
            description="공유오피스"
            title="Bat Haus"
            src={getUnsplashUrl('dZxQn4VEv2M')}
          />
          <ImageCardRect
            description="카페"
            title="Cafe 1985"
            src={getUnsplashUrl('sYpq2Fhy4mY')}
          />
          <ImageCardRect
            description="공유오피스"
            title="myHQ"
            src={getUnsplashUrl('VCoh27vHEh0')}
          />
        </CardSlider>
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
        <ImageCard title="태국에서 살기" src={getUnsplashUrl('uDDGsbYdk3k')} />
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
  );
}
