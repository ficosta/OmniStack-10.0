import React from 'react';

import './global.css'
import './App.css'

function App() {
 
  return (
<div id="app">
  <aside> 
    <strong>Cadastrar</strong>
    <form>
      <label htmlFor="username_github">Usuário do Github</label>
      <input name="github_username" id="username_github" required/>
    </form>
  </aside>
  <main>

  </main>
</div>

  );
}

export default App;
