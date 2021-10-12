import React, { useState } from 'react';
import { Card, Tag } from 'antd';
import {getTable} from '@/https/table'
const AboutPage = () => {
  const [count, setCount] = useState(0);
  const getTableHttp = async()=>{
    const res  = await getTable()
  }
  getTableHttp()
  return (
    <Card title="AboutPage">
      <Tag color="error" onClick={() => setCount(count + 1)}>
        click here：{count}
      </Tag>
    </Card>
  );
};
export default AboutPage;
