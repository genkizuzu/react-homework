import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class DataRow extends React.Component {
  render() {
    var db = this.props.data,
        seq = db.seq,
    	status = db.status,
    	category = db.category,
    	title = db.title,
    	owner = db.owner,
    	priority = db.priority;

    return (
      <tr>
        <td>{seq}</td>
        <td>{status}</td>
        <td>{category}</td>
        <td>{title}</td>
        <td>{owner}</td>
        <td>{priority}</td>
      </tr>
    );
  }
}

class IssueTable extends React.Component {

  render() {
    var rows = [];
    this.props.data.forEach(function(data) {
      rows.push(<DataRow data={data} />);
    });
    return (
		<div className="container">
			<table className="issueTable">
				<thead>
					<tr>
						<th>Seq</th>
						<th>Status</th>
						<th>Category</th>
						<th>Title</th>
						<th>Owner</th>
						<th>Priority</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
    );
  }
}


var data = [
  {seq:1,status:"Open",category:"cat1",title:"title1",owner:"William",priority:1},
  {seq:2,status:"Open",category:"cat1",title:"title2",owner:"William",priority:2},
  {seq:3,status:"Close",category:"cat2",title:"title3",owner:"William",priority:3},
  {seq:4,status:"Pending",category:"cat3",title:"title4",owner:"William",priority:2},
  {seq:5,status:"Processing",category:"cat4",title:"title5",owner:"William",priority:1}
];
 
ReactDOM.render(
  <IssueTable data={data} />,
  document.getElementById('root')
);