import * as React from 'react';

import { PropertiesItemsColumn } from '../properties-items-column/PropertiesItemsColumn.jsx';
import '../ItemSection.scss';
import './PropertiesItemSection.scss';


export const PropertiesItemSection = () => {
        return  (
            <section className="properties-container">
                <PropertiesItemsColumn
                imageUrl = "https://i.postimg.cc/Fzzf5VHJ/column-item-1.png"
                title="Nguồn gốc"
                subtitle = "Những hạt cà phê Arabica, Robusta đạt chất lượng theo tiêu chuẩn quốc tế."/>
                <PropertiesItemsColumn
                imageUrl = "https://i.postimg.cc/FFCdb8Tb/column-item-2.png"
                title="Chất lượng"
                subtitle = "Từng một hạt cà phê là cả một quá trình tập trung cao độ của nghệ nhân cà phê."/>
                <PropertiesItemsColumn
                imageUrl = "https://i.postimg.cc/nLxCcJLx/column-item-3.png"
                title="Các loại hạt"
                subtitle = "70% chất lượng tách cà phê đến từ nguồn gốc và chất lượng green bean."/>
                <PropertiesItemsColumn
                imageUrl = "https://i.postimg.cc/xCyGT5Qx/column-item-4.png"
                title="Pha chế"
                subtitle = "Những hạt cà phê được lột xác qua quá trình rang xay kỹ lưỡng và nghiêm ngặt."/>
            </section>
    );
}
