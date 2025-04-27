"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      setLoading(true);
      setMessage('');
      
      const response = await fetch('/api/test');
      const data = await response.json();
      
      console.log("请求结果", data);
      
      // 根据业务状态码处理响应
      if (data.success) {
        // 业务成功 (code: 200)
        setMessage(`请求成功: ${data.message}`);
      } else {
        // 业务失败 (code: 400)
        setMessage(`业务错误: ${data.message}`);
      }
    } catch (error) {
      // 网络或解析错误
      console.error('请求失败:', error);
      setMessage(`网络错误: ${error instanceof Error ? error.message : '未知错误'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={handleClick} 
        disabled={loading}
      >
        {loading ? '请求中...' : '接口测试按钮'}
      </button>
      {message && <p>{message}</p>}
      <h1>Hello World</h1>
    </div>
  );
}
  