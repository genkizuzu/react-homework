import React, { Component } from 'react';
import './App.css';

var data = [
    {"seq":"1","status":"Open","category":"cat1","title":"title1","owner":"William","priority":"P1"},
    {"seq":"1","status":"Open","category":"cat1","title":"title2","owner":"William","priority":"P2"},
    {"seq":"1","status":"Close","category":"cat2","title":"title3","owner":"William","priority":"P3"},
    {"seq":"1","status":"Pending","category":"cat3","title":"title4","owner":"William","priority":"P2"},
    {"seq":"1","status":"Processing","category":"cat4","title":"title5","owner":"William","priority":"P1"}
];
class Info extends React.Component {
  
  render() {
    return data[0]['seq'];
  }
}

class App extends Component {
  renderIssue(){
     return <Info />;
  }
  render() {
    return (
        <div className="App">
            <table className="issue-table">
                <tbody>
                <tr>
                    <td>Seq</td>
                    <td>Status</td>
                    <td>Category</td>
                    <td>Title</td>
                    <td>Owner</td>
                    <td>Priority</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
  }
}

export default App;
