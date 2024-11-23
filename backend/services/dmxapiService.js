   // backend/services/dmxapiService.js
   const axios = require('axios');

   const DMXAPI_BASE_URL = 'https://www.DMXapi.com/v1/'; // 替换为DMXapi的实际API端点
   const API_KEY = 'sk-DXOA1E3P9K8MvU26C9JSiE0sHplXgKn0b2ztikWWzkGA2Tcm'; // 替换为你的DMXapi API密钥

   const getCodeSuggestions = async (code) => {
       try {
           const response = await axios.post(DMXAPI_BASE_URL, {
               prompt: code,
               // 其他参数可以根据DMXapi的API文档进行设置
           }, {
               headers: {
                   'Authorization': `Bearer ${API_KEY}`,
                   'Content-Type': 'application/json'
               }
           });
           return response.data; // 返回AI的建议
       } catch (error) {
           console.error('Error fetching suggestions from DMXapi:', error);
           throw error;
       }
   };

   module.exports = { getCodeSuggestions };