import './App.css';

import { CloseOutlined  } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import {useEffect} from "react";
import {Form} from "./Form/Form";
const tg = window.Telegram.WebApp
function App() {
    useEffect(() => {
        tg.ready()
    },[])

    const onClose = () => {
        tg.close()
    }
  return (
    <div className="App">
        <Button type="primary" icon={<CloseOutlined />} onClick={onClose}>
        </Button>
        <Form/>
    </div>
  );
}

export default App;
