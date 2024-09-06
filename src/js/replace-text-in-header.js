import '../js/replaceme.min';

// Replace Text in Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace) {
  new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}
