
  $(document).ready(function () {
    $(".edu-card").hover(
      function () {
        // On hover (mouse enter)
        $(this).css({
          "transform": "scale(1.05)",
          "box-shadow": "0 8px 20px rgba(0,0,0,0.2)",
          "transition": "all 0.3s ease"
        });
      },
      function () {
        // On hover out (mouse leave)
        $(this).css({
          "transform": "scale(1)",
          "box-shadow": "0 0 8px rgba(0,0,0,0.1)"
        });
      }
    );
  });

