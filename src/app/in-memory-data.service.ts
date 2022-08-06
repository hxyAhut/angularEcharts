import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Data1, Data2 } from './data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const data1 = [
       // 10月份销售总额
          { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '10月',
                yField: 0, 
                items: 
                [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 11月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '11月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*30000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 12月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '12月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*40000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*90000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 01月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '01月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*90000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 02月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '02月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 03月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '03月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 04月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '04月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 05月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '05月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 06月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '06月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 07月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '07月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
                
            } 
        },
        // 08月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '08月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        },
        // 09月份销售总额
        { 
            code:0, 
            msg: 'success', 
            data: {
                xField: '09月',
                yField: 0, 
                items: [
                    {
                      data: '家用电器',
                      value: Math.floor(Math.random()*50000)        
                    },
                    {
                      data: '食用酒水',
                      value: Math.floor(Math.random()*20000)        
                    },
                    {
                      data: '个护健康',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '服饰箱包',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '母婴产品',
                      value: Math.floor(Math.random()*10000)        
                    },
                    {
                      data: '其他',
                      value: Math.floor(Math.random()*5000)        
                    }
                ]
            } 
        }
    ];

    return {data1}
  }
}
