() => {
  document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;

    function hideHeader() {
      var dom = document.getElementById('header');
      if (dom) {
        dom.style.top = '-80px';
      }
    }

    function showHeader() {
      var dom = document.getElementById('header');
      if (dom) {
        dom.style.top = '0';
      }
    }

    // 检测设备类型
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // 移动设备触摸事件监听器
      let touchStartY = 0;
      let touchEndY = 0;

      window.addEventListener('touchstart', function (event) {
        touchStartY = event.touches[0].clientY;
      });

      window.addEventListener('touchmove', function (event) {
        touchEndY = event.touches[0].clientY;
      });

      window.addEventListener('touchend', function () {
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
      window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

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
    document.querySelectorAll('.menu-item').forEach(function (item) {
      item.addEventListener('click', function () {
        const url = item.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      });
    });
  });
};
