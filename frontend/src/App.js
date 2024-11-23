   // src/App.js
   import React from 'react';
   import CodeEditorWithSuggestions from './components/CodeEditorWithSuggestions';

   const App = () => {
       return (
           <div>
               <h1>在线代码平台</h1>
               <CodeEditorWithSuggestions />
           </div>
       );
   };

   export default App;