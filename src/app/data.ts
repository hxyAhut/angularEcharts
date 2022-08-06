// 二维数据
export interface Data1 {
    code: number,
    msg: string,
    data: {
        // 日期
        xField: string,
        // 在该日期下的销售总额
        yField: number,
        items: [
            {
                // "家用电器"的销售额
                data: string,
                value: number
            },
            {
                // "食用酒水"的销售额
                data: string,
                value: number
            },
            {
                // "个护健康"的销售额
                data: string,
                value: number
            },
            {
                // "服饰箱包"的销售额
                data: string,
                value: number
            },
            {
                // "母婴产品"的销售额
                data: string,
                value: number
            },
            {
                // "其他"的销售额
                data: string,
                value: number
            }
        ]
    }
}


// 三维数据
export interface Data2 {
    code: number,
    msg: string,
    data: {
        xField: string,
        yField: string,
        seriesField: string,
        items: [
            {   
                date: string,
                type: string,
                value: number
            },
            {   
                date: string,
                type: string,
                value: number
            },
            {   
                date: string,
                type: string,
                value: number
            },
            {   
                date: string,
                type: string,
                value: number
            },
            {   
                date: string,
                type: string,
                value: number
            },
            {   
                date: string,
                type: string,
                value: number
            }
        ]
    }
}