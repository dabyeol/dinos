import Book from '@/components/book';
import Button from '@/components/button';
import ImageCard from '@/components/card/image-card';
import ImageCardRect from '@/components/card/image-card-rect';
import CardSlider from '@/components/slider/card-slider';
import Titlebar from '@/components/titlebar';
import { Container, Wrapper } from '@/lib/styles';
import { getUnsplashUrl } from '@/lib/utils';

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Titlebar title="도시" />
        <CardSlider title="지금 뜨는 도시">
          <ImageCardRect
            description="태국"
            title="방콕"
            src={getUnsplashUrl('uDDGsbYdk3k')}
          />
          <ImageCardRect
            description="인도네시아"
            title="발리"
            src={getUnsplashUrl('MdKJ0JNiy-k')}
          />
          <ImageCardRect
            description="튀르키예"
            title="이스탄불"
            src={getUnsplashUrl('0n0AHB1fgTQ')}
          />
          <ImageCardRect
            description="포르투갈"
            title="리스본"
            src={getUnsplashUrl('hgFX7SydvFk')}
          />
          <ImageCardRect
            description="태국"
            title="치앙마이"
            src={getUnsplashUrl('gwPMyVo7-0E')}
          />
        </CardSlider>
        <CardSlider title="맞춤 추천 도시">
          <ImageCardRect
            description="인도네시아"
            title="발리"
            src={getUnsplashUrl('MdKJ0JNiy-k')}
          />
          <ImageCardRect
            description="태국"
            title="치앙마이"
            src={getUnsplashUrl('gwPMyVo7-0E')}
          />
          <ImageCardRect
            description="태국"
            title="방콕"
            src={getUnsplashUrl('uDDGsbYdk3k')}
          />
          <ImageCardRect
            description="튀르키예"
            title="이스탄불"
            src={getUnsplashUrl('0n0AHB1fgTQ')}
          />
          <ImageCardRect
            description="포르투갈"
            title="리스본"
            src={getUnsplashUrl('hgFX7SydvFk')}
          />
        </CardSlider>
      </Wrapper>

      <Wrapper>
        <Titlebar title="매거진" more />
        <ImageCard title="태국에서 살기" src={getUnsplashUrl('uDDGsbYdk3k')} />
        <ImageCard
          title="11월에 가기 좋은 도시"
          src={getUnsplashUrl('jqkGK3ofxi8')}
        />
        <Button title="더보기" />
      </Wrapper>

      <Wrapper>
        <Titlebar title="가이드" more />
        <CardSlider>
          <Book title="디지털 노마드란 무엇일까?" color="#096" />
          <Book title="디지털 노마드 준비하기" color="#c80" />
          <Book title="일하기 좋은 곳 찾기" color="#08c" />
        </CardSlider>
      </Wrapper>
    </Container>
  );
}
