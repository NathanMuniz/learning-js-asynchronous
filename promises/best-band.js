function bestRockBand(band) {
  return new Promise((resolve, reject) => {
    if (band == "Queen") {
      resolve({
        success: true,
        bandName: band,
        msg: band + ' is the best rock band ever!'
      })
    } else {
      reject({
        success: false,
        msg: 'Im not so sure!'
      })
    }
  })
}

function bestRockSong(response) {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve('Bahomiam Rhapsody by ' + response.bandName)
    } else {
      reject('Do you know Queen');
    }
  });

}


bestRockBand('Queen')
  .then(response => {
    console.log('Cheknig the anwser...');
    return bestRockSong(response)
  })
  .then(response => {
    console.log('Fiding the best song...');
    console.log(response)
  })
  .catch(err => {
    console.log(err.msg);
  })
