document.addEventListener('DOMContentLoaded', function () {
  // 设置主题
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = userPrefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', 'light');

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      document.title = inactiveTitle || '👋🏻 我在这里！';
    } else {
      document.title = activeTitle || '🎉 欢迎回来！';
    }
  });
});
