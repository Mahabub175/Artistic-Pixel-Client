const CustomSliderBullet = (
  activeBulletColor = "#5D04B2",
  bulletSize = "8px",
  inActiveBulletColor = "#999999",
  bulletGap = "5px"
) => {
  return {
    "--swiper-pagination-color": `${activeBulletColor}`,
    "--swiper-pagination-bullet-inactive-color": `${inActiveBulletColor}`,
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": `${bulletSize}`,
    "--swiper-pagination-bullet-horizontal-gap": `${bulletGap}`,
  };
};

export default CustomSliderBullet;
