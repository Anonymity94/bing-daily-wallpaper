export interface IImg {
  startdate: string;
  fullstartdate: string;
  enddate: string;
  url: string;
  urlbase: string;
  copyright: string;
  copyrightlink: string;
  title: string;
  quiz: string;
  wp: boolean;
  hsh: string;
  [key: string]: any;
}

export interface IResponse {
  images: IImg[];
  [key: string]: any;
}
