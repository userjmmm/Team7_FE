const PRODUCTION_URL = 'http://localhost:8080'; // 나중에 실제 서버 주소로 변경 예정
const DEVELOPMENT_URL = 'http://localhost:8080';

const BASE_URL = PRODUCTION_URL || DEVELOPMENT_URL;

const getBaseUrl = (): string => {
  return BASE_URL;
};

export default getBaseUrl;
