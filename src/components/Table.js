import satData from "./satData";

const Table = ({ sat }) => {
  return (
    <div>
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data,id) =>
          <tr key = "id">
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{data.status}</td>
          <td>{data.operational ? "Active" : "Inactive"}</td>
          </tr>
        )}
        </tbody>
      </table>
      </div>
  )
};

export default Table;