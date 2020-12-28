import React from "react";
import { Link } from "react-router-dom";

function Party() {
  return (
    <>
      <div className="container-fluid page-heading about-heading">
        <div className="heading-content">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="active"> About</li>
          </ol>
        </div>
      </div>
      <div className="container about-main">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 txt-col">
            {/* <h2>Chúng tôi là ai?</h2> */}
            <p ><strong >
            TRỐNG ĐỒNG PALACE KHẲNG ĐỊNH SỬ DỤNG THỰC PHẨM SẠCH TRONG CHẾ BIẾN TIỆC </strong>
            </p>
            <p>
            Với cơ sở đầu tiên thành lập năm 2009, tới nay, Trống Đồng Palace ghi dấu với 10 trung tâm tổ chức sự kiện,
             tiệc cưới tọa lạc tại những vị trí đắc địa trong trung tâm thành phố. Trống Đồng Palace còn khiến khách hàng
              trầm trồ bởi thực đơn cưới đa dạng,
              đầy đặn, phong phú, từ Á sang Âu. Với kinh nghiệm từ những đầu bếp xuất sắc, cùng việc thử món trước, 
            Trống Đồng Palace đã xây dựng lên những món ăn tiệc cưới hoàn hảo nhất phù hợp theo thời tiết, theo mùa, theo đặc thù của từng vùng.
            </p>
            <p>
            Đặc biệt Trống Đồng Palace hiểu rằng trong thực đơn ăn uống, an toàn vệ sinh thực phẩm là yếu tố quan trọng hàng đầu.
             Trống Đồng Palace cam kết sử dụng 100% thực phẩm (rau, hoa quả, bò, gà, chim, hải sản….. ) sạch, an toàn, có nguồn
              gốc xuất sứ rõ ràng để chế biến món ăn. Đồng thời chúng tôi tuân thủ cam kết đồng hành với người tiêu dùng trong 
              cuộc chiến chống thực phẩm bẩn, thực phẩm ôi thiu. Trống Đồng Palace sẽ áp dụng hình thức xử lý nghiêm khắc với 
              những đơn vị, nhà cung cấp nếu không đạt tiêu chuẩn về chất lượng, thu hồi hay tiêu hủy toàn bộ hàng hóa. Bên 
              cạnh đó, các biện pháp tăng cường kiểm soát chặt chẽ tiêu chuẩn đầu vào cũng được áp dụng một cách nghiêm túc 
              nhất với tiêu chí đặt sự an toàn và sức khỏe của người tiêu dùng lên hàng đầu.
            </p>
            {/* <p>
              MIN là cách bán các sản phẩm làm đẹp theo từng box (hộp). Các sản
              phẩm ở trong box này thường là từ 3, 5 đến nhiều sản phẩm trở lên
              và thường theo cả set không tách rời. Nhiều khách hàng thường hỏi
              tại sao không bán riêng lẻ từng cái vì họ thích sử dụng cái này
              hay cái kia. Thực ra, để tạo ra một box sản phẩm đến tay khách
              hàng không hề dễ dàng như mọi người nghĩ. Vì các sản phẩm này
              thường được kiểm nghiệm chất lượng trước bởi các chuyên gia,
              blogger nổi tiếng trong lĩnh vực làm đẹp. Họ là những người đã sử
              dụng qua sản phẩm, biết đánh giá sản phẩm theo từng loại da và có
              thể kết hợp nhiều thương hiệu khác nhau nhằm đem một box hoàn hảo
              với mức giá phù hợp.
            </p> */}
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 img-col">
            <img src="img/about-1.jpg" className="img-responsive" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8 pull-right txt-col">
            <h2>Chúng tôi có gì?</h2>
            <h3>
              <i className="fa fa-long-arrow-right" /> Sản phẩm phong phú
            </h3>
            <p>
              Khách hàng không chỉ được trải nghiệm các sản phẩm làm đẹp mới và
              chất lượng nhất trong và ngoài nước. Các blogger còn là những
              người sẽ liên tục cập nhật tạo ra các box mới độc đáo, sáng tạo và
              tốt nhất để mang đến cho khách hàng nhiều sự lựa chọn khác nhau
            </p>
            <p>
              Chúng tôi hi vọng mỗi cửa hàng của MIN đều sẽ là một là một không
              gian đủ sáng tạo dành cho ai yêu sự độc đáo, đủ ấm áp thân quen
              với những người đôi chút hoài cổ, đủ phù hợp để mỗi khách hàng đến
              với MIN đều có thể tìm được một vài món đồ mỹ phẩm cho bản thân,
              gia đình, bạn bè.
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 pull-left img-col">
            <img src="img/about_2.jpeg" className="img-responsive" />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-8 txt-col">
            <h2>Chúng tôi làm gì?</h2>
            <h3>
              <i className="fa fa-long-arrow-right" /> Mỹ phẩm và trang điểm
            </h3>
            <p>
              Box còn khác các sản phẩm bán riêng lẻ ở chỗ, bạn có cơ hội tìm
              hiểu và sử dụng được nhiều thương hiệu khác nhau từ khắp nơi trên
              thế giới. Việc kết hợp các sản phẩm cũng giảm đi giá thành đáng kể
              so với việc mua riêng lẻ. Trong mỗi box, bạn còn được nhận thêm
              các sản phẩm simple (hoàn toàn miễn phí) mới nhất để dùng thử.
            </p>
            <p>
              Tại MIN, bạn còn được tư vấn hoàn toàn miễn phí bởi các chuyên gia
              trong lĩnh vực làm đẹp. Với giao diện dễ nhìn, bắt mắt cùng các
              sản phẩm chất lượng. MIN là địa chỉ yêu thích, thường xuyên của
              các chị em phụ nữ với mong muốn mình đẹp hơn lên mỗi ngày.
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 img-col">
            <img src="img/about_3.jpeg" className="img-responsive" />
          </div>
        </div>
      </div>
      {/* Đặc điểm nổi bật */}
      <div className="container commitment">
        <div className="section-title">
          <h2>min cam kết</h2>
          <p>Thêm một số điều tuyệt vời nho nhỏ</p>
        </div>
        <div className="row">
          <div className="icon-box col-xs-6 col-md-3">
            <div className="icon truck">
              <i className="fa fa-truck" />
              <i className="fa fa-truck" />
            </div>
            <div className="icon-content">
              <h3>Giao hàng nhanh</h3>
              <p>Cam kết giao hàng trong vòng 24 giờ.</p>
            </div>
          </div>
          <div className="icon-box col-xs-6 col-md-3">
            <div className="icon card">
              <i className="fa fa-credit-card" />
            </div>
            <div className="icon-content">
              <h3>Thanh toán dễ dàng</h3>
              <p>Hỗ trợ đa dạng các công cụ thanh toán trực tuyến</p>
            </div>
          </div>
          <div className="icon-box col-xs-6 col-md-3">
            <div className="icon guarantee">
              <img src="img/guarantee1.png" />
            </div>
            <div className="icon-content">
              <h3>Bảo hành dài hạn</h3>
              <p>Bảo hành từ 12 đến 24 tháng tùy sản phẩm.</p>
            </div>
          </div>
          <div className="icon-box col-xs-6 col-md-3">
            <div className="icon gift">
              <i className="fa fa-gift" />
            </div>
            <div className="icon-content">
              <h3>Ưu đãi thành viên</h3>
              <p>Quà tặng, giảm giá cho thành viên.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Party;
