import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router/RouterMap';
import {hashHistory} from 'react-router';
import { Pagination, LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import './assests/css/style.css';

ReactDOM.render(<LocaleProvider locale={zhCN}>
            <RouterMap history={hashHistory} />
      </LocaleProvider>, document.getElementById('root'));