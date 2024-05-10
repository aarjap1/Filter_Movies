import React from "react";
import Papa from "papaparse";
import csvFile from "./data.csv";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headers: [],
    };
  }

  componentDidMount() {
    this.fetchCSV();
  }

  fetchCSV = () => {
    Papa.parse(csvFile, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        this.setState({
          data: results.data,
          headers: results.meta.fields,
        });
      },
    });
  };

  render() {
    const { data, headers } = this.state;
    return (
      <div>
        <h1>CSV Data</h1>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
