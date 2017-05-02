
console.log("Generating a four word identifier.")

var words = [ ];
words.push('aaa');
words.push('aha');
words.push('aim');
words.push('ake');
words.push('ale');
words.push('all');
words.push('alp');
words.push('alt');
words.push('amp');
words.push('ani');
words.push('ant');
words.push('any');
words.push('ape');
words.push('app');
words.push('apt');
words.push('arc');
words.push('arf');
words.push('ark');
words.push('art');
words.push('ash');
words.push('ask');
words.push('asp');
words.push('ate');
words.push('awl');
words.push('axe');
words.push('bag');
words.push('bam');
words.push('bap');
words.push('bat');
words.push('bay');
words.push('bed');
words.push('bet');
words.push('bib');
words.push('bid');
words.push('big');
words.push('bio');
words.push('bit');
words.push('biz');
words.push('bog');
words.push('boo');
words.push('bop');
words.push('bot');
words.push('bow');
words.push('box');
words.push('boy');
words.push('bro');
words.push('brr');
words.push('bub');
words.push('bud');
words.push('bug');
words.push('bun');
words.push('bus');
words.push('but');
words.push('buy');
words.push('bye');
words.push('cab');
words.push('cad');
words.push('can');
words.push('cap');
words.push('car');
words.push('caw');
words.push('cay');
words.push('cob');
words.push('cod');
words.push('cog');
words.push('cop');
words.push('cow');
words.push('coy');
words.push('cry');
words.push('cub');
words.push('cud');
words.push('cue');
words.push('cup');
words.push('cut');
words.push('dab');
words.push('dad');
words.push('dah');
words.push('dak');
words.push('dan');
words.push('dap');
words.push('dat');
words.push('day');
words.push('dee');
words.push('den');
words.push('dew');
words.push('dex');
words.push('dib');
words.push('dif');
words.push('dip');
words.push('dir');
words.push('dis');
words.push('dit');
words.push('div');
words.push('doc');
words.push('doe');
words.push('doh');
words.push('dol');
words.push('don');
words.push('doo');
words.push('dor');
words.push('dos');
words.push('dot');
words.push('dow');
words.push('dry');
words.push('dub');
words.push('dud');
words.push('due');
words.push('dug');
words.push('duh');
words.push('dui');
words.push('dun');
words.push('duo');
words.push('dup');
words.push('dye');
words.push('ear');
words.push('eat');
words.push('ebb');
words.push('eek');
words.push('eel');
words.push('eft');
words.push('egg');
words.push('elf');
words.push('elk');
words.push('elm');
words.push('emo');
words.push('ems');
words.push('emu');
words.push('end');
words.push('eng');
words.push('ent');
words.push('eon');
words.push('era');
words.push('ere');
words.push('err');
words.push('esp');
words.push('eta');
words.push('eve');
words.push('eye');
words.push('fab');
words.push('fad');
words.push('fan');
words.push('fat');
words.push('fax');
words.push('fed');
words.push('feh');
words.push('fen');
words.push('fes');
words.push('fet');
words.push('few');
words.push('fez');
words.push('fib');
words.push('fie');
words.push('fig');
words.push('fil');
words.push('fit');
words.push('fix');
words.push('flu');
words.push('fly');
words.push('fob');
words.push('foe');
words.push('fog');
words.push('for');
words.push('fox');
words.push('fro');
words.push('fry');
words.push('fub');
words.push('fud');
words.push('fug');
words.push('fun');
words.push('fur');
words.push('gab');
words.push('gad');
words.push('gal');
words.push('gan');
words.push('gap');
words.push('gar');
words.push('gas');
words.push('gat');
words.push('gaw');
words.push('ged');
words.push('gee');
words.push('gel');
words.push('gem');
words.push('gen');
words.push('get');
words.push('gig');
words.push('gin');
words.push('gip');
words.push('git');
words.push('gnu');
words.push('gog');
words.push('gon');
words.push('goo');
words.push('got');
words.push('gox');
words.push('gul');
words.push('gum');
words.push('guv');
words.push('gym');
words.push('had');
words.push('hag');
words.push('hah');
words.push('ham');
words.push('hap');
words.push('has');
words.push('hat');
words.push('haw');
words.push('hay');
words.push('hem');
words.push('het');
words.push('hew');
words.push('hex');
words.push('hey');
words.push('hic');
words.push('hid');
words.push('him');
words.push('hip');
words.push('his');
words.push('hit');
words.push('hob');
words.push('hoe');
words.push('hop');
words.push('hot');
words.push('how');
words.push('hub');
words.push('hue');
words.push('hug');
words.push('hun');
words.push('hup');
words.push('hut');
words.push('hyp');
words.push('ice');
words.push('ick');
words.push('icy');
words.push('igg');
words.push('ill');
words.push('imp');
words.push('ink');
words.push('inn');
words.push('int');
words.push('ion');
words.push('ire');
words.push('irk');
words.push('ish');
words.push('ivy');
words.push('jab');
words.push('jag');
words.push('jam');
words.push('jar');
words.push('jaw');
words.push('jay');
words.push('jib');
words.push('jig');
words.push('jin');
words.push('job');
words.push('joe');
words.push('zzz');

function random() {
    return Math.floor(Math.random() * 255)
}

for (var i = 0; i < 10; i++) {
  console.log(words[random()] + "-" + words[random()] + "-" + words[random()] + "-" + words[random()])
}

powers = [ 255, 255 * 255, 255 * 255 * 255, 255 * 255 * 255 * 255 ];

// X = random() * random() * random() * random()
// console.log(X)

final = []

for (var X = 0; X < 25; X++) {
  Y = X
  for (var i = 3; i >= 0; i--) {
    multiplier = Math.floor(Y / powers[i])
    if (multiplier > 1) {
      final[3-i] = words[multiplier]
      Y = Y - (multiplier * powers[i])
    } else if (i == 0 && Y < 256) {
      final[3-i] = words[Y]
    } else {
      final[3-i] = words[0]
    }
  }
  console.log(Y + " ==> " + final.join("-"))
}
