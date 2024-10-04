export type BannerData = {
  bannerId: number;
  placeId: string;
  description: string;
  bannerImg: string;
  title: string;
};

export type InfluencerData = {
  influencerId: number;
  influencerName: string;
  influencerImgUrl: string;
  influencerJob: string;
  likes?: boolean;
};

export type SpotData = {
  videoId: number;
  videoAlias: string;
  videoUrl: string;
  place: {
    placeId: number;
    placeName: string;
  };
};

export type PlaceInfo = {
  placeId: number;
  placeName: string;
  address: {
    address1: string;
    address2: string;
    address3: string;
  };
  category: string;
  influencerName: string;
  longitude: string;
  latitude: string;
  likes: boolean;
  facilityInfo: FacilityInfo;
  menuInfos: {
    menuImgUrls: [string];
    menuList: [Menu];
    timeExp: Date;
  };
  openHour: OpenHourData;
  placeLikes: {
    like: number;
    dislike: number;
  };
  videoUrl: string;
};

export type FacilityInfo = {
  wifi: boolean;
  pet: boolean;
  parking: boolean;
  forDisabled: boolean;
  nursery: boolean;
  smokingRoom: boolean;
};

export type Menu = {
  price: number;
  recommend: boolean;
  menu: string;
};

export type ReviewData = {
  reviewId?: number;
  likes: boolean;
  comment: string;
  userNickname: string;
  createdDate: Date;
};

export type OpenHourData = {
  periodList: {
    timeName: string;
    timeSE: string;
    dayOfWeek: string;
  }[];
  offdayList: {
    holidayName: string;
    weekAndDay: string;
    temporaryHolidays: string;
  }[];
};
