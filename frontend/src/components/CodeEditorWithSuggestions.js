   // src/components/CodeEditorWithSuggestions.js
   import React, { useState } from 'react';
   import { MonacoEditor } from '@monaco-editor/react';
   import axios from 'axios';
   import { Editor } from '@monaco-editor/react'; 

   const CodeEditorWithSuggestions = () => {
       const [code, setCode] = useState('');
       const [suggestions, setSuggestions] = useState('');
       const [output, setOutput] = useState('');

       const fetchSuggestions = async () => {
           try {
               const response = await axios.post('http://localhost:5000/api/code/suggestions', { code });
               setSuggestions(response.data);
           } catch (error) {
               console.error('Error fetching suggestions:', error);
           }
       };

       const compileCode = async () => {
           try {
               const response = await axios.post('http://localhost:5000/api/code/compile', { code });
               setOutput(response.data.output);
           } catch (error) {
               console.error('Error compiling code:', error);
           }
       };

       return (
           <div style={{ display: 'flex', height: '100vh' }}>
               <div style={{ flex: 1, padding: '10px' }}>
                   <Editor
                       height="100%"
                       language="javascript" // 可以根据需要更改语言
                       value={code}
                       onChange={(value) => setCode(value)}
                       options={{ selectOnLineNumbers: true }}
                   />
                   <button onClick={fetchSuggestions}>获取建议</button>
                   <button onClick={compileCode}>编译代码</button>
                   <div>
                       <h3>输出结果:</h3>
                       <pre>{output}</pre>
                   </div>
               </div>
               <div style={{ width: '300px', padding: '10px', borderLeft: '1px solid #ccc' }}>
                   <h3>AI建议:</h3>
                   <pre>{suggestions}</pre>
               </div>
           </div>
       );
   };

   export default CodeEditorWithSuggestions;