import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div class="container"> 
                  
                  <div class="row" id="content"> 
               
                    <div id="formulaire" class="col-md-6"> 
                                   
                       <h2>Premier essaie avec react</h2>
                                   
                      <form>
                        <div class="form-group row">
                          <label for="inputPassword3" class="col-sm-2 col-form-label">Nom</label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control" id="inputPassword3" placeholder="Name"></input>
                            </div>
                        </div>
                        <div class="form-group row">
                          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-8">
                          <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
                        </div>
                     </div>
                    <div class="form-group row">
                      <label for="inputPassword3" class="col-sm-2 col-form-label">Mot de passe</label>
                      <div class="col-sm-8">
                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password"></input>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Se connecter</button>
                      </div>
                    </div>
                      </form>
                    </div>
                  </div>
                </div>
    </div>
  );
}

export default App;
