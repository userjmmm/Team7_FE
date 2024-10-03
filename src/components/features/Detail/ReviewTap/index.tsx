import { AiFillLike, AiFillDislike } from 'react-icons/ai';

import styled from 'styled-components';

import { Paragraph } from '@/components/common/typography/Paragraph';

import BarGraph from './BarGraph';
import Review from './Review';

const list = [
  {
    reviewId: 1,
    likes: true,
    comment: '정말 좋았어요! 다음에 또 오고 싶습니다',
    userNickname: '사용자1',
    createdDate: new Date('2024-10-01T12:00:00Z'),
  },
  {
    reviewId: 2,
    likes: false,
    comment: '별로였어요. 개선이 필요합니다.',
    userNickname: '사용자2',
    createdDate: new Date('2024-10-02T15:30:00Z'),
  },
  {
    reviewId: 3,
    likes: true,
    comment: '맛있고 분위기도 좋았습니다',
    userNickname: '사용자3',
    createdDate: new Date('2024-10-03T09:15:00Z'),
  },
  {
    reviewId: 4,
    likes: false,
    comment: '서비스가 아쉬웠습니다',
    userNickname: '사용자4',
    createdDate: new Date('2024-10-03T11:45:00Z'),
  },
];
export default function ReviewTap() {
  const like = 120;
  const dislike = 10;
  return (
    <Wrapper>
      <CountLike>
        <AiFillLike size={50} color="#fe7373" />
        <BarGraph likes={like} dislikes={dislike} />
        <AiFillDislike size={50} color="#6F6CFF" />
      </CountLike>
      <Paragraph size="m" weight="bold" variant="white">
        <span style={{ color: '#55EBFF' }}>리뷰</span> 한마디
      </Paragraph>
      <Review items={list} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 30px 80px;
`;
const CountLike = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
`;
