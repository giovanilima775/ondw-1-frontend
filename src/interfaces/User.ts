export interface INft {
  id: string;
  name: string;
  hash: string;
  price: string;
  photoUrl: string;
  likedByUser: boolean;
  likes: number;
}

export interface IAuthoredCollection {
  id: string;
  name: string;
  nfts: INft[];
  totalLikes: number;
}

export interface IGetUserByIdResponse {
  id: string;
  name: string;
  email: string;
  authoredCollections: IAuthoredCollection[];
  totalLikesInAuthoredCollections: number;
  likedNfts: any[];
}