import { CarImages } from '../entities/CarImages';
import { config } from './config';

export function imageFormated(images: String[]): CarImages[] {
  const res = images.map((image) => {
    const data = {
      id: image.split('.')[0],
      name: image.split('.')[0],
      link: config.BASE_URL + '/uploads' + image,
    };

    return data;
  });
  return res;
}
