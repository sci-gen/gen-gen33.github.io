// スクロールトップボタンの処理
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
  
    if (scrollToTopButton) {
      // ボタンの表示・非表示の切り替え
      const toggleScrollToTopButton = () => {
        if (window.pageYOffset > 300) {
          scrollToTopButton.classList.add('visible');
        } else {
          scrollToTopButton.classList.remove('visible');
        }
      };
  
      // トップにスクロールする関数
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  
      // スクロールイベントリスナー
      window.addEventListener('scroll', toggleScrollToTopButton);
  
      // ボタンクリックイベント
      scrollToTopButton.addEventListener('click', scrollToTop);
  
      // ページロード時に初期状態を設定
      toggleScrollToTopButton();
    }
  });
