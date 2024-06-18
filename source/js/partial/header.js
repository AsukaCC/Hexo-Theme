$(document).ready(function () {
  let lastScrollTop = 0;

  function hideHeader() {
    $('#header').css({
      top: '-80px', // 假设header的高度为80px
      transition: 'top 0.3s ease',
    });
  }

  function showHeader() {
    $('#header').css({
      top: '0',
      transition: 'top 0.3s ease',
    });
  }

  // 检测设备类型
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // 移动设备触摸事件监听器
    let touchStartY = 0;
    let touchEndY = 0;

    $(window).on('touchstart', function (event) {
      touchStartY = event.originalEvent.touches[0].clientY;
    });

    $(window).on('touchmove', function (event) {
      touchEndY = event.originalEvent.touches[0].clientY;
    });

    $(window).on('touchend', function () {
      if (touchStartY > touchEndY) {
        console.log('下滑');
        hideHeader();
      } else {
        console.log('上滑');
        showHeader();
      }
    });
  } else {
    // 桌面设备滚动事件监听器
    $(window).on('scroll', function () {
      let scrollTop = $(this).scrollTop();

      if (scrollTop > lastScrollTop) {
        console.log('下滑');
        hideHeader();
      } else {
        console.log('上滑');
        showHeader();
      }
      lastScrollTop = scrollTop;
    });
  }

  // 添加 menu-item 点击事件监听器
  $('.menu-item').on('click', function () {
    const url = $(this).data('url');
    window.location.href = url;
  });
});
