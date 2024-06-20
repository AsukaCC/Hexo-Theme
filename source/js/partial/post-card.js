document.addEventListener('DOMContentLoaded', function () {
  const postWarp = document.querySelector('.post-warp');
  if (postWarp) {
    postWarp.addEventListener('wheel', (e) => {
      e.preventDefault(); // 防止默认的垂直滚动
      postWarp.scrollLeft += e.deltaY; // 根据垂直滚动量调整水平滚动
    });
  }
  // 添加 post-card 点击事件监听器
  document.querySelectorAll('.post-card').forEach(function (postCard) {
    postCard.addEventListener('click', function () {
      const url = postCard.getAttribute('data-url');
      if (url && url !== window.location.pathname) {
        window.location.href = url;
      } else {
        console.log('🚀 ~ url is empty or not defined.');
      }
    });
  });
});
