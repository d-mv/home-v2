import { DetailsPhotos } from '../types';

enum PictureSize {
  xxl = 3000,
  xl = 2300,
  l = 1800,
  m = 1000,
  s = 500
}

export const imageSize = (photo: DetailsPhotos) => {
  const width = window.screen.width
  // TODO: upscale?
  // const width = window.screen.width * window.devicePixelRatio;
  let result = photo.s;
  if (width > PictureSize.s && width <= PictureSize.m) result = photo.m;
  if (width > PictureSize.m && width <= PictureSize.l) result = photo.l;
  if (width > PictureSize.l && width <= PictureSize.xl) result = photo.xl;
  if (width > PictureSize.xl) result = photo.xxl;
  return result;
};
export const cardImageSize = (photo: string[]) => {
  const width = window.screen.width * window.devicePixelRatio;
  let result = photo[0];
  if (photo[1] && width > 300) result = photo[1];
  return result;
};
