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
                // 分类一的销售额
                name: string,
                value: number
            },
            {
                // 分类二的销售额
                name: string,
                value: number
            },
            {
                // 分类三的销售额
                name: string,
                value: number
            },
            {
                // 分类四的销售额
                name: string,
                value: number
            },
            {
                // 分类五的销售额
                name: string,
                value: number
            },
            {
                // 分类六的销售额
                name: string,
                value: number
            }
        ]
    }
}