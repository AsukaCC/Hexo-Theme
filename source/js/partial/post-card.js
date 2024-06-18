$(document).ready(function () {
  // 添加 post-card 点击事件监听器
  $('.post-card').on('click', function () {
    const url = $(this).data('url');
    console.log('🚀 ~ url:', url);

    window.location.href = url;
  });
});
