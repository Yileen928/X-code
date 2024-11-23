   // backend/routes/code.js
   const express = require('express');
   const router = express.Router();
   const { getCodeSuggestions } = require('../services/dmxapiService'); // 引入DMXapi服务
   const { compileCode } = require('../services/compilerService');

   // 获取代码建议
   router.post('/suggestions', async (req, res) => {
       const { code } = req.body;
       try {
           const suggestions = await getCodeSuggestions(code);
           res.json(suggestions);
       } catch (error) {
           res.status(500).json({ error: 'Failed to fetch suggestions' });
       }
   });

   // 编译代码
   router.post('/compile', async (req, res) => {
       const { code } = req.body;
       try {
           const output = await compileCode(code);
           res.json({ output });
       } catch (error) {
           res.status(500).json({ error: 'Failed to compile code' });
       }
   });

   module.exports = router;