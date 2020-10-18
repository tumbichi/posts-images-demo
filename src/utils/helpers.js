import { saveAs } from 'file-saver';

// eslint-disable-next-line import/prefer-default-export
export const convertImageURLtoThumbnailURL = (downloadUrl) => {
  const arrSplited = downloadUrl.split('/');
  const height = Math.floor(Number.parseInt(arrSplited[5], 10) * 0.25);
  const width = Math.floor(Number.parseInt(arrSplited[6], 10) * 0.25);

  return `${arrSplited[0]}//${arrSplited[2]}/${arrSplited[3]}/${arrSplited[4]}/${height}/${width}`;
};

export const changeDimensionToImageURL = (downloadUrl, ratio) => {
  const arrSplited = downloadUrl.split('/');
  const width = Math.floor(Number.parseInt(arrSplited[5], 10) * ratio);
  const height = Math.floor(Number.parseInt(arrSplited[6], 10) * ratio);

  return {
    url: `${arrSplited[0]}//${arrSplited[2]}/${arrSplited[3]}/${arrSplited[4]}/${width}/${height}`,
    height,
    width,
  };
};

export const addThumbnailTo = (posts) => {
  return posts.map((post) => {
    return { ...post, thumbnail_url: convertImageURLtoThumbnailURL(post.download_url) };
  });
};

export const downloadImage = (url) => {
  saveAs(url, 'image');
};
