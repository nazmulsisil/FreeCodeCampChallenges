import { mine1 } from './modules/FCC/mine1';
import { mine2 } from './modules/FCC/mine2';
import { advanced } from './modules/FCC/advanced';
import { intermediate } from './modules/FCC/intermediate';
import { basic } from './modules/FCC/basic';
import { otherUser } from './modules/FCC/otherUser';
import { r } from './globalHelperFunctions';

const paragraph =
  'Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise. Parish so enable innate in formed missed. Hand two was eat busy fail. Stand smart grave would in so. Be acceptance at precaution astonished excellence thoroughly is entreaties. Who decisively attachment has dispatched. Fruit defer in party me built under first. Forbade him but savings sending ham general. So play do in near park that pain. As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity. Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so terminated no in contrasted it. Advantages entreaties mr he apartments do. Limits far yet turned highly repair parish talked six. Draw fond rank form nor the day eat. Was certainty remaining engrossed applauded sir how discovery. Settled opinion how enjoyed greater joy adapted too shy. Now properly surprise expenses interest nor replying she she. Bore tall nay many many time yet less. Doubtful for answered one fat indulged margaret sir shutters together. Ladies so in wholly around whence in at. Warmth he up giving oppose if. Impossible is dissimilar entreaties oh on terminated. Earnest studied article country ten respect showing had. But required offering him elegance son improved informed. As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant expense. Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance up. Remain lively hardly needed at do by. Two you fat downs fanny three. True mr gone most at. Dare as name just when with it body. Travelling inquietude she increasing off impossible the. Cottage be noisier looking to we promise on. Disposal to kindness appetite diverted learning of on raptures. Betrayed any may returned now dashwood formerly. Balls way delay shy boy man views. No so instrument discretion unsatiable to in. Saw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected its mrs literature. Behaviour new set existence dashwoods. It satisfied to mr commanded consisted disposing engrossed. Tall snug do of till on easy. Form not calm new fail. Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off. Sex and neglected principle ask rapturous consulted. Object remark lively all did feebly excuse our wooded. Old her object chatty regard vulgar missed. Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing an insensible motionless if introduced ye. Now give nor both come near many late. ';

// Returns an array of 1000 sub-arrays which consists of 5 numbers between 10-99
const arrayOfNumbersArrays = numOfLoops => {
  const finalArr = [];
  for (let i = 0; i < numOfLoops; i++) {
    const tempArr = [];
    for (let j = 0; j < 5; j++) {
      tempArr.push(r(99, 10));
    }
    finalArr.push(tempArr);
  }
  return finalArr;
};
const arrayOfAlphabets = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const data = {
  times: 10, // if times is equal to 1, then you will see 1 run and you'll get console log
  duration: 1500,
  arrayOfNumbersArrays: arrayOfNumbersArrays(1000),
  paragraph,
  arrayOfAlphabets,
  falsyValue: [7, 'ate', '', false, 9]
};

const functionDescriptions = [
  otherUser,
  mine1
  // intermediate,
  // basic
  // mine2
  // advanced
];

function stackCall(funcs) {
  const revFuncs = [...funcs].reverse();
  const f = [...funcs, ...revFuncs];
  const resultMap = new Map();
  const resultArr = [];

  f.forEach(curF => {
    const timeTaken = curF(data);
    if (resultMap.get(curF.name) === undefined) {
      resultMap.set(curF.name, timeTaken);
    } else {
      resultMap.set(curF.name, timeTaken + resultMap.get(curF.name));
    }
  });

  const best = Math.max(...resultMap.values());

  for (const [key, val] of resultMap) {
    resultMap.set(key, (best / val).toFixed(2));
  }

  const sortedArr = [...resultMap.entries()].sort((a, b) => {
    return +a[1] > +b[1] ? 1 : -1;
  });

  sortedArr.forEach(c => {
    const first = c[0];
    const second = c[1];

    resultArr.push([second, first]);
  });

  console.log(resultArr);
}

const start = new Date();
stackCall(functionDescriptions);
console.log((new Date() - start) / 1000);

/////////////// TODO: START Practice /////////////////////////
