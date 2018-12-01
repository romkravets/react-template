import * as React from 'react';

import { TabPanel, Tabs } from './Tabs.jsx';
import './TabsComponent.scss';

export const TabApp = () => {
  return (
    <div className="">
      <Tabs>
        <TabPanel
        title="1"
        price= "285.000"
        label = "Giftset Cà phê phin Việt Nam"
        text = "Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn."
        pictureleft = { <img src="https://i.postimg.cc/VkbSbr8d/coffee-bean.png" alt="" /> }
        pictureright= { <img src="https://i.postimg.cc/FR6GGk7w/mountains.png" alt="" /> }
        picture = { <img className="tabs-composition__img_size"  src="https://i.postimg.cc/j5D69kbj/tabs.png" alt="" /> }
        mountain = "700 - 800"
        component = "CHI TIẾT" />

        

        <TabPanel 
        title="2"
        price= "160.000"
        label = "Combo Revo Đậm Đà"
        text = "70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean. Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê."
        pictureleft = { <img src="https://i.postimg.cc/VkbSbr8d/coffee-bean.png" alt="" /> }
        pictureright= { <img src="https://i.postimg.cc/FR6GGk7w/mountains.png" alt="" /> }
        picture = { <img className="tabs-composition__img_size"  src="https://i.postimg.cc/j5D69kbj/tabs.png" alt="" /> }
        mountain = "600 - 700"
        component = "CHI TIẾT" />
        <TabPanel 
        title="3"
        price= "156.000"
        label = "REVO Đậm Đà"
        text = "Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế. Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt."
        pictureleft = { <img src="https://i.postimg.cc/VkbSbr8d/coffee-bean.png" alt="" /> }
        pictureright= { <img src="https://i.postimg.cc/FR6GGk7w/mountains.png" alt="" /> }
        picture = { <img className="tabs-composition__img_size"  src="https://i.postimg.cc/j5D69kbj/tabs.png" alt="" /> }
        mountain = "500 - 600"
        component = "CHI TIẾT"/>
      </Tabs>
    </div>
  );
}