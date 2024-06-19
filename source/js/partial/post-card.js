document.addEventListener('DOMContentLoaded', function () {
  // 添加 post-card 点击事件监听器
  document.querySelectorAll('.post-card').forEach(function (postCard) {
    postCard.addEventListener('click', function () {
      const url = postCard.getAttribute('data-url');
      if (url && url !== window.location.pathname) {
        window.location.pathname = url;
      } else {
        console.log('🚀 ~ url is empty or not defined.');
      }
    });
  });
});
