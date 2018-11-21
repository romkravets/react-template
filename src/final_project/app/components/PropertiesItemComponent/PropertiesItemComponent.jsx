import * as React from 'react';

import '../MainComponent/MainComponent.scss';
import './PropertiesItemComponent.scss';
import { PropertisItemsColumnComponent } from '../PropertisItemsColumnComponent/PropertisItemsColumnComponent.jsx';



export const PropertiesItemComponent = () => {
        return  (
        <section className="properties-container">
        <PropertisItemsColumnComponent
        imageUrl = "https://i.postimg.cc/Fzzf5VHJ/column-item-1.png"
        title="Nguồn gốc"
        subtitle = "Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế."/>
        <PropertisItemsColumnComponent
        imageUrl = "https://i.postimg.cc/FFCdb8Tb/column-item-2.png"
        title="Chất lượng"
        subtitle = "Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê."/>
        <PropertisItemsColumnComponent
        imageUrl = "https://i.postimg.cc/nLxCcJLx/column-item-3.png"
        title="Các loại hạt"
        subtitle = "70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean."/>
        <PropertisItemsColumnComponent
        imageUrl = "https://i.postimg.cc/xCyGT5Qx/column-item-4.png"
        title="Pha chế"
        subtitle = "Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt."/>
        </section>
    );
}
