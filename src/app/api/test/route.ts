export async function GET() {
  try {
    // 发送请求到外部API
    const response = await fetch('http://127.0.0.1:8000/test123');
    
    // 检查HTTP状态是否正常
    if (!response.ok) {
      throw new Error(`HTTP错误: ${response.status}`);
    }
    
    // 解析响应数据
    const data = await response.json();
    
    if(data.code === 400){
      return Response.json({ 
        success: false, 
        code: 400,
        message: '业务处理失败', 
        data: data 
      });
    }
    // 正常业务成功情况
    return Response.json({ 
      success: true, 
      code: 200,
      message: '请求成功', 
      data: data 
    });
  } catch (error) {
    // HTTP或网络层错误处理
    console.error('API错误:', error);
    return Response.json({ 
      success: false, 
      code: 500,
      message: '请求失败', 
      error: error instanceof Error ? error.message : '未知错误' 
    }, { status: 500 });
  }
}