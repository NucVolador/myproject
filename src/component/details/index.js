import React,{Component} from 'react';
import {Table} from 'antd';

import './style.css'

class Detail extends Component{

      render(){
            const columns = [
                  {
                        title: '扶贫行动类别',
                        width: 80,
                        dataIndex: 'key',
                        key: 'fupin',
                        fixed: 'left' ,
                        align: 'center',
                        filters: [{
                              text: '名称为1的项目',
                              value: '1',
                        }, {
                              text: '名称为2的项目',
                              value: '2',
                        }],
                        filterMultiple: false,
                        onFilter: (value, record) => {
                              return record.key === value;
                        }
                  },
                  { title: '序号', width: 70, dataIndex: 'key', key: 'xuhao', fixed: 'left',align: 'center' },
                  {
                        title:'基本情况',
                        children: [
                            { title: '项目名称', width: 100, dataIndex: 'name', key: 'projectname',align: 'center' },
                              { title: '建设性质', width: 100, dataIndex: 'age', key: 'nature',align: 'center'},
                              { title: '建设类别', dataIndex: 'address', key: 'category', width: 150,align: 'center' },
                              { title: '建设地址', dataIndex: 'address', key: 'address', width: 150,align: 'center' },
                              { title: '建设规模', dataIndex: 'address', key: 'scale', width: 150 ,align: 'center'},
                              { title: '建设周期', dataIndex: 'address', key: 'cycle', width: 150 ,align: 'center'}
                        ]
                  },
                  { title: '项目补助标准（元）', dataIndex: 'address', key: 'capital', width: 150 ,align: 'center'},
                  { title: '主要建设内容', dataIndex: 'address', key: 'content', width: 150 ,align: 'center'},
                  {
                        title: '扶持对象',
                        children: [
                              { title: '总人数', dataIndex: 'address', key: 'headnum', width: 150 ,align: 'center'},
                              { title: '建档立卡贫困户人数', dataIndex: 'address', key: 'pinkunnum', width: 150 ,align: 'center'},
                              { title: '其他农户', dataIndex: 'address', key: 'othernum', width: 150 ,align: 'center'}
                        ]
                  },
                  { title: '新增经济效益和扶贫效益(元)', dataIndex: 'address', key: 'newcapital', width: 150 ,align: 'center'},
                  { title: '项目主管单位', dataIndex: 'address', key: 'maincompany',width:150 ,align: 'center'},
                  { title: '项目实施单位', dataIndex: 'address', key: 'carrycompany',width:150 ,align: 'center'},
                  { title: '备注', dataIndex: 'address', key: 'remark',width:150 ,align: 'center'}
            ];
            const data = [];
            for (let i = 0; i < 100; i++) {
                  data.push({
                        key: `${i}`,
                        name: `Edrward ${i}`,
                        age: 32,
                        address: `London Park no. ${i}`,
                  });
            }
            return (
                <Table columns={columns}  dataSource={data} scroll={{ x: 2300, y: 500 }} bordered />
            );
      }
}

export default Detail;