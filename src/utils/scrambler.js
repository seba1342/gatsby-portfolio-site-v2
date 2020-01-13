export function getScrambleString(length) {
  const priv = {};

  priv.consonants = [
    `b`,
    `c`,
    `d`,
    `f`,
    `g`,
    `h`,
    `j`,
    `k`,
    `l`,
    `m`,
    `n`,
    `p`,
    `r`,
    `s`,
    `t`,
    `v`,
    `w`
  ];

  priv.vowels = [`a`, `e`, `i`, `o`, `u`, ` `];
  priv.result = ``;

  priv.getLetter = datasource => {
    const key = Math.floor(Math.random() * datasource.length);
    return datasource[key];
  };

  let loopStat = 0;
  if (!length) {
    return ``;
  }

  while (loopStat < length) {
    if (loopStat === null || loopStat % 2) {
      priv.result += priv.getLetter(priv.vowels);
    } else {
      priv.result += priv.getLetter(priv.consonants);
    }

    loopStat += 1;
  }

  return priv.result;
}

export function getScrambleInterval(ref, to, time) {
  if (!ref || !ref.current) {
    return null;
  }

  if (!time) {
    time = 20;
  }

  let lengthNext = to.length;
  let count = 0;
  let tempText = ``;

  if (to === ``) {
    lengthNext = 5;
    tempText = `.`;
  }

  const scrambleInterval = setInterval(() => {
    if (!ref || !ref.current) {
      return;
    }

    tempText = getScrambleString(Math.round(lengthNext));

    ref.current.innerHTML = tempText;

    count += 1;

    if (count > time) {
      ref.current.innerHTML = to;

      clearInterval(scrambleInterval);
    }
  }, 50);

  return scrambleInterval;
}

export function scrambleRef(ref, text, duration) {
  if (!ref || !ref.current) {
    return null;
  }

  if (!duration) {
    duration = 3;
  }

  return getScrambleInterval(ref, text, duration);
}
