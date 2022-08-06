import { Injectable } from '@angular/core';
import { Data1, Data2 } from './data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  // 定义存储从后端拿到的数据



  // 定义基础访问地址
  private baseUrl = 'api/data1';
  
  constructor(
    private http: HttpClient
  ) { }


  // 获取数据
  getData1():Observable<Data1[]> {
    return this.http.get<Data1[]>(this.baseUrl);
  }

  // 计算销售总额
  count(data:any) {
    console.log('count',data)
    return '￥ ' + data.reduce((total: any, currentValue: { value: any; })=> {
      console.log('total:',total);
      console.log('current:',currentValue)
      // return total + currentValue.value
    }, 0)
  }

  // 饼图要展示的数据
  figure1Data(data:any, str:string) {
    console.log('bing:',data[0], str)
    // console.log(data.filter((item: { xField: string; }) => item['xField'] != str))
    // return data.filter((item: { xField: string; }) => item['xField'] != str)
  }

  getData(data: any) {
    console.log(data)
  }
  
}
