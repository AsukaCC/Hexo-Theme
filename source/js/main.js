$(document).ready(function () {
  // 设置主题
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = userPrefersDark ? 'dark' : 'light';
  $('html').attr('data-theme', theme);
});
