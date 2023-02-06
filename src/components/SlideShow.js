import "./SlideShow.css";

export default function SlideShow() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-8">
        <div className="slider">
          <div className="slider-track">
            <div className="slide">
              <img src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161118/personal%20project/Products/Eminence_in_shadow_no.5_aj4ilb.jpg" />
            </div>

            <div className="slide">
              <img src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Demon_Slayer_tcboxo.webp" />
            </div>

            <div className="slide">
              <img src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Blue_lock_no.6_jdiiou.jpg" />
            </div>

            <div className="slide">
              <img src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/jujutsu_no.16_mzzhpa.jpg" />
            </div>

            <div className="slide">
              <img src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161114/personal%20project/Products/chainsaw_man_zuten2.jpg" />
            </div>

            <div className="slide">
              <img src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161115/personal%20project/Products/Overlord_no.16_bwzw5j.jpg" />
            </div>

            <div className="slide">
              <img src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161114/personal%20project/Products/Death_Note_no.6_s0hwwh.jpg" />
            </div>

            <div className="slide">
              <img src="https://res.cloudinary.com/dxz16dyxa/image/upload/v1675161114/personal%20project/Products/blue_lock_wac9cc.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
