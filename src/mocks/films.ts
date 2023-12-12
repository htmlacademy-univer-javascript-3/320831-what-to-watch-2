import { IFilm } from '../data/abstractions';
import { IReview } from '../data/abstractions/IReview';
import Catalog from '../data/enums/catalog';

const reviews: IReview[] = [
  {
    review:'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed films in years.',
    author: 'Kate Muir',
    date: 'December 24, 2016',
    rating: 8.9
  },
  {
    review:'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    author: 'Bill Goodykoontz',
    date: 'November 18, 2015',
    rating: 8
  },
  {
    review:'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
    author: 'Amanda Greever',
    date: 'November 18, 2015',
    rating: 8
  },
  {
    review:'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    author: 'Matthew Lickona',
    date: 'December 20, 2016',
    rating: 7.213
  },
  {
    review:'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: 'December 20, 2016',
    rating: 7.6
  },
  {
    review:'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    author: 'Paula Fleri-Soler',
    date: 'December 20, 2016',
    rating: 7
  }
];

export const films: IFilm[] = [
  {
    id: '1',
    title: 'Big Buck Bunny',
    thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Vlc Media Player',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org',
    subscriber: '25254545 Subscribers',
    isLive: true,
    genre: Catalog.Comedies,
    starrings: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Jeff Goldblum'],
    ratingScore: 8.98989,
    ratingCount: 230,
    reviews,
    likeThis: ['2','3']
  },
  {
    id: '2',
    title: 'The first Blender Open Movie from 2006',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
    duration: '12:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Blender Inc.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: true,
    genre: Catalog.Crime,
    starrings: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Jeff Goldblum'],
    ratingScore: 10,
    ratingCount: 2,
    reviews: reviews.slice(0,2),
    likeThis: ['1','3','4']
  },
  {
    id: '3',
    title: 'Revenant',
    thumbnailUrl: 'img/revenant.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: true,
    genre: Catalog.Documentary,
    starrings: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Jeff Goldblum'],
    ratingScore: 2.9,
    ratingCount: 500,
    reviews: [],
    likeThis: ['2','3']
  },
  {
    id: '4',
    title: 'For Bigger Escape',
    thumbnailUrl: 'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description: ' Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman\'s escapes aren\'t quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.',
    subscriber: '25254545 Subscribers',
    isLive: false,
    genre: Catalog.Dramas,
    starrings: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Jeff Goldblum'],
    ratingScore: 7,
    ratingCount: 70,
    reviews,
    likeThis: ['5','6','1','2']
  },
  {
    id: '5',
    title: 'What We Do in the Shadows',
    thumbnailUrl: 'img/what-we-do-in-the-shadows.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Vlc Media Player',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org',
    subscriber: '25254545 Subscribers',
    isLive: true,
    genre: Catalog.Horror,
    starrings: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Jeff Goldblum'],
    ratingScore: 5,
    ratingCount: 1000,
    reviews,
    likeThis: ['2','3']
  },
  {
    id: '6',
    title: 'War of the Worlds',
    thumbnailUrl: 'img/war-of-the-worlds.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: 'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: false,
    genre: Catalog.KidsFamily,
    starrings: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan', 'Jeff Goldblum'],
    ratingScore: 4,
    ratingCount: 120,
    reviews,
    likeThis: ['2','3']
  },
  {
    id: '7',
    title: 'For Bigger Escape',
    thumbnailUrl: 'https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg',
    duration: '8:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'T-Series Regional',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    description: ' Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman\'s escapes aren\'t quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.',
    subscriber: '25254545 Subscribers',
    isLive: true,
    genre: Catalog.Romance,
    starrings: ['Bill Murray', 'Edward Norton', 'Jude Law'],
    ratingScore: 8.9,
    ratingCount: 230,
    reviews,
    likeThis: ['2','3']
  },
  {
    id: '8',
    title: 'The first Blender Open Movie from 2006',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
    duration: '12:18',
    uploadTime: 'May 9, 2011',
    views: '24,969,123',
    author: 'Blender Inc.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: 'Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series',
    subscriber: '25254545 Subscribers',
    isLive: false,
    genre: Catalog.Thrillers,
    starrings: ['Bill Murray', 'Edward Norton'],
    ratingScore: 8.9,
    ratingCount: 230,
    reviews,
    likeThis: ['2','3']
  }
];
