function getRandomNumber (min, max) {
  let randomResult;
  if (min >= 0 && max >= 0) {
    randomResult = Math.random() * (max - min + 1) + min;
  } else {
    return NaN;
  }
  return Math.round(randomResult);
}

getRandomNumber(1, 5);

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('Кекс', 20);


const PHOTO_COUNT = 25;

const PHOTO_DESCRIPTION = [
  'Красивое',
  'Очень красивое',
  'Странное',
  'Ух ты!',
  'Ого!',
  'Хм...',
  'Ну как-то так',
  'Вон чего!',
  'Привет!',
  'Класс',
  'Жду лайков!',
  'Можно не лайкать',
  'Неплохо',
  'Гляньте-ка!',
  'Мяу!',
  'Не мяу совсем:(',
  'Котолайк',
  'С каждого котятка по лайку',
  'Эм...',
  'Вот так вот!',
  '*не успел придумать описание, сорян*',
  'ВАУ!',
  'Выше среднего',
  'Нраица',
  'Ну... такое',
];

function generatePhoto() {
  const photosArray = [];
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photosArray.push({
      id:i + 1,
      url: `photos/${i + 1}.jpg`,
      description: PHOTO_DESCRIPTION[getRandomNumber(0, PHOTO_DESCRIPTION.length - 1)],
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200)
    });
  }
  return photosArray;
}

generatePhoto();
