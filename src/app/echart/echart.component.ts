import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { Data1 } from '../data';
import { DataService } from '../data.service'

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EchartComponent implements OnInit {

  // 保存服务器端返回的数据
  private data!:Data1[];
  // 饼图的数据
  private figure1 = [];
  // 柱状图和折线图的数据
  private figure2 = [];
  private line = [];


  // 总数据
  private totalData:any = [];
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit() {
    
    /*this.dataService.getData1().subscribe(res=> {
      // console.log(res)
      this.data = [...res];
      console.log('data:', this.data)
      // console.log('data:', this.data);
      this.data.forEach(item=>{
        this.totalData.push(item.data);
      })
      // console.log('totalData:', this.totalData);
      this.totalData.forEach((item: any)=>{
        // console.log(item.items)
        item.items = item.items.map((item: { data: any; value: any; }) => {return { name: item.data, value: item.value }})
      })
      console.log('转换后的数据:',this.totalData);
    });*/

    // console.log(this.dataService.figure1Data(this.totalData, '10月'));
    this.initFigure1();
    this.initFigure2();
    this.initLine();
  }

  initFigure1() {
    var chartDom1 = document.getElementById('figure1');
    var myChart1 = echarts.init(chartDom1!);
    // console.log(this.dataService.figure1Data(this.totalData, '10月'));

    // 配置
    var option1 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertial',
        right: 6,
        top: 'center',
        // left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'right'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: this.makeRandomData1()
          // data: this.dataService.getData(this.totalData)
          // data: this.totalData.filter((item: { items: string; })=> item.items != '10月')
        }
      ], 
      title: {
        text: '销售总额',
        subtext: this.count1(),
        x: 'center',
        y: 'center'
      }
    };

    
    // option1 && myChart1.setOption(option1)
    setInterval(()=>{
      myChart1.setOption({
        series: [{
          data: this.makeRandomData1()
          // data: this.totalData.filter((item: { items: string; })=> item.items != '10月')
          // data: this.dataService.figure1Data(this.totalData, '10月')
        }],
        title: {
          // subtext: this.dataService.count(this.dataService.figure1Data(this.totalData, '10月'))
          subtext: this.count1()
        }
      })
    }, 1000)

    option1 && myChart1.setOption(option1);
  }


  getData(data:any) {
    console.log('getData:',this.data)
  }


  // 计算销售总额
  count1() {
    return '￥ ' + this.makeRandomData1().reduce((total, currentValue)=> {
      // console.log(currentValue)
      return total + currentValue.value
    }, 0)
  }

  initFigure2() {
    var chartDom2 = document.getElementById('figure2');
    var myChart2 = echarts.init(chartDom2!);

    var option2 = {
      xAxis: {
        type: 'category',
        data: ['10月', '11月', '12月', '01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 30, 60, 120, 110, 50],
          type: 'bar'
        }
      ],
      title: {
        text: '销售额趋势'
      }
    };

    option2 && myChart2.setOption(option2);
  }

  initLine() {
    var chartDom3 = document.getElementById('line');
    var myChart3 = echarts.init(chartDom3!);

    var option3 = {
      title: {
        text: '图标标题'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['客流量', '支付笔数'],
        x: 'right'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          // saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10月', '11月', '12月', '01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '客流量',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210, 24, 56, 47, 243, 365]
        },
        {
          name: '支付笔数',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310, 234, 142, 354, 115, 534]
        }
      ]
    };


    option3 && myChart3.setOption(option3);
  }



  // 产生第一个随机数据
  makeRandomData1() {
    return [
      {
        value: Math.floor(Math.random()*50000),
        name: '电器'
      },
      {
        value: Math.floor(Math.random()*20000),
        name: '食'
      },
      {
        value: Math.floor(Math.random()*10000),
        name: '健'
      },
      {
        value: Math.floor(Math.random()*10000),
        name: '服'
      },
      {
        value: Math.floor(Math.random()*10000),
        name: '母'
      },
      {
        value: Math.floor(Math.random()*5000),
        name: 'other'
      }
    ]
  }
}
