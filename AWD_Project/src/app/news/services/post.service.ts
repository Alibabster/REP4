import {Injectable} from '@angular/core';
import {PostingService} from './posting.service';

@Injectable()
export class PostService {

  constructor(private postingService: PostingService) {}
  // tslint:disable-next-line:typedef
  getPost() {
    let postList: post[];
    postList = [
      new post('Reducing corruption in East Kazakhstan',
        'As a result of recent inspections, a 15% decrease in the level of corruption in East Kazakhstan was noted. This is due to the increased incidence of corruption detection in the past year.',
        'https://obankax.com/wp-content/uploads/2017/12/blobid1513806821304-640x469.jpg'),
      new post('Civil servants involved in fraud have been identified and detained',
        'Two days ago, civil servants involved in fraud were identified and detained. The suspects are accused of fraudulent manipulation of state Tendars.',
        'https://24.kz/media/k2/items/cache/e9b505f943ac78aefbe157f42c5d9432_XL.jpg'),
      new post('Citizens who reported cases of corruption and fraud were rewarded',
        'Over the past half a year, 15 citizens have been awarded for reporting cases of corruption and fraud.',
        'https://tobolinfo.kz/wp-content/uploads/2018/10/1509346981_tenge.jpg'),
      new post('The school principal was convicted of fraud',
        'According to the data, the director made arbitrary penalties and extortions from schoolchildren and school teachers for 4 years, and also blackmailed employees to dismiss in case of refusal to pay the extortions.',
        'https://retina.news.mail.ru/pic/57/81/main43187953_c6d955de9de6446566fb36c0f1d9efea.jpg'),
      new post('4 law enforcement officers were fired',
        'Yesterday, 4 law enforcement officers were fired for accepting a bribe totaling 20,000,000 tenge',
        'https://rus.azattyq-ruhy.kz/cache/imagine/main_page_full/uploads/news/2020/02/05/5e3ae7917afc0712984946.jpg'),
      new post('It was instructed to find new executors of the state order for the construction of a residential building',
        'It was instructed to find new executors of the state order for the construction of a residential building',
        'https://baigenews.kz/upload/iblock/a29/ca71252387cd65e0d26dab26efcaf44a_crop_l_66_t_9_w_931_h_524.jpg'),
    ];

    this.postingService.log('List of users: ' + postList);

    return postList;
  }
}
// tslint:disable-next-line:class-name
export class post {
  title: string;
  text: string;
  img: string;

  constructor(title, text, img) {
    this.title = title;
    this.text = text;
    this.img = img;
  }
}
